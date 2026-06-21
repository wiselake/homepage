import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { PigSignalSection } from "@/components/sections/PigPlanSection";
import { PigPlanFamily } from "@/components/sections/PigPlanFamily";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.pigplanPigsignal" });
  return buildPageMetadata({ locale, path: "/pigplan/pigsignal", title: t("title"), description: t("description") });
}

export default function PigSignalPage() {
  return (
    <>
      <PageHero namespace="pages.pigplanPigsignal" />
      <PigSignalSection showHeader={false} />
      <PigPlanFamily />
    </>
  );
}
