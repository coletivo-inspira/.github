import Image from "next/image";
import { hubConfig } from "@/data/hub";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <Image
        src="/image/image1.png"
        alt="Integrantes e encontros do Coletivo Inspira"
        fill
        sizes="100vw"
        className={styles.background}
        priority
      />
      <div className={styles.colorBlock} aria-hidden="true" />
      <div className={styles.currentLine} aria-hidden="true">
        <span />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{hubConfig.location}</p>
          <h1 id="hero-title">Coletivo Inspira</h1>
          <p className={styles.lead}>
            Cultura, tecnologia e impacto social para abrir caminhos e movimentar
            territórios.
          </p>
          <p className={styles.text}>
            Criamos experiências, produtos digitais e redes de cuidado com quem
            acredita que desenvolvimento também se faz em coletivo.
          </p>
          <div className={styles.actions}>
            <a href={hubConfig.hudiPagesUrl} className="button buttonPrimary">
              Criar meu portfólio gratuito <span aria-hidden="true">-&gt;</span>
            </a>
            <a href="#projetos" className="button buttonSecondary">
              Conhecer projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
