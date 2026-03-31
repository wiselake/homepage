import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { NanoTransSection } from "@/components/sections/NanoTransSection";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.nanotrans" });
  return { title: t("title"), description: t("description") };
}

export default async function NanoTransPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.nanotrans" });

  return (
    <>
      <PageHero
        namespace="pages.nanotrans"
        ctaLabel={t("heroCta")}
        ctaHref="https://www.nanotrans.io/"
      />
      <NanoTransSection showHeader={false} />
    </>
  );
}
