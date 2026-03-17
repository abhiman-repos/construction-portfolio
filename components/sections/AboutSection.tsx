"use client";

import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatGrid } from "@/components/shared/StatGrid";
import { stats } from "@/lib/content/home";
import { site } from "@/lib/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              description={t("about.description")}
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t("about.body", { location: site.brand.location })}
            </p>
            <StatGrid
              stats={stats.map((s) => ({ label: t(s.labelKey), value: s.value }))}
              className="mt-8"
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(251,191,36,0.18),transparent_70%)]" />
            <div className="relative aspect-[4/3]">
              <Image
                src="/hero.png"
                alt=""
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

