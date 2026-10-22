import type { Locale } from "@/lib/site";

export type NewsItem = {
  /** ISO date; month-only items use the first of the month and set `monthOnly`. */
  date: string;
  monthOnly?: boolean;
  product: "pigos" | "pigplan" | "nanotrans" | "company";
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  outlets: { name: string; url: string }[];
};

/** Newest first. Every item links to the published article it is based on. */
export const NEWS: NewsItem[] = [
  {
    date: "2026-10-08",
    product: "pigos",
    title: { ko: "PigOS iOS 앱 출시", en: "PigOS launches on iPhone" },
    summary: {
      ko: "Android에 이어 App Store에 출시했습니다. 돈사에서 교배·분만·이유를 기록하고, 이표 스캔과 음성 입력, KPI 경보와 국가 평균 비교를 휴대폰에서 확인합니다.",
      en: "Following Android, PigOS is on the App Store: record matings, farrowings and weanings in the barn with ear-tag scanning and voice notes, and see KPI alerts and national benchmarks on the phone.",
    },
    outlets: [
      { name: "3tres3", url: "https://www.3tres3.com/en/company_news/wiselake-brings-ai-assisted-pigos-to-iphone_22903/" },
      {
        name: "Farmers Review Africa",
        url: "https://farmersreviewafrica.com/wiselake-maker-of-koreas-no-1-pig-farm-erp-pigplan-brings-ai-assisted-pigos-to-iphone/",
      },
    ],
  },
  {
    date: "2026-07-20",
    product: "pigos",
    title: { ko: "PigOS Android 앱 출시", en: "PigOS launches its Android app" },
    summary: {
      ko: "돈사에서 바로 교배·분만·이유를 기록하고, 웹과 같은 KPI와 경보를 휴대폰에서 확인합니다.",
      en: "Record mating, farrowing and weaning in the barn and see the same KPIs and alerts as the web app.",
    },
    outlets: [
      {
        name: "Feed & Additive",
        url: "https://www.feedandadditive.com/wiselake-expands-pigos-with-android-app-for-real-time-pig-farm-monitoring/",
      },
    ],
  },
  {
    date: "2026-07-01",
    product: "pigos",
    title: { ko: "해외 농가용 PigOS 무료 출시", en: "PigOS launches free for pig farms worldwide" },
    summary: {
      ko: "기록을 입력하는 순간 나라별 KPI 기준과 비교해 손실 위험을 알리는 조기경보 플랫폼을 공개했습니다.",
      en: "An early-warning platform that checks each record against country-level KPI ranges the moment it is entered.",
    },
    outlets: [
      {
        name: "3tres3",
        url: "https://www.3tres3.com/en/company_news/wiselake-launches-pigos-a-free-ai-assisted-platform-for-pig-farms_22628/",
      },
      {
        name: "National Hog Farmer",
        url: "https://www.nationalhogfarmer.com/livestock-management/wiselake-launches-ai-assisted-early-warning-platform-for-pig-farms",
      },
      {
        name: "Pork Business",
        url: "https://www.porkbusiness.com/news/swine-industry-innovation-wiselake-binsentry-and-trouw-nutrition-reveal-latest-expansions",
      },
    ],
  },
  {
    date: "2026-04-15",
    product: "pigplan",
    title: { ko: "피그플랜 농가 PSY 25.2두, 25두 벽을 넘다", en: "PigPlan farms pass 25 pigs weaned per sow per year" },
    summary: {
      ko: "2025 피그플랜 빅데이터 심층분석 보고회에서 전년보다 0.3두 오른 평균 PSY를 발표했습니다.",
      en: "The 2025 PigPlan big-data report showed an average PSY of 25.2, up 0.3 on the year before.",
    },
    outlets: [{ name: "한돈뉴스", url: "http://www.pignpork.com/news/articleView.html?idxno=18181" }],
  },
  {
    date: "2026-01-01",
    monthOnly: true,
    product: "pigplan",
    title: { ko: "피그플랜 AI 경영 리포트 정식 출시", en: "PigPlan's AI management report launches" },
    summary: {
      ko: "주간·월간·분기 리포트를 카카오톡으로 받아보는 구독 서비스를 시작했습니다.",
      en: "A subscription that delivers weekly, monthly and quarterly farm reports over KakaoTalk.",
    },
    outlets: [{ name: "라이브뉴스", url: "https://www.livesnews.com/news/article.html?no=60312" }],
  },
  {
    date: "2026-01-02",
    product: "pigplan",
    title: { ko: "기록이 경쟁력이다: 부여 비흥농장, PSY 35.5두", en: "Records as an edge: Biheung Farm reaches PSY 35.5" },
    summary: {
      ko: "피그플랜 전산성적 전국 1위 농장이 기록을 어떻게 경영에 쓰는지 소개했습니다.",
      en: "How the top-ranked PigPlan farm in Korea turns its records into management decisions.",
    },
    outlets: [{ name: "축산경제신문", url: "https://www.chukkyung.co.kr/news/articleView.html?idxno=79192" }],
  },
  {
    date: "2025-04-09",
    product: "pigplan",
    title: { ko: "2024 피그플랜 빅데이터 보고회, 평균 PSY 24.9두", en: "2024 PigPlan big-data report: average PSY 24.9" },
    summary: {
      ko: "479개 농가의 기록을 분석해 상·하위 농가의 생산성 격차를 발표했습니다.",
      en: "An analysis of 479 farms' records, including the gap between top and bottom performers.",
    },
    outlets: [{ name: "한돈뉴스", url: "http://www.pignpork.com/news/articleView.html?idxno=14848" }],
  },
  {
    date: "2025-03-10",
    product: "pigplan",
    title: { ko: "피그플랜 컨설팅 진단서 서비스 오픈", en: "PigPlan consulting diagnosis report opens" },
    summary: {
      ko: "농장 규모와 시설을 고려한 맞춤 진단 보고서를 피그플랜 데이터로 자동 생성합니다.",
      en: "Farm-specific diagnostic reports generated automatically from PigPlan data.",
    },
    outlets: [{ name: "농기자재신문", url: "https://www.newsam.co.kr/news/article.html?no=39611" }],
  },
  {
    date: "2024-04-11",
    product: "pigplan",
    title: { ko: "2023 피그플랜 빅데이터 보고회, 평균 PSY 24.7두", en: "2023 PigPlan big-data report: average PSY 24.7" },
    summary: {
      ko: "674개 사용 농가 중 474개 농가의 기록을 분석했습니다.",
      en: "Records from 474 of the 674 farms using PigPlan were analysed.",
    },
    outlets: [{ name: "한돈뉴스", url: "http://www.pignpork.com/news/articleView.html?idxno=11279" }],
  },
  {
    date: "2022-05-16",
    product: "company",
    title: { ko: "와이즈레이크, 2021 피그플랜 빅데이터 발표", en: "WiseLake presents its 2021 PigPlan big-data report" },
    summary: {
      ko: "와이즈레이크가 2021년 피그플랜 빅데이터 분석 결과를 발표했습니다. 평균 PSY 24.2두.",
      en: "WiseLake presented its analysis of 2021 PigPlan big data. Average PSY 24.2.",
    },
    outlets: [{ name: "데일리벳", url: "https://www.dailyvet.co.kr/?p=165912" }],
  },
];

export function formatNewsDate(item: NewsItem, locale: Locale): string {
  const [y, m, d] = item.date.split("-").map(Number);
  if (locale === "ko") return item.monthOnly ? `${y}년 ${m}월` : `${y}년 ${m}월 ${d}일`;
  const month = new Date(Date.UTC(y, m - 1, 1)).toLocaleString("en-US", { month: "long", timeZone: "UTC" });
  return item.monthOnly ? `${month} ${y}` : `${month} ${d}, ${y}`;
}

export const sortedNews = () => [...NEWS].sort((a, b) => b.date.localeCompare(a.date));
