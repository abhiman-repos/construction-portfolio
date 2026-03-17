"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { features } from "@/lib/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function WhyChooseUsSection() {
  const { t } = useLanguage();
  return (
    <section id="why" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow={t("why.eyebrow")}
              title={t("why.title")}
              description={t("why.description")}
            />
            <div className="mt-8 space-y-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.titleKey}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                  >
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-amber-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-amber-300/90" />
                        {t(f.titleKey)}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {t(f.descriptionKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(251,191,36,0.18),transparent_70%)]" />
            <div className="relative aspect-[4/3]">
              <Image
                src="/hero.png"
                alt=""
                fill
                className="object-cover opacity-85"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>

  );
}

