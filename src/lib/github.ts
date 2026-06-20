import type { Repo } from "@/types/github";

export const GITHUB_ORG = "coletivo-inspira";

export const GITHUB_ORG_REPOS_API =
  `https://api.github.com/orgs/${GITHUB_ORG}/repos?per_page=100` as const;

export function formatGitHubDate(isoDate: string | null | undefined): string {
  if (!isoDate) return "N/A";

  return new Date(isoDate).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getPortfolioUrl(repo: Pick<Repo, "homepage" | "has_pages" | "name">): string | null {
  if (repo.homepage?.trim()) {
    try {
      return new URL(repo.homepage).toString();
    } catch {
      // Invalid homepage values are ignored in favor of the GitHub Pages fallback.
    }
  }

  if (repo.has_pages) {
    return `https://${GITHUB_ORG}.github.io/${repo.name}/`;
  }

  return null;
}
