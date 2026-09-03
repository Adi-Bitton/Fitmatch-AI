import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { MATCH_FORM_URL, CATEGORIES } from "@/app/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* texture + glow */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute left-1/2 top-[-14%] h-[620px] w-[620px] -translate-x-1/2" />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-10 px-6 pb-14 pt-28 sm:px-8 lg:min-h-[86vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:pt-32">
        {/* Copy */}
        <div className="order-2 text-center lg:order-1 lg:text-right">
          <p className="kicker justify-center lg:justify-start">
            פלטפורמת התאמה מבוססת AI
          </p>

          <h1 className="mt-5 font-black leading-[1.05] tracking-tight text-4xl sm:text-6xl lg:text-[68px]">
            <span className="block">
              התאמה{" "}
              <span className="bg-gradient-to-l from-violet-light via-fuchsia-400 to-violet-deep bg-clip-text text-transparent">
                מדויקת.
              </span>
            </span>
            <span className="mt-1 block">תוצאות גדולות.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[540px] text-lg leading-8 text-muted lg:mx-0">
            שאלון האפיון האישי שלנו, בשילוב טכנולוגיית AI מתקדמת, מתאים לך את
            המאמן, הקבוצה או הסטודיו המדויקים לאישיות, למטרות ולצרכים שלך.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={MATCH_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
            >
              מצא את ה־MATCH שלך
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
            <a
              href="#trainers"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-7 py-4 font-semibold text-foreground transition-colors hover:border-violet/50 hover:bg-violet/5"
            >
              אני מאמן / סטודיו
            </a>
          </div>

          {/* trust strip */}
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:justify-start">
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime/15 text-lime">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>
                <span className="font-bold text-foreground">1,200+</span> התאמות
                בוצעו
              </span>
            </div>
            <span className="hidden h-4 w-px bg-line sm:block" />
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="font-bold text-foreground">6</span> תחומי אימון
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {CATEGORIES.map((c) => (
              <span
                key={c.title}
                className="rounded-full border border-line bg-white/[0.02] px-3 py-1 text-xs text-faint"
              >
                {c.title}
              </span>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative aspect-square w-full max-w-[320px] sm:max-w-[440px] lg:max-w-[520px]">
            {/* glow */}
            <div className="glow pointer-events-none absolute inset-[-6%]" />

            {/* orbit rings */}
            <div className="pointer-events-none absolute inset-0 rounded-full border border-white/5" />
            <div className="pointer-events-none absolute inset-[10%] rounded-full border border-white/[0.06]" />
            <div
              className="pointer-events-none absolute inset-[10%] rounded-full"
              style={{ animation: "fm-orbit 26s linear infinite" }}
            >
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-lime shadow-[0_0_16px_4px_rgba(201,242,78,0.5)]" />
            </div>
            <div
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{ animation: "fm-orbit 40s linear infinite reverse" }}
            >
              <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-violet-light shadow-[0_0_14px_3px_rgba(167,139,250,0.6)]" />
            </div>

            {/* head */}
            <Image
              src="/fitmatch-head-base.png"
              alt="ראש דיגיטלי עם רשת נוירונים — סמל ה־AI של FITMATCH"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 520px"
              className="object-contain drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
