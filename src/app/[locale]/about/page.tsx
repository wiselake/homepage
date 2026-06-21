import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { VisionSection } from "@/components/sections/VisionSection";
import { buildPageMetadata } from "@/lib/seo";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return buildPageMetadata({ locale, path: "/about", title: t("title"), description: t("description") });
}

export default function AboutPage() {
  return (
    <>
      <PageHero namespace="pages.about" />
      <VisionSection />
    </>
  );
}
