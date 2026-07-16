import type { ProjectFilter } from "@/types/project";

export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface ProjectFilterLink extends NavLink {
  filter: ProjectFilter;
}

export const mainNavLinks: readonly NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Pilares", href: "#pilares" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Comunidade", href: "#comunidade" },
] as const;

export const projectFilterLinks: readonly ProjectFilterLink[] = [
  { label: "Todos", href: "#projetos", filter: "Todos" },
  { label: "Social", href: "#projetos", filter: "Social" },
  { label: "Tecnologia", href: "#projetos", filter: "Tecnologia" },
  { label: "Cultura", href: "#projetos", filter: "Cultura" },
] as const;
