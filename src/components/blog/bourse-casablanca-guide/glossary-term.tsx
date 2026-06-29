import { cn } from "@/lib/utils-client";
import { useState, type ReactNode } from "react";

interface GlossaryTermProps {
  /** The full English/Arabic term shown in the popover heading */
  term: string;
  /** The French label rendered inline as a clickable trigger */
  french: string;
  children: ReactNode;
}

export default function GlossaryTerm({
  term,
  french,
  children,
}: GlossaryTermProps) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline">
      <button
        onClick={() => setOpen((o) => !o)}
        className="cursor-pointer border-0 border-b border-dashed border-violet-500 bg-transparent p-0 italic text-[inherit] text-violet-500 transition-colors duration-150 hover:border-violet-600 hover:text-violet-600 dark:border-violet-400 dark:text-violet-400 dark:hover:border-violet-300 dark:hover:text-violet-300"
      >
        {french}
      </button>

      {open && (
        <span
          className={cn(
            "absolute left-0 top-[1.6em] z-10 w-72 rounded-lg border border-border bg-card p-3 text-[13px] leading-relaxed text-card-foreground shadow-md"
          )}
        >
          <strong className="mb-1 block font-semibold text-foreground">
            {term}
          </strong>
          {children}
          <button
            onClick={() => setOpen(false)}
            className="mt-2 block cursor-pointer border-0 bg-transparent text-[12px] text-muted-foreground transition-colors hover:text-foreground"
          >
            close ✕
          </button>
        </span>
      )}
    </span>
  );
}
