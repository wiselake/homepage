import { localePath, type Locale } from "@/lib/site";
import { ArrowIcon } from "../ui";
import PigPlanBlock from "./PigPlanBlock";

/*
 * The market-share, sow-share and PSY-by-years charts that were here are held back until the
 * source data and population are verified (2026-10-20 meeting). History keeps only confirmed years.
 */
const T = {
  ko: {
    functionsTitle: "피그플랜 주요 기능",
    functions: ["번식·비육 전 과정 기록", "종돈장 검정돈 관리", "표준 KPI 성적 분석·조회", "전국 비교 벤치마크", "모바일 현장 입력", "IoT 돈사 환경 모니터링"],
    historyTitle: "Since 1995",
    history: [["1995", "피그플랜 기술 개발 시작"], ["2005", "웹·모바일 서비스 출시"], ["2020", "클라우드 서비스 개시"], ["2022", "㈜와이즈레이크 설립"], ["2026", "PigPlan AI 확장"]],
    overseas: "해외 농가라면 PigOS를 이용해 주세요",
  },
  en: {
    functionsTitle: "Core PigPlan functions",
    functions: ["Breeding-to-finishing records", "Nucleus herd performance testing", "Standard KPI analysis", "Nationwide benchmarks", "Mobile entry in the barn", "IoT barn monitoring"],
    historyTitle: "Since 1995",
    history: [["1995", "PigPlan technology development begins"], ["2005", "Web and mobile service launches"], ["2020", "Cloud service launches"], ["2022", "WiseLake, Inc. is founded"], ["2026", "PigPlan AI expands"]],
    overseas: "Farming outside Korea? Use PigOS",
  },
};

export default function PigPlanPage({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-[clamp(48px,7vw,96px)]">
        <PigPlanBlock locale={locale} headingLevel={1} />
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-x-16 gap-y-12 px-6 py-[clamp(72px,9vw,120px)]">
        <div>
          <h2 className="m-0 text-[24px] font-bold">{t.functionsTitle}</h2>
          <ol className="m-0 mt-6 grid list-none grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-8 border-t border-ink p-0">
            {t.functions.map((f, i) => (
              <li key={f} className="border-b border-line py-4">
                <span className="mr-2 font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
                {f}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="m-0 text-[24px] font-bold">{t.historyTitle}</h2>
          <ol className="m-0 mt-6 list-none border-t border-ink p-0">
            {t.history.map(([y, e]) => (
              <li key={y} className="grid grid-cols-[72px_1fr] gap-4 border-b border-line py-3.5">
                <b className="text-brand">{y}</b>
                <span>{e}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <a href={`${localePath(locale, "/")}#pigos`} className="inline-flex items-center gap-2 font-semibold">
              {t.overseas}
              <ArrowIcon />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
