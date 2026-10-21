import { LINKS, type Locale } from "@/lib/site";
import { ArrowIcon, Badge, ButtonLink, Eyebrow } from "../ui";

/*
 * Domestic product line (2026-10-20 meeting): PigPlan (40%) and PigPlan AI (60%) in one
 * brand section. PigPlan Biz is an add-on inside PigPlan, not a separate product. The former
 * suite names (AI Suite, Insight, AXIO, Enterprise) and the chat product name are not shown.
 *
 * Status per pigplan.io/landing/service.do on 2026-10-20: PigPlan core and Android/iOS apps live;
 * weekly and monthly reports (with national comparison) live; asking in chat and Biz open
 * Dec 2026. Numbers in the screen example are illustrative, taken from the PigPlan intro deck.
 */
const T = {
  ko: {
    eyebrow: "PigPlan · PigPlan AI",
    title: "피그플랜, AI로 진화하다.",
    sub: ["30년 이상 축적된 양돈 기록 위에,", "농장의 위험을 발견하고 더 나은 결정을 돕는 AI를 더합니다."],
    plan: {
      name: "PigPlan",
      title: "정확한 기록, 체계적인 농장관리",
      badge: "운영 중",
      features: [
        { text: "번식·비육·출하관리" },
        { text: "생산성 분석과 성적 비교" },
        { text: "농장별 보고서" },
        { text: "경영관리 및 PigPlan Biz 애드온", note: "Biz 12월 오픈" },
        { text: "웹·모바일 농장관리", note: "Android · iOS" },
      ],
      foot: "농장의 기록부터 경영관리까지.",
    },
    ai: {
      name: "PigPlan AI",
      title: "농장의 위험을 먼저 발견하는 AI",
      sub: ["놓친 기록과 관리 대상을 찾고,", "궁금한 성적은 대화로 바로 확인하세요."],
      demo: {
        label: "화면 예시 · 수치는 가상",
        alertTag: "주간 보고서",
        alertTitle: "이유전 폐사율 16.1%",
        alertText: "전년 대비 +5.1%p · 분만사 점검이 필요합니다",
        kpis: [
          ["PSY", "25.6두"],
          ["NPD", "48.8일"],
          ["관리대상", "23두"],
        ],
        q: "이번 달 분만율 알려줘",
        a: "2026년 6월 기준 분만율 82.4%입니다.",
        chatTag: "12월 오픈 예정",
      },
      values: [
        { n: "①", title: "먼저 발견하는 AI", items: ["주요 성적의 이상 징후", "관리 대상 개체", "누락된 기록", "미처리 작업"] },
        { n: "②", title: "물어보면 답하는 AI", items: ["자연어 질문", "농장 실적 조회", "전월·전년 성적 비교", "보고서 확인과 설명"] },
        { n: "③", title: "관리까지 연결하는 AI", items: ["위험 탐지 알림", "추천 질문", "관련 농장 현황 확인", "후속 작업 안내"] },
      ],
    },
    cta: "피그플랜 서비스 자세히 보기",
  },
  en: {
    eyebrow: "PigPlan · PigPlan AI",
    title: "PigPlan, Evolving with AI.",
    sub: ["On more than 30 years of pig-farm records,", "we add AI that spots farm risks and supports better decisions."],
    plan: {
      name: "PigPlan",
      title: "Accurate Records, Organized Farm Management",
      badge: "Live",
      features: [
        { text: "Breeding, finishing and shipment management" },
        { text: "Productivity analysis and benchmarking" },
        { text: "Farm-level reports" },
        { text: "Business management with the PigPlan Biz add-on", note: "Biz opens Dec" },
        { text: "Web and mobile farm management", note: "Android · iOS" },
      ],
      foot: "From farm records to business management.",
    },
    ai: {
      name: "PigPlan AI",
      title: "AI That Finds Farm Risks First",
      sub: ["Find missed records and animals that need attention,", "and ask about your farm's performance in plain language."],
      demo: {
        label: "Screen example · illustrative numbers",
        alertTag: "Weekly report",
        alertTitle: "Pre-wean mortality 16.1%",
        alertText: "+5.1 pts vs last year · check the farrowing rooms",
        kpis: [
          ["PSY", "25.6"],
          ["NPD", "48.8 d"],
          ["Flagged sows", "23"],
        ],
        q: "What's this month's farrowing rate?",
        a: "Farrowing rate was 82.4% for June 2026.",
        chatTag: "Opens December",
      },
      values: [
        { n: "①", title: "AI that finds issues first", items: ["Anomalies in key KPIs", "Animals that need attention", "Missing records", "Open tasks"] },
        { n: "②", title: "AI that answers", items: ["Plain-language questions", "Farm results lookup", "Month-over-month and year-over-year comparison", "Report lookup and explanation"] },
        { n: "③", title: "AI that leads to action", items: ["Risk alerts", "Suggested questions", "Related farm status", "Follow-up task guidance"] },
      ],
    },
    cta: "Explore the PigPlan service",
  },
};

function Check() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" className="mt-[4px] flex-none text-brand">
      <path d="M4 9.5l3 3 7-7" />
    </svg>
  );
}

function Spark() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9L12 2.5zM19 15l.9 2.6 2.6.9-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9L19 15z" />
    </svg>
  );
}

