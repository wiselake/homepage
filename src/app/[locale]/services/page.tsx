import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { IncubationTabs } from "@/components/sections/IncubationTabs";
import { Cre8Section } from "@/components/sections/Cre8Section";
import { Cre8petBanner } from "@/components/sections/Cre8petBanner";
import { Flow9Section } from "@/components/sections/Flow9Section";
import { QBridgeSection } from "@/components/sections/QBridgeSection";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.services" });
  return { title: t("title"), description: t("description") };
}

export default function ServicesPage() {
  return (
    <>
      <PageHero namespace="pages.services" />
      <IncubationTabs />
      <Cre8Section showHeader={true} />
      <Cre8petBanner />
      <Flow9Section />
      <QBridgeSection />
    </>
  );
}
