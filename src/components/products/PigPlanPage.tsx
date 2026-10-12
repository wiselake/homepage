import { localePath, type Locale } from "@/lib/site";
import { Eyebrow, SectionTitle } from "../ui";
import PigPlanBlock from "./PigPlanBlock";

/* Figures carried over from the v3 /pigplan page (source notes kept with each chart). */
const SHARE = [
  { k: "pigplan", v: 60.9 },
  { k: "A", v: 17.3 },
  { k: "B", v: 9.7 },
  { k: "C", v: 7.9 },
  { k: "etc", v: 4.2 },
];
const SOW_SHARE = [
  { y: "2021", v: 31.7 },
  { y: "2022", v: 32.5 },
  { y: "2023", v: 32.9 },
  { y: "2024", v: 34.6 },
  { y: "2025", v: 34.6 },
];
const PSY_BY_YEARS = [
  { k: 20, v: 26.1, n: 31 },
  { k: 15, v: 26.1, n: 67 },
  { k: 10, v: 25.4, n: 145 },
  { k: 1, v: 25.2, n: 470 },
];

const T = {
  ko: {
    eyebrow: "숫자로 보는 피그플랜",
    title: "국내 양돈 농가가 가장 많이 쓰는 표준입니다",
    share: { title: "국내 양돈 전산관리 시스템 점유율", note: "개체별 전산관리 사용 농가 기준 — 전산 사용 농가 1,133호 중 피그플랜 690호. 민·관 실측 자료 종합, 타사는 익명.", names: { pigplan: "피그플랜", A: "A사", B: "B사", C: "C사", etc: "기타" } as Record<string, string> },
    sow: { title: "전국 상시모돈 점유율", note: "통계청 전국 모돈 대비 피그플랜 실측 상시모돈 비율(연중 중단 농가 포함). 전국 모돈은 2021년 102.3만 두에서 2025년 96.7만 두로 감소.", unit: "%" },
    psy: { title: "오래 쓸수록 높아지는 PSY", note: "사용 연수별 평균 PSY(모돈 1두당 연간 이유 두수). 출처: 2025 피그플랜 빅데이터 심층분석 보고서.", label: (k: number) => `${k}년 이상`, farms: (n: number) => `${n}농가`, unit: "두" },
    functionsTitle: "표준 시스템 6대 기능",
    functions: ["번식·비육 전 과정 기록", "종돈장 검정돈 관리", "표준 KPI 성적 분석·조회", "전국 비교 벤치마크", "모바일 현장 입력", "IoT 돈사 환경 모니터링"],
    historyTitle: "Since 1995",
    history: [["1995", "서울대 연구소 최초 개발"], ["1998", "농가 보급 (PC)"], ["2005", "웹 · 모바일"], ["2020", "클라우드 pigplan.io"], ["2026", "AI 서비스"]],
    overseas: "해외 농가라면 PigOS를 이용해 주세요 →",
  },
  en: {
    eyebrow: "PigPlan in numbers",
    title: "The standard most Korean pig farms use",
    share: { title: "Share of Korea's pig-farm record systems", note: "Farms using individual-animal record software: 690 of 1,133 use PigPlan. Combined public and private survey data; competitors anonymised.", names: { pigplan: "PigPlan", A: "Company A", B: "Company B", C: "Company C", etc: "Others" } as Record<string, string> },
    sow: { title: "Share of Korea's sow inventory", note: "PigPlan-recorded sows as a share of Statistics Korea's national sow count. National herd fell from 1.023M (2021) to 0.967M (2025).", unit: "%" },
    psy: { title: "PSY rises the longer farms use PigPlan", note: "Average pigs weaned per sow per year by years of use. Source: 2025 PigPlan big-data report.", label: (k: number) => `${k}+ years`, farms: (n: number) => `${n} farms`, unit: "" },
    functionsTitle: "Six core functions",
    functions: ["Breeding-to-finishing records", "Nucleus herd performance testing", "Standard KPI analysis", "Nationwide benchmarks", "Mobile entry in the barn", "IoT barn monitoring"],
    historyTitle: "Since 1995",
    history: [["1995", "First built at a SNU lab"], ["1998", "Rolled out to farms (PC)"], ["2005", "Web and mobile"], ["2020", "Cloud: pigplan.io"], ["2026", "AI services"]],
    overseas: "Farming outside Korea? Use PigOS →",
  },
};

