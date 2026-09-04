"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

/* Scroll-driven journey: the athlete's IRONMAN, start line -> finish line.
   A tall section holds a pinned canvas; scroll position picks the frame
   from a pre-rendered 16:9 image sequence (art-directed per stage). */

const FRAME_COUNT = 153;
const frameSrc = (i: number) =>
  `/race/frames/frame_${String(i + 1).padStart(3, "0")}.webp`;

const STAGES = [
  { key: "start", label: "זינוק", until: 0.19, caption: "כאן זה מתחיל — עם החלטה אחת." },
  { key: "swim", label: "שחייה", until: 0.4, caption: "מוצאים קצב, נכנסים לפוקוס." },
  { key: "bike", label: "רכיבה", until: 0.6, caption: "צוברים מומנטום, שומרים על הכיוון." },
  { key: "run", label: "ריצה", until: 0.82, caption: "החלק הקשה — ההתמדה עושה את ההבדל." },
  { key: "finish", label: "סיום", until: 1.01, caption: "מגיעים ליעד. בדיוק כמו שתכננו." },
];

function stageIndex(p: number) {
  for (let i = 0; i < STAGES.length; i++) if (p < STAGES[i].until) return i;
  return STAGES.length - 1;
}

export default function RaceScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef(0);
  const frameRef = useRef(-1);

  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration gate
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const draw = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let img = imagesRef.current[idx];
    if (!img || !img.complete || !img.naturalWidth) {
      // fall back to the nearest already-decoded frame
      let alt: HTMLImageElement | undefined;
      for (let d = 1; d < FRAME_COUNT; d++) {
        const lo = imagesRef.current[idx - d];
        if (lo && lo.complete && lo.naturalWidth) {
          alt = lo;
          break;
        }
        const hi = imagesRef.current[idx + d];
        if (hi && hi.complete && hi.naturalWidth) {
          alt = hi;
          break;
        }
      }
      if (!alt) return;
      img = alt;
    }

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) * 0.38; // bias toward the top so heads survive the crop
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    canvas.width = Math.round(r.width * dpr);
    canvas.height = Math.round(r.height * dpr);
    if (frameRef.current >= 0) draw(frameRef.current);
  }, [draw]);

  // preload the sequence
  useEffect(() => {
    if (!mounted || reduced) return;
    let done = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const im = new window.Image();
      im.decoding = "async";
      im.src = frameSrc(i);
      const onDone = () => {
        done += 1;
        setLoaded(done);
        if (done >= 20) setReady(true);
        if (i === frameRef.current) draw(i);
      };
      im.onload = onDone;
      im.onerror = onDone;
      imgs[i] = im;
    }
    imagesRef.current = imgs;
  }, [mounted, reduced, draw]);

  // scroll wiring
  useEffect(() => {
    if (!ready || reduced) return;
    resize();

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const travel = rect.height - window.innerHeight;
        const p =
          travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0;
        setProgress(p);
        const idx = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.round(p * (FRAME_COUNT - 1))),
        );
        if (idx !== frameRef.current) {
          frameRef.current = idx;
          draw(idx);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ready, reduced, draw, resize]);

  const si = stageIndex(progress);
  const pct = Math.round((loaded / FRAME_COUNT) * 100);

  // static fallback: no JS yet, or reduced motion
  if (!mounted || reduced) {
    return (
      <section id="journey" className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-line">
          <Image
            src={frameSrc(FRAME_COUNT - 4)}
            alt="בר אטיאס חוצה את קו הסיום של תחרות איש הברזל"
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

  return (
    <section ref={wrapRef} id="journey" className="relative h-[280vh] sm:h-[420vh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-ink">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* grade + blend into the page */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/45" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

        {/* loading veil */}
        {!ready && (
          <div className="absolute inset-0 grid place-items-center bg-ink">
            <div className="w-48 text-center">
              <div className="h-px w-full bg-white/15">
                <div
                  className="h-full bg-violet-light transition-[width] duration-200"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-3 text-xs tracking-[0.3em] text-faint">טוען…</p>
            </div>
          </div>
        )}

        {/* headline */}
        <div className="absolute inset-x-0 top-[11%] px-6 text-center">
          <p className="kicker justify-center">המסע שלך</p>
          <h2 className="mx-auto mt-3 max-w-[680px] text-3xl font-black leading-tight text-foreground sm:text-5xl">
            מקו הזינוק ועד קו הסיום
          </h2>
        </div>

        {/* per-stage caption */}
        <div className="absolute inset-x-0 bottom-[20%] h-10 px-6 text-center">
          {STAGES.map((s, i) => (
            <p
              key={s.key}
              className="absolute inset-x-0 mx-auto max-w-[520px] px-6 text-base leading-7 text-muted sm:text-lg"
              style={{ opacity: si === i ? 1 : 0, transition: "opacity 300ms" }}
            >
              {s.caption}
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
            {STAGES.map((s, i) => (
              <span
                key={s.key}
                className="text-[10px] font-medium tracking-wide sm:text-xs"
                style={{ color: i <= si ? "var(--foreground)" : "var(--faint)" }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
