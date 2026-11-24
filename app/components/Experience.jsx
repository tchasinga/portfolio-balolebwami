"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IoChevronDownOutline } from "react-icons/io5";

const CIRCLE_COUNT = 30;
const CIRCLE_RADIUS = 20;

const numberPaths = [
  "M87.9,79.2c1.1-0.4,53.7-39.2,54.9-39.1v180.5",
  "M81.7,85.7c-1.4-67,112.3-55.1,90.2,11.6c-12.6,32-70.6,83.7-88.8,113.7h105.8",
  "M74.8,178.5c3,39.4,63.9,46.7,88.6,23.7c34.3-35.1,5.4-75.8-41.7-77c29.9,5.5,68.7-43.1,36.5-73.7 c-23.4-21.5-76.5-11.1-78.6,25",
  "M161.9,220.8 161.9,41 72.6,170.9 208.2,170.9",
];

const steps = [
  {
    number: "01",
    name: "Mentor",
    meta: "Junior Developer Team Lead · May – Nov 2023",
    description:
      "Guided a team of 5 junior developers, providing code reviews and optimizing code quality across multiple projects.",
  },
  {
    number: "02",
    name: "Full-Stack Developer (Volunteer)",
    meta: "Open Source & Community Projects · Feb – Nov 2023",
    description:
      "Led full-stack projects using Node.js, Next.js, and React. Contributed 90 hours weekly to deliver production-ready web applications.",
  },
  {
    number: "03",
    name: "Bachelor's in Electronics & Telecommunications",
    meta: "Independent University of Kigali · 2019 – 2023",
    description:
      "Antenna installation and networking (Cisco Packet Tracer). Arduino Uno projects and C programming. Two internships at SALTEL-COMPANY in electronics, networking, and antenna technology.",
  },
  {
    number: "04",
    name: "Microverse — Remote Studying",
    meta: "Certificate",
    description:
      "Spent 7 months mastering key programming concepts in both backend and frontend development, with a strong focus on API integration and manipulation.",
  },
];

export default function Experience() {
  const [index, setIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = svg?.querySelectorAll("path")[index];
    if (!svg || !path) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const length = path.getTotalLength();
    const distance = length / CIRCLE_COUNT;
    const circles = svg.querySelectorAll("circle");
    const tweens = [];

    circles.forEach((circle, i) => {
      const point = path.getPointAtLength(i * distance);
      tweens.push(
        gsap.to(circle, {
          attr: { cx: point.x, cy: point.y },
          duration: reduce ? 0 : 0.35,
          delay: reduce ? 0 : i * 0.025,
          ease: "power2.out",
          overwrite: "auto",
        }),
      );
    });

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, [index]);

  function selectStep(next) {
    if (next === openIndex) {
      setOpenIndex(null);
      return;
    }

    setOpenIndex(next);
    setIndex(next);
  }

  return (
    <section id="experience" className="w-full scroll-mt-28 bg-background px-6 py-16 text-foreground">
      <div className="mx-auto mb-14 w-full max-w-7xl">
        <p className="text-sm tracking-[0.14em] text-slate-500 uppercase dark:text-slate-400">
          Career
        </p>
        <h2 className="mt-4 font-display text-5xl font-medium tracking-tight sm:text-6xl">
          Experience & Activities
        </h2>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed font-light sm:text-2xl">
          Mentorship, volunteer product work, a bachelor&apos;s degree, and a Microverse certificate.
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-5 md:grid-rows-5 md:gap-4">
        <div className="flex items-center md:col-span-2 md:row-span-4">
          <svg
            ref={svgRef}
            viewBox="0 0 256 256"
            aria-hidden="true"
            className="h-auto w-full max-w-md dark:invert"
          >
            <defs>
              <filter id="working-process-goo" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15"
                  result="goo"
                />
              </filter>
            </defs>
            <g>
              {numberPaths.map((d) => (
                <path key={d} d={d} className="hidden" />
              ))}
            </g>
            <g filter="url(#working-process-goo)">
              {Array.from({ length: CIRCLE_COUNT }, (_, i) => (
                <circle key={i} cx="128" cy="128" r={CIRCLE_RADIUS} fill="currentColor" />
              ))}
            </g>
          </svg>
        </div>

        <div className="w-full self-center border-t border-black/15 md:col-span-3 md:col-start-3 md:row-span-4 dark:border-white/15">
          {steps.map((step, i) => {
            const selected = i === openIndex;

            return (
              <div key={step.number} className="border-b border-black/15 dark:border-white/15">
                <button
                  type="button"
                  aria-expanded={selected}
                  onClick={() => selectStep(i)}
                  className="flex w-full items-center justify-between gap-6 py-4 text-left"
                >
                  <span className="text-base sm:text-lg">
                    <span className="mr-3 font-display text-slate-400">{step.number}</span>
                    {step.name}
                  </span>
                  <IoChevronDownOutline
                    aria-hidden="true"
                    className={`shrink-0 text-xl transition-transform duration-300 ease-out ${
                      selected ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: selected ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-slate-500 dark:text-slate-400">{step.meta}</p>
                    <p className="max-w-2xl pt-2 pb-4 text-sm leading-relaxed text-black/70 sm:text-base dark:text-white/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
