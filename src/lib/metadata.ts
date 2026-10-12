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
      // Page-level openGraph replaces the file-convention image, so name it explicitly.
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "WISELAKE" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image.png"] },
  };
}
