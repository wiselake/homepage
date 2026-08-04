/* ==========================================================================
   WiseLake v3 공유 스크립트 — v2 아키텍처
   문의 폼 핸들러(index 페이지용) + 언어 토글 쿠키.
   해당 요소가 없는 페이지에서는 조용히 no-op.
   ========================================================================== */
(function () {
  var MESSAGES = {
    ko: {
      sending: '전송 중입니다…',
      success: '문의가 접수되었습니다. 영업일 기준 2일 내 회신드립니다.',
      error: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.',
      invalid: '이름, 이메일, 문의 내용을 모두 입력해주세요.'
    },
    en: {
      sending: 'Sending…',
      success: 'Thanks — your message has been sent. We reply within 2 business days.',
      error: 'Something went wrong. Please try again shortly.',
      invalid: 'Please fill in your name, email, and message.'
    }
  };

  function setStatus(statusEl, text, state) {
    if (!statusEl) return;
    statusEl.textContent = text;
    if (state) {
      statusEl.setAttribute('data-state', state);
    } else {
      statusEl.removeAttribute('data-state');
    }
  }

  function initContactForms() {
    var forms = document.querySelectorAll('form[data-contact-form]');
    if (!forms.length) return;

    forms.forEach(function (form) {
      var locale = form.getAttribute('data-locale') === 'en' ? 'en' : 'ko';
      var t = MESSAGES[locale];
      var statusEl = form.querySelector('[data-form-status]');

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var fd = new FormData(form);
        // src/app/api/contact/route.ts 요청 스키마: { type, name, email, company, message }
        var payload = {
          type: (fd.get('type') || 'general').toString(),
          name: (fd.get('name') || '').toString().trim(),
          email: (fd.get('email') || '').toString().trim(),
          company: (fd.get('company') || '').toString().trim(),
          message: (fd.get('message') || '').toString().trim()
        };

        if (!payload.name || !payload.email || !payload.message) {
          setStatus(statusEl, t.invalid, 'error');
          return;
        }

        var submitBtn = form.querySelector('[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;
        setStatus(statusEl, t.sending, null);

        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
          .then(function (res) {
            return res.json().then(function (data) {
              return { ok: res.ok, data: data };
            });
          })
          .then(function (result) {
            if (result.ok && result.data && result.data.success) {
              setStatus(statusEl, t.success, 'success');
              form.reset();
            } else {
              setStatus(statusEl, t.error, 'error');
            }
          })
          .catch(function () {
            setStatus(statusEl, t.error, 'error');
          })
          .then(function () {
            if (submitBtn) submitBtn.disabled = false;
          });
      });
    });
  }

  function initLangSwitch() {
    var switches = document.querySelectorAll('[data-lang-switch]');
    if (!switches.length) return;
    switches.forEach(function (el) {
      el.addEventListener('click', function () {
        var target = el.getAttribute('data-lang-switch') === 'en' ? 'en' : 'ko';
        document.cookie = 'NEXT_LOCALE=' + target + '; path=/; max-age=31536000';
      });
    });
  }

  function init() {
    initContactForms();
    initLangSwitch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
