import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Wordmark from "./Wordmark";
import { NAV_LINKS, CONTACT } from "@/app/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            פלטפורמת התאמה מבוססת AI שמחברת מתאמנים לאנשי המקצוע הנכונים עבורם.
          </p>
        </div>

        <nav className="flex flex-col gap-2.5 text-sm text-muted">
          <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-faint">
            ניווט
          </span>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-2.5 text-sm text-muted">
          <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-faint">
            יצירת קשר
          </span>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <FaWhatsapp /> <span dir="ltr">{CONTACT.phoneDisplay}</span>
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <FaInstagram /> <span dir="ltr">{CONTACT.instagramHandle}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-2 px-6 pb-24 pt-6 text-xs text-faint sm:flex-row sm:px-8 sm:pb-6">
          <p>© {year} FITMATCH AI · כל הזכויות שמורות · @Adi Bitton</p>
          <p>נבנה בישראל</p>
        </div>
      </div>
    </footer>
  );
}
