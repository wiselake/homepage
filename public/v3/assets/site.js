/* style-hover 속성 처리 (Claude Design 문법 → 표준 동작) */
(function () {
  function init() {
    document.querySelectorAll('[style-hover]').forEach(function (el) {
      var base = el.getAttribute('style') || '';
      var hover = el.getAttribute('style-hover') || '';
      el.addEventListener('mouseenter', function () {
        el.setAttribute('style', base + ';' + hover);
      });
      el.addEventListener('mouseleave', function () {
        el.setAttribute('style', base);
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
