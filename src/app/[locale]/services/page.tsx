import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { Cre8Section } from "@/components/sections/Cre8Section";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.services" });
  return { title: t("title"), description: t("description") };
}

export default function ServicesPage() {
  return (
    <>
      <PageHero namespace="pages.services" />
      <Cre8Section showHeader={false} />
    </>
  );
}
