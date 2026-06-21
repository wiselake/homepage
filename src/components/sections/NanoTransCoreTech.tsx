"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const TECHS = ["nanoSense", "nanoVault", "nanoPulse", "nanoSplit"] as const;
const TECH_NUMBERS = ["01", "02", "03", "04"];

/* ═══════════════════════════════════════════════
   ANIMATED VISUALS — one per tech
   ═══════════════════════════════════════════════ */

function SenseVisual() {
  return (
    <div className="relative w-full h-full">
      {/* AI Agent icon */}
      <motion.div
        className="absolute left-[10%] top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-accent">
          {/* Robot head */}
          <rect x="4" y="6" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
          {/* Antenna */}
          <path d="M10 6V3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="10" cy="2.5" r="1" fill="currentColor" />
          {/* Eyes */}
          <circle cx="7.5" cy="10.5" r="1.2" fill="currentColor" />
          <circle cx="12.5" cy="10.5" r="1.2" fill="currentColor" />
          {/* Mouth */}
          <path d="M7.5 13.5h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Endpoint box */}
      <motion.div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 px-2 py-1.5 rounded bg-white/[0.06] border border-white/10"
        animate={{ borderColor: ["rgba(245,166,35,0.15)", "rgba(245,166,35,0.4)", "rgba(245,166,35,0.15)"] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-[8px] font-mono text-accent/80">/.well-known/x402</span>
      </motion.div>

      {/* Flow arrows */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent"
          style={{ boxShadow: "0 0 6px rgba(245,166,35,0.6)" }}
          animate={{ left: ["28%", "68%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.5,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Flow labels */}
      <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1">
        {["Discover", "Verify", "Pay", "Consume"].map((step, i) => (
          <motion.span
            key={step}
            className="text-[7px] text-white/30 font-mono"
            animate={{ color: ["rgba(255,255,255,0.2)", "rgba(245,166,35,0.7)", "rgba(255,255,255,0.2)"] }}
            transition={{ duration: 3, delay: i * 0.6, repeat: Infinity }}
          >
            {step}{i < 3 && <span className="text-white/15 mx-0.5">{" > "}</span>}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function VaultVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Shield layers */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-xl border"
          style={{
            width: `${56 - i * 14}%`,
            height: `${72 - i * 16}%`,
            borderColor: `rgba(245,166,35,${0.1 + i * 0.1})`,
            background: `rgba(245,166,35,${0.02 + i * 0.01})`,
          }}
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
        />
      ))}

      {/* Lock icon center */}
      <motion.div
        className="relative z-10 w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center"
        animate={{ boxShadow: ["0 0 0px rgba(245,166,35,0)", "0 0 16px rgba(245,166,35,0.3)", "0 0 0px rgba(245,166,35,0)"] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-accent">
          <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M5.5 7V5.5a2.5 2.5 0 015 0V7" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* Stage labels */}
      <div className="absolute bottom-1.5 inset-x-0 flex justify-center gap-2">
        {["6-stage", "Anti-replay", "Cross-chain"].map((label, i) => (
          <span key={i} className="text-[7px] font-mono text-accent/40 bg-accent/[0.06] px-1.5 py-0.5 rounded">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function PulseVisual() {
  const points = [0, 20, 15, 45, 35, 60, 50, 70, 55, 80, 65];
  const pathD = points
    .map((y, i) => {
      const x = (i / (points.length - 1)) * 100;
      const flippedY = 90 - y * 0.8;
      return `${i === 0 ? "M" : "L"}${x} ${flippedY}`;
    })
    .join(" ");

  return (
    <div className="relative w-full h-full">
      {/* Graph */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="pulseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(245,166,35,0.2)" />
            <stop offset="100%" stopColor="rgba(245,166,35,0)" />
          </linearGradient>
        </defs>
        {/* Area fill */}
        <motion.path
          d={`${pathD} L100 95 L0 95 Z`}
          fill="url(#pulseGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        {/* Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="rgba(245,166,35,0.6)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>

      {/* Moving price tag */}
      <motion.div
        className="absolute top-3 px-1.5 py-0.5 rounded bg-accent/20 border border-accent/30"
        animate={{ left: ["15%", "60%", "40%", "75%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          className="text-[8px] font-mono text-accent font-semibold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          $0.023
        </motion.span>
      </motion.div>

      {/* Requester labels */}
      <div className="absolute top-2 right-2 flex flex-col gap-1">
        <motion.span
          className="text-[7px] font-mono text-accent/50"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Agent
        </motion.span>
        <motion.span
          className="text-[7px] font-mono text-white/30"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, delay: 1, repeat: Infinity }}
        >
          Human
        </motion.span>
      </div>
    </div>
  );
}

function SplitVisual() {
  const targets = [
    { label: "Creator", y: "20%", pct: "60%" },
    { label: "Platform", y: "50%", pct: "25%" },
    { label: "Provider", y: "80%", pct: "15%" },
  ];

  return (
    <div className="relative w-full h-full">
      {/* Source node */}
      <motion.div
        className="absolute left-[12%] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center"
        animate={{ boxShadow: ["0 0 0px rgba(245,166,35,0)", "0 0 12px rgba(245,166,35,0.4)", "0 0 0px rgba(245,166,35,0)"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[9px] font-mono text-accent font-bold">$</span>
      </motion.div>

      {/* Distribution lines + targets */}
      {targets.map((t, i) => (
        <div key={i}>
          {/* Animated particle on line */}
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-accent"
            style={{ top: t.y, boxShadow: "0 0 6px rgba(245,166,35,0.7)" }}
            animate={{ left: ["28%", "62%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.2,
              delay: i * 0.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeOut",
            }}
          />

          {/* Target node */}
          <motion.div
            className="absolute right-[10%] -translate-y-1/2 flex items-center gap-1.5"
            style={{ top: t.y }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          >
            <div className="w-6 h-6 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center">
              <span className="text-[7px] font-mono text-accent">{t.pct}</span>
            </div>
            <span className="text-[7px] font-mono text-white/40">{t.label}</span>
          </motion.div>
        </div>
      ))}

      {/* Connection lines (static) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M28 50 L65 20" stroke="rgba(245,166,35,0.15)" strokeWidth="0.5" />
        <path d="M28 50 L65 50" stroke="rgba(245,166,35,0.15)" strokeWidth="0.5" />
        <path d="M28 50 L65 80" stroke="rgba(245,166,35,0.15)" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

const TECH_VISUALS: Record<(typeof TECHS)[number], () => React.ReactNode> = {
  nanoSense: () => <SenseVisual />,
  nanoVault: () => <VaultVisual />,
  nanoPulse: () => <PulseVisual />,
  nanoSplit: () => <SplitVisual />,
};

/* ═══════════════════════════════════════════════
   HIGHLIGHTED DESCRIPTION — accent keywords
   ═══════════════════════════════════════════════ */

function HighlightedDesc({ text }: { text: string }) {
  // Split on **highlight** markers from translation strings
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={i} className="text-accent font-medium">
              {part.slice(2, -2)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

/* ═══════════════════════════════════════════════
   TECH CARD
   ═══════════════════════════════════════════════ */

function TechCard({
  techKey,
  index,
}: {
  techKey: (typeof TECHS)[number];
  index: number;
}) {
  const t = useTranslations("coreTech");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-bg-ink border border-white/10 hover:border-accent/40 hover:shadow-[0_0_24px_rgba(245,166,35,0.15)] transition-all duration-500 h-full flex flex-col">
        {/* Top gradient highlight */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.04] to-transparent rounded-t-2xl pointer-events-none" />

        {/* Number watermark */}
        <span className="absolute top-3 right-4 text-[72px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">
          {TECH_NUMBERS[index]}
        </span>

        {/* Visual area — animated illustration */}
        <div className="relative h-36 mx-4 mt-4 rounded-xl bg-white/[0.02] border border-white/[0.05] overflow-hidden">
          {isInView && TECH_VISUALS[techKey]()}
        </div>

        {/* Text content */}
        <div className="p-6 pt-5 flex-1 flex flex-col">
          {/* Number badge */}
          <span className="text-[10px] font-mono text-accent/50 tracking-widest uppercase mb-2">
            {TECH_NUMBERS[index]}
          </span>

          {/* Trademark name */}
          <h3 className="text-lg font-bold text-white mb-1">
            {t(`${techKey}.name`)}
          </h3>

          {/* English tagline */}
          <p className="text-xs text-accent/70 font-medium tracking-wide mb-3">
            {t(`${techKey}.tagline`)}
          </p>

          {/* Description with highlights */}
          <p className="text-text-secondary text-sm leading-relaxed flex-1">
            <HighlightedDesc text={t(`${techKey}.desc`)} />
          </p>
        </div>

        {/* Bottom accent line on hover */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-700" />
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */

export function NanoTransCoreTech() {
  const t = useTranslations("coreTech");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="mt-24 mb-8">
      {/* Section header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          {t("title")}
        </h2>
        <p className="text-text-secondary text-base max-w-4xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>
      </motion.div>

      {/* Tech cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TECHS.map((key, i) => (
          <TechCard key={key} techKey={key} index={i} />
        ))}
      </div>
    </div>
  );
}