function Bar({ label, value, max, display, strong }: { label: string; value: number; max: number; display: string; strong?: boolean }) {
  return (
    <div className="grid grid-cols-[minmax(84px,auto)_1fr_auto] items-center gap-3 text-[15px]">
      <span className={strong ? "font-bold" : "text-ink-2"}>{label}</span>
      <span className="block h-2.5 rounded-full bg-line-soft">
        <span className={`block h-2.5 rounded-full ${strong ? "bg-pigplan" : "bg-pigplan-soft"}`} style={{ width: `${(value / max) * 100}%` }} />
      </span>
      <span className={`tabular-nums ${strong ? "font-bold text-pigplan" : "text-ink-2"}`}>{display}</span>
    </div>
  );
}

function Panel({ title, note, children }: { title: string; note: string; children: React.ReactNode }) {
  return (
    <figure className="m-0 flex flex-col gap-5 rounded-[12px] border border-line bg-card p-7">
      <h3 className="m-0 text-[18px] font-bold">{title}</h3>
      <div className="grid gap-3">{children}</div>
      <figcaption className="mt-auto text-[13px] leading-[1.6] text-muted">{note}</figcaption>
    </figure>
  );
}

export default function PigPlanPage({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-[clamp(48px,7vw,96px)]">
        <PigPlanBlock locale={locale} headingLevel={2} productLabel="PIGPLAN AI SUITE" />
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pt-[clamp(72px,9vw,120px)]">
        <Eyebrow className="text-pigplan">{t.eyebrow}</Eyebrow>
        <SectionTitle className="mt-4">{t.title}</SectionTitle>
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5">
          <Panel title={t.share.title} note={t.share.note}>
            {SHARE.map((s) => (
              <Bar key={s.k} label={t.share.names[s.k]} value={s.v} max={65} display={`${s.v}%`} strong={s.k === "pigplan"} />
            ))}
          </Panel>
          <Panel title={t.sow.title} note={t.sow.note}>
            {SOW_SHARE.map((s, i) => (
              <Bar key={s.y} label={s.y} value={s.v} max={40} display={`${s.v}%`} strong={i === SOW_SHARE.length - 1} />
            ))}
          </Panel>
          <Panel title={t.psy.title} note={t.psy.note}>
            {PSY_BY_YEARS.map((s, i) => (
              <Bar key={s.k} label={`${t.psy.label(s.k)} · ${t.psy.farms(s.n)}`} value={s.v} max={28} display={`${s.v}${t.psy.unit}`} strong={i === 0} />
            ))}
          </Panel>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-x-16 gap-y-12 px-6 py-[clamp(72px,9vw,120px)]">
        <div>
          <h2 className="m-0 text-[24px] font-bold">{t.functionsTitle}</h2>
          <ol className="m-0 mt-6 grid list-none grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 p-0">
            {t.functions.map((f, i) => (
              <li key={f} className="rounded-[10px] border border-line bg-card px-5 py-4">
                <span className="mr-2 font-bold text-pigplan">{String(i + 1).padStart(2, "0")}</span>
                {f}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="m-0 text-[24px] font-bold">{t.historyTitle}</h2>
          <ol className="m-0 mt-6 list-none border-t border-line p-0">
            {t.history.map(([y, e]) => (
              <li key={y} className="grid grid-cols-[72px_1fr] gap-4 border-b border-line py-3.5">
                <b className="text-pigplan">{y}</b>
                <span>{e}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <a href={`${localePath(locale, "/")}#pigos`} className="font-semibold">
              {t.overseas}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
