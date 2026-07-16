import type { Project, ProjectPillar } from "@/types/project";

export interface Pillar {
  id: ProjectPillar;
  number: `0${1 | 2 | 3}`;
  title: string;
  description: string;
  accent: "orange" | "pink" | "mustard";
}

export const hubConfig = {
  name: "Coletivo Inspira",
  location: "Bonito-MS + Belo Horizonte-MG",
  hudiPagesUrl: "https://coletivo-inspira.github.io/hudi-pg/",
  githubUrl: "https://github.com/coletivo-inspira",
  instagramUrl: "https://instagram.com/coletivo_inspira",
  whatsappUrl: "https://chat.whatsapp.com/LHMN8hm8a4ILdZGbatRv7G",
} as const;

export const pillars: readonly Pillar[] = [
  {
    id: "Social",
    number: "01",
    title: "Impacto social",
    description:
      "Acolhimento, autonomia e redes de cuidado que transformam encontros em caminhos coletivos.",
    accent: "orange",
  },
  {
    id: "Tecnologia",
    number: "02",
    title: "Tecnologia útil",
    description:
      "Produtos digitais acessíveis para dar presença, organização e novas oportunidades a pessoas e negócios.",
    accent: "mustard",
  },
  {
    id: "Cultura",
    number: "03",
    title: "Cultura viva",
    description:
      "Experiências, imagens e festas que preservam memória, movimentam territórios e aproximam pessoas.",
    accent: "pink",
  },
] as const;

// Edite esta lista para atualizar os destaques e a ordem exibida no hub.
export const projects: readonly Project[] = [
  {
    id: "canto-dos-passaros",
    title: "Canto dos Pássaros",
    eyebrow: "Experiência e território",
    pillar: "Social",
    description:
      "Um espaço para valorizar escuta, natureza e pertencimento por meio de encontros com identidade local.",
    location: "Bonito-MS",
    status: "Em desenvolvimento",
    featured: true,
  },
  {
    id: "olhares",
    title: "Olhares",
    eyebrow: "Imagem e memória",
    pillar: "Cultura",
    description:
      "Narrativas visuais que registram pessoas, gestos e paisagens a partir de quem vive o território.",
    location: "Bonito-MS",
    status: "Em desenvolvimento",
    featured: true,
  },
  {
    id: "hudi-pages",
    title: "HUDI Pages",
    eyebrow: "Smartfolios gratuitos",
    pillar: "Tecnologia",
    description:
      "Um editor modular para qualquer pessoa criar e publicar gratuitamente seu portfólio no ecossistema Inspira.",
    location: "Digital",
    status: "Ativo",
    featured: true,
    href: hubConfig.hudiPagesUrl,
  },
  {
    id: "carnaboia",
    title: "Carnaboia",
    eyebrow: "Festa e ecoturismo",
    pillar: "Cultura",
    description:
      "Uma celebração que conecta música, comunidade e a energia singular da Capital do Ecoturismo.",
    location: "Bonito-MS",
    status: "Ativo",
    featured: false,
  },
  {
    id: "meu-bloquinho",
    title: "Meu Bloquinho",
    eyebrow: "Carnaval de rua",
    pillar: "Cultura",
    description:
      "Identidade, produção e redes criativas que colocam o carnaval de rua em movimento.",
    location: "Belo Horizonte-MG",
    status: "Ativo",
    featured: false,
  },
  {
    id: "coletivo-cuida",
    title: "Coletivo Cuida",
    eyebrow: "Rede de acolhimento",
    pillar: "Social",
    description:
      "Conexões de cuidado e desenvolvimento pensadas para fortalecer pessoas e iniciativas locais.",
    location: "Rede Inspira",
    status: "Em desenvolvimento",
    featured: false,
  },
] as const;
