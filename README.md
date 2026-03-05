# Aurora — Joias da Aurora Boreal

Uma loja virtual de joias artesanais inspirada nas luzes do céu noturno. Cada peça é única, assim como cada aurora.

---

## Sobre o projeto

Aurora é uma loja fictícia de miçangas e joias artesanais com uma identidade visual imersiva. O fundo animado imita o fenômeno da aurora boreal usando WebGL, e muda de cor conforme o filtro de produto selecionado — criando uma experiência visual que conecta o produto ao ambiente da página.

O projeto foi construído com foco em design e experiência do usuário, combinando animações fluidas, tipografia clean e uma paleta de cores inspirada no espaço.

---

## Funcionalidades

- **Vitrine de produtos** com 8 joias artesanais distribuídas em 3 coleções
- **Imagens por cor** — cada card exibe uma foto real correspondente ao filtro de cor selecionado, alternando entre variantes quando há múltiplos produtos da mesma cor
- **Filtro por cor** que atualiza os produtos listados, as imagens dos cards e o fundo animado da página
- **Página de detalhe** de cada produto com descrição, preço e opção de adicionar ao carrinho
- **Carrinho de compras** com controle de quantidade, remoção de itens e total calculado
- **Fundo Aurora animado** em WebGL que reage ao contexto da navegação

---

## Páginas

| Rota               | Descrição                                                      |
| ------------------ | -------------------------------------------------------------- |
| `/`                | Página inicial com hero, filtro de cores e vitrine de produtos |
| `/produtos/[slug]` | Detalhe de cada produto                                        |
| `/carrinho`        | Resumo dos itens adicionados ao carrinho                       |
| `/sobre`           | Página institucional da marca                                  |

---

## Tecnologias utilizadas

- **[Next.js 16](https://nextjs.org/)** — framework React com App Router
- **[React 19](https://react.dev/)** — biblioteca de interface
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** — estilização utilitária
- **[Motion](https://motion.dev/)** — animações declarativas
- **[OGL](https://github.com/oframe/ogl)** — WebGL leve para o efeito de aurora
- **[Zustand](https://zustand-demo.pmnd.rs/)** — gerenciamento de estado do carrinho
- **next/image** — otimização automática das imagens dos produtos

---

## Rodando localmente

**Pré-requisitos:** Node.js 18+ instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/aurora.git
cd aurora

# 2. Instale as dependências
npm install

# 3. Suba o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## Scripts disponíveis

| Comando         | O que faz                               |
| --------------- | --------------------------------------- |
| `npm run dev`   | Inicia o servidor de desenvolvimento    |
| `npm run build` | Gera o build de produção                |
| `npm run start` | Sobe o servidor com o build de produção |
| `npm run lint`  | Verifica erros de lint no código        |

---

## Coleções

- **Coleção Estelar** — peças em verde esmeralda e rosa aurora
- **Coleção Solar** — tons dourados e roxo ametista
- **Coleção Ártica** — azul celeste e polar

---
