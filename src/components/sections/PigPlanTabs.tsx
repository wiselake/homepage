"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TABS = [
  { id: "pigplan", label: "PigPlan" },
  { id: "insight-pigplan", label: "Insight PigPlan" },
  { id: "pigsignal", label: "PigSignal" },
  { id: "pigplan-core", label: "PigOS AI" },
] as const;

export function PigPlanTabs() {
  const t = useTranslations("pigplanTabs");
  const [active, setActive] = useState<string>("pigplan");

  useEffect(() => {
    const handleScroll = () => {
      for (const tab of [...TABS].reverse()) {
        const el = document.getElementById(tab.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActive(tab.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="sticky top-[64px] z-40 bg-bg-primary/90 backdrop-blur-2xl border-b border-border">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--section-padding-x)]">
        <nav
          className="flex items-center justify-center py-3 overflow-x-auto scrollbar-none"
          aria-label={t("nav")}
        >
          <div className="inline-flex items-center gap-1 p-1 rounded-full glass-strong">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleClick(tab.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  active === tab.id
                    ? "text-accent"
                    : "text-text-secondary hover:text-white/80"
                }`}
              >
                {active === tab.id && (
                  <motion.div
                    layoutId="pigplanActiveTab"
                    className="absolute inset-0 rounded-full glass-accent shadow-[0_0_12px_rgba(245,166,35,0.1)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
