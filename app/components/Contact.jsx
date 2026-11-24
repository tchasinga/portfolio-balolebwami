import {
  IoCallOutline,
  IoDocumentTextOutline,
  IoLogoGithub,
  IoMailOutline,
} from "react-icons/io5";

const links = [
  {
    key: "email",
    label: "Email",
    value: "tchasingajacques@gmail.com",
    href: "mailto:tchasingajacques@gmail.com",
    icon: IoMailOutline,
  },
  {
    key: "phone",
    label: "Phone",
    value: "+(254) 700 51 245",
    href: "tel:+25470051245",
    icon: IoCallOutline,
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/tchasinga",
    icon: IoLogoGithub,
    external: true,
  },
  {
    key: "resume",
    label: "Resume",
    href: "https://drive.google.com/file/d/1HAJUJcNS-qyBjaewJBWej609u7fny0OB/view?usp=sharing",
    icon: IoDocumentTextOutline,
    external: true,
  },
];

const notes = [
  {
    title: "Location",
    text: "Based in Nairobi, Kenya, and open to full-time roles, freelance projects, and collaborations.",
  },
  {
    title: "Experience",
    text: "Five years building production web and mobile applications across front-end and back-end.",
  },
  {
    title: "Languages",
    text: "French, English, Swahili, and Lingala.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full scroll-mt-28 px-6 py-16">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[30px] bg-gray-100 px-6 py-12 sm:px-10 sm:py-16 dark:bg-white/5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-56 w-80 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_at_top_right,black_35%,transparent_75%)] sm:h-64 sm:w-96 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
        />

        <div className="relative grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
          <div>
            <p className="text-sm tracking-[0.14em] text-slate-500 uppercase dark:text-slate-400">
              Get In Touch
            </p>
            <h2 className="mt-4 max-w-xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl dark:text-slate-50">
              Let&apos;s build something great
            </h2>
            <p className="mt-6 max-w-xl text-xl font-light leading-relaxed text-slate-600 sm:text-2xl dark:text-slate-300">
              I&apos;m open to full-time roles, freelance projects, and collaborations. Reach out and let&apos;s talk.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white lg:row-span-2 dark:border-white/10 dark:bg-white/10">
            {links.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.key}
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex min-w-0 items-center gap-4 border-b border-slate-200/80 px-5 py-5 text-slate-900 transition last:border-b-0 hover:bg-slate-50 dark:border-white/10 dark:text-slate-50 dark:hover:bg-white/10"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    <Icon aria-hidden="true" className="text-xl" />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={
                        item.value
                          ? "block text-sm text-slate-500 dark:text-slate-400"
                          : "block text-base"
                      }
                    >
                      {item.label}
                    </span>
                    {item.value ? (
                      <span className="mt-0.5 block break-words text-base">{item.value}</span>
                    ) : null}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
            {notes.map((note) => (
              <article
                key={note.title}
                className="border-t border-slate-300/80 pt-5 dark:border-white/15"
              >
                <h3 className="font-display text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-50">
                  {note.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {note.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
