const facts = [
  { label: "Location", value: "Nairobi, Kenya" },
  { label: "Languages", value: "French, English, Swahili, Lingala" },
  { label: "Experience", value: "5 years" },
];

export default function About() {
  return (
    <section id="about" className="w-full scroll-mt-28 px-6 py-16">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between overflow-hidden rounded-[30px] bg-gray-100 px-6 py-12 sm:px-10 sm:py-16 dark:bg-white/5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_72%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
        />

        <div className="relative max-w-3xl">
          <p className="text-sm tracking-[0.14em] text-slate-500 uppercase dark:text-slate-400">
            About Me
          </p>
          <h2 className="mt-4 font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl dark:text-slate-50">
            Tchasinga Balolebwami Jack
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-600 sm:text-2xl dark:text-slate-300">
            I&apos;m Jack, a full-stack developer with 5 years of experience, specializing in delivering seamless user experiences by integrating front-end and back-end technologies. I&apos;m driven by a passion for excellence in web development and eager to contribute to innovative teams building cutting-edge web applications.
          </p>
        </div>

        <div className="relative mt-16 grid gap-4 md:grid-cols-3">
          {facts.map((fact, index) => (
            <article
              key={fact.label}
              className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/10"
            >
              <p className="font-display text-2xl text-slate-400 dark:text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-50">
                {fact.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {fact.value}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
