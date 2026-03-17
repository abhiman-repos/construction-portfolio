"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp({
  className,
  message = "Hi! I’d like a free consultation for my construction project.",
}: {
  className?: string;
  message?: string;
}) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60",
        className,
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  );
}

