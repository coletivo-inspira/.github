import Image from "next/image";
import { hubConfig } from "@/data/hub";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.currentLine} aria-hidden="true">
        <span />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {hubConfig.name} · {hubConfig.location}
          </p>
          <h1 id="hero-title">Cultura, cuidado e tecnologia para movimentar territórios.</h1>
          <p className={styles.lead}>
            Conectamos pessoas, ideias e projetos para abrir caminhos de impacto social,
            presença digital e cultura viva.
          </p>
          <p className={styles.text}>
            Criamos redes de cuidado, experiências e produtos digitais com quem acredita
            que desenvolvimento se faz junto.
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

        <figure className={styles.visual}>
          <Image
            src="/image/logo/logo.png"
            alt="Símbolo do Coletivo Inspira"
            width={400}
            height={400}
            sizes="(max-width: 760px) 58vw, 20rem"
            className={styles.brandTile}
            priority
          />
          <Image
            src="/image/image3.png"
            alt="Colagem de encontros e atividades do Coletivo Inspira"
            width={239}
            height={289}
            sizes="(max-width: 760px) 45vw, 17rem"
            className={styles.photoCommunity}
            priority
          />
          <Image
            src="/image/image1.png"
            alt="Amigos de infância que fazem parte da história do coletivo"
            width={260}
            height={289}
            sizes="(max-width: 760px) 35vw, 13rem"
            className={styles.photoOrigins}
          />
          <figcaption>Bonito-MS · uma história feita em coletivo</figcaption>
        </figure>
      </div>
    </section>
  );
}
