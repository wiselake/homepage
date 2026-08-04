import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wiselake.ai"),
  title: "WiseLake - Nano Start, Mega Impact",
  description: "AI가 읽는 콘텐츠가 수익이 되는 인프라 | Content Monetization Infrastructure for the AI Era",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
