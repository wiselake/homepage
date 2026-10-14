import PigPlanPage from "@/components/products/PigPlanPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "ko",
  "/pigplan",
  "피그플랜 AI 스위트 — 양돈경영관리 표준 시스템과 AI | 와이즈레이크",
  "국내 양돈 전산관리 점유율 60.9%, 690개 농장이 쓰는 표준 시스템 피그플랜 위에 인사이트·톡·비즈 세 가지 AI가 농장의 결정을 함께합니다.",
);

export default function Page() {
  return <PigPlanPage locale="ko" />;
}
