export const CONTACT = {
  phoneDisplay: "050-408-0235",
  phoneIntl: "972504080235",
  whatsapp: "https://wa.me/972504080235",
  instagram: "https://www.instagram.com/bar_atias54/",
  instagramHandle: "@bar_atias54",
};

// Generic intake form (Google Form) — fallback for disciplines whose
// dedicated questionnaire isn't ready yet.
export const MATCH_FORM_URL =
  "https://docs.google.com/forms/d/1CmunFdshpkfB63OGo0Kl8xRM0c2Vof5OCAgNcWAzYH0/viewform";

// Per-discipline questionnaires now live natively on the site (see
// app/lib/questionnaires.ts + app/match/[discipline] + app/trainers/[discipline]) —
// no more hopping out to Google Forms. These internal routes replace the
// external Google Form links that used to live here.
const TRAINER_ROUTE = (discipline: string) => `/trainers/${discipline}`;
const MATCH_ROUTE = (discipline: string) => `/match/${discipline}`;

export const NAV_LINKS = [
  { href: "#about", label: "עלינו" },
  { href: "#how", label: "איך זה עובד" },
  { href: "#categories", label: "תחומי אימון" },
  { href: "#trainers", label: "למאמנים" },
  { href: "#founder", label: "הסיפור שלנו" },
  { href: "#contact", label: "צור קשר" },
];

// Trainer / studio onboarding — one native questionnaire per discipline.
export const TRAINER_TYPES: { label: string; href: string }[] = [
  { label: "ריצה", href: TRAINER_ROUTE("running") },
  { label: "טריאתלון", href: TRAINER_ROUTE("triathlon") },
  { label: "סטודיו כוח", href: TRAINER_ROUTE("strength-studio") },
  { label: "מאמן כושר אישי", href: TRAINER_ROUTE("personal") },
  { label: "פילאטיס", href: TRAINER_ROUTE("pilates") },
  { label: "תזונה", href: TRAINER_ROUTE("nutrition") },
];

// Trainee intake — each training type has its own characterization questionnaire.
// Triathlon / pilates / nutrition trainee forms aren't confirmed yet (the
// "nutrition" link supplied so far duplicated strength-studio's) -> generic
// form for now, swap to MATCH_ROUTE("...") once the real ones are in.
export const MATCH_TYPES: { label: string; href: string }[] = [
  { label: "ריצה", href: MATCH_ROUTE("running") },
  { label: "טריאתלון", href: MATCH_FORM_URL },
  { label: "סטודיו כוח", href: MATCH_ROUTE("strength-studio") },
  { label: "מאמן כושר אישי", href: MATCH_ROUTE("personal") },
  { label: "פילאטיס", href: MATCH_FORM_URL },
  { label: "תזונה", href: MATCH_FORM_URL },
];

export type Category = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const CATEGORIES: Category[] = [
  {
    title: "ריצה",
    description: "מאמנים אישיים וקבוצות ריצה",
    image: "/running.jpg",
    href: MATCH_ROUTE("running"),
  },
  {
    title: "טריאתלון",
    description: "אימונים אישיים וקבוצות רכיבה ושחייה",
    image: "/triathlon.jpg",
    href: MATCH_FORM_URL,
  },
  {
    title: "סטודיו כוח",
    description: "סטודיואים לאימוני כוח וקבוצות",
    image: "/studio-strength.jpg",
    href: MATCH_ROUTE("strength-studio"),
  },
  {
    title: "מאמני כושר אישיים",
    description: "מאמנים אישיים ומסגרות כוח",
    image: "/strength.jpg",
    href: MATCH_ROUTE("personal"),
  },
  {
    title: "פילאטיס",
    description: "סטודיואים ומדריכי פילאטיס",
    image: "/pilates.jpg",
    href: MATCH_FORM_URL,
  },
  {
    title: "תזונה",
    description: "תזונאים קליניים וליווי מותאם אישית",
    image: "/nutrition.jpg",
    href: MATCH_FORM_URL,
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const HOW_STEPS: Step[] = [
  {
    number: "01",
    title: "עונים על שאלון אפיון אישי",
    description:
      "ממלאים שאלון קצר שיעזור לנו להכיר אתכם בצורה מקיפה ומדויקת — מטרות, ניסיון ואופי.",
  },
  {
    number: "02",
    title: "FITMATCH AI מנתחת את ההתאמה",
    description:
      "המערכת מזהה מה מתאים לכם, מה מניע אתכם ואיזה סוג ליווי יגרום לכם להתמיד לאורך זמן.",
  },
  {
    number: "03",
    title: "מקבלים את ה־MATCH שלכם",
    description:
      "מקבלים שיחת טלפון מהמאמן בזמן שנוח לכם, כדי להתאים את המסלול הרלוונטי עבורכם.",
  },
];
