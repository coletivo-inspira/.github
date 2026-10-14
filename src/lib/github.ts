import type { GitHubRepo, ContributorCount } from "@/types/github";

export const GITHUB_ORG = "coletivo-inspira";

export const GITHUB_ORG_REPOS_API =
  `https://api.github.com/orgs/${GITHUB_ORG}/repos?per_page=100` as const;

const FALLBACK_REPO_DESCRIPTIONS: Readonly<Record<string, string>> = {
  ".github": "Portal institucional e vitrine digital do Coletivo Inspira.",
  "brand-book":
    "Repositório central do Brand Book e do sistema visual do Coletivo Inspira.",
  "hudi-pg": "Editor para criar e publicar smartfólios gratuitos no ecossistema Inspira.",
  "hudi-lp": "Landing page do ecossistema HUDI Pages.",
  "hudi-boutique": "Experimentos de produtos digitais e presença online da rede Inspira.",
  lino_public: "Experimentos públicos do LINO para automação e apoio a projetos locais.",
  inspiratoken: "Experimento aberto do ecossistema tecnológico do Coletivo Inspira.",
  "nathalia-verri": "Smartfólio publicado no ecossistema Inspira.",
};

export function contributorsApiUrl(repoName: string): string {
  return `https://api.github.com/repos/${GITHUB_ORG}/${repoName}/contributors?per_page=1`;
}

const GITHUB_HEADERS: HeadersInit = {
  Accept: "application/vnd.github+json",
};

export function formatGitHubDate(isoDate: string | null | undefined): string {
  if (!isoDate) return "N/A";

  return new Date(isoDate).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getPortfolioUrl(repo: Pick<GitHubRepo, "homepage" | "has_pages" | "name">): string | null {
  if (repo.homepage?.trim()) {
    try {
      const parsedUrl = new URL(repo.homepage);
      if (parsedUrl.protocol === "http:" && parsedUrl.hostname !== "localhost") {
        parsedUrl.protocol = "https:";
      }
      return parsedUrl.toString();
    } catch {
      // Invalid homepage values are ignored in favor of the GitHub Pages fallback.
    }
  }

  if (repo.has_pages) {
    return `https://${GITHUB_ORG}.github.io/${repo.name}/`;
  }

  return null;
}

export function getRepoDescription(repo: Pick<GitHubRepo, "name" | "description">): string {
  const description = repo.description?.trim();
  if (description) {
    return description.replace(/^epositório\b/i, "Repositório");
  }

  return (
    FALLBACK_REPO_DESCRIPTIONS[repo.name] ??
    "Projeto aberto que faz parte do ecossistema Coletivo Inspira."
  );
}

/**
 * Fetches all public repos for the org.
 * Throws on network errors.
 * Returns `{ repos, rateLimited }`.
 */
export async function fetchOrgRepos(): Promise<{
  repos: GitHubRepo[];
  rateLimited: boolean;
}> {
  const response = await fetch(GITHUB_ORG_REPOS_API, {
    headers: GITHUB_HEADERS,
  });

  if (response.status === 403) {
    return { repos: [], rateLimited: true };
  }

  if (!response.ok) {
    throw new Error(`Falha na API do GitHub (status ${response.status})`);
  }

  const data: unknown = await response.json();
  if (!Array.isArray(data)) {
    return { repos: [], rateLimited: false };
  }

  return { repos: data as GitHubRepo[], rateLimited: false };
}

/**
 * Extracts contributor count from the paginated contributors endpoint.
 * Uses the `Link` header `last` page number when available, otherwise
 * falls back to the length of the first (and only) page.
 *
 * Returns `null` when the data is unavailable (403, 404, network error).
 */
export async function fetchContributorCount(
  repoName: string,
): Promise<ContributorCount> {
  try {
    const response = await fetch(contributorsApiUrl(repoName), {
      headers: GITHUB_HEADERS,
    });

    if (response.status === 403 || response.status === 404) {
      return null;
    }

    if (!response.ok) {
      return null;
    }

    const link = response.headers.get("link");
    if (link) {
      const lastMatch = link.match(/page=(\d+)>; rel="last"/);
      if (lastMatch) return parseInt(lastMatch[1], 10);
    }

    const data: unknown = await response.json();
    return Array.isArray(data) ? data.length : 0;
  } catch {
    return null;
  }
}
