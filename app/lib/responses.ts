import { sql } from "@vercel/postgres";

export type ResponseRow = {
  id: number;
  role: string;
  discipline: string;
  answers: Record<string, unknown>;
  created_at: string;
};

export async function listResponses(): Promise<ResponseRow[]> {
  const { rows } = await sql<ResponseRow>`
    SELECT id, role, discipline, answers, created_at
    FROM questionnaire_responses
    ORDER BY created_at DESC
    LIMIT 200
  `;
  return rows;
}
