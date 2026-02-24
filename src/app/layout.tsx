import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiseLake - Nano Start, Mega Impact",
  description: "AI 경제를 위한 마이크로페이먼트 인프라 | Micro-payment Infrastructure for AI Economy",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
