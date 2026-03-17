import { cn } from "@/lib/utils";

export function StatGrid({
  stats,
  className,
}: {
  stats: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 sm:grid-cols-3",
        className,
      )}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
        >
          <div className="text-2xl font-semibold tracking-tight text-foreground">
            {s.value}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

