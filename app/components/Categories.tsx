"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { CATEGORIES, MATCH_FORM_URL, type Category } from "@/app/lib/site";

function Card({ category, className = "" }: { category: Category; className?: string }) {
  return (
    <a
      href={MATCH_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block aspect-[4/5] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/50 hover:shadow-[0_24px_60px_-24px_rgba(139,92,246,0.5)] ${className}`}
    >
      <Image
        src={category.image}
        alt={category.title}
        fill
        sizes="(max-width: 1024px) 60vw, 360px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* unified grade */}
      <div className="absolute inset-0 bg-violet/10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-white sm:text-xl">
            {category.title}
          </h3>
          <ArrowUpLeft className="h-4 w-4 shrink-0 text-white/60 transition-colors group-hover:text-lime" />
        </div>
        <p className="mt-1.5 text-sm leading-5 text-white/70">
          {category.description}
        </p>
      </div>
    </a>
  );
}

export default function Categories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const tick = () => {
      if (!paused.current) {
        el.scrollLeft += 0.4;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="categories"
      className="mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-8 sm:py-16 lg:py-24"
    >
      <div className="mb-10 text-center lg:mb-14">
        <p className="kicker justify-center">Find your match</p>
        <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          איזה תחום מעניין אותך?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          בחרו את התחום שמתאים לכם, ו־FITMATCH AI תעזור לכם למצוא את המאמן,
          הסטודיו או המסגרת הנכונה.
        </p>
      </div>

      {/* desktop grid */}
      <div className="hidden grid-cols-3 gap-5 lg:grid">
        {CATEGORIES.map((c) => (
          <Card key={c.title} category={c} />
        ))}
      </div>

      {/* mobile marquee */}
      <div
        ref={trackRef}
        dir="ltr"
        onPointerDown={() => (paused.current = true)}
        onPointerUp={() => {
          window.setTimeout(() => (paused.current = false), 1400);
        }}
        onPointerLeave={() => (paused.current = false)}
        className="no-scrollbar -mx-6 flex gap-4 overflow-x-auto px-6 lg:hidden"
      >
        {[...CATEGORIES, ...CATEGORIES].map((c, i) => (
          <Card
            key={`${c.title}-${i}`}
            category={c}
            className="w-[200px]"
          />
        ))}
      </div>
    </section>
  );
}
