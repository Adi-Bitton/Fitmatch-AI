export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1200px] px-6 py-7 sm:px-8 sm:py-9 lg:py-14">
      <div className="panel px-7 py-12 text-center sm:px-14 sm:py-14 lg:px-20 lg:py-20">
        <p className="kicker justify-center">עלינו</p>
        <h2 className="mx-auto mt-5 max-w-[720px] text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          הצלחה בעולם הפיטנס מתחילה{" "}
          <span className="bg-gradient-to-l from-violet-light to-violet-deep bg-clip-text text-transparent">
            בהתאמה הנכונה
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-[760px] text-lg leading-9 text-muted sm:text-xl sm:leading-10">
          יצרנו פלטפורמה חכמה שמחברת בין מתאמנים לאנשי מקצוע על בסיס מטרות, צרכים
          והעדפות אישיות — לא על בסיס חיפוש אקראי. באמצעות מערכת מבוססת AI אנחנו
          הופכים שוק מלא באפשרויות לחיבור אחד, מדויק יותר, בין המתאמן לאיש המקצוע
          הנכון עבורו.
        </p>
      </div>
    </section>
  );
}
