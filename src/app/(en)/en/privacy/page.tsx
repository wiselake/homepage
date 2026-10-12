import LegalPage from "@/components/LegalPage";
import { EFFECTIVE_DATE, PrivacyEn } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/privacy", "Privacy policy | WiseLake", "How WiseLake handles personal information on wiselake.ai.");

export default function Page() {
  return (
    <LegalPage title="Privacy policy" updated={`Effective ${EFFECTIVE_DATE.en}`}>
      <PrivacyEn />
    </LegalPage>
  );
}
