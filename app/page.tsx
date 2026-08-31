"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Target,
  Clock3,
  UsersRound,
  ChartNoAxesCombined,
} from "lucide-react";

export default function Home() {
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "972504080235";

    const message = `היי, הגעתי דרך אתר FITMATCH AI

שם: ${contactName}
טלפון: ${contactPhone}
הודעה: ${contactMessage}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#030305] text-white"
    >
      {/* HERO */}
      <section className="relative min-h-screen">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-[45%] top-[-120px] h-[700px] w-[700px] rounded-full bg-purple-700/15 blur-[150px]" />

        {/* Header */}
        <header className="relative z-20 mx-auto flex w-full max-w-[1450px] items-center justify-between px-6 py-6 lg:px-10">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold tracking-wide sm:text-3xl">
            <span>FITMATCH</span>

            <span className="rounded-md border border-purple-500 px-2 py-0.5 text-sm italic text-purple-300">
              AI
            </span>
          </div>



          {/* Navigation */}
          <nav className="hidden items-center gap-9 text-lg text-zinc-300 lg:flex">
            <a href="#about" className="transition hover:text-white">
               עלינו
            </a>
            
            <a href="#how" className="transition hover:text-white">
              איך זה עובד
            </a>

            <a href="#trainees" className="transition hover:text-white">
              למתאמנים
            </a>

            <a href="#trainers" className="transition hover:text-white">
              למאמנים
            </a>

            <a href="#faq" className="transition hover:text-white">
              שאלות נפוצות
            </a>

            <a href="#contact" className="transition hover:text-white">
              צור קשר
            </a>

          </nav>

          {/* Header CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://docs.google.com/forms/d/1CmunFdshpkfB63OGo0Kl8xRM0c2Vof5OCAgNcWAzYH0/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-gradient-to-l from-purple-500 to-violet-700 px-7 py-3 text-lg font-semibold shadow-[0_0_25px_rgba(139,92,246,0.35)] transition hover:scale-105 sm:block"
            >
              התחילו עכשיו
            </a>

            {/* Mobile menu icon */}
            <button
              type="button"
              aria-label="פתיחת תפריט"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-50 flex flex-col gap-1.5 lg:hidden"
            >
              <span
                className={`h-0.5 w-7 bg-white transition duration-300 ${
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-0.5 w-7 bg-white transition duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-7 bg-white transition duration-300 ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#050308]/95 px-8 pt-28 backdrop-blur-xl lg:hidden">

            <nav className="flex flex-col items-center gap-8 text-2xl font-semibold text-white">

              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-purple-400"
              >
                עלינו
              </a>

              <a
                href="#how"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-purple-400"
              >
                איך זה עובד
              </a>

              <a
                href="#categories"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-purple-400"
              >
                למתאמנים
              </a>

              <a
                href="#trainers"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-purple-400"
              >
                למאמנים
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-purple-400"
              >
                צור קשר
              </a>

            </nav>

          </div>
        )}

        {/* Hero Content */}
          <div className="relative z-10 mx-auto grid min-h-[calc(100vh-100px)] w-full max-w-[1450px] items-center gap-10 px-6 pb-16 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:-translate-y-20">          {/* Hero Text */}
          <div className="order-2 max-w-[620px] text-center lg:order-1 lg:text-right">
            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[78px]">
              <span className="block">
                <span className="bg-gradient-to-l from-purple-300 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
                  המאמן
                </span>{" "}
                הנכון.
              </span>

              <span className="mt-2 block">ההתאמה שלך.</span>

              <span className="bg-gradient-to-l from-purple-300 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
                  FITMATCH AI
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[560px] text-lg leading-8 text-zinc-300 lg:mx-0 lg:text-xl">
              מערכת AI חכמה המחברת בין מתאמנים למאמנים, קבוצות וסטודיו
              שמתאימים בדיוק למטרות, להעדפות ולסגנון החיים שלך.
            </p>

            {/* Hero Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                id="start"
                href="https://docs.google.com/forms/d/1CmunFdshpkfB63OGo0Kl8xRM0c2Vof5OCAgNcWAzYH0/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-l from-purple-500 to-violet-700 px-8 py-4 font-semibold shadow-[0_0_35px_rgba(139,92,246,0.4)] transition duration-300 hover:scale-[1.03]"
              >
                מצא את ה־MATCH שלך

                <span className="transition group-hover:-translate-x-1">
                  ←
                </span>
              </a>

              <div className="group relative">
              <button
                type="button"
                className="flex items-center justify-center gap-3 rounded-full border border-purple-500/70 bg-purple-950/10 px-8 py-4 font-semibold transition hover:bg-purple-500/10"
              >
                <span className="text-purple-300">♙</span>

                אני מאמן / סטודיו

                <span className="text-sm text-purple-300">⌄</span>
              </button>

              {/* Dropdown */}
              <div className="invisible absolute right-0 top-full z-50 w-[250px] pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">

                <div className="rounded-[22px] border border-purple-500/30 bg-[rgba(17,16,26,0.78)] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md">

                  <a
                    href="#"
                    className="block rounded-[14px] px-4 py-3 text-center text-lg font-medium text-zinc-300 transition hover:bg-purple-500/10 hover:text-white"
                  >
                    מאמן ריצה
                  </a>

                  <a
                    href="#"
                    className="block rounded-[14px] px-4 py-3 text-center text-lg font-medium text-zinc-300 transition hover:bg-purple-500/10 hover:text-white"
                  >
                    מאמן כוח
                  </a>

                  <a
                    href="#"
                    className="block rounded-[14px] px-4 py-3 text-center text-lg font-medium text-zinc-300 transition hover:bg-purple-500/10 hover:text-white"
                  >
                    פילאטיס
                  </a>

                  <a
                    href="#"
                    className="block rounded-[14px] px-4 py-3 text-center text-lg font-medium text-zinc-300 transition hover:bg-purple-500/10 hover:text-white"
                  >
                    שחייה
                  </a>

                  <a
                    href="#"
                    className="block rounded-[14px] px-4 py-3 text-center text-lg font-medium text-zinc-300 transition hover:bg-purple-500/10 hover:text-white"
                  >
                    אופניים
                  </a>

                  <a
                    href="#"
                    className="block rounded-[14px] px-4 py-3 text-center text-lg font-medium text-zinc-300 transition hover:bg-purple-500/10 hover:text-white"
                  >
                    תזונה
                  </a>

                </div>
              </div>
            </div>
            </div>

            {/* Social Proof */}
            <div className="mt-9 flex flex-col items-center gap-3 text-sm text-zinc-400 sm:flex-row lg:justify-start">
              <div className="flex -space-x-2 space-x-reverse">
                {["A", "D", "N", "Y"].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-zinc-700 text-xs font-bold"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <p>
                <span className="font-bold text-purple-400">+1,200</span>{" "}
                מתאמנים כבר מצאו את ההתאמה שלהם
              </p>

            </div>
          </div>

          {/* AI Head */}
          <div className="order-1 relative flex min-h-[420px] items-center justify-center lg:order-2 lg:min-h-[650px]">
            {/* Glow behind head */}
            <div className="pointer-events-none absolute h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[130px]" />

            {/* Head + Wheel layers */}
            <div className="relative z-10 w-full max-w-[720px]">
              {/* Static head */}
              <Image
                src="/fitmatch-head-base.png"
                alt="FITMATCH AI Head"
                width={1200}
                height={1200}
                priority
                className="relative z-10 h-auto w-full object-contain"
              />

              {/* Static wheel */}
              <Image
                src="/fitmatch-wheel.png"
                alt="FITMATCH AI Wheel"
                fill
                priority  
                className="z-20 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#benefits"
          className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-zinc-400 lg:flex"
        >
          <span className="flex h-8 w-5 items-start justify-center rounded-full border border-purple-400 p-1">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          </span>

          <span>גללו מטה כדי לגלות עוד</span>
          <span className="text-purple-400">⌄</span>
        </a>
      </section>

      {/* Benefits */}
      <section
        id="benefits"
        className="relative mx-auto w-[calc(100%-3rem)] max-w-[1380px] pb-1 lg:-translate-y-2"
      >
        <div className="grid overflow-hidden rounded-[28px] border border-purple-500/20 bg-gradient-to-b from-[#11101a] to-[#08080d] shadow-[0_0_50px_rgba(88,28,135,0.12)] sm:grid-cols-2 lg:grid-cols-4">
          {/* Benefit 1 */}
          <div className="group relative flex min-h-[230px] flex-col items-center justify-center px-8 py-10 text-center">
            <div className="absolute left-0 top-[15%] hidden h-[70%] w-px bg-purple-500/15 lg:block" />

            <Target
              strokeWidth={1.8}
              className="mb-6 h-14 w-14 text-purple-400 drop-shadow-[0_0_12px_rgba(192,132,252,0.55)] transition duration-300 group-hover:scale-110"
            />

            <h3 className="text-xl font-bold text-purple-400">
              תוצאות אמיתיות
            </h3>

            <p className="mt-3 max-w-[230px] leading-7 text-zinc-400">
              התאמה מדויקת למטרות ולאורח החיים שלך.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="group relative flex min-h-[230px] flex-col items-center justify-center px-8 py-10 text-center">
            <div className="absolute left-0 top-[15%] hidden h-[70%] w-px bg-purple-500/15 lg:block" />

            <Clock3
              strokeWidth={1.8}
              className="mb-6 h-14 w-14 text-purple-400 drop-shadow-[0_0_12px_rgba(192,132,252,0.55)] transition duration-300 group-hover:scale-110"
            />

            <h3 className="text-xl font-bold text-purple-400">
              חיסכון בזמן
            </h3>

            <p className="mt-3 max-w-[230px] leading-7 text-zinc-400">
              מפסיקים לחפש בין עשרות אפשרויות ומקבלים התאמה ממוקדת.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="group relative flex min-h-[230px] flex-col items-center justify-center px-8 py-10 text-center">
            <div className="absolute left-0 top-[15%] hidden h-[70%] w-px bg-purple-500/15 lg:block" />

            <UsersRound
              strokeWidth={1.8}
              className="mb-6 h-14 w-14 text-purple-400 drop-shadow-[0_0_12px_rgba(192,132,252,0.55)] transition duration-300 group-hover:scale-110"
            />

            <h3 className="text-xl font-bold text-purple-400">
              התאמה אישית חכמה
            </h3>

            <p className="mt-3 max-w-[230px] leading-7 text-zinc-400">
              המערכת מבינה את הצרכים שלך ומוצאת התאמה רלוונטית.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="group relative flex min-h-[230px] flex-col items-center justify-center px-8 py-10 text-center">
            <ChartNoAxesCombined
              strokeWidth={1.8}
              className="mb-6 h-14 w-14 text-purple-400 drop-shadow-[0_0_12px_rgba(192,132,252,0.55)] transition duration-300 group-hover:scale-110"
            />

            <h3 className="text-xl font-bold text-purple-400">
              מגוון רחב של אפשרויות
            </h3>

            <p className="mt-3 max-w-[230px] leading-7 text-zinc-400">
              מאמנים אישיים, קבוצות, סטודיו ומגוון תחומי אימון.
            </p>
          </div>
        </div>
      </section>

       {/* ================= ABOUT ================= */}
      <section
      id="about"
      className="mx-auto w-[calc(100%-3rem)] max-w-[1380px] py-18"
    >
      <div className="rounded-[32px] border border-purple-500/20 bg-gradient-to-b from-[#11101a] to-[#08080d] p-12 text-center lg:p-20">

        <h2 className="text-5xl font-bold text-white lg:text-6xl">
          מאחורי FITMATCH AI
        </h2>

      <div className="mt-10 w-full space-y-7 text-xl leading-10 text-zinc-300 lg:text-3xl lg:leading-[1.8]">
          <p>
            ב - FITMATCH AI אנחנו מאמינים שהצלחה בעולם הפיטנס מתחילה בהתאמה הנכונה,
            לכן יצרנו פלטפורמה חכמה שמחברת בין מתאמנים לאנשי מקצוע על בסיס מטרות, צרכים, העדפות והתאמה אישית ולא רק על בסיס חיפוש אקראי.
            באמצעות מערכת מבוססת AI אנחנו הופכים שוק מלא באפשרויות לחיבור             אחד מדויק יותר בין המתאמן לאיש המקצוע הנכון עבורו.
          </p>

        </div>
      </div>
    </section> 


      {/* ================= CATEGORIES ================= */}
      <section
        id="categories"
        className="mx-auto w-[calc(100%-3rem)] max-w-[1450px] py-14"
      >
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            FIND YOUR MATCH
          </p>

          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            איזה תחום מעניין אותך?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
            בחרו את התחום שמתאים לכם ו־FITMATCH AI יעזור לכם למצוא את המאמן, הסטודיו או המסגרת הנכונה.
          </p>
        </div>

        {/* Cards */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 xl:grid-cols-6">

          {/* Running */}
          <a
            href="#"
            className="group relative min-h-[300px] min-w-[calc(50%-0.5rem)] snap-start overflow-hidden rounded-[22px] border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)] sm:min-w-0 sm:min-h-[400px]"          >
            <Image
              src="/running.jpg"
              alt="ריצה"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              <h3 className="text-2xl font-bold">ריצה</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
                מאמנים אישיים וקבוצות ריצה
              </p>
            </div>
          </a>

          {/* Triathlon */}
          <a
            href="#"
            className="group relative min-h-[300px] min-w-[calc(50%-0.5rem)] snap-start overflow-hidden rounded-[22px] border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)] sm:min-w-0 sm:min-h-[400px]"          >
            <Image
              src="/triathlon.jpg"
              alt="טריאטלון"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              <h3 className="text-2xl font-bold">טריאטלון</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
                אימונים אישיים וקבוצות רכיבה ושחייה
              </p>
            </div>
          </a>

          {/* studio / gym - להחליף תמונה!! */}
          <a
            href="#"
            className="group relative min-h-[300px] min-w-[calc(50%-0.5rem)] snap-start overflow-hidden rounded-[22px] border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)] sm:min-w-0 sm:min-h-[400px]"          >
            <Image
              src="/studio-strength.jpg"
              alt="סטודיו כוח"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              <h3 className="text-2xl font-bold">סטודיו strength</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
               סטודיואים לאימוני כוח
              </p>
            </div>
          </a>

          {/* Strength */}
          <a
            href="#"
            className="group relative min-h-[300px] min-w-[calc(50%-0.5rem)] snap-start overflow-hidden rounded-[22px] border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)] sm:min-w-0 sm:min-h-[400px]"          >
            <Image
              src="/strength.jpg"
              alt="אימוני כוח"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              <h3 className="text-2xl font-bold">מאמני כושר אישיים</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
                מאמנים אישיים ומסגרות כוח
              </p>
            </div>
          </a>

          {/* Pilates */}
          <a
            href="#"
            className="group relative min-h-[300px] min-w-[calc(50%-0.5rem)] snap-start overflow-hidden rounded-[22px] border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)] sm:min-w-0 sm:min-h-[400px]"          >
            <Image
              src="/pilates.jpg"
              alt="פילאטיס"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              <h3 className="text-2xl font-bold">פילאטיס</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
                סטודיואים ומדריכי פילאטיס
              </p>
            </div>
          </a>

          
          {/* Nutrition */}
          <a
            href="#"
            className="group relative min-h-[300px] min-w-[calc(50%-0.5rem)] snap-start overflow-hidden rounded-[22px] border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)] sm:min-w-0 sm:min-h-[400px]"          >
            <Image
              src="/nutrition.jpg"
              alt="תזונה"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              <h3 className="text-2xl font-bold">תזונה</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
                תזונאים קלינים וליווי מותאם אישית
              </p>
            </div>
          </a>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        id="how"
        className="mx-auto w-[calc(100%-3rem)] max-w-[1380px] py-10"
      >
        {/* Title */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            איך זה עובד?
          </h2>
        </div>

        {/* Steps */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">

          {/* STEP 1 */}
          <div className="text-center">
            <p className="mb-3 text-2xl font-bold tracking-[0.25em] text-purple-400">
              1
            </p>

            <h3 className="mb-7 text-2xl font-bold text-white lg:text-3xl">
              עונים על שאלון קצר
            </h3>

            <div className="relative mx-auto h-[340px] w-full max-w-[330px] overflow-hidden rounded-[26px] border border-purple-500/20 bg-gradient-to-b from-[#15121f] to-[#09090d]">
              <div className="flex h-full items-center justify-center text-zinc-500">
                תמונה 1
              </div>
            </div>
          </div>

          {/* ARROW 1 */}
          <div className="hidden items-center justify-center lg:flex">
            <span className="text-6xl font-light text-purple-400">
              ←
            </span>
          </div>

          {/* STEP 2 */}
          <div className="text-center">
            <p className="mb-3 text-2xl font-bold tracking-[0.25em] text-purple-400">
              2
            </p>

            <h3 className="mb-7 text-2xl font-bold text-white lg:text-3xl">
              FITMATCH AI מנתחת את ההתאמה
            </h3>

            <div className="relative mx-auto h-[340px] w-full max-w-[330px] overflow-hidden rounded-[26px] border border-purple-500/20 bg-gradient-to-b from-[#15121f] to-[#09090d]">
              <div className="flex h-full items-center justify-center text-zinc-500">
                תמונה 2
              </div>
            </div>
          </div>

          {/* ARROW 2 */}
          <div className="hidden items-center justify-center lg:flex">
            <span className="text-6xl font-light text-purple-400">
              ←
            </span>
          </div>

          {/* STEP 3 */}
          <div className="text-center">
            <p className="mb-3 text-2xl font-bold tracking-[0.25em] text-purple-400">
              3
            </p>

            <h3 className="mb-7 text-2xl font-bold text-white lg:text-3xl">
              מקבלים את ה־MATCH שלכם
            </h3>

            <div className="relative mx-auto h-[340px] w-full max-w-[330px] overflow-hidden rounded-[26px] border border-purple-500/20 bg-gradient-to-b from-[#15121f] to-[#09090d]">
              <div className="flex h-full items-center justify-center text-zinc-500">
                תמונה 3
              </div>
            </div>
          </div>

        </div>

        {/* Mobile arrows */}
        <style jsx>{`
          @media (max-width: 1023px) {
            .mobile-step-arrow::after {
              content: "↓";
            }
          }
        `}</style>

      </section>



      {/* ================= ARTICLE ================= */}
      <section className="mx-auto w-full max-w-[1450px] px-6 py-14 lg:px-10">

        {/* Small title */}
        <h2 className="mb-8 text-center text-4xl font-bold text-white lg:text-5xl">
             רוצים להכיר את הסיפור קצת יותר מקרוב?
        </h2>

        {/* Article preview */}
        <div className="mx-auto max-w-[1400px]">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[30px] border border-purple-500/30 bg-[#11101a] transition duration-300 hover:border-purple-400/60 hover:shadow-[0_0_45px_rgba(168,85,247,0.18)]"
          >
            {/* Temporary placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-[#11101a] to-black" />

            <div className="relative z-10 px-8 text-center">
              <p className="text-sm font-semibold tracking-[0.25em] text-purple-400">
                FITMATCH AI
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white">
                הכתבה תופיע כאן
              </h3>

              <p className="mt-4 text-zinc-400">
                לחצו לצפייה
              </p>

              <span className="mt-6 inline-block text-2xl text-purple-400 transition-transform duration-300 group-hover:-translate-x-2">
                ←
              </span>
            </div>
          </a>
        </div>

      </section>


        {/* ================= ABOUT CEO ================= */}

      <section
        id="about"
        className="mx-auto w-[calc(100%-3rem)] max-w-[1380px] py-14"
      >
        <div className="rounded-[32px] border border-purple-500/20 bg-gradient-to-b from-[#11101a] to-[#08080d] p-12 lg:p-20">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* TEXT - RIGHT */}
            <div className="text-right">

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
                ABOUT FITMATCH AI
              </p>

              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                הכירו את המייסד
              </h2>

              <div className="mt-10 text-3xl leading-12 text-zinc-300">
                <p>
                  אני בר אטיאס, בן 31. במשך 13 השנים האחרונות שירתתי כלוחם
                  ומפקד בחטיבת גבעתי, ובשנה האחרונה לקחתי את עצמי לאתגר חדש -
                  ההכנה לתחרות איש הברזל. במהלך הדרך נחשפתי לעולם פיטנס רווי
                  באפשרויות, וגיליתי עד כמה מורכב למצוא את איש המקצוע שבאמת
                  מתאים לצרכים ולמטרות שלי. אחרי לא מעט זמן, כסף ומשאבים
                  שהושקעו בחיפוש אחר ההתאמה הנכונה, הבנתי שיש כאן צורך אמיתי,
                  ומתוך החוויה האישית הזו נולד הרעיון ל־FITMATCH AI.
                </p>
              </div>

            </div>

            {/* IMAGES - LEFT */}
            <div className="relative mx-auto h-[600px] w-full max-w-[600px]">

              {/* Image 1 - upper left + ABOVE image 2 */}
              <div className="absolute left-0 top-0 z-20 h-[470px] w-[330px] -rotate-5 overflow-hidden rounded-[24px] border border-white/10 bg-zinc-900 shadow-2xl">
                <div className="flex h-full items-center justify-center text-zinc-500">
                  תמונה 1
                </div>
              </div>

              {/* Image 2 - lower right + BEHIND image 1 */}
              <div className="absolute bottom-0 right-0 z-10 h-[470px] w-[330px] rotate-5 overflow-hidden rounded-[24px] border border-purple-500/20 bg-zinc-900 shadow-2xl">
                <div className="flex h-full items-center justify-center text-zinc-500">
                  תמונה 2
                </div>
               </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="mx-auto w-[calc(100%-3rem)] max-w-[1380px] py-16"
      >
        <div className="rounded-[32px] border border-purple-500/20 bg-gradient-to-b from-[#11101a] to-[#08080d] p-8 sm:p-12 lg:p-16">

          {/* Title */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              צור קשר
            </h2>

            <p className="mt-4 text-3xl text-zinc-400">
              נשמח לשמוע מכם
            </p>
          </div>

          {/* Contact Details */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">

            {/* Phone */}
            <a
              href="https://wa.me/972504080235"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[22px] border border-white/10 bg-black/20 p-6 text-center transition duration-300 hover:border-purple-500/50 hover:bg-purple-500/5"
            >
              <p className="text-lg text-zinc-500">
                טלפון
              </p>

              <p className="mt-2 text-2xl font-semibold text-white">
                050-408-0235
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bar_atias54/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[22px] border border-white/10 bg-black/20 p-6 text-center transition duration-300 hover:border-purple-500/50 hover:bg-purple-500/5"
            >
              <p className="text-lg text-zinc-500">
                Instagram
              </p>

              <p className="mt-2 text-2xl font-semibold text-white">
                @bar_atias54
              </p>
            </a>

            {/* Email */}
            <button
              type="button"
              onClick={() =>
                navigator.clipboard.writeText("Baratias109@gmail.com")
              }
              className="w-full rounded-[22px] border border-white/10 bg-black/20 p-6 text-center transition duration-300 hover:border-purple-500/50 hover:bg-purple-500/5"
            >
              <p className="text-lg text-zinc-500">
                מייל
              </p>

              <p className="mt-2 text-2xl font-semibold text-white">
                Baratias109@gmail.com
              </p>

              <p className="mt-2 text-m text-purple-400">
                לחצו להעתקה
              </p>
            </button>

          </div>

          {/* Contact Form */}
          <div className="mx-auto mt-16 max-w-[900px]">

            <h3 className="mb-7 text-center text-2xl font-bold text-white">
              ניתן גם לכתוב לנו
            </h3>

            <form
              onSubmit={handleContactSubmit}
              className="space-y-5"
            >

              {/* Name + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">

                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="שם"
                  className="w-full rounded-[18px] border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500"
                />

                <input
                  type="tel"
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="מספר טלפון"
                  className="w-full rounded-[18px] border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500"
                />

              </div>

              {/* Message */}
              <textarea
                required
                rows={6}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="כתבו לנו..."
                className="w-full resize-none rounded-[18px] border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-l from-purple-500 to-violet-700 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.25)] transition duration-300 hover:scale-[1.01]"
              >
                שלח
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}