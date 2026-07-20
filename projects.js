const CATEGORY_ALL = 'All';

const PROJECTS = [
  {
    id: 1,
    title: 'Public Information',
    image: 'projects/CloseLast.png',
    category: 'Full-Stack',
    details: 'A public-facing information platform for sharing sensitive resources through official, secure channels, inspired by education and accessibility initiatives such as IDEA (Individuals with Disabilities Education Act).',
    techStack: ['Tailwind CSS', 'Next.js', 'MongoDB', 'Node.js', 'Express'],
    live: 'https://public-information.netlify.app',
    source: 'https://github.com/tchasinga/web-page',
  },
  {
    id: 2,
    title: 'Paint Art',
    image: 'projects/DesignTwo.png',
    category: 'Front-end',
    details: 'A visual art showcase exploring painting as a creative medium, from pigments and canvas to technique, built as an API-driven gallery experience.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'APIs'],
    live: 'https://tchasinga.github.io/API-capstone-project/dist/',
    source: 'https://github.com/tchasinga/API-capstone-project',
  },
  {
    id: 3,
    title: 'Book Store',
    image: 'projects/DesignThree.png',
    category: 'Front-end',
    details: 'An online bookstore with system-level management features for browsing, organizing, and maintaining a catalog of books.',
    techStack: ['React.js', 'Redux', 'React Router', 'Tailwind CSS', 'APIs'],
    live: 'https://book-storing.onrender.com/',
    source: 'https://github.com/tchasinga/API-capstone-project',
  },
  {
    id: 4,
    title: 'Personal Blogs',
    image: 'projects/DesignFour.png',
    category: 'Front-end',
    details: 'A personal data and blogging platform focused on data security and organization, doubling as a lightweight to-do list manager.',
    techStack: ['React.js', 'APIs', 'CSS'],
    live: 'https://personalsblogsdata.netlify.app/',
    source: 'https://github.com/tchasinga/personal-blogs',
  },
  {
    id: 5,
    title: 'Workouts Management',
    image: 'projects/DesignFive.png',
    category: 'Full-Stack',
    details: 'A MERN-stack system for managing gym workouts and routines, handling scheduling, tracking, and day-to-day maintenance.',
    techStack: ['React', 'Tailwind CSS', 'MongoDB', 'Express', 'Node.js'],
    live: 'https://workours-management.onrender.com/',
    source: 'https://github.com/tchasinga/system-manager',
  },
  {
    id: 6,
    title: 'Stuff Seller',
    image: 'projects/ScreenshotStuff.png',
    category: 'E-commerce',
    details: 'An e-commerce marketplace for buying and selling goods, with product listings and secure data handling.',
    techStack: ['Material UI', 'Tailwind CSS', 'React.js', 'OOP'],
    live: 'https://stuff-seller.onrender.com/',
    source: 'https://github.com/tchasinga/e-comerce-site',
  },
  {
    id: 7,
    title: 'LandEstate',
    image: 'projects/ProjectsBGSeven.png',
    category: 'Full-Stack',
    details: 'A real estate platform for browsing and managing residential and commercial property listings, built to support community housing and infrastructure planning.',
    techStack: ['React.js', 'MongoDB', 'Node.js', 'Express', 'Firebase', 'Tailwind CSS'],
    live: 'https://landind-estate-service.onrender.com/',
    source: 'https://github.com/tchasinga/Real-Estate-house-Marketplace',
  },
  {
    id: 8,
    title: 'Blogs Sharing',
    image: 'projects/newScreenget.png',
    category: 'Full-Stack',
    details: 'A collaborative blogging platform where creators share thoughts, experiences, and insights across a wide range of topics.',
    techStack: ['React.js', 'MongoDB', 'Node.js', 'Express', 'Firebase', 'Tailwind CSS', 'Material UI'],
    live: 'https://blogs-sharing-ideas.onrender.com',
    source: 'https://github.com/tchasinga/sharing-ideas-blogs',
  },
  {
    id: 9,
    title: 'Space Travel Hub',
    image: 'projects/DesignOne.png',
    category: 'Front-end',
    details: 'A destination for space enthusiasts and travelers to explore cosmic adventures, built as a Space Travelers\u2019 Hub experience.',
    techStack: ['Redux', 'React.js', 'APIs', 'Tailwind CSS'],
    live: 'https://space-traveling.onrender.com',
    source: 'https://github.com/tchasinga/space-travelers',
  },
  {
    id: 10,
    title: 'Fitness Room',
    image: 'projects/ScreenshoooTen.png',
    category: 'Landing Pages',
    details: 'A home gym design and fitness planning experience, offering ideas for building an effective workout space without expensive equipment.',
    techStack: ['Next.js', 'Tailwind CSS', 'Animate.css', 'Swiper'],
    live: 'https://fitness-rooms.netlify.app/',
    source: 'https://github.com/tchasinga/gym-rooms',
  },
  {
    id: 11,
    title: 'Magazine Shopping',
    image: 'projects/magazineStuff.png',
    category: 'E-commerce',
    details: 'A magazine-style shopping experience where products are discovered through featured articles and curated recommendations.',
    techStack: ['Next.js', 'Tailwind CSS', 'Material UI', 'OOP', 'Framer Motion'],
    live: 'https://magazine-shopping.onrender.com/',
    source: 'https://github.com/tchasinga/magazine-shopping',
  },
  {
    id: 12,
    title: 'Calculator',
    image: 'projects/CalculatriceMathi.png',
    category: 'Utilities',
    details: 'A math calculator supporting standard arithmetic along with more advanced operations like square roots and function graphing.',
    techStack: ['React.js', 'Tailwind CSS', 'Material UI', 'OOP', 'Framer Motion'],
    live: 'https://math-6k4c.onrender.com/',
    source: 'https://github.com/tchasinga/math-magecianes',
  },
  {
    id: 13,
    title: 'React Native App',
    image: 'projects/NativePresent.png',
    category: 'Mobile',
    details: 'A cross-platform mobile experience built with React Native, combining native development with React\u2019s component-driven UI.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Anime.js'],
    live: 'https://native-present.netlify.app',
    source: 'https://github.com/tchasinga/native-present',
  },
  {
    id: 14,
    title: 'Single Page App',
    image: 'projects/AmIdisplayResponsive.png',
    category: 'Front-end',
    details: 'A responsive single-page application built with Next.js, demonstrating client-side rendering patterns within a server-rendered framework.',
    techStack: ['Next.js', 'APIs', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://masingle-pages.netlify.app',
    source: 'https://github.com/tchasinga/single-page',
  },
  {
    id: 15,
    title: 'Message App',
    image: 'projects/TchatAppKozeri.png',
    category: 'Full-Stack',
    details: 'A real-time chat application supporting live messaging between users, built with WebSocket-based communication.',
    techStack: ['React.js', 'Express', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Socket.io', 'MongoDB'],
    live: 'https://messagge-tchatting.onrender.com',
    source: 'https://github.com/tchasinga/messagge-tchatting',
  },
  {
    id: 16,
    title: 'Tech Developer Service',
    image: 'projects/TechSolving.png',
    category: 'Landing Pages',
    details: 'A service landing page offering expert guidance in software development, spanning web and mobile apps, cloud computing, and cybersecurity consulting.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://techsolve-ten.vercel.app',
    source: '',
  },
  {
    id: 17,
    title: 'Traveling Page',
    image: 'projects/Travllerpages.png',
    category: 'Landing Pages',
    details: 'An informative and inspirational travel website sharing stories and photographs from fascinating people and places around the world.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://travelpage-phi.vercel.app',
    source: '',
  },
  {
    id: 18,
    title: 'Sneaker Landing',
    image: 'projects/SnikerWeb.png',
    category: 'Landing Pages',
    details: 'A sleek sneaker showcase and landing page highlighting shoe collections with bold visuals and smooth product presentation.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://nikelanding-six.vercel.app',
    source: '',
  },
];

const CATEGORIES = [
  CATEGORY_ALL,
  'Full-Stack',
  'Front-end',
  'E-commerce',
  'Landing Pages',
  'Mobile',
  'Utilities',
];

function buildProjectsPromptSummary() {
  return PROJECTS.map((project, index) => {
    const techList = project.techStack.join(', ');
    const sourceInfo = project.source ? ` Source: ${project.source}.` : '';
    return `${index + 1}. ${project.title} (${project.category}) — ${project.details} Tech stack: ${techList}. Live: ${project.live}.${sourceInfo}`;
  }).join('\n');
}

window.PORTFOLIO_PROJECTS_SUMMARY = buildProjectsPromptSummary();
window.PORTFOLIO_PROJECTS_COUNT = PROJECTS.length;

const EYE_ICON_PATH = '<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>';
const CODE_ICON_PATH = '<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>';

const tabsEl = document.getElementById('projects-tabs');
const gridEl = document.getElementById('projects-grid');
const emptyStateEl = document.getElementById('projects-empty');
const modalEl = document.getElementById('project-modal');
const modalImage = document.getElementById('project-modal-image');
const modalTitle = document.getElementById('project-modal-title');
const modalDetails = document.getElementById('project-modal-details');
const modalTags = document.getElementById('project-modal-tags');
const modalSource = document.getElementById('project-modal-source');
const modalLive = document.getElementById('project-modal-live');
const modalCounter = document.getElementById('project-modal-counter');
const modalClose = document.getElementById('project-modal-close');
const modalPrev = document.getElementById('project-modal-prev');
const modalNext = document.getElementById('project-modal-next');

let activeCategory = CATEGORY_ALL;
let visibleProjects = PROJECTS;
let activeProjectIndex = null;

function tagBadge(tech) {
  return `<span class="rounded-md bg-surface-700/80 px-2.5 py-1 text-xs text-slate-400">${tech}</span>`;
}

function getProjectsForCategory(category) {
  return category === CATEGORY_ALL
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === category);
}

