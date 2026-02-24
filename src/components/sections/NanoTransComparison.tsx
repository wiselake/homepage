"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── Animated flowing dots along a path ─── */
function FlowingDots({ delay = 0 }: { delay?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent"
          style={{ boxShadow: "0 0 6px 2px rgba(245,166,35,0.5)" }}
          initial={{ left: "-5%", opacity: 0 }}
          animate={{
            left: ["−5%", "105%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: delay + i * 0.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Blocked dots that pile up ─── */
function BlockedDots() {
  return (
    <div className="absolute right-[18%] top-1/2 -translate-y-1/2 flex flex-wrap gap-0.5 w-6 justify-center">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-red-400/60"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: [0, 0.7, 0.5], x: [10, 0, -1] }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Branching lines for pay-per-use ─── */
function BranchLines({ inView }: { inView: boolean }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-8"
      fill="none"
    >
      {[
        "M0,20 Q20,20 50,5",
        "M0,20 Q20,20 55,20",
        "M0,20 Q20,20 50,35",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="#F5A623"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.8 } : {}}
          transition={{ duration: 0.8, delay: 1.2 + i * 0.15 }}
        />
      ))}
    </svg>
  );
}

/* ─── Single comparison row ─── */
function ComparisonRow({
  side,
  label,
  value,
  index,
  inView,
  type,
}: {
  side: "traditional" | "nanotrans";
  label: string;
  value: string;
  index: number;
  inView: boolean;
  type: "blocked" | "slow" | "locked" | "flowing" | "fast" | "branching";
}) {
  const isNano = side === "nanotrans";
  const baseDelay = index * 0.2;

  return (
    <motion.div
      initial={{ opacity: 0, x: isNano ? 30 : -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: baseDelay }}
      className="flex flex-col gap-2"
    >
      {/* Label */}
      <span
        className={`text-xs tracking-wider uppercase ${
          isNano ? "text-accent" : "text-red-400/70"
        }`}
      >
        {label}
      </span>

      {/* Line visualization */}
      <div className="relative h-8 flex items-center">
        {/* Base line */}
        <motion.div
          className={`h-px w-full ${
            isNano ? "bg-accent/40" : "bg-white/10"
          }`}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: baseDelay + 0.3 }}
          style={{ transformOrigin: isNano ? "left" : "left" }}
        />

        {/* Type-specific effects */}
        {type === "blocked" && (
          <>
            {/* Barrier */}
            <motion.div
              className="absolute right-[20%] top-0 bottom-0 w-px bg-red-400/50"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.3, delay: baseDelay + 0.6 }}
            />
            <motion.div
              className="absolute right-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 text-red-400/70 text-[10px]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: baseDelay + 0.8 }}
            >
              ✕
            </motion.div>
            <BlockedDots />
          </>
        )}

        {type === "slow" && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: baseDelay + 0.5 }}
          >
            {/* Dashed overlay showing slowness */}
            <div
              className="h-px w-full"
              style={{
                background:
                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 4px, transparent 4px, transparent 12px)",
              }}
            />
          </motion.div>
        )}

        {type === "locked" && (
          <motion.div
            className="absolute inset-y-0 left-[10%] right-[10%] border border-white/10 rounded-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: baseDelay + 0.5 }}
          >
            <span className="text-[9px] text-white/20">🔒</span>
          </motion.div>
        )}

        {type === "flowing" && (
          <>
            {/* Glowing line */}
            <motion.div
              className="absolute inset-y-[calc(50%-1px)] left-0 right-0 h-0.5 bg-gradient-to-r from-accent/60 via-accent to-accent/60 rounded-full"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: baseDelay + 0.4 }}
              style={{
                transformOrigin: "left",
                boxShadow: "0 0 8px rgba(245,166,35,0.4)",
              }}
            />
            <FlowingDots delay={baseDelay + 1} />
          </>
        )}

        {type === "fast" && (
          <>
            {/* Speed streaks */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-accent to-accent/20"
                style={{ top: `${40 + i * 10}%`, left: "0%", right: "0%" }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inView ? { scaleX: 1, opacity: 0.7 - i * 0.15 } : {}}
                transition={{ duration: 0.6, delay: baseDelay + 0.5 + i * 0.1 }}
                layoutId={undefined}
              />
            ))}
            {/* Leading bright dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent"
              style={{ boxShadow: "0 0 10px 3px rgba(245,166,35,0.6)" }}
              initial={{ left: "0%", opacity: 0 }}
              animate={
                inView
                  ? { left: ["0%", "95%"], opacity: [0, 1, 1] }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: baseDelay + 0.6,
                ease: "easeOut",
              }}
            />
          </>
        )}

        {type === "branching" && (
          <>
            <motion.div
              className="absolute inset-y-[calc(50%-1px)] left-0 right-12 h-0.5 bg-accent/50 rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: baseDelay + 0.4 }}
              style={{ transformOrigin: "left" }}
            />
            <BranchLines inView={inView} />
          </>
        )}
      </div>

      {/* Value */}
      <motion.span
        className={`text-sm font-semibold ${
          isNano ? "text-white" : "text-text-secondary"
        }`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: baseDelay + 0.8 }}
      >
        {value}
      </motion.span>
    </motion.div>
  );
}

