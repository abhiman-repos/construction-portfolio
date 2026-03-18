"use client";

import NextLink from "next/link"; // ✅ FIXED
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;

            return (
              <NextLink
                key={s.slug} // ✅ use slug as key
                href={`/services/${s.slug}`}
                className="group block rounded-3xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* ICON */}
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card text-amber-400">
                  <Icon className="h-5 w-5" />
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-base font-semibold text-foreground group-hover:text-amber-400 transition">
                  {t(s.title)}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(s.description)}
                </p>

                {/* CTA */}
                <div className="mt-4 text-sm font-medium text-amber-400 opacity-0 group-hover:opacity-100 transition">
                  Learn More →
                </div>
              </NextLink>
            );
          })}
        </div>
      </Container>
    </section>
  );
}