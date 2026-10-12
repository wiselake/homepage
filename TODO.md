# TO-DO — v4 (2026-10-12 기준)

v4는 v3 정적 사이트를 대체하는 Next.js App Router 재구축이다. 완료 시 체크하고 날짜를 남길 것.

## main 병합 전

- [x] 개인정보처리방침·이용약관 빈칸 채움: 보유 1년, 보호책임자 대표이사, 시행일 2026-10-12 (2026-10-12) — 법무 검토는 별도
- [x] Resend에서 `wiselake.ai` 도메인 인증 후 Vercel 환경변수 `CONTACT_FROM`·`CONTACT_TO` 설정 (2026-10-12, 도쿄 리전)
- [x] 프리뷰에서 문의 폼 실발송 테스트 → `wiselake@wiselake.ai` 수신 확인 (2026-10-12)
- [x] 프로덕션에서 문의 폼 실발송 확인 (2026-10-12)
- [x] 대표 영문 표기 Gyomoon Jin 확정 (2026-10-12)
- [x] 영문 주소 확인: "The H Tower 919"는 건물명 (2026-10-12)

## 병합 후

- [x] Vercel 도메인 정리: `wiselake.ai`가 Production, `www.wiselake.ai`·`wiselake.co.kr`은 `wiselake.ai`로 308 (2026-10-12)
- [x] Google Search Console 도메인 속성(wiselake.ai) 추가·홈 색인 요청 (2026-10-12) — sitemap `https://wiselake.ai/sitemap.xml` 제출 확인 (URL 구조 변경: /pigos-pigsignal, /nanotrans는 제품 사이트로 308)
- [ ] Lighthouse 측정 (모바일·데스크톱)

## 이후

- [ ] 모바일 헤더 정리 (현재 메뉴가 여러 줄로 쌓임)
- [ ] /pigplan 보강 — 인사이트 리포트 예시, 톡 대화 예시 (v3 `public/v3/pigplan.html`은 git history에 있음)
- [ ] 2026년 12월~2027년 1월 피그플랜 분리 시 `/pigplan` → 새 도메인 301
- [ ] 2027년 1월 톡·비즈 오픈 시 상태 배지와 소식 갱신 — `PigPlanBlock.tsx`, `src/content/news.ts`
- [ ] 로고 SVG 원본 확보 시 PNG 교체
