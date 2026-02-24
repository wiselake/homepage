"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

/* ═══════════════════════════════════════════════
   TRADITIONAL SIDE — Blocked, Slow, Locked
   ═══════════════════════════════════════════════ */

/* Particles flow left→right then pile up at the barrier wall */
function BlockedParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 20 + (i % 3) * 25;
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-red-400/80"
            style={{ top: `${y}%`, boxShadow: "0 0 4px rgba(248,113,113,0.6)" }}
            animate={{
              left: ["0%", "68%", "66%", "68%"],
              opacity: [0, 0.9, 0.7, 0.5],
              scale: [0.6, 1, 0.9, 0.8],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}
      {/* Barrier wall */}
      <motion.div
        className="absolute right-[28%] top-[5%] bottom-[5%] w-[3px] bg-gradient-to-b from-red-500/80 via-red-400 to-red-500/80 rounded-full"
        style={{ boxShadow: "0 0 12px rgba(248,113,113,0.4), 2px 0 20px rgba(248,113,113,0.2)" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      {/* X symbol on barrier */}
      <div className="absolute right-[28%] top-1/2 -translate-y-1/2 translate-x-[150%] text-red-400 text-lg font-bold">
        ✕
      </div>
      {/* Piled-up particles at barrier */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`pile-${i}`}
          className="absolute w-2 h-2 rounded-full bg-red-400/40"
          style={{
            right: `${29 + (i % 3) * 2}%`,
            top: `${15 + i * 15}%`,
          }}
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1, 0.8] }}
          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

/* Slow creeping dot — takes forever to cross */
function SlowDot() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dashed track */}
      <div
        className="absolute top-1/2 left-[5%] right-[5%] h-px -translate-y-1/2"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 6px, transparent 6px, transparent 16px)",
        }}
      />
      {/* The painfully slow dot */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white/30"
        style={{ boxShadow: "0 0 6px rgba(255,255,255,0.15)" }}
        animate={{ left: ["5%", "35%", "36%", "50%", "51%", "60%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.3, 0.5, 0.7, 0.85, 1],
        }}
      />
      {/* Waiting indicator */}
      <motion.div
        className="absolute right-[15%] top-1/2 -translate-y-1/2 text-white/20 text-sm"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ⏳
      </motion.div>
    </div>
  );
}

