export type ProjectFilter = "Todos" | "Festas" | "Saúde" | "Arte";

export type ProjectCategory = Exclude<ProjectFilter, "Todos"> | "Sustentabilidade";

export interface Project {
  id: string;
  title: string;
  description: string;
  label: string;
  categories: ProjectCategory[];
}
