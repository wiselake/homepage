import Script from "next/script";
import type { ReactNode } from "react";
import { COMPANY, GA_ID, LINKS, SITE_URL, localePath, type Locale } from "@/lib/site";
import LangSwitch from "./LangSwitch";
import MobileMenu from "./MobileMenu";

const PRETENDARD_CSS =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

const NAV = {
  ko: [
    { label: "양돈 AI", hash: "#livestock" },
    { label: "콘텐츠 가치", hash: "#content" },
    { label: "회사소개", hash: "#company" },
  ],
  en: [
    { label: "Swine AI", hash: "#livestock" },
    { label: "Content Value", hash: "#content" },
    { label: "Company", hash: "#company" },
  ],
};

const T = {
  ko: { news: "소식", contact: "문의", products: "제품", info: "안내", privacy: "개인정보처리방침", terms: "이용약관", home: "와이즈레이크 홈", menu: "주 메뉴", reg: "사업자등록번호", ceo: "대표이사" },
  en: { news: "News", contact: "Contact", products: "Products", info: "Legal", privacy: "Privacy policy", terms: "Terms of use", home: "WiseLake home", menu: "Main menu", reg: "Business reg. no.", ceo: "CEO" },
};

function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name.en,
    alternateName: COMPANY.name.ko,
    url: SITE_URL,
    logo: `${SITE_URL}/wiselake_logo.png`,
    email: COMPANY.email,
    foundingDate: "2022-01-28",
    address: {
      "@type": "PostalAddress",
      streetAddress: "80 Beolmal-ro, The H Tower 919, Suite 505 (5F)",
      addressLocality: "Anyang-si, Dongan-gu",
      addressRegion: "Gyeonggi-do",
      addressCountry: "KR",
    },
    sameAs: [LINKS.pigos, LINKS.nanotrans, LINKS.pigplanLogin],
  };
}

export default function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = T[locale];
  const home = localePath(locale, "/");
  const homeAnchor = (hash: string) => `${home}${hash}`;
  const navItems = [
    ...NAV[locale].map((n) => ({ label: n.label, href: homeAnchor(n.hash) })),
    { label: t.news, href: localePath(locale, "/news") },
  ];

  return (
    <html lang={locale}>
      {/* App Router root layout: a plain <head> is correct here; the rule targets the Pages Router. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* Pretendard loads without blocking first paint: open both jsDelivr connections early
            (the stylesheet is fetched without CORS, the font files with it), then add the stylesheet
            from an inline script (next/script would wait for the Next runtime). Text first renders in the metric-matched fallbacks in globals.css. */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement("link");l.rel="stylesheet";l.href="${PRETENDARD_CSS}";document.head.appendChild(l)})()`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href={PRETENDARD_CSS} />
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:px-4 focus:py-2">
          {locale === "ko" ? "본문으로 건너뛰기" : "Skip to content"}
        </a>

        <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
          <div className="mx-auto flex max-w-[1200px] items-center gap-x-4 px-6 py-3.5 md:gap-x-10">
            <a href={home} aria-label={t.home} className="mr-auto flex items-center md:mr-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/wiselake_logo.png" alt="WISELAKE" width={108} height={30} className="block h-[30px] w-auto aspect-[466/130]" />
            </a>
            <nav aria-label={t.menu} className="hidden flex-auto flex-wrap gap-x-8 text-[16px] font-medium md:flex">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="py-2.5 text-ink hover:text-brand">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">
                <LangSwitch locale={locale} />
              </span>
              <a
                href={homeAnchor("#contact")}
                className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-[8px] bg-brand px-5 text-[16px] font-semibold text-white hover:bg-brand-dark hover:text-white"
              >
                {t.contact}
              </a>
              <MobileMenu locale={locale} items={navItems} label={t.menu} />
            </div>
          </div>
        </header>

        <main id="main">{children}</main>

        <footer className="border-t border-line bg-linen">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-12 gap-y-10 px-6 py-14 text-[15px] leading-[1.8] text-ink-2 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/wiselake_logo.png" alt="WISELAKE" width={94} height={26} className="block h-[26px] w-auto aspect-[466/130]" />
              <p className="m-0 mt-3 font-semibold text-ink">Data Moves. Value Follows.</p>
              <p className="m-0 mt-4">
                {COMPANY.short[locale]} · {t.ceo} {COMPANY.ceo[locale]}
                <br />
                {t.reg} {COMPANY.bizRegNo}
                <br />
                {COMPANY.address[locale]}
                <br />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </p>
            </div>
            <div>
              <p className="m-0 font-bold text-ink">{t.products}</p>
              <p className="m-0 mt-2 grid gap-0.5">
                <a href={localePath(locale, "/pigplan")}>{locale === "ko" ? "피그플랜 · PigPlan AI" : "PigPlan · PigPlan AI"}</a>
                <a href={LINKS.pigos}>PigOS</a>
                <a href={locale === "ko" ? LINKS.nanotransKo : LINKS.nanotrans}>NanoTrans</a>
              </p>
            </div>
            <div>
              <p className="m-0 font-bold text-ink">{t.info}</p>
              <p className="m-0 mt-2 grid gap-0.5">
                <a href={localePath(locale, "/terms")}>{t.terms}</a>
                <a href={localePath(locale, "/privacy")}>
                  <b>{t.privacy}</b>
                </a>
                <LangSwitch locale={locale} />
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-[1200px] border-t border-line px-6 py-6 text-[14px] text-muted">© 2026 WiseLake, Inc. All rights reserved.</div>
        </footer>

        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
