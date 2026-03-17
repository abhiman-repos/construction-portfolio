import { cn } from "@/lib/utils";

export function DividerGlow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-amber-300/35 to-transparent",
        className,
      )}
      aria-hidden="true"
    />
  );
}

