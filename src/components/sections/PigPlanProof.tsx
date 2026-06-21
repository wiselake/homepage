"use client";

import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ═══════════════════════════════════════════════
   Home — PigPlan proven track record (ink band).
   Surfaces the cash-cow's proof and bridges the dark
   hero → light body tone gap.
   ═══════════════════════════════════════════════ */

const PROOF_KEYS = ["years", "farms", "share", "psy"] as const;

export function PigPlanProof() {
  const t = useTranslations("pigplanProof");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 20% 0px" });

  return (
    <section
      id="pigplan-proof"
      className="relative overflow-hidden bg-bg-ink text-white py-[var(--section-padding-y)] px-[var(--section-padding-x)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(245,166,35,0.10),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-[var(--container-max)]">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 break-keep">
            {t("title")}
          </h2>
          <p className="text-text-on-ink-muted text-lg">{t("subtitle")}</p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 mb-12">
          {PROOF_KEYS.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2 tracking-tight">
                {t(`items.${key}.value`)}
              </div>
              <div className="text-sm text-text-on-ink-muted leading-snug px-2">
                {t(`items.${key}.label`)}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="/pigplan" variant="primary">
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
