"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function StatCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{value}</div>
      <div className="text-sm text-text-muted">{label}</div>
    </motion.div>
  );
}

export function PigPlanSection({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("pigplan");

  const stats = [
    { value: "700+", label: t("stats.farms") },
    { value: "20+", label: t("stats.years") },
    { value: "#1", label: t("stats.market") },
  ];

  return (
    <Section id="pigplan" dark={false}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Content */}
        <div>
          {showHeader && (
            <>
              <SectionLabel>PigPlan</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text-dark">
                {t("title")}
              </h2>
            </>
          )}
          <p className="text-text-muted text-lg leading-relaxed mb-6">
            {t("desc")}
          </p>
          <p className="text-text-muted leading-relaxed mb-4">
            {t("psy")}
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            {t("clients")}
          </p>
          <Button
            variant="primary"
            href="https://pigplan.io/"
          >
            {t("cta")}
          </Button>
        </div>

        {/* Right - Stats */}
        <div className="relative overflow-hidden grid grid-cols-3 gap-4 p-8 rounded-2xl glass-light shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/50 to-transparent rounded-t-2xl pointer-events-none" />
          {stats.map((stat, i) => (
            <StatCard key={i} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export function InsightPigPlanSection() {
  const t = useTranslations("insightPigplan");

  return (
    <Section dark>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Video */}
        <div className="relative aspect-video rounded-2xl overflow-hidden glass">
          <iframe
            src="https://www.youtube.com/embed/yEyCOZCKLHI"
            title={t("title")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Right - Content */}
        <div>
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t("title")}
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            {t("desc")}
          </p>
          <p className="text-accent font-medium text-lg mb-8">
            {t("benefit")}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button href="https://pigplan.io/insight/" variant="primary">
              {t("cta")}
            </Button>
            <Button
              variant="secondary"
              href="https://pigplan.io/insight/"
            >
              {t("ctaInquiry")}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function PigSignalSection() {
  const t = useTranslations("pigSignal");

  return (
    <Section dark={false}>
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>PigSignal</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-text-dark">
          {t("title")}
        </h2>
        <p className="text-text-muted text-lg leading-relaxed mb-4">
          {t("desc")}
        </p>
        <p className="text-text-muted leading-relaxed mb-8">
          {t("nanotransIntegration")}
        </p>
      </div>
    </Section>
  );
}
