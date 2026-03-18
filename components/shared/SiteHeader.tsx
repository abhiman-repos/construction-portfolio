"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { site } from "@/lib/content/site";
import { buildMailtoLink, buildTelLink } from "@/lib/links";
import { useLanguage } from "@/components/providers/LanguageProvider";

type NavItem = {
  href: string;
  label: string;
  sub?: {
    label: string;
    slug?: string;
    href?: string;
  }[];
};

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const nav: NavItem[] = [
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    {
      href: "#services",
      label: t("nav.services"),
      sub: [
        { label: "House Construction", slug: "house-construction" },
        { label: "Interior Design", slug: "interior-design" },
        { label: "Renovation", slug: "renovation" },
        { label: "Commercial Projects", slug: "commercial-projects" },
      ],
    },
    {
      href: "#contact",
      label: t("nav.contact"),
      sub: [
        { label: "Call Us", href: "#call" },
        { label: "Email", href: "#email" },
        { label: "Get Quote", href: "#quote" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 ">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-sm font-semibold text-amber-400">
            {site.brand.name.slice(0, 1)}
          </span>
          <span className="text-sm font-semibold text-foreground">
            {site.brand.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {nav.map((n) => (
            <div key={n.href} className="relative group">
              {/* Main Link */}
              <a href={n.href} className="hover:text-foreground transition">
                {n.label}
              </a>

              {/* Dropdown */}
              {n.sub && (
                <div className="absolute left-0 top-full mt-3 w-48 rounded-xl border border-border bg-background shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  {n.sub.map((item, i) => {
                    const href =
                      "slug" in item
                        ? `/services/${item.slug}`
                        : item.href || "#";

                    return (
                      <Link
                        key={`${item.label}-${i}`} // ✅ FIXED
                        href={href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent rounded-lg"
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60 md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {/* Mobile right sidebar */}
      {open ? (
        <div
          className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Sidebar */}
          <aside
            className={`absolute right-0 top-0 h-full w-[86%] max-w-sm 
    border-l border-border 
    bg-background
    shadow-2xl 
    transform transition-all duration-300 ease-out
    ${open ? "translate-x-0 scale-100" : "translate-x-full scale-95"}`}
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="text-sm font-semibold text-foreground">
                {site.brand.name}
              </div>

              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <nav className="grid gap-1">
                {nav.map((n) => {
                  const isOpen = activeMenu === n.label;

                  return (
                    <div key={n.href}>
                      {/* Main Item */}
                      <button
                        onClick={() =>
                          n.sub
                            ? setActiveMenu(isOpen ? null : n.label)
                            : setOpen(false)
                        }
                        className="w-full flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-accent transition"
                      >
                        {n.sub ? (
                          <span>{n.label}</span>
                        ) : (
                          <Link href={n.href} className="w-full text-left">
                            {n.label}
                          </Link>
                        )}

                        {n.sub && (
                          <span className="text-xs text-muted-foreground">
                            {isOpen ? "−" : "+"}
                          </span>
                        )}
                      </button>

                      {/* Submenu */}
                      {n.sub && (
                        <div
                          className={`ml-3 overflow-hidden transition-all duration-300 ${
                            isOpen
                              ? "max-h-60 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="mt-1 space-y-1">
                            {n.sub.map((item, i) => {
                              const href =
                                "slug" in item
                                  ? `/services/${item.slug}`
                                  : item.href || "#";

                              return (
                                <Link
                                  key={`${item.label}-${i}`}
                                  href={href}
                                  onClick={() => setOpen(false)}
                                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition"
                                >
                                  {item.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="mt-6 grid gap-3">
                <a
                  href={buildTelLink()}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4"
                >
                  <Phone className="h-4 w-4" />
                  {t("contact.call")}
                </a>

                <a
                  href={buildMailtoLink("Project enquiry")}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-amber-300/10 px-4 text-amber-300"
                >
                  <Mail className="h-4 w-4" />
                  {t("contact.email")}
                </a>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
