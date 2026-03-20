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
    <section id="why" className="py-20 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.15),transparent_60%)]" />

      <Container>
        <div className="grid gap-12 lg:items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <SectionHeading
              eyebrow={t("why.eyebrow")}
              title={t("why.title")}
              description={t("why.description")}
            />

            <div className="space-y-5">
              {features.map((f, i) => {
                const Icon = f.icon;

                return (
                  <div
                    key={f.titleKey}
                    className="group flex gap-4 rounded-2xl border border-border bg-background/60 p-5 backdrop-blur-md transition-all duration-300 hover:scale-[1.05] hover:shadow-xl"
                    style={{
                      animation: `fadeUp 0.6s ease forwards`,
                      animationDelay: `${i * 0.1}s`,
                      opacity: 0,
                    }}
                  >
                    {/* ICON */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300 group-hover:bg-amber-400 group-hover:text-black transition">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-amber-300" />
                        {t(f.titleKey)}
                      </div>

                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {t(f.descriptionKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(251,191,36,0.18),transparent_70%)]" />
            <div className="relative aspect-[4/2]">
              <Image
                src="/chose.webp"
                alt=""
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* KEYFRAMES */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
