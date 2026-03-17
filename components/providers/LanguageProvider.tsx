"use client";

import * as React from "react";
import type { Language } from "@/lib/i18n/types";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { translate } from "@/lib/i18n/t";

const STORAGE_KEY = "portfolio.language";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored === "en" || stored === "hi" || stored === "hinglish") return stored;

  const navLang = (navigator.language || "").toLowerCase();
  if (navLang.startsWith("hi")) return "hi";
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Language>(() => getInitialLanguage());

  const setLang = React.useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  const value = React.useMemo<LanguageContextValue>(() => {
    const dict = dictionaries[lang];
    return {
      lang,
      setLang,
      t: (key, params) => translate(dict, key, params),
    };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

