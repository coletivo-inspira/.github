import { Header } from "@/components/Header/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="migration-shell">
        <section id="inicio" className="migration-placeholder">
          <h1>Coletivo Inspira em migração para Next.js</h1>
          <p>
            Esta rota já usa App Router, TypeScript, tokens globais e a nova
            navegação em React. As seções da landing page entram na próxima
            etapa da refatoração.
          </p>
        </section>
        <section id="sobre" aria-label="Sobre" />
        <section id="projetos" aria-label="Projetos" />
        <section id="comunidade" aria-label="Comunidade" />
      </main>
    </>
  );
}
