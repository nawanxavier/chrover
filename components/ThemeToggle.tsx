"use client";

import { IconMoon, IconSun } from "@/components/icons";

export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const isLight = root.classList.toggle("light");
    try {
      localStorage.setItem("chrover-theme", isLight ? "light" : "dark");
    } catch {
      /* ignore storage errors */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="relative block h-5 w-5 text-bone-200 transition-colors hover:text-gold-400"
    >
      <IconSun className="absolute inset-0 h-5 w-5 light:hidden" />
      <IconMoon className="absolute inset-0 hidden h-5 w-5 light:block" />
    </button>
  );
}