"use client";

import { useSyncExternalStore } from "react";

const storageKey = "portfolio-theme";
const listeners = new Set();

function readTheme() {
  try {
    return window.localStorage.getItem(storageKey) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function getServerTheme() {
  return "light";
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function writeTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";

  try {
    window.localStorage.setItem(storageKey, nextTheme);
  } catch {
    // Theme still applies for this visit when storage is blocked.
  }

  applyTheme(nextTheme);
  listeners.forEach((listener) => listener());
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, getServerTheme);

  return {
    isDark: theme === "dark",
    toggleTheme: () => writeTheme(theme === "dark" ? "light" : "dark"),
  };
}
