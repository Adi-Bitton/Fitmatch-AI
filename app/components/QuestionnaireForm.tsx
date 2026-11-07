"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import type { Questionnaire, QuestionnaireField } from "@/app/lib/questionnaires";
import { submitQuestionnaire, type QuestionnaireAnswers } from "@/app/lib/submitQuestionnaire";

type Props = {
  questionnaire: Questionnaire;
  title: string;
  subtitle: string;
};

type Stage = "intro" | number | "success" | "error";

function Field({
  field,
  value,
  onChange,
  showError,
}: {
  field: QuestionnaireField;
  value: string | string[] | undefined;
  onChange: (v: string | string[]) => void;
  showError: boolean;
}) {
  const fieldClass =
    "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3.5 text-right text-foreground outline-none transition-colors placeholder:text-faint focus:border-violet focus:bg-white/[0.06]";

  return (
    <div className="card p-5 sm:p-6">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-bold leading-6 text-foreground sm:text-lg">
          {field.title}
          {field.required && <span className="mr-1 text-[#ff4d4f]"> *</span>}
        </h3>
      </div>
      {field.description && (
        <p className="mt-1 text-sm text-muted">{field.description}</p>
      )}

      <div className="mt-4">
        {field.type === "short" && (
          <input
            type="text"
            value={(value as string) || ""}
            onChange={(e) => onChange(e.target.value)}
            className={fieldClass}
          />
        )}

        {field.type === "paragraph" && (
          <textarea
            rows={4}
            value={(value as string) || ""}
            onChange={(e) => onChange(e.target.value)}
            className={`${fieldClass} resize-none`}
          />
        )}

        {field.type === "radio" && (
          <div className="flex flex-col gap-2">
            {field.options?.map((opt) => {
              const selected = value === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => onChange(opt)}
                  className={`rounded-xl border px-4 py-3 text-right text-sm font-medium transition-colors sm:text-base ${
                    selected
                      ? "border-violet bg-violet/15 text-foreground"
                      : "border-white/12 bg-white/[0.03] text-muted hover:border-violet/40 hover:text-foreground"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        )}

        {field.type === "checkbox" && (
          <div className="flex flex-col gap-2">
            {field.options?.map((opt) => {
              const arr = (value as string[]) || [];
              const selected = arr.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() =>
                    onChange(selected ? arr.filter((o) => o !== opt) : [...arr, opt])
                  }
                  className={`flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-right text-sm font-medium transition-colors sm:text-base ${
                    selected
                      ? "border-violet bg-violet/15 text-foreground"
                      : "border-white/12 bg-white/[0.03] text-muted hover:border-violet/40 hover:text-foreground"
                  }`}
                >
                  {opt}
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                      selected ? "border-violet bg-violet text-white" : "border-white/20"
                    }`}
                  >
                    {selected && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {field.type === "scale" && (
          <div dir="ltr" className="flex items-center justify-center gap-3 py-2">
            {field.options?.map((opt) => {
              const selected = value === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => onChange(opt)}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border text-base font-bold transition-colors ${
                    selected
                      ? "border-violet bg-violet text-white"
                      : "border-white/15 bg-white/[0.03] text-muted hover:border-violet/50"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {showError && (
        <p className="mt-2 text-sm text-[#ff4d4f]">שדה חובה — נא למלא לפני שממשיכים.</p>
      )}
    </div>
  );
}

export default function QuestionnaireForm({ questionnaire, title, subtitle }: Props) {
  const [stage, setStage] = useState<Stage>("intro");
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [errorFields, setErrorFields] = useState<Set<number>>(new Set());
  const [pending, startTransition] = useTransition();

  const pages = questionnaire.pages;
  const pageIndex = typeof stage === "number" ? stage : 0;
  const currentPage = pages[pageIndex];

  const progressPct = useMemo(() => {
    if (stage === "intro") return 0;
    if (stage === "success") return 100;
    return Math.round(((pageIndex + 1) / pages.length) * 100);
  }, [stage, pageIndex, pages.length]);

  function setAnswer(entryId: number, value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [entryId]: value }));
    setErrorFields((prev) => {
      if (!prev.has(entryId)) return prev;
      const next = new Set(prev);
      next.delete(entryId);
      return next;
    });
  }

  function validateCurrentPage(): boolean {
    if (!currentPage) return true;
    const missing = new Set<number>();
    for (const f of currentPage.questions) {
      if (!f.required) continue;
      const v = answers[f.entryId];
      const empty = Array.isArray(v) ? v.length === 0 : !v || !String(v).trim();
      if (empty) missing.add(f.entryId);
    }
    setErrorFields(missing);
    if (missing.size > 0) {
      document.getElementById(`q-${[...missing][0]}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return false;
    }
    return true;
  }

  function goNext() {
    if (!validateCurrentPage()) return;
    if (pageIndex < pages.length - 1) {
      setStage(pageIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      submit();
    }
  }

  function goBack() {
    if (stage === "intro") return;
    if (pageIndex === 0) {
      setStage("intro");
    } else {
      setStage(pageIndex - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submit() {
    startTransition(async () => {
      const result = await submitQuestionnaire(questionnaire, answers);
      setStage(result.ok ? "success" : "error");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  return (
    <section className="mx-auto w-full max-w-[760px] px-6 py-10 sm:px-8 sm:py-16">
      {/* progress rail */}
      {stage !== "intro" && stage !== "success" && (
        <div className="mb-8">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-l from-violet-light to-lime transition-[width] duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-faint">
            <span>
              עמוד {pageIndex + 1} מתוך {pages.length}
            </span>
            {currentPage?.title && <span className="text-muted">{currentPage.title}</span>}
          </div>
        </div>
      )}

      {stage === "intro" && (
        <div className="panel px-7 py-10 text-center sm:px-12 sm:py-14">
          <p className="kicker justify-center">שאלון אפיון</p>
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-[520px] text-base leading-8 text-muted sm:text-lg">
            {subtitle}
          </p>
          {questionnaire.description && (
            <p className="mx-auto mt-4 max-w-[520px] whitespace-pre-line text-sm leading-7 text-faint">
              {questionnaire.description}
            </p>
          )}
          <button
            type="button"
            onClick={() => setStage(0)}
            className="cta-primary group mt-8 inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-lg font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
          >
            בואו נתחיל
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </button>
        </div>
      )}

      {typeof stage === "number" && currentPage && (
        <div>
          <div className="flex flex-col gap-4">
            {currentPage.questions.map((f) => (
              <div key={f.entryId} id={`q-${f.entryId}`}>
                <Field
                  field={f}
                  value={answers[f.entryId]}
                  onChange={(v) => setAnswer(f.entryId, v)}
                  showError={errorFields.has(f.entryId)}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3.5 font-semibold text-foreground transition-colors hover:border-violet/50 hover:bg-violet/5"
            >
              <ArrowRight className="h-4 w-4" />
              הקודם
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={pending}
              className="cta-primary inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-semibold text-white transition-transform duration-200 hover:scale-[1.03] disabled:opacity-70"
            >
              {pending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  שולח…
                </>
              ) : pageIndex === pages.length - 1 ? (
                "שליחה"
              ) : (
                "הבא"
              )}
              {!pending && <ArrowLeft className="h-4 w-4" />}
            </button>
          </div>
        </div>
      )}

      {stage === "success" && (
        <div className="panel px-7 py-14 text-center sm:px-12 sm:py-16">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime/15 text-lime">
            <Check className="h-8 w-8" strokeWidth={2.5} />
          </span>
          <h2 className="mt-6 text-3xl font-bold text-foreground">תודה רבה!</h2>
          <p className="mx-auto mt-4 max-w-[460px] text-base leading-8 text-muted">
            קיבלנו את הפרטים שלך. ניצור איתך קשר בהקדם עם ההתאמה שמצאנו עבורך.
          </p>
          <Link
            href="/"
            className="cta-primary mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
          >
            חזרה לעמוד הבית
          </Link>
        </div>
      )}

      {stage === "error" && (
        <div className="panel px-7 py-14 text-center sm:px-12 sm:py-16">
          <h2 className="text-2xl font-bold text-foreground">אופס, משהו השתבש</h2>
          <p className="mx-auto mt-4 max-w-[460px] text-base leading-8 text-muted">
            לא הצלחנו לשלוח את הטופס. אפשר לנסות שוב, או לפנות אלינו ישירות בוואטסאפ.
          </p>
          <button
            type="button"
            onClick={submit}
            className="cta-primary mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
          >
            נסו שוב
          </button>
        </div>
      )}
    </section>
  );
}
