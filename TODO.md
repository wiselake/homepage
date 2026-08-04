# TO-DO — v3 전환 후속 작업 (2026-08-04 기준)

v3 정적 사이트 전환(PR #5) 머지·배포 후 남은 후속 작업 목록. 완료 시 체크하고 항목 옆에 날짜를 남길 것.

## 우선순위 높음

- [ ] **Vercel primary 도메인을 apex로 변경** — 현재 primary가 `www.wiselake.ai`라서 `wiselake.ai` 접속이 www로 307 리다이렉트됨. 반면 사이트의 canonical·hreflang·og:url·JSON-LD·sitemap은 전부 `https://wiselake.ai`(www 없음) 기준이라 불일치.
  - 조치: Vercel 대시보드 → 프로젝트 → Settings → Domains에서 `wiselake.ai`를 **Primary**로 지정 (www → apex 리다이렉트로 방향 전환). 코드 변경 불필요.
  - 참고: 구 사이트 때부터 있던 불일치로, 이번 전환의 회귀가 아님. "웹사이트 = wiselake.ai" 정책 기준으로 apex 정렬이 맞음.
- [ ] **Google Search Console에 새 sitemap 제출** — URL 구조가 전면 변경됨(구 18 URL → 신규 8 URL). `https://wiselake.ai/sitemap.xml` 제출로 색인 전환 가속. 구 URL은 308 리다이렉트가 처리하므로 별도 작업 불필요.
- [ ] **문의 폼 실전송 1회 테스트** — 프로덕션에서 메인 하단 `#contact` 폼으로 실제 제출 → `wiselake@wiselake.co.kr` 수신 확인 (Resend 발송, IP당 60초 1회 제한 유의).

## 우선순위 낮음 (사소 정리)

- [ ] **루트 `src/app/layout.tsx` 메타데이터 정리** — 구 브랜딩 문구("Nano Start, Mega Impact")와 존재하지 않는 `/favicon.ico` 참조가 남아 있음. 404 페이지에만 영향하는 수준. 신규 브랜딩 title/description으로 교체하고 icons는 `/icon.svg` 규칙에 맡기면 됨.
- [ ] **CLAUDE.md 정리 (로컬 파일, gitignore 대상)** — ① Tech Stack의 `i18n: next-intl` 줄 삭제(패키지 제거됨), ② 브랜드 표기 `X.402`가 사이트 전반의 `x402`와 불일치 — 어느 쪽이 공식 표기인지 확정 후 통일 (사이트 콘텐츠는 현재 x402 유지 중).
- [ ] **로고 변형 3종 정리 여부 결정** — `public/wiselake_logo_black.png`, `_white.png`, `_gold.png`는 코드 참조 없음(docs/HANDOVER.md 자산 표에만 문서화). 유지 또는 삭제 결정. `wiselake_logo.png`는 JSON-LD가 참조하므로 유지 필수.
- [ ] **sitemap 루트 URL trailing slash 통일** — sitemap의 루트 항목은 `https://wiselake.ai`(슬래시 없음), 페이지 canonical은 `https://wiselake.ai/`(슬래시 있음). 검색엔진이 동일 취급하므로 실질 영향 없으나, 완전 일치를 원하면 `src/app/sitemap.ts`에서 루트만 슬래시를 붙이면 됨.
- [ ] **/api/contact 레이트리밋 순서 참고** — IP당 60초 1회 제한이 입력 검증보다 먼저 실행되어, 검증 실패 직후 60초 내 재제출 시 400 대신 429를 받음. 스팸 방지 관점의 의도된 설계로 보이나 UX 개선 여지 있음.

## 향후 콘텐츠 (결정 완료 사항의 기록)

- `/about`·`/b2b`(Flow9·Q브릿지)·`/roadmap`은 v3에 의도적으로 미이관, 홈으로 리다이렉트 중 (2026-08-03 확정). 추후 해당 콘텐츠를 되살릴 경우 신규 정적 페이지 추가 + `next.config.ts` 리다이렉트 규칙 해제 필요.
