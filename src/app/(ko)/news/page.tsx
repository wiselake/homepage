import NewsPage from "@/components/NewsPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("ko", "/news", "소식 | 와이즈레이크", "피그플랜, PigOS, NanoTrans와 와이즈레이크에 관한 보도를 모았습니다.");

export default function Page() {
  return <NewsPage locale="ko" />;
}
