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
  // 3. Quiz de Saudações (A1 - quiz)
  // =======================================================================
  {
    slug: "quiz-greetings",
    title: "Quiz de Saudações",
    description:
      "Pratique cumprimentos, despedidas e expressões básicas do dia a dia.",
    level: "A1",
    icon: "message",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: 'Como se diz "Boa noite (ao chegar)" em inglês?',
        options: ["Good night", "Good evening", "Good morning", "Goodbye"],
        correctIndex: 1,
        explanation:
          '"Good evening" é usado ao chegar à noite. "Good night" é mais comum ao se despedir.',
      },
      {
        type: "quiz",
        question: 'Qual é a forma correta de dizer "Prazer em conhecê-lo"?',
        options: [
          "Nice to meet you",
          "Nice to see you yesterday",
          "Good to know you",
          "Nice for meet you",
        ],
        correctIndex: 0,
        explanation:
          '"Nice to meet you" é a forma correta e mais comum para cumprimentos.',
      },
      {
        type: "quiz",
        question: 'Complete: "___ me, where is the bank?"',
        options: ["Thanks", "Excuse", "Excuse me", "Please"],
        correctIndex: 2,
        explanation:
          '"Excuse me" é usado para chamar atenção de forma educada.',
      },
      {
        type: "quiz",
        question: 'Qual é a tradução de "Thank you"?',
        options: ["Por favor", "Obrigado(a)", "Desculpe", "Até logo"],
        correctIndex: 1,
        explanation:
          '"Thank you" significa "Obrigado(a)".',
      },
      {
        type: "quiz",
        question: 'Como se diz "Até mais" em inglês?',
        options: ["See you later", "See you never", "See you last", "See you night"],
        correctIndex: 0,
        explanation:
          '"See you later" é a expressão correta para "Até mais".',
      },
      {
        type: "quiz",
        question: 'Qual alternativa é um cumprimento matinal?',
        options: ["Good afternoon", "Good morning", "Good night", "Good evening"],
        correctIndex: 1,
        explanation:
          '"Good morning" é usado pela manhã.',
      },
    ],
  },
  // =======================================================================
  // 4. Complete com To Be (A1 - fill-in-the-blank)
  // =======================================================================
  {
    slug: "fill-in-verb-to-be",
    title: "Complete com Verbo To Be",
    description:
      'Complete as frases com "am", "is" ou "are".',
    level: "A1",
    icon: "edit",
    type: "fill-in-the-blank",
    questions: [
      {
        type: "fill-in-the-blank",
        sentence: "I ___ a student.",
        answer: "am",
        hint: 'Use "am" com I.',
        explanation: '"I am" é a forma correta com o sujeito I.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "She ___ from Brazil.",
        answer: "is",
        hint: 'Use "is" com she.',
        explanation: '"She is" é a forma correta com she.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "They ___ my friends.",
        answer: "are",
        hint: 'Use "are" com they.',
        explanation: '"They are" é a forma correta com they.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "We ___ at the airport.",
        answer: "are",
        hint: 'Use "are" com we.',
        explanation: '"We are" é a forma correta com we.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "It ___ cold today.",
        answer: "is",
        hint: 'Use "is" com it.',
        explanation: '"It is" é a forma correta para clima.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "You ___ very kind.",
        answer: "are",
        hint: 'Use "are" com you.',
        explanation: '"You are" é a forma correta com you.',
      },
    ],
  },

  // =======================================================================
  // 5. Ordene as Palavras  (A2 - word-order)
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
  // 6. Quiz de Rotina Diária (A2 - quiz)
  // =======================================================================
  {
    slug: "quiz-daily-routine",
    title: "Quiz de Rotina Diária",
    description:
      "Teste seu vocabulário sobre atividades do dia a dia.",
    level: "A2",
    icon: "calendar",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: 'Como se diz "acordar" em inglês?',
        options: ["Wake up", "Get up", "Stand up", "Pick up"],
        correctIndex: 0,
        explanation:
          '"Wake up" é a expressão mais comum para "acordar".',
      },
      {
        type: "quiz",
        question: 'Qual é a tradução de "escovar os dentes"?',
        options: [
          "Brush teeth",
          "Wash teeth",
          "Clean teeths",
          "Brush the tooth",
        ],
        correctIndex: 0,
        explanation:
          '"Brush teeth" é a expressão correta.',
      },
      {
        type: "quiz",
        question: 'Complete: "I ___ breakfast at 7 a.m."',
        options: ["do", "have", "make", "take"],
        correctIndex: 1,
        explanation:
          'Usamos "have breakfast" para "tomar café da manhã".',
      },
      {
        type: "quiz",
        question: 'Qual é a tradução de "go to work"?',
        options: [
          "Ir para o trabalho",
          "Voltar do trabalho",
          "Ficar em casa",
          "Ir ao mercado",
        ],
        correctIndex: 0,
        explanation:
          '"Go to work" significa "ir para o trabalho".',
      },
      {
        type: "quiz",
        question: 'Qual palavra significa "fim de semana"?',
        options: ["Weekday", "Weekend", "Holiday", "Morning"],
        correctIndex: 1,
        explanation:
          '"Weekend" é "fim de semana".',
      },
      {
        type: "quiz",
        question: 'Complete: "She ___ home at 6 p.m."',
        options: ["go", "goes", "going", "gone"],
        correctIndex: 1,
        explanation:
          'Com "she", usamos "goes" no Present Simple.',
      },
    ],
  },
  // =======================================================================
  // 7. Complete com Past Simple (A2 - fill-in-the-blank)
  // =======================================================================
  {
    slug: "fill-in-past-simple",
    title: "Complete com Past Simple",
    description:
      "Pratique o passado simples completando as frases.",
    level: "A2",
    icon: "edit",
    type: "fill-in-the-blank",
    questions: [
      {
        type: "fill-in-the-blank",
        sentence: "Yesterday I ___ to the gym.",
        answer: "went",
        hint: 'Verbo "go" no passado.',
        explanation: '"Go" é irregular e vira "went".',
      },
      {
        type: "fill-in-the-blank",
        sentence: "She ___ a new phone last week.",
        answer: "bought",
        hint: 'Verbo "buy" no passado.',
        explanation: '"Buy" é irregular e vira "bought".',
      },
      {
        type: "fill-in-the-blank",
        sentence: "We ___ dinner at home.",
        answer: "had",
        hint: 'Verbo "have" no passado.',
        explanation: '"Have" é irregular e vira "had".',
      },
      {
        type: "fill-in-the-blank",
        sentence: "They ___ soccer on Saturday.",
        answer: "played",
        hint: 'Verbo regular com -ed.',
        explanation: '"Play" vira "played" no passado.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "I ___ the movie yesterday.",
        answer: "watched",
        hint: 'Verbo regular com -ed.',
        explanation: '"Watch" vira "watched".',
      },
      {
        type: "fill-in-the-blank",
        sentence: "He ___ late this morning.",
        answer: "woke",
        hint: 'Verbo "wake" no passado.',
        explanation: '"Wake" é irregular e vira "woke".',
      },
    ],
  },
  // =======================================================================
  // 8. Quiz de Compras (A2 - quiz)
  // =======================================================================
  {
    slug: "quiz-shopping",
    title: "Quiz de Compras",
    description:
      "Pratique vocabulário de preços, tamanhos e pagamentos.",
    level: "A2",
    icon: "cart",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: 'Como se diz "preço" em inglês?',
        options: ["Prize", "Price", "Piece", "Place"],
        correctIndex: 1,
        explanation: '"Price" significa "preço".',
      },
      {
        type: "quiz",
        question: 'Qual é a tradução de "barato"?',
        options: ["Cheap", "Chic", "Expensive", "Wide"],
        correctIndex: 0,
        explanation: '"Cheap" significa "barato".',
      },
      {
        type: "quiz",
        question: 'Complete: "Do you have this in size ___?"',
        options: ["Big", "Large", "M", "Wide"],
        correctIndex: 2,
        explanation:
          'Tamanhos de roupa geralmente usam letras como S, M, L.',
      },
      {
        type: "quiz",
        question: 'Qual é a forma correta de pedir recibo?',
        options: [
          "Can I have the receipt?",
          "Can I have the recipe?",
          "Can I have the recess?",
          "Can I have the reset?",
        ],
        correctIndex: 0,
        explanation:
          '"Receipt" significa "recibo" ou "nota fiscal".',
      },
      {
        type: "quiz",
        question: 'Qual palavra significa "desconto"?',
        options: ["Discount", "Discuss", "Disco", "District"],
        correctIndex: 0,
        explanation: '"Discount" significa "desconto".',
      },
      {
        type: "quiz",
        question: 'Qual é a tradução de "cartão"?',
        options: ["Card", "Cart", "Care", "Car"],
        correctIndex: 0,
        explanation: '"Card" significa "cartão".',
      },
    ],
  },

  // =======================================================================
  // 9. Revisao de Gramatica  (B1 - mixed)
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
  // =======================================================================
  // 10. Quiz de Tecnologia (B1 - quiz)
  // =======================================================================
  {
    slug: "quiz-technology",
    title: "Quiz de Tecnologia",
    description:
      "Teste vocabulário sobre internet, dispositivos e aplicativos.",
    level: "B1",
    icon: "cpu",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: 'Como se diz "senha" em inglês?',
        options: ["Passcode", "Password", "Passport", "Passage"],
        correctIndex: 1,
        explanation: '"Password" significa "senha".',
      },
      {
        type: "quiz",
        question: 'Qual é a tradução de "arquivo"?',
        options: ["File", "Folder", "Paper", "Sheet"],
        correctIndex: 0,
        explanation: '"File" significa "arquivo".',
      },
      {
        type: "quiz",
        question: 'Complete: "I need to ___ this app."',
        options: ["download", "upload", "turn off", "print"],
        correctIndex: 0,
        explanation: '"Download" é "baixar".',
      },
      {
        type: "quiz",
        question: 'Qual palavra significa "atualização"?',
        options: ["Upgrade", "Update", "Upload", "Undo"],
        correctIndex: 1,
        explanation: '"Update" significa "atualização".',
      },
      {
        type: "quiz",
        question: 'Como se diz "bateria"?',
        options: ["Battery", "Batter", "Bottle", "Button"],
        correctIndex: 0,
        explanation: '"Battery" significa "bateria".',
      },
      {
        type: "quiz",
        question: 'Qual termo significa "tela"?',
        options: ["Screen", "Scene", "Scrap", "Sheet"],
        correctIndex: 0,
        explanation: '"Screen" significa "tela".',
      },
    ],
  },
  // =======================================================================
  // 11. Complete com Modal Verbs (B1 - fill-in-the-blank)
  // =======================================================================
  {
    slug: "fill-in-modal-verbs",
    title: "Complete com Modal Verbs",
    description:
      "Pratique can, must e should em frases do cotidiano.",
    level: "B1",
    icon: "edit",
    type: "fill-in-the-blank",
    questions: [
      {
        type: "fill-in-the-blank",
        sentence: "You ___ wear a seatbelt.",
        answer: "must",
        hint: "Obrigação.",
        explanation: '"Must" indica obrigação.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "She ___ speak English very well.",
        answer: "can",
        hint: "Habilidade.",
        explanation: '"Can" indica habilidade.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "We ___ drink more water.",
        answer: "should",
        hint: "Conselho.",
        explanation: '"Should" indica conselho.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "___ I open the window?",
        answer: "Can",
        hint: "Pedido de permissão.",
        explanation: '"Can I" é usado para pedir permissão.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "You ___ park here.",
        answer: "mustn't",
        hint: "Proibição.",
        explanation: '"Mustn\'t" indica proibição.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "He ___ be more careful.",
        answer: "should",
        hint: "Conselho.",
        explanation: '"Should" indica conselho.',
      },
    ],
  },
  // =======================================================================
  // 12. Ordene as Palavras (B1 - word-order)
  // =======================================================================
  {
    slug: "word-order-conditionals",
    title: "Ordene as Palavras: Condicionais",
    description:
      "Monte frases com If + Present Simple e Future.",
    level: "B1",
    icon: "shuffle",
    type: "word-order",
    questions: [
      {
        type: "word-order",
        words: ["rains", "it", "if", "stay", "we", "home", "will"],
        correctOrder: ["if", "it", "rains", "we", "will", "stay", "home"],
        translation: "Se chover, ficaremos em casa.",
      },
      {
        type: "word-order",
        words: ["call", "I", "finish", "you", "if", "early", "will"],
        correctOrder: ["if", "I", "finish", "early", "I", "will", "call", "you"],
        translation: "Se eu terminar cedo, vou te ligar.",
      },
      {
        type: "word-order",
        words: ["miss", "you", "bus", "will", "the", "if", "hurry", "don't"],
        correctOrder: ["if", "you", "don't", "hurry", "you", "will", "miss", "the", "bus"],
        translation: "Se você não se apressar, vai perder o ônibus.",
      },
      {
        type: "word-order",
        words: ["we", "help", "will", "need", "you", "if", "it"],
        correctOrder: ["we", "will", "help", "if", "you", "need", "it"],
        translation: "Vamos ajudar se você precisar.",
      },
      {
        type: "word-order",
        words: ["if", "late", "we", "are", "call", "will", "you"],
        correctOrder: ["if", "we", "are", "late", "we", "will", "call", "you"],
        translation: "Se estivermos atrasados, vamos te ligar.",
      },
      {
        type: "word-order",
        words: ["if", "she", "studies", "pass", "will", "she"],
        correctOrder: ["if", "she", "studies", "she", "will", "pass"],
        translation: "Se ela estudar, ela vai passar.",
      },
    ],
  },
  // =======================================================================
  // 13. Quiz de Negociações (B2 - quiz)
  // =======================================================================
  {
    slug: "quiz-negotiations",
    title: "Quiz de Negociações",
    description:
      "Vocabulário avançado para negócios e negociações.",
    level: "B2",
    icon: "handshake",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: 'Qual palavra significa "negociação"?',
        options: ["Negotiation", "Notification", "Negation", "Notation"],
        correctIndex: 0,
        explanation: '"Negotiation" significa "negociação".',
      },
      {
        type: "quiz",
        question: 'Qual é a tradução de "contrato"?',
        options: ["Contract", "Contact", "Context", "Construct"],
        correctIndex: 0,
        explanation: '"Contract" significa "contrato".',
      },
      {
        type: "quiz",
        question: 'Como se diz "previsão" em inglês?',
        options: ["Prediction", "Forecast", "Plan", "Estimate"],
        correctIndex: 1,
        explanation: '"Forecast" significa "previsão".',
      },
      {
        type: "quiz",
        question: 'Qual termo significa "parte interessada"?',
        options: ["Stakeholder", "Shareholder", "Worker", "Customer"],
        correctIndex: 0,
        explanation: '"Stakeholder" é "parte interessada".',
      },
      {
        type: "quiz",
        question: 'Qual palavra significa "orçamento"?',
        options: ["Budget", "Bucket", "Market", "Balance"],
        correctIndex: 0,
        explanation: '"Budget" significa "orçamento".',
      },
      {
        type: "quiz",
        question: 'Qual termo significa "parceria"?',
        options: ["Partnership", "Particular", "Partition", "Participant"],
        correctIndex: 0,
        explanation: '"Partnership" significa "parceria".',
      },
    ],
  },
  // =======================================================================
  // 14. Complete com Reported Speech (B2 - fill-in-the-blank)
  // =======================================================================
  {
    slug: "fill-in-reported-speech",
    title: "Complete com Reported Speech",
    description:
      "Pratique o discurso indireto com mudanças de tempo verbal.",
    level: "B2",
    icon: "edit",
    type: "fill-in-the-blank",
    questions: [
      {
        type: "fill-in-the-blank",
        sentence: 'She said she ___ tired.',
        answer: "was",
        hint: "am/is → was",
        explanation: "No reported speech, am/is vira was.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "They told me they ___ help.",
        answer: "could",
        hint: "can → could",
        explanation: "No reported speech, can vira could.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "He said he ___ call me later.",
        answer: "would",
        hint: "will → would",
        explanation: "No reported speech, will vira would.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "I said I ___ finished.",
        answer: "had",
        hint: "Past Perfect",
        explanation: "Usamos had + particípio no passado.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "She said she ___ like coffee.",
        answer: "didn't",
        hint: "Negativa no passado",
        explanation: "A negativa vira passado: didn't like.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "We told him we ___ ready.",
        answer: "were",
        hint: "are → were",
        explanation: "No reported speech, are vira were.",
      },
    ],
  },
  // =======================================================================
  // 15. Ordene as Palavras (B2 - word-order)
  // =======================================================================
  {
    slug: "word-order-passive",
    title: "Ordene as Palavras: Voz Passiva",
    description:
      "Forme frases na voz passiva com a ordem correta.",
    level: "B2",
    icon: "shuffle",
    type: "word-order",
    questions: [
      {
        type: "word-order",
        words: ["was", "email", "the", "sent", "this", "morning"],
        correctOrder: ["the", "email", "was", "sent", "this", "morning"],
        translation: "O e-mail foi enviado esta manhã.",
      },
      {
        type: "word-order",
        words: ["announced", "were", "results", "the", "yesterday"],
        correctOrder: ["the", "results", "were", "announced", "yesterday"],
        translation: "Os resultados foram anunciados ontem.",
      },
      {
        type: "word-order",
        words: ["will", "be", "delivered", "product", "the", "tomorrow"],
        correctOrder: ["the", "product", "will", "be", "delivered", "tomorrow"],
        translation: "O produto será entregue amanhã.",
      },
      {
        type: "word-order",
        words: ["is", "being", "implemented", "policy", "a", "new"],
        correctOrder: ["a", "new", "policy", "is", "being", "implemented"],
        translation: "Uma nova política está sendo implementada.",
      },
      {
        type: "word-order",
        words: ["has", "postponed", "been", "meeting", "the"],
        correctOrder: ["the", "meeting", "has", "been", "postponed"],
        translation: "A reunião foi adiada.",
      },
      {
        type: "word-order",
        words: ["was", "written", "book", "this", "a", "by", "author"],
        correctOrder: ["this", "book", "was", "written", "by", "a", "author"],
        translation: "Este livro foi escrito por um autor.",
      },
    ],
  },
  // =======================================================================
  // 16. Revisão Avançada (B2 - mixed)
  // =======================================================================
  {
    slug: "mixed-advanced-review",
    title: "Revisão Avançada",
    description:
      "Misture reported speech, voz passiva e condicionais em um só treino.",
    level: "B2",
    icon: "layers",
    type: "mixed",
    questions: [
      {
        type: "quiz",
        question:
          'Qual frase está na voz passiva?',
        options: [
          "They announced the results.",
          "The results were announced.",
          "They are announcing the results.",
          "They will announce the results.",
        ],
        correctIndex: 1,
        explanation:
          'A voz passiva usa "be" + particípio: "were announced".',
      },
      {
        type: "fill-in-the-blank",
        sentence: 'She said she ___ tired.',
        answer: "was",
        hint: "Reported speech.",
        explanation: "No reported speech, am/is vira was.",
      },
      {
        type: "quiz",
        question:
          'Escolha a opção correta: "If I had more time, I ___ travel more."',
        options: ["will", "would", "can", "did"],
        correctIndex: 1,
        explanation:
          'Second Conditional usa "would" na oração principal.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "The contract ___ signed yesterday.",
        answer: "was",
        hint: "Voz passiva no passado.",
        explanation: 'Use "was" + particípio passado.',
      },
      {
        type: "quiz",
        question:
          'Qual frase está correta no reported speech?',
        options: [
          "He said he is busy.",
          "He said he was busy.",
          "He said he will busy.",
          "He said he be busy.",
        ],
        correctIndex: 1,
        explanation:
          'No reported speech, is → was.',
      },
      {
        type: "fill-in-the-blank",
        sentence: "If it ___, we will cancel the meeting.",
        answer: "rains",
        hint: "First Conditional.",
        explanation:
          'Após "if", usamos Present Simple: "If it rains".',
      },
    ],
  },
];
