"use client";

import { useEffect, useId, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { IoArrowUp, IoClose } from "react-icons/io5";
import { SiGoogleassistant } from "react-icons/si";
import { model } from "../firebase";
import { PROJECTS, projectSummary } from "@/lib/projects";

gsap.registerPlugin(useGSAP);

const SUGGESTED_PROMPTS = [
  "What are Jack's main skills?",
  "Tell me about his projects",
  "Is Jack available for hire?",
];

function systemInstruction() {
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
- Additional: API Integration, UI/UX Design, OOP, AWS

Education:
Independent University of Kigali — Bachelor's in Electronics and Telecommunications (2019–2023). Focus areas included antenna installation, networking (Cisco Packet Tracer), Arduino projects, and two internships at SALTEL-COMPANY.

Certificate:
Microverse (7 months): backend and frontend development with strong focus on API integration.

Projects (${PROJECTS.length} total, grouped into categories: Full-Stack, Front-end, E-commerce, Landing Pages, Mobile, Utilities):
${projectSummary()}

When asked about a specific project, mention its category, tech stack, and live demo link (and source code link if available). When asked to list projects, you may group them by category for clarity. When asked for "all projects", list every one briefly with its live link.

Formatting rules:
- Do not use markdown symbols like **, *, #, or backticks.
- Use plain text only.
- Use short opening sentences, then structured lists with category labels.
- For lists, put each item on its own line starting with a hyphen and space, or use "Category: item1, item2" on one line per category.`;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function formatError(error) {
  const message = error?.message || String(error);
  const lower = message.toLowerCase();

  if (
    lower.includes("prepayment") ||
    lower.includes("credits are depleted") ||
    lower.includes("billing") ||
    lower.includes("429")
  ) {
    return "The AI service is out of credits. Add billing or prepaid credits in Google AI Studio, then try again.";
  }

  if (
    lower.includes("app check") ||
    lower.includes("appcheck") ||
    lower.includes("403") ||
    lower.includes("permission") ||
    lower.includes("attestation")
  ) {
    return "App Check blocked this request. On localhost, register the debug token in Firebase Console, then hard-refresh.";
  }

  return `Something went wrong: ${message}`;
}

export default function Assistant() {
  const panelId = useId();
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const chatRef = useRef(null);
  const panelRef = useRef(null);
  const launcherRef = useRef(null);
  const launcherIconRef = useRef(null);
  const launcherReady = useRef(false);
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const isClosingRef = useRef(false);
  const isMountedRef = useRef(true);

  useGSAP(
    () => {
      isMountedRef.current = true;
      const panel = panelRef.current;
      if (!open || !panel) return;

      const pieces = panel.querySelectorAll("[data-panel-piece]");
      if (prefersReducedMotion()) {
        gsap.set(panel, { autoAlpha: 1, y: 0, scale: 1 });
        return () => {
          isMountedRef.current = false;
        };
      }

      gsap.set(panel, { autoAlpha: 0, y: 16, scale: 0.96, transformOrigin: "bottom right" });
      gsap.set(pieces, { autoAlpha: 0, y: 8 });
      gsap
        .timeline()
        .to(panel, { autoAlpha: 1, y: 0, scale: 1, duration: 0.38, ease: "power3.out" })
        .to(pieces, { autoAlpha: 1, y: 0, duration: 0.28, stagger: 0.05, ease: "power2.out" }, 0.08);

      return () => {
        isMountedRef.current = false;
      };
    },
    { dependencies: [open], revertOnUpdate: true },
  );

  useGSAP(
    () => {
      const root = launcherIconRef.current;
      if (!root) return;
      const assistantIcon = root.querySelector("[data-launcher-icon='assistant']");
      const closeIcon = root.querySelector("[data-launcher-icon='close']");
      const instant = prefersReducedMotion() || !launcherReady.current;
      launcherReady.current = true;
      const motion = { duration: instant ? 0 : 0.35, ease: "power3.out", overwrite: "auto" };

      gsap.to(assistantIcon, {
        ...motion,
        autoAlpha: open ? 0 : 1,
        rotate: open ? -70 : 0,
        scale: open ? 0.6 : 1,
      });
      gsap.to(closeIcon, {
        ...motion,
        autoAlpha: open ? 1 : 0,
        rotate: open ? 0 : 70,
        scale: open ? 1 : 0.6,
      });
    },
    { dependencies: [open] },
  );

  function requestClose() {
    const panel = panelRef.current;
    if (!panel || isClosingRef.current) return;
    if (prefersReducedMotion()) {
      setOpen(false);
      launcherRef.current?.focus();
      return;
    }

    isClosingRef.current = true;
    gsap.to(panel, {
      autoAlpha: 0,
      y: 12,
      scale: 0.97,
      duration: 0.24,
      ease: "power2.inOut",
      onComplete: () => {
        isClosingRef.current = false;
        if (isMountedRef.current) {
          setOpen(false);
          launcherRef.current?.focus();
        }
      },
    });
  }

  function togglePanel() {
    if (isClosingRef.current) return;
    if (open) {
      requestClose();
      return;
    }
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    function onKeyDown(event) {
      if (event.key === "Escape") requestClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, open, error]);

  async function send(text) {
    const trimmed = text.trim();
    if (!trimmed || pending) return;

    const replyId = crypto.randomUUID();
    setInput("");
    setError("");
    setPending(true);
    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: "user", text: trimmed },
    ]);

    try {
      if (!model) {
        throw new Error("The assistant is only available in the browser.");
      }
      if (!chatRef.current) {
        chatRef.current = model.startChat({ systemInstruction: systemInstruction() });
      }

      const result = await chatRef.current.sendMessageStream(trimmed);
      let full = "";
      let started = false;

      for await (const chunk of result.stream) {
        const piece = chunk.text();
        if (!piece) continue;
        full += piece;
        if (!started) {
          started = true;
          setMessages((current) => [...current, { id: replyId, role: "model", text: full }]);
        } else {
          setMessages((current) =>
            current.map((message) =>
              message.id === replyId ? { ...message, text: full } : message,
            ),
          );
        }
      }

      if (!full) {
        setMessages((current) => [
          ...current,
          {
            id: replyId,
            role: "model",
            text: "Sorry, I could not generate a response. Please try again.",
          },
        ]);
      }
    } catch (err) {
      console.error(err);
      setError(formatError(err));
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      {open ? (
        <section
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-labelledby={titleId}
          aria-busy={pending}
          className="fixed right-6 bottom-24 z-40 flex w-[min(24rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-[#0c0e12]"
          style={{ height: "min(32rem, calc(100dvh - 9rem))" }}
        >
          <header
            data-panel-piece
            className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-white/10"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                <SiGoogleassistant className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs tracking-[0.14em] text-slate-500 uppercase dark:text-slate-400">
                  Jack Tchasinga
                </p>
                <h2
                  id={titleId}
                  className="font-display text-lg leading-tight font-medium text-slate-900 dark:text-slate-50"
                >
                  Ask about Jack
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={requestClose}
              aria-label="Close assistant"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
            >
              <IoClose className="h-5 w-5" />
            </button>
          </header>

          <div
            data-panel-piece
            className="flex flex-1 flex-col gap-3 overflow-y-auto bg-slate-50 px-4 py-4 dark:bg-white/[0.03]"
          >
            {messages.length === 0 ? (
              <div className="max-w-[88%] self-start rounded-[1.35rem] rounded-bl-md bg-white px-3.5 py-2.5 text-sm leading-relaxed text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.06)] dark:bg-[#24262a] dark:text-slate-100">
                Hi! I&apos;m Jack&apos;s AI assistant. Ask me about his skills, experience, projects, or how to get in touch.
              </div>
            ) : null}
            {messages.map((message) => {
              const isUser = message.role === "user";
              return (
                <div
                  key={message.id}
                  className={
                    isUser
                      ? "max-w-[88%] self-end rounded-[1.35rem] rounded-br-md bg-slate-900 px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap text-white dark:bg-white dark:text-slate-900"
                      : "max-w-[88%] self-start rounded-[1.35rem] rounded-bl-md bg-white px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.06)] dark:bg-[#24262a] dark:text-slate-100"
                  }
                >
                  {message.text}
                </div>
              );
            })}
            {pending && messages.at(-1)?.role === "user" ? (
              <p className="text-sm text-slate-500">Thinking...</p>
            ) : null}
            {error ? <p className="text-sm leading-relaxed text-red-600 dark:text-red-400">{error}</p> : null}
            {messages.length === 0 ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => send(prompt)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left text-xs text-slate-700 transition hover:bg-slate-100 dark:border-white/15 dark:bg-white/10 dark:text-slate-100"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            ) : null}
            <div ref={endRef} />
          </div>

          <form
            data-panel-piece
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-slate-200 p-3 dark:border-white/10"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask me anything..."
              aria-label="Message"
              className="h-10 min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 dark:border-white/15 dark:bg-transparent dark:text-slate-50 dark:focus:border-white/40"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={pending || input.trim().length === 0}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-800 disabled:opacity-40 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              <IoArrowUp className="h-5 w-5" />
            </button>
          </form>
        </section>
      ) : null}

      <button
        ref={launcherRef}
        type="button"
        aria-label={open ? "Close assistant" : "Open assistant"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={togglePanel}
        className="fixed right-6 bottom-6 z-40 inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_12px_40px_rgba(15,23,42,0.22)] transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        <span ref={launcherIconRef} className="relative h-6 w-6">
          <SiGoogleassistant data-launcher-icon="assistant" className="absolute inset-0 h-6 w-6" />
          <IoClose data-launcher-icon="close" className="absolute inset-0 h-6 w-6 opacity-0" />
        </span>
      </button>
    </>
  );
}
