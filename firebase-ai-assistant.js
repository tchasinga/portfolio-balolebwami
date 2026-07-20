import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js';
import { getAI, getGenerativeModel, GoogleAIBackend } from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-ai.js';
import { initializeAppCheck, ReCaptchaV3Provider } from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-app-check.js';

const MODEL_NAME = 'gemini-3.5-flash';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCn5llMfrZceHDfcqUhMy3k-Jby-AsozNE',
  authDomain: 'devservice-b0f39.firebaseapp.com',
  projectId: 'devservice-b0f39',
  storageBucket: 'devservice-b0f39.appspot.com',
  messagingSenderId: '542468977925',
  appId: '1:542468977925:web:81493ea8ac24460421b36c',
};

const PROJECTS_FALLBACK_TEXT = `1. LandEstate (Full-Stack) — real estate platform. Tech stack: React, Node.js, Express, MongoDB, Firebase, AWS, Tailwind CSS.
2. Blogs Sharing (Full-Stack) — blogging platform. Tech stack: React, Node.js, MongoDB, Redux, Firebase, Material UI, Tailwind CSS.
3. Gym Rooms (Landing Pages) — gym management app. Tech stack: Next.js, Tailwind CSS, shadcn/ui, APIs.`;

function getProjectsSection() {
  return (typeof window !== 'undefined' && window.PORTFOLIO_PROJECTS_SUMMARY)
    ? window.PORTFOLIO_PROJECTS_SUMMARY
    : PROJECTS_FALLBACK_TEXT;
}

function getProjectsCount() {
  return (typeof window !== 'undefined' && window.PORTFOLIO_PROJECTS_COUNT) || 3;
}

function buildSystemInstruction() {
  return `You are the official portfolio assistant for Tchasinga Balolebwami Jack, a full-stack developer based in Nairobi, Kenya. You represent Jack to recruiters, clients, and collaborators.

Voice and style:
- Professional, confident, and polished — like a skilled recruiter or executive assistant.
- Always give complete answers. Never stop mid-sentence or leave a list unfinished.
- Be concise but thorough: answer the full question in one response when possible.
- Do not ask follow-up questions unless the visitor's request is genuinely unclear.
- Do not say "Here is the list" or "Great question" — get straight to the answer.
- End with a brief, professional closing only when relevant (e.g. offering contact details for hiring inquiries).

Use only the information below. If something is not covered, say you do not have that information and direct the visitor to tchasingajacques@gmail.com or +(254) 700 51 245.

Profile:
- Full name: Tchasinga Balolebwami Jack
- Role: Full-stack developer with 5 years of experience
- Location: Nairobi, Kenya
- Languages: French, English, Swahili, Lingala
- Email: tchasingajacques@gmail.com
- Phone: +(254) 700 51 245

Summary:
Jack delivers seamless user experiences by integrating front-end and back-end technologies. He is passionate about web development and building production-ready applications.

Experience:
1. Mentor (May–Nov 2023): Guided 5 junior developers with code reviews and code quality improvements.
2. Full-Stack Developer Volunteer (Feb–Nov 2023): Led full-stack projects using Node.js, Next.js, and React; contributed ~90 hours weekly.

Skills:
- Front-end: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS
- Back-end: Node.js, Express, NestJS
- Mobile: React Native (Android and iOS)
- Databases: MySQL, PostgreSQL, MongoDB, Appwrite, Firebase
- Testing: Jest, Mocha, Jasmine, Cypress
- Tools: Git, GitHub, Figma, Gemini AI

Education:
Independent University of Kigali — Bachelor's in Electronics and Telecommunications (2019–2023). Focus areas included antenna installation, networking (Cisco Packet Tracer), Arduino projects, and two internships at SALTEL-COMPANY.

Certificate:
Microverse (7 months): backend and frontend development with strong focus on API integration.

Projects (${getProjectsCount()} total, grouped into categories: Full-Stack, Front-end, E-commerce, Landing Pages, Mobile, Utilities):
${getProjectsSection()}

When asked about a specific project, mention its category, tech stack, and live demo link (and source code link if available). When asked to list projects, you may group them by category for clarity. When asked for "all projects", list every one briefly with its live link.

Example — when asked "What are Jack's main skills?", respond like this:

Jack is a full-stack developer with expertise across the following areas:

Front-end: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS
Back-end: Node.js, Express, NestJS
Mobile: React Native for Android and iOS
Databases: MySQL, PostgreSQL, MongoDB, Appwrite, Firebase
Testing: Jest, Mocha, Jasmine, Cypress
Tools: Git, GitHub, Figma, Gemini AI

He combines these skills to build scalable, user-focused web and mobile applications. For collaboration or hiring inquiries, reach Jack at tchasingajacques@gmail.com.

Formatting rules:
- Do not use markdown symbols like **, *, #, or backticks.
- Use plain text only.
- Use short opening sentences, then structured lists with category labels.
- For lists, put each item on its own line starting with a hyphen and space, or use "Category: item1, item2" on one line per category.`;
}

