"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MEMBERS = [
  { id: "erp", name: "PigPlan", href: "/pigplan" as const },
  { id: "insight", name: "Insight PigPlan", href: "/pigplan/insight" as const },
  { id: "pigos", name: "PigOS", href: "/pigplan/pigos-ai" as const },
  { id: "pigsignal", name: "PigSignal", href: "/pigplan/pigsignal" as const },
] as const;

export function PigPlanFamily() {
  const t = useTranslations("pigplanFamily");
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="pigplan-family" dark>
      <div className="text-center mb-12">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{t("title")}</h2>
      </div>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {MEMBERS.map((m, i) => {
          const isActive = pathname === m.href;
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={m.href}
                aria-current={isActive ? "page" : undefined}
                className={`group flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-500 ${
                  isActive
                    ? "glass-accent border-accent/40 shadow-[0_0_24px_rgba(245,166,35,0.12)]"
                    : "glass hover:border-accent/30 hover:shadow-[0_0_20px_rgba(245,166,35,0.08)]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-lg font-semibold">{m.name}</h3>
                    {isActive && (
                      <span className="text-[11px] font-medium text-accent/90 rounded-full border border-accent/30 px-2 py-0.5">
                        {t("current")}
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {t(`members.${m.id}`)}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  {t("cta")}
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
