import { LINKS, type Locale } from "@/lib/site";
import { ArrowIcon, SectionLabel } from "../ui";

/*
 * Facts checked on pigos.io on 2026-10-20 (iOS app: App Store, 2026-09-23): 7 UI languages; Core (records, KPI dashboard,
 * country benchmarks, anomaly alerts) is free and live; AI credit plans are "in the works",
 * so AI analysis is not listed as a feature here. PigOS is its own global product — it is not
 * described as running on Korean PigPlan data. The image pairs a real PigOS web dashboard capture
 * (provided 2026-10-21; user, e-mail and farm names masked as "Sample Farm" / "Demo User") with the
 * real iOS app dashboard screenshot; the pigos.io hero capture was dropped because it
 * still says "iOS coming soon" (checked 2026-10-21).
 * Draft B keeps this draft-A layout for PigOS (chosen 2026-10-21); the facts line is English in both locales.
 * Since 2026-10-22 it shares the site-wide tone: flat navy (no glow), the shared section label and button.
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
    facts: "7 languages · Free Core plan · Android & iOS apps",
    imgAlt: "PigOS 웹 대시보드와 iOS 앱 — PSY·NPD·분만율, 목표 대비 경보, 국가 기준 비교",
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
    imgAlt: "PigOS web dashboard and iOS app — PSY, NPD and farrowing rate, alerts against targets and national benchmarks",
  },
};

export default function PigOSBlock({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <section id="pigos" className="bg-night text-white">
      {/* Text left, product visual right (draft-A layout). The visual is a web capture with the phone
          overlapping its bottom-right, navy window chrome and a bottom fade so it blends into the section;
          it stays inside the container like the other sections (2026-10-21). */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-x-14 gap-y-12 px-6 py-[clamp(80px,10vw,136px)] min-[1000px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <SectionLabel n="02" onNight>
            {t.eyebrow}
          </SectionLabel>
          <h2 className="m-0 mt-8 text-[clamp(30px,3.4vw,40px)] font-bold leading-[1.2] tracking-[-0.035em]">
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
          <p lang="en" className="m-0 mt-6 text-[15px] text-night-text">{t.facts}</p>
          <a
            href={LINKS.pigos}
            target="_blank"
            rel="noopener"
            lang="en"
            className="mt-9 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-[8px] bg-white px-7 text-[17px] font-semibold text-night transition-colors hover:bg-brand-tint hover:text-night max-sm:w-full"
          >
            Explore PigOS
            <ArrowIcon />
          </a>
        </div>

        <a href={LINKS.pigos} target="_blank" rel="noopener" className="group block">
          {/* Phones get the large single-phone dashboard; the web + mobile visual is unreadable that small. */}
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/b/pigos-app-mobile.jpg" width={1860} height={1650} />
            <img
              src="/images/b/pigos-web-mobile.png"
              alt={t.imgAlt}
              width={1520}
              height={1240}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full transition-opacity group-hover:opacity-95 max-md:rounded-[8px]"
            />
          </picture>
        </a>
      </div>
    </section>
  );
}
