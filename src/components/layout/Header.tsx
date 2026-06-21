"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PIGPLAN_CHILDREN = [
  { label: "PigPlan", href: "/pigplan" },
  { label: "Insight PigPlan", href: "/pigplan/insight" },
  { label: "PigOS", href: "/pigplan/pigos-ai" },
  { label: "PigSignal", href: "/pigplan/pigsignal" },
] as const;

const NAV_ITEMS = [
  { key: "about", href: "/about" },
  { key: "nanotrans", href: "/nanotrans" },
  { key: "pigplan", href: "/pigplan", children: PIGPLAN_CHILDREN },
  { key: "b2b", href: "/b2b" },
  { key: "roadmap", href: "/roadmap" },
  { key: "contact", href: "/#contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ppOpen, setPpOpen] = useState(false);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the desktop PigPlan dropdown whenever the route changes — otherwise
  // client-side navigation leaves it open (the clicked item keeps :focus-within
  // and the cursor stays over the menu).
  useEffect(() => {
    setPpOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
      if (e.key === "Tab" && mobileOpen && mobileNavRef.current) {
        const focusable = mobileNavRef.current.querySelectorAll<HTMLElement>("a, button");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [mobileOpen]
  );

  useEffect(() => {
    if (mobileOpen) {
      document.addEventListener("keydown", handleKeyDown);
      const firstLink = mobileNavRef.current?.querySelector<HTMLElement>("a");
      firstLink?.focus();
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen, handleKeyDown]);

  const isActive = (href: string) => {
    if (href === "/#contact") return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  // The header is over a dark band only on the home hero at the top of the page.
  // Everywhere else (scrolled, or any sub-page whose PageHero is light) it sits on light.
  const onDark = pathname === "/" && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav shadow-[0_1px_0_rgba(15,23,34,0.06),0_8px_24px_rgba(16,24,40,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[var(--container-max)] flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={onDark ? "/wiselake_logo_white.png" : "/wiselake_logo_black.png"}
            alt="WiseLake"
            width={140}
            height={32}
            priority
            className="h-7 w-auto"
            style={{ filter: onDark ? "drop-shadow(0 1px 6px rgba(0,0,0,0.35))" : "none" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setPpOpen(true)}
                onMouseLeave={() => setPpOpen(false)}
                onFocus={() => setPpOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setPpOpen(false);
                }}
              >
                <Link
                  href={item.href}
                  aria-haspopup="menu"
                  aria-expanded={ppOpen}
                  className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                    isActive(item.href)
                      ? onDark ? "text-white" : "text-text-primary"
                      : onDark
                        ? "text-white/75 hover:text-white"
                        : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {t(item.key)}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`w-3.5 h-3.5 mt-px transition-transform duration-300 ${
                      ppOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                {/* Dropdown */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
                    ppOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-1"
                  }`}
                >
                  <div className="min-w-[208px] rounded-xl glass-strong border border-border p-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        aria-current={pathname === child.href ? "page" : undefined}
                        onClick={() => setPpOpen(false)}
                        className={`block px-4 py-2.5 rounded-lg text-sm transition-colors duration-200 ${
                          pathname === child.href
                            ? "text-accent"
                            : "text-text-secondary hover:text-text-primary hover:bg-white/[0.04]"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm transition-colors duration-300 relative group ${
                  isActive(item.href)
                    ? onDark ? "text-white" : "text-text-primary"
                    : onDark
                      ? "text-white/75 hover:text-white"
                      : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {t(item.key)}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageToggle />

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-px ${onDark && !mobileOpen ? "bg-white" : "bg-[#15181e]"} transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px ${onDark && !mobileOpen ? "bg-white" : "bg-[#15181e]"} transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px ${onDark && !mobileOpen ? "bg-white" : "bg-[#15181e]"} transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            ref={mobileNavRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-bg-white"
            aria-label="Mobile navigation"
          >
            {/* Close button */}
            <div className="flex justify-end px-6 py-4">
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2"
              >
                <span className="block w-5 h-px bg-text-primary rotate-45 translate-y-px" />
                <span className="block w-5 h-px bg-text-primary -rotate-45 -translate-y-px" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="flex flex-col items-center gap-3"
                >
                  <Link
                    href={item.href}
                    className={`text-2xl font-light tracking-wide transition-colors ${
                      ("children" in item && item.children
                        ? pathname === item.href
                        : isActive(item.href))
                        ? "text-accent"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                  {"children" in item && item.children && (
                    <div className="flex flex-col items-center gap-2.5">
                      {item.children
                        .filter((child) => child.href !== item.href)
                        .map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`text-base tracking-wide transition-colors ${
                              pathname === child.href
                                ? "text-accent"
                                : "text-text-secondary/80 hover:text-text-primary"
                            }`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
