import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { PigPlanSection, InsightPigPlanSection, PigSignalSection } from "@/components/sections/PigPlanSection";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.pigplan" });
  return { title: t("title"), description: t("description") };
}

export default function PigPlanPage() {
  return (
    <>
      <PageHero namespace="pages.pigplan" />
      <PigPlanSection showHeader={false} />
      <PartnerMarquee />
      <InsightPigPlanSection />
      <PigSignalSection />
    </>
  );
}
