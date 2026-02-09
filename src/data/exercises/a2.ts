import { ExerciseSet, QuizQuestion, FillInQuestion, WordOrderQuestion } from "../types";

export const exercisesA2: ExerciseSet[] = [
  // ─── 1. Quiz: Passado Simples ─────────────────────────────────────────
  {
    slug: "a2-quiz-past-simple",
    title: "Quiz: Passado Simples",
    description: "Teste seus conhecimentos sobre o Simple Past em inglês.",
    level: "A2",
    icon: "⏪",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: "Qual é o passado simples do verbo 'go'?",
        options: ["Goed", "Gone", "Went", "Goes"],
        correctIndex: 2,
        explanation:
          "'Go' é um verbo irregular. Seu passado simples é 'went', não 'goed'. Verbos irregulares não seguem a regra de adicionar '-ed'.",
      },
      {
        type: "quiz",
        question: "Qual frase está no passado simples corretamente?",
        options: [
          "She didn't went to school.",
          "She didn't go to school.",
          "She not went to school.",
          "She don't go to school.",
        ],
        correctIndex: 1,
        explanation:
          "Na negativa do passado simples, usamos 'didn't' + verbo na forma base. O verbo NÃO fica no passado após 'didn't'. Correto: She didn't go.",
      },
      {
        type: "quiz",
        question: "Como se forma a pergunta 'Você trabalhou ontem?' em inglês?",
        options: [
          "You worked yesterday?",
          "Worked you yesterday?",
          "Did you work yesterday?",
          "Did you worked yesterday?",
        ],
        correctIndex: 2,
        explanation:
          "Perguntas no passado simples usam 'Did + sujeito + verbo base'. Não colocamos o verbo no passado após 'did'. Correto: Did you work yesterday?",
      },
      {
        type: "quiz",
        question: "Qual é o passado do verbo 'eat'?",
        options: ["Eated", "Eaten", "Ate", "Eat"],
        correctIndex: 2,
        explanation:
          "'Eat' é irregular: eat → ate (passado simples) → eaten (particípio passado). 'Eated' não existe em inglês.",
      },
      {
        type: "quiz",
        question: "Qual palavra indica tempo passado?",
        options: ["Tomorrow", "Now", "Yesterday", "Always"],
        correctIndex: 2,
        explanation:
          "'Yesterday' (ontem) indica passado. Outras expressões de tempo passado: last week, two days ago, in 2020. 'Tomorrow' é futuro e 'now' é presente.",
      },
      {
        type: "quiz",
        question: "Qual é a forma correta? 'I ___ a movie last night.'",
        options: ["watch", "watched", "watching", "watches"],
        correctIndex: 1,
        explanation:
          "'Watch' é um verbo regular, então adicionamos '-ed' para formar o passado: 'watched'. 'Last night' indica que a ação aconteceu no passado.",
      },
    ] as QuizQuestion[],
  },

  // ─── 2. Complete: Presente Contínuo ───────────────────────────────────
  {
    slug: "a2-fill-present-continuous",
    title: "Complete: Presente Contínuo",
    description: "Preencha com a forma correta do Present Continuous (be + verbo-ing).",
    level: "A2",
    icon: "🔄",
    type: "fill-in-the-blank",
    questions: [
      {
        type: "fill-in-the-blank",
        sentence: "She is ___ a book right now.",
        answer: "reading",
        hint: "Verbo 'read' + ing",
        explanation:
          "O Present Continuous é formado por 'be + verbo-ing'. 'Read' + '-ing' = 'reading'. Usamos este tempo para ações acontecendo agora.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "They are ___ football in the park.",
        answer: "playing",
        hint: "Verbo 'play' + ing",
        explanation:
          "'Play' + '-ing' = 'playing'. Quando o verbo termina em consoante + 'y', mantemos o 'y' e adicionamos '-ing'.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "I am ___ dinner for my family.",
        answer: "cooking",
        hint: "Verbo 'cook' + ing",
        explanation:
          "'Cook' + '-ing' = 'cooking'. O Present Continuous indica que a ação está em progresso neste momento.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "He is ___ to music in his room.",
        answer: "listening",
        hint: "Verbo 'listen' + ing",
        explanation:
          "'Listen' + '-ing' = 'listening'. Note que em inglês dizemos 'listen to music' (com 'to'), diferente do português.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "We are ___ for the bus at the stop.",
        answer: "waiting",
        hint: "Verbo 'wait' + ing",
        explanation:
          "'Wait' + '-ing' = 'waiting'. 'Wait for' significa 'esperar por'. Exemplo: I'm waiting for you (Estou esperando por você).",
      },
      {
        type: "fill-in-the-blank",
        sentence: "The baby is ___ because she is hungry.",
        answer: "crying",
        hint: "Verbo 'cry' + ing (atenção à mudança)",
        explanation:
          "Quando o verbo termina em 'ie', trocamos 'ie' por 'y' e adicionamos '-ing': cry → crying, die → dying, lie → lying.",
      },
    ] as FillInQuestion[],
  },

  // ─── 3. Ordene: Perguntas ─────────────────────────────────────────────
  {
    slug: "a2-word-order-questions",
    title: "Ordene: Perguntas",
    description: "Ordene as palavras para formar perguntas corretas em inglês.",
    level: "A2",
    icon: "❓",
    type: "word-order",
    questions: [
      {
        type: "word-order",
        words: ["you", "did", "go", "where", "yesterday"],
        correctOrder: ["where", "did", "you", "go", "yesterday"],
        translation: "Onde você foi ontem?",
      },
      {
        type: "word-order",
        words: ["doing", "what", "you", "are"],
        correctOrder: ["what", "are", "you", "doing"],
        translation: "O que você está fazendo?",
      },
      {
        type: "word-order",
        words: ["can", "English", "speak", "you"],
        correctOrder: ["can", "you", "speak", "English"],
        translation: "Você sabe falar inglês?",
      },
      {
        type: "word-order",
        words: ["time", "what", "it", "is"],
        correctOrder: ["what", "time", "is", "it"],
        translation: "Que horas são?",
      },
      {
        type: "word-order",
        words: ["like", "would", "you", "coffee", "some"],
        correctOrder: ["would", "you", "like", "some", "coffee"],
        translation: "Você gostaria de um café?",
      },
      {
        type: "word-order",
        words: ["many", "do", "brothers", "have", "how", "you"],
        correctOrder: ["how", "many", "brothers", "do", "you", "have"],
        translation: "Quantos irmãos você tem?",
      },
    ] as WordOrderQuestion[],
  },

  // ─── 4. Quiz: Comparativos ────────────────────────────────────────────
  {
    slug: "a2-quiz-comparatives",
    title: "Quiz: Comparativos",
    description: "Teste seus conhecimentos sobre adjetivos comparativos em inglês.",
    level: "A2",
    icon: "⚖️",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: "Qual é o comparativo de 'big'?",
        options: ["More big", "Biger", "Bigger", "Most big"],
        correctIndex: 2,
        explanation:
          "Adjetivos curtos (1 sílaba) terminados em consoante-vogal-consoante dobram a última consoante + '-er': big → bigger. Não usamos 'more' com adjetivos curtos.",
      },
      {
        type: "quiz",
        question: "Complete: 'This book is ___ than that one.' (interesting)",
        options: [
          "interestinger",
          "more interesting",
          "most interesting",
          "interessting",
        ],
        correctIndex: 1,
        explanation:
          "Adjetivos longos (2+ sílabas) usam 'more' antes do adjetivo: more interesting, more beautiful, more expensive. Nunca adicionamos '-er' a adjetivos longos.",
      },
      {
        type: "quiz",
        question: "Qual é o comparativo de 'good'?",
        options: ["Gooder", "More good", "Better", "Best"],
        correctIndex: 2,
        explanation:
          "'Good' é irregular: good → better (comparativo) → best (superlativo). 'Gooder' e 'more good' não existem.",
      },
      {
        type: "quiz",
        question: "Qual frase usa o comparativo corretamente?",
        options: [
          "She is more tall than me.",
          "She is taller than me.",
          "She is tallest than me.",
          "She is more taller than me.",
        ],
        correctIndex: 1,
        explanation:
          "'Tall' é um adjetivo curto (1 sílaba), então usamos 'taller' (não 'more tall'). Nunca misturamos 'more' com '-er': 'more taller' está duplamente errado.",
      },
      {
        type: "quiz",
        question: "Qual é o comparativo de 'bad'?",
        options: ["Badder", "More bad", "Worse", "Bader"],
        correctIndex: 2,
        explanation:
          "'Bad' é irregular: bad → worse (comparativo) → worst (superlativo). Assim como 'good → better', é preciso memorizar estas formas.",
      },
      {
        type: "quiz",
        question: "Complete: 'My house is ___ than yours.' (cheap)",
        options: ["Cheapest", "More cheap", "Cheaper", "Most cheap"],
        correctIndex: 2,
        explanation:
          "'Cheap' é um adjetivo curto, então adicionamos '-er': cheaper. Usamos 'than' depois do comparativo para fazer a comparação: cheaper than (mais barato que).",
      },
    ] as QuizQuestion[],
  },

  // ─── 5. Complete: Preposições ─────────────────────────────────────────
  {
    slug: "a2-fill-prepositions",
    title: "Complete: Preposições",
    description: "Preencha com a preposição correta (in, on, at, to, from, etc.).",
    level: "A2",
    icon: "📍",
    type: "fill-in-the-blank",
    questions: [
      {
        type: "fill-in-the-blank",
        sentence: "I live ___ Brazil.",
        answer: "in",
        hint: "Preposição usada com países e cidades",
        explanation:
          "Usamos 'in' para países, cidades e lugares fechados: in Brazil, in São Paulo, in the house. 'In' indica que algo está dentro de um espaço.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "The meeting is ___ Monday.",
        answer: "on",
        hint: "Preposição usada com dias da semana",
        explanation:
          "Usamos 'on' para dias da semana e datas específicas: on Monday, on January 5th, on my birthday. Regra: AT hora, ON dia, IN mês/ano.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "She arrives ___ 3 o'clock.",
        answer: "at",
        hint: "Preposição usada com horários",
        explanation:
          "Usamos 'at' para horários específicos: at 3 o'clock, at noon, at midnight. Também usamos 'at' para lugares específicos: at the airport, at school.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "We are going ___ the supermarket.",
        answer: "to",
        hint: "Preposição de direção/destino",
        explanation:
          "Usamos 'to' para indicar destino ou direção: go to school, walk to the park, travel to Japan. Exceção: 'go home' (sem 'to').",
      },
      {
        type: "fill-in-the-blank",
        sentence: "The cat is ___ the table.",
        answer: "on",
        hint: "Preposição que indica superfície",
        explanation:
          "Usamos 'on' para indicar que algo está sobre uma superfície: on the table, on the wall, on the floor. 'In' seria dentro e 'under' seria embaixo.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "He is ___ home right now.",
        answer: "at",
        hint: "Preposição usada com 'home' para indicar localização",
        explanation:
          "Usamos 'at home' para dizer que alguém está em casa. Cuidado: 'go home' (ir para casa) não usa preposição, mas 'be at home' (estar em casa) usa 'at'.",
      },
    ] as FillInQuestion[],
  },

  // ─── 6. Quiz: Direções e Lugares ──────────────────────────────────────
  {
    slug: "a2-quiz-directions",
    title: "Quiz: Direções e Lugares",
    description: "Teste seu vocabulário sobre direções e lugares na cidade.",
    level: "A2",
    icon: "🗺️",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: "O que significa 'Turn left at the corner'?",
        options: [
          "Vire à direita na esquina.",
          "Siga em frente na esquina.",
          "Vire à esquerda na esquina.",
          "Pare na esquina.",
        ],
        correctIndex: 2,
        explanation:
          "'Turn left' significa 'vire à esquerda' e 'at the corner' significa 'na esquina'. 'Turn right' seria 'vire à direita'.",
      },
      {
        type: "quiz",
        question: "Onde você compra remédios em inglês?",
        options: ["Bakery", "Pharmacy", "Grocery store", "Library"],
        correctIndex: 1,
        explanation:
          "'Pharmacy' (ou 'drugstore' nos EUA) é a farmácia. Cuidado: 'library' é biblioteca, não livraria (livraria é 'bookstore').",
      },
      {
        type: "quiz",
        question: "O que significa 'Go straight ahead'?",
        options: [
          "Volte para trás.",
          "Vire à direita.",
          "Siga em frente.",
          "Pare aqui.",
        ],
        correctIndex: 2,
        explanation:
          "'Go straight ahead' (ou 'go straight') significa 'siga em frente'. 'Straight' significa 'reto' ou 'em linha reta'.",
      },
      {
        type: "quiz",
        question: "'The bank is next to the post office.' O que isso significa?",
        options: [
          "O banco fica longe do correio.",
          "O banco fica em frente ao correio.",
          "O banco fica ao lado do correio.",
          "O banco fica atrás do correio.",
        ],
        correctIndex: 2,
        explanation:
          "'Next to' significa 'ao lado de'. Outras expressões úteis: 'in front of' (em frente a), 'behind' (atrás de), 'between' (entre).",
      },
      {
        type: "quiz",
        question: "Qual é o lugar correto? 'I need to catch a flight at the ___.'",
        options: ["Bus station", "Train station", "Airport", "Harbor"],
        correctIndex: 2,
        explanation:
          "'Airport' é o aeroporto, onde pegamos voos (flights). 'Bus station' é rodoviária, 'train station' é estação de trem e 'harbor' é porto.",
      },
      {
        type: "quiz",
        question: "O que significa 'across the street'?",
        options: [
          "No final da rua",
          "Do outro lado da rua",
          "No meio da rua",
          "Ao longo da rua",
        ],
        correctIndex: 1,
        explanation:
          "'Across the street' significa 'do outro lado da rua' ou 'atravessando a rua'. 'Across' indica que algo está no lado oposto.",
      },
    ] as QuizQuestion[],
  },

  // ─── 7. Ordene: Frases no Passado ─────────────────────────────────────
  {
    slug: "a2-word-order-past",
    title: "Ordene: Frases no Passado",
    description: "Ordene as palavras para formar frases no passado simples.",
    level: "A2",
    icon: "📜",
    type: "word-order",
    questions: [
      {
        type: "word-order",
        words: ["went", "I", "the", "to", "yesterday", "beach"],
        correctOrder: ["I", "went", "to", "the", "beach", "yesterday"],
        translation: "Eu fui à praia ontem.",
      },
      {
        type: "word-order",
        words: ["not", "she", "did", "the", "like", "movie"],
        correctOrder: ["she", "did", "not", "like", "the", "movie"],
        translation: "Ela não gostou do filme.",
      },
      {
        type: "word-order",
        words: ["bought", "we", "car", "new", "a", "week", "last"],
        correctOrder: ["we", "bought", "a", "new", "car", "last", "week"],
        translation: "Nós compramos um carro novo semana passada.",
      },
      {
        type: "word-order",
        words: ["did", "what", "for", "you", "eat", "lunch"],
        correctOrder: ["what", "did", "you", "eat", "for", "lunch"],
        translation: "O que você comeu no almoço?",
      },
      {
        type: "word-order",
        words: ["studied", "they", "the", "for", "exam", "hard"],
        correctOrder: ["they", "studied", "hard", "for", "the", "exam"],
        translation: "Eles estudaram muito para a prova.",
      },
      {
        type: "word-order",
        words: ["was", "it", "rainy", "very", "morning", "this"],
        correctOrder: ["it", "was", "very", "rainy", "this", "morning"],
        translation: "Estava muito chuvoso esta manhã.",
      },
    ] as WordOrderQuestion[],
  },

  // ─── 8. Revisão A2 (Mixed) ────────────────────────────────────────────
  {
    slug: "a2-mixed-review",
    title: "Revisão A2",
    description: "Revisão geral do nível A2 com diferentes tipos de exercícios.",
    level: "A2",
    icon: "🎯",
    type: "mixed",
    questions: [
      // 2 Quiz
      {
        type: "quiz",
        question: "Qual tempo verbal descreve uma ação acontecendo agora?",
        options: [
          "Simple Past",
          "Simple Present",
          "Present Continuous",
          "Past Continuous",
        ],
        correctIndex: 2,
        explanation:
          "O 'Present Continuous' (be + verbo-ing) descreve ações que estão acontecendo neste momento. Exemplo: 'I am studying now' (Estou estudando agora).",
      } as QuizQuestion,
      {
        type: "quiz",
        question: "Qual é a forma negativa correta de 'They watched TV'?",
        options: [
          "They didn't watched TV.",
          "They not watched TV.",
          "They didn't watch TV.",
          "They don't watched TV.",
        ],
        correctIndex: 2,
        explanation:
          "Na forma negativa do passado simples, usamos 'didn't + verbo na forma base'. O verbo volta à forma original (watch, não watched) após 'didn't'.",
      } as QuizQuestion,
      // 2 Fill-in
      {
        type: "fill-in-the-blank",
        sentence: "She is ___ than her brother. (old)",
        answer: "older",
        hint: "Comparativo de 'old'",
        explanation:
          "'Old' é um adjetivo curto, então formamos o comparativo adicionando '-er': older. 'She is older than her brother' = Ela é mais velha que seu irmão.",
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "I ___ to the park every Sunday when I was a child.",
        answer: "went",
        hint: "Passado de 'go'",
        explanation:
          "'Go' no passado simples é 'went' (irregular). A expressão 'when I was a child' indica que estamos falando do passado, então usamos o passado simples.",
      } as FillInQuestion,
      // 2 Word-order
      {
        type: "word-order",
        words: ["you", "were", "where", "born"],
        correctOrder: ["where", "were", "you", "born"],
        translation: "Onde você nasceu?",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["is", "more", "English", "than", "difficult", "Spanish"],
        correctOrder: ["English", "is", "more", "difficult", "than", "Spanish"],
        translation: "Inglês é mais difícil que espanhol.",
      } as WordOrderQuestion,
    ],
  },
];
