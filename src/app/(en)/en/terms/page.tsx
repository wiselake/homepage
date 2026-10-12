import LegalPage from "@/components/LegalPage";
import { EFFECTIVE_DATE, TermsEn } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/terms", "Terms of use | WiseLake", "Terms of use for wiselake.ai.");

export default function Page() {
  return (
    <LegalPage title="Terms of use" updated={`Effective ${EFFECTIVE_DATE.en}`}>
      <TermsEn />
    </LegalPage>
  );
}
