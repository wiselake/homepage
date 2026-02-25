"use client";

import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  name: string;
  description: string;
  features: string[];
  links: { label: string; url: string }[];
  index: number;
}

function ServiceCard({
  name,
  description,
  features,
  links,
  index,
}: ServiceCardProps) {
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
      <h3 className="text-2xl font-bold mb-3 text-accent">{name}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-accent mt-0.5">•</span>
            {feature}
          </li>
        ))}
      </ul>
      {links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {links.map((link, i) => (
            <Button key={i} variant="secondary" size="sm" href={link.url}>
              {link.label}
            </Button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function Cre8Section({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("cre8Series1");
  const t2 = useTranslations("cre8Series2");
  const locale = useLocale();

  const services = [
    {
      name: "cre8contents",
      description: t("cre8contents.desc"),
      features: [t("cre8contents.f1"), t("cre8contents.f2")],
      links: [{ label: t("cre8contents.link"), url: "https://wzlhenry.com/" }],
    },
    {
      name: "cre8block",
      description: t("cre8block.desc"),
      features: [t("cre8block.f1"), t("cre8block.f2")],
      links: [
        { label: "Web", url: locale === "en" ? "https://cre8block.com/?lang=en" : "https://cre8block.com/" },
        {
          label: "Android",
          url: "https://play.google.com/store/apps/details?id=com.cre8block.app",
        },
      ],
    },
    {
      name: "cre8pet",
      description: t2("cre8pet.desc"),
      features: [t2("cre8pet.f1"), t2("cre8pet.f2"), t2("cre8pet.f3")],
      links: [
        {
          label: "Web",
          url: locale === "en" ? "https://www.cre8pet.com/en" : "https://www.cre8pet.com",
        },
        {
          label: "Android",
          url: "https://play.google.com/store/apps/details?id=com.cre8pet",
        },
      ],
    },
    {
      name: "cre8song",
      description: t2("cre8song.desc"),
      features: [t2("cre8song.f1"), t2("cre8song.f2")],
      links: [{ label: "Web", url: "https://www.cre8song.com/" }],
    },
  ];

  return (
    <Section id="cre8" dark>
      {showHeader && (
        <div className="text-center mb-16">
          <SectionLabel>cre8 Series</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t("title")}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={service.name} {...service} index={i} />
        ))}
      </div>
    </Section>
  );
}