const SUGGESTED_PROMPTS = [
  'What are Jack\'s main skills?',
  'Tell me about his projects',
  'Is Jack available for hire?',
];

const launcher = document.getElementById('ai-launcher');
const panel = document.getElementById('ai-panel');
const closeBtn = document.getElementById('ai-close');
const messagesEl = document.getElementById('ai-messages');
const form = document.getElementById('ai-form');
const input = document.getElementById('ai-input');
const sendBtn = document.getElementById('ai-send');
const suggestionsEl = document.getElementById('ai-suggestions');
const statusEl = document.getElementById('ai-status');

let chat = null;
let isOpen = false;
let isSending = false;

function isLocalhost() {
  return location.hostname === 'localhost' || location.hostname === '127.0.0.1';
}

function setupAppCheck(app) {
  const recaptchaSiteKey = document.body.dataset.recaptchaSiteKey;
  if (!recaptchaSiteKey) {
    if (isLocalhost()) {
      console.info(
        'App Check: add data-recaptcha-site-key to <body> for local testing, then register the debug token shown in the browser console.'
      );
    }
    return;
  }

  if (isLocalhost()) {
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(recaptchaSiteKey),
    isTokenAutoRefreshEnabled: true,
  });
}

function createModel(ai) {
  const model = getGenerativeModel(ai, {
    model: MODEL_NAME,
    systemInstruction: buildSystemInstruction(),
    generationConfig: {
      temperature: 0.4,
    },
  });

  return model.startChat({ history: [] });
}

function ensureChat() {
  if (chat) return chat;

  const app = initializeApp(FIREBASE_CONFIG);
  setupAppCheck(app);

  const ai = getAI(app, { backend: new GoogleAIBackend() });
  chat = createModel(ai);
  return chat;
}

function setStatus(message, isError = false) {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.classList.toggle('text-red-400', isError);
  statusEl.classList.toggle('text-slate-500', !isError);
}

function scrollMessagesToBottom() {
  if (!messagesEl) return;
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function applyInlineFormatting(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
    .replace(/__(.+?)__/g, '<strong class="font-semibold text-white">$1</strong>');
}

function formatAssistantText(text) {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const parts = [];
  let inList = false;

  const closeList = () => {
    if (inList) {
      parts.push('</ul>');
      inList = false;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    const bulletMatch = trimmed.match(/^[-*]\s+(.+)$/);
    const numberedMatch = trimmed.match(/^\d+\.\s+(.+)$/);

    if (bulletMatch) {
      if (!inList) {
        parts.push('<ul class="my-2 space-y-1.5 pl-4">');
        inList = true;
      }
      parts.push(`<li class="list-disc marker:text-accent">${applyInlineFormatting(escapeHtml(bulletMatch[1]))}</li>`);
      return;
    }

    if (numberedMatch) {
      closeList();
      parts.push(`<p class="mb-2 last:mb-0 pl-1"><span class="font-medium text-accent">${escapeHtml(trimmed.split(' ')[0])}</span> ${applyInlineFormatting(escapeHtml(numberedMatch[1]))}</p>`);
      return;
    }

    closeList();

    if (!trimmed) {
      return;
    }

    parts.push(`<p class="mb-2 last:mb-0">${applyInlineFormatting(escapeHtml(trimmed))}</p>`);
  });

  closeList();
  return parts.join('') || '<p class="mb-0">...</p>';
}

function setAssistantBubbleContent(bubble, text) {
  bubble.innerHTML = formatAssistantText(text);
}

function renderTypingText(bubble, text, showCursor) {
  const cursor = showCursor
    ? '<span class="inline-block h-4 w-[3px] align-middle bg-accent animate-pulse ml-0.5"></span>'
    : '';
  bubble.innerHTML = escapeHtml(text).replace(/\n/g, '<br>') + cursor;
}

function createTypingIndicator() {
  const dots = document.createElement('div');
  dots.className = 'flex items-center gap-1.5 py-1';
  dots.setAttribute('aria-label', 'Assistant is typing');
  for (let i = 0; i < 3; i += 1) {
    const dot = document.createElement('span');
    dot.className = 'h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce';
    dot.style.animationDelay = `${i * 0.12}s`;
    dots.appendChild(dot);
  }
  return dots;
}

function createMessageElement(role, text) {
  const wrapper = document.createElement('div');
  wrapper.className = role === 'user' ? 'flex justify-end' : 'flex justify-start';

  const bubble = document.createElement('div');
  bubble.className = role === 'user'
    ? 'max-w-[85%] rounded-2xl rounded-br-md bg-accent px-4 py-2.5 text-sm font-medium text-surface-900'
    : 'max-w-[90%] rounded-2xl rounded-bl-md border border-white/10 bg-surface-700 px-4 py-3 text-sm leading-relaxed text-slate-200';

  if (role === 'assistant') {
    if (text) {
      setAssistantBubbleContent(bubble, text);
    } else {
      bubble.appendChild(createTypingIndicator());
    }
  } else {
    bubble.textContent = text;
  }

  wrapper.appendChild(bubble);
  return { wrapper, bubble };
}

function appendMessage(role, text) {
  const { wrapper } = createMessageElement(role, text);
  messagesEl.appendChild(wrapper);
  scrollMessagesToBottom();
  return wrapper;
}

function setPanelOpen(open) {
  isOpen = open;
  panel.classList.toggle('hidden', !open);
  panel.classList.toggle('flex', open);
  panel.setAttribute('aria-hidden', String(!open));
  launcher.setAttribute('aria-expanded', String(open));

  if (open) {
    ensureChat();
    input.focus();
    suggestionsEl.classList.remove('hidden');
  }
}

function setSendingState(sending) {
  isSending = sending;
  input.disabled = sending;
  sendBtn.disabled = sending;
  sendBtn.classList.toggle('opacity-50', sending);
}

function hideSuggestions() {
  suggestionsEl.classList.add('hidden');
}

function renderSuggestions() {
  suggestionsEl.innerHTML = '';
  SUGGESTED_PROMPTS.forEach((prompt) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'rounded-full border border-white/10 bg-surface-700 px-3 py-1.5 text-left text-xs text-slate-300 transition hover:border-accent/40 hover:text-accent';
    button.textContent = prompt;
    button.addEventListener('click', () => {
      input.value = prompt;
      form.requestSubmit();
    });
    suggestionsEl.appendChild(button);
  });
}

