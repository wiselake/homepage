import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-accent text-accent text-xs font-medium tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(245,166,35,0.1)]">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      {children}
    </span>
  );
}
