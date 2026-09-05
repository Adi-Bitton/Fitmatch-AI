export const CONTACT = {
  phoneDisplay: "050-408-0235",
  phoneIntl: "972504080235",
  whatsapp: "https://wa.me/972504080235",
  instagram: "https://www.instagram.com/bar_atias54/",
  instagramHandle: "@bar_atias54",
};

// External intake form (Google Form). Clean view URL — no edit param.
export const MATCH_FORM_URL =
  "https://docs.google.com/forms/d/1CmunFdshpkfB63OGo0Kl8xRM0c2Vof5OCAgNcWAzYH0/viewform";

export const NAV_LINKS = [
  { href: "#about", label: "עלינו" },
  { href: "#how", label: "איך זה עובד" },
  { href: "#categories", label: "תחומי אימון" },
  { href: "#trainers", label: "למאמנים" },
  { href: "#founder", label: "הסיפור שלנו" },
  { href: "#contact", label: "צור קשר" },
];

// Trainer / studio onboarding — one entry per discipline (as in the original site).
// TODO: swap `href` for a dedicated questionnaire per type when they exist.
export const TRAINER_TYPES: { label: string; href: string }[] = [
  { label: "מאמן ריצה", href: MATCH_FORM_URL },
  { label: "מאמן כוח", href: MATCH_FORM_URL },
  { label: "פילאטיס", href: MATCH_FORM_URL },
  { label: "שחייה", href: MATCH_FORM_URL },
  { label: "אופניים", href: MATCH_FORM_URL },
  { label: "תזונה", href: MATCH_FORM_URL },
];

// Trainee intake — each training type has its own characterization questionnaire.
// TODO: swap `href` for the dedicated questionnaire per discipline when ready.
export const MATCH_TYPES: { label: string; href: string }[] = [
  { label: "ריצה", href: MATCH_FORM_URL },
  { label: "טריאתלון", href: MATCH_FORM_URL },
  { label: "סטודיו כוח", href: MATCH_FORM_URL },
  { label: "מאמן כושר אישי", href: MATCH_FORM_URL },
  { label: "פילאטיס", href: MATCH_FORM_URL },
  { label: "תזונה", href: MATCH_FORM_URL },
];

export type Category = {
  title: string;
  description: string;
  image: string;
};

export const CATEGORIES: Category[] = [
  { title: "ריצה", description: "מאמנים אישיים וקבוצות ריצה", image: "/running.jpg" },
  {
    title: "טריאתלון",
    description: "אימונים אישיים וקבוצות רכיבה ושחייה",
    image: "/triathlon.jpg",
  },
  {
    title: "סטודיו כוח",
    description: "סטודיואים לאימוני כוח וקבוצות",
    image: "/studio-strength.jpg",
  },
  {
    title: "מאמני כושר אישיים",
    description: "מאמנים אישיים ומסגרות כוח",
    image: "/strength.jpg",
  },
  {
    title: "פילאטיס",
    description: "סטודיואים ומדריכי פילאטיס",
    image: "/pilates.jpg",
  },
  {
    title: "תזונה",
    description: "תזונאים קליניים וליווי מותאם אישית",
    image: "/nutrition.jpg",
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
