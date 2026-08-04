import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const prefersEnglish = cookie
    ? cookie === "en"
    : /^en\b/i.test(acceptLanguage.split(",")[0]?.trim() ?? "");
  if (prefersEnglish) {
    return NextResponse.redirect(new URL("/en", request.url), 307);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/"] };
