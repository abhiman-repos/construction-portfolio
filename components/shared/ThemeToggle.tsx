"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = React.useState<Theme | null>(null);

  // ✅ INITIAL LOAD (NO FLASH)
  React.useEffect(() => {
    const saved = window.localStorage.getItem("theme") as Theme | null;

    const initial =
      saved === "light" || saved === "dark"
        ? saved
        : getSystemTheme();

    setTheme(initial);
    applyTheme(initial);
  }, []);

  // ✅ SYSTEM THEME LISTENER (IMPORTANT 🔥)
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      const saved = localStorage.getItem("theme");

      // Only auto-change if user didn't manually select
      if (!saved) {
        const systemTheme = media.matches ? "dark" : "light";
        setTheme(systemTheme);
        applyTheme(systemTheme);
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  if (!theme) return null; // prevent hydration mismatch

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex w-full items-center justify-between rounded-xl border border-border bg-background px-4 py-2 text-sm transition hover:bg-accent",
        className
      )}
    >
      <span className="flex items-center gap-2">
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-amber-400" />
        ) : (
          <Sun className="h-4 w-4 text-amber-400" />
        )}
        Theme 
      </span>

    </button>
  );
}