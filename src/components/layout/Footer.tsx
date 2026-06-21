"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative bg-bg-ink border-t border-white/[0.08] py-12">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--section-padding-x)]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-3">
            <Image
              src="/wiselake_logo.png"
              alt="WiseLake"
              width={140}
              height={32}
              className="h-7 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm text-white/70 max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Company Info */}
          <div className="space-y-2 text-sm text-white/70">
            <p>{t("companyName")}</p>
            <p>{t("ceo")}</p>
            <p>{t("businessNumber")}</p>
            <p>{t("address")}</p>
            <p>
              <a
                href={`mailto:${t("email")}`}
                className="text-accent hover:text-accent-light transition-colors"
              >
                {t("email")}
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] mt-8 pt-8">
          <p className="text-xs text-white/45 text-center">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
