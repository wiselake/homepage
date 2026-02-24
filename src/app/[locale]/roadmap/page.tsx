import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { RoadmapSection } from "@/components/sections/RoadmapSection";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.roadmap" });
  return { title: t("title"), description: t("description") };
}

export default function RoadmapPage() {
  return (
    <>
      <PageHero namespace="pages.roadmap" />
      <RoadmapSection showHeader={false} />
    </>
  );
}
