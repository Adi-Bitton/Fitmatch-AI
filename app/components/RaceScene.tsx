"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* Scroll-scrubbed journey: 5 stills of a triathlon, start line -> finish line.
   The section is tall; a pinned stage inside it cross-fades between the frames
   as you scroll, with a slow shared zoom so the stills read as motion. */
const FRAMES = [
  {
    src: "/race/1-start.jpg",
    label: "קו הזינוק",
    caption: "כאן זה מתחיל — עם החלטה אחת.",
  },
  {
    src: "/race/2-swim.jpg",
    label: "מקצה השחייה",
    caption: "מוצאים קצב, נכנסים לפוקוס.",
  },
  {
    src: "/race/3-bike.jpg",
    label: "מקצה הרכיבה",
    caption: "צוברים מומנטום, שומרים על הכיוון.",
  },
  {
    src: "/race/4-run.jpg",
    label: "מקצה הריצה",
    caption: "החלק הקשה — כאן ההתמדה עושה את ההבדל.",
  },
  {
    src: "/race/5-finish.jpg",
    label: "קו הסיום",
    caption: "מגיעים ליעד. בדיוק כמו שתכננו.",
  },
];

const N = FRAMES.length;

export default function RaceScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = wrapRef.current;
    if (!el) return;

    let raf = 0;
    const measure = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const p = travel > 0 ? -rect.top / travel : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  // static fallback — just the finish frame + headline
  if (reduced) {
    return (
      <section
        id="journey"
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-8"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-line">
          <Image
            src={FRAMES[N - 1].src}
            alt={FRAMES[N - 1].label}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-center">
            <p className="kicker justify-center">המסע שלך</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-4xl">
              מקו הזינוק ועד קו הסיום
            </h2>
          </div>
        </div>
      </section>
    );
  }

  const playhead = progress * (N - 1); // 0 .. N-1
  const stage = Math.round(playhead);

  return (
    <section ref={wrapRef} id="journey" className="relative h-[200vh] sm:h-[280vh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* frames */}
        {FRAMES.map((frame, i) => {
          const opacity = Math.min(1, Math.max(0, 1 - Math.abs(playhead - i)));
          return (
            <div
              key={frame.src}
              className="absolute inset-0"
              style={{
                opacity,
                transform: `scale(${1.03 + progress * 0.1}) translateX(${
                  (playhead - i) * -2
                }%)`,
                transition: "opacity 120ms linear",
                willChange: "opacity, transform",
              }}
            >
              <Image
                src={frame.src}
                alt={frame.label}
                fill
                sizes="100vw"
                loading={i <= 2 ? "eager" : "lazy"}
                className="object-cover"
              />
            </div>
          );
        })}

        {/* grade + blend into the page above and below */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />

        {/* headline */}
        <div className="absolute inset-x-0 top-[12%] px-6 text-center">
          <p className="kicker justify-center">המסע שלך</p>
          <h2 className="mx-auto mt-3 max-w-[680px] text-3xl font-black leading-tight text-foreground sm:text-5xl">
            כל מקצה מקרב אותך לקו הסיום
          </h2>
        </div>

        {/* per-stage caption */}
        <div className="absolute inset-x-0 bottom-[20%] h-12 px-6 text-center">
          {FRAMES.map((frame, i) => (
            <p
              key={frame.src}
              className="absolute inset-x-0 mx-auto max-w-[520px] px-6 text-base leading-7 text-muted sm:text-lg"
              style={{
                opacity: Math.max(0, 1 - Math.abs(playhead - i) * 2),
              }}
            >
              {frame.caption}
            </p>
          ))}
        </div>

        {/* progress rail */}
        <div
          dir="rtl"
          className="absolute inset-x-0 bottom-[9%] mx-auto max-w-[580px] px-8"
        >
          <div className="relative h-px w-full bg-white/15">
            <div
              className="absolute right-0 top-0 h-full bg-gradient-to-l from-violet-light to-lime"
              style={{ width: `${progress * 100}%` }}
            />
            <span
              className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_12px_rgba(201,242,78,0.85)]"
              style={{ right: `${progress * 100}%`, marginRight: "-5px" }}
            />
          </div>
          <div className="mt-3 flex justify-between">
            {FRAMES.map((frame, i) => (
              <span
                key={frame.src}
                className="text-[10px] font-medium tracking-wide sm:text-xs"
                style={{
                  color: stage >= i ? "var(--foreground)" : "var(--faint)",
                }}
              >
                {frame.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
