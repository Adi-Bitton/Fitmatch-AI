import trainerRunning from "./questionnaire-data/trainer-running.json";
import trainerTriathlon from "./questionnaire-data/trainer-triathlon.json";
import trainerStrengthStudio from "./questionnaire-data/trainer-strength-studio.json";
import trainerPersonal from "./questionnaire-data/trainer-personal.json";
import trainerPilates from "./questionnaire-data/trainer-pilates.json";
import trainerNutrition from "./questionnaire-data/trainer-nutrition.json";
import traineeRunning from "./questionnaire-data/trainee-running.json";
import traineeStrengthStudio from "./questionnaire-data/trainee-strength-studio.json";
import traineePersonal from "./questionnaire-data/trainee-personal.json";

export type FieldType = "short" | "paragraph" | "radio" | "checkbox" | "scale";

export type SimpleField = {
  entryId: number;
  title: string;
  description?: string | null;
  type: FieldType;
  options?: string[];
  required: boolean;
};

// A repeatable group of fields (e.g. one "plan" = included / price / ...),
// with a "+ add another" control in the UI. Hand-authored only — Google
// Forms has no equivalent, so this never comes from the extracted data.
export type RepeaterField = {
  entryId: number;
  title: string;
  description?: string | null;
  type: "repeater";
  required: boolean;
  addLabel: string;
  fields: SimpleField[];
};

export type QuestionnaireField = SimpleField | RepeaterField;

export type QuestionnairePage = {
  title?: string | null;
  questions: QuestionnaireField[];
};

export type Role = "trainer" | "trainee";

export type Questionnaire = {
  key: string;
  role: Role;
  discipline: string;
  description?: string | null;
  // Legacy leftover from the earlier Google-Forms-submission approach;
  // unused now that answers go into our own database. Hand-authored
  // questionnaires can omit it.
  formAction?: string;
  pages: QuestionnairePage[];
};

// Discipline labels shown in the UI (matches CATEGORIES / TRAINER_TYPES / MATCH_TYPES wording).
export const DISCIPLINE_LABELS: Record<string, string> = {
  running: "ריצה",
  triathlon: "טריאתלון",
  "strength-studio": "סטודיו כוח",
  personal: "מאמן כושר אישי",
  pilates: "פילאטיס",
  nutrition: "תזונה",
};

const TRAINER_QUESTIONNAIRES: Record<string, Questionnaire> = {
  running: trainerRunning as Questionnaire,
  triathlon: trainerTriathlon as Questionnaire,
  "strength-studio": trainerStrengthStudio as Questionnaire,
  personal: trainerPersonal as Questionnaire,
  pilates: trainerPilates as Questionnaire,
  nutrition: trainerNutrition as Questionnaire,
};

// Trainee questionnaires are not complete for every discipline yet —
// triathlon and pilates trainees still go to the generic Google Form
// (see MATCH_FORM_URL / MATCH_TYPES in site.ts), and the "nutrition"
// trainee form link supplied so far is a duplicate of strength-studio's,
// so it is intentionally left out here until a real one is confirmed.
const TRAINEE_QUESTIONNAIRES: Record<string, Questionnaire> = {
  running: traineeRunning as Questionnaire,
  "strength-studio": traineeStrengthStudio as Questionnaire,
  personal: traineePersonal as Questionnaire,
};

export function getQuestionnaire(role: Role, discipline: string): Questionnaire | undefined {
  const table = role === "trainer" ? TRAINER_QUESTIONNAIRES : TRAINEE_QUESTIONNAIRES;
  return table[discipline];
}

export function listDisciplines(role: Role): string[] {
  const table = role === "trainer" ? TRAINER_QUESTIONNAIRES : TRAINEE_QUESTIONNAIRES;
  return Object.keys(table);
}
