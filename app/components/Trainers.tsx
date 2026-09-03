import { Check } from "lucide-react";
import TrainerPicker from "./TrainerPicker";

const POINTS = [
  "לקוחות שמתאימים לשיטה ולתחום שלך",
  "פחות זמן על שיחות שלא מבשילות",
  "חשיפה למתאמנים שכבר מוכנים להתחיל",
];

export default function Trainers() {
  return (
    <section id="trainers" className="mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
      <div className="panel px-7 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-center lg:text-right">
            <p className="kicker justify-center lg:justify-start">
              למאמנים ולסטודיו
            </p>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              קבלו את המתאמנים הנכונים עבורכם
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-base leading-8 text-muted lg:mx-0">
              אנחנו מחברים אתכם למתאמנים שהאישיות, המטרות והציפיות שלהם תואמים את
              מה שאתם מציעים — כך שיותר פניות הופכות ללקוחות מתמידים.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <TrainerPicker
                label="הצטרפו כמאמנים"
                variant="primary"
                align="center"
              />
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white/[0.03] px-7 py-4 font-semibold text-foreground transition-colors hover:border-violet/50 hover:bg-violet/5"
              >
                יש לי שאלה
              </a>
            </div>
          </div>

          <ul className="space-y-3">
            {POINTS.map((p) => (
              <li
                key={p}
                className="card flex items-center gap-3 p-4 text-sm text-foreground sm:text-base"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
