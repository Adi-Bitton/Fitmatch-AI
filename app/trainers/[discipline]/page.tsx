import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QuestionnaireForm from "@/app/components/QuestionnaireForm";
import { DISCIPLINE_LABELS, getQuestionnaire, listDisciplines } from "@/app/lib/questionnaires";

export async function generateStaticParams() {
  return listDisciplines("trainer").map((discipline) => ({ discipline }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ discipline: string }>;
}): Promise<Metadata> {
  const { discipline } = await params;
  const label = DISCIPLINE_LABELS[discipline] ?? discipline;
  return { title: `הצטרפות כמאמן — ${label}` };
}

export default async function TrainerDisciplinePage({
  params,
}: {
  params: Promise<{ discipline: string }>;
}) {
  const { discipline } = await params;
  const questionnaire = getQuestionnaire("trainer", discipline);
  if (!questionnaire) notFound();

  const label = DISCIPLINE_LABELS[discipline] ?? discipline;

  return (
    <main dir="rtl">
      <QuestionnaireForm
        questionnaire={questionnaire}
        title={`הצטרפו כמאמנים — ${label}`}
        subtitle="ספרו לנו עליכם, ונחבר אתכם למתאמנים שבאמת מתאימים לשיטה שלכם."
      />
    </main>
  );
}
