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
      { n: "국내", name: "PigPlan + PigPlan AI", sub: "양돈 농장관리와 양돈 전문 AI", href: "#pigplan" },
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
      { n: "Korea", name: "PigPlan + PigPlan AI", sub: "Farm management and AI for pig farms", href: "#pigplan" },
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
        <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.18em] text-brand">{t.eyebrow}</p>
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

      {/* Product index: quieter than the headline, a ruled three-column table of contents. */}
      <nav aria-label={t.indexTitle} className="mx-auto max-w-[1200px] px-6 pb-[clamp(48px,6vw,80px)]">
        <ol className="m-0 grid list-none grid-cols-1 border-t border-line p-0 md:grid-cols-3">
          {t.rows.map((r) => (
            <li key={r.name} className="border-b border-line md:border-b-0 md:border-l md:px-7 md:first:border-l-0 md:first:pl-0">
              <a href={r.href} className="group flex h-full items-start justify-between gap-4 py-6 text-ink hover:text-ink">
                <span>
                  <span className="block text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">{r.n}</span>
                  <span className="mt-2 block text-[19px] font-semibold tracking-[-0.01em]">{r.name}</span>
                  <span className="mt-1 block text-[15px] text-muted">{r.sub}</span>
                </span>
                <span aria-hidden="true" className="mt-7 text-muted transition-transform group-hover:translate-y-0.5 group-hover:text-brand">
                  <ArrowIcon down />
                </span>
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
