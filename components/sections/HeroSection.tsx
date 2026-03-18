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
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* ✅ SLIDER (FIXED) */}
      {heroImages.map((src, index) => {
        const isActive = index === current;

        // 🎨 Different animations per image
        const animations = [
          isActive ? "opacity-100 scale-110" : "opacity-0 scale-100", // zoom
          isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20", // slide right
          isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20", // slide up
          isActive
            ? "opacity-100 scale-105 rotate-1"
            : "opacity-0 scale-100 rotate-0", // slight rotate
          isActive ? "opacity-100 blur-0" : "opacity-0 blur-sm",
          isActive ? "scale-110" : "scale-105" // blur fade
        ];

        return (
          <Image
            key={src}
            src={src}
            alt="hero"
            fill
            priority={index === 0}
            className={`object-cover object-center transition-all duration-1000 ease-in-out ${
              animations[index % animations.length]
            }`}
          />
        );
      })}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <Container className="relative z-10 flex h-full items-center">
        <div className="max-w-2xl text-white">
          {/* Location */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            {site.brand.location}
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
            {t("hero.tagline")}
          </h1>

          {/* Description */}
          <p className="mt-5 text-white/80 text-lg">{t("hero.description")}</p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href={buildMailtoLink("Free construction consultation")}
              className="bg-amber-400 text-black hover:bg-amber-300"
            >
              {t("hero.cta.consultation")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </ButtonLink>

            <a
              href={buildTelLink()}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {t("hero.cta.callNow")}
            </a>
          </div>

          {/* Trust */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
            <span>✔ {t("hero.bullets.ontime")}</span>
            <span>✔ {t("hero.bullets.pricing")}</span>
            <span>✔ {t("hero.bullets.finishing")}</span>
          </div>
        </div>
      </Container>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 z-10">
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
