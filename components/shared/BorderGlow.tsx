"use client";

import { useRef } from "react";
import "./BorderGlow.css";

export default function BorderGlow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`relative group rounded-2xl overflow-hidden ${className}`}
    >
      {/* Glow layer */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-amber-400/30"
             style={{ left: "var(--x)", top: "var(--y)" }} />
      </div>

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-amber-400/40 transition" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}