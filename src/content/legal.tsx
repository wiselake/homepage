import { COMPANY } from "@/lib/site";

/*
 * Processors listed are the services this codebase actually uses.
 * Set EFFECTIVE_DATE to the day the policy goes live on wiselake.ai.
 */

export const EFFECTIVE_DATE = { ko: "2026년 10월 12일", en: "October 12, 2026" };

export function PrivacyKo() {
  return (
    <>
      <p>
        {COMPANY.name.ko}(이하 &ldquo;회사&rdquo;)는 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고 관련 고충을 신속하게 처리하기 위해 다음과 같이 개인정보처리방침을 둡니다. 이 방침은 wiselake.ai에 적용됩니다.
      </p>
      <h2>1. 처리하는 개인정보 항목과 목적</h2>
      <table>
        <thead>
          <tr>
            <th>구분</th>
            <th>항목</th>
            <th>목적</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>문의 폼</td>
            <td>필수: 성함, 이메일, 문의 유형, 문의 내용 / 선택: 소속</td>
            <td>문의 확인과 회신</td>
          </tr>
          <tr>
            <td>자동 수집</td>
            <td>접속 기록, IP 주소, 브라우저 정보, 쿠키</td>
            <td>서비스 보안, 방문 통계, 언어 설정 기억</td>
          </tr>
        </tbody>
      </table>
      <h2>2. 보유 및 이용 기간</h2>
      <p>문의 정보는 회신을 마친 날부터 1년 동안 보관한 뒤 지체 없이 파기합니다. 다른 법령에 따라 보관해야 하는 경우에는 그 기간 동안 보관합니다.</p>
      <h2>3. 처리 위탁과 국외 이전</h2>
      <table>
        <thead>
          <tr>
            <th>받는 자</th>
            <th>국가</th>
            <th>이전 항목</th>
            <th>목적</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Resend, Inc.</td>
            <td>미국</td>
            <td>문의 폼 입력 내용</td>
            <td>문의 메일 발송</td>
          </tr>
          <tr>
            <td>Vercel Inc.</td>
            <td>미국</td>
            <td>접속 기록</td>
            <td>웹사이트 호스팅</td>
          </tr>
          <tr>
            <td>Google LLC (Google Analytics)</td>
            <td>미국</td>
            <td>쿠키, 접속 기록</td>
            <td>방문 통계</td>
          </tr>
        </tbody>
      </table>
      <p>이전은 이용자가 문의를 보내거나 사이트에 접속할 때 네트워크를 통해 이루어지며, 각 사업자의 보관 기간은 해당 사업자의 정책을 따릅니다.</p>
      <h2>4. 쿠키</h2>
      <p>회사는 방문 통계(Google Analytics)와 언어 설정(NEXT_LOCALE)을 위해 쿠키를 사용합니다. 브라우저 설정에서 쿠키 저장을 거부할 수 있으며, 이 경우 언어 설정이 기억되지 않을 수 있습니다.</p>
      <h2>5. 이용자의 권리</h2>
      <p>이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제, 처리 정지를 요구할 수 있습니다. 아래 연락처로 요청하시면 지체 없이 조치합니다.</p>
      <h2>6. 파기 절차와 방법</h2>
      <p>보유 기간이 끝난 개인정보는 복구할 수 없는 방법으로 삭제합니다.</p>
      <h2>7. 개인정보 보호책임자</h2>
      <ul>
        <li>
          성명·직책: {COMPANY.ceo.ko} · 대표이사
        </li>
        <li>
          연락처: {COMPANY.email}
        </li>
      </ul>
      <h2>8. 방침의 변경</h2>
      <p>이 방침은 {EFFECTIVE_DATE.ko}부터 적용됩니다. 내용이 바뀌면 이 페이지에 알립니다.</p>
    </>
  );
}

