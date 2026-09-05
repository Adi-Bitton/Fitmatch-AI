import type { Metadata, Viewport } from "next";
import { Heebo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://www.fitmatch-ai.com";
const TITLE = "FITMATCH AI — התאמה מדויקת בין מתאמנים לאנשי מקצוע";
const DESCRIPTION =
  "שאלון אפיון אישי בשילוב טכנולוגיית AI שמתאים לך את המאמן, הקבוצה או הסטודיו המדויקים לאישיות, למטרות ולצרכים שלך. פחות חיפוש, יותר תוצאות.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · FITMATCH AI",
  },
  description: DESCRIPTION,
  keywords: [
    "FITMATCH AI",
    "התאמת מאמן",
    "מאמן כושר אישי",
    "טריאתלון",
    "ריצה",
    "פילאטיס",
    "תזונאי",
    "AI כושר",
  ],
  applicationName: "FITMATCH AI",
  authors: [{ name: "בר אטיאס" }],
  creator: "FITMATCH AI",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "FITMATCH AI",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1a22",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-foreground">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-violet focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          דלג לתוכן הראשי
        </a>
        {children}
      </body>
    </html>
  );
}
