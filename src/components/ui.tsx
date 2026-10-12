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
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof btn;
  external?: boolean;
  size?: "md" | "lg";
}) {
  const sizing = size === "lg" ? "min-h-12 px-[22px] text-[17px]" : "min-h-11 px-[18px] text-[15px]";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={`inline-flex items-center gap-2 rounded-[6px] font-semibold transition-colors ${sizing} ${btn[variant]}`}
    >
      {children}
    </a>
  );
}

export function TextLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})} className="text-[15px] font-semibold">
      {children}
    </a>
  );
}

export function Eyebrow({ children, className = "text-link" }: { children: ReactNode; className?: string }) {
  return <p className={`m-0 text-[13px] font-bold uppercase tracking-[0.1em] ${className}`}>{children}</p>;
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`m-0 text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.2] tracking-[-0.03em] ${className}`}>
      {children}
    </h2>
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

export function PhoneIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3.5 2.5h2l1 3-1.5 1a7 7 0 0 0 4.5 4.5l1-1.5 3 1v2a1 1 0 0 1-1 1A11 11 0 0 1 2.5 3.5a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
