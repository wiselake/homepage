import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { VisionSection } from "@/components/sections/VisionSection";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return { title: t("title"), description: t("description") };
}

export default function AboutPage() {
  return (
    <>
      <PageHero namespace="pages.about" />
      <VisionSection />
    </>
  );
}
