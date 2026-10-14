import type { Metadata } from "next";
import { SITE_URL, localePath, type Locale } from "./site";

/**
 * Page metadata with canonical + hreflang pairs (ko, en, x-default).
 * `path` is the locale-independent path ("/", "/pigplan", ...).
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  const ko = SITE_URL + localePath("ko", path);
  const en = SITE_URL + localePath("en", path);
  const self = locale === "ko" ? ko : en;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: self,
      languages: { ko, en, "x-default": ko },
    },
    openGraph: {
      type: "website",
      url: self,
      title,
      description,
      siteName: "WiseLake",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      // Static file in public/ (not the app/ file convention, which resolves above both root
      // layouts without a metadataBase and warns at build time), so every page names it here.
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "WISELAKE" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image.png"] },
  };
}
