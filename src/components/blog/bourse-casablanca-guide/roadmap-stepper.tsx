import { cn } from "@/lib/utils-client";
import { useState } from "react";

interface Step {
  month: string;
  phase: string;
  icon: string;
  action: string;
  rule: string;
}

const STEPS: Step[] = [
  {
    month: "Month 1",
    phase: "Watch, don't touch",
    icon: "👀",
    action:
      "Open a compte titres with a société de bourse. Fund it with a small amount you could lose without losing sleep. Then just watch. Don't buy a single share yet. Follow the MASI daily. Read the quarterly results of five companies. Let the rhythms of the market become familiar before you commit real money to it.",
    rule: "The market will still be there next month.",
  },
  {
    month: "Month 2",
    phase: "Do the homework",
    icon: "📚",
    action:
      "Pick three companies and study them seriously. Pull their annual reports from the AMMC website. Calculate the PER. Look at revenue growth over three years. Understand what the company actually does. Ask yourself: would I want to own this business for the next decade? If you can't answer that clearly, you don't know it well enough yet.",
    rule: "Know what you own, and know why you own it.",
  },
  {
    month: "Month 3",
    phase: "Make your first trade",
    icon: "🎯",
    action:
      "Buy a small position — 500 to 1,000 MAD — in one company you researched thoroughly. Not two, not five. One. The goal is not to get rich this month. The goal is to experience the emotions: the anxiety of watching it drop, the temptation to sell, the irrational joy when it ticks up. Know your enemy before the stakes are high.",
    rule: "Start small. Stay calm.",
  },
  {
    month: "Month 4",
    phase: "Review and reflect",
    icon: "🔍",
    action:
      "Look back at your decision. Was your thesis right? Did something change that you didn't anticipate? Did you panic when it dropped 8%? (It will drop 8%. This is normal.) The purpose of this review is not to decide whether to sell — it's to understand your own behavior under pressure. That self-knowledge is worth more than any stock tip.",
    rule: "The investor's biggest risk is the investor.",
  },
  {
    month: "Months 5–6",
    phase: "Begin the rhythm",
    icon: "🔄",
    action:
      "Set up a fixed monthly investment — whatever you can genuinely afford after expenses and an emergency fund. Same amount, every month, regardless of whether the market is up or down. This is investissement périodique — the equivalent of Collins's dollar cost averaging. You buy more shares when prices are low and fewer when prices are high. You don't try to time anything. You just show up, every month, like paying a bill.",
    rule: "Automate it. Then ignore it.",
  },
];

export default function RoadmapStepper() {
  const [active, setActive] = useState(0);
  const step = STEPS[active]!;

  return (
    <div className="my-8">
      {/* Tab strip */}
      <div className="mb-6 flex overflow-x-auto">
        {STEPS.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "flex min-w-[90px] flex-1 cursor-pointer flex-col items-center border-0 border-b-[3px] bg-transparent px-2 py-2.5 text-[12px] transition-all duration-200",
              i === active
                ? "border-foreground font-bold text-foreground"
                : "border-border font-normal text-muted-foreground hover:border-muted-foreground hover:text-foreground"
            )}
          >
            <div className="mb-1 text-lg">{s.icon}</div>
            {s.month}
          </button>
        ))}
      </div>

      {/* Active step card */}
      <div className="rounded-xl border border-border bg-card px-6 py-5 shadow-sm">
        <div className="mb-3.5 flex items-center gap-3">
          <span className="text-3xl">{step.icon}</span>
          <div>
            <div className="mb-0.5 text-xs text-muted-foreground">
              {step.month}
            </div>
            <div className="text-[18px] font-bold text-foreground">
              {step.phase}
            </div>
          </div>
        </div>

        <p className="mb-4 text-[15px] leading-[1.75] text-muted-foreground">
          {step.action}
        </p>

        <div className="border-l-[3px] border-foreground/30 pl-3.5 text-sm italic text-foreground">
          {step.rule}
        </div>
      </div>

      {/* Prev / Next */}
      <div className="mt-3 flex justify-between">
        <button
          onClick={() => setActive((a) => Math.max(0, a - 1))}
          disabled={active === 0}
          className={cn(
            "rounded-md border border-border bg-background px-4 py-2 text-[13px] text-foreground transition-colors duration-150 hover:bg-muted",
            active === 0 && "cursor-not-allowed opacity-40"
          )}
        >
          ← Previous
        </button>
        <button
          onClick={() => setActive((a) => Math.min(STEPS.length - 1, a + 1))}
          disabled={active === STEPS.length - 1}
          className={cn(
            "rounded-md bg-foreground px-4 py-2 text-[13px] text-background transition-colors duration-150 hover:bg-foreground/80",
            active === STEPS.length - 1 && "cursor-not-allowed opacity-40"
          )}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
