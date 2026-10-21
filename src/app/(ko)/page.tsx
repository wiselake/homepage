import HomePage from "@/components/home/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "ko",
  "/",
  "와이즈레이크 | PigPlan AI · PigOS · NanoTrans",
  "와이즈레이크는 양돈 농장관리 시스템 피그플랜과 양돈 전문 AI PigPlan AI, 세계의 양돈농장을 위한 운영 플랫폼 PigOS, AI 시대 콘텐츠 가치 기술 NanoTrans를 개발합니다.",
);

export default function Page() {
  return <HomePage locale="ko" />;
}
