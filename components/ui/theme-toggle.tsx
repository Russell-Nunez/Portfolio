"use client";

import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";

export function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button type="button" onClick={toggle} aria-label={label} title={label} className="btn btn-icon">
      <Sun size={18} className="hidden [:root[data-theme=dark]_&]:block" />
      <Moon size={18} className="block [:root[data-theme=dark]_&]:hidden" />
    </button>
  );
}
