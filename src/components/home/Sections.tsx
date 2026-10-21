import { NEWS, PRESS_OUTLETS, formatNewsDate, sortedNews } from "@/content/news";
import { COMPANY, LINKS, localePath, type Locale } from "@/lib/site";
import ContactForm from "../ContactForm";
import { ArrowIcon, ButtonLink, SectionLabel, SectionTitle, TextLink } from "../ui";

/* ---------------------------------------------------------------- NanoTrans (content value) */

/*
 * Status per area follows nanotrans.io on 2026-10-20: Index (measure) and Edge (control) in
 * development, Market (trade) in preparation, a pilot with a Korean IT/business publisher.
 * No launch dates, settlement or revenue claims.
 */
const NT = {
  ko: {
    n: "03",
    eyebrow: "NanoTrans · Content Value",
    title: ["NanoTrans —", "AI 시대, 콘텐츠의 가치를 연결합니다."],
    body: ["AI가 활용하는 콘텐츠의 가치를 측정하고,", "접근과 활용 조건을 관리하는 기술을 개발합니다."],
    areas: [
      { name: "콘텐츠 활용 측정", status: "개발 중" },
      { name: "접근 및 활용 정책 관리", status: "개발 중" },
      { name: "콘텐츠 가치 거래 모델", status: "준비 중" },
    ],
    pilot: "국내 IT·경제 전문 매체와 파일럿을 진행하고 있습니다.",
    cta: "NanoTrans 알아보기",
  },
  en: {
    n: "03",
    eyebrow: "NanoTrans · Content Value",
    title: ["NanoTrans —", "Connecting Content Value in the AI Era"],
    body: ["Technology to measure the value of content AI uses,", "and to manage how it is accessed and used."],
    areas: [
      { name: "Content usage measurement", status: "In development" },
      { name: "Access and usage policy", status: "In development" },
      { name: "Content value exchange", status: "In preparation" },
    ],
    pilot: "Piloting with a Korean IT and business news publisher.",
    cta: "Explore NanoTrans",
  },
};

