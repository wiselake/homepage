"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MEMBERS = [
  { id: "erp", name: "PigPlan ERP", href: "/pigplan" },
  { id: "insight", name: "Insight PigPlan", href: "/pigplan/insight" },
  { id: "pigos", name: "PigOS", href: "/pigplan/pigos-ai", domain: "pigos.io" },
  { id: "pigsignal", name: "PigSignal", href: "/pigplan/pigsignal", domain: "pigsignal.com" },
] as const;

export function PigPlanFamily() {
  const t = useTranslations("pigplanFamily");
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 20% 0px" });

  return (
    <Section id="pigplan-family" dark>
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 break-keep">{t("title")}</h2>
        <p className="text-text-secondary text-lg">{t("subtitle")}</p>
        <span className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-accent-dark text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {t("badge")}
        </span>
      </div>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {MEMBERS.map((m, i) => {
          const isActive = pathname === m.href;
          const domain = "domain" in m ? m.domain : undefined;
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
                className={`group relative flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-500 ${
                  isActive
                    ? "glass-accent border-accent/40 shadow-[0_0_24px_rgba(245,166,35,0.12)]"
                    : "glass hover:border-accent/30 hover:shadow-[0_0_20px_rgba(245,166,35,0.08)]"
                }`}
              >
                {domain && (
                  <span
                    aria-label={t("ownDomain")}
                    title={`${t("ownDomain")} · ${domain}`}
                    className="absolute top-5 right-5 text-text-muted/50 group-hover:text-accent transition-colors"
                  >
                    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                      <path d="M5 11L11 5M6.5 5H11v4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
                <div>
                  <div className="flex items-center gap-2 mb-2 pr-5">
                    <h3 className="text-lg font-semibold">{m.name}</h3>
                    {isActive && (
                      <span className="text-[11px] font-medium text-accent-dark rounded-full border border-accent/30 px-2 py-0.5 whitespace-nowrap">
                        {t("current")}
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {t(`members.${m.id}`)}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-accent-dark text-sm font-medium group-hover:gap-3 transition-all duration-300">
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
