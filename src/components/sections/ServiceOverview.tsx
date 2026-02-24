"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SERVICES = [
  {
    key: "nanotrans",
    href: "/nanotrans" as const,
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "pigplan",
    href: "/pigplan" as const,
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16l4-6 4 4 5-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "services",
    href: "/services" as const,
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "b2b",
    href: "/b2b" as const,
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

function ServiceCard({
  serviceKey,
  href,
  icon,
  index,
}: {
  serviceKey: string;
  href: string;
  icon: React.ReactNode;
  index: number;
}) {
  const t = useTranslations("serviceOverview");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden p-8 rounded-2xl glass hover:border-accent/30 hover:shadow-[0_0_20px_rgba(245,166,35,0.08)] transition-all duration-500"
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.06] to-transparent rounded-t-2xl pointer-events-none" />

      <div className="text-accent mb-5">{icon}</div>

      <h3 className="text-xl font-semibold mb-3">
        {t(`${serviceKey}.title`)}
      </h3>

      <p className="text-text-secondary text-sm leading-relaxed mb-6">
        {t(`${serviceKey}.summary`)}
      </p>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all duration-300"
      >
        {t(`${serviceKey}.cta`)}
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </motion.div>
  );
}

export function ServiceOverview() {
  const t = useTranslations("serviceOverview");

  return (
    <Section id="services">
      <div className="text-center mb-16">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          {t("title")}
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.key}
            serviceKey={service.key}
            href={service.href}
            icon={service.icon}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
}