/* ─── Counter animation ─── */
function AnimatedValue({
  value,
  inView,
  delay,
}: {
  value: string;
  inView: boolean;
  delay: number;
}) {
  const [display, setDisplay] = useState(value);
  const numMatch = value.match(/[\d.]+/);

  useEffect(() => {
    if (!inView || !numMatch) return;
    const target = parseFloat(numMatch[0]);
    const prefix = value.slice(0, value.indexOf(numMatch[0]));
    const suffix = value.slice(
      value.indexOf(numMatch[0]) + numMatch[0].length
    );
    const isDecimal = numMatch[0].includes(".");
    const steps = 20;
    const stepDuration = 40;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const current = target * progress;
      setDisplay(
        `${prefix}${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`
      );
      if (step >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView, value, numMatch]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      {display}
    </motion.span>
  );
}

/* ─── Main Component ─── */
export function NanoTransComparison() {
  const t = useTranslations("ntComparison");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const rows = [
    {
      trad: { label: t("trad.amount.label"), value: t("trad.amount.value"), type: "blocked" as const },
      nano: { label: t("nano.amount.label"), value: t("nano.amount.value"), type: "flowing" as const },
    },
    {
      trad: { label: t("trad.speed.label"), value: t("trad.speed.value"), type: "slow" as const },
      nano: { label: t("nano.speed.label"), value: t("nano.speed.value"), type: "fast" as const },
    },
    {
      trad: { label: t("trad.model.label"), value: t("trad.model.value"), type: "locked" as const },
      nano: { label: t("nano.model.label"), value: t("nano.model.value"), type: "branching" as const },
    },
  ];

  return (
    <div ref={ref} className="mt-20 mb-8">
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-10 px-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-text-secondary text-sm tracking-widest uppercase">
          {t("headerTraditional")}
        </span>
        <div className="flex-1 mx-6 h-px bg-gradient-to-r from-white/5 via-accent/20 to-white/5" />
        <span className="text-accent text-sm font-semibold tracking-widest uppercase">
          NanoTrans
        </span>
      </motion.div>

      {/* Comparison rows */}
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
        {rows.map((row, i) => (
          <div key={i} className="contents">
            <ComparisonRow
              side="traditional"
              label={row.trad.label}
              value={row.trad.value}
              index={i}
              inView={inView}
              type={row.trad.type}
            />
            <ComparisonRow
              side="nanotrans"
              label={row.nano.label}
              value={row.nano.value}
              index={i}
              inView={inView}
              type={row.nano.type}
            />
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <motion.div
        className="mt-16 grid grid-cols-3 gap-6 glass rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        {[
          { value: "₩10", sub: t("stat.minTx") },
          { value: "0.1s", sub: t("stat.settlement") },
          { value: "X.402", sub: t("stat.protocol") },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
              <AnimatedValue value={stat.value} inView={inView} delay={1.4 + i * 0.2} />
            </div>
            <div className="text-xs text-text-secondary">{stat.sub}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
