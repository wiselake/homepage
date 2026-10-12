import { LINKS, localePath, type Locale } from "@/lib/site";
import { Badge, ButtonLink, CheckItem, TextLink } from "../ui";

/**
 * Verdicts follow the public PSY reference ranges on pigos.io:
 * Spain 28–30, USA 26–28, Vietnam 22–26, China 22–24. A PSY of 24.6 therefore reads
 * below benchmark in ES/US, within range in VN, above range in CN.
 */
const VERDICTS = [
  { code: "ES", fill: 40, below: true },
  { code: "US", fill: 55, below: true },
  { code: "VN", fill: 75, below: false, key: "within" },
  { code: "CN", fill: 95, below: false, key: "above" },
] as const;

const LANGS = ["EN", "中文", "ES", "PT", "VI", "TH", "RU"];

const T = {
  ko: {
    product: "PRODUCT 02",
    region: "해외 전용",
    live: "운영 중",
    kind: "AI 조기경보 농장 OS",
    title: "기록하는 순간, AI가 그 나라의 기준으로 손실 위험을 판단합니다",
    lede: "농장은 기록만 하면 됩니다. 경보와 다음 행동은 PigOS가 알려줍니다.",
    langs: "7개 언어 · 미국, 중국, 동남아, 중남미",
    langsLabel: "지원 언어 7개",
    steps: [
      ["기록", "분만 · 이유 · 교배를\n모바일로, 오프라인에서도"],
      ["나라별 기준 판단", "같은 PSY 24.6도\n나라마다 판정이 다릅니다"],
      ["손실 경보", "기준을 넘는 순간 바로,\n월말이 되기 전에"],
      ["다음 행동", "오늘 챙길 3가지를\n매일 아침 정리"],
    ],
    verdictTitle: "PSY 24.6의 판정",
    below: "미달",
    within: "범위 내",
    above: "우수",
    stillbirth: "사산율",
    benchmark: "기준 8%",
    top3: "오늘의 TOP 3",
    tasks: ["분만사 점검", "분만 예정 모돈", "이유 후 체중"],
    chips: ["기본 기능 무료", "AI 분석은 크레딧 (준비 중)", "Android 출시 · iOS 예정", "피그플랜 데이터 기반"],
    partner: {
      eyebrow: "해외 유통 파트너 모집",
      title: "해외 농가와 거래하는 기업이라면, PigOS를 함께 공급해 주세요",
      text: "사료·동물약품·컨설팅 기업의 해외 농가 네트워크와 함께합니다. 국내 농가는 피그플랜을 이용해 주세요.",
      points: ["유통사 계정 하나로 거래 농장의 성적과 경보를 한곳에서", "농장 기본 기능은 무료라 도입 부담이 낮습니다", "7개 언어와 나라별 KPI 기준으로 현지에 바로 적용"],
      cta: "해외 유통·제휴 문의",
      site: "pigos.io 둘러보기 (영문) →",
    },
  },
  en: {
    product: "PRODUCT 01",
    region: "Outside Korea",
    live: "Live",
    kind: "AI early-warning farm OS",
    title: "The moment you enter a record, AI judges the loss risk against your country's benchmark",
    lede: "Farms just record. PigOS delivers the warning and the next action.",
    langs: "7 languages · USA, China, Southeast Asia, Latin America",
    langsLabel: "7 supported languages",
    steps: [
      ["Record", "Farrowing · weaning · mating\non mobile, even offline"],
      ["Country benchmark", "The same PSY 24.6 gets\na different verdict by country"],
      ["Loss warning", "The moment it crosses the line,\nbefore month-end"],
      ["Next action", "Your top 3 actions,\nevery morning"],
    ],
    verdictTitle: "Verdict for PSY 24.6",
    below: "Below",
    within: "Within",
    above: "Above",
    stillbirth: "Stillbirth",
    benchmark: "Benchmark 8%",
    top3: "Today's top 3",
    tasks: ["Check farrowing room", "Sows due to farrow", "Post-wean weight"],
    chips: ["Core is free", "AI analysis on credits (coming)", "Android live · iOS coming", "Built on PigPlan data"],
    partner: {
      eyebrow: "Distribution partners wanted",
      title: "Work with pig farms abroad? Offer them PigOS",
      text: "We partner with feed, animal-health and consulting companies that already serve farms in our markets.",
      points: ["One distributor account to see your farms' KPIs and alerts", "Core is free for farms, so adoption is easy", "7 languages and country-level KPIs, ready to use locally"],
      cta: "Become a partner",
      site: "Start free on pigos.io →",
    },
  },
};

