# Handoff Document: Restruturação Coletivo Inspira

## 1. Contexto do Projeto
O **Coletivo Inspira** (representado pelo usuário Felipe e seus irmãos/sócios) é uma iniciativa que une impacto social, cultura e tecnologia. O objetivo atual é reestruturar o modelo financeiro e a presença digital para tornar o projeto autossustentável. O coletivo atua em duas frentes regionais principais:
* **Belo Horizonte (BH):** Foco em blocos de carnaval de rua (ex: Meu Bloquinho) e serviços B2B para o comércio local.
* **Bonito:** Foco em ecoturismo, sustentabilidade (ex: Carnaboia) e automação de atendimento para pousadas/hotéis.

## 2. Status Atual e Decisões Tomadas
A sessão atual focou em organizar a "casa" financeira e estruturar a arquitetura do novo portal web.

* **Problema Imediato:** Altos custos com APIs de IA (OpenAI, Claude, Higgsfield) e disparos de WhatsApp utilizados pelo sistema operacional de agentes autônomos do coletivo, chamado **LINO**.
* **Solução Operacional:** Utilização temporária do CNPJ de uma parceira para faturamento de serviços corporativos (MVP sem burocracia).
* **Modelo de Negócios (Freemium):**
    * *Tier 1 (Grátis):* Geração automatizada de portfólios estáticos hospedados no GitHub Pages, estruturados via subpastas (`inspira.dev.br/nome-do-usuario`). Todos possuem um "selo" no rodapé redirecionando para a página de serviços do coletivo.
    * *Tier 2 (Mensalidade Social):* R$ 19,90 a R$ 29,90/mês para manter bots básicos rodando ou integrações.
    * *Tier 3 (Customização):* Serviços B2B de desenvolvimento web a partir de R$ 150 a R$ 1.000+.
* **Arquitetura do Portal:** Dividida em 3 pilares fundamentais:
    1. Social (Impacto, Coletivo Cuida, Respira & Inspira).
    2. Tecnologia/Soluções Digitais (Portfólios gratuitos, Ecossistema LINO, Vendas B2B).
    3. Cultura e Eventos (Meu Bloquinho, Carnaboia, Captação via Leis de Incentivo).

## 3. Artefatos Produzidos (Referências)
Os seguintes documentos foram gerados e devem ser consultados pelo próximo agente:
* **Plano de Estruturação Financeira e Modelo de Negócios:** [Link do Google Docs](https://docs.google.com/document/d/1cWxCt0LJriSk9RUb3QpbyOkRtLe4zhmUJn5zs4T-4a0/edit?usp=drive_web)
* **Arquitetura de Informação e Estrutura do Portal:** [Link do Google Docs](https://docs.google.com/document/d/1qyryTaWMprJvm9JH9ry2lQW2OwN24VSiXqx5wI-O-3w/edit?usp=drive_web)
* *Nota:* O usuário também forneceu diversos arquivos de contexto originais (Brandbooks, paletas de cores, variações de logo) que guiam a identidade visual.

## 4. Próximos Passos (Foco da Próxima Sessão)
A próxima sessão deve ser direcionada para a execução prática das ideias mapeadas, com foco em:
1.  **Copywriting do Portal:** Escrever os textos da Home e das subpáginas dos três pilares, garantindo a conexão narrativa entre o social e a venda de tecnologia.
2.  **Estruturação Técnica do Onboarding LINO:** Definir o fluxo de conversa/prompt de sistema para o bot que fará a entrevista com os usuários e gerará automaticamente o código do site gratuito na subpasta `inspira.dev.br/nome`.
3.  **Desenvolvimento Web:** Iniciar o wireframing ou codificação da landing page principal baseada no Brandbook.

## 5. Suggested Skills (Habilidades Sugeridas para o Próximo Agente)
* `Copywriting / UX Writing`: Para elaborar a narrativa das landing pages.
* `Frontend Web Development (HTML/CSS/JS)`: Para auxiliar na implementação dos templates hospedados no GitHub Pages.
* `Prompt Engineering / AI Orchestration`: Para otimizar os prompts do LINO, focar em redução de tokens (cost-saving) e criar o fluxo automatizado de geração de sites.
* `Business Strategy`: Para manter as decisões alinhadas ao modelo de impacto social estipulado.