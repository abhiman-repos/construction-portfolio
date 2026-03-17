"use client";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ServicesSection() {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          description={t("services.description")}
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.titleKey}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-amber-300 shadow-[0_0_0_1px_rgba(251,191,36,0.2)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-base font-semibold text-foreground">
                  {t(s.titleKey)}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(s.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

