"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_ITEMS = [
  { key: "about", href: "/about" },
  { key: "nanotrans", href: "/nanotrans" },
  { key: "pigplan", href: "/pigplan" },
  { key: "services", href: "/services" },
  { key: "roadmap", href: "/roadmap" },
  { key: "contact", href: "/#contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[var(--container-max)] flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/wiselake_logo.png"
            alt="WiseLake"
            width={140}
            height={32}
            priority
            className="h-7 w-auto"
            style={{ filter: "brightness(0) invert(1) drop-shadow(0 1px 8px rgba(0,0,0,0.8))" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={`text-sm transition-colors duration-300 relative group ${
                isActive(href)
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {t(key)}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  isActive(href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
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
              className={`block w-5 h-px bg-text-primary transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-text-primary transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-text-primary transition-all duration-300 ${
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
            className="lg:hidden fixed inset-0 z-40 bg-black"
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
              {NAV_ITEMS.map(({ key, href }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={href}
                    className={`text-2xl font-light tracking-wide transition-colors ${
                      isActive(href)
                        ? "text-accent"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(key)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
