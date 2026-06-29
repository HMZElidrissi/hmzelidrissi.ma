import { cn } from "@/lib/utils-client";
import { AlertTriangle, Ban, Info, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type CalloutVariant = "info" | "tip" | "warning" | "danger";

const variants: Record<
  CalloutVariant,
  { bar: string; icon: string; text: string }
> = {
  info: {
    bar: "bg-blue-500/40",
    icon: "text-blue-500",
    text: "text-blue-950 dark:text-blue-200",
  },
  tip: {
    bar: "bg-emerald-500/40",
    icon: "text-emerald-500",
    text: "text-emerald-950 dark:text-emerald-200",
  },
  warning: {
    bar: "bg-amber-500/40",
    icon: "text-amber-500",
    text: "text-amber-950 dark:text-amber-200",
  },
  danger: {
    bar: "bg-red-500/40",
    icon: "text-red-500",
    text: "text-red-950 dark:text-red-200",
  },
};

const icons: Record<CalloutVariant, LucideIcon> = {
  info: Info,
  tip: Lightbulb,
  warning: AlertTriangle,
  danger: Ban,
};

const backgrounds: Record<CalloutVariant, string> = {
  info: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900",
  tip: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900",
  warning:
    "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900",
  danger: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900",
};

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Callout({
  variant = "info",
  title,
  icon,
  children,
  className,
}: CalloutProps) {
  const Icon = icons[variant];
  const v = variants[variant];

  return (
    <div
      className={cn(
        "flex gap-2 my-6 rounded-xl border p-3 ps-1 text-sm shadow-sm",
        backgrounds[variant],
        className
      )}
    >
      {/* accent bar */}
      <div role="none" className={cn("w-0.5 rounded-sm shrink-0", v.bar)} />

      {/* icon */}
      <div className="flex items-start pt-0.5">
        {icon ?? <Icon className={cn("size-4 shrink-0", v.icon)} />}
      </div>

      {/* content */}
      <div className={cn("flex min-w-0 flex-1 flex-col gap-1", v.text)}>
        {title && <p className="font-medium leading-none">{title}</p>}
        <div className="leading-relaxed [&>p]:m-0">{children}</div>
      </div>
    </div>
  );
}
