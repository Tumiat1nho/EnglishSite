# 🎓 English Academy

Site gratuito para ensinar inglês a brasileiros. Construído com Next.js, TypeScript e Tailwind CSS.

## Funcionalidades

- **📚 Lições por Nível** — Conteúdo organizado pelos níveis CEFR (A1 a B2), com diálogos, vocabulário e exercícios de fixação
- **📝 Gramática Explicada** — Regras gramaticais com explicações em português, exemplos práticos e erros comuns
- **🗂️ Vocabulário com Flashcards** — Cards interativos com flip, pronúncia fonética e frases de exemplo
- **✏️ Exercícios Interativos** — Quizzes, preencher lacunas e ordenar palavras com feedback imediato

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
├── app/          # Páginas (App Router)
│   ├── licoes/       # Lições de inglês
│   ├── gramatica/    # Tópicos de gramática
│   ├── vocabulario/  # Flashcards de vocabulário
│   └── exercicios/   # Exercícios interativos
├── components/   # Componentes reutilizáveis
└── data/         # Conteúdo educacional (lições, gramática, vocabulário, exercícios)
```

## Licença

MIT
