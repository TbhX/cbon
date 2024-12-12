export const PROJECT_STAGES = [
  {
    name: "Recherche et Sélection de Partenaires Stratégiques",
    status: "in-progress" as const,
    progress: 60,
  },
  {
    name: "Création de la Solution Innovante pour la Subvention",
    status: "pending" as const,
    progress: 0,
  },
  {
    name: "Demande de Subvention",
    status: "pending" as const,
    progress: 0,
  },
  {
    name: "Travaux d'Aménagement",
    status: "pending" as const,
    progress: 0,
  },
  {
    name: "Préparation à l'Ouverture et Lancement Officiel",
    status: "pending" as const,
    progress: 0,
  }
] as const;

export type ProjectStageStatus = "in-progress" | "pending" | "completed";

export interface ProjectStage {
  name: string;
  status: ProjectStageStatus;
  progress: number;
}