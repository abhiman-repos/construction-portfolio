"use client";

import * as React from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { buildMailtoLink, buildTelLink, buildWhatsAppLink } from "@/lib/links";
import { site } from "@/lib/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ContactSection() {
  const { t } = useLanguage();
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const composed = t("contact.whatsapp.composed", {
    name: name || "—",
    phone: phone || "—",
    message: message || "",
  }).trim();

  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={t("contact.eyebrow")}
                title={t("contact.title")}
                description={t("contact.description")}
              />

              <div className="mt-8 space-y-3 text-sm">
                <a
                  href={buildTelLink()}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-foreground transition hover:bg-black/30"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <Phone className="h-4 w-4 text-amber-300" />
                  </span>
                  <div>
                    <div className="font-semibold">{t("contact.call")}</div>
                    <div className="text-muted-foreground">{site.contact.phoneDisplay}</div>
                  </div>
                </a>

                <a
                  href={buildMailtoLink("Project enquiry")}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-foreground transition hover:bg-black/30"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <Mail className="h-4 w-4 text-amber-300" />
                  </span>
                  <div>
                    <div className="font-semibold">{t("contact.email")}</div>
                    <div className="text-muted-foreground">{site.contact.email}</div>
                  </div>
                </a>
              </div>
            </div>

            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(buildWhatsAppLink(composed), "_blank", "noreferrer");
              }}
            >
              <div className="grid gap-2">
                <label className="text-xs font-medium text-white/70">
                  {t("contact.form.name")}
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-foreground outline-none ring-0 placeholder:text-white/30 focus:border-amber-300/40 focus:ring-2 focus:ring-amber-300/20"
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-medium text-white/70">
                  {t("contact.form.phone")}
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-11 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-foreground outline-none ring-0 placeholder:text-white/30 focus:border-amber-300/40 focus:ring-2 focus:ring-amber-300/20"
                  placeholder={t("contact.form.phonePlaceholder")}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-medium text-white/70">
                  {t("contact.form.message")}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[120px] resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground outline-none ring-0 placeholder:text-white/30 focus:border-amber-300/40 focus:ring-2 focus:ring-amber-300/20"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-muted-foreground">
                  {t("contact.form.helper")}
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  {t("contact.form.submit")} <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

