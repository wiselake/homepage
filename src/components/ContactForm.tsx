"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CONTACT_TYPES, toContactType } from "@/lib/contact";
import { COMPANY, localePath, type Locale } from "@/lib/site";
import { ArrowIcon } from "./ui";

const T = {
  ko: {
    title: "문의하기",
    name: "이름",
    org: "회사·기관명",
    email: "이메일",
    type: "문의 유형",
    types: { demo: "서비스 도입·데모", partnership: "사업 제휴", "investment-press": "투자·언론", other: "기타 문의" },
    message: "문의 내용",
    consent: "개인정보 수집·이용에 동의합니다. (이름, 회사·기관명, 이메일, 문의 내용 · 문의 회신 목적)",
    policy: "개인정보처리방침",
    submit: "문의 보내기",
    sending: "보내는 중입니다…",
    ok: "문의가 접수되었습니다. 확인 후 담당자가 안내해 드립니다.",
    invalid: "이름, 이메일, 문의 내용을 입력하고 개인정보 수집·이용에 동의해 주세요.",
    busy: "잠시 후 다시 시도해 주세요.",
    fail: `전송에 실패했습니다. ${COMPANY.email}로 메일을 보내 주세요.`,
  },
  en: {
    title: "Send us a message",
    name: "Name",
    org: "Company / Organization",
    email: "Email",
    type: "Inquiry type",
    types: { demo: "Product adoption & demo", partnership: "Business partnership", "investment-press": "Investment & press", other: "Other" },
    message: "Message",
    consent: "I agree to the collection and use of my name, company or organization, email and message to answer this inquiry.",
    policy: "Privacy policy",
    submit: "Send Inquiry",
    sending: "Sending…",
    ok: "Thanks — your message has been sent. Our team will get back to you.",
    invalid: "Please enter your name, email and message, and tick the consent box.",
    busy: "Please wait a moment and try again.",
    fail: `Something went wrong. Please email ${COMPANY.email} instead.`,
  },
};

const field = "w-full min-h-[46px] rounded-[8px] border border-line-strong bg-card px-3.5 font-[inherit] text-ink";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = T[locale];
  const startedAt = useRef<number>(0);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");
  const typeRef = useRef<HTMLSelectElement>(null);
  const defaultType = locale === "ko" ? "demo" : "partnership";

  // Links such as "/?inquiry=demo#contact-form" preselect the inquiry type (older keys are mapped).
  useEffect(() => {
    const q = toContactType(new URLSearchParams(window.location.search).get("inquiry"));
    if (q && typeRef.current) typeRef.current.value = q;
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      type: String(fd.get("type") || "other"),
      message: String(fd.get("message") || "").trim(),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") || ""),
      elapsedMs: startedAt.current ? Date.now() - startedAt.current : 0,
      locale,
    };
    if (!payload.name || !payload.email || !payload.message || !payload.consent) {
      setState("error");
      setMsg(t.invalid);
      return;
    }
    setState("sending");
    setMsg(t.sending);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setState("ok");
        setMsg(t.ok);
        form.reset();
      } else {
        setState("error");
        setMsg(res.status === 429 ? t.busy : res.status === 400 ? t.invalid : t.fail);
      }
    } catch {
      setState("error");
      setMsg(t.fail);
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      onFocus={() => {
        if (!startedAt.current) startedAt.current = Date.now();
      }}
      noValidate
      className="grid grid-cols-1 gap-[18px] rounded-[8px] border border-line bg-card p-[clamp(24px,4vw,40px)] text-[16px]"
    >
      <div>
        <h3 className="m-0 text-[20px] font-bold">{t.title}</h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-[18px]">
        <label className="grid gap-1.5">
          <span className="font-semibold">{t.name}</span>
          <input name="name" type="text" autoComplete="name" required maxLength={100} className={field} />
        </label>
        <label className="grid gap-1.5">
          <span className="font-semibold">{t.org}</span>
          <input name="company" type="text" autoComplete="organization" maxLength={200} className={field} />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="font-semibold">{t.email}</span>
        <input name="email" type="email" autoComplete="email" required maxLength={200} className={field} />
      </label>
      <label className="grid gap-1.5">
        <span className="font-semibold">{t.type}</span>
        <select ref={typeRef} name="type" defaultValue={defaultType} className={field}>
          {CONTACT_TYPES.map((k) => (
            <option key={k} value={k}>
              {t.types[k]}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5">
        <span className="font-semibold">{t.message}</span>
        <textarea name="message" rows={5} required maxLength={5000} className={`${field} resize-y py-3`} />
      </label>
      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="flex items-start gap-2.5 text-[15px] text-ink-2">
        <input name="consent" type="checkbox" required className="mt-1 h-[18px] w-[18px] flex-none accent-brand" />
        <span>
          {t.consent}{" "}
          <a href={localePath(locale, "/privacy")} className="underline underline-offset-2">
            {t.policy}
          </a>
        </span>
      </label>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={state === "sending"}
          className="min-h-[56px] cursor-pointer rounded-[8px] bg-night px-7 text-[17px] font-semibold text-white transition-colors hover:bg-brand disabled:cursor-wait disabled:opacity-70 max-sm:w-full"
        >
          <span className="inline-flex items-center gap-3">
            {t.submit}
            <ArrowIcon />
          </span>
        </button>
      </div>
      <p role="status" aria-live="polite" className={`m-0 min-h-[1.5em] text-[15px] ${state === "error" ? "text-alert" : state === "ok" ? "text-brand" : "text-muted"}`}>
        {msg}
      </p>
    </form>
  );
}
