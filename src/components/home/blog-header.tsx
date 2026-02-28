import { RoughNotation } from "react-rough-notation";

export default function BlogHeader() {
  return (
    <div className="space-y-4 pb-10 pt-6 text-center">
      <p className="mx-2 text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        new post every&nbsp;
        <span className="text-background">
          <RoughNotation
            show={true}
            type="highlight"
            animationDelay={250}
            animationDuration={2000}
            color="hsl(var(--foreground))"
          >
            sometimes
          </RoughNotation>
        </span>
      </p>
      <p className="text-lg leading-7 text-muted-foreground">
        learnings, thoughts, and other musings.
      </p>
    </div>
  );
}
