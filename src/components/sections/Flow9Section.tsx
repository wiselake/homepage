"use client";

import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SCREENS_KR = [
  "/flow9_screen_kr_1.jpg",
  "/flow9_screen_kr_2.jpg",
  "/flow9_screen_kr_3.jpg",
];

const SCREENS_EN = [
  "/flow9_screen_en_1.jpg",
  "/flow9_screen_en_2.jpg",
  "/flow9_screen_en_3.jpg",
];

const INTERVAL = 4000;

export function Flow9Section() {
  const t = useTranslations("b2bSaas.flow9");
  const locale = useLocale();
  const screens = locale === "en" ? SCREENS_EN : SCREENS_KR;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % screens.length);
  }, [screens.length]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <Section id="flow9" dark={false}>
      <div className="text-center mb-16">
        <SectionLabel>Flow9</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text-dark">
          {locale === "ko"
            ? "회사의 돈 흐름, 실시간 한눈에"
            : "Your Company's Cash Flow, at a Glance in Real Time"}
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          {locale === "ko"
            ? "정확하고 빠른 재무관리로 스마트한 의사결정을 지원합니다."
            : "Simplify your financial planning with automated tracking and analysis."}
        </p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Left: Screenshot carousel */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-[340px] rounded-2xl border border-border-light overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={screens[current]}
                  alt={`${t("imageAlt")} ${current + 1}`}
                  width={840}
                  height={1126}
                  className="w-full h-auto"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-accent w-6"
                    : "bg-black/15 hover:bg-black/30"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="text-xl font-bold text-accent-dark">F9</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent-dark">Flow9</h3>
              <p className="text-text-muted text-sm">{t("platform")}</p>
            </div>
          </div>

          <p className="text-text-muted leading-relaxed">
            {t("desc")}
          </p>

          <ul className="space-y-3">
            {[t("f1"), t("f2"), t("f3"), t("f4"), t("f5"), t("f6")].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                <span className="text-accent-dark mt-0.5 text-lg">•</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-accent text-accent text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t("status")}
            </span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