/** Illustrative PigPlan AI screens: a weekly-report alert (live) and a chat answer (opens Dec 2026). */
function AiDemo({ d }: { d: (typeof T)["ko"]["ai"]["demo"] }) {
  return (
    <figure className="m-0">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-[14px] bg-white p-5 text-ink">
          <div className="flex items-center justify-between gap-2 text-[13px] font-semibold">
            <span className="inline-flex items-center gap-1.5 text-alert">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1.5l7 12.5H1L8 1.5zm-.75 4.5v4h1.5V6h-1.5zm0 5.25v1.5h1.5v-1.5h-1.5z" />
              </svg>
              {d.alertTag}
            </span>
          </div>
          <p className="m-0 mt-2 text-[18px] font-bold leading-[1.3]">{d.alertTitle}</p>
          <p className="m-0 mt-1 text-[14px] text-ink-2">{d.alertText}</p>
          <dl className="m-0 mt-4 grid grid-cols-3 gap-2 border-t border-line-soft pt-3">
            {d.kpis.map(([k, v]) => (
              <div key={k} className="flex flex-col-reverse">
                <dt className="text-[12px] text-muted">{k}</dt>
                <dd className="m-0 text-[16px] font-bold tabular-nums">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-2.5 rounded-[14px] border border-night-line bg-night-2 p-5">
          <span className="self-start rounded-full border border-ai-night/40 px-2.5 py-0.5 text-[12px] font-semibold text-ai-night">{d.chatTag}</span>
          <p className="m-0 self-end rounded-[14px] rounded-br-[4px] bg-brand px-3.5 py-2 text-[15px] text-white">{d.q}</p>
          <p className="m-0 flex items-start gap-2 self-start rounded-[14px] rounded-bl-[4px] bg-white px-3.5 py-2 text-[15px] text-ink">
            <span aria-hidden="true" className="mt-[3px] text-ai-text">
              <Spark />
            </span>
            {d.a}
          </p>
        </div>
      </div>
      <figcaption className="mt-2 text-[13px] text-night-text">{d.label}</figcaption>
    </figure>
  );
}

/** headingLevel 1: the block is the /pigplan page title; 2: a product section on the home page. Panel titles sit one level below. */
export default function PigPlanBlock({ locale, headingLevel = 2 }: { locale: Locale; headingLevel?: 1 | 2 }) {
  const t = T[locale];
  const H = headingLevel === 1 ? "h1" : "h2";
  const PanelH = headingLevel === 1 ? "h2" : "h3";

  return (
    <div id="pigplan">
      <div className="max-w-[820px]">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <H className="m-0 mt-4 text-[clamp(32px,4.4vw,54px)] font-bold leading-[1.15] tracking-[-0.04em]">{t.title}</H>
        <p className="m-0 mt-5 text-[clamp(18px,1.9vw,22px)] font-semibold leading-[1.55] tracking-[-0.015em] text-ink-2">
          {t.sub[0]}
          <br className="max-sm:hidden" /> {t.sub[1]}
        </p>
      </div>

      {/* One brand section: PigPlan (foundation, 40%) + PigPlan AI (60%). */}
      <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-[24px] border border-line bg-card shadow-[0_1px_2px_rgba(21,37,75,0.04),0_32px_64px_-32px_rgba(21,37,75,0.25)] min-[1000px]:grid-cols-[minmax(0,4fr)_minmax(0,6fr)]">
        <article className="flex flex-col p-[clamp(28px,3.5vw,44px)]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[15px] font-bold tracking-[0.04em] text-brand">{t.plan.name}</span>
            <Badge tone="live">{t.plan.badge}</Badge>
          </div>
          <PanelH className="m-0 mt-4 text-[clamp(22px,2.2vw,27px)] font-bold leading-[1.3] tracking-[-0.025em]">
            {t.plan.name} <span className="text-muted">—</span> {t.plan.title}
          </PanelH>
          <p className="m-0 mt-2 text-[17px] text-ink-2">{t.plan.foot}</p>
          <ul className="m-0 mt-6 grid list-none gap-3 border-t border-line-soft p-0 pt-6 text-[17px]">
            {t.plan.features.map((f) => (
              <li key={f.text} className="flex gap-2.5">
                <Check />
                <span>
                  {f.text}
                  {f.note && <span className="ml-2 whitespace-nowrap text-[14px] text-muted">{f.note}</span>}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="relative flex flex-col gap-7 overflow-hidden bg-night p-[clamp(28px,3.5vw,44px)] text-white">
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(18,166,160,0.30),transparent_70%)]" />
          <div className="relative">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-ai text-night">
                <Spark />
              </span>
              <span className="text-[15px] font-bold tracking-[0.04em] text-ai-night">{t.ai.name}</span>
            </div>
            <PanelH className="m-0 mt-4 text-[clamp(24px,2.6vw,32px)] font-bold leading-[1.25] tracking-[-0.03em]">
              {t.ai.name} <span className="text-night-text">—</span> {t.ai.title}
            </PanelH>
            <p className="m-0 mt-3 text-[18px] font-semibold leading-[1.5] text-white">
              {t.ai.sub[0]}
              <br className="max-sm:hidden" /> {t.ai.sub[1]}
            </p>
          </div>

          <div className="relative">
            <AiDemo d={t.ai.demo} />
          </div>

          <ol className="relative m-0 grid list-none gap-3 p-0">
            {t.ai.values.map((v) => (
              <li key={v.title} className="rounded-[14px] border border-night-line p-5">
                <p className="m-0 text-[17px] font-bold">
                  <span className="mr-1.5 text-ai-night">{v.n}</span>
                  {v.title}
                </p>
                <p className="m-0 mt-2 text-[15px] text-night-text">{v.items.join(" · ")}</p>
              </li>
            ))}
          </ol>
        </article>
      </div>

      <div className="mt-8">
        <ButtonLink href={LINKS.pigplanService} external size="lg" className="max-sm:w-full">
          {t.cta}
          <ArrowIcon />
        </ButtonLink>
      </div>
    </div>
  );
}
