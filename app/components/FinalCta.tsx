import { MATCH_TYPES } from "@/app/lib/site";
import TrainerPicker from "./TrainerPicker";

export default function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-7 sm:px-8 sm:py-9 lg:py-14">
      <div className="relative overflow-hidden rounded-[28px] border border-violet/30 px-7 py-14 text-center sm:px-12 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-violet-deep/40 via-violet/20 to-violet-deep/40" />
        <div className="glow pointer-events-none absolute -left-16 -top-24 h-72 w-72" />
        <div
          className="glow pointer-events-none absolute -bottom-28 right-0 h-72 w-72"
          style={{ ["--glow-rgb" as string]: "201 242 78" }}
        />

        <div className="relative">
          <h2 className="mx-auto max-w-[640px] text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            מוכנים למצוא את ה־MATCH שלכם?
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-base leading-7 text-muted">
            שאלון קצר, תוצאה מדויקת. תוך זמן קצר תקבלו את ההתאמה שמתאימה בדיוק לכם.
          </p>
          <div className="mt-8 flex justify-center">
            <TrainerPicker
              label="מצא את ה־MATCH שלך"
              variant="primary"
              options={MATCH_TYPES}
              align="center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
