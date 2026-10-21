import type { ReactNode } from "react";

type BadgeTone = "live" | "dev" | "soon" | "neutral" | "ai";

const badgeTone: Record<BadgeTone, string> = {
  live: "bg-brand-tint text-brand-dark",
  dev: "border border-line-strong text-ink-2",
  soon: "border border-dashed border-line-strong text-muted",
  neutral: "bg-chip text-ink-2",
  ai: "bg-ai-tint text-ai-text",
};

export function Badge({ tone, children }: { tone: BadgeTone; children: ReactNode }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-3 py-0.5 text-[13px] font-semibold ${badgeTone[tone]}`}>
      {children}
    </span>
  );
}

const btn = {
  primary: "bg-brand text-white hover:bg-brand-dark hover:text-white",
  outline: "border border-line-strong bg-card text-ink hover:border-ink hover:text-ink",
  onNight: "bg-white text-night hover:bg-brand-tint hover:text-night",
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
  const sizing = size === "lg" ? "min-h-[52px] px-6 text-[17px]" : "min-h-11 px-5 text-[16px]";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold transition-colors ${sizing} ${btn[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/** Text link. An ::after overlay makes the tap area at least 44px tall without changing the layout. */
export function TextLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className="relative text-[16px] font-semibold after:absolute after:inset-x-0 after:-inset-y-2.5"
    >
      {children}
    </a>
  );
}

export function Eyebrow({ children, className = "text-brand" }: { children: ReactNode; className?: string }) {
  return <p className={`m-0 text-[14px] font-bold uppercase tracking-[0.12em] ${className}`}>{children}</p>;
}

/** Section heading. `as="h1"` when it is the page title; the look stays the same. */
export function SectionTitle({ children, className = "", as: Tag = "h2" }: { children: ReactNode; className?: string; as?: "h1" | "h2" }) {
  return (
    <Tag className={`m-0 text-[clamp(30px,4vw,48px)] font-bold leading-[1.18] tracking-[-0.035em] ${className}`}>
      {children}
    </Tag>
  );
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
