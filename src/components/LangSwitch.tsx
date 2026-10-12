"use client";

import { usePathname } from "next/navigation";
import { counterpartPath, type Locale } from "@/lib/site";

/** KR · EN switch. Remembers the choice in NEXT_LOCALE so src/proxy.ts stops auto-redirecting. */
export default function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const other = counterpartPath(pathname);
  const remember = () => {
    document.cookie = `NEXT_LOCALE=${other.locale}; path=/; max-age=31536000; samesite=lax`;
  };
  const current = locale === "ko" ? "KR" : "EN";
  const target = locale === "ko" ? "EN" : "KR";
  return (
    <span className="text-[14px] text-muted">
      {locale === "ko" ? (
        <>
          <b className="text-ink">{current}</b> ·{" "}
          <a href={other.href} hrefLang="en" lang="en" onClick={remember} className="text-muted hover:text-ink">
            {target}
          </a>
        </>
      ) : (
        <>
          <a href={other.href} hrefLang="ko" lang="ko" onClick={remember} className="text-muted hover:text-ink">
            {target}
          </a>{" "}
          · <b className="text-ink">{current}</b>
        </>
      )}
    </span>
  );
}
