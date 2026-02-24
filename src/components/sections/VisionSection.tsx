"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function VisionSection() {
  const t = useTranslations("vision");

  return (
    <Section id="vision" dark>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Vision */}
        <div className="relative overflow-hidden p-8 lg:p-10 rounded-2xl glass">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-2xl pointer-events-none" />
          <SectionLabel>{t("visionLabel")}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {t("visionTitle1")}
            <br />
            {t("visionTitle2")}
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            {t("visionDesc")}
          </p>
        </div>

        {/* Mission */}
        <div className="relative overflow-hidden p-8 lg:p-10 rounded-2xl glass">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-2xl pointer-events-none" />
          <SectionLabel>{t("missionLabel")}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {t("missionTitle1")}
            <br />
            {t("missionTitle2")}
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            {t("missionDesc")}
          </p>
        </div>
      </div>
    </Section>
  );
}
