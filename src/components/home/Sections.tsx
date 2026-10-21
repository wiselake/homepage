import { NEWS, PRESS_OUTLETS, formatNewsDate, sortedNews } from "@/content/news";
import { COMPANY, LINKS, localePath, type Locale } from "@/lib/site";
import ContactForm from "../ContactForm";
import { ArrowIcon, ButtonLink, SectionLabel, SectionTitle, TextLink } from "../ui";

/* ---------------------------------------------------------------- NanoTrans (content value) */

/*
 * Core points from nanotrans.io/ko (2026-10-21): headline, the problem, why now (with its cited
 * sources) and the measure → decide → trade approach. Status per nanotrans.io: Index and Edge in
 * development, Market in preparation, a pilot with a Korean IT/business publisher. Wording keeps
 * the product in development (no launch dates, settlement or revenue claims). Bot-classification
 * detail stays on nanotrans.io.
 */
const NT = {
  ko: {
    n: "03",
    eyebrow: "NanoTrans · Content Value",
    title: ["NanoTrans —", "AI가 읽은 만큼, 콘텐츠의 가치를 셉니다."],
    body: ["AI는 매일 기사와 콘텐츠를 가져가 답변을 만듭니다. NanoTrans는 그 소비를 측정하고,", "AI 봇의 접근을 매체가 정하고, 기사를 정당한 값에 거래할 수 있도록 개발하고 있습니다."],
    problem: {
      label: "문제",
      title: "AI는 기사를 읽지만, 매체의 숫자에는 남지 않습니다.",
      items: ["AI 봇 트래픽은 서버 비용으로만 남습니다.", "AI 답변 속 인용은 어디에도 집계되지 않습니다.", "어떤 봇을 막고 열지 판단할 근거가 없습니다."],
    },
    now: {
      label: "왜 지금인가",
      stat: "51%",
      statText: "2024년 전체 웹 트래픽 중 자동화(봇) 트래픽 비중",
      statSource: { name: "Imperva 2025 Bad Bot Report", url: "https://www.imperva.com/blog/2025-imperva-bad-bot-report-how-ai-is-supercharging-the-bot-threat/" },
      deal: "AP·파이낸셜타임스 등 해외 주요 언론사는 이미 AI 기업과 콘텐츠 라이선스 계약을 맺었습니다.",
      dealSources: [
        { name: "Axios — AP·OpenAI (2023)", url: "https://www.axios.com/2023/07/13/ap-openai-news-sharing-tech-deal" },
        { name: "OpenAI — Financial Times (2024)", url: "https://openai.com/index/content-partnership-with-financial-times/" },
      ],
    },
    steps: [
      { verb: "측정", name: "NanoTrans Index", status: "개발 중" },
      { verb: "결정", name: "NanoTrans Edge", status: "개발 중" },
      { verb: "거래", name: "NanoTrans Market", status: "준비 중" },
    ],
    stepsLabel: "해법",
    pilot: "국내 IT·경제 전문 매체와 파일럿을 진행하고 있습니다.",
    cta: "NanoTrans 알아보기",
  },
  en: {
    n: "03",
    eyebrow: "NanoTrans · Content Value",
    title: ["NanoTrans —", "Counting Content Value by What AI Reads."],
    body: ["AI takes articles and content every day to write its answers. NanoTrans is being built to measure that use,", "let publishers decide how AI bots get access, and trade articles at a fair price."],
    problem: {
      label: "The problem",
      title: "AI reads the articles, but none of it shows up in the publisher's numbers.",
      items: ["AI bot traffic shows up only as server cost.", "Citations inside AI answers are counted nowhere.", "There is no basis for deciding which bots to block or allow."],
    },
    now: {
      label: "Why now",
      stat: "51%",
      statText: "Share of all web traffic that was automated (bots) in 2024",
      statSource: { name: "Imperva 2025 Bad Bot Report", url: "https://www.imperva.com/blog/2025-imperva-bad-bot-report-how-ai-is-supercharging-the-bot-threat/" },
      deal: "Major publishers such as AP and the Financial Times have already signed content licensing deals with AI companies.",
      dealSources: [
        { name: "Axios — AP·OpenAI (2023)", url: "https://www.axios.com/2023/07/13/ap-openai-news-sharing-tech-deal" },
        { name: "OpenAI — Financial Times (2024)", url: "https://openai.com/index/content-partnership-with-financial-times/" },
      ],
    },
    steps: [
      { verb: "Measure", name: "NanoTrans Index", status: "In development" },
      { verb: "Decide", name: "NanoTrans Edge", status: "In development" },
      { verb: "Trade", name: "NanoTrans Market", status: "In preparation" },
    ],
    stepsLabel: "Approach",
    pilot: "Piloting with a Korean IT and business news publisher.",
    cta: "Explore NanoTrans",
  },
};

export function ContentValue({ locale }: { locale: Locale }) {
  const t = NT[locale];
  const href = locale === "ko" ? LINKS.nanotransKo : LINKS.nanotrans;
  const label = "m-0 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted";
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
          <p className="m-0 mt-6 max-w-[900px] text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-ink-2">
            {t.body[0]}
            <br className="max-lg:hidden" /> {t.body[1]}
          </p>
        </div>

        {/* Problem and why now, side by side on a rule. */}
        <div className="mt-12 grid grid-cols-1 border-t border-ink lg:grid-cols-2">
          <div className="border-b border-line py-8 lg:border-b-0 lg:border-r lg:pr-12">
            <p className={label}>{t.problem.label}</p>
            <h3 className="m-0 mt-3 text-balance text-[clamp(20px,2vw,24px)] font-bold leading-[1.4] tracking-[-0.02em]">{t.problem.title}</h3>
            <ul className="m-0 mt-5 list-none p-0">
              {t.problem.items.map((it) => (
                <li key={it} className="border-t border-line py-3 text-[16px] text-ink-2">
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-8 lg:pl-12">
            <p className={label}>{t.now.label}</p>
            <p className="m-0 mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="text-[clamp(44px,5vw,64px)] font-bold leading-none tracking-[-0.04em] text-brand">{t.now.stat}</span>
              <span className="text-[16px] text-ink-2">{t.now.statText}</span>
            </p>
            <a href={t.now.statSource.url} target="_blank" rel="noopener" className="mt-2 inline-block text-[13px] text-muted underline underline-offset-2 hover:text-ink">
              {t.now.statSource.name}
            </a>
            <p className="m-0 mt-6 border-t border-line pt-5 text-[16px] leading-[1.6] text-ink-2">{t.now.deal}</p>
            <p className="m-0 mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
              {t.now.dealSources.map((d) => (
                <a key={d.url} href={d.url} target="_blank" rel="noopener" className="text-muted underline underline-offset-2 hover:text-ink">
                  {d.name}
                </a>
              ))}
            </p>
          </div>
        </div>

        {/* Approach as one ruled line: measure → decide → trade, each with its real status. */}
        <div className="border-t border-line py-6">
          <p className={label}>{t.stepsLabel}</p>
          <ol className="m-0 mt-4 flex list-none flex-wrap items-baseline gap-x-6 gap-y-3 p-0">
            {t.steps.map((st, i) => (
              <li key={st.name} className="flex items-baseline gap-x-3">
                {i > 0 && (
                  <span aria-hidden="true" className="text-muted">
                    →
                  </span>
                )}
                <span className="text-[clamp(18px,1.8vw,21px)] font-bold">{st.verb}</span>
                <span className="text-[16px] text-ink-2">{st.name}</span>
                <span className="text-[14px] text-muted">{st.status}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-line pt-8">
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
