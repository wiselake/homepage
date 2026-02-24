"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface PageHeroProps {
  namespace: string;
}

export function PageHero({ namespace }: PageHeroProps) {
  const t = useTranslations(namespace);

  return (
    <section className="relative pt-36 pb-24 px-[var(--section-padding-x)] overflow-hidden bg-bg-primary">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent pointer-events-none" />
      {/* Bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-[var(--container-max)] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>{t("heroLabel")}</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          {t("heroTitle")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-text-secondary max-w-2xl mx-auto"
        >
          {t("heroSubtitle")}
        </motion.p>
      </div>
    </section>
  );
}
