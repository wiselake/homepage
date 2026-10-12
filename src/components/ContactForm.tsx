"use client";

import { useRef, useState, type FormEvent } from "react";
import { CONTACT_TYPES } from "@/lib/contact";
import { localePath, type Locale } from "@/lib/site";

const T = {
  ko: {
    title: "투자 · 제휴 · 언론 · 기타 문의",
    hint: "PigOS 해외 유통·제휴는 문의 유형에서 “PigOS 해외 제휴”를 골라 주세요.",
    name: "성함",
    org: "소속",
    email: "이메일",
    type: "문의 유형",
    types: { investment: "투자", partnership: "제휴", "pigos-partner": "PigOS 해외 제휴", press: "언론", other: "기타" },
    message: "문의 내용",
    consent: "개인정보 수집·이용에 동의합니다. (성함, 소속, 이메일, 문의 내용 · 문의 회신 목적)",
    policy: "개인정보처리방침",
    reply: "영업일 기준 2일 안에 회신드립니다.",
    submit: "문의 보내기",
    sending: "보내는 중입니다…",
    ok: "문의가 접수되었습니다. 영업일 기준 2일 안에 회신드립니다.",
    invalid: "성함, 이메일, 문의 내용을 입력하고 개인정보 수집·이용에 동의해 주세요.",
    busy: "잠시 후 다시 시도해 주세요.",
    fail: "전송에 실패했습니다. wiselake@wiselake.ai로 메일을 보내 주세요.",
  },
  en: {
    title: "Investment, partnership, press or other",
    hint: "For PigOS distribution, choose “PigOS distribution partner” as the inquiry type.",
    name: "Name",
    org: "Organisation",
    email: "Email",
    type: "Inquiry type",
    types: { investment: "Investment", partnership: "Partnership", "pigos-partner": "PigOS distribution partner", press: "Press", other: "Other" },
    message: "Message",
    consent: "I agree to the collection and use of my name, organisation, email and message to answer this inquiry.",
    policy: "Privacy policy",
    reply: "We reply within two business days.",
    submit: "Send",
    sending: "Sending…",
    ok: "Thanks — your message has been sent. We reply within two business days.",
    invalid: "Please enter your name, email and message, and tick the consent box.",
    busy: "Please wait a moment and try again.",
    fail: "Something went wrong. Please email wiselake@wiselake.ai instead.",
  },
};

const field = "min-h-[46px] rounded-[8px] border border-line-strong bg-card px-3.5 font-[inherit] text-ink";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = T[locale];
  const startedAt = useRef<number>(0);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

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
      className="grid gap-[18px] rounded-[12px] border border-line bg-card p-8 text-[15px]"
    >
      <div>
        <h3 className="m-0 text-[19px] font-bold">{t.title}</h3>
        <p className="m-0 mt-1 text-[14px] text-muted">{t.hint}</p>
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
        <select name="type" defaultValue="investment" className={field}>
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
      <label className="flex items-start gap-2.5 text-[14px] text-ink-2">
        <input name="consent" type="checkbox" required className="mt-1 h-[18px] w-[18px] flex-none accent-brand" />
        <span>
          {t.consent} <a href={localePath(locale, "/privacy")}>{t.policy}</a>
        </span>
      </label>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-[14px] text-muted">{t.reply}</span>
        <button
          type="submit"
          disabled={state === "sending"}
          className="min-h-12 cursor-pointer rounded-[6px] bg-brand px-6 font-semibold text-white hover:bg-night disabled:cursor-wait disabled:opacity-70"
        >
          {t.submit}
        </button>
      </div>
      <p role="status" aria-live="polite" className={`m-0 min-h-[1.5em] text-[14px] ${state === "error" ? "text-alert" : state === "ok" ? "text-brand" : "text-muted"}`}>
        {msg}
      </p>
    </form>
  );
}
