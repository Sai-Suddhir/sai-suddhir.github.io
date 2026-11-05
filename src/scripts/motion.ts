import Lenis from 'lenis';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
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

// Anchor links scroll smoothly with an offset for the floating header
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')!;
    if (id === '#') return;
    const target = id === '#top' ? document.body : document.querySelector<HTMLElement>(id);
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: id === '#top' ? 0 : -88 });
    else target.scrollIntoView();
    history.replaceState(null, '', id);
  });
});

/* ── Split headings into words that rise out of a mask ── */
document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
  const words = (el.textContent ?? '').trim().split(/\s+/);
  el.setAttribute('aria-label', words.join(' '));
  el.textContent = '';
  words.forEach((w, i) => {
    const mask = document.createElement('span');
    mask.className = 'w-mask';
    mask.setAttribute('aria-hidden', 'true');
    const inner = document.createElement('span');
    inner.className = 'w';
    inner.style.setProperty('--wi', String(i));
    inner.textContent = w;
    mask.appendChild(inner);
    el.appendChild(mask);
    if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
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
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0 }
);
document.querySelectorAll('[data-reveal], [data-split], [data-curtain]').forEach((el) => revealObs.observe(el));

/* ── Soft spotlight that follows the cursor on cards ── */
if (finePointer && !reduce) {
  document.querySelectorAll<HTMLElement>('[data-glow]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* ── Header: hide on scroll down, show on scroll up; progress bar ── */
const header = document.querySelector<HTMLElement>('.site-header');
const progress = document.querySelector<HTMLElement>('.progress');
const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
let lastY = window.scrollY;
let ticking = false;

const onScroll = () => {
  ticking = false;
  const y = window.scrollY;
  const vh = window.innerHeight;
  const max = document.documentElement.scrollHeight - vh;
  if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  if (header) {
    header.classList.toggle('is-scrolled', y > 8);
    if (y > 320 && y > lastY + 4) header.classList.add('is-hidden');
    else if (y < lastY - 4 || y < 320) header.classList.remove('is-hidden');
  }
  lastY = y;
  if (y < vh * 0.4) navLinks.forEach((a) => a.classList.remove('is-active'));

  // gentle parallax: element drifts by up to ±strength px as it crosses the viewport
  if (!reduce) {
    for (const el of parallax) {
      const r = el.parentElement!.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // −1 … 1
      const s = Number(el.dataset.parallax) || 24;
      el.style.transform = `translate3d(0, ${(p * s).toFixed(2)}px, 0) scale(1.08)`;
    }
  }
};
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true }
);

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

/* ── "On this page" scroll-spy (project pages) ── */
const tocLinks = new Map<string, HTMLElement>();
document.querySelectorAll<HTMLElement>('.toc a[href^="#"]').forEach((a) => {
  tocLinks.set(a.getAttribute('href')!.slice(1), a);
});
if (tocLinks.size) {
  const tocObs = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        tocLinks.forEach((a) => a.classList.remove('is-active'));
        tocLinks.get(entry.target.id)?.classList.add('is-active');
      }
    },
    { rootMargin: '-30% 0px -60% 0px' }
  );
  tocLinks.forEach((_, id) => {
    const s = document.getElementById(id);
    if (s) tocObs.observe(s);
  });
}

/* ── Work-in-progress note ── */
const wip = document.querySelector<HTMLElement>('.wip');
if (wip) {
  let dismissed = false;
  try { dismissed = sessionStorage.getItem('wip-dismissed') === '1'; } catch (e) {}
  if (!dismissed) setTimeout(() => wip.classList.add('is-shown'), reduce ? 0 : 2600);
  wip.querySelector('button')?.addEventListener('click', () => {
    wip.classList.remove('is-shown');
    try { sessionStorage.setItem('wip-dismissed', '1'); } catch (e) {}
  });
}

onScroll();
