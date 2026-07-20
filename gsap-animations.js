/* global gsap, ScrollTrigger, ScrollToPlugin */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HEADER_OFFSET = 80;
const REVEAL_DEFAULTS = {
  opacity: 0,
  y: 48,
  duration: 0.85,
  ease: 'power3.out',
};

let projectCardTriggers = [];

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();

      if (prefersReducedMotion()) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }

      gsap.to(window, {
        duration: 1.1,
        scrollTo: { y: target, offsetY: HEADER_OFFSET, autoKill: true },
        ease: 'power3.inOut',
      });
    });
  });
}

function initHeroAnimation() {
  const heroContent = document.querySelector('#home .relative.mx-auto > div');
  if (!heroContent) return;

  if (prefersReducedMotion()) {
    gsap.set(heroContent, { clearProps: 'all' });
    return;
  }

  gsap.from(heroContent.children, {
    opacity: 0,
    y: 36,
    duration: 0.9,
    stagger: 0.14,
    ease: 'power3.out',
    delay: 0.15,
  });
}

function revealOnScroll(selector, options = {}) {
  const elements = gsap.utils.toArray(selector);
  if (!elements.length) return;

  if (prefersReducedMotion()) {
    gsap.set(elements, { clearProps: 'all' });
    return;
  }

  const {
    stagger = 0,
    start = 'top 85%',
    trigger,
    y = REVEAL_DEFAULTS.y,
  } = options;

  gsap.from(elements, {
    ...REVEAL_DEFAULTS,
    y,
    stagger,
    scrollTrigger: {
      trigger: trigger || elements[0],
      start,
      toggleActions: 'play none none none',
    },
  });
}

function initSectionReveals() {
  revealOnScroll('#about .mb-12');
  revealOnScroll('#about .grid > *', { stagger: 0.12, trigger: '#about .grid' });

  revealOnScroll('#skills .mb-12');
  revealOnScroll('.skill-card', { stagger: 0.1, trigger: '#skills .grid' });

  revealOnScroll('#experience .mb-12');
  revealOnScroll('#experience .space-y-6 > article', {
    stagger: 0.14,
    trigger: '#experience .space-y-6',
  });
  revealOnScroll('#experience .mt-16 > article', {
    stagger: 0.14,
    trigger: '#experience .mt-16',
  });

  revealOnScroll('#projects .mb-12');
  revealOnScroll('#projects .mt-12', { y: 32 });

  revealOnScroll('#contact .rounded-3xl', { y: 40 });
}

function killProjectCardReveal() {
  projectCardTriggers.forEach((trigger) => trigger.kill());
  projectCardTriggers = [];
}

function initProjectCardReveal() {
  killProjectCardReveal();

  const cards = gsap.utils.toArray('.project-card');
  if (!cards.length) return;

  if (prefersReducedMotion()) {
    gsap.set(cards, { clearProps: 'all' });
    return;
  }

  projectCardTriggers = ScrollTrigger.batch('.project-card', {
    start: 'top 88%',
    onEnter: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y: 44,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        overwrite: true,
      });
    },
  });
}

function initScrollAnimations() {
  initSmoothScroll();
  initHeroAnimation();
  initSectionReveals();
  initProjectCardReveal();
}

window.initProjectCardReveal = initProjectCardReveal;
window.refreshScrollAnimations = () => ScrollTrigger.refresh();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}
