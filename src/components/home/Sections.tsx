import { NEWS, PRESS_OUTLETS, formatNewsDate, sortedNews } from "@/content/news";
import { COMPANY, LINKS, localePath, type Locale } from "@/lib/site";
import ContactForm from "../ContactForm";
import { ArrowIcon, Badge, ButtonLink, Eyebrow, SectionTitle, TextLink } from "../ui";

/* ---------------------------------------------------------------- NanoTrans (content value) */

/*
 * Status per area follows nanotrans.io on 2026-10-20: Index (measure) and Edge (control) in
 * development, Market (trade) in preparation, a pilot with a Korean IT/business publisher.
 * No launch dates, settlement or revenue claims.
 */
const NT = {
  ko: {
    eyebrow: "NanoTrans · Content Value",
    title: ["NanoTrans —", "AI 시대, 콘텐츠의 가치를 연결합니다."],
    body: "AI가 활용하는 콘텐츠의 가치를 측정하고, 접근과 활용 조건을 관리하는 기술을 개발합니다.",
    areas: [
      { name: "콘텐츠 활용 측정", badge: "개발 중", tone: "dev" as const },
      { name: "접근 및 활용 정책 관리", badge: "개발 중", tone: "dev" as const },
      { name: "콘텐츠 가치 거래 모델", badge: "준비 중", tone: "soon" as const },
    ],
    pilot: "국내 IT·경제 전문 매체와 파일럿을 진행하고 있습니다.",
    cta: "NanoTrans 알아보기",
  },
  en: {
    eyebrow: "NanoTrans · Content Value",
    title: ["NanoTrans —", "Connecting Content Value in the AI Era"],
    body: "Technology to measure the value of content AI uses, and to manage how it is accessed and used.",
    areas: [
      { name: "Content usage measurement", badge: "In development", tone: "dev" as const },
      { name: "Access and usage policy", badge: "In development", tone: "dev" as const },
      { name: "Content value exchange", badge: "In preparation", tone: "soon" as const },
    ],
    pilot: "Piloting with a Korean IT and business news publisher.",
    cta: "Explore NanoTrans",
  },
};

