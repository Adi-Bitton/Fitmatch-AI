"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Wordmark from "./Wordmark";
import TrainerPicker from "./TrainerPicker";
import { NAV_LINKS, MATCH_TYPES } from "@/app/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/95 supports-[backdrop-filter]:bg-ink/80 supports-[backdrop-filter]:backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-6 sm:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-8 text-[0.95rem] text-muted lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <TrainerPicker
              label="התחילו עכשיו"
              variant="primary"
              size="sm"
              align="start"
              options={MATCH_TYPES}
            />
          </div>

          <button
            type="button"
            aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? "" : "pointer-events-none"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[84%] max-w-[360px] overflow-y-auto border-l border-line bg-ink-2 px-8 pb-12 pt-28 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-2 text-lg font-medium text-foreground">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors hover:bg-white/5"
              >
                {l.label}
                <ArrowLeft className="h-4 w-4 text-faint" />
              </a>
            ))}
          </nav>

          <div className="mt-6">
            <span className="mb-2 block px-4 text-xs font-semibold uppercase tracking-wider text-faint">
              בחרו תחום להתאמה
            </span>
            {MATCH_TYPES.map((t) => (
              <a
                key={t.label}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-violet/10"
              >
                {t.label}
                <ArrowLeft className="h-4 w-4 text-faint" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
