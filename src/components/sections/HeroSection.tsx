"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroParticles = dynamic(
  () => import("@/components/3d/HeroParticles").then((m) => m.HeroParticles),
  { ssr: false }
);

export function HeroSection() {
  const t = useTranslations("hero");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-ink"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-[1]">
        {!videoFailed && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        )}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/5" />

        {/* Particles fallback while video loads or if it fails */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <HeroParticles />
        </div>
      </div>

      {/* Top scrim — keeps the transparent header legible over bright video frames */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/45 to-transparent z-[2] pointer-events-none" />

      {/* Content overlay */}
      <div className="relative z-[3] text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-accent-light text-xs font-medium tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {t("badge")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)]"
        >
          <span className="block">{t("tagline1")}</span>
          <span className="block text-accent">{t("tagline2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed break-keep drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          <span className="block">
            {t("subtitle1_line1")}
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            {t("subtitle1_line2")}
          </span>
          <span className="block mt-2">{t("subtitle2")}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.nanotrans.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-[#0e1726] font-medium text-sm hover:bg-accent-light transition-all duration-300"
          >
            {t("cta")}
          </a>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/25 text-white font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            {t("ctaSecondary")}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full bg-white/[0.06] border border-white/15 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
