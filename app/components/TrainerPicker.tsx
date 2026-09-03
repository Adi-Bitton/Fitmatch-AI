"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { TRAINER_TYPES } from "@/app/lib/site";

type Props = {
  label: string;
  variant?: "primary" | "secondary";
  align?: "start" | "center";
};

export default function TrainerPicker({
  label,
  variant = "secondary",
  align = "center",
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const btn =
    variant === "primary"
      ? "cta-primary text-white"
      : "border border-line bg-white/[0.03] text-foreground hover:border-violet/50 hover:bg-violet/5";

  return (
    <div ref={ref} className="group relative flex w-full justify-center sm:w-auto">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-4 font-semibold transition-transform duration-200 hover:scale-[1.02] sm:w-auto ${btn}`}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        role="menu"
        className={`absolute top-full z-50 mt-3 w-full min-w-[240px] max-w-[320px] overflow-hidden rounded-2xl border border-line bg-ink-2 p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-all duration-200 ${
          align === "start" ? "right-0" : "left-1/2 -translate-x-1/2"
        } ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        {TRAINER_TYPES.map((t) => (
          <a
            key={t.label}
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 text-center font-medium text-muted transition-colors hover:bg-violet/10 hover:text-foreground"
          >
            {t.label}
          </a>
        ))}
      </div>
    </div>
  );
}
