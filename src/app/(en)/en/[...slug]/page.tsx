import { notFound } from "next/navigation";

/** Any unknown /en/* path renders the English 404 (../not-found.tsx) inside the English root layout. */
export default function UnknownEnglishPage() {
  notFound();
}
