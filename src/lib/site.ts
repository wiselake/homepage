export type Locale = "ko" | "en";

export const SITE_URL = "https://wiselake.ai";
export const GA_ID = "G-70NWVV9D0S";

/** Path of a page in the given locale. Korean lives at the root, English under /en. */
export function localePath(locale: Locale, path = "/"): string {
  if (locale === "ko") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** The same page in the other locale. */
export function counterpartPath(pathname: string): { locale: Locale; href: string } {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3) || "/";
    return { locale: "ko", href: rest };
  }
  return { locale: "en", href: pathname === "/" ? "/en" : `/en${pathname}` };
}

export const COMPANY = {
  name: { ko: "주식회사 와이즈레이크", en: "WiseLake, Inc." },
  short: { ko: "(주)와이즈레이크", en: "WiseLake, Inc." },
  ceo: { ko: "진교문", en: "Gyomoon Jin" },
  founded: { ko: "2022년 1월 28일", en: "January 28, 2022" },
  bizRegNo: "768-87-02255",
  email: "wiselake@wiselake.ai",
  phone: "031-431-3414",
  phoneIntl: "+82-31-431-3414",
  hours: { ko: "09:00–12:00, 13:00–17:00", en: "09:00–12:00 and 13:00–17:00 KST" },
  // "더에이치타워 919" / "The H Tower 919" is the building name.
  address: {
    ko: "경기 안양시 동안구 벌말로 80 더에이치타워 919, 5층 505호",
    en: "Suite 505 (5F), The H Tower 919, 80 Beolmal-ro, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea",
  },
} as const;

export const LINKS = {
  pigplanLogin: "https://pigplan.io",
  pigos: "https://pigos.io",
  pigosStart: "https://app.pigos.io/onboarding",
  nanotrans: "https://nanotrans.io",
  nanotransKo: "https://nanotrans.io/ko/",
  nanotransContact: "https://nanotrans.io/contact/#inquiry",
  agentPaywall: "https://wordpress.org/plugins/nanotrans-agent-paywall/",
} as const;
