"use client";

import { Fragment, useRef, useState } from "react";
import { ClipboardList, Sparkles, PhoneCall, ArrowLeft } from "lucide-react";
import { HOW_STEPS } from "@/app/lib/site";

const ICONS = [ClipboardList, Sparkles, PhoneCall];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const n = HOW_STEPS.length;

  const go = (dir: 1 | -1) => setActive((a) => (a + dir + n) % n);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 60) {
      // RTL: a swipe to the right (dx > 0) advances to the next card
      go(dx > 0 ? 1 : -1);
      touchStartX.current = null;
    }
  };
  const onTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <section id="how" className="mx-auto w-full max-w-[1200px] px-6 py-7 sm:px-8 sm:py-9 lg:py-14">
      <div className="mb-10 text-center lg:mb-16">
        <p className="kicker justify-center">How it works</p>
        <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          איך זה עובד?
        </h2>
      </div>

      {/* mobile: swipeable card deck */}
      <div
        className="relative mx-auto h-[380px] w-full max-w-[360px] touch-pan-y lg:hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {HOW_STEPS.map((step, i) => {
          const Icon = ICONS[i];
          const rel = (i - active + n) % n;
          const pos =
            rel === 0
              ? "z-30 translate-x-0 translate-y-0 rotate-[-3deg] scale-100 opacity-100"
              : rel === 1
                ? "z-20 translate-x-3 translate-y-4 rotate-[3deg] scale-[0.96] opacity-90"
                : "z-10 translate-x-6 translate-y-8 rotate-[6deg] scale-[0.92] opacity-70";
          return (
            <div
              key={step.number}
              className={`card absolute inset-x-0 top-0 mx-auto h-[320px] w-full p-7 transition-all duration-500 ease-out ${pos}`}
            >
              <span dir="ltr" className="font-display text-5xl font-bold text-violet/25">
                {step.number}
              </span>
              <span className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet-light">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
            </div>
          );
        })}

        {/* swipe hint + pagination */}
        <div className="absolute -bottom-9 inset-x-0 flex items-center justify-between text-sm text-faint">
          <span>← החליקו</span>
          <div className="flex gap-2">
            {HOW_STEPS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`שלב ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  active === i ? "bg-violet-light" : "bg-white/15"
                }`}
              />
            ))}
          </div>
          <span>החליקו →</span>
        </div>
      </div>

      {/* desktop grid */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-3">
        {HOW_STEPS.map((step, i) => {
          const Icon = ICONS[i];
          return (
            <Fragment key={step.number}>
              <div className="card relative flex flex-col p-7 lg:p-8">
                <span dir="ltr" className="font-display text-5xl font-bold text-violet/25">
                  {step.number}
                </span>
                <span className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet-light">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </div>

              {i < HOW_STEPS.length - 1 && (
                <div className="hidden items-center justify-center lg:flex">
                  <ArrowLeft className="h-6 w-6 text-violet/40" />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
