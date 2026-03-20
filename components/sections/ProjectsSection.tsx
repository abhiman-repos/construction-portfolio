"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, MapPin, Timer } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/lib/content/projects";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  // 🔥 ALL FILTERS
  const allFilters = [
    "All",
    "Residential",
    "Commercial",
    "Institutional",
    "Industrial",
    "Interior",
    "Renovation",
    "Hospital",
    "Educational",
    "Office",
    "Retail",
    "Warehouse",
    "Villa",
    "Apartment",
    "Marriage Hall",
  ];

  // 🔥 SHOW ONLY 5 INITIALLY
  const visibleFilters = showAll
    ? allFilters
    : allFilters.slice(0, 5);

  // ✅ SMART FILTER LOGIC (IMPORTANT)
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.type?.toLowerCase().includes(filter.toLowerCase()) ||
          p.projectType?.toLowerCase().includes(filter.toLowerCase()) ||
          p.tags?.some((tag) =>
            tag.toLowerCase().includes(filter.toLowerCase())
          )
        );

  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          description={t("projects.description")}
          align="center"
        />

        {/* 🔥 FILTER BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {visibleFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${
                filter === f
                  ? "bg-amber-400 text-black shadow-md scale-105"
                  : "bg-background text-foreground border-border hover:bg-accent"
              }`}
            >
              {f}
            </button>
          ))}

          {/* 🔥 SEE MORE BUTTON */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 rounded-full text-sm border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
          >
            {showAll ? "See Less ↑" : "See More ↓"}
          </button>

        </div>

        {/* 🔥 PROJECT GRID */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.slug}`}
              className="group overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={p.coverImage}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* TYPE BADGE */}
                <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-md">
                  {p.type}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-amber-400 transition">
                  {p.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {p.shortDescription}
                </p>

                {/* META */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="flex items-center gap-1 rounded-full bg-muted px-3 py-1">
                    <MapPin className="h-3.5 w-3.5 text-amber-400" />
                    {p.location}
                  </span>

                  <span className="flex items-center gap-1 rounded-full bg-muted px-3 py-1">
                    <Timer className="h-3.5 w-3.5 text-amber-400" />
                    {p.duration}
                  </span>
                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-amber-400">
                  {t("projects.viewDetails")}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}