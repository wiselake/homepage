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
 * Indigo draft 2026-10-23 (option B): PigOS is the page's one dark section (#111233), a pause mid-page.
 * The images were re-rendered for this background (dark window chrome, transparent phone image).
 * PigOS brief 2026-10-23: the section now says why PigOS exists apart from PigPlan (country benchmarks,
 * seven languages, risk signals) instead of listing feature names. Checked against pigos.io and the
 * PigOS code on 2026-10-23: 7 public languages (en, pt, es, zh, vi, th, ru); Core free, paid AI plans not
 * live; Android and iOS live; benchmarks are fixed per-country reference values from public sources
 * (no peer ranking), so "reference benchmarks", not "national averages"; risk alerts are rule-based and
 * the LLM only explains, in an add-on that is not on sale yet, hence "AI explanations in development";
 * units and entry workflows are not localized per country, so only languages are claimed.
 */
const T = {
  ko: {
    eyebrow: "PigOS · Global Swine OS",
    // [product name, descriptor]: the descriptor starts its own line from 1000px up.
    title: ["PigOS —", "AI\u00a0기반 글로벌 양돈\u00a0관리\u00a0시스템"],
    // Why a separate product (2026-10-23 brief): PigPlan grew around Korean farms; benchmarks, feed-cost
    // pressure and farm practice differ by country, so PigOS was designed anew rather than translated.
    // Line segments: one line each from 1200px up, running text below that. A no-break space (\u00a0) keeps word pairs
    // such as "발전해 왔습니다" and "참고 기준" on one line.
    lead: ["피그플랜은 한국 양돈농장의 현장에 맞춰 발전해\u00a0왔습니다.", "하지만 나라마다 생산성 기준도, 사료비\u00a0부담도,", "농장 운영 방식도 다릅니다."],
    statement: ["PigOS는 피그플랜을 번역한 해외 버전이 아니라,", "국가별 양돈 환경과 관리\u00a0기준에 맞춰 새롭게\u00a0설계했습니다."],
    points: [
      { title: "나라별로 다른 KPI 기준", text: "같은 PSY라도 나라에 따라 평가가 달라집니다. 국가별 성적 참고\u00a0기준으로 농장의 생산성을 해석합니다." },
      { title: "7개 언어, 하나의 플랫폼", text: "7개 언어로 농장 기록과 주요 성적을 관리합니다." },
      // 2026-10-23 brief: presented as AI-based risk management. Alerts run on a validated rule engine
      // whose criteria were shaped with AI-assisted analysis and pig-farming expertise; the copy does not
      // say an AI model detects risks in real time or acts on its own.
      { title: "AI 기반 위험 관리", text: "AI 기술과 양돈 전문가의 경험을 반영한 검증된\u00a0기준으로 농장\u00a0데이터를 점검하고, 놓치기 쉬운 위험\u00a0신호를 먼저 찾아 알려줍니다." },
    ],
    facts: "7 languages · Free Core plan · Android & iOS apps",
    imgAlt: "PigOS 웹 대시보드와 iOS 앱 — PSY·NPD·분만율, 목표 대비 경보, 국가 기준 비교",
  },
  en: {
    eyebrow: "PigOS · Global Swine OS",
    // \u2011 is a no-break hyphen, so "AI-Assisted" never splits at the hyphen.
    title: ["PigOS —", "AI\u2011Assisted Global Swine\u00a0Management"],
    // English runs as one paragraph: split lines left "South Korea." alone on a line.
    lead: ["PigPlan grew around the recordkeeping and operations of pig farms in South\u00a0Korea. But production benchmarks, feed-cost pressure and farm practices vary from country to country."],
    statement: ["PigOS is not a translated PigPlan.", "It was designed anew around each country's farming conditions and management standards."],
    points: [
      { title: "Country-specific KPI benchmarks", text: "The same PSY can mean different things in different countries. PigOS reads your performance against country reference benchmarks." },
      { title: "Seven languages, one platform", text: "Farm records and key results in seven languages." },
      { title: "AI-Powered Risk Management", text: "Risk monitoring uses validated criteria informed by AI\u2011assisted analysis and practical pig\u2011farming expertise to identify potential issues in farm records." },
    ],
    facts: "7 languages · Free Core plan · Android & iOS apps",
    imgAlt: "PigOS web dashboard and iOS app — PSY, NPD and farrowing rate, alerts against targets and national benchmarks",
  },
};

export default function PigOSBlock({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <section id="pigos" className="bg-night text-white">
      {/* Same frame as the PigPlan section: title left and the "why PigOS" lead right, then three ruled
          points with the CTA on the left and the real product visual on the right. On phones the
          message reads first and the image comes last. */}
      <div className="mx-auto max-w-[1200px] px-6 py-[clamp(80px,10vw,136px)]">
        <SectionLabel n="02" onNight>
          {t.eyebrow}
        </SectionLabel>
        <div className="mt-10 grid grid-cols-1 items-end gap-x-16 gap-y-6 min-[1000px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <h2 className="m-0 text-balance text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.15] tracking-[-0.04em]">
            {t.title[0]} <br className="max-[999px]:hidden" />
            {t.title[1]}
          </h2>
          <div>
            <p className="m-0 text-pretty text-[clamp(17px,1.4vw,18px)] leading-[1.7] text-night-sub">
              {t.lead.map((line) => (
                <span key={line} className="min-[1200px]:block">
                  {line}{" "}
                </span>
              ))}
            </p>
            <p className="m-0 mt-4 text-pretty text-[clamp(18px,1.6vw,20px)] font-semibold leading-[1.55] text-white">
              {t.statement.map((line) => (
                <span key={line} className="min-[1200px]:block">
                  {line}{" "}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-x-14 gap-y-12 min-[1000px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <ol className="m-0 list-none p-0">
              {t.points.map((pt, i) => (
                <li key={pt.title} className="relative grid grid-cols-[40px_1fr] gap-x-2 border-t border-night-line py-5 before:absolute before:-top-px before:left-0 before:h-0.5 before:w-6 before:bg-accent-soft">
                  <span className="pt-0.5 text-[14px] font-semibold tabular-nums text-accent-soft">0{i + 1}</span>
                  <div>
                    <h3 className="m-0 text-[clamp(19px,1.7vw,21px)] font-bold tracking-[-0.02em]">{pt.title}</h3>
                    <p className="m-0 mt-1.5 text-pretty text-[16px] leading-[1.6] text-night-sub">{pt.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p lang="en" className="m-0 border-t border-night-line pt-5 text-[15px] text-night-sub">{t.facts}</p>
            <a
              href={LINKS.pigos}
              target="_blank"
              rel="noopener"
              lang="en"
              className="mt-8 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-[8px] bg-accent-soft px-7 text-[17px] font-semibold text-ink transition-colors hover:bg-tint-line hover:text-ink max-sm:w-full"
            >
              Explore PigOS
              <ArrowIcon />
            </a>
          </div>

          <a href={LINKS.pigos} target="_blank" rel="noopener" className="group block">
            {/* Phones get the large single-phone dashboard; the web + mobile visual is unreadable that small. */}
            <picture>
              <source media="(max-width: 767px)" srcSet="/images/b/pigos-app-mobile.png" width={1860} height={1650} />
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
      </div>
    </section>
  );
}
