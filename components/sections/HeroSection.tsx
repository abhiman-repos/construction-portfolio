"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { buildTelLink, buildWhatsAppLink } from "@/lib/links";
import { site } from "@/lib/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(251,191,36,0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.75))]" />
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/hero.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            {site.brand.location}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {t("hero.tagline")}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            {t("hero.description")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href={buildWhatsAppLink(
                t("hero.whatsapp.consultation"),
              )}
              className="w-full sm:w-auto"
            >
              {t("hero.cta.consultation")} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <a
              href={buildTelLink()}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-foreground backdrop-blur-md transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60 sm:w-auto"
            >
              <Phone className="h-4 w-4" /> {t("hero.cta.callNow")}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300/80" />
              {t("hero.bullets.ontime")}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300/80" />
              {t("hero.bullets.pricing")}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300/80" />
              {t("hero.bullets.finishing")}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

