/* Polimento do site: botão do WhatsApp, visualizador de fotos e formulário.
   Para trocar o número do WhatsApp, edite apenas a linha "whatsapp" abaixo
   (formato: código do país + DDD + número, sem símbolos). */
(function () {
  'use strict';
  var SITE = {
    whatsapp: '5511999999999',
    message: 'Olá! Vim pelo site e gostaria de um orçamento.'
  };
  function waLink(text) {
    return 'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(text || SITE.message);
  }
  var ICON = {
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>'
  };

  /* ---------- botão flutuante do WhatsApp ---------- */
  function addWhatsApp() {
    if (document.querySelector('.wa-float')) return;
    var a = document.createElement('a');
    a.className = 'wa-float';
    a.href = waLink();
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', 'Falar no WhatsApp');
    a.setAttribute('data-wa', SITE.message);
    a.innerHTML = ICON.chat + '<span>WhatsApp</span>';
    document.body.appendChild(a);
    waitForIntro(a);
  }

  /* na home, o botão só aparece depois da tela de carregamento (intro) terminar */
  function introVisible(el) {
    var cs = window.getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) < 0.05) return false;
    var r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < window.innerHeight && r.right > 0 && r.left < window.innerWidth;
  }
  function waitForIntro(btn) {
    var intro = document.querySelector('.intro');
    if (!intro || !introVisible(intro)) return;
    btn.classList.add('is-waiting');
    var waited = 0;
    var timer = setInterval(function () {
      waited += 150;
      if (!introVisible(intro) || waited >= 12000) {
        clearInterval(timer);
        setTimeout(function () { btn.classList.remove('is-waiting'); }, 350);
      }
    }, 150);
  }

  /* ---------- visualizador de fotos ---------- */
  function largestSrc(img) {
    var s = img.getAttribute('srcset') || '', best = null, w = 0, m, re = /(\S+)\s+(\d+)w/g;
    while ((m = re.exec(s))) { if (+m[2] > w) { w = +m[2]; best = m[1]; } }
    return best || img.currentSrc || img.src;
  }
  function initLightbox() {
    var wraps = Array.prototype.slice.call(document.querySelectorAll('.work_img-wrap, .work-header_img-wrap'));
    var items = wraps.map(function (w) { return { wrap: w, img: w.querySelector('img') }; })
                     .filter(function (o) { return o.img; });
    if (!items.length) return;

    var lb = document.createElement('div');
    lb.className = 'lb';
    lb.hidden = true;
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Visualizador de fotos');
    lb.innerHTML =
      '<button type="button" class="lb__btn lb__close" aria-label="Fechar">' + ICON.close + '</button>' +
      '<button type="button" class="lb__btn lb__prev" aria-label="Foto anterior">' + ICON.prev + '</button>' +
      '<figure class="lb__fig"><img class="lb__img" alt=""><figcaption class="lb__count"></figcaption></figure>' +
      '<button type="button" class="lb__btn lb__next" aria-label="Próxima foto">' + ICON.next + '</button>';
    document.body.appendChild(lb);

    var imgEl = lb.querySelector('.lb__img'), count = lb.querySelector('.lb__count');
    var btnClose = lb.querySelector('.lb__close'), btnPrev = lb.querySelector('.lb__prev'), btnNext = lb.querySelector('.lb__next');
    var current = 0, opener = null, startX = null;
    if (items.length < 2) { btnPrev.hidden = true; btnNext.hidden = true; }

    function pad(n) { return (n < 10 ? '0' : '') + n; }
    function show(i) {
      current = (i + items.length) % items.length;
      var it = items[current];
      imgEl.classList.remove('is-ready');
      imgEl.alt = it.img.getAttribute('alt') || '';
      imgEl.onload = function () { imgEl.classList.add('is-ready'); };
      imgEl.src = largestSrc(it.img);
      if (imgEl.complete) imgEl.classList.add('is-ready');
      count.textContent = pad(current + 1) + ' / ' + pad(items.length);
      [1, -1].forEach(function (d) { var n = items[(current + d + items.length) % items.length]; new Image().src = largestSrc(n.img); });
    }
    function open(i, from) {
      opener = from || null;
      lb.hidden = false;
      document.documentElement.classList.add('lb-open');
      show(i);
      btnClose.focus();
    }
    function close() {
      lb.hidden = true;
      document.documentElement.classList.remove('lb-open');
      imgEl.removeAttribute('src');
      if (opener) opener.focus();
    }
    items.forEach(function (it, i) {
      it.wrap.setAttribute('tabindex', '0');
      it.wrap.setAttribute('role', 'button');
      it.wrap.setAttribute('aria-label', 'Ampliar foto ' + (i + 1) + ' de ' + items.length);
      it.wrap.addEventListener('click', function () { open(i, it.wrap); });
      it.wrap.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i, it.wrap); }
      });
    });
    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', function () { show(current - 1); });
    btnNext.addEventListener('click', function () { show(current + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(current - 1);
      else if (e.key === 'ArrowRight') show(current + 1);
      else if (e.key === 'Tab') {
        var f = [btnClose, btnPrev, btnNext].filter(function (b) { return !b.hidden; });
        var idx = f.indexOf(document.activeElement);
        e.preventDefault();
        f[(idx + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
    });
    lb.addEventListener('touchstart', function (e) { startX = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX; startX = null;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  /* ---------- formulário de contato -> mensagem pronta no WhatsApp ---------- */
  var LABELS = { name: 'Nome', email: 'E-mail', subject: 'Assunto', message: 'Mensagem' };
  function initForm() {
    window.addEventListener('submit', function (e) {
      var form = e.target;
      var wrap = form && form.closest && form.closest('.w-form');
      if (!wrap) return;
      e.preventDefault();
      e.stopPropagation();
      var lines = ['Olá! Vim pelo site.', ''];
      Array.prototype.forEach.call(form.querySelectorAll('input, textarea, select'), function (el) {
        var type = (el.type || '').toLowerCase();
        if (type === 'submit' || type === 'button' || type === 'hidden') return;
        var val = type === 'checkbox' ? (el.checked ? 'Sim' : '') : (el.value || '').trim();
        if (!val) return;
        var key = (el.getAttribute('name') || '').toLowerCase();
        lines.push((LABELS[key] || el.getAttribute('data-name') || el.name || 'Campo') + ': ' + val);
      });
      var url = waLink(lines.join('\n'));
      var w = window.open(url, '_blank', 'noopener');
      if (!w) window.location.href = url;
      var done = wrap.querySelector('.w-form-done'), fail = wrap.querySelector('.w-form-fail');
      if (fail) fail.style.display = 'none';
      if (done) { form.style.display = 'none'; done.style.display = 'block'; done.setAttribute('tabindex', '-1'); done.focus(); }
    }, true);
  }

  /* links "Pedir proposta": usam o número configurado acima */
  function initWaLinks() {
    Array.prototype.forEach.call(document.querySelectorAll('a[data-wa]'), function (a) {
      a.href = waLink(a.getAttribute('data-wa'));
    });
  }

  /* aparecer suavemente ao rolar (apenas nas seções novas) */
  function initReveal() {
    var els = document.querySelectorAll('.sx-reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) { Array.prototype.forEach.call(els, function (e) { e.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { var t = en.target; t.classList.add('is-in'); io.unobserve(t); setTimeout(function () { t.style.transitionDelay = ''; }, 1000); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    Array.prototype.forEach.call(els, function (e, i) { e.style.transitionDelay = ((i % 3) * 80) + 'ms'; io.observe(e); });
  }

  /* imagens de segundo plano: só carregam depois que a página terminou (ou ao rolar) */
  function initDeferred() {
    var done = false;
    function go() {
      if (done) return; done = true;
      Array.prototype.forEach.call(document.querySelectorAll('img[data-defer-src]'), function (img) {
        img.src = img.getAttribute('data-defer-src'); img.removeAttribute('data-defer-src');
      });
    }
    if (document.readyState === 'complete') setTimeout(go, 800);
    else window.addEventListener('load', function () { setTimeout(go, 800); });
    ['scroll', 'touchstart', 'wheel', 'keydown'].forEach(function (ev) { window.addEventListener(ev, go, { once: true, passive: true }); });
  }

  /* fundos grandes das seções: carregam quando estão perto de aparecer */
  function initLazyBackgrounds() {
    var secs = document.querySelectorAll('.section_home-service-1, .section_home-service-3');
    if (!secs.length) return;
    function ready(el) { el.classList.add('bg-ready'); }
    if (!('IntersectionObserver' in window)) { Array.prototype.forEach.call(secs, ready); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { ready(en.target); io.unobserve(en.target); } });
    }, { rootMargin: '150% 0px' });
    Array.prototype.forEach.call(secs, function (el) { io.observe(el); });
  }

  /* barra fina de progresso de leitura no topo */
  function initProgress() {
    var bar = document.createElement('div');
    bar.className = 'sx-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    var ticking = false;
    function update() {
      var d = document.documentElement, max = d.scrollHeight - d.clientHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, Math.max(0, (window.pageYOffset || d.scrollTop) / max)) : 0) + ')';
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* o botão flutuante some quando o rodapé aparece (evita sobrepor o rodapé e repetir o convite) */
  function initFloatVisibility() {
    var main = document.getElementById('conteudo'), fl = document.querySelector('.wa-float');
    if (!main || !fl) return;
    var ticking = false;
    function update() {
      fl.classList.toggle('is-hidden', main.getBoundingClientRect().bottom <= window.innerHeight - 120);
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* "voltar ao topo" */
  function initToTop() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-top]'), function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      });
    });
  }

  function init() { addWhatsApp(); initProgress(); initFloatVisibility(); initToTop(); initDeferred(); initLazyBackgrounds(); initWaLinks(); initReveal(); initLightbox(); initForm(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
