import HomePage from "@/components/home/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "ko",
  "/",
  "와이즈레이크 — 양돈 AI 피그플랜 · PigOS · NanoTrans",
  "쌓인 데이터가 AI 시대의 가치가 됩니다. 국내 양돈 전산관리 점유율 60.9% 피그플랜 AI 스위트, 해외 농가용 AI 조기경보 PigOS, AI가 읽는 콘텐츠의 가치를 측정하고 거래하는 NanoTrans.",
);

export default function Page() {
  return <HomePage locale="ko" />;
}
