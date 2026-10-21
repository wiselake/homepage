import { LINKS, type Locale } from "@/lib/site";
import { ArrowIcon } from "../ui";

/*
 * Facts checked on pigos.io on 2026-10-20 (iOS app: App Store, 2026-09-23): 7 UI languages; Core (records, KPI dashboard,
 * country benchmarks, anomaly alerts) is free and live; AI credit plans are "in the works",
 * so AI analysis is not listed as a feature here. PigOS is its own global product — it is not
 * described as running on Korean PigPlan data. The image is a capture of the pigos.io English hero.
 */
const T = {
  ko: {
    eyebrow: "PigOS · Global Swine OS",
    title: "PigOS — 세계의 양돈농장을 위한 운영 플랫폼",
    body: "국가별 기준으로 농장의 성적과 위험 신호를 확인하는 글로벌 양돈 운영 플랫폼입니다.",
    features: [
      ["Farm Records", "농장 생산 기록"],
      ["Performance Analytics", "주요 성적 분석"],
      ["Country Benchmarks", "국가별 성적 기준"],
      ["Early Warnings", "운영 위험 조기경보"],
    ],
    facts: "7개 언어 · 기본 기능 무료 · Android · iOS 앱",
    imgAlt: "PigOS 영문 랜딩 페이지 — 기록을 입력하면 국가별 기준으로 손실 위험을 알리는 대시보드",
  },
  en: {
    eyebrow: "PigOS · Global Swine OS",
    title: "PigOS — The Operating Platform for Pig Farms Worldwide",
    body: "Records, KPIs and risk signals against country benchmarks — for pig farms worldwide.",
    features: [
      ["Farm Records", "Production records for every farm"],
      ["Performance Analytics", "Key KPIs at a glance"],
      ["Country Benchmarks", "Local performance standards"],
      ["Early Warnings", "Operational risks, flagged early"],
    ],
    facts: "7 languages · Free Core plan · Android & iOS apps",
    imgAlt: "PigOS landing page — a dashboard that flags loss risk against country benchmarks as records are entered",
  },
};

export default function PigOSBlock({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <section id="pigos" className="relative overflow-hidden bg-[#0e1a38] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_85%_30%,rgba(18,166,160,0.18),transparent_70%),radial-gradient(40%_50%_at_0%_100%,rgba(23,107,193,0.25),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-x-16 gap-y-12 px-6 py-[clamp(80px,10vw,136px)] min-[1000px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <p className="m-0 text-[14px] font-bold uppercase tracking-[0.12em] text-ai-night">{t.eyebrow}</p>
          <h2 className="m-0 mt-4 text-[clamp(30px,3.4vw,40px)] font-bold leading-[1.2] tracking-[-0.035em]">
            {t.title}
          </h2>
          <p className="m-0 mt-5 text-[18px] text-night-text">{t.body}</p>
          <ul className="m-0 mt-8 grid list-none grid-cols-1 gap-x-6 gap-y-4 p-0 sm:grid-cols-2">
            {t.features.map(([en]) => (
              <li key={en} className="border-t border-night-line pt-3">
                <span lang="en" className="block text-[17px] font-bold">
                  {en}
                </span>
              </li>
            ))}
          </ul>
          <p className="m-0 mt-6 text-[15px] text-night-text">{t.facts}</p>
          <a
            href={LINKS.pigos}
            target="_blank"
            rel="noopener"
            lang="en"
            className="mt-9 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[8px] bg-white px-6 text-[17px] font-semibold text-night hover:bg-brand-tint hover:text-night max-sm:w-full"
          >
            Explore PigOS
            <ArrowIcon />
          </a>
        </div>

        <a href={LINKS.pigos} target="_blank" rel="noopener" className="group block rounded-[20px] border border-night-line bg-night-2/60 p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pigos-landing.jpg"
            alt={t.imgAlt}
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full rounded-[14px] transition-opacity group-hover:opacity-95"
          />
        </a>
      </div>
    </section>
  );
}
