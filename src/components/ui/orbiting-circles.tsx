import React from "react";
import { cn } from "@/lib/utils-client";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <title>Orbiting Circles</title>
          {/* Subtle glow ring visible only in dark mode */}
          <circle
            className="stroke-foreground/5 stroke-[2] dark:stroke-foreground/10 dark:drop-shadow-[0_0_6px_hsl(var(--foreground)/0.15)]"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 8"
          />
          {/* Solid ring that adapts to the theme */}
          <circle
            className="stroke-border stroke-[0.75] dark:stroke-foreground/[0.08]"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              // Base layout
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,
              // Icon wrapper: pill background that adapts to light/dark
              "bg-background/80 backdrop-blur-sm",
              "border border-border/60",
              "shadow-sm",
              // Dark mode: stronger border + soft glow ring around each icon
              "dark:border-foreground/10 dark:bg-background/60",
              "dark:shadow-[0_0_10px_0_hsl(var(--foreground)/0.06),inset_0_1px_0_hsl(var(--foreground)/0.08)]",
              // Reverse direction support
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {/* Icon inherits currentColor; dim slightly in light, full opacity in dark */}
            <span className="flex items-center justify-center opacity-75 transition-opacity dark:opacity-90">
              {child}
            </span>
          </div>
        );
      })}
    </>
  );
}
