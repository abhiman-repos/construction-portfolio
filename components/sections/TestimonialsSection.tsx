"use client";

import { Quote } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/lib/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function TestimonialsSection() {
  const { t } = useLanguage();
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          description={t("testimonials.description")}
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-foreground">
                  {item.name}
                </div>
                <Quote className="h-4 w-4 text-amber-300/80" />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {item.location}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                “{t(item.textKey)}”
              </p>
              <div className="mt-5 flex gap-1 text-amber-300/80">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} aria-hidden="true">
                    ★
                  </span>
                ))}
                <span className="sr-only">{t("testimonials.rating")}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

