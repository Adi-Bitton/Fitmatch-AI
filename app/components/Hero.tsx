import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { MATCH_FORM_URL, CATEGORIES } from "@/app/lib/site";
import TrainerPicker from "./TrainerPicker";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* texture + glow */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute left-1/2 top-[-14%] h-[620px] w-[620px] -translate-x-1/2" />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-8 px-6 pb-14 pt-28 sm:px-8 lg:min-h-[86vh] lg:grid-cols-[1fr_1.08fr] lg:gap-4 lg:pb-20 lg:pt-32">
        {/* Copy */}
        <div className="order-2 text-center lg:order-1 lg:text-right">
          <p className="kicker justify-center lg:justify-start">
            פלטפורמת התאמה מבוססת AI
          </p>

          <h1 className="mt-5 font-black leading-[1.08] tracking-tight text-[34px] sm:text-6xl lg:text-[62px]">
            <span className="block text-foreground">התאמה מדוייקת</span>
            <span className="mt-1 block text-foreground">תוצאות גדולות</span>
            <span
              dir="ltr"
              className="wordmark mt-3 block text-[28px] tracking-[0.06em] sm:text-5xl lg:text-[52px]"
            >
              <span className="bg-gradient-to-l from-violet-light via-fuchsia-400 to-violet-deep bg-clip-text text-transparent">
                FITMATCH AI
              </span>
            </span>
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
            <TrainerPicker label="אני מאמן / סטודיו" align="center" />
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

        {/* Visual — full brand emblem, bled into the layout */}
        <div className="order-1 flex justify-center lg:order-2 lg:block">
          <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-none lg:-ml-[9%] lg:-mr-[4%] lg:w-[118%]">
            <div className="glow pointer-events-none absolute inset-[-32%]" />
            <div
              className="glow pointer-events-none absolute inset-[-10%]"
              style={{ ["--tw-glow" as string]: "rgba(139,92,246,0.22)" }}
            />
            <Image
              src="/fitmatch-icon.png"
              alt="FITMATCH AI — התאמה חכמה בין מתאמנים לאנשי מקצוע בכל תחומי הכושר"
              width={1046}
              height={699}
              priority
              sizes="(max-width: 1024px) 80vw, 700px"
              className="relative h-auto w-full object-contain drop-shadow-[0_0_60px_rgba(139,92,246,0.45)]"
              style={{
                maskImage:
                  "radial-gradient(125% 125% at 52% 46%, #000 56%, transparent 90%)",
                WebkitMaskImage:
                  "radial-gradient(125% 125% at 52% 46%, #000 56%, transparent 90%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
