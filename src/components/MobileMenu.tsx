"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/site";
import LangSwitch from "./LangSwitch";

type Item = { label: string; href: string };

/**
 * Header menu below `md`. A native <details> panel, so it opens without JS;
 * the script only closes it after a link tap, on Escape, or on an outside tap.
 */
export default function MobileMenu({ locale, items, label }: { locale: Locale; items: Item[]; label: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (focusToggle: boolean) => {
      const el = ref.current;
      if (!el) return;
      el.open = false;
      if (focusToggle) el.querySelector("summary")?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) close(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <details
      ref={ref}
      className="group md:hidden"
      onToggle={(e) => setOpen(e.currentTarget.open)}
      onClick={(e) => {
        if ((e.target as Element).closest("a") && ref.current) ref.current.open = false;
      }}
    >
      <summary
        aria-label={label}
        className="-mr-2.5 flex size-11 cursor-pointer list-none items-center justify-center rounded-[6px] text-ink hover:text-brand [&::-webkit-details-marker]:hidden"
      >
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path className="group-open:hidden" d="M4 7h16M4 12h16M4 17h16" />
          <path className="hidden group-open:block" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </summary>
      <div className="absolute inset-x-0 top-full border-b border-line bg-paper px-6 pb-4 pt-2">
        <nav aria-label={label} className="grid text-[16px]">
          {items.map((n) => (
            <a key={n.href} href={n.href} className="flex min-h-11 items-center border-b border-line-soft text-ink hover:text-brand">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex min-h-11 items-center pt-2">
          <LangSwitch locale={locale} touch />
        </div>
      </div>
    </details>
  );
}
