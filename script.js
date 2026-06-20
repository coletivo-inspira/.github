const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const projectFilterLabel = document.getElementById("project-filter-label");
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const projectEmptyState = document.getElementById("project-empty-state");

const reposGrid = document.getElementById("repos-grid");
const repoStatus = document.getElementById("repo-status");
const GITHUB_ORG_REPOS_API = "https://api.github.com/orgs/coletivo-inspira/repos?per_page=100";

// Modal elements
const modalOverlay = document.getElementById("modal-overlay");
const repoModal = document.getElementById("repo-modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

function toggleMobileMenu() {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mobileMenu.classList.toggle("hidden", isExpanded);
}

function closeMobileMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.classList.add("hidden");
}

function normalizeCategory(value) {
  return value.trim().toLowerCase();
}

function filterProjects(filter) {
  const normalizedFilter = normalizeCategory(filter);
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const categories = (card.dataset.categories || "")
      .split(",")
      .map((item) => normalizeCategory(item));

    const shouldShow = normalizedFilter === "todos" || categories.includes(normalizedFilter);
    card.classList.toggle("hidden", !shouldShow);

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  projectFilterLabel.textContent = `Exibindo: ${filter}`;
  projectEmptyState.classList.toggle("hidden", visibleCount > 0);
}

function formatDate(isoDate) {
  if (!isoDate) return "N/A";
  const date = new Date(isoDate);
  return date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function getPortfolioUrl(repo) {
  // Priority 1: Use homepage if available and looks like a valid URL
  if (repo.homepage && repo.homepage.trim()) {
    try {
      new URL(repo.homepage);
      return repo.homepage;
    } catch (e) {
      // Invalid URL format
    }
  }

  // Priority 2: Fallback to standard GitHub Pages URL
  if (repo.has_pages) {
    return `https://coletivo-inspira.github.io/${repo.name}/`;
  }

  // No valid portfolio URL
  return null;
}

function openModal(repo, metadata) {
  const contributorDisplay = metadata.contributors !== null ? metadata.contributors : "—";
  
  const html = `
    <h2 id="modal-title" class="text-2xl font-brand text-inspira-burnt">${repo.name}</h2>
    <p class="text-inspira-night/80 leading-relaxed mt-2">${repo.description || "Sem descrição disponível."}</p>
    
    <div class="modal-meta-grid">
      <div class="modal-meta-block">
        <p class="modal-meta-label">Linguagem</p>
        <p class="modal-meta-value">${repo.language || "—"}</p>
      </div>
      
      <div class="modal-meta-block">
        <p class="modal-meta-label">Contribuidores</p>
        <p class="modal-meta-value">${contributorDisplay}</p>
      </div>
      
      <div class="modal-meta-block">
        <p class="modal-meta-label">Criado em</p>
        <p class="modal-meta-value">${formatDate(repo.created_at)}</p>
      </div>
      
      <div class="modal-meta-block">
        <p class="modal-meta-label">Atualizado em</p>
        <p class="modal-meta-value">${formatDate(repo.updated_at)}</p>
      </div>
    </div>

    ${repo.topics && repo.topics.length > 0 ? `
      <div class="mt-4 pt-4 border-t border-inspira-river/20">
        <p class="text-xs uppercase tracking-widest text-inspira-night/60 font-600 mb-2">Tópicos</p>
        <div class="flex flex-wrap gap-2">
          ${repo.topics.map(topic => `
            <span class="inline-block bg-inspira-burnt/10 text-inspira-burnt px-3 py-1 rounded-full text-sm">
              ${topic}
            </span>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${metadata.portfolio_url ? `
      <div class="mt-6 flex gap-3">
        <a href="${metadata.portfolio_url}" target="_blank" rel="noopener noreferrer" class="flex-1 repo-button">
          Visitar Portfólio
        </a>
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="flex-1 btn-secondary">
          Ver no GitHub
        </a>
      </div>
    ` : `
      <div class="mt-6">
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="block w-full repo-button">
          Ver no GitHub
        </a>
      </div>
    `}
  `;

  modalContent.innerHTML = html;
  repoModal.classList.add("show");
  modalOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  repoModal.classList.remove("show");
  modalOverlay.classList.remove("show");
  document.body.style.overflow = "";
}

function createRepoCard(repo, metadata) {
  const card = document.createElement("article");
  card.className = "repo-card";

  const portfolioUrl = metadata.portfolio_url;
  const hasPortfolio = !!portfolioUrl;
  const contributorDisplay = metadata.contributors !== null ? `${metadata.contributors} contribuidores` : "Dados indisponíveis";

  const contentHTML = `
    <div>
      <div class="repo-header">
        <h3 class="repo-name">${repo.name}</h3>
        <span class="repo-lang">${repo.language || "—"}</span>
      </div>
      <p class="repo-description">${repo.description || "Este repositório ainda não possui descrição."}</p>
      ${hasPortfolio ? `
        <div class="repo-meta">
          <div class="repo-meta-item">${contributorDisplay}</div>
          <div class="repo-meta-item">Atualizado ${formatDate(repo.updated_at)}</div>
        </div>
      ` : `
        <div class="repo-meta">
          <div class="repo-meta-item">${contributorDisplay}</div>
          <div class="repo-meta-item">Criado ${formatDate(repo.created_at)}</div>
        </div>
      `}
    </div>
  `;

  card.innerHTML = contentHTML;

  // Card click opens modal
  card.addEventListener("click", () => {
    openModal(repo, metadata);
  });

  // Add button only if has portfolio
  if (hasPortfolio) {
    const button = document.createElement("a");
    button.href = portfolioUrl;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.className = "repo-button";
    button.textContent = "Acessar Portfólio";
    button.addEventListener("click", (e) => e.stopPropagation());
    card.appendChild(button);
  } else {
    const button = document.createElement("button");
    button.className = "repo-button";
    button.textContent = "Mais Detalhes";
    button.addEventListener("click", () => openModal(repo, metadata));
    card.appendChild(button);
  }

  return card;
}

async function fetchContributorCount(repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/coletivo-inspira/${repo.name}/contributors?per_page=1`, {
      headers: { Accept: "application/vnd.github+json" }
    });
    
    // Handle 403 (rate limit or access denied)
    if (response.status === 403) {
      console.warn(`403 Acesso negado ao buscar contribuidores para ${repo.name} (rate limit ou repositório privado)`);
      return null; // Signal that data is unavailable
    }
    
    // Handle 404 (repo or endpoint not found)
    if (response.status === 404) {
      console.warn(`404 Repositório não encontrado: ${repo.name}`);
      return null;
    }
    
    if (response.ok) {
      const link = response.headers.get("link");
      if (link) {
        const lastMatch = link.match(/page=(\d+)>; rel="last"/);
        if (lastMatch) return parseInt(lastMatch[1]);
      }
      const data = await response.json();
      return data.length || 0;
    }
    
    console.warn(`Erro ao buscar contribuidores para ${repo.name}: ${response.status}`);
    return null;
  } catch (e) {
    console.warn(`Erro de rede ao buscar contribuidores para ${repo.name}:`, e.message);
    return null;
  }
}

async function loadCommunityRepos() {
  try {
    const response = await fetch(GITHUB_ORG_REPOS_API, {
      headers: { Accept: "application/vnd.github+json" }
    });

    // Handle rate limit (403)
    if (response.status === 403) {
      repoStatus.textContent = "Limite de requisições atingido. Por favor, aguarde alguns minutos e tente novamente.";
      const errorBox = document.createElement("p");
      errorBox.className = "status-box";
      errorBox.style.borderColor = "rgba(216, 67, 21, 0.3)";
      errorBox.style.background = "rgba(216, 67, 21, 0.05)";
      errorBox.textContent = "Dica: Tente usar um token de GitHub pessoal para aumentar o limite de 60 para 5.000 requisições/hora.";
      reposGrid.appendChild(errorBox);
      return;
    }

    if (!response.ok) {
      throw new Error(`Falha na API do GitHub (status ${response.status})`);
    }

    let repos = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      repoStatus.textContent = "Nenhum repositório público foi encontrado para a comunidade neste momento.";
      return;
    }

    repoStatus.textContent = `Carregando portfólios (${repos.length} repositórios)...`;

    const fragment = document.createDocumentFragment();
    const loadingRepos = [];

    for (const repo of repos) {
      const portfolioUrl = getPortfolioUrl(repo);
      const contributorsPromise = fetchContributorCount(repo);

      loadingRepos.push(
        contributorsPromise.then((contributors) => {
          const metadata = {
            portfolio_url: portfolioUrl,
            contributors: contributors // null if 403, or a number if successful
          };
          return createRepoCard(repo, metadata);
        })
      );
    }

    const cards = await Promise.all(loadingRepos);
    cards.forEach((card) => fragment.appendChild(card));

    reposGrid.innerHTML = "";
    reposGrid.appendChild(fragment);

    repoStatus.textContent = `Portfólios carregados: ${repos.length}`;
  } catch (error) {
    repoStatus.textContent = "Não foi possível carregar os portfólios agora. Tente novamente em alguns minutos.";

    const fallbackMessage = document.createElement("p");
    fallbackMessage.className = "status-box";
    fallbackMessage.textContent = `Erro: ${error.message}`;

    reposGrid.innerHTML = "";
    reposGrid.appendChild(fallbackMessage);
  }
}

// Event listeners
menuToggle?.addEventListener("click", toggleMobileMenu);

document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.querySelectorAll("[data-filter]").forEach((control) => {
  control.addEventListener("click", (event) => {
    const selectedFilter = control.dataset.filter || "Todos";
    filterProjects(selectedFilter);

    if (control.closest("#mobile-menu")) {
      closeMobileMenu();
    }

    event.stopPropagation();
  });
});

// Modal controls
modalClose?.addEventListener("click", closeModal);
modalOverlay?.addEventListener("click", closeModal);
repoModal?.addEventListener("click", (e) => {
  if (e.target === repoModal) closeModal();
});

// Keyboard: ESC closes modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Initialize
filterProjects("Todos");
loadCommunityRepos();
