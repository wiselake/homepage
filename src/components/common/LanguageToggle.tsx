"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const next = locale === "ko" ? "en" : "ko";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1 px-3 py-1.5 rounded-full glass text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all duration-300"
      aria-label={`Switch to ${locale === "ko" ? "English" : "Korean"}`}
    >
      <span className={locale === "ko" ? "text-text-primary" : "text-text-muted"}>
        KO
      </span>
      <span className="text-text-muted">/</span>
      <span className={locale === "en" ? "text-text-primary" : "text-text-muted"}>
        EN
      </span>
    </button>
  );
}
