"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n/types";

export function SettingsSection() {
  const { lang, setLang, t } = useLanguage();

  return (
    <section id="settings" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow={t("settings.eyebrow")}
              title={t("settings.title")}
              description={t("settings.description")}
            />

            <div className="grid gap-2">
              <label className="text-xs font-medium text-white/70">
                {t("settings.language.label")}
              </label>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-foreground outline-none ring-0 focus:border-amber-300/40 focus:ring-2 focus:ring-amber-300/20"
              >
                <option value="en">{t("settings.language.en")}</option>
                <option value="hi">{t("settings.language.hi")}</option>
                <option value="hinglish">{t("settings.language.hinglish")}</option>
              </select>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

