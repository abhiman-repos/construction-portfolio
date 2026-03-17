"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ButtonLink } from "@/components/shared/Button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { site } from "@/lib/content/site";
import { buildTelLink, buildWhatsAppLink } from "@/lib/links";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function SiteHeader() {
  const { t } = useLanguage();

  const nav = [
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#services", label: t("nav.services") },
    { href: "#testimonials", label: t("nav.reviews") },
    { href: "#settings", label: t("nav.settings") },
    { href: "#contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-sm font-semibold text-amber-400">
            {site.brand.name.slice(0, 1)}
          </span>
          <span className="text-sm font-semibold text-foreground">
            {site.brand.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <a
            href={buildTelLink()}
            className="hidden h-10 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground transition hover:bg-accent sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {t("contact.call")}
          </a>
          <ButtonLink
            href={buildWhatsAppLink("Hi! I’d like a free consultation.")}
            size="sm"
          >
            WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

