const TYPED_ROLES = [
  'Full-Stack Developer',
  'React.js Developer',
  'Next.js Developer',
  'Node.js Developer',
  'React Native Developer',
  'UI/UX Enthusiast',
];

const typedEl = document.getElementById('typed-text');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');
const currentYearEl = document.getElementById('current-year');

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRoles() {
  if (!typedEl) return;

  const currentRole = TYPED_ROLES[roleIndex];
  const displayText = isDeleting
    ? currentRole.substring(0, charIndex - 1)
    : currentRole.substring(0, charIndex + 1);

  typedEl.textContent = displayText;

  if (!isDeleting) {
    charIndex += 1;
  } else {
    charIndex -= 1;
  }

  let delay = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % TYPED_ROLES.length;
    delay = 400;
  }

  setTimeout(typeRoles, delay);
}

function updateCurrentYear() {
  if (!currentYearEl) return;
  currentYearEl.textContent = new Date().getFullYear();
}

function setMobileMenuOpen(isOpen) {
  if (!mobileMenu || !menuToggle) return;

  mobileMenu.classList.toggle('hidden', !isOpen);
  menuIconOpen?.classList.toggle('hidden', isOpen);
  menuIconClose?.classList.toggle('hidden', !isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.contains('hidden');
    setMobileMenuOpen(Boolean(isOpen));
  });
}

document.querySelectorAll('.mobile-nav-link').forEach((link) => {
  link.addEventListener('click', () => setMobileMenuOpen(false));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.skill-card, .project-card').forEach((card) => {
  card.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700');
  observer.observe(card);
});

typeRoles();
updateCurrentYear();
