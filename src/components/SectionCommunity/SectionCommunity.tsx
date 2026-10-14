"use client";

import { useCallback, useState } from "react";
import { RepoGrid } from "@/components/RepoGrid/RepoGrid";
import { RepoModal } from "@/components/RepoModal/RepoModal";
import { hubConfig } from "@/data/hub";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import type { GitHubRepo } from "@/types/github";
import styles from "./SectionCommunity.module.css";

export function SectionCommunity() {
  const { repos, metadata, loading, error, rateLimited } = useGitHubRepos();
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepo | null>(null);
  const [showAllRepos, setShowAllRepos] = useState(false);
  const handleCloseModal = useCallback(() => setSelectedRepo(null), []);
  const visibleRepos = showAllRepos ? repos : repos.slice(0, 3);

  return (
    <section id="comunidade" className={styles.section} aria-labelledby="community-title">
      <div className="section-container">
        <div className={styles.header}>
          <div className="section-heading">
            <p className="eyebrow">Código aberto, rede viva</p>
            <h2 id="community-title">Comunidade no GitHub</h2>
            <p>
              Repositórios públicos, experimentos e portfólios que fazem parte do
              ecossistema Coletivo Inspira.
            </p>
          </div>
          <a className="button buttonPrimary" href={hubConfig.hudiPagesUrl}>
            Criar meu portfólio
          </a>
        </div>

        {rateLimited ? (
          <div className={styles.statusBox} role="alert">
            <strong>O GitHub pediu uma pausa.</strong>
            <p>O limite público foi atingido. Os projetos voltam a aparecer em alguns minutos.</p>
          </div>
        ) : null}

        {error ? (
          <div className={styles.statusBox} role="alert">
            <strong>Não foi possível carregar a comunidade agora.</strong>
            <p>{error}</p>
          </div>
        ) : null}

        {loading ? (
          <p className={styles.counter} role="status" aria-live="polite">
            Carregando repositórios...
          </p>
        ) : null}

        {!loading && !error && !rateLimited && repos.length > 0 ? (
          <p className={styles.counter} role="status" aria-live="polite">
            {showAllRepos
              ? `${repos.length} repositórios exibidos`
              : `${Math.min(repos.length, 3)} destaques da comunidade`}
          </p>
        ) : null}

        {!loading && !error && !rateLimited && repos.length === 0 ? (
          <p className={styles.statusBox}>Nenhum repositório público encontrado.</p>
        ) : null}

        {!error && !rateLimited ? (
          <RepoGrid
            repos={visibleRepos}
            metadata={metadata}
            loading={loading}
            onSelectRepo={setSelectedRepo}
          />
        ) : null}

        {!loading && !error && !rateLimited && repos.length > 3 ? (
          <div className={styles.moreAction}>
            <button
              type="button"
              className="button buttonPrimary"
              aria-expanded={showAllRepos}
              onClick={() => setShowAllRepos((current) => !current)}
            >
              {showAllRepos ? "Mostrar apenas destaques" : `Ver todos (${repos.length})`}
            </button>
            <a href={hubConfig.githubUrl}>Visitar organização no GitHub</a>
          </div>
        ) : null}
      </div>

      <RepoModal
        repo={selectedRepo}
        metadata={selectedRepo ? metadata.get(selectedRepo.id) : undefined}
        onClose={handleCloseModal}
      />
    </section>
  );
}
