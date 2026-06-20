import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`${styles.heroGlow} ${styles.heroGlowA}`} />
      <div className={`${styles.heroGlow} ${styles.heroGlowB}`} />

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.badge}>Bonito-MS | Arte, Ecoturismo e Inovação</p>
          <h1 className={styles.title}>
            Onde a cultura encontra a tecnologia
            <span>e transforma territórios.</span>
          </h1>
          <p className={styles.text}>
            Como as correntezas do Rio Formoso, o Coletivo Inspira flui conectando
            pessoas, arte, natureza e desenvolvimento. Um movimento que respira com
            Bonito e pulsa para transformar.
          </p>
          <div className={styles.actions}>
            <a href="#projetos" className={styles.primaryButton}>
              Explorar Projetos
            </a>
            <a href="#comunidade" className={styles.secondaryButton}>
              Ver Comunidade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
