import styles from "./SectionBrandBook.module.css";

const brandBookGuidelines = [
  "Paleta principal ancorada em tons naturais para manter conexão com Bonito-MS.",
  "Tipografia de destaque para títulos e linguagem direta para facilitar leitura.",
  "Tom de voz acolhedor, comunitário e orientado à transformação cultural.",
  "Elementos visuais e componentes devem seguir o mesmo padrão em todas as páginas.",
];

export function SectionBrandBook() {
  return (
    <section id="brand-book" className={styles.section}>
      <div className="section-container">
        <h2 className="section-title">Brand Book</h2>
        <p className="section-subtitle">
          Diretrizes para a nova cara do Coletivo Inspira. Este bloco orienta a repaginação com identidade
          visual, voz e padronização da experiência.
        </p>

        <ul className={styles.list}>
          {brandBookGuidelines.map((guideline, index) => (
            <li key={`guideline-${index}`} className={styles.item}>
              {guideline}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
