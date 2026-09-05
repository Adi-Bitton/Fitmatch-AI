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

// Per-discipline questionnaires.
const FORMS = {
  // trainers / studios
  trainerRunning:
    "https://docs.google.com/forms/d/e/1FAIpQLSe8dHKpdmG4yGDPgfOxOMOdt2FcrZJ3DUthrYVP21PMfIpaVQ/viewform?usp=sharing&ouid=111186999667733889138",
  trainerTriathlon: "https://forms.gle/e7kJopzPKj44eeBQ6",
  trainerStrengthStudio: "https://forms.gle/ymuphuwtBw5f4YFF6",
  trainerPersonal: "https://forms.gle/Vjc8cDvEYjfUPCeC8",
  trainerPilates: "https://forms.gle/5LswFwZSsetduLaP6",
  trainerNutrition: "https://forms.gle/cX3S24Amw2E7nNgz9",
  // trainees
  matchRunning: "https://forms.gle/RhHcYfRKX8zMzwS96",
  matchStrengthStudio: "https://forms.gle/oJ1H1EFemjuUV2uMA",
  matchPersonal: "https://forms.gle/n7y3vhwzodpZ5Xp37",
  // NOTE: nutrition trainee form URL matches the strength-studio one as given —
  // likely a copy/paste slip to confirm with the site owner.
  matchNutrition: "https://forms.gle/oJ1H1EFemjuUV2uMA",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "עלינו" },
  { href: "#how", label: "איך זה עובד" },
  { href: "#categories", label: "תחומי אימון" },
  { href: "#trainers", label: "למאמנים" },
  { href: "#founder", label: "הסיפור שלנו" },
  { href: "#contact", label: "צור קשר" },
];

// Trainer / studio onboarding — one questionnaire per discipline.
export const TRAINER_TYPES: { label: string; href: string }[] = [
  { label: "ריצה", href: FORMS.trainerRunning },
  { label: "טריאתלון", href: FORMS.trainerTriathlon },
  { label: "סטודיו כוח", href: FORMS.trainerStrengthStudio },
  { label: "מאמן כושר אישי", href: FORMS.trainerPersonal },
  { label: "פילאטיס", href: FORMS.trainerPilates },
  { label: "תזונה", href: FORMS.trainerNutrition },
];

// Trainee intake — each training type has its own characterization questionnaire.
// Triathlon / pilates trainee forms not ready yet -> generic form for now.
export const MATCH_TYPES: { label: string; href: string }[] = [
  { label: "ריצה", href: FORMS.matchRunning },
  { label: "טריאתלון", href: MATCH_FORM_URL },
  { label: "סטודיו כוח", href: FORMS.matchStrengthStudio },
  { label: "מאמן כושר אישי", href: FORMS.matchPersonal },
  { label: "פילאטיס", href: MATCH_FORM_URL },
  { label: "תזונה", href: FORMS.matchNutrition },
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
    href: FORMS.matchRunning,
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
    href: FORMS.matchStrengthStudio,
  },
  {
    title: "מאמני כושר אישיים",
    description: "מאמנים אישיים ומסגרות כוח",
    image: "/strength.jpg",
    href: FORMS.matchPersonal,
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
    href: FORMS.matchNutrition,
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
