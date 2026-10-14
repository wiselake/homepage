import type { Metadata } from "next";
import NotFoundPage, { notFoundTitle } from "@/components/NotFoundPage";

export const metadata: Metadata = { title: notFoundTitle("en") };

export default function NotFound() {
  return <NotFoundPage locale="en" />;
}
