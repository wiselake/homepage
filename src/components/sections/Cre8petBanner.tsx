"use client";

import { useLocale } from "next-intl";
import { Section } from "@/components/layout/Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const ADS_KR = [
  "/cre8pet_ad_kr_1.png",
  "/cre8pet_ad_kr_2.jpg",
  "/cre8pet_ad_kr_3.jpg",
  "/cre8pet_ad_kr_4.jpg",
  "/cre8pet_ad_kr_5.jpg",
  "/cre8pet_ad_kr_6.jpg",
];

const INTERVAL = 4000;

export function Cre8petBanner() {
  const locale = useLocale();

  // 영어 페이지에서는 가로형 광고 이미지가 없으므로 표시하지 않음
  if (locale === "en") return null;

  const ads = ADS_KR;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % ads.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [ads.length]);

  return (
    <Section dark className="!pt-0 !pb-24">
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl">
        {/* Aspect ratio container: 2848x1504 ≈ 1.89:1 */}
        <div className="relative w-full" style={{ paddingBottom: "52.8%" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={ads[current]}
                alt={`cre8pet ${current + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => goTo((current - 1 + ads.length) % ads.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => goTo((current + 1) % ads.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {ads.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-white w-6"
                  : "bg-white/40 hover:bg-white/60 w-2"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