/* Locked cage/box */
function LockedBox() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Cage */}
      <motion.div
        className="absolute left-[10%] right-[10%] top-[10%] bottom-[10%] border border-white/15 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Lock bars */}
        {[25, 50, 75].map((x) => (
          <div
            key={x}
            className="absolute top-0 bottom-0 w-px bg-white/8"
            style={{ left: `${x}%` }}
          />
        ))}
        {/* Inner trapped dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/15"
          animate={{
            x: [-8, 8, -6, 4, -8],
            y: [-4, 6, -6, 2, -4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      {/* Lock icon */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[4px] text-white/25 text-xs">
        🔒
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   NANOTRANS SIDE — Flowing, Fast, Free
   ═══════════════════════════════════════════════ */

/* Smooth flowing particles that breeze across */
function FlowingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Glowing track */}
      <div
        className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-accent/20"
        style={{ boxShadow: "0 0 12px rgba(245,166,35,0.15)" }}
      />
      {/* Flowing dots — varied sizes, staggered */}
      {Array.from({ length: 7 }).map((_, i) => {
        const size = 4 + (i % 3) * 2;
        const y = 40 + (i % 3) * 10;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent"
            style={{
              width: size,
              height: size,
              top: `${y}%`,
              boxShadow: `0 0 ${size * 2}px rgba(245,166,35,0.6)`,
            }}
            animate={{
              left: ["-5%", "110%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.8 + (i % 3) * 0.3,
              delay: i * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

/* Bullet-fast streak across the full width */
function SpeedStreak() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Multiple speed lines with trail */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-accent to-transparent"
          style={{ top: `${35 + i * 15}%`, left: 0, right: 0 }}
          animate={{ opacity: [0, 0.5 - i * 0.1, 0] }}
          transition={{
            duration: 1.5,
            delay: i * 0.15,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />
      ))}
      {/* Main bullet dot with comet trail */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        animate={{ left: ["-10%", "110%"] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatDelay: 1.2,
          ease: [0.2, 0, 0, 1],
        }}
      >
        {/* Trail */}
        <div
          className="absolute right-full top-1/2 -translate-y-1/2 w-20 h-[2px]"
          style={{
            background:
              "linear-gradient(to left, rgba(245,166,35,0.8), transparent)",
          }}
        />
        {/* Dot */}
        <div
          className="w-3 h-3 rounded-full bg-accent"
          style={{
            boxShadow:
              "0 0 12px 4px rgba(245,166,35,0.7), 0 0 30px 8px rgba(245,166,35,0.3)",
          }}
        />
      </motion.div>
    </div>
  );
}

/* Branching free-flowing paths */
function FreeBranching() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 400 80" className="absolute inset-0 w-full h-full" fill="none">
        {/* Main trunk */}
        <motion.path
          d="M0,40 L250,40"
          stroke="#F5A623"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
          style={{ filter: "drop-shadow(0 0 4px rgba(245,166,35,0.4))" }}
        />
        {/* Branches */}
        {[
          { d: "M250,40 Q310,40 380,10", delay: 0.8 },
          { d: "M250,40 Q310,38 390,40", delay: 0.9 },
          { d: "M250,40 Q310,40 380,70", delay: 1.0 },
          { d: "M250,40 Q280,25 350,5", delay: 1.1 },
          { d: "M250,40 Q280,55 350,75", delay: 1.15 },
        ].map(({ d, delay }, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#F5A623"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={1 - i * 0.12}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 - i * 0.12 }}
            transition={{ duration: 0.6, delay }}
            style={{ filter: "drop-shadow(0 0 3px rgba(245,166,35,0.3))" }}
          />
        ))}
        {/* Flowing dots on branches */}
        {[
          { cx: 380, cy: 10, delay: 1.6 },
          { cx: 390, cy: 40, delay: 1.7 },
          { cx: 380, cy: 70, delay: 1.8 },
        ].map(({ cx, cy, delay }, i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="#F5A623"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.6], scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, delay, repeat: Infinity, repeatDelay: 2 }}
            style={{ filter: "drop-shadow(0 0 6px rgba(245,166,35,0.8))" }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ROW COMPONENT
   ═══════════════════════════════════════════════ */

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
  const baseDelay = index * 0.25;

  const renderVisualization = () => {
    switch (type) {
      case "blocked":
        return <BlockedParticles />;
      case "slow":
        return <SlowDot />;
      case "locked":
        return <LockedBox />;
      case "flowing":
        return <FlowingParticles />;
      case "fast":
        return <SpeedStreak />;
      case "branching":
        return <FreeBranching />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isNano ? 40 : -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: baseDelay }}
      className="flex flex-col gap-3"
    >
      {/* Label */}
      <span
        className={`text-xs tracking-widest uppercase font-medium ${
          isNano ? "text-accent" : "text-red-400/80"
        }`}
      >
        {label}
      </span>

      {/* Visualization area — much taller now */}
      <div
        className={`relative h-20 rounded-xl overflow-hidden ${
          isNano
            ? "bg-accent/[0.04] border border-accent/10"
            : "bg-white/[0.02] border border-white/5"
        }`}
      >
        {inView && renderVisualization()}
      </div>

      {/* Value */}
      <motion.span
        className={`text-base font-semibold ${
          isNano ? "text-white" : "text-text-secondary/70"
        }`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: baseDelay + 0.6 }}
      >
        {value}
      </motion.span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   STAT COUNTER
   ═══════════════════════════════════════════════ */

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

  const animate = useCallback(() => {
    if (!numMatch) return;
    const target = parseFloat(numMatch[0]);
    const prefix = value.slice(0, value.indexOf(numMatch[0]));
    const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length);
    const isDecimal = numMatch[0].includes(".");
    const steps = 20;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(
        `${prefix}${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`
      );
      if (step >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [value, numMatch]);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(animate, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, delay, animate]);

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

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */

export function NanoTransComparison() {
  const t = useTranslations("ntComparison");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
      {/* Section header */}
      <motion.div
        className="flex justify-between items-end mb-8 px-1"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div>
          <span className="text-red-400/60 text-xs tracking-widest uppercase block mb-1">
            {t("headerTraditional")}
          </span>
          <div className="w-8 h-px bg-red-400/30" />
        </div>
        <div className="flex-1 mx-8 h-px bg-gradient-to-r from-red-400/10 via-white/5 to-accent/10" />
        <div className="text-right">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase block mb-1">
            NanoTrans
          </span>
          <div className="w-8 h-px bg-accent/50 ml-auto" />
        </div>
      </motion.div>

      {/* Comparison grid */}
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
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

      {/* Bottom stat highlights */}
      <motion.div
        className="mt-14 grid grid-cols-3 gap-4 glass rounded-2xl p-6 sm:p-8"
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
            <div className="text-[11px] sm:text-xs text-text-secondary">{stat.sub}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
