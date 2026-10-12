import "../globals.css";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = { metadataBase: new URL(SITE_URL) };

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
