# Coletivo Inspira

O **Coletivo Inspira** é um movimento de cultura, ecoturismo, sustentabilidade e inovação tecnológica nascido em Bonito-MS. Como as correntezas do Rio Formoso, o coletivo flui conectando pessoas, ideias e projetos para trazer um novo estilo de vida e transformar o território de forma criativa.

## Edição rápida do hub

Projetos, destaques, pilares e links oficiais são centralizados em
`src/data/hub.ts`. Consulte `docs/CONTENT-GUIDE.md` antes de incluir uma nova
iniciativa. O construtor de portfólios vive no repositório separado
[`coletivo-inspira/hudi-pg`](https://github.com/coletivo-inspira/hudi-pg).

## 🚀 Sobre o Projeto

Este repositório abriga a landing page e a vitrine digital do Coletivo Inspira. A aplicação foi construída visando alta performance e otimização de SEO, apresentando:
- **História e Propósito:** Como o movimento foi criado e o que ele busca.
- **Projetos:** Exposições e iniciativas do coletivo (como *Carnaboia*, *Desapego*, *Meu Bloquinho*, etc.).
- **Comunidade:** Uma integração dinâmica de desenvolvedores e parceiros do ecossistema Inspira.

## 🛠️ Tecnologias Utilizadas

O projeto faz uso das tecnologias mais modernas do ecossistema front-end:

- **Framework:** [Next.js (v16.2)](https://nextjs.org/) usando a App Router (`src/app`).
- **Biblioteca de UI:** [React (v19)](https://react.dev/).
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) para garantir consistência, validação de tipos e um código seguro.
- **Estilização:** CSS Vanilla com uso intenso de variáveis nativas (CSS custom properties) contidas em `globals.css` para padronização de um **Design System** flexível.
- **Testes:** [Vitest](https://vitest.dev/) combinado ao Testing Library para os testes unitários e de integração.

## 📂 Estrutura de Diretórios

A arquitetura do projeto foi estruturada para manter o código limpo, componentizado e de fácil manutenção:

```text
📦 raiz-do-projeto
 ┣ 📂 public/          # Arquivos estáticos servidos diretamente (Imagens e Fontes customizadas)
 ┣ 📂 src/             # Código-fonte principal da aplicação
 ┃ ┣ 📂 app/           # Rotas do Next.js App Router (layout, página principal, estilos globais)
 ┃ ┣ 📂 components/    # Componentes modulares e isolados de interface (Header, Hero, Footer, etc.)
 ┃ ┣ 📂 hooks/         # React Hooks customizados contendo lógica reaproveitável
 ┃ ┣ 📂 types/         # Definições estáticas e interfaces do TypeScript
 ┃ ┗ 📂 data/          # Mockups ou arquivos que armazenam dados para preenchimento na interface
 ┣ 📜 next.config.js   # Arquivo de configuração do framework Next.js
 ┣ 📜 package.json     # Definições de dependências e scripts de execução
 ┣ 📜 tsconfig.json    # Configurações do compilador TypeScript
 ┗ 📜 vitest.config.ts # Configuração do runner de testes automatizados
```

## 💻 Como Inicializar e Rodar Localmente

### Pré-requisitos
Certifique-se de que sua máquina possui o [Node.js](https://nodejs.org/) instalado.

### Passo a Passo

1. **Instale as dependências:**
   Na pasta do projeto, execute no terminal:
   ```bash
   npm install
   ```

2. **Execute o servidor de desenvolvimento:**
   Após a instalação, inicie a aplicação localmente rodando:
   ```bash
   npm run dev
   ```

3. **Abra o navegador:**
   Acesse a URL apontada no terminal (geralmente [http://localhost:3000](http://localhost:3000)). Todas as edições que você fizer no código refletirão automaticamente no navegador.

### Outros Comandos Úteis

- **`npm run build`**: Gera a versão final e otimizada (de produção) da sua aplicação na pasta `.next`.
- **`npm run typecheck`**: Analisa e valida os tipos do TypeScript do seu código sem gerar arquivos.
- **`npm run test`**: Roda a bateria de testes usando o Vitest.

## 📚 Documentação Interna (Deep Dive)

O projeto possui uma documentação técnica rica, dividida por camadas. Se você é um desenvolvedor que deseja entender os detalhes de cada componente, lógica e tipagem, navegue pelos READMEs específicos de cada diretório:

- [Visão Geral da Arquitetura (`src/`)](file:///d:/Coletivo%20Inspira/.github/src/README.md)
- [Camada de Roteamento e Estilos (`src/app/`)](file:///d:/Coletivo%20Inspira/.github/src/app/README.md)
- [Componentes Visuais (`src/components/`)](file:///d:/Coletivo%20Inspira/.github/src/components/README.md)
- [Camada de Lógica/Hooks (`src/hooks/`)](file:///d:/Coletivo%20Inspira/.github/src/hooks/README.md)
- [Camada de Dados (`src/data/`)](file:///d:/Coletivo%20Inspira/.github/src/data/README.md)
- [Definições TypeScript (`src/types/`)](file:///d:/Coletivo%20Inspira/.github/src/types/README.md)

## 🌐 Como Fazer o Deploy (GitHub Pages / Actions)

Este projeto foi configurado para **Static Export** via Next.js (`output: "export"` no `next.config.js`). Isso significa que ele não requer um servidor Node.js rodando em produção; todos os arquivos gerados são estáticos (HTML/CSS/JS puros), tornando o deploy perfeito para o **GitHub Pages**.

### Passos para Deploy no GitHub

1. **Configuração do Repositório:**
   - Faça push de todo o código atualizado para o seu repositório no GitHub (por exemplo, na branch `main`).

2. **Ativação do GitHub Pages:**
   - Acesse seu repositório no GitHub.
   - Vá na aba **Settings** > **Pages** (menu à esquerda).
   - Em "Build and deployment", altere o "Source" de "Deploy from a branch" para **"GitHub Actions"**.

3. **Configuração da Action do Next.js:**
   - O próprio GitHub irá sugerir um workflow chamado **"Next.js"** na tela de configuração.
   - Clique em **Configure** para adicionar o arquivo `.github/workflows/nextjs.yml` ao projeto.
   - O arquivo padrão do GitHub já cobrirá todo o passo a passo: instalar as dependências, rodar `npm run build` (que exportará os estáticos para a pasta `out/`) e publicar no Pages automaticamente.

4. **Publicação:**
   - Faça o commit desse workflow sugerido.
   - Sempre que você fizer push para a branch `main`, o GitHub Actions disparará um build automático e atualizará o site online!
