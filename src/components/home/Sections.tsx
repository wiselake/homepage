import { NEWS, PRESS_OUTLETS, formatNewsDate, sortedNews } from "@/content/news";
import { COMPANY, LINKS, localePath, type Locale } from "@/lib/site";
import ContactForm from "../ContactForm";
import { Badge, ButtonLink, Eyebrow, SectionTitle, TextLink } from "../ui";

/* ---------------------------------------------------------------- content value */

const NT = {
  ko: {
    eyebrow: "사업 라인 2 · 콘텐츠 가치",
    title: ["AI가 읽는 콘텐츠의 가치를", "측정하고, 거래합니다"],
    lede: "AI는 매일 기사와 콘텐츠를 가져가 답변을 만듭니다. NanoTrans는 그 소비를 측정하고, 언론사가 AI 봇의 접근을 직접 정하고, 콘텐츠를 정당한 값에 거래할 수 있게 합니다.",
    steps: [
      { n: "01 측정", name: "NanoTrans Index", text: "AI 답변이 내 매체와 기사를 얼마나 인용하는지 측정합니다.", badge: "개발 중", tone: "dev" as const },
      { n: "02 결정", name: "NanoTrans Edge", text: "사이트 앞에서 AI 봇을 분류하고, 봇마다 허용·과금·차단을 정합니다.", badge: "개발 중 · 파일럿", tone: "dev" as const },
      { n: "03 거래", name: "NanoTrans Market", text: "콘텐츠와 데이터를 누구나 올려 직접 판매합니다.", badge: "준비 중", tone: "soon" as const },
    ],
    plugin: (
      <>
        <b className="text-ink">Agent Paywall</b> · 해외·소규모 사이트용 WordPress 플러그인, x402·USDC 결제로 운영 중
      </>
    ),
    pluginLink: "WordPress.org에서 보기 →",
    pilot: "국내 IT·경제 전문 매체와 파일럿을 진행하고 있습니다.",
    more: "nanotrans.io에서 자세히 보기",
    contact: "도입 문의 →",
  },
  en: {
    eyebrow: "Line 2 · Content value",
    title: ["Measuring and trading the value", "of content that AI reads"],
    lede: "AI pulls articles and content every day to write its answers. NanoTrans measures that consumption, lets publishers decide how AI bots get access, and lets them sell content at a fair price.",
    steps: [
      { n: "01 Measure", name: "NanoTrans Index", text: "Measures how often AI answers cite your publication and articles.", badge: "In development", tone: "dev" as const },
      { n: "02 Decide", name: "NanoTrans Edge", text: "Classifies AI bots in front of your site; allow, charge or block each one.", badge: "In development · pilot", tone: "dev" as const },
      { n: "03 Trade", name: "NanoTrans Market", text: "Anyone can upload content and data and sell it directly.", badge: "In preparation", tone: "soon" as const },
    ],
    plugin: (
      <>
        <b className="text-ink">Agent Paywall</b> · WordPress plugin for small and international sites, live with x402 · USDC payments
      </>
    ),
    pluginLink: "View on WordPress.org →",
    pilot: "Piloting with a Korean IT and business news publisher.",
    more: "Learn more at nanotrans.io",
    contact: "Talk to us →",
  },
};

