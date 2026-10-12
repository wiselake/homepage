import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_TYPES, CONTACT_TYPE_LABELS_KO, type ContactType } from "@/lib/contact";

/*
 * Contact form → email via Resend.
 *
 * Env:
 *   RESEND_API_KEY  required
 *   CONTACT_TO      recipient, default wiselake@wiselake.ai
 *   CONTACT_FROM    sender, default the Resend test sender. Verify wiselake.ai in Resend
 *                   and set e.g. "WiseLake Homepage <noreply@wiselake.ai>" — the test sender
 *                   can only deliver to the Resend account owner's own address.
 *
 * Spam handling: honeypot field, minimum fill time, and a best-effort per-instance
 * rate limit (serverless instances do not share memory, so this is not a hard limit).
 */

const TO = process.env.CONTACT_TO || "wiselake@wiselake.ai";
const FROM = process.env.CONTACT_FROM || "WiseLake Homepage <onboarding@resend.dev>";

const RATE_WINDOW_MS = 60_000;
const MIN_FILL_MS = 2_500;
const recent = new Map<string, number>();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  return (xff ? xff.split(",")[0] : req.headers.get("x-real-ip") || "unknown").trim();
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Bots: pretend success so they do not retry.
  if (str(body.website, 200) || (typeof body.elapsedMs === "number" && body.elapsedMs > 0 && body.elapsedMs < MIN_FILL_MS)) {
    return NextResponse.json({ success: true });
  }

  const name = str(body.name, 100);
  const company = str(body.company, 200);
  const email = str(body.email, 200);
  const message = str(body.message, 5000);
  const type = (CONTACT_TYPES as readonly string[]).includes(String(body.type)) ? (body.type as ContactType) : "other";
  const locale = body.locale === "en" ? "en" : "ko";

  if (!name || !email || !message || body.consent !== true || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const ip = clientIp(request);
  const now = Date.now();
  const last = recent.get(ip);
  if (last && now - last < RATE_WINDOW_MS) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
  recent.set(ip, now);
  if (recent.size > 5000) recent.clear();

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const label = CONTACT_TYPE_LABELS_KO[type];
  const rows: [string, string][] = [
    ["문의 유형", label],
    ["이름", name],
    ["이메일", email],
    ["소속", company || "-"],
    ["언어", locale === "en" ? "영문 페이지" : "국문 페이지"],
    ["개인정보 동의", "동의함"],
    ["메시지", message],
  ];
  const html =
    `<h2>홈페이지 문의가 접수되었습니다</h2><table style="border-collapse:collapse;width:100%;max-width:640px">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;white-space:nowrap">${k}</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
      )
      .join("") +
    `</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[홈페이지 문의] ${label} - ${name.replace(/[\r\n]+/g, " ")}`,
      html,
      text,
    });
    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json({ error: "Send failed" }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] unexpected", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
