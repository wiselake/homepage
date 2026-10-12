import type { Locale } from "@/lib/site";
import { ArrowIcon, Badge, ButtonLink } from "../ui";

const T = {
  ko: {
    eyebrow: "WiseLake · Data Moves. Value Follows.",
    title: ["쌓인 데이터가,", "AI 시대의 가치가 됩니다"],
    lede: "와이즈레이크는 31년의 양돈 데이터로 농장의 손실을 미리 알리고, AI가 읽어 가는 콘텐츠의 가치를 측정해 거래하게 합니다.",
    ctaA: "축산 AI 보기",
    ctaB: "콘텐츠 가치 보기",
    statusTitle: "제품 현황 · 2026년 10월",
    rows: [
      { name: "피그플랜 AI 스위트", sub: "국내 양돈 농가 · 이 사이트", badge: "운영 중", tone: "live" as const },
      { name: "PigOS", sub: "해외 양돈 농가 · pigos.io", badge: "운영 중", tone: "live" as const },
      { name: "NanoTrans", sub: "언론사·콘텐츠 기업 · nanotrans.io", badge: "개발 중 · 파일럿", tone: "dev" as const },
    ],
  },
  en: {
    eyebrow: "WiseLake · Data Moves. Value Follows.",
    title: ["Accumulated data,", "turned into value for the AI era"],
    lede: "WiseLake uses 31 years of pig-farm data to warn farms of losses early, and measures the value of content that AI reads so it can be traded.",
    ctaA: "Livestock AI",
    ctaB: "Content value",
    statusTitle: "Product status · October 2026",
    rows: [
      { name: "PigOS", sub: "Pig farms outside Korea · pigos.io", badge: "Live", tone: "live" as const },
      { name: "PigPlan AI Suite", sub: "Pig farms in Korea", badge: "Live", tone: "live" as const },
      { name: "NanoTrans", sub: "Publishers · nanotrans.io", badge: "In development · pilot", tone: "dev" as const },
    ],
  },
};

const NUMBERS = {
  ko: [
    ["60.9%", "국내 양돈 전산관리 시스템 점유율"],
    ["700여 곳", "피그플랜을 쓰는 국내 농장"],
    ["1995", "서울대 연구소에서 피그플랜 최초 개발"],
    ["7개 언어", "해외 농가용 PigOS 지원 언어"],
  ],
  en: [
    ["60.9%", "Share of Korea's pig-farm record systems"],
    ["700+", "Korean farms on PigPlan"],
    ["1995", "PigPlan first built at a Seoul National University lab"],
    ["7 languages", "Supported by PigOS for farms abroad"],
  ],
};

export function Hero({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-end gap-14 px-6 pb-[clamp(48px,7vw,96px)] pt-[clamp(56px,9vw,120px)]">
      <div>
        <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-blue">{t.eyebrow}</p>
        <h1 className="m-0 text-[clamp(38px,5.6vw,68px)] font-bold leading-[1.12] tracking-[-0.035em]">
          {t.title[0]}
          <br />
          {t.title[1]}
        </h1>
        <p className="mt-7 max-w-[560px] text-[clamp(17px,1.6vw,19px)] text-ink-2">{t.lede}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="#livestock" size="lg">
            {t.ctaA}
            <ArrowIcon />
          </ButtonLink>
          <ButtonLink href="#content" size="lg" variant="outlineBrand">
            {t.ctaB}
          </ButtonLink>
        </div>
      </div>
      <div className="rounded-[12px] border border-line bg-card px-6 py-2">
        <p className="mb-1 mt-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">{t.statusTitle}</p>
        <dl className="m-0 text-[15px]">
          {t.rows.map((r, i) => (
            <div key={r.name} className={`flex items-center justify-between gap-4 py-4 ${i < t.rows.length - 1 ? "border-b border-line-soft" : ""}`}>
              <dt>
                <span className="block font-semibold">{r.name}</span>
                <span className="block text-[14px] text-muted">{r.sub}</span>
              </dt>
              <dd className="m-0">
                <Badge tone={r.tone}>{r.badge}</Badge>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function NumberBand({ locale }: { locale: Locale }) {
  return (
    <section aria-label={locale === "ko" ? "주요 수치" : "Key figures"} className="bg-night text-white">
      <dl className="mx-auto m-0 grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-x-6 gap-y-8 min-[700px]:gap-x-10 px-6 py-12">
        {NUMBERS[locale].map(([v, l]) => (
          <div key={v} className="flex flex-col-reverse">
            <dt className="mt-2 text-[14px] text-night-text">{l}</dt>
            <dd className="m-0 text-[clamp(36px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
