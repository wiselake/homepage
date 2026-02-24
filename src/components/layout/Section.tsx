"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, children, className = "", dark = true }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      data-in-view={isInView}
      className={`relative py-[var(--section-padding-y)] px-[var(--section-padding-x)] overflow-hidden ${
        dark ? "bg-bg-primary text-text-primary" : "bg-bg-white text-text-dark"
      } ${className}`}
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        {children}
      </div>
    </section>
  );
}
