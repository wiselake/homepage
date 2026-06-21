import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { B2BSaaSSection } from "@/components/sections/B2BSaaSSection";
import { buildPageMetadata } from "@/lib/seo";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.b2b" });
  return buildPageMetadata({ locale, path: "/b2b", title: t("title"), description: t("description") });
}

export default function B2BPage() {
  return (
    <>
      <PageHero namespace="pages.b2b" />
      <B2BSaaSSection showHeader={false} />
    </>
  );
}
