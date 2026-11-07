import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QuestionnaireForm from "@/app/components/QuestionnaireForm";
import { DISCIPLINE_LABELS, getQuestionnaire, listDisciplines } from "@/app/lib/questionnaires";

export async function generateStaticParams() {
  return listDisciplines("trainee").map((discipline) => ({ discipline }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ discipline: string }>;
}): Promise<Metadata> {
  const { discipline } = await params;
  const label = DISCIPLINE_LABELS[discipline] ?? discipline;
  return { title: `שאלון התאמה — ${label}` };
}

export default async function MatchDisciplinePage({
  params,
}: {
  params: Promise<{ discipline: string }>;
}) {
  const { discipline } = await params;
  const questionnaire = getQuestionnaire("trainee", discipline);
  if (!questionnaire) notFound();

  const label = DISCIPLINE_LABELS[discipline] ?? discipline;

  return (
    <main dir="rtl">
      <QuestionnaireForm
        questionnaire={questionnaire}
        title={`מצא את ה־MATCH שלך — ${label}`}
        subtitle="כמה דקות של כנות, ואנחנו נמצא לך את ההתאמה הנכונה."
      />
    </main>
  );
}
