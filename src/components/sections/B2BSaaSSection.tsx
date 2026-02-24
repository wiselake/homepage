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

  const services = [
    {
      name: "Flow9",
      desc: t("flow9.desc"),
      features: [t("flow9.f1"), t("flow9.f2")],
      status: t("flow9.status"),
    },
    {
      name: t("qbridge.name"),
      desc: t("qbridge.desc"),
      features: [t("qbridge.f1"), t("qbridge.f2")],
      status: t("qbridge.status"),
    },
  ];

  return (
    <Section dark={false}>
      {showHeader && (
        <div className="text-center mb-16">
          <SectionLabel>B2B SaaS</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-text-dark">
            {t("title")}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {t("sectionDesc")}
          </p>
        </div>
      )}

      <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative overflow-hidden p-8 rounded-2xl glass-light shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-500"
          >
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-text-dark">{service.name}</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                {service.status}
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              {service.desc}
            </p>
            <ul className="space-y-2">
              {service.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="text-accent-dark mt-0.5">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
