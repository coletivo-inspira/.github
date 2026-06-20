import { projectFilterLinks } from "@/data/navigation";
import { projects } from "@/data/projects";
import type { Project, ProjectFilter } from "@/types/project";
import styles from "./ProjectsSection.module.css";

interface ProjectsSectionProps {
  selectedFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

export function ProjectsSection({ selectedFilter, onFilterChange }: ProjectsSectionProps) {
  const visibleProjects = projects.filter((project) =>
    selectedFilter === "Todos" ? true : project.categories.includes(selectedFilter),
  );

  return (
    <section id="projetos" className={styles.section}>
      <div className="section-container">
        <div className={styles.header}>
          <div>
            <h2 className="section-title">Iniciativas e Projetos</h2>
            <p className="section-subtitle">
              Conheça as ações do Coletivo Inspira. Da tecnologia à preservação ambiental.
            </p>
          </div>

          <ProjectFilter selectedFilter={selectedFilter} onFilterChange={onFilterChange} />
        </div>

        <div className={styles.grid}>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {visibleProjects.length === 0 ? (
          <p className={styles.emptyState}>
            Ainda não há projetos visíveis para essa categoria. Novidades em breve.
          </p>
        ) : null}
      </div>
    </section>
  );
}

interface ProjectFilterProps {
  selectedFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

function ProjectFilter({ selectedFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className={styles.filterPanel} aria-label="Filtrar projetos">
      <p className={styles.filterBadge}>Exibindo: {selectedFilter}</p>
      <div className={styles.filterButtons}>
        {projectFilterLinks.map((item) => (
          <button
            key={item.filter}
            type="button"
            className={`${styles.filterButton} ${
              selectedFilter === item.filter ? styles.filterButtonActive : ""
            }`}
            aria-pressed={selectedFilter === item.filter}
            onClick={() => onFilterChange(item.filter)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div>
        <p className={'chip ' + styles.cardChip}>{project.label}</p>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardText}>{project.description}</p>
      </div>
    </article>
  );
}
