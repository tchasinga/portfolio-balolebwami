"use client";

const tags = ["React.js", "Next.js", "Node.js", "React Native"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100svh-8rem)] w-full max-w-7xl items-center justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e6e6e6_1px,transparent_1px),linear-gradient(to_bottom,#e6e6e6_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_72%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
      />
      <div className="relative mx-auto max-w-2xl py-20 text-center">
        <p className="text-sm tracking-[0.14em] text-slate-500 uppercase dark:text-slate-400">
          Full-Stack Developer
        </p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl dark:text-slate-50">
          Hi, I&apos;m Jack
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Full-stack developer with 5 years of experience, specializing in seamless user experiences by integrating front-end and back-end technologies. Based in Nairobi, Kenya.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-50 dark:border-white/15 dark:bg-transparent dark:text-slate-50 dark:hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
