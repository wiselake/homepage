import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import NotFoundPage, { notFoundTitle } from "@/components/NotFoundPage";
import SiteShell from "@/components/SiteShell";
import { SITE_URL, type Locale } from "@/lib/site";

// Two root layouts ((ko), (en)) leave no single layout for a 404, so every unmatched URL lands here
// (experimental.globalNotFound). src/proxy.ts tags /en/* requests with x-wl-locale so English URLs
// get the English page. A notFound() catch-all under /en was tried first, but with two root layouts
// Next sent an error shell and drew that 404 on the client only.
async function locale(): Promise<Locale> {
  return (await headers()).get("x-wl-locale") === "en" ? "en" : "ko";
}

export async function generateMetadata(): Promise<Metadata> {
  return { metadataBase: new URL(SITE_URL), title: notFoundTitle(await locale()) };
}

export default async function GlobalNotFound() {
  const l = await locale();
  return (
    <SiteShell locale={l}>
      <NotFoundPage locale={l} />
    </SiteShell>
  );
}
