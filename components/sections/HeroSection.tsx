"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { buildMailtoLink, buildTelLink } from "@/lib/links";
import { site } from "@/lib/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HeroSection() {
  const { t } = useLanguage();

  // ✅ FIXED ARRAY (no extra comma)
  const heroImages = [
    "/hero.png",
    "/project1/project1.3.png",
    "/project2/project2.4.png",
    "/hero4.png",
    "/hero5.png",
  ];

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* SLIDER */}
      {heroImages.map((src, index) => {
        const isActive = index === current;

        return (
          <Image
            key={src}
            src={src}
            alt="hero"
            fill
            priority={index === 0}
            className={`object-cover object-center transition-all duration-[1200ms] ease-in-out ${
              isActive ? "opacity-100 scale-105" : "opacity-0 scale-110"
            }`}
          />
        );
      })}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* LEFT GRADIENT (AMAZON STYLE) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* CONTENT */}
      <Container className="relative z-10 flex h-full items-center">
        <div className="max-w-2xl text-white">
          {/* LOCATION */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            {site.brand.location}
          </div>

          {/* HEADING */}
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight">
            {t("hero.tagline")}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 text-white/80 text-lg max-w-xl">
            {t("hero.description")}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <ButtonLink
              href={buildMailtoLink("Free construction consultation")}
              className="bg-amber-400 text-black hover:bg-amber-300 px-6 py-3 text-sm font-semibold"
            >
              {t("hero.cta.consultation")}
            </ButtonLink>

            <a
              href={buildTelLink()}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {t("hero.cta.callNow")}
            </a>
          </div>

          {/* TRUST */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
            <span>✔ {t("hero.bullets.ontime")}</span>
            <span>✔ {t("hero.bullets.pricing")}</span>
            <span>✔ {t("hero.bullets.finishing")}</span>
          </div>
        </div>
      </Container>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-6 bg-amber-400" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
