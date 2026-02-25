import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_MAP = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60_000;

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    const now = Date.now();
    const lastRequest = RATE_LIMIT_MAP.get(ip);

    if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW_MS) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment." },
        { status: 429 }
      );
    }
    RATE_LIMIT_MAP.set(ip, now);

    const body = await request.json();
    const { type, name, email, company, message } = body;

    if (!name || !email || !message || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const typeLabels: Record<string, string> = {
      general: "일반 문의",
      service: "서비스 문의",
      partnership: "제휴/파트너십",
    };

    await resend.emails.send({
      from: "WiseLake Homepage <onboarding@resend.dev>",
      to: "wiselake@wiselake.ai",
      subject: `[홈페이지 문의] ${typeLabels[type] || type} - ${name}`,
      html: `
        <h2>홈페이지 문의가 접수되었습니다</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">문의 유형</td><td style="padding:8px;border:1px solid #ddd;">${typeLabels[type] || type}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">이름</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">이메일</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">회사</td><td style="padding:8px;border:1px solid #ddd;">${company || "-"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">메시지</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap;">${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
