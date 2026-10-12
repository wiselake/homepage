import LegalPage from "@/components/LegalPage";
import { TermsEn } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/terms", "Terms of use | WiseLake", "Terms of use for wiselake.ai.");

export default function Page() {
  return (
    <LegalPage title="Terms of use" updated="Effective [effective date]">
      <TermsEn />
    </LegalPage>
  );
}
