"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const PARTNERS = [
  { key: "mafra", logo: "/partners/mafra.jpg" },
  { key: "kape", logo: "/partners/kape.svg" },
  { key: "dodram", logo: "/partners/dodram.png" },
  { key: "dabi", logo: "/partners/dabi.png" },
  { key: "woosung", logo: "/partners/woosung.png" },
  { key: "chunha", logo: "/partners/chunha.jpg" },
  { key: "pickorea", logo: "/partners/pickorea.png" },
] as const;

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center w-[180px] h-[48px] mx-8 shrink-0">
      <Image
        src={logo}
        alt={name}
        width={180}
        height={48}
        className="max-w-full max-h-full w-auto h-auto object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
}

export function PartnerMarquee() {
  const t = useTranslations("partners");

  const partners = PARTNERS.map((p) => ({
    name: t(p.key),
    logo: p.logo,
  }));

  return (
    <section className="py-14 bg-bg-light overflow-hidden">
      <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-text-muted/50 mb-10">
        {t("label")}
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-light to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-light to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex items-center animate-marquee">
          {[...Array(4)].map((_, setIdx) => (
            <div key={setIdx} className="flex shrink-0 items-center" aria-hidden={setIdx > 0}>
              {partners.map((partner, i) => (
                <PartnerLogo
                  key={`${setIdx}-${i}`}
                  name={partner.name}
                  logo={partner.logo}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