function StepNumber({ n }: { n: number }) {
  return (
    <span aria-hidden="true" className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-brand text-[13px] font-bold text-white">
      {n}
    </span>
  );
}

function StepText({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="m-0 text-[18px] font-bold">{title}</h4>
      <p className="m-0 mt-1 whitespace-pre-line text-[14px] text-ink-2">{text}</p>
    </div>
  );
}

const stepCls = "flex flex-col items-center gap-3.5 border-b border-line-soft px-6 py-7 text-center";

export default function PigOSBlock({ locale }: { locale: Locale }) {
  const t = T[locale];
  const contactHref = `${localePath(locale, "/")}#contact`;

  return (
    <div id="pigos">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
        <div className="max-w-[720px]">
          <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-bold">
            <span className="tracking-[0.14em] text-brand">{t.product}</span>
            <Badge tone="neutral">{t.region}</Badge>
            <Badge tone="live">{t.live}</Badge>
            <span className="font-semibold text-muted">{t.kind}</span>
          </p>
          <h3 className="m-0 mt-3.5 text-[clamp(26px,2.8vw,34px)] font-bold leading-[1.25] tracking-[-0.03em]">{t.title}</h3>
          <p className="m-0 mt-3 text-ink-2">{t.lede}</p>
        </div>
        <div className="grid justify-items-start gap-2">
          <ul aria-label={t.langsLabel} className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {LANGS.map((l) => (
              <li key={l} className="rounded-[6px] border border-line-strong px-2 py-0.5 text-[13px] font-semibold">
                {l}
              </li>
            ))}
          </ul>
          <span className="text-[13px] text-muted">{t.langs}</span>
        </div>
      </div>

      <ol className="m-0 mt-7 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] overflow-hidden rounded-[12px] border border-line bg-card p-0">
        <li className={`${stepCls} min-[1000px]:border-r`}>
          <StepNumber n={1} />
          <div aria-hidden="true" className="flex h-32 items-center justify-center">
            <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
              <path d="M6 44L44 10l38 34" fill="#446cd2" />
              <rect x="14" y="40" width="60" height="50" fill="#eef1fa" stroke="#446cd2" strokeWidth="3" />
              <rect x="38" y="58" width="14" height="32" fill="#161b4f" />
              <rect x="100" y="8" width="44" height="82" rx="7" fill="#fff" stroke="#161b4f" strokeWidth="3" />
              <path d="M108 22h22" stroke="#446cd2" strokeWidth="4" />
              <path d="M108 32h28M108 40h28M108 48h18" stroke="#cbd5e1" strokeWidth="3" />
              <circle cx="122" cy="72" r="7" fill="#446cd2" />
              <path d="M119 72l2 2 4-4" stroke="#fff" strokeWidth="1.8" />
            </svg>
          </div>
          <StepText title={t.steps[0][0]} text={t.steps[0][1]} />
        </li>

        <li className={`${stepCls} min-[1000px]:border-r`}>
          <StepNumber n={2} />
          <div className="flex h-32 w-full max-w-[210px] flex-col justify-center gap-[7px] rounded-[10px] border border-line px-3 py-2.5 text-[12px]">
            <div className="text-[13px] font-bold">{t.verdictTitle}</div>
            {VERDICTS.map((v) => (
              <div key={v.code} className="grid grid-cols-[26px_1fr_auto] items-center gap-1.5 text-left">
                <b>{v.code}</b>
                <span className={`block h-1.5 rounded-[3px] ${v.below ? "bg-warn-track" : "bg-brand-line"}`}>
                  <span className={`block h-1.5 rounded-[3px] ${v.below ? "bg-warn" : "bg-brand-blue"}`} style={{ width: `${v.fill}%` }} />
                </span>
                <span className={`font-semibold ${v.below ? "text-warn-ink" : "text-brand"}`}>
                  {v.below ? t.below : "key" in v && v.key === "within" ? t.within : t.above}
                </span>
              </div>
            ))}
          </div>
          <StepText title={t.steps[1][0]} text={t.steps[1][1]} />
        </li>

        <li className={`${stepCls} min-[1000px]:border-r`}>
          <StepNumber n={3} />
          <div className="flex h-32 items-center justify-center">
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-warn-tint">
              <div className="flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full border-4 border-warn bg-card leading-[1.15]">
                <span className="text-[11px] text-ink-2">{t.stillbirth}</span>
                <b className="text-[22px]">27%</b>
                <span className="text-[11px] font-bold text-warn-ink">{t.benchmark}</span>
              </div>
              <span aria-hidden="true" className="absolute right-0.5 top-0.5 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-alert text-[15px] font-extrabold text-white">
                !
              </span>
            </div>
          </div>
          <StepText title={t.steps[2][0]} text={t.steps[2][1]} />
        </li>

        <li className={stepCls}>
          <StepNumber n={4} />
          <div className="flex h-32 items-center justify-center">
            <div className="grid w-[178px] gap-2 rounded-[10px] bg-night px-4 py-3.5 text-left text-[13px] text-white">
              <div className="flex items-center gap-1.5 font-bold text-night-text">
                <span className="rounded bg-brand-blue px-1.5 text-[11px] text-white">AI</span>
                {t.top3}
              </div>
              {t.tasks.map((task, i) => (
                <div key={task} className={`flex items-center gap-2 ${i === 0 ? "font-bold" : ""}`}>
                  <span className={`h-3 w-3 rounded-[3px] ${i === 0 ? "bg-warn" : "border-[1.5px] border-night-text"}`} />
                  {task}
                </div>
              ))}
            </div>
          </div>
          <StepText title={t.steps[3][0]} text={t.steps[3][1]} />
        </li>
      </ol>

      <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0 text-[14px] font-semibold">
        {t.chips.map((c) => (
          <li key={c} className="rounded-[6px] border border-line bg-card px-3.5 py-1.5">
            {c}
          </li>
        ))}
      </ul>

      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-x-10 gap-y-5 rounded-[12px] border border-brand-line bg-brand-tint p-7">
        <div>
          <p className="m-0 text-[13px] font-bold tracking-[0.1em] text-brand">{t.partner.eyebrow}</p>
          <h4 className="m-0 mt-2 text-[21px] font-bold tracking-[-0.02em]">{t.partner.title}</h4>
          <p className="m-0 mt-2 text-[15px] text-ink-2">{t.partner.text}</p>
        </div>
        <div className="grid gap-3.5">
          <ul className="m-0 grid list-none gap-2 p-0 text-[15px]">
            {t.partner.points.map((p) => (
              <CheckItem key={p}>{p}</CheckItem>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {locale === "ko" ? (
              <>
                <ButtonLink href={contactHref}>{t.partner.cta}</ButtonLink>
                <TextLink href={LINKS.pigos} external>
                  {t.partner.site}
                </TextLink>
              </>
            ) : (
              <>
                <ButtonLink href={LINKS.pigosStart} external>
                  Start free
                </ButtonLink>
                <TextLink href={contactHref}>{t.partner.cta} →</TextLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
