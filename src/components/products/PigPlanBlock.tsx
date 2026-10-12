import { COMPANY, LINKS, localePath, type Locale } from "@/lib/site";
import { Badge, ButtonLink, PhoneIcon, TextLink } from "../ui";

const T = {
  ko: {
    product: "PRODUCT 01",
    region: "국내",
    live: "운영 중",
    title: "피그플랜, AI로 진화하다",
    lede: (
      <>
        양돈경영관리 표준 시스템 피그플랜 위에, <b className="text-ink">인사이트 · 톡 · 비즈</b> 세 가지 AI가 농장의 결정을 함께합니다.
      </>
    ),
    more: "피그플랜 AI 스위트 자세히 보기 →",
    suiteTag: "하나의 데이터 · 세 가지 AI · 하나의 계정",
    soon: "2027년 1월 오픈 예정",
    insight: { name: "피그플랜 인사이트", title: "받아보는 AI", sub: "주간·월간 리포트가 카카오톡으로 도착합니다", weekly: "주간", monthly: "월간", price: "연 90만원", vat: "· VAT 별도", apply: "전화로 신청 →" },
    talk: { name: "피그플랜 톡", title: "물어보는 AI", sub: "내 농장 데이터로 물어보면 바로 답합니다", q: "312번 모돈, 도태할까?", a: "재귀 지연 · 재발 반복, 도태 후보", plan: "월 정액제" },
    biz: { name: "피그플랜 비즈", title: "경영 AI", sub: "마감하면 손익을 브리핑합니다", close: "마감", plan: "연 정액제" },
    foundation: { title: "피그플랜 표준 시스템", sub: "세 AI가 같은 원천 데이터를 씁니다", items: [["생산 기록", "교배 · 분만 · 이유 · 출하"], ["경영 기록", "사료 · 매출 · 비용"], ["보고서 500여 종", "PDF · XLS · HWP"]] },
    axio: { tag: "NEXT · 2027 하반기", text: "피그플랜 AI 스위트를 중심으로, 유관기관 10개 그룹 사이의 업무를 AI 에이전트가 자동으로 처리합니다.", punch: "사람은 결정만 합니다.", nodes: ["농장", "수의사", "약품", "조합", "AI 에이전트", "사료", "축평원", "도축", "IoT"] },
    detail: "자세히 보기",
    call: `전화로 신청 · 데모 ${COMPANY.phone}`,
    service: "피그플랜 서비스 소개 →",
  },
  en: {
    product: "PRODUCT 02",
    region: "Korea only",
    live: "Live",
    title: "PigPlan, evolved with AI",
    lede: (
      <>
        On top of PigPlan, Korea&apos;s standard pig-farm management system, <b className="text-ink">Insight · Talk · Biz</b> — three AIs that help every farm decision.
      </>
    ),
    more: "Explore the PigPlan AI Suite →",
    suiteTag: "One data source · three AIs · one account",
    soon: "Opens January 2027",
    insight: { name: "PigPlan Insight", title: "AI that reports", sub: "Weekly and monthly reports, delivered over KakaoTalk", weekly: "Weekly", monthly: "Monthly", price: "KRW 900,000 / year", vat: "· excl. VAT", apply: "Apply by phone →" },
    talk: { name: "PigPlan Talk", title: "AI you ask", sub: "Ask about your own farm data and get an answer", q: "Sow #312 — cull her?", a: "Late return, repeat services: cull candidate", plan: "Monthly plan" },
    biz: { name: "PigPlan Biz", title: "AI for the business", sub: "Close the books, get a P&L briefing", close: "Close", plan: "Annual plan" },
    foundation: { title: "PigPlan standard system", sub: "All three AIs share one source of data", items: [["Production records", "Mating · farrowing · weaning · shipping"], ["Finance records", "Feed · sales · costs"], ["~500 reports", "PDF · XLS · HWP"]] },
    axio: { tag: "NEXT · H2 2027", text: "Built around the PigPlan AI Suite, AI agents handle the work between 10 stakeholder groups automatically.", punch: "People only decide.", nodes: ["Farm", "Vet", "Pharma", "Co-op", "AI agent", "Feed", "Grading", "Packer", "IoT"] },
    detail: "Learn more",
    call: `Call for a demo · ${COMPANY.phoneIntl}`,
    service: "PigPlan service overview (Korean) →",
  },
};

