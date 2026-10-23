import { contactHref, localePath, type Locale } from "@/lib/site";
import { ButtonLink, Eyebrow } from "./ui";

const T = {
  ko: {
    title: "페이지를 찾을 수 없습니다",
    body: "주소가 바뀌었거나 없어진 페이지입니다. 홈에서 찾아보시거나 문의를 남겨 주세요.",
    home: "홈으로",
    contact: "문의하기",
  },
  en: {
    title: "Page not found",
    body: "This page has moved or no longer exists. Head back home, or send us a message.",
    home: "Go home",
    contact: "Contact us",
  },
};

export const notFoundTitle = (locale: Locale) => `${T[locale].title} | WiseLake`;

export default function NotFoundPage({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-[clamp(72px,10vw,144px)]">
      <Eyebrow>404</Eyebrow>
      <h1 className="m-0 mt-3 text-[clamp(30px,4vw,40px)] font-bold tracking-[-0.03em]">{t.title}</h1>
      <p className="m-0 mt-4 max-w-[560px] text-body">{t.body}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={localePath(locale, "/")}>{t.home}</ButtonLink>
        <ButtonLink href={contactHref(locale)} variant="outline">
          {t.contact}
        </ButtonLink>
      </div>
    </section>
  );
}
