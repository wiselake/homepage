export const CONTACT_TYPES = ["investment", "partnership", "pigos-partner", "press", "other"] as const;
export type ContactType = (typeof CONTACT_TYPES)[number];

export const CONTACT_TYPE_LABELS_KO: Record<ContactType, string> = {
  investment: "투자",
  partnership: "제휴",
  "pigos-partner": "PigOS 해외 제휴",
  press: "언론",
  other: "기타",
};
