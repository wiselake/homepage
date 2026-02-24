"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

type InquiryType = "general" | "service" | "partnership";

export function ContactSection() {
  const t = useTranslations("contact");
  const [formState, setFormState] = useState({
    type: "general" as InquiryType,
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || t("form.errorGeneric"));
      }
    } catch {
      setError(t("form.errorGeneric"));
    } finally {
      setSending(false);
    }
  };

  const inquiryTypes: InquiryType[] = ["general", "service", "partnership"];

  return (
    <Section id="contact" dark={false}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-dark">
            {t("title")}
          </h2>
          <p className="text-text-muted">{t("subtitle")}</p>
        </div>

        {submitted ? (
          <div className="text-center p-12 rounded-2xl glass-light shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <div className="text-4xl mb-4" aria-hidden="true">✓</div>
            <h3 className="text-xl font-semibold text-text-dark mb-2">
              {t("success.title")}
            </h3>
            <p className="text-text-muted">{t("success.desc")}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden p-8 rounded-2xl glass-light shadow-[0_8px_32px_rgba(0,0,0,0.06)] space-y-6"
          >
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl pointer-events-none" />
            {/* Inquiry Type */}
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                {t("form.type")}
              </label>
              <div role="radiogroup" aria-label={t("form.type")} className="flex flex-wrap gap-2">
                {inquiryTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    role="radio"
                    aria-checked={formState.type === type}
                    onClick={() =>
                      setFormState((s) => ({ ...s, type }))
                    }
                    className={`px-4 py-2 rounded-full text-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      formState.type === type
                        ? "bg-accent/90 text-white backdrop-blur-sm border border-accent/30"
                        : "border border-black/[0.06] bg-white/60 backdrop-blur-sm text-text-muted hover:border-accent/40"
                    }`}
                  >
                    {t(`types.${type}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-dark mb-1"
                >
                  {t("form.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-black/[0.06] bg-white/80 backdrop-blur-sm text-text-dark text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors"
                  placeholder={t("form.namePlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-dark mb-1"
                >
                  {t("form.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-black/[0.06] bg-white/80 backdrop-blur-sm text-text-dark text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors"
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-text-dark mb-1"
              >
                {t("form.company")}
              </label>
              <input
                id="company"
                type="text"
                value={formState.company}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, company: e.target.value }))
                }
                className="w-full px-4 py-2.5 rounded-lg border border-black/[0.06] bg-white/80 backdrop-blur-sm text-text-dark text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors"
                placeholder={t("form.companyPlaceholder")}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-dark mb-1"
              >
                {t("form.message")}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                className="w-full px-4 py-2.5 rounded-lg border border-black/[0.06] bg-white/80 backdrop-blur-sm text-text-dark text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none"
                placeholder={t("form.messagePlaceholder")}
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={sending}>
              {sending ? t("form.sending") : t("form.submit")}
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
