import type { ReactNode } from "react";

type BadgeTone = "live" | "dev" | "soon" | "neutral" | "pigplan" | "pigplanLive";

const badgeTone: Record<BadgeTone, string> = {
  live: "bg-brand-tint text-brand",
  dev: "border border-line-strong text-ink-2",
  soon: "border border-dashed border-[#a8a397] text-muted",
  neutral: "bg-chip text-ink-2",
  pigplan: "bg-pigplan-tint text-pigplan",
  pigplanLive: "bg-pigplan text-white",
};

export function Badge({ tone, children }: { tone: BadgeTone; children: ReactNode }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-[6px] px-2.5 py-0.5 text-[13px] font-semibold ${badgeTone[tone]}`}>
      {children}
    </span>
  );
}

const btn = {
  primary: "bg-brand text-white hover:bg-night hover:text-white",
  outline: "border border-line-strong text-ink hover:border-ink hover:text-ink",
  outlineBrand: "border border-brand text-brand hover:bg-brand-tint hover:text-brand",
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
  const sizing = size === "lg" ? "min-h-12 px-[22px] text-[17px]" : "min-h-11 px-[18px] text-[15px]";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={`inline-flex items-center gap-2 rounded-[6px] font-semibold transition-colors ${sizing} ${btn[variant]} ${className}`}
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
      className="relative text-[15px] font-semibold after:absolute after:inset-x-0 after:-inset-y-2.5"
    >
      {children}
    </a>
  );
}

export function Eyebrow({ children, className = "text-link" }: { children: ReactNode; className?: string }) {
  return <p className={`m-0 text-[13px] font-bold uppercase tracking-[0.1em] ${className}`}>{children}</p>;
}

/** Section heading. `as="h1"` when it is the page title; the look stays the same. */
export function SectionTitle({ children, className = "", as: Tag = "h2" }: { children: ReactNode; className?: string; as?: "h1" | "h2" }) {
  return (
    <Tag className={`m-0 text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.2] tracking-[-0.03em] ${className}`}>
      {children}
    </Tag>
  );
}

export function Container({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-[1200px] px-6 ${className}`}>
      {children}
    </section>
  );
}

export function CheckItem({ children, color = "#446cd2" }: { children: ReactNode; color?: string }) {
  return (
    <li className="flex gap-2.5">
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={color} strokeWidth="1.8" className="mt-[5px] flex-none">
        <path d="M4 9.5l3 3 7-7" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
