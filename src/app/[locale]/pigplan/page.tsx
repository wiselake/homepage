import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import {
  PigPlanSection,
  PigPlanPsyProof,
  PigPlanPillars,
  PigPlanFeatures,
} from "@/components/sections/PigPlanSection";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { PigPlanFamily } from "@/components/sections/PigPlanFamily";
import { buildPageMetadata } from "@/lib/seo";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.pigplan" });
  return buildPageMetadata({ locale, path: "/pigplan", title: t("title"), description: t("description") });
}

export default function PigPlanPage() {
  return (
    <>
      <PageHero namespace="pages.pigplan" />
      <PigPlanFamily />
      <PigPlanSection />
      <PigPlanPsyProof />
      <PigPlanPillars />
      <PigPlanFeatures />
      <PartnerMarquee />
    </>
  );
}
