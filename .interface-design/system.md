# Coletivo Inspira interface system

## Direção

A interface usa blocos sólidos, cores planas, bordas firmes e sombras sem blur.
Não use glassmorphism, `backdrop-filter`, fundos translúcidos ou decoração abstrata.

## Tipografia

- Títulos: Syne 700 ou 800.
- Corpo e interface: DM Sans 400, 500 ou 700.
- Sem letter spacing negativo e sem escala tipográfica baseada na largura da tela.

## Cores

- 60% off-white: `#F7F7F4`
- 30% verde floresta: `#133824`
- 10% laranja `#F05D23` ou mostarda `#E5A91E`
- Cultura: rosa `#E5007C` como acento contextual

## Componentes

- Raio máximo de 8px; o padrão do hub é canto reto.
- Cards apenas para itens repetidos, com borda de 2px.
- Botões principais em mostarda com sombra rígida.
- Fotografia real do coletivo deve aparecer no primeiro viewport.
- Movimento deve explicar entrada, progresso ou fluxo e respeitar reduced motion.

## Conteúdo

Os três pilares são Social, Tecnologia e Cultura. Projetos e links são editados em
`src/data/hub.ts`, seguindo `docs/CONTENT-GUIDE.md`.

