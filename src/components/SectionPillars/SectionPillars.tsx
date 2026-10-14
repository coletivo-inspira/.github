import { pillars } from "@/data/hub";
import styles from "./SectionPillars.module.css";

export function SectionPillars() {
  return (
    <section id="pilares" className={styles.section} aria-labelledby="pillars-title">
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Três frentes, um movimento</p>
          <h2 id="pillars-title">Tudo se conecta quando o propósito é coletivo.</h2>
          <p>
            O cuidado fortalece pessoas. A tecnologia amplia oportunidades. A cultura
            preserva memórias e movimenta territórios. Cada projeto ganha força na
            conexão entre as três.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <article className={styles.card} data-accent={pillar.accent} key={pillar.id}>
              <span className={styles.number}>{pillar.number}</span>
              <p className={styles.label}>{pillar.id}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <a href="#projetos">
                Ver iniciativas <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