export function ContentValue({ locale }: { locale: Locale }) {
  const t = NT[locale];
  const href = locale === "ko" ? LINKS.nanotransKo : LINKS.nanotrans;
  return (
    <section id="content">
      <div id="nanotrans" className="mx-auto max-w-[1200px] px-6 py-[clamp(48px,6vw,88px)]">
        <SectionLabel n={t.n}>{t.eyebrow}</SectionLabel>
        <div className="mt-10">
          <SectionTitle>
            {t.title[0]}
            <br />
            {t.title[1]}
          </SectionTitle>
          <p className="m-0 mt-6 text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-ink-2">
            {t.body[0]}
            <br className="max-sm:hidden" /> {t.body[1]}
          </p>
        </div>

        <ol className="m-0 mt-12 grid list-none grid-cols-1 border-t border-line p-0 md:grid-cols-3">
          {t.areas.map((a, i) => (
            <li key={a.name} className="border-b border-line py-7 md:border-b-0 md:border-l md:px-7 md:first:border-l-0 md:first:pl-0">
              <span className="text-[14px] font-semibold tabular-nums text-ai-text">0{i + 1}</span>
              <h3 className="m-0 mt-3 text-[clamp(20px,1.9vw,23px)] font-bold tracking-[-0.02em]">{a.name}</h3>
              <p className="m-0 mt-1 text-[15px] text-muted">{a.status}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-line pt-8">
          <p className="m-0 text-[16px] text-ink-2">{t.pilot}</p>
          <ButtonLink href={href} external size="lg" className="max-sm:w-full">
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
  // Draft-A layout with type about 2px larger (chosen 2026-10-21).
  return (
    <section id="company" className="bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-[clamp(64px,9vw,128px)]">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 min-[1000px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="m-0 text-[16px] font-bold uppercase tracking-[0.12em] text-brand">{t.eyebrow}</p>
            <h2 className="m-0 mt-4 text-balance text-[clamp(32px,4vw,50px)] font-bold leading-[1.18] tracking-[-0.035em]">
              {t.title[0]}
              <br />
              {t.title[1]}
            </h2>
          </div>
          <ol className="m-0 list-none self-end p-0">
            {t.history.map(([y, e], i) => (
              <li key={e} className="relative grid grid-cols-[96px_1fr] gap-4 pb-7 last:pb-0">
                {i < t.history.length - 1 && <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-[20px] w-px bg-line" />}
                <span className="flex items-center gap-4 text-[20px] font-bold tabular-nums text-brand">
                  <span aria-hidden="true" className="h-[11px] w-[11px] flex-none rounded-full border-2 border-brand bg-paper" />
                  {y}
                </span>
                <span className="text-[19px] text-ink">{e}</span>
              </li>
            ))}
          </ol>
        </div>

        <dl className="m-0 mt-14 grid grid-cols-1 gap-x-10 gap-y-5 rounded-[20px] border border-line bg-card p-[clamp(24px,3.5vw,40px)] text-[18px] sm:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- news */

const NW = {
  ko: { title: "소식", all: "전체 보기", press: "보도된 곳", via: "보도" },
  en: { title: "News", all: "All news", press: "Covered by", via: "" },
};

/** One news item as a ruled row: date · product · title (· summary) · outlet. */
export function NewsCard({ locale, item, headingLevel = 3, summary = true }: { locale: Locale; item: (typeof NEWS)[number]; headingLevel?: 2 | 3; summary?: boolean }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const t = NW[locale];
  const product = productLabel(item, locale);
  const outlets = item.outlets.map((o) => o.name).join(" · ");
  return (
    <a
      href={item.outlets[0].url}
      target="_blank"
      rel="noopener"
      className="group grid grid-cols-1 gap-x-8 gap-y-1 border-b border-line py-6 text-ink hover:text-ink md:grid-cols-[150px_110px_1fr_auto] md:items-baseline"
    >
      <time dateTime={item.date} className="text-[15px] tabular-nums text-muted">
        {formatNewsDate(item, locale)}
      </time>
      <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-brand-dark">{product}</span>
      <span>
        <H className="m-0 text-[clamp(17px,1.6vw,19px)] font-semibold leading-[1.45] group-hover:underline group-hover:underline-offset-4">{item.title[locale]}</H>
        {summary && <p className="m-0 mt-1.5 text-[15px] text-ink-2">{item.summary[locale]}</p>}
      </span>
      <span className="text-[14px] text-muted md:text-right">
        {outlets}
        {t.via ? ` ${t.via}` : ""}
      </span>
    </a>
  );
}

function productLabel(item: (typeof NEWS)[number], locale: Locale) {
  return item.product === "pigos" ? "PigOS" : item.product === "pigplan" ? (locale === "ko" ? "피그플랜" : "PigPlan") : item.product === "nanotrans" ? "NanoTrans" : locale === "ko" ? "회사" : "Company";
}

/** Home news: the newest item as a lead story, the next three as a short list (option C, 2026-10-21). */
export function News({ locale }: { locale: Locale }) {
  const t = NW[locale];
  const [lead, ...rest] = sortedNews().slice(0, 4);
  const outlets = (n: (typeof NEWS)[number]) => n.outlets.map((o) => o.name).join(" · ") + (t.via ? ` ${t.via}` : "");
  return (
    <section id="news">
      <div className="mx-auto max-w-[1200px] px-6 py-[clamp(60px,8vw,112px)]">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionTitle>{t.title}</SectionTitle>
          <TextLink href={localePath(locale, "/news")}>
            {t.all}
            <ArrowIcon />
          </TextLink>
        </div>

        <div className="mt-10 grid grid-cols-1 border-t border-ink lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <a href={lead.outlets[0].url} target="_blank" rel="noopener" className="group block border-b border-line py-8 text-ink hover:text-ink lg:border-b-0 lg:border-r lg:pr-12">
            <p className="m-0 text-[15px] text-muted">
              <time dateTime={lead.date}>{formatNewsDate(lead, locale)}</time>
              <span className="mx-2">·</span>
              <span className="font-semibold text-brand-dark">{productLabel(lead, locale)}</span>
            </p>
            <h3 className="m-0 mt-4 text-balance text-[clamp(24px,2.6vw,32px)] font-bold leading-[1.3] tracking-[-0.025em] group-hover:underline group-hover:underline-offset-[6px]">{lead.title[locale]}</h3>
            <p className="m-0 mt-4 text-[17px] leading-[1.65] text-ink-2">{lead.summary[locale]}</p>
            <p className="m-0 mt-6 text-[15px] text-muted">{outlets(lead)}</p>
          </a>
          <ul className="m-0 list-none p-0 lg:pl-12">
            {rest.map((n) => (
              <li key={n.date + n.title.ko} className="border-b border-line last:border-b-0">
                <a href={n.outlets[0].url} target="_blank" rel="noopener" className="group block py-6 text-ink hover:text-ink">
                  <p className="m-0 text-[14px] text-muted">
                    <time dateTime={n.date}>{formatNewsDate(n, locale)}</time>
                    <span className="mx-2">·</span>
                    <span className="font-semibold text-brand-dark">{productLabel(n, locale)}</span>
                  </p>
                  <h3 className="m-0 mt-2 text-[18px] font-semibold leading-[1.45] group-hover:underline group-hover:underline-offset-4">{n.title[locale]}</h3>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-line pt-6 text-[15px]">
          <span className="text-muted">{t.press}</span>
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

/** Draft-A layout (chosen 2026-10-21): title and email on the left, the form card on the right. */
export function Contact({ locale }: { locale: Locale }) {
  const t = CT[locale];
  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-16 gap-y-12 px-6 py-[clamp(64px,9vw,128px)] min-[1000px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <h2 className="m-0 text-balance text-[clamp(30px,4vw,48px)] font-bold leading-[1.18] tracking-[-0.035em]">{t.title}</h2>
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
      </div>
    </section>
  );
}
