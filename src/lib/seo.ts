import type { Metadata } from "next";

const LOCALES = ["ko", "en"] as const;

interface PageMetaArgs {
  /** Current locale, e.g. "ko" | "en" */
  locale: string;
  /** Route path WITHOUT the locale prefix, e.g. "/pigplan/insight" ("" for home) */
  path: string;
  title: string;
  description: string;
  /** OG/Twitter image; defaults to the site card */
  ogImage?: string;
}

/**
 * Builds route-aware metadata (canonical, hreflang languages, og:url) for a page.
 *
 * The locale layout sets these fields hardcoded to the locale root (`/ko`, `/en`),
 * and Next.js merges metadata shallowly — so any page that omits `alternates`/`openGraph`
 * inherits the homepage values and ends up canonicalizing to `/ko`. Every sub-page should
 * call this so its canonical/hreflang/og:url reflect its actual route.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  ogImage = "/opengraph-image.png",
}: PageMetaArgs): Metadata {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `/${l}${path}`;
  languages["x-default"] = `/ko${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
      url: `/${locale}${path}`,
      siteName: "WiseLake",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
    alternates: {
      canonical: `/${locale}${path}`,
      languages,
    },
  };
}
