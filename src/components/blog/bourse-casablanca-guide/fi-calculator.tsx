import { useState } from "react";

function fmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return n.toFixed(0);
}

interface ChartPoint {
  y: number;
  val: number;
}

export default function FICalculator() {
  const [spend, setSpend] = useState(60000);
  const [income, setIncome] = useState(120000);
  const [rate, setRate] = useState(8);

  const invested = Math.max(0, income - spend);
  const savingsRate = income > 0 ? Math.round((invested / income) * 100) : 0;
  const target = spend * 25;
  const r = rate / 100;

  // Years to FI
  let bal = 0,
    yrs = 0;
  while (bal < target && yrs < 60) {
    yrs++;
    bal = bal * (1 + r) + invested;
  }
  const yearsToFI = bal >= target ? yrs : null;

  // Chart data
  const chartPoints: ChartPoint[] = [];
  let b2 = 0;
  const chartMax = Math.min(yearsToFI ? yearsToFI + 5 : 40, 45);
  for (let y = 0; y <= chartMax; y++) {
    chartPoints.push({ y, val: Math.round(b2) });
    b2 = b2 * (1 + r) + invested;
  }
  const maxVal = Math.max(...chartPoints.map((p) => p.val), target);
  const W = 500,
    H = 160,
    padL = 48,
    padB = 28,
    padT = 16,
    padR = 16;
  const xScale = (y: number) =>
    padL + ((W - padL - padR) * y) / (chartPoints.length - 1);
  const yScale = (v: number) => padT + (H - padT - padB) * (1 - v / maxVal);
  const polyline = chartPoints
    .map((p) => `${xScale(p.y)},${yScale(p.val)}`)
    .join(" ");
  const targetY = yScale(target);

  const savingsLabel =
    savingsRate >= 50
      ? "Collins would approve 👏"
      : savingsRate >= 30
        ? "solid — keep going"
        : "push it higher";

  const sliders = [
    {
      label: "Annual spending (MAD)",
      id: "spend",
      val: spend,
      set: setSpend,
      min: 20000,
      max: 200000,
      step: 5000,
    },
    {
      label: "Annual income (MAD)",
      id: "income",
      val: income,
      set: setIncome,
      min: 40000,
      max: 400000,
      step: 5000,
    },
    {
      label: "Expected return (%)",
      id: "rate",
      val: rate,
      set: setRate,
      min: 4,
      max: 14,
      step: 1,
    },
  ] as const;

  return (
    <div className="my-8 rounded-xl border border-border bg-card px-7 py-6 shadow-sm">
      <h4 className="mb-5 text-base font-semibold text-foreground">
        Your financial independence calculator
      </h4>

      {/* Sliders */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {sliders.map(({ label, id, val, set, min, max, step }) => (
          <div key={id}>
            <label className="mb-1 block text-xs text-muted-foreground">
              {label}
            </label>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={val}
              onChange={(e) =>
                (set as (v: number) => void)(Number(e.target.value))
              }
              className="mb-1 w-full accent-violet-500"
            />
            <div className="text-sm font-semibold text-foreground">
              {id === "rate"
                ? `${val}%`
                : `${((val as number) / 1000).toFixed(0)}K MAD`}
            </div>
          </div>
        ))}
      </div>

      {/* Stat cards */}
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          {
            label: "FI target (25× spending)",
            value: fmt(target) + " MAD",
            sub: "your number to hit",
          },
          {
            label: "Savings rate",
            value: savingsRate + "%",
            sub: savingsLabel,
          },
          {
            label: "Years to FI",
            value: yearsToFI ? `~${yearsToFI} yrs` : "60+ yrs",
            sub:
              invested <= 0
                ? "spend less than you earn!"
                : "at this savings rate",
          },
        ].map(({ label, value, sub }, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-background px-3.5 py-3"
          >
            <div className="mb-1 text-[11px] text-muted-foreground">
              {label}
            </div>
            <div className="mb-0.5 text-2xl font-bold text-foreground">
              {value}
            </div>
            <div className="text-[11px] text-muted-foreground">{sub}</div>
          </div>
        ))}
      </div>

      {/* SVG chart */}
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} className="block">
        <defs>
          <linearGradient id="fi-area-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1D9E75" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1D9E75" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const y = padT + (H - padT - padB) * t;
          return (
            <line
              key={t}
              x1={padL}
              y1={y}
              x2={W - padR}
              y2={y}
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeWidth="1"
            />
          );
        })}

        {/* Y-axis labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <text
            key={t}
            x={padL - 4}
            y={padT + (H - padT - padB) * t + 4}
            textAnchor="end"
            fontSize="9"
            fill="currentColor"
            fillOpacity="0.4"
          >
            {fmt(maxVal * (1 - t))}
          </text>
        ))}

        {/* FI target dashed line */}
        <line
          x1={padL}
          y1={targetY}
          x2={W - padR}
          y2={targetY}
          stroke="#BA7517"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
        <text x={W - padR + 2} y={targetY + 4} fontSize="9" fill="#BA7517">
          FI target
        </text>

        {/* Area fill */}
        <polygon
          points={`${xScale(0)},${H - padB} ${polyline} ${xScale(chartPoints.length - 1)},${H - padB}`}
          fill="url(#fi-area-grad)"
        />

        {/* Line */}
        <polyline
          points={polyline}
          fill="none"
          stroke="#1D9E75"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* X-axis labels */}
        {chartPoints
          .filter((_, i) => i % Math.ceil(chartPoints.length / 5) === 0)
          .map((p) => (
            <text
              key={p.y}
              x={xScale(p.y)}
              y={H - padB + 14}
              textAnchor="middle"
              fontSize="9"
              fill="currentColor"
              fillOpacity="0.4"
            >
              yr {p.y}
            </text>
          ))}
      </svg>

      <p className="mt-2 text-center text-[11px] text-muted-foreground">
        Illustrative only. Real returns vary. Historical MASI avg ~11%
        (2024–2025 bull run); conservative 8% used above.
      </p>
    </div>
  );
}