const TYPE_TICK_MS = 50;

function computeTypeStep(knownLength) {
  return Math.min(6, Math.max(2, Math.round(knownLength / 60)));
}

async function sendMessage(message) {
  const trimmed = message.trim();
  if (!trimmed || isSending) return;

  hideSuggestions();
  appendMessage('user', trimmed);
  input.value = '';
  setSendingState(true);
  setStatus('Thinking...');

  const assistantWrapper = appendMessage('assistant', '');
  const assistantBubble = assistantWrapper.querySelector('div');

  let targetText = '';
  let revealedLength = 0;
  let streamDone = false;
  let hasRenderedFirstChunk = false;
  let typeIntervalId = null;

  const finishTyping = (isError) => {
    if (typeIntervalId) {
      clearInterval(typeIntervalId);
      typeIntervalId = null;
    }
    setSendingState(false);
    setStatus(isError ? 'Unable to reach the AI service.' : '', isError);
  };

  const revealTick = () => {
    if (revealedLength < targetText.length) {
      const step = computeTypeStep(targetText.length);
      revealedLength = Math.min(targetText.length, revealedLength + step);
      renderTypingText(assistantBubble, targetText.slice(0, revealedLength), true);
      scrollMessagesToBottom();
    } else if (streamDone) {
      setAssistantBubbleContent(assistantBubble, targetText);
      scrollMessagesToBottom();
      finishTyping(false);
    }
  };

  try {
    const activeChat = ensureChat();
    const result = await activeChat.sendMessageStream(trimmed);

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      if (!chunkText) continue;

      if (!hasRenderedFirstChunk) {
        hasRenderedFirstChunk = true;
        setStatus('Typing...');
        typeIntervalId = setInterval(revealTick, TYPE_TICK_MS);
      }

      targetText += chunkText;
    }

    streamDone = true;

    if (!targetText) {
      assistantBubble.textContent = 'Sorry, I could not generate a response. Please try again.';
      finishTyping(false);
    }
  } catch (error) {
    console.error('AI assistant error:', error);
    streamDone = true;
    assistantBubble.textContent = 'Something went wrong. If you are testing locally, register your App Check debug token in the Firebase console.';
    finishTyping(true);
  }
}

launcher?.addEventListener('click', () => setPanelOpen(!isOpen));
closeBtn?.addEventListener('click', () => setPanelOpen(false));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isOpen) {
    setPanelOpen(false);
  }
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  sendMessage(input.value);
});

renderSuggestions();
setStatus('Powered by Firebase AI');
