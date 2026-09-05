import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של אתר FITMATCH AI.",
};

export default function AccessibilityPage() {
  return (
    <main
      dir="rtl"
      className="mx-auto w-full max-w-[820px] px-6 pb-20 pt-28 sm:px-8"
    >
      <Link
        href="/"
        className="text-sm text-violet-light transition-colors hover:text-foreground"
      >
        → חזרה לעמוד הבית
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">
        הצהרת נגישות
      </h1>

      <div className="mt-8 space-y-6 text-base leading-8 text-muted">
        <p>
          ב־FITMATCH AI אנו רואים חשיבות רבה במתן שירות שוויוני לכלל הגולשים,
          ופועלים להנגשת האתר כך שיהיה שמיש ונוח לשימוש גם עבור אנשים עם מוגבלות.
        </p>

        <section>
          <h2 className="text-xl font-bold text-foreground">רמת הנגישות באתר</h2>
          <p className="mt-2">
            האתר נבנה בהתאם להנחיות מסמך WCAG 2.1 ברמה AA ולתקן הישראלי ת&quot;י
            5568, ככל שהדבר ניתן. בין היתר בוצעו:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pr-5">
            <li>מבנה עמוד סמנטי וניווט מלא באמצעות מקלדת</li>
            <li>סימון מצב פוקוס ברור לכל רכיב אינטראקטיבי</li>
            <li>קישור &quot;דלג לתוכן הראשי&quot; בראש כל עמוד</li>
            <li>טקסט חלופי לתמונות ותוויות לשדות טפסים</li>
            <li>ניגודיות צבעים תקינה בין טקסט לרקע</li>
            <li>כיבוד העדפת מערכת להפחתת אנימציות (prefers-reduced-motion)</li>
            <li>תמיכה בהגדלת טקסט ובשינוי גודל התצוגה</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            מגבלות נגישות ידועות
          </h2>
          <p className="mt-2">
            חלק מהתכנים באתר, כגון סרטוני וידאו מוטמעים וטפסים חיצוניים (Google
            Forms), מסופקים על ידי צד שלישי ואינם בשליטתנו המלאה. אנו פועלים
            לשיפור מתמשך של הנגישות ומזמינים אתכם לפנות אלינו בכל קושי.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            פנייה בנושא נגישות
          </h2>
          <p className="mt-2">
            נתקלתם בבעיה או שיש לכם הצעה לשיפור? נשמח לשמוע:
          </p>
          <ul className="mt-3 space-y-1.5">
            <li>
              וואטסאפ / טלפון:{" "}
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-light hover:text-foreground"
              >
                <span dir="ltr">{CONTACT.phoneDisplay}</span>
              </a>
            </li>
            <li>
              אינסטגרם:{" "}
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-light hover:text-foreground"
              >
                <span dir="ltr">{CONTACT.instagramHandle}</span>
              </a>
            </li>
          </ul>
          <p className="mt-3">
            נעשה כל מאמץ לטפל בפנייתכם בהקדם האפשרי.
          </p>
        </section>

        <p className="text-sm text-faint">
          הצהרה זו עודכנה לאחרונה בחודש ספטמבר 2026.
        </p>
      </div>
    </main>
  );
}
