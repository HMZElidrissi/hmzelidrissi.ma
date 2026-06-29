import { cn } from "@/lib/utils-client";
import { useState } from "react";

export interface GlossaryEntry {
  french: string;
  english: string;
  def: string;
}

interface GlossaryTableProps {
  terms: GlossaryEntry[];
}

export default function GlossaryTable({ terms }: GlossaryTableProps) {
  const [filter, setFilter] = useState("");

  const filtered = terms.filter(
    (t) =>
      t.french.toLowerCase().includes(filter.toLowerCase()) ||
      t.english.toLowerCase().includes(filter.toLowerCase()) ||
      t.def.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="my-6">
      <input
        placeholder="Search terms…"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />

      <div className="grid gap-2">
        {filtered.map((t, i) => (
          <div
            key={i}
            className={cn(
              "grid items-start gap-3 rounded-md border border-border px-3 py-2.5 text-[13px]",
              "grid-cols-[140px_130px_1fr]",
              i % 2 === 0 ? "bg-muted/40" : "bg-background"
            )}
          >
            <span className="font-semibold italic text-violet-500 dark:text-violet-400">
              {t.french}
            </span>
            <span className="text-muted-foreground">{t.english}</span>
            <span className="leading-relaxed text-foreground">{t.def}</span>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="py-4 text-center text-sm text-muted-foreground">
            No terms found.
          </p>
        )}
      </div>
    </div>
  );
}
