import { sortedNews } from "@/content/news";
import type { Locale } from "@/lib/site";
import { NewsCard } from "./home/Sections";
import { SectionTitle } from "./ui";

export default function NewsPage({ locale }: { locale: Locale }) {
  const items = sortedNews();
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-[clamp(56px,8vw,112px)]">
      <SectionTitle as="h1">{locale === "ko" ? "소식" : "News"}</SectionTitle>
      <p className="m-0 mt-4 max-w-[640px] text-ink-2">
        {locale === "ko" ? "와이즈레이크와 제품에 관한 보도를 모았습니다. 각 카드는 원문 기사로 연결됩니다." : "Coverage of WiseLake and its products. Each card links to the original article."}
      </p>
      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
        {items.map((n) => (
          <NewsCard key={n.date + n.title.ko} locale={locale} item={n} headingLevel={2} />
        ))}
      </div>
    </section>
  );
}
