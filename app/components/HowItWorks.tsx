import { Fragment } from "react";
import { ClipboardList, Sparkles, PhoneCall, ArrowLeft } from "lucide-react";
import { HOW_STEPS } from "@/app/lib/site";

const ICONS = [ClipboardList, Sparkles, PhoneCall];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
      <div className="mb-10 text-center lg:mb-16">
        <p className="kicker justify-center">How it works</p>
        <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          איך זה עובד?
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-3">
        {HOW_STEPS.map((step, i) => {
          const Icon = ICONS[i];
          return (
            <Fragment key={step.number}>
              <div className="card relative flex flex-col p-7 lg:p-8">
                <span
                  dir="ltr"
                  className="font-display text-5xl font-bold text-violet/25"
                >
                  {step.number}
                </span>
                <span className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet-light">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {step.description}
                </p>
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
