import LegalPage from "@/components/LegalPage";
import { TermsKo } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("ko", "/terms", "이용약관 | 와이즈레이크", "와이즈레이크 웹사이트 이용약관입니다.");

export default function Page() {
  return (
    <LegalPage title="이용약관" updated="시행일 [시행일]">
      <TermsKo />
    </LegalPage>
  );
}
