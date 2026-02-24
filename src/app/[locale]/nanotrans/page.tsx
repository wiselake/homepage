import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { NanoTransSection } from "@/components/sections/NanoTransSection";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.nanotrans" });
  return { title: t("title"), description: t("description") };
}

export default function NanoTransPage() {
  return (
    <>
      <PageHero namespace="pages.nanotrans" />
      <NanoTransSection showHeader={false} />
    </>
  );
}
