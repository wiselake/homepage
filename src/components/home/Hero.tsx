import type { Locale } from "@/lib/site";
import { Badge, ButtonLink } from "../ui";

const T = {
  ko: {
    eyebrow: "WiseLake · Data Moves. Value Follows.",
    title: "데이터가 AI 시대의 가치가 됩니다.",
    sub: ["현장의 데이터를 더 나은 의사결정으로.", "AI 기술을 새로운 가치로 연결합니다."],
    ctaA: "양돈 AI 알아보기",
    ctaB: "콘텐츠 가치 알아보기",
    indexTitle: "와이즈레이크의 제품",
    rows: [
      { n: "국내", name: "PigPlan + PigPlan AI", sub: "양돈 농장관리와 양돈 전문 AI", href: "#pigplan", badge: "운영 중", tone: "live" as const },
      { n: "글로벌", name: "PigOS", sub: "세계의 양돈농장을 위한 운영 플랫폼", href: "#pigos", badge: "운영 중", tone: "live" as const },
      { n: "콘텐츠 가치", name: "NanoTrans", sub: "AI 시대 콘텐츠 가치 기술", href: "#nanotrans", badge: "개발 중", tone: "dev" as const },
    ],
  },
  en: {
    eyebrow: "WiseLake · Data Moves. Value Follows.",
    title: "Turning Data into Value in the AI Era.",
    sub: ["Field data, turned into better decisions.", "AI technology, connected to new value."],
    ctaA: "Explore Swine AI",
    ctaB: "Explore Content Value",
    indexTitle: "Our products",
    rows: [
      { n: "Korea", name: "PigPlan + PigPlan AI", sub: "Farm management and AI for pig farms", href: "#pigplan", badge: "Live", tone: "live" as const },
      { n: "Global", name: "PigOS", sub: "Operating platform for pig farms worldwide", href: "#pigos", badge: "Live", tone: "live" as const },
      { n: "Content value", name: "NanoTrans", sub: "Content value in the AI era", href: "#nanotrans", badge: "In development", tone: "dev" as const },
    ],
  },
};

export function Hero({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <section className="relative overflow-hidden">
      {/* Soft brand glow behind the headline; decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_12%_0%,rgba(23,107,193,0.10),transparent_70%),radial-gradient(40%_50%_at_95%_20%,rgba(18,166,160,0.08),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-x-16 gap-y-12 px-6 pb-[clamp(64px,8vw,112px)] pt-[clamp(56px,9vw,128px)] min-[1000px]:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div>
          <p className="m-0 text-[14px] font-bold uppercase tracking-[0.14em] text-brand">{t.eyebrow}</p>
          <h1 className="m-0 mt-6 text-[clamp(40px,6vw,72px)] font-bold leading-[1.1] tracking-[-0.04em] text-ink">{t.title}</h1>
          <p className="m-0 mt-7 text-[clamp(19px,2vw,24px)] font-semibold leading-[1.5] tracking-[-0.015em] text-ink-2">
            {t.sub[0]}
            <br />
            {t.sub[1]}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="#livestock" size="lg" className="max-sm:w-full">
              {t.ctaA}
            </ButtonLink>
            <ButtonLink href="#content" size="lg" variant="outline" className="max-sm:w-full">
              {t.ctaB}
            </ButtonLink>
          </div>
        </div>

        <nav aria-label={t.indexTitle} className="rounded-[20px] border border-line bg-card/90 p-2 shadow-[0_1px_2px_rgba(21,37,75,0.04),0_24px_48px_-24px_rgba(21,37,75,0.18)] backdrop-blur">
          <p className="m-0 px-5 pb-1 pt-4 text-[14px] font-semibold text-muted">{t.indexTitle}</p>
          <ul className="m-0 list-none p-0">
            {t.rows.map((r) => (
              <li key={r.n}>
                <a href={r.href} className="flex items-center gap-4 rounded-[14px] px-5 py-[18px] text-ink hover:bg-paper hover:text-ink">
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-bold uppercase tracking-[0.08em] text-brand">{r.n}</span>
                    <span className="block text-[18px] font-bold leading-[1.35]">{r.name}</span>
                    <span className="block text-[15px] text-muted">{r.sub}</span>
                  </span>
                  <Badge tone={r.tone}>{r.badge}</Badge>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
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
