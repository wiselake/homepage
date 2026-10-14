# TO-DO — v4 (2026-10-12 기준)

v4는 v3 정적 사이트를 대체하는 Next.js App Router 재구축이다. 완료 시 체크하고 날짜를 남길 것.

## main 병합 전

- [x] 개인정보처리방침·이용약관 빈칸 채움: 보유 1년, 보호책임자 대표이사, 시행일 2026-10-12 (2026-10-12) — 법무 검토는 별도
- [x] Resend에서 `wiselake.ai` 도메인 인증 후 Vercel 환경변수 `CONTACT_FROM`·`CONTACT_TO` 설정 (2026-10-12, 도쿄 리전)
- [x] 프리뷰에서 문의 폼 실발송 테스트 → `wiselake@wiselake.ai` 수신 확인 (2026-10-12)
- [x] 프로덕션에서 문의 폼 실발송 확인 (2026-10-12)
- [x] 대표 영문 표기 Gyomoon Jin 확정 (2026-10-12)
- [x] 영문 주소 확인: "The H Tower 919"는 건물명 (2026-10-12)
- [x] 문의는 메일·홈 문의 폼으로만 받음 — 대표전화·전화 문의 제거 (PR #8, 2026-10-14)

## 병합 후

- [x] Vercel 도메인 정리: `wiselake.ai`가 Production, `www.wiselake.ai`·`wiselake.co.kr`은 `wiselake.ai`로 308 (2026-10-12)
- [x] Google Search Console 도메인 속성(wiselake.ai) 추가·홈 색인 요청 (2026-10-12) — sitemap `https://wiselake.ai/sitemap.xml` 제출 확인 (URL 구조 변경: /pigos-pigsignal, /nanotrans는 제품 사이트로 308)
- [x] Lighthouse 측정·개선 (모바일·데스크톱, /, /en, /pigplan, /news): Performance 99–100, Accessibility·Best Practices·SEO 100, CLS 0.003 이하 — Pretendard 비차단 로드·대체 글꼴 보정(PR #14), 대비·링크 밑줄·링크 문구(PR #15) (2026-10-14)

## 이후

- [x] 모바일 헤더 정리: `md` 미만은 로고·문의하기·메뉴 버튼 한 줄 + 펼침 메뉴, 360px 가로 스크롤 해소 (2026-10-14)
- [x] 커스텀 404: 국문 기본, `/en/…`은 영문, 404 상태 코드·noindex. 빌드 시 metadataBase 경고 해소 (2026-10-14)
- [x] 서비스명 표기 통일: 피그플랜 인사이트·톡·비즈 / 피그플랜 AI 스위트 (PigPlan Insight·Talk·Biz / PigPlan AI Suite) (2026-10-14)
- [ ] /pigplan 보강 — 인사이트 리포트 예시, 톡 대화 예시 (v3 `public/v3/pigplan.html`은 git history에 있음)
- [ ] 로고 SVG 원본 확보 시 PNG 교체
