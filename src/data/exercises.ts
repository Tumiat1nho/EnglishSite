// ---------------------------------------------------------------------------
// Exercise data for Brazilian English-learning site
// ---------------------------------------------------------------------------

// ---- Interfaces -----------------------------------------------------------

export interface QuizQuestion {
  type: "quiz";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FillInQuestion {
  type: "fill-in-the-blank";
  sentence: string; // use ___ for the blank
  answer: string;
  hint?: string;
  explanation: string;
}

export interface WordOrderQuestion {
  type: "word-order";
  words: string[]; // scrambled words
  correctOrder: string[]; // correct order
  translation: string; // Portuguese translation
}

export type ExerciseQuestion = QuizQuestion | FillInQuestion | WordOrderQuestion;

export interface ExerciseSet {
  slug: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  type: "quiz" | "fill-in-the-blank" | "word-order" | "mixed";
  questions: ExerciseQuestion[];
}

// ---- Exercise Sets --------------------------------------------------------

export const exerciseSets: ExerciseSet[] = [
  // =======================================================================
  // 1. Quiz de Vocabulario Basico  (A1 - quiz)
  // =======================================================================
  {
    slug: "quiz-basic-vocabulary",
    title: "Quiz de Vocabulário Básico",
    description:
      "Teste seus conhecimentos de vocabulário básico em inglês com perguntas de múltipla escolha.",
    level: "A1",
    icon: "abc",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: 'Como se diz "maçã" em inglês?',
        options: ["Orange", "Banana", "Apple", "Grape"],
        correctIndex: 2,
        explanation:
          '"Apple" significa "maçã". "Orange" é laranja, "banana" é banana e "grape" é uva.',
      },
      {
        type: "quiz",
        question: 'Qual é a tradução correta de "dog"?',
        options: ["Gato", "Cachorro", "Pássaro", "Peixe"],
        correctIndex: 1,
        explanation:
          '"Dog" significa "cachorro". "Gato" é "cat", "pássaro" é "bird" e "peixe" é "fish".',
      },
      {
        type: "quiz",
        question: 'Qual palavra em inglês significa "casa"?',
        options: ["Car", "School", "House", "Store"],
        correctIndex: 2,
        explanation:
          '"House" significa "casa". "Car" é carro, "school" é escola e "store" é loja.',
      },
      {
        type: "quiz",
        question: 'O que significa "water"?',
        options: ["Comida", "Água", "Leite", "Suco"],
        correctIndex: 1,
        explanation:
          '"Water" significa "água". "Comida" é "food", "leite" é "milk" e "suco" é "juice".',
      },
      {
        type: "quiz",
        question: 'Qual é a cor correspondente a "blue"?',
        options: ["Vermelho", "Verde", "Amarelo", "Azul"],
        correctIndex: 3,
        explanation:
          '"Blue" significa "azul". "Vermelho" é "red", "verde" é "green" e "amarelo" é "yellow".',
      },
      {
        type: "quiz",
        question:
          'Complete a frase: "I have two ___." (Eu tenho dois olhos.)',
        options: ["Ears", "Eyes", "Arms", "Hands"],
        correctIndex: 1,
        explanation:
          '"Eyes" significa "olhos". "Ears" é orelhas, "arms" é braços e "hands" é mãos.',
      },
    ],
  },

  // =======================================================================
  // 2. Complete com Present Simple  (A1 - fill-in-the-blank)
  // =======================================================================
  {
    slug: "fill-in-present-simple",
    title: "Complete com Present Simple",
    description:
      "Pratique a conjugação de verbos no Present Simple completando as frases.",
    level: "A1",
    icon: "edit",
    type: "fill-in-the-blank",
    questions: [
      {
        type: "fill-in-the-blank",
        sentence: "She ___ to school every day.",
        answer: "goes",
        hint: "Verbo 'go' na terceira pessoa do singular",
        explanation:
          'No Present Simple, o verbo "go" recebe "-es" na terceira pessoa do singular (he/she/it). Por isso, dizemos "She goes".',
      },
      {
        type: "fill-in-the-blank",
        sentence: "They ___ breakfast at 7 a.m.",
        answer: "have",
        hint: "Verbo 'have' com sujeito 'they'",
        explanation:
          'Com "they" (eles/elas), o verbo "have" não muda no Present Simple. Usamos "have" sem alteração para I, you, we e they.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "He ___ English very well.",
        answer: "speaks",
        hint: "Verbo 'speak' na terceira pessoa do singular",
        explanation:
          'Na terceira pessoa do singular (he/she/it), adicionamos "-s" ao verbo. "Speak" vira "speaks".',
      },
      {
        type: "fill-in-the-blank",
        sentence: "I ___ not like coffee.",
        answer: "do",
        hint: "Auxiliar usado para negar no Present Simple com 'I'",
        explanation:
          'Para formar frases negativas no Present Simple com I/you/we/they, usamos o auxiliar "do" + "not". "I do not like coffee" (ou "I don\'t like coffee").',
      },
      {
        type: "fill-in-the-blank",
        sentence: "My cat ___ on the sofa every afternoon.",
        answer: "sleeps",
        hint: "Verbo 'sleep' na terceira pessoa do singular",
        explanation:
          '"My cat" equivale a "it" (terceira pessoa do singular), então adicionamos "-s" ao verbo: "sleeps".',
      },
      {
        type: "fill-in-the-blank",
        sentence: "___ you like pizza?",
        answer: "Do",
        hint: "Auxiliar para perguntas no Present Simple com 'you'",
        explanation:
          'Para formar perguntas no Present Simple com I/you/we/they, colocamos o auxiliar "Do" no início da frase: "Do you like pizza?".',
      },
    ],
  },

  // =======================================================================
  // 3. Ordene as Palavras  (A2 - word-order)
  // =======================================================================
  {
    slug: "word-order-sentences",
    title: "Ordene as Palavras",
    description:
      "Coloque as palavras na ordem correta para formar frases em inglês.",
    level: "A2",
    icon: "shuffle",
    type: "word-order",
    questions: [
      {
        type: "word-order",
        words: ["like", "I", "very", "chocolate", "much"],
        correctOrder: ["I", "like", "chocolate", "very", "much"],
        translation: "Eu gosto muito de chocolate.",
      },
      {
        type: "word-order",
        words: ["going", "are", "to", "we", "the", "beach"],
        correctOrder: ["we", "are", "going", "to", "the", "beach"],
        translation: "Nós estamos indo para a praia.",
      },
      {
        type: "word-order",
        words: ["does", "live", "she", "where", "?"],
        correctOrder: ["where", "does", "she", "live", "?"],
        translation: "Onde ela mora?",
      },
      {
        type: "word-order",
        words: ["yesterday", "a", "I", "bought", "new", "book"],
        correctOrder: ["I", "bought", "a", "new", "book", "yesterday"],
        translation: "Eu comprei um livro novo ontem.",
      },
      {
        type: "word-order",
        words: ["can", "you", "speak", "English", "?"],
        correctOrder: ["can", "you", "speak", "English", "?"],
        translation: "Você sabe falar inglês?",
      },
      {
        type: "word-order",
        words: ["always", "he", "gets", "early", "up"],
        correctOrder: ["he", "always", "gets", "up", "early"],
        translation: "Ele sempre acorda cedo.",
      },
    ],
  },

  // =======================================================================
  // 4. Revisao de Gramatica  (B1 - mixed)
  // =======================================================================
  {
    slug: "mixed-grammar-review",
    title: "Revisão de Gramática",
    description:
      "Revise tópicos gramaticais importantes com uma mistura de exercícios de múltipla escolha e completar frases.",
    level: "B1",
    icon: "layers",
    type: "mixed",
    questions: [
      {
        type: "quiz",
        question:
          'Qual frase usa o Present Perfect corretamente?',
        options: [
          "I have went to Paris last year.",
          "She has visited London three times.",
          "They have saw that movie yesterday.",
          "He has go to the gym every day.",
        ],
        correctIndex: 1,
        explanation:
          'O Present Perfect é formado por "have/has" + particípio passado. "Visited" é o particípio de "visit". As outras opções usam formas verbais incorretas ou advérbios de tempo específico (como "yesterday" e "last year"), que pedem o Past Simple.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "If it ___ tomorrow, we will stay home.",
        answer: "rains",
        hint: "Condicional tipo 1: If + Present Simple, ... will + verbo",
        explanation:
          'Na condicional tipo 1 (First Conditional), usamos o Present Simple na cláusula com "if" e "will" + verbo na cláusula principal. Por isso: "If it rains..., we will stay home."',
      },
      {
        type: "quiz",
        question:
          'Qual é a forma correta do comparativo de "good"?',
        options: ["Gooder", "More good", "Better", "Best"],
        correctIndex: 2,
        explanation:
          '"Good" é um adjetivo irregular. Seu comparativo é "better" e seu superlativo é "best". Nunca usamos "gooder" ou "more good".',
      },
      {
        type: "fill-in-the-blank",
        sentence: "She ___ studying when I called her.",
        answer: "was",
        hint: "Past Continuous: sujeito + was/were + verbo-ing",
        explanation:
          'O Past Continuous é formado por "was/were" + verbo com "-ing". Como o sujeito é "she" (terceira pessoa do singular), usamos "was": "She was studying".',
      },
      {
        type: "quiz",
        question:
          'Escolha a opção correta: "I ___ sushi before I went to Japan."',
        options: [
          "never tried",
          "have never tried",
          "had never tried",
          "was never trying",
        ],
        correctIndex: 2,
        explanation:
          'Usamos o Past Perfect ("had" + particípio passado) para indicar uma ação que aconteceu antes de outra ação no passado. "I had never tried sushi before I went to Japan" mostra que a experiência (não ter provado sushi) veio antes da viagem ao Japão.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "This book ___ written by a famous author.",
        answer: "was",
        hint: "Voz passiva no Past Simple: was/were + particípio passado",
        explanation:
          'A voz passiva no Past Simple é formada por "was/were" + particípio passado. Como "this book" é singular, usamos "was": "This book was written by a famous author."',
      },
    ],
  },
];
