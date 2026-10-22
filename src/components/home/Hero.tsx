import type { Locale } from "@/lib/site";
import { ArrowIcon, ButtonLink, TextLink } from "../ui";

const T = {
  ko: {
    eyebrow: "WiseLake · Data Moves. Value Follows.",
    title: ["쌓인 데이터가,", "AI 시대의 가치가 됩니다."],
    sub: ["양돈 현장의 기록을 더 나은 운영 판단으로 연결하고,", "AI 시대 콘텐츠의 가치를 측정하는 기술을 개발합니다."],
    ctaA: "양돈 AI 알아보기",
    ctaB: "콘텐츠 가치 알아보기",
    indexTitle: "와이즈레이크의 제품",
    rows: [
      { n: "국내", name: "PigPlan + PigPlan AI", sub: "농장 기록·경영관리부터 양돈 전문 AI 분석까지", href: "#pigplan" },
      { n: "글로벌", name: "PigOS", sub: "세계의 양돈농장을 위한 운영 플랫폼", href: "#pigos" },
      { n: "콘텐츠 가치", name: "NanoTrans", sub: "AI 시대 콘텐츠 가치 기술", href: "#nanotrans" },
    ],
  },
  en: {
    eyebrow: "WiseLake · Data Moves. Value Follows.",
    title: ["Accumulated Data,", "Turned into Value for the AI Era."],
    sub: ["We turn pig-farm records into better operating decisions,", "and build technology to measure the value of content in the AI era."],
    ctaA: "Explore Swine AI",
    ctaB: "Explore Content Value",
    indexTitle: "Our products",
    rows: [
      { n: "Korea", name: "PigPlan + PigPlan AI", sub: "From farm records and business management to AI analysis for pig farms", href: "#pigplan" },
      { n: "Global", name: "PigOS", sub: "Operating platform for pig farms worldwide", href: "#pigos" },
      { n: "Content value", name: "NanoTrans", sub: "Content value in the AI era", href: "#nanotrans" },
    ],
  },
};

export function Hero({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-6 pb-[clamp(56px,7vw,96px)] pt-[clamp(72px,11vw,168px)]">
        <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.16em] text-brand">{t.eyebrow}</p>
        <h1 className="m-0 mt-8 max-w-[1040px] text-balance text-[clamp(42px,7.4vw,100px)] font-bold leading-[1.06] tracking-[-0.05em] text-ink">
          {t.title[0]}
          <br />
          {t.title[1]}
        </h1>
        <p className="m-0 mt-9 max-w-[680px] text-[clamp(19px,1.9vw,24px)] leading-[1.55] tracking-[-0.015em] text-ink-2">
          {t.sub[0]}
          <br />
          {t.sub[1]}
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
          <ButtonLink href="#livestock" size="lg" className="max-sm:w-full">
            {t.ctaA}
            <ArrowIcon down />
          </ButtonLink>
          <TextLink href="#content">
            {t.ctaB}
            <ArrowIcon down />
          </TextLink>
        </div>
      </div>

      {/* Product portfolio: three ruled columns under the headline. Each whole column links to its
          section below; hover/focus turns only the name and arrow brand blue (no background change). */}
      <nav aria-label={t.indexTitle} className="mx-auto max-w-[1200px] px-6 pb-[clamp(48px,6vw,80px)]">
        <ol className="m-0 grid list-none grid-cols-1 border-t border-line p-0 md:grid-cols-3">
          {t.rows.map((r) => (
            <li key={r.name} className="border-b border-line md:border-b-0 md:border-l md:first:border-l-0">
              <a href={r.href} className="group block h-full py-7 text-ink hover:text-ink md:px-8 md:[li:first-child>&]:pl-0">
                <span className="block text-[14px] font-semibold uppercase tracking-[0.1em] text-muted">{r.n}</span>
                <span className="mt-3 block text-[clamp(21px,1.75vw,24px)] font-bold leading-[1.3] tracking-[-0.02em] transition-colors group-hover:text-brand group-focus-visible:text-brand">
                  {r.name}
                  <span aria-hidden="true" className="ml-2.5 inline-block align-[-0.08em] text-muted transition group-hover:translate-y-0.5 group-hover:text-brand group-focus-visible:text-brand">
                    <ArrowIcon down />
                  </span>
                </span>
                <span className="mt-2 block text-[16px] leading-[1.55] text-ink-2">{r.sub}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}

const TRUST = {
  ko: {
    title: "현장에서 시작한 기술, 데이터로 쌓아온 신뢰",
    items: [
      ["30년 이상", "피그플랜 기술·서비스 역사"],
      ["약 700개 농가", "피그플랜 이용 농가"],
      ["1995년", "피그플랜 개발의 시작"],
    ],
  },
  en: {
    title: "Built on Decades of Pig-Farming Experience",
    items: [
      ["30+ Years", "PigPlan technology heritage"],
      ["About 700 Farms", "Farms using PigPlan"],
      ["Since 1995", "PigPlan origins"],
    ],
  },
};

export function TrustBand({ locale }: { locale: Locale }) {
  const t = TRUST[locale];
  return (
    <section aria-labelledby="trust-title" className="bg-night text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-[clamp(56px,7vw,88px)]">
        <h2 id="trust-title" className="m-0 text-[clamp(22px,2.6vw,30px)] font-bold tracking-[-0.025em]">
          {t.title}
        </h2>
        <dl className="m-0 mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
          {t.items.map(([v, l]) => (
            <div key={v} className="flex flex-col-reverse border-t border-night-line pt-6">
              <dt className="mt-2 text-[16px] text-night-text">{l}</dt>
              <dd className="m-0 text-[clamp(34px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
