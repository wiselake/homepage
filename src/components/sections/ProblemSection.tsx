"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PROBLEMS = ["minAmount", "latency", "model"] as const;

const ICONS = {
  minAmount: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12M8 12h8" strokeLinecap="round" />
    </svg>
  ),
  latency: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" />
    </svg>
  ),
  model: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6M9 12h4M9 15h5" strokeLinecap="round" />
    </svg>
  ),
};

function ProblemCard({
  index,
  translationKey,
}: {
  index: number;
  translationKey: (typeof PROBLEMS)[number];
}) {
  const t = useTranslations("problem");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden p-8 rounded-2xl bg-white border border-black/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-red-400/30 hover:shadow-[0_8px_32px_rgba(239,68,68,0.1)] transition-all duration-500"
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gray-50 to-transparent rounded-t-2xl pointer-events-none" />
      <div className="text-red-500 mb-4">{ICONS[translationKey]}</div>
      <h3 className="text-lg font-semibold mb-2 text-text-dark">{t(`${translationKey}.title`)}</h3>
      <p className="text-text-muted text-sm leading-relaxed">
        {t(`${translationKey}.desc`)}
      </p>
    </motion.div>
  );
}

export function ProblemSection() {
  const t = useTranslations("problem");

  return (
    <Section id="problem" dark={false}>
      <div className="text-center mb-16">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          {t("title")}
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          {t("subtitle1")}
          <br />
          {t("subtitle2")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PROBLEMS.map((key, i) => (
          <ProblemCard key={key} index={i} translationKey={key} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-medium text-text-dark">
          → {t("conclusion")}
        </p>
      </div>
    </Section>
  );
}
