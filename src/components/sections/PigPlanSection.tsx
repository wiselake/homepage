"use client";

import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
      <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2 whitespace-nowrap">{value}</div>
      <div className="text-xs sm:text-sm text-text-secondary whitespace-nowrap">{label}</div>
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

        {/* Right - Stats */}
        <div className="relative overflow-hidden grid grid-cols-3 gap-4 p-8 rounded-2xl glass">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.06] to-transparent rounded-t-2xl pointer-events-none" />
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
    <Section id="insight-pigplan" dark={false}>
      {/* Section header */}
      <div className="text-center mb-12">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-dark">
          {t("title")}
        </h2>
      </div>

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

/* ═══════════════════════════════════════════════
   PigSignal — Hub-style Marketplace Animation
   ═══════════════════════════════════════════════ */

function PigSignalMarketplace({ inView }: { inView: boolean }) {
  const t_agents = useTranslations("pigSignal.agents");
  const agents = [
    { label: t_agents("feed"), query: t_agents("feedQuery") },
    { label: t_agents("processor"), query: t_agents("processorQuery") },
    { label: t_agents("finance"), query: t_agents("financeQuery") },
    { label: t_agents("aitech"), query: t_agents("aitechQuery") },
  ];

  /* Robot icon reusable */
  const RobotIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-7 sm:h-7 text-accent">
      <rect x="5" y="8" width="14" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 8V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1.5" fill="currentColor" />
      <circle cx="9" cy="13.5" r="1.5" fill="currentColor" />
      <circle cx="15" cy="13.5" r="1.5" fill="currentColor" />
      <path d="M9.5 17.5h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between py-6 sm:py-8 px-4">

      {/* ── Background: subtle dot grid ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(245,166,35,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* ══ Row 1: Farm Data ══ */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass flex items-center justify-center"
          animate={{ borderColor: ["rgba(245,166,35,0.1)", "rgba(245,166,35,0.3)", "rgba(245,166,35,0.1)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Database icon */}
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-accent">
            <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.3" />
            <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.3" />
            <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </motion.div>
        <span className="text-sm sm:text-base font-semibold text-white">Farm Data</span>
        <span className="text-xs text-text-secondary">27 Years · 688 Farms · 150M+ Records</span>
      </motion.div>

      {/* ── Particles: Farm → API ── */}
      <div className="relative w-px h-10 sm:h-14 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-accent/5" />
        {[0, 1].map((i) => (
          <motion.div
            key={`down-${i}`}
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent"
            style={{ boxShadow: "0 0 8px rgba(245,166,35,0.7)" }}
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, delay: i * 0.6, repeat: Infinity, ease: "easeIn" }}
          />
        ))}
      </div>

      {/* ══ Row 2: API Market Hub ══ */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl glass-accent border-accent/30 flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 0px rgba(245,166,35,0)",
              "0 0 35px rgba(245,166,35,0.25)",
              "0 0 0px rgba(245,166,35,0)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Hub icon */}
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 sm:w-10 sm:h-10 text-accent">
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.54 15.54l2.83 2.83M5.64 18.36l2.83-2.83M15.54 8.46l2.83-2.83" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
          </svg>
        </motion.div>
        <span className="text-sm sm:text-base font-bold text-accent">API Market</span>
        <span className="text-xs text-text-secondary">57 REST APIs · NanoTrans x402</span>
      </motion.div>

      {/* ── Connection lines + Particles: API → each Agent ── */}
      <div className="relative w-full max-w-2xl h-20 sm:h-28 lg:h-32 z-10">
        {/* SVG connection lines from center to each agent position */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[12.5, 37.5, 62.5, 87.5].map((endX, i) => (
            <path
              key={`conn-${i}`}
              d={`M50 0 Q${endX} 50 ${endX} 100`}
              fill="none"
              stroke="rgba(245,166,35,0.1)"
              strokeWidth="0.5"
            />
          ))}
        </svg>

        {/* Particles traveling along each curve */}
        {agents.map((_, i) => {
          const endX = 12.5 + i * 25;
          return (
            <motion.div
              key={`fan-${i}`}
              className="absolute w-2 h-2 rounded-full bg-accent"
              style={{ boxShadow: "0 0 8px rgba(245,166,35,0.7)" }}
              animate={{
                left: ["50%", `${(50 + endX) / 2}%`, `${endX}%`],
                top: ["0%", "55%", "100%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.8,
                delay: i * 0.4,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* x402 payment flash at midpoints */}
        {agents.map((_, i) => {
          const midX = (50 + (12.5 + i * 25)) / 2;
          return (
            <motion.span
              key={`pay-${i}`}
              className="absolute text-[9px] sm:text-[10px] font-mono text-accent/50"
              style={{ left: `${midX}%`, top: "40%" }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 1.5, delay: i * 0.4 + 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              $
            </motion.span>
          );
        })}
      </div>

      {/* ══ Row 3: AI Agent nodes ══ */}
      <motion.div
        className="relative z-10 grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {agents.map((agent, i) => (
          <div key={agent.label} className="flex flex-col items-center gap-2 relative">
            {/* Speech bubble */}
            <motion.div
              className="absolute -top-8 sm:-top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-accent/10 border border-accent/20 whitespace-nowrap"
              animate={{ opacity: [0, 1, 1, 0], y: [4, 0, 0, -2] }}
              transition={{ duration: 3, delay: i * 0.8, repeat: Infinity, repeatDelay: 2 }}
            >
              <span className="text-[8px] sm:text-[10px] font-mono text-accent/70">{agent.query}</span>
            </motion.div>

            {/* Agent node */}
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl glass flex items-center justify-center"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
            >
              <RobotIcon />
            </motion.div>

            {/* Label badge */}
            <span className="text-[10px] sm:text-xs font-semibold text-white px-2 py-0.5 rounded-full glass-accent">
              {agent.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* x402 payment indicators */}
      {[0, 1].map((i) => (
        <motion.span
          key={`x-${i}`}
          className="absolute text-xs font-mono text-accent/30 z-10"
          style={{ bottom: `${28 + i * 8}%`, right: `${15 + i * 12}%` }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 2, delay: i * 1.2, repeat: Infinity }}
        >
          x402 $
        </motion.span>
      ))}
    </div>
  );
}

const API_KEYS = ["supplyForecast", "costIndex", "riskSignal"] as const;

export function PigSignalSection() {
  const t = useTranslations("pigSignal");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="pigsignal" dark>
      {/* Header */}
      <div className="text-center mb-14">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {t("title")}
        </h2>
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
        {/* Marketplace animation */}
        <div className="relative h-[520px] sm:h-[600px] lg:h-[660px] rounded-2xl glass overflow-hidden mb-12">
          {isInView && <PigSignalMarketplace inView={isInView} />}
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
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.06] to-transparent rounded-t-2xl pointer-events-none" />
              <h3 className="text-lg font-bold text-white mb-2">{t(`apis.${key}.title`)}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{t(`apis.${key}.desc`)}</p>
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Status badge */}
        <div className="flex justify-center mt-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-accent text-accent text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
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

export function PigPlanCoreSection() {
  const t = useTranslations("pigplanCore");
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="pigplan-core" dark={false}>
      {/* Header */}
      <div className="text-center mb-14">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-dark">
          {t("title")}
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto mb-6">
          {t("subtitle")}
        </p>
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
        {/* Infographic image in dark glass frame */}
        <div className="relative rounded-2xl bg-bg-primary border border-border overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.2)] mb-12">
          <Image
            src={locale === "en" ? "/pigos_infographic-en.jpg" : "/pigos_infographic-kr.jpg"}
            alt="PigOS AI - AI Farm Management Platform"
            width={2752}
            height={1536}
            className="w-full h-auto"
          />
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
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {t("status")}
          </span>
        </div>
      </motion.div>
    </Section>
  );
}
