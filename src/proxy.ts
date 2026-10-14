import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  // /en/*: tag the request so src/app/global-not-found.tsx can render the English 404.
  if (request.nextUrl.pathname !== "/") {
    const headers = new Headers(request.headers);
    headers.set("x-wl-locale", "en");
    return NextResponse.next({ request: { headers } });
  }

  // "/": English browsers go to /en unless NEXT_LOCALE says otherwise.
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

export const config = { matcher: ["/", "/en", "/en/:path*"] };
