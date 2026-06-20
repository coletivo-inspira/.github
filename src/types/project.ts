export type ProjectCategory = "Todos" | "Festas" | "Saúde" | "Arte";

export interface Project {
  id: string;
  title: string;
  description: string;
  label: string;
  categories: Exclude<ProjectCategory, "Todos">[];
}
