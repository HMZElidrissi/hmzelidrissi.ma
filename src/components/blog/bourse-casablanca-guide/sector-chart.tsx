import { cn } from "@/lib/utils-client";
import { useState } from "react";

interface Sector {
  name: string;
  pct: number;
  color: string;
  examples: string;
}

const SECTORS: Sector[] = [
  {
    name: "Banques",
    pct: 32.6,
    color: "#1D9E75",
    examples: "Attijariwafa, BCP, BMCE",
  },
  { name: "Télécoms", pct: 17.7, color: "#185FA5", examples: "Maroc Telecom" },
  {
    name: "Matériaux",
    pct: 8.0,
    color: "#BA7517",
    examples: "Ciments du Maroc",
  },
  {
    name: "Énergie",
    pct: 7.0,
    color: "#E24B4A",
    examples: "TotalEnergies Maroc",
  },
  { name: "Mines", pct: 5.0, color: "#534AB7", examples: "Managem, CMT" },
  { name: "BTP", pct: 4.0, color: "#D85A30", examples: "TGCC, SGTM" },
  { name: "Santé", pct: 4.0, color: "#0F6E56", examples: "Akdital" },
  {
    name: "Autres",
    pct: 21.7,
    color: "#B4B2A9",
    examples: "Immobilier, Distribution…",
  },
];

export default function SectorChart() {
  const [hovered, setHovered] = useState<number | null>(null);
  const max = Math.max(...SECTORS.map((s) => s.pct));

  return (
    <div className="my-7">
      {SECTORS.map((s, i) => (
        <div
          key={i}
          className="mb-2.5 cursor-default"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="mb-1 flex justify-between text-[13px]">
            <span
              className={cn(
                "transition-colors duration-150",
                hovered === i ? "font-semibold" : "font-normal text-foreground"
              )}
              style={hovered === i ? { color: s.color } : undefined}
            >
              {s.name}
            </span>
            <span className="text-[12px] text-muted-foreground">
              {hovered === i ? s.examples : `${s.pct}%`}
            </span>
          </div>

          {/* Bar track */}
          <div className="h-2.5 rounded-sm bg-muted">
            <div
              className="h-2.5 rounded-sm transition-all duration-300"
              style={{
                width: `${(s.pct / max) * 100}%`,
                background: s.color,
              }}
            />
          </div>
        </div>
      ))}

      <p className="mt-3 text-[12px] text-muted-foreground">
        Hover a sector to see example companies. Approximate weights as of 2025.
      </p>
    </div>
  );
}
