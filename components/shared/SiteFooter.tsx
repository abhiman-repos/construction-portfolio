"use client";

import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { site } from "@/lib/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-semibold text-foreground">{site.brand.name}</div>
          <div className="mt-1 text-xs text-muted-foreground">{site.brand.location}</div>
        </div>
        <div className="flex items-center gap-5 text-sm text-white/70">
          <Link href="/#projects" className="hover:text-white">
            {t("footer.projects")}
          </Link>
          <Link href="/#services" className="hover:text-white">
            {t("footer.services")}
          </Link>
          <Link href="/#contact" className="hover:text-white">
            {t("footer.contact")}
          </Link>
        </div>
      </Container>
    </footer>
  );
}