export function ContentValue({ locale }: { locale: Locale }) {
  const t = NT[locale];
  return (
    <section id="content" className="bg-card">
      <div id="nanotrans" className="mx-auto max-w-[1200px] px-6 py-[clamp(80px,10vw,136px)]">
        <div className="grid grid-cols-1 items-end gap-x-16 gap-y-6 min-[1000px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Eyebrow className="text-ai-text">{t.eyebrow}</Eyebrow>
            <SectionTitle className="mt-4">
              {t.title[0]}
              <br />
              {t.title[1]}
            </SectionTitle>
          </div>
          <p className="m-0 text-[17px] text-ink-2">{t.body}</p>
        </div>

        <ol className="m-0 mt-12 grid list-none grid-cols-1 gap-5 p-0 min-[860px]:grid-cols-3">
          {t.areas.map((a, i) => (
            <li key={a.name} className="flex flex-col rounded-[20px] border border-line bg-paper p-[clamp(28px,3vw,36px)]">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[15px] font-bold tabular-nums text-ai-text">0{i + 1}</span>
                <Badge tone={a.tone}>{a.badge}</Badge>
              </div>
              <h3 className="m-0 mt-6 text-[clamp(21px,2.1vw,24px)] font-bold tracking-[-0.02em]">{a.name}</h3>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
          <p className="m-0 text-[16px] text-ink-2">{t.pilot}</p>
          <ButtonLink href={locale === "ko" ? LINKS.nanotransKo : LINKS.nanotrans} external size="lg" className="max-sm:w-full">
            {t.cta}
            <ArrowIcon />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- company */

/*
 * 1995 is when PigPlan's technology began, not the company's founding (WiseLake, Inc. 2022).
 * Web/mobile 2005 and cloud 2020 confirmed on 2026-10-21. The EZFarm spin-off line and the
 * NanoTrans year are left out until corporate records / the product owner confirm them.
 */
const CO = {
  ko: {
    eyebrow: "회사소개",
    title: ["1995년의 기술에서,", "AI 시대의 서비스로."],
    history: [
      ["1995", "피그플랜 기술 개발 시작"],
      ["2005", "피그플랜 웹·모바일 서비스 출시"],
      ["2020", "피그플랜 클라우드 서비스 개시"],
      ["2022", "㈜와이즈레이크 설립"],
      ["2026", "PigOS 글로벌 출시 · PigPlan AI 확장"],
    ],
    rows: { name: "상호", ceo: "대표", founded: "법인 설립", address: "주소", email: "이메일" },
  },
  en: {
    eyebrow: "Company",
    title: ["From PigPlan's Beginnings in 1995", "to the AI Era."],
    history: [
      ["1995", "PigPlan technology development begins"],
      ["2005", "PigPlan web and mobile service launches"],
      ["2020", "PigPlan cloud service launches"],
      ["2022", "WiseLake, Inc. is founded"],
      ["2026", "PigOS launches globally · PigPlan AI expands"],
    ],
    rows: { name: "Company", ceo: "CEO", founded: "Incorporated", address: "Address", email: "Email" },
  },
};

export function Company({ locale }: { locale: Locale }) {
  const t = CO[locale];
  return (
    <section id="company" className="mx-auto max-w-[1200px] px-6 py-[clamp(80px,10vw,136px)]">
      <div className="grid grid-cols-1 gap-x-16 gap-y-12 min-[1000px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <SectionTitle className="mt-4">
            {t.title[0]}
            <br />
            {t.title[1]}
          </SectionTitle>
        </div>
        <ol className="m-0 list-none self-end p-0">
          {t.history.map(([y, e], i) => (
            <li key={e} className="relative grid grid-cols-[88px_1fr] gap-4 pb-7 last:pb-0">
              {i < t.history.length - 1 && <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-[18px] w-px bg-line" />}
              <span className="flex items-center gap-4 text-[18px] font-bold tabular-nums text-brand">
                <span aria-hidden="true" className="h-[11px] w-[11px] flex-none rounded-full border-2 border-brand bg-paper" />
                {y}
              </span>
              <span className="text-[17px] text-ink">{e}</span>
            </li>
          ))}
        </ol>
      </div>

      <dl className="m-0 mt-14 grid grid-cols-1 gap-x-10 gap-y-5 rounded-[20px] border border-line bg-card p-[clamp(24px,3.5vw,40px)] text-[16px] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="text-muted">{t.rows.name}</dt>
          <dd className="m-0 mt-1 font-semibold">{COMPANY.short[locale]}</dd>
        </div>
        <div>
          <dt className="text-muted">{t.rows.ceo}</dt>
          <dd className="m-0 mt-1 font-semibold">{COMPANY.ceo[locale]}</dd>
        </div>
        <div>
          <dt className="text-muted">{t.rows.founded}</dt>
          <dd className="m-0 mt-1 font-semibold">{COMPANY.founded[locale]}</dd>
        </div>
        <div>
          <dt className="text-muted">{t.rows.email}</dt>
          <dd className="m-0 mt-1 font-semibold">
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </dd>
        </div>
        <div className="sm:col-span-2 lg:col-span-4">
          <dt className="text-muted">{t.rows.address}</dt>
          <dd className="m-0 mt-1 font-semibold">{COMPANY.address[locale]}</dd>
        </div>
      </dl>
    </section>
  );
}

/* ---------------------------------------------------------------- news */

const NW = {
  ko: { title: "소식", all: "전체 보기 →", press: "보도된 곳", via: "보도" },
  en: { title: "News", all: "All news →", press: "Covered by", via: "" },
};

export function NewsCard({ locale, item, headingLevel = 3, summary = true }: { locale: Locale; item: (typeof NEWS)[number]; headingLevel?: 2 | 3; summary?: boolean }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const t = NW[locale];
  const product = item.product === "pigos" ? "PigOS" : item.product === "pigplan" ? (locale === "ko" ? "피그플랜" : "PigPlan") : item.product === "nanotrans" ? "NanoTrans" : locale === "ko" ? "회사" : "Company";
  const outlets = item.outlets.map((o) => o.name).join(" · ");
  return (
    <a href={item.outlets[0].url} target="_blank" rel="noopener" className="flex flex-col rounded-[20px] border border-line bg-card p-7 text-ink transition-colors hover:border-line-strong hover:text-ink">
      <div className="text-[14px] text-muted">
        <time dateTime={item.date}>{formatNewsDate(item, locale)}</time> · {product}
      </div>
      <H className="m-0 mt-3 text-[19px] font-bold leading-[1.4]">{item.title[locale]}</H>
      {summary && <p className="m-0 mt-2 text-[16px] text-ink-2">{item.summary[locale]}</p>}
      <div className="mt-auto pt-4 text-[14px] text-muted">
        {outlets}
        {t.via ? ` ${t.via}` : ""}
      </div>
    </a>
  );
}

export function News({ locale }: { locale: Locale }) {
  const t = NW[locale];
  const items = sortedNews().slice(0, 4);
  return (
    <section id="news" className="bg-card">
      <div className="mx-auto max-w-[1200px] px-6 py-[clamp(80px,10vw,136px)]">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionTitle>{t.title}</SectionTitle>
          <TextLink href={localePath(locale, "/news")}>{t.all}</TextLink>
        </div>
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
          {items.map((n) => (
            <NewsCard key={n.date + n.title.ko} locale={locale} item={n} summary={false} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 border-y border-line py-4 text-[15px]">
          <span className="font-semibold text-muted">{t.press}</span>
          {PRESS_OUTLETS.map((o) => (
            <a key={o.name} href={o.url} target="_blank" rel="noopener" className="font-semibold text-ink-2 hover:text-ink">
              {o.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- contact */

const CT = {
  ko: {
    title: "무엇을 도와드릴까요?",
    body: ["서비스 도입, 기술 협력, 사업 제휴 등 궁금한 사항을 남겨 주세요."],
    mail: "메일로 직접 보내셔도 됩니다",
  },
  en: {
    title: "How can we help?",
    body: ["Questions about our products, technology or partnerships? Send us a message."],
    mail: "Or email us directly",
  },
};

export function Contact({ locale }: { locale: Locale }) {
  const t = CT[locale];
  return (
    <section id="contact" className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-16 gap-y-12 px-6 py-[clamp(80px,10vw,136px)] min-[1000px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div>
        <SectionTitle>{t.title}</SectionTitle>
        <div className="mt-6 grid gap-1 text-[17px] text-ink-2">
          {t.body.map((p) => (
            <p key={p} className="m-0">
              {p}
            </p>
          ))}
        </div>
        <p className="m-0 mt-8 text-[16px] text-muted">
          {t.mail}
          <br />
          <a href={`mailto:${COMPANY.email}`} className="text-[18px] font-semibold">
            {COMPANY.email}
          </a>
        </p>
      </div>
      <ContactForm locale={locale} />
    </section>
  );
}
