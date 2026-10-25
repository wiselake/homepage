"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/*
 * Light motion for the home page (2026-10-23 draft). Both pieces render the final state on the
 * server, so the page reads fine without JavaScript, and both do nothing when the visitor asks the
 * system for reduced motion.
 */

const reducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Counts the first number in `value` up from 0 when it scrolls into view, e.g. "700개 농가". */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/\d+/);
  const target = match ? Number(match[0]) : 0;
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || reducedMotion()) return;
    setShown(0);
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          setShown(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // The value is static per render; re-running on `match` identity would restart the count.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  if (!match) return <>{value}</>;
  const i = match.index ?? 0;
  return (
    <span ref={ref}>
      {value.slice(0, i)}
      {/* Screen readers get the final figure, not the running count. */}
      <span aria-hidden="true" className="tabular-nums">
        {shown ?? target}
      </span>
      <span className="sr-only">{target}</span>
      {value.slice(i + match[0].length)}
    </span>
  );
}

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({ children, className = "", lift = "md" }: { children: ReactNode; className?: string; lift?: "sm" | "md" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "ready" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    setState("ready");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setState("shown");
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Hidden only once JavaScript is ready, so a failed script never leaves the image invisible.
  const motion = state === "ready" ? `${lift === "sm" ? "translate-y-5" : "translate-y-10"} opacity-0` : "translate-y-0 opacity-100";
  return (
    <div ref={ref} className={`transition-[opacity,translate] duration-[900ms] ease-out ${motion} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Marks a group as ready, then shown, when it scrolls into view. CSS in globals.css does the rest for
 * children with .seq-item (fade and lift, staggered by --i) and .draw-x / .draw-y (rules that draw in).
 * Without JavaScript, or with reduced motion, the state stays "idle" and everything is simply visible.
 */
export function InView({ as = "div", children, className = "", threshold = 0.2 }: { as?: "div" | "ol" | "dl"; children: ReactNode; className?: string; threshold?: number }) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "ready" | "shown">("idle");
  const El = as as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    setState("ready");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setState("shown");
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <El ref={ref} data-state={state} className={className}>
      {children}
    </El>
  );
}
