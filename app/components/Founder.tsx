import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="mx-auto w-full max-w-[1200px] px-6 py-7 sm:px-8 sm:py-9 lg:py-14">
      <div className="panel overflow-hidden px-7 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* heading — first on mobile; sits atop the body text in the right column on desktop */}
          <div className="text-center lg:order-1 lg:text-right">
            <p className="kicker justify-center lg:justify-start">הסיפור שלנו</p>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              הכירו את המייסד
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-violet-light">
              בר אטיאס · מייסד FITMATCH AI
            </p>
          </div>

          {/* images — diagonal, overlapping; second on mobile, right column on desktop */}
          <div className="lg:order-2 lg:row-span-2">
            <div className="relative mx-auto h-[400px] w-[290px] sm:h-[480px] sm:w-[360px] lg:h-[540px] lg:w-full lg:max-w-[420px]">
              {/* front / higher */}
              <div className="absolute left-0 top-0 z-20 h-[78%] w-[62%] -rotate-[4deg] overflow-hidden rounded-[22px] border border-line bg-surface shadow-2xl">
                <Image
                  src="/ironman.jpg"
                  alt="בר אטיאס בקו הסיום של תחרות איש הברזל"
                  fill
                  sizes="(max-width: 1024px) 55vw, 260px"
                  className="object-cover"
                />
              </div>
              {/* behind / lower */}
              <div className="absolute bottom-0 right-0 z-10 h-[78%] w-[62%] rotate-[4deg] overflow-hidden rounded-[22px] border border-violet/25 bg-surface shadow-2xl">
                <Image
                  src="/bar-army.jpg"
                  alt="בר אטיאס בשירות הצבאי"
                  fill
                  sizes="(max-width: 1024px) 55vw, 260px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* body text — last on mobile; continues under the heading in the right column on desktop */}
          <div className="text-center lg:order-3 lg:text-right">
            <p className="text-base leading-8 text-muted sm:text-lg sm:leading-9">
              אני בר אטיאס, בן 31. במשך 13 השנים האחרונות שירתתי כלוחם ומפקד
              בחטיבת גבעתי, ובשנה האחרונה לקחתי על עצמי אתגר חדש — ההכנה לתחרות
              איש הברזל. במהלך הדרך נחשפתי לעולם פיטנס רווי באפשרויות, וגיליתי עד
              כמה מורכב למצוא את איש המקצוע שבאמת מתאים לצרכים ולמטרות שלי.
            </p>

            <blockquote className="mx-auto mt-6 max-w-[460px] border-r-2 border-lime/70 pr-4 text-right text-lg font-medium leading-8 text-foreground lg:mx-0">
              „אחרי כל הזמן והכסף שהשקעתי בחיפוש ההתאמה הנכונה, הבנתי שחייבת להיות
              דרך טובה יותר.”
            </blockquote>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">
              מתוך החוויה האישית הזו נולד הרעיון ל־FITMATCH AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
