import PigPlanPage from "@/components/products/PigPlanPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "en",
  "/pigplan",
  "PigPlan AI Suite — Korea's standard pig-farm system, with AI | WiseLake",
  "PigPlan holds a 60.9% share of Korea's pig-farm record systems. Insight, Talk and Biz add three AIs on top of the same farm data.",
);

export default function Page() {
  return <PigPlanPage locale="en" />;
}
