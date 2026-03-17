import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-amber-400 text-zinc-950 hover:bg-amber-300 shadow-[0_0_0_1px_rgba(251,191,36,0.35),0_18px_55px_rgba(0,0,0,0.35)]",
  secondary:
    "bg-white/10 text-foreground hover:bg-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.12)] backdrop-blur-md",
  ghost: "text-foreground hover:bg-white/10",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

