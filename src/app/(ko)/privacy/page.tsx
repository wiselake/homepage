import LegalPage from "@/components/LegalPage";
import { PrivacyKo } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("ko", "/privacy", "개인정보처리방침 | 와이즈레이크", "와이즈레이크 웹사이트의 개인정보처리방침입니다.");

export default function Page() {
  return (
    <LegalPage title="개인정보처리방침" updated="시행일 [시행일]">
      <PrivacyKo />
    </LegalPage>
  );
}
