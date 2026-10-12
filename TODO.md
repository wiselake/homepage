# TO-DO — v4 (2026-10-12 기준)

v4는 v3 정적 사이트를 대체하는 Next.js App Router 재구축이다. 완료 시 체크하고 날짜를 남길 것.

## main 병합 전

- [ ] 개인정보처리방침·이용약관 초안의 빈칸([...]) 채우기 및 검토 — `src/content/legal.tsx`
- [ ] Resend에서 `wiselake.ai` 도메인 인증 후 Vercel 환경변수 `CONTACT_FROM` 설정 (미설정 시 테스트 발신자라 계정 소유자 주소로만 발송됨)
- [ ] 프리뷰/프로덕션에서 문의 폼 실발송 1회 테스트 → `wiselake@wiselake.ai` 수신 확인
- [ ] 대표 영문 표기 확정 — `src/lib/site.ts` `COMPANY.ceo.en`
- [ ] 영문 주소 표기 확인 — `src/lib/site.ts` `COMPANY.address.en`

## 병합 후

- [ ] **Vercel primary 도메인을 apex로 변경** — 현재 primary가 `www.wiselake.ai`라 `wiselake.ai`가 www로 307 리다이렉트됨. canonical·hreflang·sitemap은 `https://wiselake.ai` 기준. Settings → Domains에서 `wiselake.ai`를 Primary로 지정.
- [ ] Google Search Console에 `https://wiselake.ai/sitemap.xml` 재제출 (URL 구조 변경: /pigos-pigsignal, /nanotrans는 제품 사이트로 308)
- [ ] Lighthouse 측정 (모바일·데스크톱)

## 이후

- [ ] 모바일 헤더 정리 (현재 메뉴가 여러 줄로 쌓임)
- [ ] /pigplan 보강 — 인사이트 리포트 예시, 톡 대화 예시 (v3 `public/v3/pigplan.html`은 git history에 있음)
- [ ] 2026년 12월~2027년 1월 피그플랜 분리 시 `/pigplan` → 새 도메인 301
- [ ] 2027년 1월 톡·비즈 오픈 시 상태 배지와 소식 갱신 — `PigPlanBlock.tsx`, `src/content/news.ts`
- [ ] 로고 SVG 원본 확보 시 PNG 교체
