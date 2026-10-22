import PigPlanPage from "@/components/products/PigPlanPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "ko",
  "/pigplan",
  "피그플랜 · PigPlan AI — 양돈 농장관리와 AI | 와이즈레이크",
  "1995년에 시작한 양돈 농장관리 시스템 피그플랜과 양돈 전문 AI PigPlan AI. 생산·사양·경영 기록 위에서 위험을 발견하고 성적을 이해하도록 돕습니다.",
);

export default function Page() {
  return <PigPlanPage locale="ko" />;
}
