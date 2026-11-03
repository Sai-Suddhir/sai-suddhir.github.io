import Lenis from 'lenis';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');

/* ── Smooth scrolling ── */
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4) });
  const raf = (time: number) => {
    lenis!.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

// Anchor links scroll smoothly with an offset for the sticky header
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')!;
    const target = id === '#top' ? document.body : document.querySelector<HTMLElement>(id);
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: id === '#top' ? 0 : -88 });
    else target.scrollIntoView();
    history.replaceState(null, '', id);
  });
});

/* ── Reveal on scroll (with stagger for groups) ── */
document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
  const step = Number(group.dataset.stagger) || 80;
  group.querySelectorAll<HTMLElement>(':scope > [data-reveal]').forEach((el, i) => {
    el.style.setProperty('--d', `${i * step}ms`);
  });
});

const revealObs = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target as HTMLElement;
      el.classList.add('is-in');
      revealObs.unobserve(el);
      el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
      if (el.hasAttribute('data-count')) countUp(el);
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
);
document.querySelectorAll('[data-reveal]').forEach((el) => revealObs.observe(el));

/* ── Count-up numbers ── */
function countUp(el: HTMLElement) {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';
  const target = Number(el.dataset.count);
  const decimals = Number(el.dataset.decimals || 0);
  if (reduce) {
    el.textContent = target.toFixed(decimals);
    return;
  }
  const dur = 1600;
  const t0 = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(decimals);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ── Header: hide on scroll down, show on scroll up; progress bar ── */
const header = document.querySelector<HTMLElement>('.site-header');
const progress = document.querySelector<HTMLElement>('.progress');
let lastY = window.scrollY;
const onScroll = () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  if (header) {
    header.classList.toggle('is-scrolled', y > 8);
    if (y > 320 && y > lastY + 4) header.classList.add('is-hidden');
    else if (y < lastY - 4 || y < 320) header.classList.remove('is-hidden');
  }
  lastY = y;
  if (y < window.innerHeight * 0.4) navLinks.forEach((a) => a.classList.remove('is-active'));
  drawTimelines();
};
window.addEventListener('scroll', onScroll, { passive: true });

/* ── Active nav link ── */
const navLinks = new Map<string, HTMLElement>();
document.querySelectorAll<HTMLElement>('.nav-links a[href^="#"]').forEach((a) => {
  navLinks.set(a.getAttribute('href')!.slice(1), a);
});
const sectionObs = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach((a) => a.classList.remove('is-active'));
      navLinks.get(entry.target.id)?.classList.add('is-active');
    }
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
navLinks.forEach((_, id) => {
  const s = document.getElementById(id);
  if (s) sectionObs.observe(s);
});

/* ── Timeline line draws as you scroll through it ── */
const timelines = Array.from(document.querySelectorAll<HTMLElement>('[data-timeline]'));
function drawTimelines() {
  const vh = window.innerHeight;
  for (const tl of timelines) {
    const r = tl.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / r.height));
    tl.style.setProperty('--tl', String(reduce ? 1 : p));
  }
}

onScroll();
