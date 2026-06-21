"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ═══════════════════════════════════════════════
   About — trust metrics (ink band)
   ═══════════════════════════════════════════════ */

const STAT_KEYS = ["years", "farms", "share", "records", "partners"] as const;

export function AboutStats() {
  const t = useTranslations("about.stats");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 20% 0px" });

  return (
    <section
      id="about-stats"
      className="relative overflow-hidden bg-bg-ink text-white py-[var(--section-padding-y)] px-[var(--section-padding-x)]"
    >
      {/* subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(245,166,35,0.10),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-[var(--container-max)]">
        <div className="text-center mb-14">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-text-on-ink-muted text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
          {STAT_KEYS.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2 tracking-tight">
                {t(`items.${key}.value`)}
              </div>
              <div className="text-sm text-text-on-ink-muted leading-snug px-2">
                {t(`items.${key}.label`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   About — journey (qualitative, no dates)
   ═══════════════════════════════════════════════ */

const STORY_KEYS = ["proven", "expand", "vision"] as const;

export function AboutStory() {
  const t = useTranslations("about.story");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 20% 0px" });

  return (
    <Section id="about-story" dark={false}>
      <div className="text-center mb-14">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-dark break-keep">
          {t("title")}
        </h2>
        <p className="text-text-muted text-lg max-w-3xl mx-auto">{t("subtitle")}</p>
      </div>

      <div ref={ref} className="grid md:grid-cols-3 gap-6 relative">
        {/* connector line (desktop) */}
        <div className="hidden md:block absolute top-9 left-[16%] right-[16%] h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />

        {STORY_KEYS.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative rounded-2xl glass-light p-7 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="relative z-10 w-9 h-9 rounded-full bg-amber-50 border border-amber-200 text-accent-dark flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                {t(`${key}.step`)}
              </span>
            </div>
            <h3 className="text-lg font-bold text-text-dark mb-2">{t(`${key}.title`)}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{t(`${key}.desc`)}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   About — company info (+ representative)
   ═══════════════════════════════════════════════ */

const INFO_KEYS = ["name", "ceo", "biz", "email", "tel"] as const;

export function AboutCompanyInfo() {
  const t = useTranslations("about.company");

  return (
    <Section id="about-company" dark={false}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-text-dark">
            {t("title")}
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-md">
            {t("subtitle")}
          </p>
          <Button href="/#contact" variant="primary">
            {t("cta")}
          </Button>
        </div>

        <div className="rounded-2xl glass-light p-8 sm:p-9 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
          <dl className="divide-y divide-border">
            {INFO_KEYS.map((key) => (
              <div
                key={key}
                className="flex items-baseline justify-between gap-6 py-3.5 first:pt-0 last:pb-0"
              >
                <dt className="text-sm text-text-muted shrink-0">{t(`items.${key}.label`)}</dt>
                <dd className="text-sm font-medium text-text-dark text-right">
                  {t(`items.${key}.value`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
