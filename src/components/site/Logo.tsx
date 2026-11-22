import { Flame } from "lucide-react";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-glow"
      >
        <Flame className="size-5" strokeWidth={2.5} />
      </span>
      <span className="whitespace-nowrap font-display text-xl font-extrabold leading-none tracking-tight">
        Tacos <span className="text-gold">martin</span>
      </span>
    </span>
  );
}
