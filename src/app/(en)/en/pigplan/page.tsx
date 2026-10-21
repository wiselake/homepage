import PigPlanPage from "@/components/products/PigPlanPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "en",
  "/pigplan",
  "PigPlan & PigPlan AI — Pig-farm management with AI | WiseLake",
  "PigPlan, the pig-farm management system first built in 1995, and PigPlan AI, AI for pig farms that helps identify risks and understand performance.",
);

export default function Page() {
  return <PigPlanPage locale="en" />;
}
