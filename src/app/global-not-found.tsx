import "./globals.css";
import type { Metadata } from "next";
import NotFoundPage, { notFoundTitle } from "@/components/NotFoundPage";
import SiteShell from "@/components/SiteShell";
import { SITE_URL } from "@/lib/site";

// Two root layouts ((ko), (en)) leave no single layout for a 404, so unmatched URLs land here
// (experimental.globalNotFound). Korean by default; /en/* is caught by (en)/en/[...slug].
export const metadata: Metadata = { metadataBase: new URL(SITE_URL), title: notFoundTitle("ko") };

export default function GlobalNotFound() {
  return (
    <SiteShell locale="ko">
      <NotFoundPage locale="ko" />
    </SiteShell>
  );
}