export function ContentValue({ locale }: { locale: Locale }) {
  const t = NT[locale];
  return (
    <section id="content" className="mx-auto max-w-[1200px] px-6 pt-[clamp(72px,9vw,128px)]">
      <Eyebrow className="flex items-center gap-2.5 text-link">
        <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-brand-blue" />
        {t.eyebrow}
      </Eyebrow>
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-end gap-x-14 gap-y-6">
        <SectionTitle>
          {t.title[0]}
          <br />
          {t.title[1]}
        </SectionTitle>
        <p className="m-0 text-ink-2">{t.lede}</p>
      </div>

      <div className="mt-12 overflow-hidden rounded-[12px] border border-line bg-card">
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] p-0">
          {t.steps.map((s, i) => (
            <li key={s.name} className={`border-b border-line-soft p-8 ${i < 2 ? "min-[900px]:border-r" : ""}`}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13px] font-bold tracking-[0.08em] text-link">{s.n}</span>
                <Badge tone={s.tone}>{s.badge}</Badge>
              </div>
              <h3 className="m-0 mt-4 text-[21px] font-bold tracking-[-0.01em]">{s.name}</h3>
              <p className="m-0 mt-2 text-[15px] text-ink-2">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 bg-wash px-8 py-5 text-[15px]">
          <span className="text-ink-2">{t.plugin}</span>
          <TextLink href={LINKS.agentPaywall} external>
            {t.pluginLink}
          </TextLink>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <p className="m-0 text-[15px] text-ink-2">{t.pilot}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <ButtonLink href={locale === "ko" ? LINKS.nanotransKo : LINKS.nanotrans} external>
            {t.more}
          </ButtonLink>
          <TextLink href={LINKS.nanotransContact} external>
            {t.contact}
          </TextLink>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- bridge */

const BR = {
  ko: {
    soon: "준비 중",
    eyebrow: "두 사업을 잇는 연결고리",
    title: "농장의 기록이, 농장의 수익이 됩니다",
    text: "동의한 농장의 기록만, 어느 농장인지 알 수 없는 익명 통계로 묶어 NanoTrans Market에서 판매합니다. 판매 수익은 참여한 농장에 돌아갑니다. 피그플랜 국내 농가부터 시작해 PigOS 농가로 넓혀 갑니다.",
    steps: [
      ["기록", "피그플랜에 평소처럼 기록합니다"],
      ["동의", "참여 여부는 농장이 정합니다"],
      ["익명 집계", "지역·규모 단위 통계로만 만듭니다"],
      ["판매와 환원", "사료·금융·연구 기관이 구매하고, 수익은 참여 농장에 나눕니다"],
    ],
  },
  en: {
    soon: "In preparation",
    eyebrow: "What connects the two",
    title: "Farm records that earn for the farm",
    text: "Only records from farms that opt in are pooled into anonymous statistics — no farm can be identified — and sold on NanoTrans Market. Revenue goes back to the participating farms. It starts with PigPlan farms in Korea and expands to PigOS farms.",
    steps: [
      ["Record", "Farms keep recording in PigPlan as usual"],
      ["Opt in", "Each farm decides whether to take part"],
      ["Anonymise", "Only regional and size-band statistics are produced"],
      ["Sell and share", "Feed, finance and research buyers pay; revenue goes to the farms"],
    ],
  },
};

export function Bridge({ locale }: { locale: Locale }) {
  const t = BR[locale];
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-[clamp(72px,9vw,128px)]">
      <div className="rounded-[12px] bg-brand-tint p-[clamp(32px,5vw,56px)]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-[6px] border border-dashed border-[#6e7fb8] bg-card px-2.5 py-0.5 text-[13px] font-semibold text-brand">{t.soon}</span>
          <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-brand">{t.eyebrow}</span>
        </div>
        <SectionTitle className="mt-4 text-night">{t.title}</SectionTitle>
        <p className="m-0 mt-4 max-w-[720px] text-[#2e3566]">{t.text}</p>
        <ol className="m-0 mt-10 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-3 p-0">
          {t.steps.map(([a, b], i) => (
            <li key={a} className="rounded-[10px] bg-card p-6">
              <div aria-hidden="true" className="text-[32px] font-bold leading-none text-brand-blue">
                {i + 1}
              </div>
              <div className="mt-3.5 font-bold">{a}</div>
              <div className="mt-1 text-[15px] text-ink-2">{b}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- company */

const CO = {
  ko: {
    eyebrow: "회사",
    title: ["1995년 서울대 연구소에서", "시작했습니다"],
    history: [
      ["1995", "서울대 연구소에서 피그플랜 최초 개발"],
      ["1998", "농가 보급 시작"],
      ["2020", "클라우드 전환 (pigplan.io)"],
      ["2022", "이지팜 피그컬처 사업부에서 분사, 주식회사 와이즈레이크 설립"],
      ["2026", "해외용 PigOS 출시(7월) · 피그플랜 AI 서비스 · NanoTrans"],
    ],
    rows: { name: "상호", ceo: "대표", founded: "설립", products: "제품" },
    products: ["피그플랜 · 국내 · 이 사이트", "PigOS · 해외 · pigos.io", "NanoTrans · nanotrans.io"],
  },
  en: {
    eyebrow: "Company",
    title: ["It started in 1995,", "at a Seoul National University lab"],
    history: [
      ["1995", "PigPlan first built at a Seoul National University lab"],
      ["1998", "Rolled out to farms"],
      ["2020", "Moved to the cloud (pigplan.io)"],
      ["2022", "Spun off from EZFarm's PigCulture division as WiseLake, Inc."],
      ["2026", "PigOS for farms abroad (July) · PigPlan AI services · NanoTrans"],
    ],
    rows: { name: "Company", ceo: "CEO", founded: "Founded", products: "Products" },
    products: ["PigPlan · Korea", "PigOS · worldwide · pigos.io", "NanoTrans · nanotrans.io"],
  },
};

export function Company({ locale }: { locale: Locale }) {
  const t = CO[locale];
  return (
    <section id="company" className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-x-16 gap-y-12 px-6 pt-[clamp(72px,9vw,128px)]">
      <div>
        <Eyebrow className="text-muted">{t.eyebrow}</Eyebrow>
        <SectionTitle className="mt-4">
          {t.title[0]}
          <br />
          {t.title[1]}
        </SectionTitle>
        <ol className="m-0 mt-9 list-none border-t border-line p-0">
          {t.history.map(([y, e]) => (
            <li key={y} className="grid grid-cols-[72px_1fr] gap-4 border-b border-line py-3.5">
              <b className="text-brand">{y}</b>
              <span>{e}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="self-end rounded-[12px] border border-line bg-card p-8">
        <dl className="m-0 grid grid-cols-[96px_1fr] gap-x-4 gap-y-3.5 text-[15px]">
          <dt className="text-muted">{t.rows.name}</dt>
          <dd className="m-0">{COMPANY.name[locale]}</dd>
          <dt className="text-muted">{t.rows.ceo}</dt>
          <dd className="m-0">{COMPANY.ceo[locale]}</dd>
          <dt className="text-muted">{t.rows.founded}</dt>
          <dd className="m-0">{COMPANY.founded[locale]}</dd>
          <dt className="text-muted">{t.rows.products}</dt>
          <dd className="m-0 grid gap-1.5">
            <a href={localePath(locale, "/pigplan")}>{t.products[0]}</a>
            <a href={LINKS.pigos}>{t.products[1]}</a>
            <a href={locale === "ko" ? LINKS.nanotransKo : LINKS.nanotrans}>{t.products[2]}</a>
          </dd>
        </dl>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- news */

const NW = {
  ko: { title: "소식", all: "전체 보기 →", press: "보도된 곳", via: "보도" },
  en: { title: "News", all: "All news →", press: "Covered by", via: "" },
};

export function NewsCard({ locale, item }: { locale: Locale; item: (typeof NEWS)[number] }) {
  const t = NW[locale];
  const product = item.product === "pigos" ? "PigOS" : item.product === "pigplan" ? (locale === "ko" ? "피그플랜" : "PigPlan") : item.product === "nanotrans" ? "NanoTrans" : locale === "ko" ? "회사" : "Company";
  const outlets = item.outlets.map((o) => o.name).join(" · ");
  return (
    <a href={item.outlets[0].url} target="_blank" rel="noopener" className="block rounded-[12px] border border-line bg-card p-7 text-ink hover:border-line-strong hover:text-ink">
      <div className="text-[13px] text-muted">
        <time dateTime={item.date}>{formatNewsDate(item, locale)}</time> · {product}
      </div>
      <h3 className="m-0 mt-2.5 text-[19px] font-bold leading-[1.4]">{item.title[locale]}</h3>
      <p className="m-0 mt-2 text-[15px] text-ink-2">{item.summary[locale]}</p>
      <div className="mt-3.5 text-[13px] text-muted">
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
    <section id="news" className="mx-auto max-w-[1200px] px-6 pt-[clamp(72px,9vw,128px)]">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <SectionTitle>{t.title}</SectionTitle>
        <TextLink href={localePath(locale, "/news")}>{t.all}</TextLink>
      </div>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
        {items.map((n) => (
          <NewsCard key={n.date + n.title.ko} locale={locale} item={n} />
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2 border-y border-line py-4 text-[14px]">
        <span className="font-semibold text-muted">{t.press}</span>
        {PRESS_OUTLETS.map((o) => (
          <a key={o.name} href={o.url} target="_blank" rel="noopener" className="font-semibold text-ink-2 hover:text-ink">
            {o.name}
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- contact */

const CT = {
  ko: {
    title: "무엇을 도와드릴까요?",
    lede: `모든 문의는 메일로 받습니다. 아래 폼을 쓰시거나 ${COMPANY.email}로 직접 보내 주세요.`,
    routes: [
      { title: "피그플랜 도입 · 데모", sub: "문의 폼에서 “피그플랜 도입·데모”를 골라 보내 주세요", href: "?inquiry=pigplan#contact-form" },
      { title: "PigOS 해외 유통 · 제휴", sub: "해외 농가와 거래하는 사료·동물약품·컨설팅 기업", href: "?inquiry=pigos-partner#contact-form" },
      { title: "NanoTrans", sub: "nanotrans.io 문의 페이지", href: LINKS.nanotransContact },
    ],
  },
  en: {
    title: "How can we help?",
    lede: `We take all inquiries by email. Use the form or write to ${COMPANY.email}.`,
    routes: [
      { title: "PigOS for your farm", sub: "Start free on pigos.io", href: LINKS.pigosStart },
      { title: "PigOS distribution partners", sub: "Feed, animal-health and consulting companies serving farms abroad", href: "?inquiry=pigos-partner#contact-form" },
      { title: "NanoTrans", sub: "nanotrans.io contact page", href: LINKS.nanotransContact },
    ],
  },
};

export function Contact({ locale }: { locale: Locale }) {
  const t = CT[locale];
  return (
    <section id="contact" className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-x-16 gap-y-12 px-6 py-[clamp(72px,9vw,128px)]">
      <div>
        <SectionTitle>{t.title}</SectionTitle>
        <p className="m-0 mt-4 text-ink-2">{t.lede}</p>
        <div className="mt-8 grid gap-3">
          {t.routes.map((r) => (
            <a
              key={r.title}
              href={r.href}
              {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
              className="flex items-center justify-between gap-4 rounded-[10px] border border-line bg-card px-5 py-[18px] text-ink hover:border-line-strong hover:text-ink"
            >
              <span>
                <b>{r.title}</b>
                <br />
                <span className="text-[14px] text-muted">{r.sub}</span>
              </span>
              <span aria-hidden="true" className="text-link">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
      <ContactForm locale={locale} />
    </section>
  );
}
