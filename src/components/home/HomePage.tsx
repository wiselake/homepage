import type { Locale } from "@/lib/site";
import PigOSBlock from "../products/PigOSBlock";
import PigPlanBlock from "../products/PigPlanBlock";
import { Eyebrow, SectionTitle } from "../ui";
import { Hero, NumberBand } from "./Hero";
import { Bridge, Company, Contact, ContentValue, News } from "./Sections";

const LS = {
  ko: {
    eyebrow: "사업 라인 1 · 축산 AI",
    title: "국내 농가는 피그플랜, 해외 농가는 PigOS",
    lede: "같은 31년의 현장 데이터와 KPI 기준 위에서, 나라에 맞는 제품으로 농장의 판단을 돕습니다.",
  },
  en: {
    eyebrow: "Line 1 · Livestock AI",
    title: "PigOS for farms worldwide, PigPlan for farms in Korea",
    lede: "Built on the same 31 years of field data and KPI standards, each product fits the market it serves.",
  },
};

export default function HomePage({ locale }: { locale: Locale }) {
  const t = LS[locale];
  // English visitors are most likely outside Korea, so PigOS leads there.
  const products = locale === "en" ? [<PigOSBlock key="os" locale={locale} />, <PigPlanBlock key="pp" locale={locale} />] : [<PigPlanBlock key="pp" locale={locale} />, <PigOSBlock key="os" locale={locale} />];

  return (
    <>
      <Hero locale={locale} />
      <NumberBand locale={locale} />

      <section id="livestock" className="mx-auto max-w-[1200px] px-6 pt-[clamp(72px,9vw,128px)]">
        <Eyebrow className="flex items-center gap-2.5 text-brand">
          <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-brand" />
          {t.eyebrow}
        </Eyebrow>
        <SectionTitle className="mt-4">{t.title}</SectionTitle>
        <p className="m-0 mt-4 max-w-[640px] text-ink-2">{t.lede}</p>
        <div className="mt-16 grid gap-24">{products}</div>
      </section>

      <ContentValue locale={locale} />
      <Bridge locale={locale} />
      <Company locale={locale} />
      <News locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
