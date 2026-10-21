import type { Locale } from "@/lib/site";
import PigOSBlock from "../products/PigOSBlock";
import PigPlanBlock from "../products/PigPlanBlock";
import { Hero, TrustBand } from "./Hero";
import { Company, Contact, ContentValue, News } from "./Sections";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <TrustBand locale={locale} />

      {/* Swine AI: PigPlan · PigPlan AI, then PigOS. The #livestock anchor is kept for existing links. */}
      <section id="livestock" className="mx-auto max-w-[1200px] px-6 py-[clamp(80px,10vw,136px)]">
        <PigPlanBlock locale={locale} />
      </section>
      <PigOSBlock locale={locale} />

      <ContentValue locale={locale} />
      <Company locale={locale} />
      <News locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
