import { NextResponse } from "next/server";

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

    // Log the contact submission (replace with actual email service like Resend later)
    console.log("=== New Contact Submission ===");
    console.log(`Type: ${type}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company || "-"}`);
    console.log(`Message: ${message}`);
    console.log("==============================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
