"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Timer } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/lib/content/projects";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          description={t("projects.description")}
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:bg-white/10"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={p.coverImage}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
                  {p.type}
                </div>
              </div>

              <div className="p-6">
                <div className="text-base font-semibold text-foreground">
                  {p.name}
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/70">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    <MapPin className="h-3.5 w-3.5 text-amber-300/80" />
                    {p.location}
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-3 py-1">
                    <Timer className="h-3.5 w-3.5 text-amber-300/80" />
                    {p.duration}
                  </div>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-300/90">
                  {t("projects.viewDetails")} <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

