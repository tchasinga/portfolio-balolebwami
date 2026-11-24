const statement = "Full-stack developer — React, Next.js, Node.js, React Native";

export default function Marquee() {
  return (
    <section
      className="w-full overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      aria-label={statement}
    >
      <div className="infinity-track flex w-max">
        {[0, 1].map((duplicate) => (
          <p
            key={duplicate}
            aria-hidden="true"
            className="shrink-0 px-10 font-display text-6xl font-light tracking-tight whitespace-nowrap text-slate-700 sm:text-8xl dark:text-slate-200"
          >
            {statement}
            <span className="px-10 text-slate-300 dark:text-slate-600">/</span>
          </p>
        ))}
      </div>
    </section>
  );
}
