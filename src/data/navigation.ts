import type { ProjectCategory } from "@/types/project";

export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface ProjectFilterLink extends NavLink {
  filter: ProjectCategory;
}

export const mainNavLinks: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Comunidade", href: "#comunidade" },
];

export const projectFilterLinks: ProjectFilterLink[] = [
  { label: "Festas", href: "#projetos", filter: "Festas" },
  { label: "Saúde", href: "#projetos", filter: "Saúde" },
  { label: "Arte", href: "#projetos", filter: "Arte" },
  { label: "Ver Todos", href: "#projetos", filter: "Todos" },
];