export function PrivacyEn() {
  return (
    <>
      <p>
        {COMPANY.name.en} (&ldquo;WiseLake&rdquo;) processes personal information in line with Korea&apos;s Personal Information Protection Act. This policy covers wiselake.ai.
      </p>
      <h2>1. What we collect and why</h2>
      <ul>
        <li>Contact form: name, email, inquiry type and message (required), organisation (optional) — to answer your inquiry.</li>
        <li>Automatically: access logs, IP address, browser details and cookies — for security, visit statistics and remembering your language.</li>
      </ul>
      <h2>2. How long we keep it</h2>
      <p>Inquiry data is kept for one year after we reply, then deleted, unless the law requires longer.</p>
      <h2>3. Service providers and transfers abroad</h2>
      <ul>
        <li>Resend, Inc. (USA) — sends inquiry emails.</li>
        <li>Vercel Inc. (USA) — hosts the website.</li>
        <li>Google LLC (USA) — Google Analytics visit statistics.</li>
      </ul>
      <h2>4. Cookies</h2>
      <p>We use cookies for Google Analytics and to remember your language (NEXT_LOCALE). You can block cookies in your browser settings.</p>
      <h2>5. Your rights</h2>
      <p>You may ask to see, correct, delete or stop the processing of your information at any time.</p>
      <h2>6. Contact</h2>
      <p>
        Privacy officer: {COMPANY.ceo.en}, CEO · {COMPANY.email}
      </p>
      <h2>7. Changes</h2>
      <p>This policy applies from {EFFECTIVE_DATE.en}. We will post any changes on this page.</p>
    </>
  );
}

export function TermsKo() {
  return (
    <>
      <h2>1. 목적</h2>
      <p>이 약관은 {COMPANY.name.ko}(이하 &ldquo;회사&rdquo;)가 운영하는 wiselake.ai(이하 &ldquo;사이트&rdquo;)의 이용 조건을 정합니다.</p>
      <h2>2. 사이트의 성격</h2>
      <p>사이트는 회사와 제품을 소개합니다. 피그플랜, PigOS, NanoTrans 등 각 제품의 이용 조건은 해당 제품의 약관을 따릅니다.</p>
      <h2>3. 저작권</h2>
      <p>사이트의 글, 이미지, 로고 등 콘텐츠의 저작권은 회사 또는 정당한 권리자에게 있습니다. 회사의 사전 동의 없이 복제, 배포, 상업적으로 이용할 수 없습니다.</p>
      <h2>4. 외부 링크</h2>
      <p>사이트에는 언론 기사 등 외부 사이트 링크가 포함됩니다. 외부 사이트의 내용과 개인정보 처리는 해당 운영자의 책임입니다.</p>
      <h2>5. 정보의 정확성</h2>
      <p>회사는 사이트의 정보를 정확하게 유지하려 노력하지만, 출시 일정과 가격 등은 사전 안내 없이 바뀔 수 있습니다.</p>
      <h2>6. 준거법</h2>
      <p>이 약관은 대한민국 법률에 따릅니다. 이 약관은 {EFFECTIVE_DATE.ko}부터 적용됩니다.</p>
    </>
  );
}

export function TermsEn() {
  return (
    <>
      <h2>1. Scope</h2>
      <p>These terms govern use of wiselake.ai, operated by {COMPANY.name.en}.</p>
      <h2>2. Products</h2>
      <p>This site introduces the company and its products. Each product — PigPlan, PigOS, NanoTrans — has its own terms of service.</p>
      <h2>3. Copyright</h2>
      <p>Text, images and logos on this site belong to WiseLake or their rightful owners and may not be reproduced commercially without permission.</p>
      <h2>4. External links</h2>
      <p>Links to news articles and other sites are provided for reference; those sites are the responsibility of their operators.</p>
      <h2>5. Accuracy</h2>
      <p>Launch dates and prices may change without notice.</p>
      <h2>6. Governing law</h2>
      <p>These terms are governed by the laws of the Republic of Korea and apply from {EFFECTIVE_DATE.en}.</p>
    </>
  );
}
