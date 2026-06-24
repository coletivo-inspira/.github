import styles from "./SectionBrandBook.module.css";

const brandBookGuidelines = [
  { id: "palette", text: "Paleta principal ancorada em tons naturais para manter conexão com Bonito-MS." },
  { id: "typography", text: "Tipografia de destaque para títulos e linguagem direta para facilitar leitura." },
  { id: "voice", text: "Tom de voz acolhedor, comunitário e orientado à transformação cultural." },
  { id: "consistency", text: "Elementos visuais e componentes devem seguir o mesmo padrão em todas as páginas." },
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
          {brandBookGuidelines.map((guideline) => (
            <li key={guideline.id} className={styles.item}>
              {guideline.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
