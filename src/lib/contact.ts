export const CONTACT_TYPES = ["pigplan", "pigos-partner", "investment", "partnership", "press", "other"] as const;
export type ContactType = (typeof CONTACT_TYPES)[number];

export const CONTACT_TYPE_LABELS_KO: Record<ContactType, string> = {
  pigplan: "피그플랜 도입·데모",
  investment: "투자",
  partnership: "제휴",
  "pigos-partner": "PigOS 해외 제휴",
  press: "언론",
  other: "기타",
};
