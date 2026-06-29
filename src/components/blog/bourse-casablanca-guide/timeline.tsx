interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="my-8">
      {events.map((e, i) => (
        <div key={i} className="mb-5 flex gap-5">
          {/* Year badge + connector */}
          <div className="flex flex-col items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground p-1 text-center text-[12px] font-semibold leading-tight text-background">
              {e.year}
            </div>
            {i < events.length - 1 && (
              <div className="mt-1 w-0.5 flex-1 bg-border" />
            )}
          </div>

          {/* Content */}
          <div className="pb-2 pt-2.5">
            <div className="mb-1 text-[15px] font-semibold text-foreground">
              {e.title}
            </div>
            <div className="text-sm leading-relaxed text-muted-foreground">
              {e.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
