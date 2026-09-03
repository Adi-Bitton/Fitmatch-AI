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
  { href: "#how", label: "איך זה עובד" },
  { href: "#categories", label: "תחומי אימון" },
  { href: "#trainers", label: "למאמנים" },
  { href: "#founder", label: "הסיפור שלנו" },
  { href: "#contact", label: "צור קשר" },
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
