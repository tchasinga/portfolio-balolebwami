"use client";

import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CATEGORIES, PROJECTS } from "@/lib/projects";

function projectsFor(category) {
  return category === "All"
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === category);
}

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);
  const visible = projectsFor(category);
  const active = activeIndex === null ? null : visible[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return undefined;

    function onKeyDown(event) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === 0 ? visible.length - 1 : current - 1,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === visible.length - 1 ? 0 : current + 1,
        );
      }
    }

    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, visible.length]);

  return (
    <section id="projects" className="w-full scroll-mt-28 px-6 py-16">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[30px] bg-gray-100 px-6 py-12 sm:px-10 sm:py-16 dark:bg-white/5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-56 w-80 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_at_top_right,black_35%,transparent_75%)] sm:h-64 sm:w-96 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
        />

        <div className="relative max-w-3xl">
          <p className="text-sm tracking-[0.14em] text-slate-500 uppercase dark:text-slate-400">
            Portfolio
          </p>
          <h2 className="mt-4 font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl dark:text-slate-50">
            Featured Projects
          </h2>
          <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-slate-600 sm:text-2xl dark:text-slate-300">
            Most recent work
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Project categories"
          className="relative mt-10 flex gap-2 overflow-x-auto pb-1"
        >
          {CATEGORIES.map((item) => {
            const selected = item === category;
            const count = projectsFor(item).length;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setCategory(item);
                  setActiveIndex(null);
                }}
                className={`shrink-0 cursor-pointer rounded-full px-4 py-2.5 text-sm transition ${
                  selected
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-white/10"
                }`}
              >
                {item} ({count})
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <p className="relative py-16 text-center text-sm text-slate-500">
            No projects in this category yet.
          </p>
        ) : (
          <div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, index) => (
              <article
                key={project.id}
                className="flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/10"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative block overflow-hidden text-left"
                  aria-label={`View ${project.title} details`}
                >
                  <img
                    src={`/${project.image}`}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="text-left font-display text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-50"
                  >
                    {project.title}
                  </button>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {project.category}
                  </p>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.details}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-4 text-sm">
                    {project.source ? (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-200"
                      >
                        Source
                      </a>
                    ) : null}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-200"
                    >
                      Live Preview
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="relative mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-slate-900 px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8 dark:bg-white dark:text-slate-900">
          <h3 className="font-display text-2xl font-medium tracking-tight">
            Interested in working with me?
          </h3>
          <a
            href="mailto:tchasingajacques@gmail.com"
            className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            Mail Me
          </a>
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Project details"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[30px] border border-slate-200 bg-white dark:border-white/10 dark:bg-[#0c0e12]">
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => setActiveIndex(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 text-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
            >
              <IoClose className="h-5 w-5" />
            </button>
            <div className="grid md:grid-cols-2">
              <img
                src={`/${active.image}`}
                alt={active.title}
                className="h-64 w-full object-cover md:h-full"
              />
              <div className="flex flex-col p-6 sm:p-8">
                <p className="text-sm tracking-[0.14em] text-slate-500 uppercase">
                  {active.category}
                </p>
                <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50">
                  {active.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {active.details}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-5 text-sm">
                  {active.source ? (
                    <a
                      href={active.source}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-slate-700 dark:text-slate-200"
                    >
                      Source Code
                    </a>
                  ) : null}
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-slate-700 dark:text-slate-200"
                  >
                    Live Preview
                  </a>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === 0 ? visible.length - 1 : current - 1,
                      )
                    }
                    className="text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Previous
                  </button>
                  <span className="text-xs text-slate-500">
                    {activeIndex + 1} / {visible.length}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === visible.length - 1 ? 0 : current + 1,
                      )
                    }
                    className="text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
