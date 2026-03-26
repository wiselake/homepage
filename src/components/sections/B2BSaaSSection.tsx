"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function B2BSaaSSection({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("b2bSaas");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="qbridge" dark>
      {showHeader && (
        <div className="text-center mb-16">
          <SectionLabel>QBridge</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t("qbridge.name")}
          </h2>
        </div>
      )}

      <div ref={ref} className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden p-8 rounded-2xl glass hover:border-accent/30 hover:shadow-[0_0_20px_rgba(245,166,35,0.08)] transition-all duration-500"
        >
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.06] to-transparent rounded-t-2xl pointer-events-none" />
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{t("qbridge.name")}</h3>
            <span className="text-xs px-3 py-1 rounded-full glass-accent text-accent border border-accent/20">
              {t("qbridge.status")}
            </span>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {t("qbridge.desc")}
          </p>
          <ul className="space-y-2">
            {[t("qbridge.f1"), t("qbridge.f2")].map((f, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-accent mt-0.5">•</span>
                {f}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
