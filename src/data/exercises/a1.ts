import { ExerciseSet, QuizQuestion, FillInQuestion, WordOrderQuestion } from "../types";

export const exercisesA1: ExerciseSet[] = [
  // ─── 1. Quiz: Saudações ───────────────────────────────────────────────
  {
    slug: "a1-quiz-greetings",
    title: "Quiz: Saudações",
    description: "Teste seus conhecimentos sobre cumprimentos e saudações em inglês.",
    level: "A1",
    icon: "👋",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: "Como você diz 'Bom dia' em inglês?",
        options: ["Good night", "Good morning", "Good evening", "Good afternoon"],
        correctIndex: 1,
        explanation:
          "'Good morning' é usado para cumprimentar alguém pela manhã. 'Good afternoon' é para a tarde, 'Good evening' para o início da noite e 'Good night' é uma despedida noturna.",
      },
      {
        type: "quiz",
        question: "Qual é a resposta mais natural para 'How are you?'",
        options: [
          "I have 25 years.",
          "I'm fine, thank you.",
          "Yes, I do.",
          "My name is João.",
        ],
        correctIndex: 1,
        explanation:
          "'I'm fine, thank you' é a resposta padrão para 'How are you?'. Em inglês, não dizemos 'I have 25 years' para falar a idade — o correto é 'I am 25 years old'.",
      },
      {
        type: "quiz",
        question: "O que significa 'Nice to meet you'?",
        options: [
          "Até logo",
          "Com licença",
          "Prazer em conhecê-lo",
          "Como vai você?",
        ],
        correctIndex: 2,
        explanation:
          "'Nice to meet you' significa 'Prazer em conhecê-lo(a)'. É usado quando você conhece alguém pela primeira vez.",
      },
      {
        type: "quiz",
        question: "Qual saudação é usada ao se despedir?",
        options: ["Hello", "Hi there", "Goodbye", "Welcome"],
        correctIndex: 2,
        explanation:
          "'Goodbye' (ou 'Bye') é usado para se despedir. 'Hello', 'Hi there' e 'Welcome' são formas de cumprimentar ou dar boas-vindas.",
      },
      {
        type: "quiz",
        question: "Como você pergunta o nome de alguém em inglês?",
        options: [
          "How old are you?",
          "Where are you from?",
          "What is your name?",
          "How do you do?",
        ],
        correctIndex: 2,
        explanation:
          "'What is your name?' significa 'Qual é o seu nome?'. 'How old are you?' pergunta a idade e 'Where are you from?' pergunta de onde a pessoa é.",
      },
      {
        type: "quiz",
        question: "Qual expressão significa 'Até logo' de forma informal?",
        options: ["Good evening", "See you later", "Good morning", "Excuse me"],
        correctIndex: 1,
        explanation:
          "'See you later' é uma forma informal de dizer 'Até logo' ou 'Nos vemos depois'. É muito usada no dia a dia entre amigos.",
      },
    ] as QuizQuestion[],
  },

  // ─── 2. Complete: Verb To Be ──────────────────────────────────────────
  {
    slug: "a1-fill-verb-to-be",
    title: "Complete: Verb To Be",
    description: "Preencha as frases com a forma correta do verbo 'to be' (am, is, are).",
    level: "A1",
    icon: "✏️",
    type: "fill-in-the-blank",
    questions: [
      {
        type: "fill-in-the-blank",
        sentence: "I ___ a student.",
        answer: "am",
        hint: "Usado com 'I'",
        explanation:
          "Com o pronome 'I' (eu), sempre usamos 'am'. Exemplo: I am happy, I am Brazilian.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "She ___ my sister.",
        answer: "is",
        hint: "Usado com he/she/it",
        explanation:
          "Com 'he', 'she' e 'it', usamos 'is'. Exemplo: She is tall, He is a doctor.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "We ___ from Brazil.",
        answer: "are",
        hint: "Usado com we/you/they",
        explanation:
          "Com 'we', 'you' e 'they', usamos 'are'. Exemplo: We are friends, They are here.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "It ___ a beautiful day.",
        answer: "is",
        hint: "Usado com he/she/it",
        explanation:
          "'It' usa 'is'. Usamos 'it' para falar do tempo, de objetos e de animais. Exemplo: It is cold today.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "They ___ my friends.",
        answer: "are",
        hint: "Usado com we/you/they",
        explanation:
          "'They' (eles/elas) usa 'are'. Exemplo: They are very nice.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "You ___ very kind.",
        answer: "are",
        hint: "Usado com we/you/they",
        explanation:
          "'You' (você/vocês) sempre usa 'are', tanto no singular quanto no plural. Exemplo: You are welcome.",
      },
    ] as FillInQuestion[],
  },

  // ─── 3. Ordene: Frases Básicas ────────────────────────────────────────
  {
    slug: "a1-word-order-basic",
    title: "Ordene: Frases Básicas",
    description: "Coloque as palavras na ordem correta para formar frases em inglês.",
    level: "A1",
    icon: "🔤",
    type: "word-order",
    questions: [
      {
        type: "word-order",
        words: ["am", "I", "a", "teacher"],
        correctOrder: ["I", "am", "a", "teacher"],
        translation: "Eu sou um(a) professor(a).",
      },
      {
        type: "word-order",
        words: ["name", "my", "is", "Maria"],
        correctOrder: ["my", "name", "is", "Maria"],
        translation: "Meu nome é Maria.",
      },
      {
        type: "word-order",
        words: ["from", "she", "is", "Brazil"],
        correctOrder: ["she", "is", "from", "Brazil"],
        translation: "Ela é do Brasil.",
      },
      {
        type: "word-order",
        words: ["like", "I", "coffee"],
        correctOrder: ["I", "like", "coffee"],
        translation: "Eu gosto de café.",
      },
      {
        type: "word-order",
        words: ["is", "this", "house", "my"],
        correctOrder: ["this", "is", "my", "house"],
        translation: "Esta é minha casa.",
      },
      {
        type: "word-order",
        words: ["happy", "are", "they", "very"],
        correctOrder: ["they", "are", "very", "happy"],
        translation: "Eles estão muito felizes.",
      },
    ] as WordOrderQuestion[],
  },

  // ─── 4. Quiz: Números e Cores ─────────────────────────────────────────
  {
    slug: "a1-quiz-numbers",
    title: "Quiz: Números e Cores",
    description: "Teste seus conhecimentos sobre números e cores em inglês.",
    level: "A1",
    icon: "🔢",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: "Como se escreve o número 12 em inglês?",
        options: ["Twelve", "Twenty", "Ten", "Eleven"],
        correctIndex: 0,
        explanation:
          "'Twelve' é 12. Cuidado para não confundir com 'twenty' (20) ou 'eleven' (11). Os números de 11 a 19 têm formas próprias em inglês.",
      },
      {
        type: "quiz",
        question: "Qual é a cor 'roxo' em inglês?",
        options: ["Pink", "Orange", "Purple", "Brown"],
        correctIndex: 2,
        explanation:
          "'Purple' significa roxo/lilás. 'Pink' é rosa, 'orange' é laranja e 'brown' é marrom.",
      },
      {
        type: "quiz",
        question: "Quanto é 'thirty plus fifteen'?",
        options: ["Fifty", "Forty", "Forty-five", "Thirty-five"],
        correctIndex: 2,
        explanation:
          "Thirty (30) plus fifteen (15) é forty-five (45). 'Plus' significa 'mais' em operações matemáticas.",
      },
      {
        type: "quiz",
        question: "Qual destas NÃO é uma cor primária em inglês?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctIndex: 2,
        explanation:
          "'Green' (verde) não é considerada uma cor primária. As cores primárias são 'red' (vermelho), 'blue' (azul) e 'yellow' (amarelo).",
      },
      {
        type: "quiz",
        question: "Como se diz 'primeiro' em inglês?",
        options: ["One", "Once", "First", "Front"],
        correctIndex: 2,
        explanation:
          "'First' é o número ordinal para 'primeiro'. 'One' é o número cardinal (um). Números ordinais indicam posição: first (1st), second (2nd), third (3rd).",
      },
      {
        type: "quiz",
        question: "O que significa a cor 'gray'?",
        options: ["Verde", "Cinza", "Dourado", "Prateado"],
        correctIndex: 1,
        explanation:
          "'Gray' (ou 'grey' no inglês britânico) significa cinza. 'Green' é verde, 'gold' é dourado e 'silver' é prateado.",
      },
    ] as QuizQuestion[],
  },

  // ─── 5. Complete: Pronomes ────────────────────────────────────────────
  {
    slug: "a1-fill-pronouns",
    title: "Complete: Pronomes",
    description: "Preencha as frases com o pronome pessoal correto.",
    level: "A1",
    icon: "👤",
    type: "fill-in-the-blank",
    questions: [
      {
        type: "fill-in-the-blank",
        sentence: "___ is a doctor. (Maria)",
        answer: "She",
        hint: "Pronome feminino",
        explanation:
          "'She' (ela) é o pronome usado para substituir nomes femininos. Maria é mulher, então usamos 'she'.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "___ are students. (João and Pedro)",
        answer: "They",
        hint: "Pronome para mais de uma pessoa",
        explanation:
          "'They' (eles/elas) é usado quando falamos de duas ou mais pessoas. João and Pedro são duas pessoas, então usamos 'they'.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "___ is my dog. (Rex)",
        answer: "It",
        hint: "Pronome para animais e objetos",
        explanation:
          "'It' é usado para animais e objetos. Quando falamos de um animal de estimação sem ênfase pessoal, usamos 'it'.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "___ am from São Paulo.",
        answer: "I",
        hint: "Pronome para falar de si mesmo",
        explanation:
          "'I' (eu) é sempre escrito com letra maiúscula em inglês, independentemente da posição na frase.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "___ is tall. (Carlos)",
        answer: "He",
        hint: "Pronome masculino",
        explanation:
          "'He' (ele) é o pronome usado para substituir nomes masculinos. Carlos é homem, então usamos 'he'.",
      },
      {
        type: "fill-in-the-blank",
        sentence: "___ are in the classroom. (You and I)",
        answer: "We",
        hint: "Pronome para 'nós'",
        explanation:
          "'We' (nós) é usado quando o falante se inclui no grupo. 'You and I' equivale a 'nós', portanto usamos 'we'.",
      },
    ] as FillInQuestion[],
  },

  // ─── 6. Quiz: Família ─────────────────────────────────────────────────
  {
    slug: "a1-quiz-family",
    title: "Quiz: Família",
    description: "Teste seu vocabulário sobre membros da família em inglês.",
    level: "A1",
    icon: "👨‍👩‍👧‍👦",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question: "Como se diz 'avó' em inglês?",
        options: ["Aunt", "Mother", "Grandmother", "Sister"],
        correctIndex: 2,
        explanation:
          "'Grandmother' (ou 'grandma' informalmente) significa avó. 'Mother' é mãe, 'aunt' é tia e 'sister' é irmã.",
      },
      {
        type: "quiz",
        question: "O que significa 'uncle' em português?",
        options: ["Primo", "Tio", "Sobrinho", "Padrasto"],
        correctIndex: 1,
        explanation:
          "'Uncle' significa tio. 'Cousin' é primo(a), 'nephew' é sobrinho e 'stepfather' é padrasto.",
      },
      {
        type: "quiz",
        question: "Qual é a palavra para 'irmão' em inglês?",
        options: ["Brother", "Husband", "Son", "Father"],
        correctIndex: 0,
        explanation:
          "'Brother' é irmão. 'Husband' é marido, 'son' é filho e 'father' é pai.",
      },
      {
        type: "quiz",
        question: "'Daughter' em português significa:",
        options: ["Mãe", "Irmã", "Filha", "Esposa"],
        correctIndex: 2,
        explanation:
          "'Daughter' significa filha. 'Son' é filho. Juntos: 'son and daughter' (filho e filha). 'Mother' é mãe e 'wife' é esposa.",
      },
      {
        type: "quiz",
        question: "Como se diz 'primo' em inglês?",
        options: ["Nephew", "Cousin", "Brother", "Uncle"],
        correctIndex: 1,
        explanation:
          "'Cousin' serve tanto para primo quanto para prima — em inglês, não há distinção de gênero para essa palavra.",
      },
      {
        type: "quiz",
        question: "O que significa 'husband'?",
        options: ["Pai", "Filho", "Irmão", "Marido"],
        correctIndex: 3,
        explanation:
          "'Husband' significa marido/esposo. O feminino é 'wife' (esposa). Juntos formam 'husband and wife'.",
      },
    ] as QuizQuestion[],
  },

  // ─── 7. Ordene: Rotina Diária ─────────────────────────────────────────
  {
    slug: "a1-word-order-daily",
    title: "Ordene: Rotina Diária",
    description: "Ordene as palavras para formar frases sobre rotina diária.",
    level: "A1",
    icon: "⏰",
    type: "word-order",
    questions: [
      {
        type: "word-order",
        words: ["up", "I", "at", "wake", "seven"],
        correctOrder: ["I", "wake", "up", "at", "seven"],
        translation: "Eu acordo às sete.",
      },
      {
        type: "word-order",
        words: ["breakfast", "she", "eats", "morning", "in", "the"],
        correctOrder: ["she", "eats", "breakfast", "in", "the", "morning"],
        translation: "Ela toma café da manhã de manhã.",
      },
      {
        type: "word-order",
        words: ["go", "we", "school", "to", "bus", "by"],
        correctOrder: ["we", "go", "to", "school", "by", "bus"],
        translation: "Nós vamos para a escola de ônibus.",
      },
      {
        type: "word-order",
        words: ["watches", "he", "TV", "night", "at"],
        correctOrder: ["he", "watches", "TV", "at", "night"],
        translation: "Ele assiste TV à noite.",
      },
      {
        type: "word-order",
        words: ["teeth", "brush", "I", "my", "day", "every"],
        correctOrder: ["I", "brush", "my", "teeth", "every", "day"],
        translation: "Eu escovo meus dentes todos os dias.",
      },
      {
        type: "word-order",
        words: ["to", "they", "bed", "go", "early"],
        correctOrder: ["they", "go", "to", "bed", "early"],
        translation: "Eles vão para a cama cedo.",
      },
    ] as WordOrderQuestion[],
  },

  // ─── 8. Revisão A1 (Mixed) ────────────────────────────────────────────
  {
    slug: "a1-mixed-review",
    title: "Revisão A1",
    description: "Revisão geral do nível A1 com diferentes tipos de exercícios.",
    level: "A1",
    icon: "🎯",
    type: "mixed",
    questions: [
      // 2 Quiz
      {
        type: "quiz",
        question: "Qual é a tradução correta de 'I am 20 years old'?",
        options: [
          "Eu tenho 20 anos.",
          "Eu sou 20 anos velho.",
          "Eu estou com 20 anos.",
          "Eu faço 20 anos.",
        ],
        correctIndex: 0,
        explanation:
          "Em inglês, usamos o verbo 'to be' (ser/estar) para falar a idade: 'I am 20 years old'. Em português traduzimos como 'Eu tenho 20 anos', usando o verbo 'ter'.",
      } as QuizQuestion,
      {
        type: "quiz",
        question: "Qual frase está correta?",
        options: [
          "She have a cat.",
          "She has a cat.",
          "She haves a cat.",
          "She having a cat.",
        ],
        correctIndex: 1,
        explanation:
          "Com 'she', 'he' e 'it', o verbo 'have' muda para 'has'. Esta é uma regra importante da terceira pessoa do singular no presente simples.",
      } as QuizQuestion,
      // 2 Fill-in
      {
        type: "fill-in-the-blank",
        sentence: "My mother ___ a nurse. She works at the hospital.",
        answer: "is",
        hint: "Verbo 'to be' com she",
        explanation:
          "'My mother' equivale a 'she', então usamos 'is'. Exemplo: My mother is kind (Minha mãe é gentil).",
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "I ___ two brothers and one sister.",
        answer: "have",
        hint: "Verbo 'ter' com I",
        explanation:
          "Com 'I' usamos 'have' (ter). 'Has' é usado apenas com he/she/it. Exemplo: I have a dog (Eu tenho um cachorro).",
      } as FillInQuestion,
      // 2 Word-order
      {
        type: "word-order",
        words: ["do", "where", "live", "you"],
        correctOrder: ["where", "do", "you", "live"],
        translation: "Onde você mora?",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["English", "speak", "they", "and", "Spanish"],
        correctOrder: ["they", "speak", "English", "and", "Spanish"],
        translation: "Eles falam inglês e espanhol.",
      } as WordOrderQuestion,
    ],
  },
];
