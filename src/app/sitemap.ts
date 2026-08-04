import { MetadataRoute } from "next";

const baseUrl = "https://wiselake.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/pigplan", "/pigos-pigsignal", "/nanotrans"];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const krUrl = `${baseUrl}${page}`;
    const enUrl = `${baseUrl}/en${page}`;

    entries.push({
      url: krUrl,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ko: krUrl,
          en: enUrl,
        },
      },
    });
  }

  for (const page of pages) {
    entries.push({
      url: `${baseUrl}/en${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : 0.8,
    });
  }

  return entries;
}
