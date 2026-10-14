import type { NextConfig } from "next";

const PIGOS = "https://pigos.io";
const NANOTRANS_KO = "https://nanotrans.io/ko/";
const NANOTRANS_EN = "https://nanotrans.io";

/**
 * Every retired URL points straight at its final destination (no redirect chains).
 * PigOS and NanoTrans detail now live on their own sites; PigSignal was merged into
 * NanoTrans Market, so its old URLs go to PigOS (farm data) — the nearest live page.
 */
const retired: [string, string][] = [
  // v4: product detail moved to product sites
  ["/pigos-pigsignal", PIGOS],
  ["/en/pigos-pigsignal", PIGOS],
  ["/nanotrans", NANOTRANS_KO],
  ["/en/nanotrans", NANOTRANS_EN],
  // v2 paths
  ["/pigplan/insight", "/pigplan"],
  ["/en/pigplan/insight", "/en/pigplan"],
  ["/pigplan/pigos-ai", PIGOS],
  ["/en/pigplan/pigos-ai", PIGOS],
  ["/pigplan/pigsignal", PIGOS],
  ["/en/pigplan/pigsignal", PIGOS],
  ["/about", "/#company"],
  ["/en/about", "/en#company"],
  ["/b2b", "/"],
  ["/en/b2b", "/en"],
  ["/roadmap", "/"],
  ["/en/roadmap", "/en"],
  ["/ko", "/"],
  // v3 static files
  ["/v3", "/"],
  ["/v3/index.html", "/"],
  ["/v3/index-en.html", "/en"],
  ["/v3/pigplan.html", "/pigplan"],
  ["/v3/pigplan-en.html", "/en/pigplan"],
  ["/v3/pigos-pigsignal.html", PIGOS],
  ["/v3/pigos-pigsignal-en.html", PIGOS],
  ["/v3/nanotrans.html", NANOTRANS_KO],
  ["/v3/nanotrans-en.html", NANOTRANS_EN],
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  experimental: {
    // Custom 404 across the two root layouts: src/app/global-not-found.tsx
    globalNotFound: true,
  },
  async redirects() {
    return [
      ...retired.map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: "/ko/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
