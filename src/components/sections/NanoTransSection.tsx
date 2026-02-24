"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NanoTransComparison } from "./NanoTransComparison";

const FEATURES = ["microPayment", "settlement", "payPerContent", "payPerUse"] as const;

const FEATURE_ICONS = {
  microPayment: "₩10",
  settlement: "0.1s",
  payPerContent: "📄",
  payPerUse: "📊",
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
      <div className="text-3xl font-bold text-accent mb-4">
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

      <NanoTransComparison />
      <ComparisonTable />
    </Section>
  );
}
