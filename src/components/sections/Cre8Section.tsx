"use client";

import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SCREENS_KR = [
  "/cre8pet_screen_kr_1.png",
  "/cre8pet_screen_kr_2.png",
  "/cre8pet_screen_kr_3.png",
  "/cre8pet_screen_kr_4.png",
  "/cre8pet_screen_kr_5.png",
];

const SCREENS_EN = [
  "/cre8pet_screen_en_1.png",
  "/cre8pet_screen_en_2.png",
  "/cre8pet_screen_en_3.png",
  "/cre8pet_screen_en_4.png",
  "/cre8pet_screen_en_5.png",
];

const INTERVAL = 3500;

export function Cre8Section({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("cre8pet");
  const locale = useLocale();
  const screens = locale === "en" ? SCREENS_EN : SCREENS_KR;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % screens.length);
  }, [screens.length]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <Section id="cre8pet" dark>
      {showHeader && (
        <div className="text-center mb-16">
          <SectionLabel>cre8pet</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t("title")}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      )}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Left: App screenshot carousel */}
        <div className="relative flex justify-center">
          <div className="relative w-[280px] h-[560px] rounded-[2.5rem] border-2 border-white/10 overflow-hidden shadow-2xl shadow-accent/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={screens[current]}
                  alt={`${t("imageAlt")} ${current + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-accent w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <Image
              src="/cre8pet_logo.png"
              alt="cre8pet logo"
              width={56}
              height={56}
              className="rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-bold text-accent">cre8pet</h3>
              <p className="text-text-secondary text-sm">{t("platform")}</p>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed">
            {t("desc")}
          </p>

          <ul className="space-y-3">
            {[t("f1"), t("f2"), t("f3"), t("f4")].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="text-accent mt-0.5 text-lg">•</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="sm"
              href={locale === "en" ? "https://www.cre8pet.com/en" : "https://www.cre8pet.com"}
            >
              Web
            </Button>
            <a
              href="https://play.google.com/store/apps/details?id=com.cre8pet"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src={locale === "en" ? "/badge-google-play.svg" : "/badge-google-play-ko.svg"}
                alt="Get it on Google Play"
                width={locale === "en" ? 135 : 155}
                height={locale === "en" ? 40 : 46}
              />
            </a>
            <a
              href="https://apps.apple.com/kr/app/cre8pet/id6758755636"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src={locale === "en" ? "/badge-app-store.svg" : "/badge-app-store-ko.svg"}
                alt="Download on the App Store"
                width={locale === "en" ? 135 : 155}
                height={locale === "en" ? 40 : 46}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
