import { cn } from "@/lib/utils-client";
import { useState } from "react";

export default function CommissionCalc() {
  const [amount, setAmount] = useState(10000);

  const broker = amount * 0.006;
  const settlement = amount * 0.002;
  const bourse = amount * 0.001;
  const total = broker + settlement + bourse;
  const net = amount - total;

  const cells = [
    { label: "Broker (0.6%)", val: broker, highlight: false },
    { label: "Settlement (0.2%)", val: settlement, highlight: false },
    { label: "Bourse (0.1%)", val: bourse, highlight: false },
    { label: "Total fees", val: total, highlight: true },
  ];

  return (
    <div className="my-6 rounded-xl border border-amber-200 bg-amber-50 px-6 py-5 dark:border-amber-900 dark:bg-amber-950/30">
      {/* Slider row */}
      <div className="mb-4 flex items-center gap-3.5">
        <label className="shrink-0 text-[13px] text-amber-900 dark:text-amber-200">
          Trade amount (MAD)
        </label>
        <input
          type="range"
          min={1000}
          max={100000}
          step={500}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="flex-1 accent-amber-500"
        />
        <span className="min-w-[80px] text-right text-sm font-bold text-amber-950 dark:text-amber-100">
          {amount.toLocaleString()} MAD
        </span>
      </div>

      {/* Fee breakdown */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {cells.map(({ label, val, highlight }, i) => (
          <div
            key={i}
            className={cn(
              "rounded-lg border px-3 py-2.5",
              highlight
                ? "border-amber-500 bg-amber-500 text-white dark:border-amber-400 dark:bg-amber-500/80"
                : "border-amber-200 bg-white dark:border-amber-800 dark:bg-amber-950/50"
            )}
          >
            <div
              className={cn(
                "mb-0.5 text-[11px]",
                highlight ? "text-amber-100" : "text-muted-foreground"
              )}
            >
              {label}
            </div>
            <div
              className={cn(
                "text-base font-bold",
                highlight ? "text-white" : "text-amber-950 dark:text-amber-100"
              )}
            >
              {val.toFixed(0)} MAD
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[12px] text-amber-800 dark:text-amber-300">
        You receive <strong>{net.toFixed(0)} MAD</strong> worth of shares on a{" "}
        {amount.toLocaleString()} MAD purchase. At 0.9% total, the stock must
        rise at least 0.9% before you break even.
      </p>
    </div>
  );
}
