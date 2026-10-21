import { LINKS, type Locale } from "@/lib/site";
import { ArrowIcon, ButtonLink, SectionLabel } from "../ui";

/*
 * Domestic product line (2026-10-20 meeting): PigPlan (40%) and PigPlan AI (60%) in one
 * brand section. PigPlan Biz is an add-on inside PigPlan, not a separate product. The former
 * suite names (AI Suite, Insight, AXIO, Enterprise) and the chat product name are not shown.
 *
 * Status per pigplan.io/landing/service.do on 2026-10-20: PigPlan core and Android/iOS apps live;
 * weekly and monthly reports (with national comparison) live; asking in chat and Biz open Dec 2026.
 *
 * Images: pigplan-web-mobile.png is an illustrative web dashboard (layout of the real PigPlan main
 * dashboard per the intro deck: flagged sows, shipment forecast, key productivity factors) with the
 * real app menu screen, captioned as an example (requested 2026-10-21 until real captures exist).
 * REPORT_IMAGE is an illustrative weekly report (requested 2026-10-21 until a real capture exists):
 * real report structure, sample numbers from the PigPlan intro deck, placeholder farm name, and a
 * visible "illustrative" caption. Set it to null to show the image-needed slot instead.
 */
const REPORT_IMAGE: string | null = "/images/b/pigplan-ai-weekly-report.jpg";

const T = {
  ko: {
    n: "01",
    eyebrow: "PigPlan · PigPlan AI",
    title: "피그플랜, AI로 진화하다.",
    sub: ["30년 이상 축적된 양돈 기록 위에,", "농장의 위험을 발견하고 더 나은 결정을 돕는 AI를 더합니다."],
    plan: {
      name: "PigPlan",
      title: "정확한 기록, 체계적인 농장관리",
      foot: "농장의 기록부터 경영관리까지.",
      features: [
        { text: "번식·비육·출하관리" },
        { text: "생산성 분석과 성적 비교" },
        { text: "농장별 보고서" },
        { text: "경영관리 및 PigPlan Biz 애드온", note: "Biz 12월 오픈" },
        { text: "웹·모바일 농장관리", note: "Android · iOS" },
      ],
      mobileAlt: "피그플랜 웹 대시보드(상시모돈·PSY·분만율·비생산일수, 관리 대상 모돈, 출하 예측)와 모바일 앱 메뉴 화면 예시",
      caption: "피그플랜 웹·모바일 화면 예시 · 수치는 가상",
    },
    ai: {
      name: "PigPlan AI",
      title: "농장의 위험을 먼저 발견하는 AI",
      sub: ["놓친 기록과 관리 대상을 찾고,", "궁금한 성적은 대화로 바로 확인하세요."],
      values: [
        { title: "먼저 발견하는 AI", items: ["주요 성적의 이상 징후", "관리 대상 개체", "누락된 기록", "미처리 작업"] },
        { title: "물어보면 답하는 AI", note: "12월 오픈 예정", items: ["자연어 질문", "농장 실적 조회", "전월·전년 성적 비교", "보고서 확인과 설명"] },
        { title: "관리까지 연결하는 AI", items: ["위험 탐지 알림", "추천 질문", "관련 농장 현황 확인", "후속 작업 안내"] },
      ],
      reportAlt: "PigPlan AI 주간 보고서 화면 예시 — 핵심 지표, AI 분석 요약, 관리 대상 모돈, 이번 주 작업",
      reportCaption: "주간 보고서 화면 예시 · 수치는 가상",
      reportNeeded: ["이미지 확보 필요 — 주간 보고서 실제 화면", "권장 1600×1000px · 농장명 등 식별 정보 마스킹"],
    },
    cta: "피그플랜 서비스 자세히 보기",
  },
  en: {
    n: "01",
    eyebrow: "PigPlan · PigPlan AI",
    title: "PigPlan, Evolving with AI.",
    sub: ["On more than 30 years of pig-farm records,", "we add AI that spots farm risks and supports better decisions."],
    plan: {
      name: "PigPlan",
      title: "Accurate Records, Organized Farm Management",
      foot: "From farm records to business management.",
      features: [
        { text: "Breeding, finishing and shipment management" },
        { text: "Productivity analysis and benchmarking" },
        { text: "Farm-level reports" },
        { text: "Business management with the PigPlan Biz add-on", note: "Biz opens Dec" },
        { text: "Web and mobile farm management", note: "Android · iOS" },
      ],
      mobileAlt: "Example of the PigPlan web dashboard (sows, PSY, farrowing rate, non-productive days, flagged sows, shipment forecast) with the mobile app menu",
      caption: "PigPlan web and mobile example · illustrative data",
    },
    ai: {
      name: "PigPlan AI",
      title: "AI That Finds Farm Risks First",
      sub: ["Find missed records and animals that need attention,", "and ask about your farm's performance in plain language."],
      values: [
        { title: "AI that finds issues first", items: ["Anomalies in key KPIs", "Animals that need attention", "Missing records", "Open tasks"] },
        { title: "AI that answers", note: "Opens December", items: ["Plain-language questions", "Farm results lookup", "Month-over-month and year-over-year comparison", "Report lookup and explanation"] },
        { title: "AI that leads to action", items: ["Risk alerts", "Suggested questions", "Related farm status", "Follow-up task guidance"] },
      ],
      reportAlt: "PigPlan AI weekly report example — key KPIs, AI summary, flagged sows and this week's tasks",
      reportCaption: "Weekly report example · illustrative data",
      reportNeeded: ["Image needed — actual weekly report screen", "1600×1000px recommended · mask farm names"],
    },
    cta: "Explore the PigPlan service",
  },
};

