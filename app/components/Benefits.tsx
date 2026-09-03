import {
  Target,
  Clock3,
  BrainCircuit,
  ChartNoAxesCombined,
} from "lucide-react";

const ITEMS = [
  {
    icon: Target,
    title: "תוצאות אמיתיות",
    body: "התאמה מדויקת למטרות ולאורח החיים שלך — לא ניחוש.",
  },
  {
    icon: Clock3,
    title: "חיסכון בזמן וכסף",
    body: "מפסיקים לחפש בין עשרות אפשרויות ומקבלים התאמה ממוקדת.",
  },
  {
    icon: BrainCircuit,
    title: "התאמה אישית חכמה",
    body: "המערכת מבינה את הצרכים שלך ומאתרת את ההתאמה הנכונה עבורך.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "מגוון רחב",
    body: "מאמנים אישיים, קבוצות, סטודיו ותחומי אימון מגוונים.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="card group flex flex-col items-center p-6 text-center transition-colors duration-300 hover:border-violet/40"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet-light transition-transform duration-300 group-hover:scale-105">
              <Icon className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-2 max-w-[240px] text-sm leading-6 text-muted">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
