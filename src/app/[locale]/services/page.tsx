import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { IncubationTabs } from "@/components/sections/IncubationTabs";
import { Flow9Section } from "@/components/sections/Flow9Section";
import { QBridgeSection } from "@/components/sections/QBridgeSection";
import { buildPageMetadata } from "@/lib/seo";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.services" });
  return buildPageMetadata({ locale, path: "/services", title: t("title"), description: t("description") });
}

export default function ServicesPage() {
  return (
    <>
      <PageHero namespace="pages.services" />
      <IncubationTabs />
      <Flow9Section />
      <QBridgeSection />
    </>
  );
}
