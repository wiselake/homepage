import NewsPage from "@/components/NewsPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/news", "News | WiseLake", "Coverage of WiseLake, PigOS, PigPlan and NanoTrans.");

export default function Page() {
  return <NewsPage locale="en" />;
}
