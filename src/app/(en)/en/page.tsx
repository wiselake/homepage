import HomePage from "@/components/home/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "en",
  "/",
  "WiseLake | PigPlan AI, PigOS & NanoTrans",
  "WiseLake builds PigPlan and PigPlan AI for pig farms in Korea, PigOS, an operating platform for pig farms worldwide, and NanoTrans, technology for content value in the AI era.",
);

export default function Page() {
  return <HomePage locale="en" />;
}
