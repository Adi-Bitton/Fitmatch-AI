import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
      <div className="panel overflow-hidden px-7 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* text */}
          <div className="order-2 text-center lg:order-1 lg:text-right">
            <p className="kicker justify-center lg:justify-start">הסיפור שלנו</p>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              הכירו את המייסד
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-violet-light">
              בר אטיאס · מייסד FITMATCH AI
            </p>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">
              אני בר אטיאס, בן 31. במשך 13 השנים האחרונות שירתתי כלוחם ומפקד
              בחטיבת גבעתי, ובשנה האחרונה לקחתי על עצמי אתגר חדש — ההכנה לתחרות
              איש הברזל. במהלך הדרך נחשפתי לעולם פיטנס רווי באפשרויות, וגיליתי עד
              כמה מורכב למצוא את איש המקצוע שבאמת מתאים לצרכים ולמטרות שלי.
            </p>

            <blockquote className="mt-6 border-r-2 border-lime/70 pr-4 text-right text-lg font-medium leading-8 text-foreground">
              „אחרי כל הזמן והכסף שהשקעתי בחיפוש ההתאמה הנכונה, הבנתי שחייבת להיות
              דרך טובה יותר.”
            </blockquote>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">
              מתוך החוויה האישית הזו נולד הרעיון ל־FITMATCH AI.
            </p>
          </div>

          {/* image */}
          <div className="order-1 mx-auto w-full max-w-[380px] lg:order-2 lg:max-w-[420px]">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
                <Image
                  src="/ironman.jpg"
                  alt="בר אטיאס בקו הסיום של תחרות איש הברזל"
                  fill
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover object-[center_38%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 h-28 w-28 overflow-hidden rounded-xl border-2 border-ink-2 bg-surface shadow-xl sm:h-32 sm:w-32">
                <Image
                  src="/bar-army.jpg"
                  alt="בר אטיאס בשירות הצבאי"
                  fill
                  sizes="128px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
