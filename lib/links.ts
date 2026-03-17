import { site } from "@/lib/content/site";

export function buildWhatsAppLink(message: string) {
  const base = `https://wa.me/${site.contact.whatsappNumberE164NoPlus}`;
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
}

export function buildTelLink() {
  return `tel:${site.contact.phoneE164}`;
}

export function buildMailtoLink(subject: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return `mailto:${site.contact.email}${q ? `?${q}` : ""}`;
}

