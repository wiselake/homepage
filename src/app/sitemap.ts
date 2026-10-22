import type { MetadataRoute } from "next";
import { SITE_URL, localePath } from "@/lib/site";

/** Update a page's date here when its content changes (not on every build). */
const PAGES: { path: string; updated: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", updated: "2026-10-21", priority: 1, freq: "weekly" },
  { path: "/pigplan", updated: "2026-10-20", priority: 0.8, freq: "monthly" },
  { path: "/news", updated: "2026-10-21", priority: 0.6, freq: "weekly" },
  { path: "/privacy", updated: "2026-10-12", priority: 0.2, freq: "yearly" },
  { path: "/terms", updated: "2026-10-12", priority: 0.2, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((p) => {
    // Root without trailing slash, matching the canonical Next.js emits.
    const ko = SITE_URL + (p.path === "/" ? "" : p.path);
    const en = SITE_URL + localePath("en", p.path);
    const languages = { ko, en, "x-default": ko };
    const common = { lastModified: new Date(p.updated), changeFrequency: p.freq, priority: p.priority, alternates: { languages } };
    return [
      { url: ko, ...common },
      { url: en, ...common },
    ];
  });
}
