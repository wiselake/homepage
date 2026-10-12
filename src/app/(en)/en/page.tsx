import HomePage from "@/components/home/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "en",
  "/",
  "WiseLake — PigOS, PigPlan and NanoTrans",
  "Accumulated data, turned into value for the AI era. PigOS, an AI early-warning OS for pig farms worldwide; PigPlan, Korea's leading pig-farm management system; and NanoTrans, which measures and trades the value of content AI reads.",
);

export default function Page() {
  return <HomePage locale="en" />;
}
