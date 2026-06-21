import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { buildPageMetadata } from "@/lib/seo";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.roadmap" });
  return buildPageMetadata({ locale, path: "/roadmap", title: t("title"), description: t("description") });
}

export default function RoadmapPage() {
  return (
    <>
      <PageHero namespace="pages.roadmap" />
      <RoadmapSection showHeader={false} />
    </>
  );
}
