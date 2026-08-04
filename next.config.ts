import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return {
      afterFiles: [
        { source: "/", destination: "/v3/index.html" },
        { source: "/pigplan", destination: "/v3/pigplan.html" },
        { source: "/pigos-pigsignal", destination: "/v3/pigos-pigsignal.html" },
        { source: "/nanotrans", destination: "/v3/nanotrans.html" },
        { source: "/en", destination: "/v3/index-en.html" },
        { source: "/en/pigplan", destination: "/v3/pigplan-en.html" },
        { source: "/en/pigos-pigsignal", destination: "/v3/pigos-pigsignal-en.html" },
        { source: "/en/nanotrans", destination: "/v3/nanotrans-en.html" },
        { source: "/assets/:path*", destination: "/v3/assets/:path*" },
        { source: "/en/assets/:path*", destination: "/v3/assets/:path*" },
      ],
    };
  },
  async redirects() {
    return [
      { source: "/ko", destination: "/", permanent: true },
      { source: "/ko/:path*", destination: "/:path*", permanent: true },
      { source: "/pigplan/insight", destination: "/pigplan", permanent: true },
      { source: "/en/pigplan/insight", destination: "/en/pigplan", permanent: true },
      { source: "/pigplan/pigos-ai", destination: "/pigos-pigsignal", permanent: true },
      { source: "/en/pigplan/pigos-ai", destination: "/en/pigos-pigsignal", permanent: true },
      { source: "/pigplan/pigsignal", destination: "/pigos-pigsignal", permanent: true },
      { source: "/en/pigplan/pigsignal", destination: "/en/pigos-pigsignal", permanent: true },
      { source: "/about", destination: "/#company", permanent: true },
      { source: "/en/about", destination: "/en#company", permanent: true },
      { source: "/b2b", destination: "/", permanent: true },
      { source: "/en/b2b", destination: "/en", permanent: true },
      { source: "/roadmap", destination: "/", permanent: true },
      { source: "/en/roadmap", destination: "/en", permanent: true },
      { source: "/v3", destination: "/", permanent: true },
      { source: "/v3/index.html", destination: "/", permanent: true },
      { source: "/v3/index-en.html", destination: "/en", permanent: true },
      { source: "/v3/pigplan.html", destination: "/pigplan", permanent: true },
      { source: "/v3/pigplan-en.html", destination: "/en/pigplan", permanent: true },
      { source: "/v3/pigos-pigsignal.html", destination: "/pigos-pigsignal", permanent: true },
      { source: "/v3/pigos-pigsignal-en.html", destination: "/en/pigos-pigsignal", permanent: true },
      { source: "/v3/nanotrans.html", destination: "/nanotrans", permanent: true },
      { source: "/v3/nanotrans-en.html", destination: "/en/nanotrans", permanent: true },
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
