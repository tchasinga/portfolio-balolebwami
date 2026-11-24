"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const groups = [
  {
    id: "frontend",
    label: "Front-end",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Back-end",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["React Native", "Android", "iOS"],
  },
  {
    id: "database",
    label: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Appwrite", "Firebase"],
  },
  {
    id: "testing",
    label: "Testing & Tools",
    items: ["Jest", "Mocha", "Jasmine", "Cypress", "Git", "GitHub", "Figma", "Gemini AI"],
  },
  {
    id: "additional",
    label: "Additional",
    items: ["API Integration", "UI/UX Design", "OOP", "AWS"],
  },
];

export default function Skills() {
  const [active, setActive] = useState(groups[0].id);
  const current = groups.find((group) => group.id === active) ?? groups[0];
  const panelRef = useRef(null);
  const previousHeight = useRef(0);

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      const title = panel.querySelector("[data-technology-title]");
      const rows = panel.querySelectorAll("[data-technology-row]");
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set(panel, { height: "auto" });
      const nextHeight = panel.offsetHeight;
      const fromHeight = previousHeight.current;
      previousHeight.current = nextHeight;

      if (reduceMotion) return;

      if (fromHeight > 0 && fromHeight !== nextHeight) {
        gsap.fromTo(
          panel,
          { height: fromHeight },
          {
            height: nextHeight,
            duration: 0.45,
            ease: "power3.out",
            overwrite: "auto",
            onComplete: () => {
              gsap.set(panel, { height: "auto" });
            },
          },
        );
      }

      gsap.from([title, ...rows], {
        autoAlpha: 0,
        y: 14,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
      });
    },
    { dependencies: [current.id], scope: panelRef },
  );

  return (
    <section id="skills" className="w-full scroll-mt-28 px-6 py-16">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[30px] bg-gray-100 px-6 py-12 sm:px-10 sm:py-16 dark:bg-white/5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-56 w-80 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_at_top_right,black_35%,transparent_75%)] sm:h-64 sm:w-96 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
        />

        <div className="relative max-w-3xl">
          <p className="text-sm tracking-[0.14em] text-slate-500 uppercase dark:text-slate-400">
            Expertise
          </p>
          <h2 className="mt-4 font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl dark:text-slate-50">
            Skills & Technologies
          </h2>
          <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-slate-600 sm:text-2xl dark:text-slate-300">
            Front-end, back-end, mobile, databases, and the tools used to ship production applications.
          </p>
        </div>

        <div className="relative mt-12 grid items-start gap-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
          <div
            role="tablist"
            aria-label="Skills and technologies"
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {groups.map((group) => {
              const selected = group.id === current.id;

              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  id={`technology-tab-${group.id}`}
                  aria-selected={selected}
                  aria-controls="technology-panel"
                  onClick={() => setActive(group.id)}
                  className={`shrink-0 cursor-pointer rounded-full px-4 py-2.5 text-left text-sm transition lg:w-full lg:rounded-2xl ${
                    selected
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-white/10"
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>

          <div
            ref={panelRef}
            role="tabpanel"
            id="technology-panel"
            aria-labelledby={`technology-tab-${current.id}`}
            className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white dark:border-white/10 dark:bg-white/10"
          >
            <p
              data-technology-title
              className="border-b border-slate-200/80 px-6 py-5 font-display text-3xl font-medium tracking-tight text-slate-900 sm:px-8 dark:border-white/10 dark:text-slate-50"
            >
              {current.label}
            </p>
            <ul>
              {current.items.map((item, index) => (
                <li
                  key={item}
                  data-technology-row
                  className="flex items-baseline gap-4 border-b border-slate-200/80 px-6 py-5 last:border-b-0 sm:px-8 dark:border-white/10"
                >
                  <span className="w-8 shrink-0 font-display text-lg text-slate-400 dark:text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl tracking-tight text-slate-900 dark:text-slate-50">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
