/**
 * Mojin — Main JS
 * Nav scroll, appear animations, demo sliders, language switcher
 */

// ── Nav scroll ────────────────────────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── Appear on scroll ──────────────────────────────────────
const appearEls = document.querySelectorAll('.appear');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  appearEls.forEach(el => io.observe(el));
}

// ── Smooth scroll ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ── Demo sliders → live preview ───────────────────────────
function initDemo() {
  const sliders = document.querySelectorAll('.demo-slider');
  const box = document.getElementById('demo-box');
  if (!box || !sliders.length) return;

  const state = { stiffness: 120, particles: 500, speed: 1.0, hue: 260 };

  function updateBox() {
    const scale = 0.7 + (state.stiffness / 300) * 0.6;
    const duration = (2 / state.speed).toFixed(2);
    const hue = state.hue;
    box.style.setProperty('--scale', scale);
    box.style.setProperty('--dur', `${duration}s`);
    box.style.background = `linear-gradient(135deg, hsl(${hue},80%,55%), hsl(${hue+50},80%,55%))`;
    box.style.boxShadow = `0 0 40px hsl(${hue},70%,40%) 40`;
  }

  sliders.forEach(slider => {
    const key = slider.dataset.param;
    const valueEl = document.getElementById(`val-${key}`);
    slider.addEventListener('input', () => {
      state[key] = parseFloat(slider.value);
      if (valueEl) valueEl.textContent = slider.value;
      updateBox();
    });
  });

  // Animate demo box continuously
  box.style.animation = 'demoFloat var(--dur, 2s) ease-in-out infinite alternate';
  updateBox();
}

// ── i18n ──────────────────────────────────────────────────
let currentLang = localStorage.getItem('mojin-lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('mojin-lang', lang);
  if (typeof MOJIN_I18N === 'undefined') return;
  const strings = MOJIN_I18N[lang] || MOJIN_I18N['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (strings[key]) el.textContent = strings[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (strings[key]) el.placeholder = strings[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ── Boot ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  initDemo();
});
