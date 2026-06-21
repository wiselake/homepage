import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { InsightPigPlanSection } from "@/components/sections/PigPlanSection";
import { PigPlanFamily } from "@/components/sections/PigPlanFamily";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.pigplanInsight" });
  return buildPageMetadata({ locale, path: "/pigplan/insight", title: t("title"), description: t("description") });
}

export default function InsightPigPlanPage() {
  return (
    <>
      <PageHero namespace="pages.pigplanInsight" />
      <InsightPigPlanSection showHeader={false} />
      <PigPlanFamily />
    </>
  );
}
