import type { GitHubRepo, RepoMetadata } from "@/types/github";
import { formatGitHubDate } from "@/lib/github";
import styles from "./RepoCard.module.css";

interface RepoCardProps {
  repo: GitHubRepo;
  metadata: RepoMetadata | undefined;
  onSelect: (repo: GitHubRepo) => void;
}

export function RepoCard({ repo, metadata, onSelect }: RepoCardProps) {
  const portfolioUrl = metadata?.portfolioUrl ?? null;
  const contributors = metadata?.contributors ?? null;

  const contributorDisplay =
    contributors !== null
      ? `${contributors} contribuidores`
      : "Dados indisponíveis";

  return (
    <article
      className={styles.card}
      onClick={() => onSelect(repo)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(repo);
        }
      }}
    >
      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.name}>{repo.name}</h3>
          {repo.language ? (
            <span className={styles.lang}>{repo.language}</span>
          ) : null}
        </div>

        <p className={styles.description}>
          {repo.description || "Este repositório ainda não possui descrição."}
        </p>

        <div className={styles.meta}>
          <span className={styles.metaItem}>{contributorDisplay}</span>
          <span className={styles.metaItem}>
            {portfolioUrl
              ? `Atualizado ${formatGitHubDate(repo.updated_at)}`
              : `Criado ${formatGitHubDate(repo.created_at)}`}
          </span>
        </div>
      </div>

      {portfolioUrl ? (
        <a
          href={portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          onClick={(e) => e.stopPropagation()}
        >
          Acessar Portfólio
        </a>
      ) : (
        <button type="button" className={styles.button} onClick={() => onSelect(repo)}>
          Mais Detalhes
        </button>
      )}
    </article>
  );
}

export function RepoCardSkeleton() {
  return (
    <div className={`${styles.card} ${styles.skeleton}`} aria-hidden="true">
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.skeletonLine} style={{ width: "60%" }} />
          <div className={styles.skeletonLine} style={{ width: "3rem" }} />
        </div>
        <div className={styles.skeletonLine} style={{ width: "90%", marginTop: "0.75rem" }} />
        <div className={styles.skeletonLine} style={{ width: "70%", marginTop: "0.5rem" }} />
        <div className={styles.meta}>
          <div className={styles.skeletonLine} style={{ width: "8rem" }} />
          <div className={styles.skeletonLine} style={{ width: "10rem" }} />
        </div>
      </div>
      <div className={`${styles.skeletonLine} ${styles.skeletonButton}`} />
    </div>
  );
}
