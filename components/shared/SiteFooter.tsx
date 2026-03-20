"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { site } from "@/lib/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { buildMailtoLink } from "@/lib/links";
import BorderGlow from "./BorderGlow";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition">

      {/* 🔥 TOP GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 via-transparent to-transparent pointer-events-none" />

      <BorderGlow className="p-6 bg-black/40 backdrop-blur-xl">

        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h2 className="text-lg font-semibold tracking-wide text-white">
              {site.brand.name}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Building trust with quality construction, modern design, and
              on-time delivery. We turn your vision into reality.
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
              <MapPin className="h-4 w-4 text-amber-400" />
              {site.brand.location}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              <Link href="/services/house-construction" className="hover:text-amber-400 transition">
                House Construction
              </Link>
              <Link href="/services/interior-design" className="hover:text-amber-400 transition">
                Interior Design
              </Link>
              <Link href="/services/renovation" className="hover:text-amber-400 transition">
                Renovation
              </Link>
              <Link href="/services/commercial-projects" className="hover:text-amber-400 transition">
                Commercial Projects
              </Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              <Link href="/#projects" className="hover:text-amber-400 transition">
                {t("footer.projects")}
              </Link>
              <Link href="/#services" className="hover:text-amber-400 transition">
                {t("footer.services")}
              </Link>
              <Link href="/#contact" className="hover:text-amber-400 transition">
                {t("footer.contact")}
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-sm text-white/70">


              <a
                href={buildMailtoLink("Project enquiry")}
                className="flex items-center gap-2 hover:text-amber-400 transition"
              >
                <Mail className="h-4 w-4 text-amber-400" />
                Email Us
              </a>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                {site.brand.location}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/#contact"
              className="mt-6 inline-block rounded-xl bg-amber-400 px-6 py-2 text-sm font-medium text-black hover:bg-amber-300 transition shadow-lg shadow-amber-400/20"
            >
              Get Free Quote →
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">

          <div>
            © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
          </div>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-amber-400 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-amber-400 transition">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </BorderGlow>
    </footer>
  );
}