function Card({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return <div className={`flex flex-col gap-4 border-b border-line-soft p-7 ${last ? "" : "min-[880px]:border-r"}`}>{children}</div>;
}

function CardHead({ name, badge }: { name: string; badge: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[14px] font-bold text-pigplan">{name}</span>
      {badge}
    </div>
  );
}

function CardTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div>
      <h4 className="m-0 text-[24px] font-bold tracking-[-0.02em]">{title}</h4>
      <p className="m-0 mt-1 text-[15px] text-ink-2">{sub}</p>
    </div>
  );
}

const pill = "rounded-[6px] border-[1.5px] border-pigplan bg-card px-3 py-0.5 text-[13px] font-bold text-pigplan";

export default function PigPlanBlock({ locale, headingLevel = 3, productLabel }: { locale: Locale; headingLevel?: 2 | 3; productLabel?: string }) {
  const t = T[locale];
  const H = headingLevel === 2 ? "h2" : "h3";
  const soonBadge = <Badge tone="dev">{t.soon}</Badge>;

  return (
    <div id="pigplan">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div className="max-w-[720px]">
          <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-bold">
            <span className="tracking-[0.14em] text-pigplan">{productLabel ?? t.product}</span>
            <Badge tone="neutral">{t.region}</Badge>
            <Badge tone="pigplan">{t.live}</Badge>
          </p>
          <H className="m-0 mt-3.5 text-[clamp(26px,2.8vw,34px)] font-bold leading-[1.25] tracking-[-0.03em]">{t.title}</H>
          <p className="m-0 mt-3 text-ink-2">{t.lede}</p>
        </div>
        {headingLevel === 3 && <TextLink href={localePath(locale, "/pigplan")}>{t.more}</TextLink>}
      </div>

      <div className="mt-7 overflow-hidden rounded-[12px] border border-line bg-card">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line-soft px-7 py-4">
          <div className="flex items-center gap-2.5 font-bold">
            <span aria-hidden="true" className="inline-flex h-7 w-7 items-center justify-center rounded-[6px] bg-pigplan text-[14px] text-white">
              P
            </span>
            PigPlan AI Suite
          </div>
          <span className="text-[14px] text-muted">{t.suiteTag}</span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]">
          <Card>
            <CardHead name={t.insight.name} badge={<Badge tone="pigplanLive">{t.live}</Badge>} />
            <CardTitle title={t.insight.title} sub={t.insight.sub} />
            <div aria-hidden="true" className="flex h-[132px] items-center justify-center gap-[18px] rounded-[10px] bg-pigplan-tint">
              <div className="grid gap-2">
                <span className={pill}>{t.insight.weekly}</span>
                <span className={pill}>{t.insight.monthly}</span>
              </div>
              <svg width="70" height="84" viewBox="0 0 70 84" fill="none">
                <path d="M4 42h18" stroke="#1769b3" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M20 37l6 5-6 5" stroke="#1769b3" strokeWidth="2" />
                <rect x="32" y="6" width="34" height="46" rx="4" fill="#fff" stroke="#1769b3" strokeWidth="2.5" />
                <path d="M38 18h22M38 26h22M38 34h14" stroke="#9cc3ea" strokeWidth="3" />
                <circle cx="62" cy="54" r="8" fill="#1769b3" />
                <path d="M58 54l3 3 5-5" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-line-soft pt-3.5 text-[15px]">
              <span>
                <b>{t.insight.price}</b> <span className="text-muted">{t.insight.vat}</span>
              </span>
              <a href={`tel:${COMPANY.phoneIntl}`} className="font-bold text-pigplan">
                {t.insight.apply}
              </a>
            </div>
          </Card>

          <Card>
            <CardHead name={t.talk.name} badge={soonBadge} />
            <CardTitle title={t.talk.title} sub={t.talk.sub} />
            <div aria-hidden="true" className="flex h-[132px] flex-col justify-center gap-2.5 rounded-[10px] bg-pigplan-tint px-6">
              <div className="self-end rounded-[12px_12px_2px_12px] bg-pigplan px-3.5 py-1.5 text-[13px] font-semibold text-white">{t.talk.q}</div>
              <div className="flex items-center gap-2 self-start rounded-[12px_12px_12px_2px] border-[1.5px] border-pigplan bg-card px-3 py-1.5 text-[13px]">
                <span className="rounded bg-pigplan px-1.5 text-[11px] font-bold text-white">AI</span>
                {t.talk.a}
              </div>
            </div>
            <div className="mt-auto border-t border-line-soft pt-3.5 text-[15px] font-bold">{t.talk.plan}</div>
          </Card>

          <Card last>
            <CardHead name={t.biz.name} badge={soonBadge} />
            <CardTitle title={t.biz.title} sub={t.biz.sub} />
            <div aria-hidden="true" className="flex h-[132px] items-center justify-center gap-[18px] rounded-[10px] bg-pigplan-tint">
              <span className={pill}>{t.biz.close}</span>
              <svg width="84" height="80" viewBox="0 0 84 80" fill="none">
                <path d="M2 40h16" stroke="#1769b3" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M16 35l6 5-6 5" stroke="#1769b3" strokeWidth="2" />
                <rect x="28" y="12" width="50" height="58" rx="4" fill="#fff" stroke="#1769b3" strokeWidth="2.5" />
                <rect x="36" y="48" width="8" height="14" fill="#9cc3ea" />
                <rect x="48" y="40" width="8" height="22" fill="#5e9bd6" />
                <rect x="60" y="28" width="8" height="34" fill="#1769b3" />
                <circle cx="76" cy="12" r="9" fill="#1769b3" />
                <text x="76" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
                  ₩
                </text>
              </svg>
            </div>
            <div className="mt-auto border-t border-line-soft pt-3.5 text-[15px] font-bold">{t.biz.plan}</div>
          </Card>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] items-center gap-4 bg-pigplan px-7 py-6 text-white">
          <div>
            <div className="text-[12px] font-bold tracking-[0.14em] text-[#d6e6f6]">FOUNDATION</div>
            <div className="mt-1 text-[19px] font-bold">{t.foundation.title}</div>
            <div className="text-[14px] text-[#e2edf8]">{t.foundation.sub}</div>
          </div>
          {t.foundation.items.map(([a, b]) => (
            <div key={a} className="rounded-[8px] border border-white/30 bg-white/10 px-4 py-3.5">
              <div className="font-bold">{a}</div>
              <div className="text-[13px] text-[#e2edf8]">{b}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-8 bg-night px-7 py-9 text-white">
          <div>
            <p className="m-0 flex flex-wrap items-center gap-2.5">
              <span className="rounded-[6px] border border-dashed border-brand-sky px-2 py-0.5 text-[12px] font-bold text-brand-sky">{t.axio.tag}</span>
              <span className="font-bold tracking-[0.06em]">PIGPLAN AXIO</span>
            </p>
            <p className="m-0 mt-3.5 text-[16px] text-[#d2d7f0]">{t.axio.text}</p>
            <p className="m-0 mt-2.5 font-bold text-brand-sky">{t.axio.punch}</p>
          </div>
          <ul aria-label="AXIO" className="m-0 grid w-full max-w-[360px] list-none grid-cols-3 gap-2.5 justify-self-center p-0 text-center text-[14px]">
            {t.axio.nodes.map((n, i) => (
              <li key={n} className={i === 4 ? "rounded-[8px] bg-brand-blue px-1 py-2 font-bold" : "rounded-[8px] border border-night-line bg-night-2 px-1 py-2"}>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
        {headingLevel === 3 && <ButtonLink href={localePath(locale, "/pigplan")}>{t.detail}</ButtonLink>}
        <ButtonLink href={`tel:${COMPANY.phoneIntl}`} variant="outline">
          <PhoneIcon />
          {t.call}
        </ButtonLink>
        <TextLink href={LINKS.pigplanService} external>
          {t.service}
        </TextLink>
      </div>
    </div>
  );
}
