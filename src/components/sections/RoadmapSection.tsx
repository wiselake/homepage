"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const YEARS = ["2025", "2026", "2027", "2028"] as const;

export function RoadmapSection({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("roadmap");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones: { id: string; isFoundation: boolean; items: string[] }[] = [
    { id: "foundation", isFoundation: true, items: t.raw("foundation.items") as string[] },
    ...YEARS.map((year) => ({
      id: year,
      isFoundation: false,
      items: t.raw(`years.${year}`) as string[],
    })),
  ];

  return (
    <Section id="roadmap" dark>
      {showHeader && (
        <div className="text-center mb-16">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 break-keep">
            {t("title_line1")}
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            {t("title_line2")}
          </h2>
        </div>
      )}

      <div ref={ref} className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden md:block" />

        <div className="space-y-12 md:space-y-0">
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative md:flex items-center mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`p-6 rounded-2xl glass ${
                      m.isFoundation
                        ? "border border-accent/30 shadow-[0_0_20px_rgba(245,166,35,0.06)]"
                        : ""
                    }`}
                  >
                    {m.isFoundation ? (
                      <>
                        <div
                          className={`flex items-center gap-2 mb-3 ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-dark px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200">
                            {t("foundation.label")}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-3">
                          {t("foundation.tagline")}
                        </h3>
                      </>
                    ) : (
                      <h3 className="text-2xl font-bold text-accent mb-3">{m.id}</h3>
                    )}
                    <ul className={`space-y-2 ${isLeft ? "md:text-right" : ""}`}>
                      {m.items.map((item: string, j: number) => (
                        <li key={j} className="text-sm text-text-secondary">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dot */}
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-bg-primary z-10 ${
                    m.isFoundation
                      ? "shadow-[0_0_18px_rgba(245,166,35,0.6)] ring-2 ring-accent/30"
                      : "shadow-[0_0_15px_rgba(245,166,35,0.4)]"
                  }`}
                />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
