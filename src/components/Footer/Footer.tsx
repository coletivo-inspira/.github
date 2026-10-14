import { hubConfig } from "@/data/hub";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.kicker}>Bonito-MS · Belo Horizonte-MG · Digital</p>
          <p className={styles.title}>Boas ideias fluem melhor em coletivo.</p>
          <p>Cultura, cuidado e tecnologia para movimentar pessoas e territórios.</p>
        </div>
        <nav aria-label="Links do rodapé">
          <a href={hubConfig.instagramUrl}>Instagram</a>
          <a href={hubConfig.whatsappUrl}>WhatsApp</a>
          <a href={hubConfig.githubUrl}>GitHub</a>
          <a href={hubConfig.hudiPagesUrl}>HUDI Pages</a>
        </nav>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Coletivo Inspira</span>
        <span>Bonito-MS + Belo Horizonte-MG</span>
      </div>
    </footer>
  );
}
