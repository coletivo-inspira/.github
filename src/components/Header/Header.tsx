"use client";

import { useState } from "react";
import { mainNavLinks, projectFilterLinks } from "@/data/navigation";
import type { ProjectFilter } from "@/types/project";
import styles from "./Header.module.css";

interface HeaderProps {
  onProjectFilter?: (filter: ProjectFilter) => void;
}

export function Header({ onProjectFilter }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleProjectFilter = (filter: ProjectFilter) => {
    onProjectFilter?.(filter);
    closeMobileMenu();
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <div className={styles.navContainer}>
          <a href="#inicio" className={styles.logo} onClick={closeMobileMenu}>
            COLETIVO INSPIRA
          </a>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Fechar navegação" : "Abrir navegação"}
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>

          <ul className={styles.desktopMenu}>
            <li>
              <a href="#inicio" className={styles.navLink}>
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className={styles.navLink}>
                Sobre
              </a>
            </li>
            <li className={styles.navGroup}>
              <button type="button" className={`${styles.navLink} ${styles.dropdownTrigger}`}>
                Projetos
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <ul className={styles.dropdownMenu}>
                {projectFilterLinks.map((item, index) => (
                  <li key={item.filter} className={index === projectFilterLinks.length - 1 ? styles.dropdownDivider : undefined}>
                    <a
                      href={item.href}
                      className={styles.dropdownItem}
                      onClick={() => handleProjectFilter(item.filter)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="#comunidade" className={styles.navLink}>
                Comunidade
              </a>
            </li>
            <li>
              <a href="#brand-book" className={styles.navLink}>
                Brand Book
              </a>
            </li>
          </ul>
        </div>

        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
        >
          {mainNavLinks.slice(0, 2).map((item) => (
            <a key={item.href} href={item.href} className={styles.mobileLink} onClick={closeMobileMenu}>
              {item.label}
            </a>
          ))}

          <details className={styles.mobileProjects}>
            <summary className={styles.mobileSummary}>
              Projetos
              <span>Categorias</span>
            </summary>
            <div className={styles.mobileSubmenu}>
              {projectFilterLinks.map((item) => (
                <a
                  key={item.filter}
                  href={item.href}
                  className={styles.mobileSubLink}
                  onClick={() => handleProjectFilter(item.filter)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>

          <a href="#comunidade" className={styles.mobileLink} onClick={closeMobileMenu}>
            Comunidade
          </a>
          <a href="#brand-book" className={styles.mobileLink} onClick={closeMobileMenu}>
            Brand Book
          </a>
        </div>
      </nav>
    </header>
  );
}
