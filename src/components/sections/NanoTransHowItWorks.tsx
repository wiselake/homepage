"use client";

import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const STEPS = ["step1", "step2", "step3", "step4"] as const;
const STATS = ["payments", "volume", "agents"] as const;

const STEP_ICONS: Record<(typeof STEPS)[number], ReactNode> = {
  // 콘텐츠 게시 — 문서
  step1: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M6 2h8l4 4v16H6z" strokeLinejoin="round" />
      <path d="M14 2v4h4M9 13h6M9 17h4" strokeLinecap="round" />
    </svg>
  ),
  // 에이전트 발견 — 레이더
  step2: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 12l6-3.5" strokeLinecap="round" />
    </svg>
  ),
  // x402 결제 — 코인
  step3: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9a2.5 2 0 0 0-5 .2c0 2.3 5 1.3 5 3.6a2.5 2 0 0 1-5 .2M12 7v1.5M12 15.5V17" strokeLinecap="round" />
    </svg>
  ),
  // 90%+ 수익 — 지갑
  step4: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10.5h18M16.5 14h1.5" strokeLinecap="round" />
    </svg>
  ),
};

function StepCard({ step, index, inView }: { step: (typeof STEPS)[number]; index: number; inView: boolean }) {
  const t = useTranslations("howItWorks");
  const isLast = index === STEPS.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`h-full rounded-2xl p-6 ${
        isLast
          ? "bg-bg-white border-2 border-accent shadow-[0_4px_20px_rgba(245,166,35,0.12)]"
          : "glass"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold ${
            isLast ? "bg-accent text-bg-ink" : "bg-accent/10 text-accent-dark"
          }`}
        >
          {index + 1}
        </span>
        <span className="text-accent">{STEP_ICONS[step]}</span>
      </div>
      <h4 className="text-base font-semibold mb-2">{t(`${step}.title`)}</h4>
      <p className="text-text-secondary text-sm leading-relaxed">{t(`${step}.desc`)}</p>
    </motion.div>
  );
}

export function NanoTransHowItWorks() {
  const t = useTranslations("howItWorks");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="mt-24">
      <div className="text-center mb-12">
        <SectionLabel>{t("label")}</SectionLabel>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{t("title")}</h3>
      </div>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STEPS.map((step, i) => (
          <StepCard key={step} step={step} index={i} inView={isInView} />
        ))}
      </div>

      {/* Ecosystem proof — ink island */}
      <div className="mt-8 rounded-2xl bg-bg-ink px-6 py-7">
        <div className="flex flex-wrap items-center justify-around gap-6">
          {STATS.map((s) => (
            <div key={s} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent">{t(`stats.${s}.value`)}</div>
              <div className="mt-1.5 text-xs text-white/65">{t(`stats.${s}.label`)}</div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-[11px] text-white/35">* {t("statsNote")}</p>
      </div>
    </div>
  );
}
