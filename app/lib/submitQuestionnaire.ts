"use server";

import { sql } from "@vercel/postgres";
import type { Questionnaire } from "./questionnaires";

export type QuestionnaireAnswers = Record<number, string | string[]>;

export type SubmitResult = { ok: true } | { ok: false; error: string };

let tableReady: Promise<unknown> | null = null;

function ensureTable() {
  if (!tableReady) {
    tableReady = sql`
      CREATE TABLE IF NOT EXISTS questionnaire_responses (
        id SERIAL PRIMARY KEY,
        role TEXT NOT NULL,
        discipline TEXT NOT NULL,
        answers JSONB NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `;
  }
  return tableReady;
}

// Submits a completed questionnaire straight into our own database — no
// Google Forms involved. (An earlier version of this silently posted to
// the Google Form's own response endpoint so answers would land in the
// existing Sheet, but Google's anti-abuse system flags that kind of
// headless, cookie-less POST as bot traffic and rejects it, so this now
// writes to a real table instead. That table is also the natural seed
// for the matching-engine database the roadmap calls for later.)
export async function submitQuestionnaire(
  questionnaire: Questionnaire,
  answers: QuestionnaireAnswers,
): Promise<SubmitResult> {
  try {
    // Build a human-readable snapshot keyed by the actual question text,
    // in form order, rather than raw Google entry IDs — this is what a
    // non-technical reader (or a future admin view) will actually see.
    const readable: Record<string, string | string[]> = {};
    for (const page of questionnaire.pages) {
      for (const field of page.questions) {
        const value = answers[field.entryId];
        if (value === undefined) continue;
        const empty = Array.isArray(value) ? value.length === 0 : !String(value).trim();
        if (empty) continue;
        readable[field.title] = value;
      }
    }

    await ensureTable();
    await sql`
      INSERT INTO questionnaire_responses (role, discipline, answers)
      VALUES (${questionnaire.role}, ${questionnaire.discipline}, ${JSON.stringify(readable)}::jsonb)
    `;

    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "unknown error" };
  }
}
