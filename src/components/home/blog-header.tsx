export default function BlogHeader() {
  return (
    <div className="space-y-4 pb-10 pt-6 text-center">
      <p className="mx-2 text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        new post every&nbsp;
        <span className="relative inline-block px-1">
          <span
            className="absolute inset-0 -z-10 origin-left -rotate-1 scale-x-0 animate-[highlight_2s_ease-out_250ms_forwards] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] bg-foreground"
          />
          <span className="text-background relative z-10">sometimes</span>
        </span>
      </p>
      <p className="text-lg leading-7 text-muted-foreground">
        learnings, thoughts, and other musings.
      </p>
    </div>
  );
}
