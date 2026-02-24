"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

const LAYER_KEYS = ["layer4", "layer3", "layer2", "layer1"] as const;

const LAYER_ACCENT: Record<string, string> = {
  layer4: "border-accent/60 bg-accent/[0.08]",
  layer3: "border-accent/40 bg-accent/[0.05]",
  layer2: "border-white/20 bg-white/[0.04]",
  layer1: "border-white/10 bg-white/[0.02]",
};

const LAYER_LABEL_COLOR: Record<string, string> = {
  layer4: "text-accent",
  layer3: "text-accent/80",
  layer2: "text-text-secondary",
  layer1: "text-text-secondary",
};

function LayerDiagram({ alt }: { alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      setTilt({ x: dy * -2, y: dx * 3 });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="relative w-full"
      style={{ perspective: "1200px" }}
    >
      {/* Ambient glow behind the image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: isHovered
            ? "0 0 60px rgba(245, 166, 35, 0.18), 0 0 120px rgba(245, 166, 35, 0.08)"
            : "0 0 40px rgba(245, 166, 35, 0.12), 0 0 80px rgba(245, 166, 35, 0.05)",
          transition: "box-shadow 0.5s ease",
        }}
      />

      {/* Tiltable image container */}
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-bg-secondary cursor-default"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Top amber line with pulse animation */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          style={{ animation: "amber-line-pulse 3s ease-in-out infinite" }}
        />

        <Image
          src="/img/layer.png"
          alt={alt}
          width={2400}
          height={1350}
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
          className="w-full h-auto object-contain"
          priority={false}
        />

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-primary/60 to-transparent"
        />
      </motion.div>
    </motion.div>
  );
}

export function EcosystemSection() {
  const t = useTranslations("ecosystemArch");
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const mobileInView = useInView(mobileRef, { once: true, margin: "-40px" });

  return (
    <Section id="ecosystem">
      {/* Section header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12 md:mb-16"
      >
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
          {t("title")}
        </h2>
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {t("desc")}
        </p>
      </motion.div>

      {/* Architecture diagram */}
      <LayerDiagram alt={t("imageAlt")} />

      {/* Mobile layer legend (< md only) */}
      <motion.div
        ref={mobileRef}
        initial={{ opacity: 0, y: 24 }}
        animate={mobileInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="mt-8 grid grid-cols-1 gap-3 md:hidden"
        aria-label="레이어 구조 설명"
      >
        {LAYER_KEYS.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -16 }}
            animate={mobileInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2 + i * 0.07,
            }}
            className={`flex gap-3 items-start rounded-xl border p-4 ${LAYER_ACCENT[key]}`}
          >
            <div className="mt-0.5 w-0.5 shrink-0 self-stretch rounded-full bg-current opacity-30" />
            <div className="min-w-0">
              <span
                className={`block text-xs font-semibold uppercase tracking-wider mb-1 ${LAYER_LABEL_COLOR[key]}`}
              >
                {t(`layers.${key}.label`)}
              </span>
              <span className="block text-sm font-medium text-text-primary mb-1">
                {t(`layers.${key}.title`)}
              </span>
              <span className="block text-xs leading-relaxed text-text-secondary">
                {t(`layers.${key}.desc`)}
              </span>
            </div>
          </motion.div>
        ))}

        <p className="mt-1 text-center text-[11px] text-text-secondary/50">
          {t("mobileNote")}
        </p>
      </motion.div>
    </Section>
  );
}
