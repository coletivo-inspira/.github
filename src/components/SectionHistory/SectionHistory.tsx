import Image from "next/image";
import styles from "./SectionHistory.module.css";

export function SectionHistory() {
  return (
    <section id="historia" className={styles.section}>
      <div className="section-container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className="section-title">Nossa História</h2>
            <p className={styles.text}>
              &quot;O que você faz com seus amigos quando estão a toa? Nós criamos o
              COLETIVO INSPIRA! Depois de alguns anos na estrada da vida, nós -
              @predo.baga e @felipeatene - melhores amigos desde a infância,
              voltamos pra cidade onde crescemos e decidimos criar um novo movimento.
              Na finalidade de trazer arte, cultura, desenvolvimento, diversão e um
              novo estilo de vida pra Capital do Ecoturismo, fizemos o nosso primeiro
              evento em Bonito e foi um sucesso! Agora estamos ainda mais fortes e
              determinados a fazer a diferença nessa terra de águas cristalinas e
              pretendemos seguir fortes, como as correntezas do Rio Formoso, rumo ao
              desenvolvimento cultural de Bonito-MS.&quot;
            </p>
          </div>

          <div className={styles.media}>
            <div className={styles.gallery}>
              <img
                src="/image/image1.png"
                alt="Imagem inspiradora do coletivo"
                className={styles.mainPhoto}
                loading="lazy"
              />
              <div className={styles.photoGrid}>
                <img
                  src="/image/image2.png"
                  alt="Ações culturais do coletivo"
                  className={styles.photo}
                  loading="lazy"
                />
                <img
                  src="/image/image3.png"
                  alt="Comunidade em movimento"
                  className={styles.photo}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