type Value = { title: string; note?: string; items: string[] };

/** headingLevel 1: the block is the /pigplan page title; 2: a product section on the home page. Panel titles sit one level below. */
export default function PigPlanBlock({ locale, headingLevel = 2 }: { locale: Locale; headingLevel?: 1 | 2 }) {
  const t = T[locale];
  const H = headingLevel === 1 ? "h1" : "h2";
  const PanelH = headingLevel === 1 ? "h2" : "h3";

  return (
    <div id="pigplan">
      <SectionLabel n={t.n}>{t.eyebrow}</SectionLabel>
      <div className="mt-10 grid grid-cols-1 items-end gap-x-16 gap-y-6 min-[1000px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <H className="m-0 text-[clamp(34px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.045em]">{t.title}</H>
        <p className="m-0 text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-ink-2">
          {t.sub[0]}
          <br className="max-sm:hidden" /> {t.sub[1]}
        </p>
      </div>

      {/* One brand section: PigPlan (foundation, 40%) + PigPlan AI (60%). */}
      <div className="mt-14 grid grid-cols-1 border-t border-line min-[1000px]:grid-cols-[minmax(0,4fr)_minmax(0,6fr)]">
        <article className="flex flex-col pb-12 pt-10 min-[1000px]:pr-12">
          <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.16em] text-brand">{t.plan.name}</p>
          <PanelH className="m-0 mt-4 text-[clamp(24px,2.3vw,30px)] font-bold leading-[1.3] tracking-[-0.03em]">
            {t.plan.name} — {t.plan.title}
          </PanelH>
          <p className="m-0 mt-3 text-[17px] text-ink-2">{t.plan.foot}</p>
          <ul className="m-0 mt-8 list-none border-t border-line p-0">
            {t.plan.features.map((f) => (
              <li key={f.text} className="flex items-baseline justify-between gap-4 border-b border-line py-3.5 text-[16px]">
                <span>{f.text}</span>
                {f.note && <span className="whitespace-nowrap text-[14px] text-muted">{f.note}</span>}
              </li>
            ))}
          </ul>
          <figure className="m-0 mt-10">
            <div className="bg-paper pl-[5%] pt-[5%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/b/pigplan-web-mobile.png" alt={t.plan.mobileAlt} width={2400} height={1520} loading="lazy" decoding="async" className="block h-auto w-full" />
            </div>
            <figcaption className="mt-3 text-[13px] text-muted">{t.plan.caption}</figcaption>
          </figure>
        </article>

        <article className="flex flex-col bg-night px-[clamp(24px,4vw,56px)] py-[clamp(36px,4vw,56px)] text-white">
          <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.16em] text-ai-night">{t.ai.name}</p>
          <PanelH className="m-0 mt-4 text-[clamp(28px,3vw,40px)] font-bold leading-[1.22] tracking-[-0.035em]">
            {t.ai.name} — {t.ai.title}
          </PanelH>
          <p className="m-0 mt-4 text-[18px] leading-[1.6] text-night-text">
            {t.ai.sub[0]}
            <br className="max-sm:hidden" /> {t.ai.sub[1]}
          </p>

          <ol className="m-0 mt-10 list-none border-t border-night-line p-0">
            {(t.ai.values as Value[]).map((v, i) => (
              <li key={v.title} className="grid grid-cols-[44px_1fr] gap-x-2 border-b border-night-line py-6">
                <span className="pt-1 text-[14px] font-semibold tabular-nums text-ai-night">0{i + 1}</span>
                <div>
                  <p className="m-0 flex flex-wrap items-baseline gap-x-3 text-[clamp(20px,2vw,24px)] font-bold tracking-[-0.02em]">
                    {v.title}
                    {v.note && <span className="text-[14px] font-medium tracking-normal text-night-text">{v.note}</span>}
                  </p>
                  <p className="m-0 mt-2 text-[15px] text-night-text">{v.items.join(" · ")}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="m-0 mt-10">
            {REPORT_IMAGE ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={REPORT_IMAGE} alt={t.ai.reportAlt} width={2400} height={1500} loading="lazy" decoding="async" className="block h-auto w-full" />
            ) : (
              <div className="flex aspect-[16/9] flex-col items-center justify-center gap-1 border border-dashed border-night-line px-6 text-center text-[14px] text-night-text">
                <span className="font-semibold text-white">{t.ai.reportNeeded[0]}</span>
                <span>{t.ai.reportNeeded[1]}</span>
              </div>
            )}
            {REPORT_IMAGE && <figcaption className="mt-3 text-[13px] text-night-text">{t.ai.reportCaption}</figcaption>}
          </figure>
        </article>
      </div>

      <div className="mt-10">
        <ButtonLink href={LINKS.pigplanService} external size="lg" className="max-sm:w-full">
          {t.cta}
          <ArrowIcon />
        </ButtonLink>
      </div>
    </div>
  );
}
