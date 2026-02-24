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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
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
        <div className="absolute inset-0 bg-black/30" />

        {/* Particles fallback while video loads or if it fails */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <HeroParticles />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-[3] text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-accent text-accent text-xs font-medium tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(245,166,35,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {t("badge")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
        >
          <span className="block">{t("tagline1")}</span>
          <span className="block text-accent">{t("tagline2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]"
        >
          {t("subtitle1")}
            <br />
            {t("subtitle2")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/nanotrans"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full glass-accent text-white font-medium text-sm hover:shadow-[0_0_25px_rgba(245,166,35,0.3)] hover:bg-accent/20 transition-all duration-300"
          >
            {t("cta")}
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full glass text-text-secondary font-medium text-sm hover:border-accent/40 hover:text-accent transition-all duration-300"
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
