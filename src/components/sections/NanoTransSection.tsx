"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { NanoTransHowItWorks } from "./NanoTransHowItWorks";
import { NanoTransCoreTech } from "./NanoTransCoreTech";

const FEATURES = ["microPayment", "settlement", "payPerContent", "payPerUse"] as const;

const FEATURE_ICONS: Record<(typeof FEATURES)[number], ReactNode> = {
  // 코인 스택 — 마이크로페이먼트
  microPayment: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" strokeLinecap="round" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" strokeLinecap="round" />
    </svg>
  ),
  // 글로브 — 0.1초 글로벌 정산
  settlement: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" strokeLinecap="round" />
    </svg>
  ),
  // 문서 — Pay-per-Content
  payPerContent: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M6 2h8l4 4v16H6z" strokeLinejoin="round" />
      <path d="M14 2v4h4M9 13h6M9 17h4" strokeLinecap="round" />
    </svg>
  ),
  // 바 차트 — Pay-per-Use
  payPerUse: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7" y="12" width="3" height="6" rx=".5" />
      <rect x="12" y="8" width="3" height="10" rx=".5" />
      <rect x="17" y="5" width="3" height="13" rx=".5" />
    </svg>
  ),
};

function FeatureCard({
  featureKey,
  index,
}: {
  featureKey: (typeof FEATURES)[number];
  index: number;
}) {
  const t = useTranslations("nanotrans");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden p-8 rounded-2xl glass hover:border-accent/30 hover:shadow-[0_0_20px_rgba(245,166,35,0.08)] transition-all duration-500"
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.06] to-transparent rounded-t-2xl pointer-events-none" />
      <div className="text-accent mb-4">
        {FEATURE_ICONS[featureKey]}
      </div>
      <h3 className="text-lg font-semibold mb-2">
        {t(`features.${featureKey}.title`)}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {t(`features.${featureKey}.desc`)}
      </p>
    </motion.div>
  );
}

function ComparisonTable() {
  const t = useTranslations("comparison");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const rows = ["minAmount", "speed", "fees"] as const;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-20 glass overflow-hidden rounded-2xl"
    >
      <table className="w-full">
        <thead>
          <tr className="bg-white/[0.04]">
            <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-text-secondary">
              {t("header.category")}
            </th>
            <th scope="col" className="px-6 py-4 text-center text-sm font-medium text-text-secondary">
              {t("header.traditional")}
            </th>
            <th scope="col" className="px-6 py-4 text-center text-sm font-medium text-accent">
              NanoTrans
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row}
              className={`border-t border-border ${
                i % 2 === 0 ? "bg-bg-primary" : "bg-white/[0.02]"
              }`}
            >
              <td className="px-6 py-5 text-sm">{t(`rows.${row}.label`)}</td>
              <td className="px-6 py-5 text-center text-sm text-text-secondary">
                {t(`rows.${row}.traditional`)}
              </td>
              <td className="px-6 py-5 text-center text-sm font-semibold text-accent">
                {t(`rows.${row}.nanotrans`)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

export function NanoTransSection({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("nanotrans");

  return (
    <Section id="nanotrans" dark>
      {showHeader && (
        <div className="text-center mb-16">
          <SectionLabel>NanoTrans</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t("title")}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((key, i) => (
          <FeatureCard key={key} featureKey={key} index={i} />
        ))}
      </div>

      <NanoTransCoreTech />
      <NanoTransHowItWorks />
      <ComparisonTable />

      {/* Bottom CTA */}
      <div className="mt-16 flex justify-center">
        <a
          href="https://www.nanotrans.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-accent text-accent text-base font-semibold hover:shadow-[0_0_24px_rgba(245,166,35,0.2)] transition-all duration-300"
        >
          {t("cta")}
        </a>
      </div>
    </Section>
  );
}