function renderTabs() {
  if (!tabsEl) return;

  tabsEl.innerHTML = '';

  CATEGORIES.forEach((category) => {
    const count = getProjectsForCategory(category).length;
    const isActive = category === activeCategory;

    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.category = category;
    button.className = isActive
      ? 'rounded-full bg-accent px-4 py-2 text-sm font-semibold text-surface-900 transition'
      : 'rounded-full border border-white/10 bg-surface-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-accent/40 hover:text-accent';
    button.textContent = `${category} (${count})`;
    button.addEventListener('click', () => setActiveCategory(category));

    tabsEl.appendChild(button);
  });
}

function setActiveCategory(category) {
  if (category === activeCategory) return;
  activeCategory = category;
  closeProjectModal();
  renderTabs();
  renderGrid();
}

function createProjectCard(project, index) {
  const article = document.createElement('article');
  article.className = 'project-card group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface-800 transition hover:border-accent/30';

  article.innerHTML = `
    <button type="button" class="relative block overflow-hidden" data-index="${index}" aria-label="View ${project.title} details">
      <img src="${project.image}" alt="${project.title}" class="h-48 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy">
      <span class="absolute inset-0 flex items-center justify-center gap-2 bg-surface-900/80 text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">${EYE_ICON_PATH}</svg>
        View Details
      </span>
    </button>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="cursor-pointer text-lg font-semibold text-white transition hover:text-accent" data-index="${index}">${project.title}</h3>
      <div class="mt-3 flex flex-wrap gap-2">${project.techStack.map(tagBadge).join('')}</div>
      <p class="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-400">${project.details}</p>
      <div class="mt-4 flex items-center gap-5 text-sm">
        ${project.source ? `<a href="${project.source}" target="_blank" rel="noreferrer" class="flex items-center gap-1.5 font-medium text-slate-300 transition hover:text-accent"><svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">${CODE_ICON_PATH}</svg>Source</a>` : ''}
        <a href="${project.live}" target="_blank" rel="noreferrer" class="flex items-center gap-1.5 font-medium text-slate-300 transition hover:text-accent"><svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">${EYE_ICON_PATH}</svg>Live Preview</a>
      </div>
    </div>
  `;

  return article;
}

function renderGrid() {
  if (!gridEl) return;

  visibleProjects = getProjectsForCategory(activeCategory);
  gridEl.innerHTML = '';

  if (emptyStateEl) {
    emptyStateEl.classList.toggle('hidden', visibleProjects.length > 0);
  }

  visibleProjects.forEach((project, index) => {
    gridEl.appendChild(createProjectCard(project, index));
  });

  gridEl.querySelectorAll('[data-index]').forEach((el) => {
    el.addEventListener('click', () => openProjectModal(Number(el.dataset.index)));
  });
}

function renderModalContent(index) {
  const project = visibleProjects[index];
  if (!project) return;

  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalTitle.textContent = project.title;
  modalDetails.textContent = project.details;
  modalTags.innerHTML = project.techStack.map(tagBadge).join('');
  modalCounter.textContent = `${index + 1} / ${visibleProjects.length}`;
  modalLive.href = project.live;

  if (project.source) {
    modalSource.href = project.source;
    modalSource.classList.remove('hidden');
  } else {
    modalSource.classList.add('hidden');
  }
}

function openProjectModal(index) {
  activeProjectIndex = index;
  renderModalContent(index);
  modalEl.classList.remove('hidden');
  modalEl.classList.add('flex');
  modalEl.setAttribute('aria-hidden', 'false');
  document.body.classList.add('overflow-hidden');
}

function closeProjectModal() {
  activeProjectIndex = null;
  modalEl.classList.add('hidden');
  modalEl.classList.remove('flex');
  modalEl.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('overflow-hidden');
}

function showPrevProject() {
  if (activeProjectIndex === null) return;
  activeProjectIndex = activeProjectIndex === 0 ? visibleProjects.length - 1 : activeProjectIndex - 1;
  renderModalContent(activeProjectIndex);
}

function showNextProject() {
  if (activeProjectIndex === null) return;
  activeProjectIndex = activeProjectIndex === visibleProjects.length - 1 ? 0 : activeProjectIndex + 1;
  renderModalContent(activeProjectIndex);
}

modalClose?.addEventListener('click', closeProjectModal);
modalPrev?.addEventListener('click', showPrevProject);
modalNext?.addEventListener('click', showNextProject);

modalEl?.addEventListener('click', (event) => {
  if (event.target === modalEl) closeProjectModal();
});

document.addEventListener('keydown', (event) => {
  if (activeProjectIndex === null) return;
  if (event.key === 'Escape') closeProjectModal();
  if (event.key === 'ArrowLeft') showPrevProject();
  if (event.key === 'ArrowRight') showNextProject();
});

renderTabs();
renderGrid();
