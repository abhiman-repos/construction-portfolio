"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  className,
}: {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  className?: string;
}) {
  const [value, setValue] = React.useState(55);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={afterSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
          priority={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${value}%` }}
          aria-hidden="true"
        >
          <Image
            src={beforeSrc}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
            priority={false}
          />
        </div>
        <div
          className="absolute inset-y-0"
          style={{ left: `${value}%` }}
          aria-hidden="true"
        >
          <div className="h-full w-px bg-white/60" />
          <div className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
            <div className="h-3 w-3 rounded-full bg-amber-300" />
          </div>
        </div>

        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/45 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
          Before
        </div>
        <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/45 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
          After
        </div>
      </div>

      <div className="px-5 py-4">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-amber-300"
          aria-label="Before and after slider"
        />
      </div>
    </div>
  );
}

