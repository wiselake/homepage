export const CONTACT_TYPES = ["demo", "partnership", "investment-press", "other"] as const;
export type ContactType = (typeof CONTACT_TYPES)[number];

export const CONTACT_TYPE_LABELS_KO: Record<ContactType, string> = {
  demo: "서비스 도입·데모",
  partnership: "사업 제휴",
  "investment-press": "투자·언론",
  other: "기타 문의",
};

/** Inquiry keys used before the 2026-10 refresh. Old links (?inquiry=pigplan) and cached forms still resolve. */
const LEGACY: Record<string, ContactType> = {
  pigplan: "demo",
  "pigos-partner": "partnership",
  investment: "investment-press",
  press: "investment-press",
};

export function toContactType(v: unknown): ContactType | undefined {
  const s = String(v);
  return (CONTACT_TYPES as readonly string[]).includes(s) ? (s as ContactType) : LEGACY[s];
}
