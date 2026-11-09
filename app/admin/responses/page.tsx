import { listResponses } from "@/app/lib/responses";
import { DISCIPLINE_LABELS } from "@/app/lib/questionnaires";

export const metadata = { robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const ROLE_LABELS: Record<string, string> = {
  trainer: "מאמן / סטודיו",
  trainee: "מתאמן",
};

function AnswerValue({ value }: { value: unknown }) {
  if (Array.isArray(value)) {
    if (value.length === 0) return <span className="text-faint">—</span>;

    // repeater rows: array of objects
    if (typeof value[0] === "object" && value[0] !== null) {
      return (
        <div className="mt-2 flex flex-col gap-3">
          {(value as Record<string, unknown>[]).map((row, i) => (
            <div key={i} className="rounded-lg border border-violet/20 bg-white/[0.03] p-3">
              <p className="mb-1.5 text-xs font-semibold text-violet-light">פריט {i + 1}</p>
              <dl className="flex flex-col gap-1">
                {Object.entries(row).map(([k, v]) => (
                  <div key={k} className="flex flex-wrap gap-1 text-sm">
                    <dt className="font-medium text-muted">{k}:</dt>
                    <dd className="text-foreground">
                      <AnswerValue value={v} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      );
    }

    // simple multi-select
    return <span>{(value as string[]).join(" · ")}</span>;
  }

  return <span>{String(value)}</span>;
}

export default async function AdminResponsesPage() {
  // Access control for this whole route lives in proxy.ts (HTTP Basic
  // Auth) — by the time this component runs, the request already passed.
  const responses = await listResponses();

  return (
    <main dir="rtl" className="mx-auto w-full max-w-[900px] px-6 pb-20 pt-28 sm:px-8">
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">תשובות שהתקבלו</h1>
      <p className="mt-2 text-sm text-muted">
        {responses.length} תשובות · מוצג העדכני ביותר קודם
      </p>

      <div className="mt-8 flex flex-col gap-5">
        {responses.map((r) => (
          <div key={r.id} className="card p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs font-semibold text-violet-light">
                  {ROLE_LABELS[r.role] ?? r.role}
                </span>
                <span className="text-sm font-bold text-foreground">
                  {DISCIPLINE_LABELS[r.discipline] ?? r.discipline}
                </span>
              </div>
              <span dir="ltr" className="text-xs text-faint">
                {new Date(r.created_at).toLocaleString("he-IL")}
              </span>
            </div>

            <dl className="mt-3 flex flex-col gap-3">
              {Object.entries(r.answers).map(([question, answer]) => (
                <div key={question}>
                  <dt className="text-sm font-semibold text-muted">{question}</dt>
                  <dd className="mt-0.5 text-base text-foreground">
                    <AnswerValue value={answer} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}

        {responses.length === 0 && (
          <p className="text-center text-muted">עדיין לא התקבלו תשובות.</p>
        )}
      </div>
    </main>
  );
}
