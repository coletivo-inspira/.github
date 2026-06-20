"use client";

import { useState, useCallback } from "react";
import type { GitHubRepo } from "@/types/github";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import { RepoGrid } from "@/components/RepoGrid/RepoGrid";
import { RepoModal } from "@/components/RepoModal/RepoModal";
import styles from "./SectionCommunity.module.css";

export function SectionCommunity() {
  const { repos, metadata, loading, error, rateLimited } = useGitHubRepos();
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepo | null>(null);

  const handleCloseModal = useCallback(() => setSelectedRepo(null), []);

  return (
    <section id="comunidade" className={styles.section}>
      <div className="section-container">
        <h2 className="section-title">Comunidade e Portfólios</h2>
        <p className="section-subtitle">
          Talentos que formam a rede Inspira. Desenvolvedores, designers,
          criadores. Cada um com sua própria história publicada.
        </p>

        {/* Status messages */}
        {rateLimited ? (
          <div className={styles.statusBox} role="alert">
            <p className={styles.statusText}>
              Limite de requisições atingido. Por favor, aguarde alguns minutos
              e tente novamente.
            </p>
            <p className={styles.statusHint}>
              Dica: A API pública do GitHub permite 60 requisições por hora.
              Tente novamente em alguns minutos.
            </p>
          </div>
        ) : null}

        {error ? (
          <div className={styles.statusBox} role="alert">
            <p className={styles.statusText}>
              Não foi possível carregar os portfólios agora. Tente novamente em
              alguns minutos.
            </p>
            <p className={styles.statusHint}>Erro: {error}</p>
          </div>
        ) : null}

        {!loading && !error && !rateLimited && repos.length === 0 ? (
          <p className={styles.emptyState}>
            Nenhum repositório público foi encontrado para a comunidade neste
            momento.
          </p>
        ) : null}

        {/* Loading status */}
        {loading ? (
          <div className={styles.statusBox} role="status" aria-live="polite">
            <p className={styles.statusText}>
              Carregando portfólios da comunidade...
            </p>
          </div>
        ) : null}

        {/* Repos loaded counter */}
        {!loading && !error && !rateLimited && repos.length > 0 ? (
          <div className={styles.statusBox} role="status" aria-live="polite">
            <p className={styles.statusText}>
              Portfólios carregados: {repos.length}
            </p>
          </div>
        ) : null}

        {/* Grid: shows skeletons while loading, or cards when loaded */}
        {!error && !rateLimited ? (
          <RepoGrid
            repos={repos}
            metadata={metadata}
            loading={loading}
            onSelectRepo={setSelectedRepo}
          />
        ) : null}
      </div>

      {/* Modal */}
      <RepoModal
        repo={selectedRepo}
        metadata={selectedRepo ? metadata.get(selectedRepo.id) : undefined}
        onClose={handleCloseModal}
      />
    </section>
  );
}
