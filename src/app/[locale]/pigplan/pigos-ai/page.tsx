import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { PigPlanCoreSection } from "@/components/sections/PigPlanSection";
import { PigPlanFamily } from "@/components/sections/PigPlanFamily";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.pigplanPigos" });
  return buildPageMetadata({ locale, path: "/pigplan/pigos-ai", title: t("title"), description: t("description") });
}

export default function PigOSAIPage() {
  return (
    <>
      <PageHero namespace="pages.pigplanPigos" />
      <PigPlanCoreSection showHeader={false} />
      <PigPlanFamily />
    </>
  );
}
