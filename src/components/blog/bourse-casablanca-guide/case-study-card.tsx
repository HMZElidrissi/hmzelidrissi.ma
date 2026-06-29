interface Stat {
  label: string;
  value: string;
}

interface CaseStudyCardProps {
  name: string;
  sector: string;
  ipoYear: number;
  color: string;
  drivers: string;
  lesson: string;
  stats: Stat[];
}

export default function CaseStudyCard({
  name,
  sector,
  ipoYear,
  color,
  drivers,
  lesson,
  stats,
}: CaseStudyCardProps) {
  return (
    <div
      className="my-6 overflow-hidden rounded-xl border-2 border-border"
      style={{ borderColor: color }}
    >
      {/* Header */}
      <div
        className="flex items-baseline justify-between px-5 py-3.5 text-white"
        style={{ background: color }}
      >
        <div>
          <span className="text-lg font-bold">{name}</span>
          <span className="ml-3 text-[13px] opacity-85">{sector}</span>
        </div>
        <div className="text-[13px]">Listed {ipoYear}</div>
      </div>

      {/* Body */}
      <div className="bg-card px-5 py-5">
        {/* Stat grid */}
        <div className="mb-4 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-2.5">
          {stats.map(({ label, value }, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-muted/40 px-3.5 py-2.5"
            >
              <div className="mb-0.5 text-[11px] text-muted-foreground">
                {label}
              </div>
              <div className="text-base font-bold text-foreground">{value}</div>
            </div>
          ))}
        </div>

        {/* Drivers */}
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Key drivers:</strong> {drivers}
        </p>

        {/* Lesson */}
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
          <strong>The lesson:</strong> {lesson}
        </div>
      </div>
    </div>
  );
}
