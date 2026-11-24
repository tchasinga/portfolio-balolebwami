"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { IoClose, IoMenuOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "./useTheme";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const resumeHref =
  "https://drive.google.com/file/d/1HAJUJcNS-qyBjaewJBWej609u7fny0OB/view?usp=sharing";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function navScrollOffset(nav) {
  if (!nav) return 112;
  return Math.ceil(nav.getBoundingClientRect().height) + 16;
}

function animateWindowScroll(top) {
  const destination = Math.max(0, top);
  gsap.killTweensOf(window);

  if (prefersReducedMotion()) {
    window.scrollTo(0, destination);
    return;
  }

  const distance = Math.abs(window.scrollY - destination);
  if (distance < 8) return;

  gsap.to(window, {
    duration: gsap.utils.clamp(0.9, 1.45, distance / 1400),
    ease: "power3.out",
    overwrite: true,
    scrollTo: { y: destination, autoKill: true },
  });
}

function scrollToSection(hash, nav, { fromTop = false } = {}) {
  if (fromTop) window.scrollTo(0, 0);
  if (!hash) {
    animateWindowScroll(0);
    return true;
  }

  const section = document.getElementById(hash);
  if (!section) return false;

  const top = section.getBoundingClientRect().top + window.scrollY - navScrollOffset(nav);
  animateWindowScroll(top);
  return true;
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const navShellRef = useRef(null);
  const pendingHash = useRef(null);
  const themeIconRef = useRef(null);
  const themeIconReady = useRef(false);
  const wordmarkRef = useRef(null);
  const wordmarkReady = useRef(false);
  const navMenuRef = useRef(null);
  const isClosingNavRef = useRef(false);
  const isNavMountedRef = useRef(true);

  useGSAP(
    () => {
      const root = themeIconRef.current;
      if (!root) return;

      const sun = root.querySelector("[data-theme-icon='sun']");
      const moon = root.querySelector("[data-theme-icon='moon']");
      const instant = prefersReducedMotion() || !themeIconReady.current;
      themeIconReady.current = true;

      const motion = {
        duration: instant ? 0 : 0.45,
        ease: "power3.out",
        overwrite: "auto",
      };

      gsap.to(sun, {
        ...motion,
        autoAlpha: isDark ? 0 : 1,
        rotate: isDark ? -80 : 0,
        scale: isDark ? 0.55 : 1,
      });
      gsap.to(moon, {
        ...motion,
        autoAlpha: isDark ? 1 : 0,
        rotate: isDark ? 0 : 80,
        scale: isDark ? 1 : 0.55,
      });
    },
    { dependencies: [isDark] },
  );

  useGSAP(
    () => {
      const root = wordmarkRef.current;
      if (!root) return;

      const full = root.querySelector("[data-wordmark='full']");
      const mark = root.querySelector("[data-wordmark='mark']");
      if (!full || !mark) return;

      const instant = prefersReducedMotion() || !wordmarkReady.current;
      wordmarkReady.current = true;

      const play = (immediate) => {
        const motion = {
          duration: immediate ? 0 : 0.55,
          ease: "power3.inOut",
          overwrite: "auto",
        };

        gsap.to(root, {
          ...motion,
          width: isScrolled ? mark.offsetWidth : full.offsetWidth,
        });
        gsap.to(full, {
          ...motion,
          autoAlpha: isScrolled ? 0 : 1,
          x: isScrolled ? -18 : 0,
          scale: isScrolled ? 0.92 : 1,
          transformOrigin: "left center",
        });
        gsap.to(mark, {
          ...motion,
          autoAlpha: isScrolled ? 1 : 0,
          x: isScrolled ? 0 : 14,
          scale: isScrolled ? 1 : 0.72,
          rotate: isScrolled ? 0 : -10,
          transformOrigin: "left center",
        });
      };

      play(instant);
      const onResize = () => play(true);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    },
    { dependencies: [isScrolled] },
  );

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 24) {
        setIsScrolled(false);
        return;
      }

      const y = window.scrollY;
      const atTop = y <= 24;
      const atBottom = y >= maxScroll - 48;
      setIsScrolled((current) => {
        if (atBottom) return true;
        if (atTop) return false;
        return current;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useGSAP(
    () => {
      isNavMountedRef.current = true;
      const menu = navMenuRef.current;
      if (!isOpenMenu || !menu) return;

      const links = menu.querySelectorAll("[data-nav-link]");
      if (prefersReducedMotion()) {
        gsap.set(menu, { autoAlpha: 1, y: 0 });
        gsap.set(links, { autoAlpha: 1, y: 0 });
        return () => {
          isNavMountedRef.current = false;
        };
      }

      gsap.set(menu, { autoAlpha: 0, y: 8 });
      gsap.set(links, { autoAlpha: 0, y: 6 });

      gsap
        .timeline()
        .to(menu, { autoAlpha: 1, y: 0, duration: 0.32, ease: "power3.out" })
        .to(
          links,
          { autoAlpha: 1, y: 0, duration: 0.24, stagger: 0.04, ease: "power2.out" },
          0.06,
        );

      return () => {
        isNavMountedRef.current = false;
      };
    },
    { dependencies: [isOpenMenu], revertOnUpdate: true },
  );

  const closeNavMenu = () => {
    const menu = navMenuRef.current;
    if (!menu || isClosingNavRef.current) return;

    isClosingNavRef.current = true;
    const links = menu.querySelectorAll("[data-nav-link]");
    gsap.killTweensOf(menu);
    gsap.killTweensOf(links);

    if (prefersReducedMotion()) {
      isClosingNavRef.current = false;
      setIsOpenMenu(false);
      return;
    }

    gsap
      .timeline({
        onComplete: () => {
          isClosingNavRef.current = false;
          if (isNavMountedRef.current) setIsOpenMenu(false);
        },
      })
      .to(links, {
        autoAlpha: 0,
        y: -4,
        duration: 0.14,
        stagger: { each: 0.02, from: "end" },
        ease: "power2.in",
      })
      .to(menu, { autoAlpha: 0, y: 6, duration: 0.18, ease: "power2.inOut" }, 0.04);
  };

  const handleOpenMenu = () => {
    if (isClosingNavRef.current) return;
    if (isOpenMenu) {
      closeNavMenu();
      return;
    }
    setIsOpenMenu(true);
  };

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) {
        isClosingNavRef.current = false;
        setIsOpenMenu(false);
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isOpenMenu) return;
    function onKeyDown(event) {
      if (event.key === "Escape") closeNavMenu();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpenMenu]);

  useLayoutEffect(() => {
    if (pathname !== "/" || pendingHash.current === null) return;
    const hash = pendingHash.current;
    pendingHash.current = null;
    scrollToSection(hash, navShellRef.current, { fromTop: true });
  }, [pathname]);

  const handleNavClick = (event, href) => {
    const hash = href.startsWith("/#") ? href.slice(2) : "";
    const isHomeLink = href === "/";
    if (!isHomeLink && !hash) return;

    event.preventDefault();
    closeNavMenu();

    if (window.location.pathname === "/") {
      scrollToSection(hash, navShellRef.current);
      window.history.pushState(null, "", hash ? `/#${hash}` : "/");
      return;
    }

    pendingHash.current = hash;
    router.push(hash ? `/#${hash}` : "/", { scroll: false });
  };

  return (
    <div
      ref={navShellRef}
      className="glass-card sticky top-0 z-50 mx-auto my-3 w-full max-w-7xl rounded-4xl px-4 py-3 sm:my-4 sm:px-6 sm:py-4"
    >
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          onClick={(event) => handleNavClick(event, "/")}
          aria-label="Jack Tchasinga"
          className="shrink-0"
        >
          <span
            ref={wordmarkRef}
            className="relative block overflow-hidden font-display text-lg font-medium tracking-tight whitespace-nowrap text-slate-900 sm:text-2xl dark:text-slate-50"
          >
            <span data-wordmark="full" aria-hidden="true" className="inline-block">
              Jack Tchasinga
            </span>
            <span
              data-wordmark="mark"
              aria-hidden="true"
              className="absolute top-0 left-0 inline-block opacity-0"
            >
              JT
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-4 text-sm lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className="text-slate-700 transition hover:text-slate-950 dark:text-slate-200 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 sm:inline-flex dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="relative z-30 inline-flex cursor-pointer items-center rounded-full p-2 text-slate-900 transition hover:bg-slate-900/5 dark:text-slate-100 dark:hover:bg-white/10"
          >
            <span ref={themeIconRef} className="relative block h-5 w-5">
              <IoSunnyOutline data-theme-icon="sun" className="absolute inset-0 h-5 w-5" />
              <IoMoonOutline data-theme-icon="moon" className="absolute inset-0 h-5 w-5" />
            </span>
          </button>
          <button
            type="button"
            onClick={handleOpenMenu}
            aria-expanded={isOpenMenu}
            aria-controls="primary-navigation"
            aria-label={isOpenMenu ? "Close menu" : "Open menu"}
            className="relative z-30 inline-flex cursor-pointer items-center rounded-full p-2 text-slate-900 transition hover:bg-slate-900/5 lg:hidden dark:text-slate-100 dark:hover:bg-white/10"
          >
            {isOpenMenu ? <IoClose className="h-5 w-5" /> : <IoMenuOutline className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpenMenu ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-20 cursor-default lg:hidden"
            onClick={closeNavMenu}
          />
          <nav
            ref={navMenuRef}
            id="primary-navigation"
            aria-label="Primary"
            className="absolute top-full right-0 left-0 z-30 mt-2 flex flex-col rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-[0_12px_40px_rgba(15,23,42,0.12)] lg:hidden dark:border-white/10 dark:bg-slate-900"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-nav-link
                onClick={(event) => handleNavClick(event, item.href)}
                className="rounded-xl px-3 py-2.5 text-sm text-slate-800 transition hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={resumeHref}
              data-nav-link
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-3 py-2.5 text-sm text-slate-800 transition hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-white/10"
            >
              Resume
            </a>
          </nav>
        </>
      ) : null}
    </div>
  );
}
