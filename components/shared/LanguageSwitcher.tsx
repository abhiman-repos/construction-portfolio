"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" },
    { code: "hinglish", label: "Hinglish" },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((l) => (
        <button
          key={l.code}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={() => setLang(l.code as any)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
            lang === l.code
              ? "bg-amber-400 text-black border-amber-400"
              : "border-border text-muted-foreground hover:bg-accent"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}