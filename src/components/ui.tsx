import type { ReactNode } from "react";

/*
 * Draft B design language: corporate and editorial. One 8px corner radius (unified 2026-10-22), no shadows or pills,
 * thin rules and a strict grid; weight comes from type size and real product imagery.
 * Colour (2026-10-23 indigo draft): every section is light; the dark ink is only a button fill.
 */

const btn = {
  primary: "bg-primary text-white hover:bg-primary-hover hover:text-white",
  outline: "border border-ink text-ink hover:bg-primary hover:text-white",
  // The one indigo-filled button on the page: the hero's main action.
  accent: "bg-accent text-white hover:bg-accent-hover hover:text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof btn;
  external?: boolean;
  size?: "md" | "lg";
  className?: string;
}) {
  const sizing = size === "lg" ? "min-h-[56px] px-7 text-[17px]" : "min-h-12 px-6 text-[16px]";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={`inline-flex items-center justify-center gap-3 rounded-[8px] font-semibold transition-colors ${sizing} ${btn[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/** Text link with an arrow. An ::after overlay makes the tap area at least 44px tall without changing the layout. */
export function TextLink({ href, children, external, className = "" }: { href: string; children: ReactNode; external?: boolean; className?: string }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={`relative inline-flex items-center gap-2 text-[16px] font-semibold underline-offset-[6px] after:absolute after:inset-x-0 after:-inset-y-2.5 hover:underline ${className}`}
    >
      {children}
    </a>
  );
}

export function Eyebrow({ children, className = "text-muted" }: { children: ReactNode; className?: string }) {
  return <p className={`m-0 text-[13px] font-semibold uppercase tracking-[0.16em] ${className}`}>{children}</p>;
}

/** Section number and label on a full-width rule, e.g. "01 — PigPlan · PigPlan AI". `onNight`: for the dark PigOS section. */
export function SectionLabel({ n, children, onNight = false }: { n?: string; children: ReactNode; onNight?: boolean }) {
  return (
    <div className={`flex items-baseline gap-5 border-t pt-5 text-[13px] font-semibold uppercase tracking-[0.16em] ${onNight ? "border-night-line text-night-sub" : "border-ink text-ink"}`}>
      {n && <span className={`tabular-nums ${onNight ? "text-accent-soft" : "text-accent"}`}>{n}</span>}
      <span>{children}</span>
    </div>
  );
}

/** Section heading. `as="h1"` when it is the page title; the look stays the same. */
export function SectionTitle({ children, className = "", as: Tag = "h2" }: { children: ReactNode; className?: string; as?: "h1" | "h2" }) {
  return <Tag className={`m-0 text-balance text-[clamp(32px,4.6vw,58px)] font-bold leading-[1.12] tracking-[-0.04em] ${className}`}>{children}</Tag>;
}

export function ArrowIcon({ down = false }: { down?: boolean }) {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className={down ? "rotate-90" : undefined}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
