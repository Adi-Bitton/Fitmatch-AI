import { ArrowLeft } from "lucide-react";
import { MATCH_FORM_URL } from "@/app/lib/site";

export default function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-10 sm:px-8 lg:py-16">
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
          <a
            href={MATCH_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary group mt-8 inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-lg font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
          >
            מצא את ה־MATCH שלך
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
