"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function PigPlanSection({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("pigplan");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const heroStat = { value: "700+", label: t("stats.farms") };
  const supportStats = [
    { value: "20+", label: t("stats.years") },
    { value: "#1", label: t("stats.market") },
  ];

  return (
    <Section id="pigplan" dark>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Content */}
        <div>
          {showHeader && (
            <>
              <SectionLabel>PigPlan</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                {t("title")}
              </h2>
            </>
          )}
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            {t("desc")}
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            {t("psy")}
          </p>
          <p className="text-text-secondary leading-relaxed mb-8">
            {t("clients")}
          </p>
          <Button
            variant="primary"
            href="https://pigplan.io/"
          >
            {t("cta")}
          </Button>
        </div>

        {/* Right - Stats (oversize moment) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden p-8 sm:p-10 rounded-2xl glass"
        >
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/[0.03] to-transparent rounded-t-2xl pointer-events-none" />
          {/* Top-right radial gold glow for visual rhythm */}
          <div className="absolute inset-0 bg-[radial-gradient(110%_120%_at_100%_0%,rgba(245,166,35,0.14),transparent_55%)] pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-8">
            {/* Hero stat — oversize */}
            <div className="shrink-0">
              <div className="text-7xl lg:text-8xl font-bold text-accent leading-none tracking-tight">
                {heroStat.value}
              </div>
              <div className="mt-3 text-sm text-text-secondary">{heroStat.label}</div>
            </div>
            {/* Supporting stats — compact */}
            <div className="flex-1 space-y-4 sm:border-l sm:border-black/10 sm:pl-8">
              {supportStats.map((stat, i) => (
                <div key={i} className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-bold text-accent whitespace-nowrap">
                    {stat.value}
                  </span>
                  <span className="text-sm text-text-secondary">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export function InsightPigPlanSection({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("insightPigplan");

  return (
    <Section id="insight-pigplan" dark={false}>
      {/* Section header */}
      {showHeader && (
        <div className="text-center mb-12">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-dark">
            {t("title")}
          </h2>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Video */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
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
          <p className="text-text-muted text-lg leading-relaxed mb-4">
            {t("desc")}
          </p>
          <p className="text-accent-dark font-medium text-lg mb-8">
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

      {/* 3-step flow */}
      <div className="mt-20 mb-16">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-10 text-text-dark">
          {t("flow.title")}
        </h3>
        <div className="grid sm:grid-cols-3 gap-6 relative">
          {/* Connector lines (desktop) */}
          <div className="hidden sm:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20" />

          {(["s1", "s2", "s3"] as const).map((key, i) => (
            <div key={key} className="flex flex-col items-center text-center gap-3">
              {/* Step number */}
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center relative z-10">
                <span className="text-sm font-bold text-accent-dark">{i + 1}</span>
              </div>
              <span className="text-base font-semibold text-text-dark">
                {t(`flow.${key}`)}
              </span>
              <span className="text-sm text-text-muted leading-relaxed">
                {t(`flow.${key}_desc`)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid sm:grid-cols-3 gap-6">
        {(["f1", "f2", "f3"] as const).map((key) => (
          <div
            key={key}
            className="group relative overflow-hidden p-6 rounded-2xl glass-light shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-500"
          >
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl pointer-events-none" />
            <h4 className="text-lg font-bold text-text-dark mb-2">
              {t(`features.${key}_title`)}
            </h4>
            <p className="text-text-muted text-sm leading-relaxed">
              {t(`features.${key}_desc`)}
            </p>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
          </div>
        ))}
      </div>
    </Section>
  );
}

const API_KEYS = ["supplyForecast", "costIndex", "riskSignal"] as const;

export function PigSignalSection({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("pigSignal");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="pigsignal" dark>
      {/* Header */}
      <div className="text-center mb-14">
        {showHeader && (
          <>
            <SectionLabel>{t("label")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("title")}
            </h2>
          </>
        )}
        <p className="text-text-secondary text-lg max-w-3xl mx-auto mb-1">
          {t("subtitle_line1")}
        </p>
        <p className="text-text-secondary text-lg max-w-3xl mx-auto mb-6">
          {t("subtitle_line2")}
        </p>
        <p className="text-text-secondary text-sm max-w-2xl mx-auto mb-1">
          {t("ntIntegration_line1")}
        </p>
        <p className="text-accent font-semibold text-base max-w-2xl mx-auto">
          {t("ntIntegration_line2")}
        </p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* API response card */}
        <div className="rounded-2xl bg-bg-ink border border-white/10 overflow-hidden mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
            <span className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            </span>
            <span className="flex items-center gap-2 text-xs text-white/55">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live · pigsignal.com
            </span>
          </div>
          <div className="p-5 sm:p-7 font-mono text-[13px] sm:text-sm leading-relaxed overflow-x-auto">
            <div className="mb-4">
              <span className="text-emerald-400 font-semibold">GET</span>{" "}
              <span className="text-white/80">/api/v1/benchmarks/psy</span>
            </div>
            <pre className="text-white/75 whitespace-pre">{`{
  "metric": "psy_benchmark",
  "period": "2026-W19",
  "region": "KR",
  "benchmark": { "p25": 2.51, "median": 2.74, "p75": 3.02 },
  "confidence": 0.94,
  "anonymized": true,
  "min_farms": 50
}`}</pre>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 glass rounded-2xl p-6 sm:p-8">
          {(["records", "apis", "industries", "daily"] as const).map((key, i) => (
            <motion.div
              key={key}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                {t(`stats.${key}`)}
              </div>
              <div className="text-sm text-text-secondary">
                {t(`stats.${key}Label`)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* API cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {API_KEYS.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="group relative overflow-hidden p-6 rounded-2xl glass hover:border-accent/30 hover:shadow-[0_0_20px_rgba(245,166,35,0.08)] transition-all duration-500"
            >
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/[0.03] to-transparent rounded-t-2xl pointer-events-none" />
              <h3 className="text-lg font-bold text-text-primary mb-2">{t(`apis.${key}.title`)}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{t(`apis.${key}.desc`)}</p>
              <p className="mt-3 text-accent-dark font-semibold text-sm">{t(`apis.${key}.price`)}</p>
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Status badge */}
        <div className="flex justify-center mt-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-accent text-accent text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("status")}
          </span>
        </div>
      </motion.div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   PigOS AI — Feature Cards + Infographic
   ═══════════════════════════════════════════════ */

const FEATURE_KEYS = ["f1", "f2", "f3", "f4"] as const;

const FEATURE_ICONS = [
  <svg key="f1" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-accent"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1" opacity="0.4" /></svg>,
  <svg key="f2" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-accent"><path d="M5 19l4-4 3 3 7-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="19" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" /></svg>,
  <svg key="f3" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-accent"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="currentColor" strokeWidth="1" opacity="0.5" /></svg>,
  <svg key="f4" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-accent"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" /><path d="M3 9h18M9 9v12M15 9v12" stroke="currentColor" strokeWidth="1" opacity="0.4" /><circle cx="6" cy="6" r="1" fill="currentColor" opacity="0.5" /><circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.5" /></svg>,
];

const FLOW_ICONS = [
  <svg key="s" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-accent"><path d="M12 3v1.5M5.5 6l1 1M18.5 6l-1 1M9.5 18h5M10.5 21h3M12 7.5a4 4 0 0 1 2.4 7.2c-.3.2-.4.5-.4.8v.5h-4v-.5c0-.3-.1-.6-.4-.8A4 4 0 0 1 12 7.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="c" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-accent"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="a" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-accent"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];

export function PigPlanCoreSection({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("pigplanCore");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="pigplan-core" dark={false}>
      {/* Header */}
      <div className="text-center mb-14">
        {showHeader && (
          <>
            <SectionLabel>{t("label")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-dark">
              {t("title")}
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto mb-6">
              {t("subtitle")}
            </p>
          </>
        )}
        <div className="max-w-3xl mx-auto">
          <p className="text-text-muted text-base leading-relaxed mb-1">
            {t("desc_line1")}
          </p>
          <p className="text-text-muted text-base leading-relaxed mb-1">
            {t("desc_line2")}
          </p>
          <p className="text-accent-dark font-semibold text-base">
            {t("desc_line3")}
          </p>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Suggest → Confirm → Act flow */}
        <div className="mb-12">
          <h3 className="text-center text-xl sm:text-2xl font-bold text-text-dark mb-8">
            {t("flow.title")}
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {(["suggest", "confirm", "act"] as const).map((step, i) => (
              <div
                key={step}
                className="relative rounded-2xl glass-light p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent-dark flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </span>
                  <span className="text-accent">{FLOW_ICONS[i]}</span>
                </div>
                <h4 className="text-base font-bold text-text-dark mb-2">{t(`flow.${step}.title`)}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{t(`flow.${step}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {FEATURE_KEYS.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden p-6 rounded-2xl glass-light shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl pointer-events-none" />
              <div className="mb-4">{FEATURE_ICONS[i]}</div>
              <h3 className="text-lg font-bold text-text-dark mb-2">{t(`${key}_title`)}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{t(`${key}_desc`)}</p>
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Status badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-accent-dark text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("status")}
          </span>
        </div>
      </motion.div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   PigPlan — PSY proof (brochure p2, production performance)
   ═══════════════════════════════════════════════ */

const PSY_DATA = [
  { year: "2022", national: 21.5, brand: 24.3 },
  { year: "2023", national: 22.1, brand: 24.7 },
  { year: "2024", national: 22.3, brand: 24.9 },
  { year: "2025", national: 22.4, brand: 25.2 },
] as const;
const PSY_MAX = 30;

export function PigPlanPsyProof() {
  const t = useTranslations("pigplan.psyProof");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="pigplan-psy" dark={false}>
      <div className="text-center mb-12">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-dark">
          {t("title")}
        </h2>
        <p className="text-text-muted text-lg max-w-3xl mx-auto">{t("subtitle")}</p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl glass-light p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
      >
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <span className="inline-flex items-center gap-2 text-sm text-text-muted">
            <span className="w-3 h-3 rounded-sm bg-black/15" />
            {t("national")}
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-text-dark font-medium">
            <span className="w-3 h-3 rounded-sm bg-accent" />
            {t("brand")}
          </span>
        </div>

        {/* Bars */}
        <div className="grid grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto">
          {PSY_DATA.map((d, i) => (
            <div key={d.year} className="flex flex-col items-center">
              <div className="flex items-end justify-center gap-2 sm:gap-3 h-48 w-full">
                <div className="flex flex-col items-center justify-end h-full">
                  <span className="mb-2 text-sm font-medium text-text-muted">{d.national}</span>
                  <motion.div
                    className="w-10 sm:w-12 origin-bottom rounded-t-lg bg-black/10"
                    style={{ height: `${(d.national / PSY_MAX) * 100}%` }}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: "easeOut" }}
                  />
                </div>
                <div className="flex flex-col items-center justify-end h-full">
                  <span className="mb-2 text-sm font-bold text-accent-dark">{d.brand}</span>
                  <motion.div
                    className="w-10 sm:w-12 origin-bottom rounded-t-lg bg-gradient-to-t from-accent to-amber-300"
                    style={{ height: `${(d.brand / PSY_MAX) * 100}%` }}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                  />
                </div>
              </div>
              <div className="mt-3 text-sm font-semibold text-text-dark">{d.year}</div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className="mt-10 flex justify-center">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-50 border border-amber-200 text-accent-dark text-sm font-semibold text-center">
            {t("caption")}
          </span>
        </div>
      </motion.div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   PigPlan — 특장점 pillars (brochure p4·p5·p6)
   ═══════════════════════════════════════════════ */

const PILLAR_KEYS = ["lifecycle", "productivity", "ict"] as const;

const PILLAR_ICONS = [
  <svg key="lifecycle" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7"><path d="M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 3.5V7h-3.5M6 20.5V17h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="productivity" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7"><path d="M4 21V11M9 21V7M14 21V13M19 21V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3 7l5-3 5 3 7-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" /></svg>,
  <svg key="ict" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7"><rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M10 3v2.5M14 3v2.5M10 18.5V21M14 18.5V21M3 10h2.5M3 14h2.5M18.5 10H21M18.5 14H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
];

export function PigPlanPillars() {
  const t = useTranslations("pigplan.pillars");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="pigplan-pillars" dark>
      <div className="text-center mb-14">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{t("title")}</h2>
        <p className="text-text-secondary text-lg max-w-3xl mx-auto">{t("subtitle")}</p>
      </div>

      <div ref={ref} className="grid md:grid-cols-3 gap-6">
        {PILLAR_KEYS.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden p-7 rounded-2xl glass hover:border-accent/30 hover:shadow-[0_0_20px_rgba(245,166,35,0.08)] transition-all duration-500"
          >
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/[0.03] to-transparent rounded-t-2xl pointer-events-none" />
            <div className="mb-4 text-accent">{PILLAR_ICONS[i]}</div>
            <h3 className="text-lg font-bold text-text-primary mb-3">{t(`${key}.title`)}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{t(`${key}.desc`)}</p>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   PigPlan — 주요 기능 (brochure p7)
   ═══════════════════════════════════════════════ */

const PP_FEATURE_KEYS = ["systems", "app", "insight", "realtime", "decision", "optimize"] as const;

const PP_FEATURE_ICONS = [
  <svg key="systems" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6"><rect x="3" y="3" width="13" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" /><rect x="8" y="8" width="13" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" /></svg>,
  <svg key="app" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6"><rect x="6.5" y="3" width="11" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5" /><path d="M10.5 18h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  <svg key="insight" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6"><rect x="3.5" y="4" width="17" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5" /><path d="M8 16v-3M12 16v-6M16 16v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  <svg key="realtime" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="decision" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6"><path d="M9.5 18h5M10.5 21h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M12 3a6 6 0 0 1 3.4 10.9c-.3.2-.4.5-.4.8v.3h-6v-.3c0-.3-.1-.6-.4-.8A6 6 0 0 1 12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="optimize" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M12 2.5v3M12 18.5v3M4.4 4.4l2.1 2.1M17.5 17.5l2.1 2.1M2.5 12h3M18.5 12h3M4.4 19.6l2.1-2.1M17.5 6.5l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
];

export function PigPlanFeatures() {
  const t = useTranslations("pigplan.features");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="pigplan-features" dark={false}>
      <div className="text-center mb-14">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-dark">{t("title")}</h2>
        <p className="text-text-muted text-lg max-w-3xl mx-auto">{t("subtitle")}</p>
      </div>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PP_FEATURE_KEYS.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden p-6 rounded-2xl glass-light shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-500"
          >
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl pointer-events-none" />
            <div className="mb-4 text-accent">{PP_FEATURE_ICONS[i]}</div>
            <h3 className="text-base font-bold text-text-dark mb-2">{t(`${key}.title`)}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{t(`${key}.desc`)}</p>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
