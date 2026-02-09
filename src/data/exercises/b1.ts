import { ExerciseSet, QuizQuestion, FillInQuestion, WordOrderQuestion } from "../types";

export const exercisesB1: ExerciseSet[] = [
  // =======================================================================
  // 1. Quiz: Presente Perfeito (Present Perfect)
  // =======================================================================
  {
    slug: "b1-quiz-present-perfect",
    title: "Quiz: Presente Perfeito",
    description:
      "Teste seus conhecimentos sobre o Present Perfect com perguntas de múltipla escolha.",
    level: "B1",
    icon: "✅",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question:
          'Qual frase está correta no Present Perfect?',
        options: [
          "I have went to the store.",
          "She has eaten lunch already.",
          "They has finished the project.",
          "He have seen that movie.",
        ],
        correctIndex: 1,
        explanation:
          'O Present Perfect é formado por "have/has" + particípio passado. "She has eaten" está correto porque "eaten" é o particípio de "eat" e usamos "has" com "she". "Went" deveria ser "gone", "has" não combina com "they" e "have" não combina com "he".',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Quando usamos o Present Perfect em vez do Past Simple?',
        options: [
          "Quando sabemos exatamente quando algo aconteceu.",
          "Quando a ação aconteceu em um momento não especificado no passado.",
          "Quando a ação está acontecendo agora.",
          "Quando falamos sobre planos futuros.",
        ],
        correctIndex: 1,
        explanation:
          'O Present Perfect é usado quando o momento exato da ação não é especificado ou não é importante. Se dizemos "yesterday" ou "last week", usamos o Past Simple. O Present Perfect conecta o passado ao presente.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Complete: "We ___ in this city since 2015."',
        options: [
          "are living",
          "lived",
          "have lived",
          "live",
        ],
        correctIndex: 2,
        explanation:
          'Usamos o Present Perfect com "since" para indicar uma ação que começou no passado e continua até o presente. "We have lived in this city since 2015" indica que ainda moramos aqui.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Qual é a diferença entre "I have been to Paris" e "I have gone to Paris"?',
        options: [
          "Não há diferença.",
          '"Have been to" significa que visitei e voltei; "have gone to" significa que ainda estou lá.',
          '"Have gone to" é mais formal.',
          '"Have been to" é usado apenas no inglês britânico.',
        ],
        correctIndex: 1,
        explanation:
          '"I have been to Paris" significa que visitei Paris em algum momento e já voltei. "I have gone to Paris" significa que fui a Paris e ainda estou lá (não voltei). É uma distinção importante no Present Perfect.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Escolha a frase correta: "They ___ never ___ sushi."',
        options: [
          "have / try",
          "has / tried",
          "have / tried",
          "had / trying",
        ],
        correctIndex: 2,
        explanation:
          'Com "they" usamos "have" (não "has"). O particípio passado de "try" é "tried". A forma correta é "They have never tried sushi." O advérbio "never" fica entre "have" e o particípio.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Qual advérbio é comumente usado com o Present Perfect?',
        options: [
          "Yesterday",
          "Last week",
          "Already",
          "Two days ago",
        ],
        correctIndex: 2,
        explanation:
          '"Already" (já), "yet" (ainda/já), "ever" (alguma vez), "never" (nunca), "just" (acabou de) e "recently" (recentemente) são advérbios típicos do Present Perfect. Palavras como "yesterday", "last week" e "ago" pedem o Past Simple.',
      } as QuizQuestion,
    ],
  },

  // =======================================================================
  // 2. Complete: Condicionais (Conditionals)
  // =======================================================================
  {
    slug: "b1-fill-conditionals",
    title: "Complete: Condicionais",
    description:
      "Pratique as estruturas condicionais (First e Second Conditional) completando as frases.",
    level: "B1",
    icon: "🔀",
    type: "fill-in-the-blank",
    questions: [
      {
        type: "fill-in-the-blank",
        sentence: "If she ___ harder, she will pass the exam.",
        answer: "studies",
        hint: "First Conditional: If + Present Simple, ... will + verbo",
        explanation:
          'Na First Conditional usamos o Present Simple na cláusula com "if". O verbo "study" com "she" recebe "-ies": "studies". A frase completa é "If she studies harder, she will pass the exam."',
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "If I ___ rich, I would travel the world.",
        answer: "were",
        hint: "Second Conditional: If + Past Simple, ... would + verbo",
        explanation:
          'Na Second Conditional (situação hipotética/irreal), usamos "were" para todos os sujeitos na cláusula com "if", inclusive com "I". Embora "was" seja aceito informalmente, "were" é a forma gramaticalmente correta: "If I were rich...".',
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "We will go to the park if it ___ raining.",
        answer: "stops",
        hint: "First Conditional: verbo no Present Simple com 'it'",
        explanation:
          'Na First Conditional, a cláusula com "if" usa o Present Simple. "It" é terceira pessoa do singular, então o verbo "stop" recebe "-s": "stops". A ordem da frase pode ser invertida sem mudar o significado.',
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "If they ___ a car, they would drive to work.",
        answer: "had",
        hint: "Second Conditional: If + Past Simple, ... would + verbo",
        explanation:
          'Na Second Conditional, usamos o Past Simple na cláusula com "if" para expressar uma situação hipotética. O passado de "have" é "had": "If they had a car, they would drive to work."',
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "If you don't hurry, you ___ miss the bus.",
        answer: "will",
        hint: "First Conditional: cláusula principal usa will + verbo",
        explanation:
          'Na First Conditional, a cláusula principal (resultado) usa "will" + verbo base. A frase completa é "If you don\'t hurry, you will miss the bus." Expressa uma consequência real e provável.',
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "She ___ buy a house if she won the lottery.",
        answer: "would",
        hint: "Second Conditional: cláusula principal usa would + verbo",
        explanation:
          'Na Second Conditional, a cláusula principal usa "would" + verbo base para expressar o resultado de uma situação hipotética. "She would buy a house if she won the lottery" — ganhar na loteria é improvável.',
      } as FillInQuestion,
    ],
  },

  // =======================================================================
  // 3. Ordene: Discurso Indireto (Reported Speech)
  // =======================================================================
  {
    slug: "b1-word-order-reported",
    title: "Ordene: Discurso Indireto",
    description:
      "Coloque as palavras na ordem correta para formar frases no discurso indireto (reported speech).",
    level: "B1",
    icon: "💬",
    type: "word-order",
    questions: [
      {
        type: "word-order",
        words: ["said", "she", "was", "that", "tired", "she"],
        correctOrder: ["she", "said", "that", "she", "was", "tired"],
        translation: "Ela disse que estava cansada.",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["told", "he", "to", "me", "wait"],
        correctOrder: ["he", "told", "me", "to", "wait"],
        translation: "Ele me disse para esperar.",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["asked", "they", "was", "where", "the", "station"],
        correctOrder: ["they", "asked", "where", "the", "station", "was"],
        translation: "Eles perguntaram onde era a estação.",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["explained", "the", "teacher", "that", "was", "the", "earth", "round"],
        correctOrder: ["the", "teacher", "explained", "that", "the", "earth", "was", "round"],
        translation: "O professor explicou que a Terra era redonda.",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["me", "she", "had", "that", "told", "finished", "she"],
        correctOrder: ["she", "told", "me", "that", "she", "had", "finished"],
        translation: "Ela me disse que tinha terminado.",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["said", "he", "the", "would", "he", "next", "come", "day"],
        correctOrder: ["he", "said", "he", "would", "come", "the", "next", "day"],
        translation: "Ele disse que viria no dia seguinte.",
      } as WordOrderQuestion,
    ],
  },

  // =======================================================================
  // 4. Quiz: Verbos Modais (Modal Verbs)
  // =======================================================================
  {
    slug: "b1-quiz-modal-verbs",
    title: "Quiz: Verbos Modais",
    description:
      "Teste seus conhecimentos sobre verbos modais como can, could, should, must, may e might.",
    level: "B1",
    icon: "🔑",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question:
          'Qual modal expressa uma obrigação forte?',
        options: [
          "might",
          "could",
          "must",
          "may",
        ],
        correctIndex: 2,
        explanation:
          '"Must" expressa obrigação forte ou necessidade. Por exemplo: "You must wear a seatbelt" (Você deve usar o cinto de segurança). "Might" e "may" expressam possibilidade, e "could" expressa capacidade ou possibilidade.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Complete: "You ___ see a doctor. You look really sick."',
        options: [
          "might",
          "should",
          "can",
          "would",
        ],
        correctIndex: 1,
        explanation:
          '"Should" é usado para dar conselhos ou recomendações. "You should see a doctor" significa "Você deveria ir ao médico". É mais suave que "must" mas indica que é a coisa certa a fazer.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Qual é a diferença entre "can" e "could" nesta frase: "I ___ swim when I was five"?',
        options: [
          'Ambos estão corretos, mas "could" indica habilidade no passado.',
          '"Can" é mais formal que "could".',
          '"Could" é usado apenas em perguntas.',
          "Não há diferença entre os dois.",
        ],
        correctIndex: 0,
        explanation:
          '"Could" é o passado de "can" e indica habilidade no passado. "I could swim when I was five" significa "Eu sabia nadar quando tinha cinco anos". "Can" é usado para habilidades no presente.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          '"It ___ rain later. Take an umbrella just in case."',
        options: [
          "must",
          "should",
          "might",
          "will",
        ],
        correctIndex: 2,
        explanation:
          '"Might" expressa possibilidade incerta. "It might rain" significa "Pode ser que chova" — não temos certeza. "Must" seria certeza, "should" seria expectativa, e "will" seria certeza sobre o futuro.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Qual frase está correta?',
        options: [
          "She can to play the piano.",
          "He musts go now.",
          "They should to study more.",
          "We must leave before 8 o'clock.",
        ],
        correctIndex: 3,
        explanation:
          'Verbos modais são seguidos pelo verbo na forma base, sem "to". Também não recebem "-s" na terceira pessoa. "We must leave" está correto. As outras opções adicionam "to" ou "-s" incorretamente.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          '"You ___ not park here. It\'s a fire lane."',
        options: [
          "should",
          "might",
          "may",
          "must",
        ],
        correctIndex: 3,
        explanation:
          '"Must not" (mustn\'t) expressa proibição. "You must not park here" significa que é proibido estacionar. "Should not" seria apenas um conselho, "might not" e "may not" indicam falta de possibilidade ou permissão.',
      } as QuizQuestion,
    ],
  },

  // =======================================================================
  // 5. Complete: Voz Passiva (Passive Voice)
  // =======================================================================
  {
    slug: "b1-fill-passive-voice",
    title: "Complete: Voz Passiva",
    description:
      "Pratique a voz passiva em diferentes tempos verbais completando as frases.",
    level: "B1",
    icon: "🔄",
    type: "fill-in-the-blank",
    questions: [
      {
        type: "fill-in-the-blank",
        sentence: "The cake ___ made by my grandmother.",
        answer: "was",
        hint: "Voz passiva no Past Simple: was/were + particípio passado",
        explanation:
          'A voz passiva no Past Simple é formada por "was/were" + particípio passado. "The cake" é singular, então usamos "was". A frase completa: "The cake was made by my grandmother" (O bolo foi feito pela minha avó).',
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "English ___ spoken in many countries.",
        answer: "is",
        hint: "Voz passiva no Present Simple: is/are + particípio passado",
        explanation:
          'A voz passiva no Present Simple é formada por "is/are" + particípio passado. "English" é singular, então usamos "is". "English is spoken in many countries" (Inglês é falado em muitos países).',
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "The new hospital will ___ built next year.",
        answer: "be",
        hint: "Voz passiva no futuro: will be + particípio passado",
        explanation:
          'A voz passiva no futuro é formada por "will be" + particípio passado. Após "will" sempre usamos a forma base "be". "The new hospital will be built next year" (O novo hospital será construído no próximo ano).',
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "The windows have ___ cleaned this morning.",
        answer: "been",
        hint: "Voz passiva no Present Perfect: have/has been + particípio passado",
        explanation:
          'A voz passiva no Present Perfect usa "have/has been" + particípio passado. "The windows have been cleaned this morning" (As janelas foram limpas esta manhã). "Been" é o particípio de "be".',
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "These photos were ___ by a professional photographer.",
        answer: "taken",
        hint: "Particípio passado do verbo 'take'",
        explanation:
          'O verbo "take" é irregular: take → took → taken. Na voz passiva, precisamos do particípio passado "taken". "These photos were taken by a professional photographer" (Estas fotos foram tiradas por um fotógrafo profissional).',
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "The letter is being ___ right now.",
        answer: "written",
        hint: "Voz passiva no Present Continuous: is/are being + particípio passado do verbo 'write'",
        explanation:
          'A voz passiva no Present Continuous usa "is/are being" + particípio passado. O particípio de "write" é "written" (write → wrote → written). "The letter is being written right now" (A carta está sendo escrita agora).',
      } as FillInQuestion,
    ],
  },

  // =======================================================================
  // 6. Quiz: Orações Relativas (Relative Clauses)
  // =======================================================================
  {
    slug: "b1-quiz-relative-clauses",
    title: "Quiz: Orações Relativas",
    description:
      "Pratique o uso de pronomes relativos (who, which, that, where, whose) em orações relativas.",
    level: "B1",
    icon: "🔗",
    type: "quiz",
    questions: [
      {
        type: "quiz",
        question:
          'Complete: "The woman ___ lives next door is a doctor."',
        options: [
          "which",
          "whose",
          "who",
          "where",
        ],
        correctIndex: 2,
        explanation:
          'Usamos "who" para se referir a pessoas. "The woman who lives next door" (A mulher que mora ao lado). "Which" é para coisas, "whose" indica posse e "where" indica lugar.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Complete: "The book ___ I read last week was amazing."',
        options: [
          "who",
          "where",
          "whose",
          "that",
        ],
        correctIndex: 3,
        explanation:
          'Usamos "that" ou "which" para se referir a coisas. "The book that I read" (O livro que eu li). Neste caso, "that" é o pronome relativo mais comum e natural. "Who" seria para pessoas.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Complete: "That is the restaurant ___ we had dinner."',
        options: [
          "who",
          "which",
          "whose",
          "where",
        ],
        correctIndex: 3,
        explanation:
          'Usamos "where" para se referir a lugares. "The restaurant where we had dinner" (O restaurante onde jantamos). "Where" substitui expressões como "in which" ou "at which".',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Complete: "The man ___ car was stolen called the police."',
        options: [
          "whose",
          "who",
          "which",
          "that",
        ],
        correctIndex: 0,
        explanation:
          'Usamos "whose" para indicar posse. "The man whose car was stolen" (O homem cujo carro foi roubado). "Whose" é o pronome relativo possessivo, equivalente a "cujo/cuja" em português.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Qual frase contém uma oração relativa restritiva (defining relative clause)?',
        options: [
          "My sister, who lives in London, is visiting us.",
          "The students who passed the exam will receive certificates.",
          "Paris, which is the capital of France, is beautiful.",
          "My teacher, who is very kind, helped me a lot.",
        ],
        correctIndex: 1,
        explanation:
          'Orações relativas restritivas (defining) não usam vírgulas e são essenciais para identificar o substantivo. "The students who passed the exam" especifica quais alunos. As outras opções são orações explicativas (non-defining), com vírgulas, que adicionam informação extra.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Em qual frase podemos omitir o pronome relativo?',
        options: [
          "The girl who is singing is my cousin.",
          "The movie that we watched was boring.",
          "The city where I was born is small.",
          "The teacher who teaches math is strict.",
        ],
        correctIndex: 1,
        explanation:
          'Podemos omitir o pronome relativo quando ele é o objeto da oração relativa. Em "The movie that we watched", "that" é objeto (nós assistimos ao filme), então podemos dizer "The movie we watched". Nas outras frases, o pronome é sujeito e não pode ser omitido.',
      } as QuizQuestion,
    ],
  },

  // =======================================================================
  // 7. Ordene: Frases Complexas (Complex Sentences)
  // =======================================================================
  {
    slug: "b1-word-order-complex",
    title: "Ordene: Frases Complexas",
    description:
      "Coloque as palavras na ordem correta para formar frases complexas com conjunções e cláusulas subordinadas.",
    level: "B1",
    icon: "🧩",
    type: "word-order",
    questions: [
      {
        type: "word-order",
        words: ["although", "was", "he", "tired", "kept", "he", "working"],
        correctOrder: ["although", "he", "was", "tired", "he", "kept", "working"],
        translation: "Embora ele estivesse cansado, ele continuou trabalhando.",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["have", "since", "known", "I", "her", "we", "children", "were"],
        correctOrder: ["I", "have", "known", "her", "since", "we", "were", "children"],
        translation: "Eu a conheço desde que éramos crianças.",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["not", "she", "only", "French", "speaks", "but", "also", "German"],
        correctOrder: ["she", "not", "only", "speaks", "French", "but", "also", "German"],
        translation: "Ela não só fala francês, mas também alemão.",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["the", "by", "time", "arrived", "we", "had", "the", "movie", "started"],
        correctOrder: ["by", "the", "time", "we", "arrived", "the", "movie", "had", "started"],
        translation: "Quando chegamos, o filme já tinha começado.",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["unless", "study", "you", "will", "you", "fail", "the", "test"],
        correctOrder: ["unless", "you", "study", "you", "will", "fail", "the", "test"],
        translation: "A menos que você estude, você vai reprovar na prova.",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["while", "was", "I", "cooking", "the", "rang", "phone"],
        correctOrder: ["while", "I", "was", "cooking", "the", "phone", "rang"],
        translation: "Enquanto eu estava cozinhando, o telefone tocou.",
      } as WordOrderQuestion,
    ],
  },

  // =======================================================================
  // 8. Revisão B1 (Mixed Review)
  // =======================================================================
  {
    slug: "b1-mixed-review",
    title: "Revisão B1",
    description:
      "Revise os principais tópicos do nível B1 com uma mistura de exercícios de múltipla escolha, completar frases e ordenar palavras.",
    level: "B1",
    icon: "📝",
    type: "mixed",
    questions: [
      {
        type: "quiz",
        question:
          'Qual é a forma correta? "If I ___ you, I would apologize."',
        options: [
          "am",
          "was",
          "were",
          "be",
        ],
        correctIndex: 2,
        explanation:
          'Na Second Conditional, usamos "were" para todos os sujeitos após "if", incluindo "I" e "he/she/it". "If I were you" é uma expressão fixa muito comum que significa "Se eu fosse você". Embora "was" seja aceito informalmente, "were" é o padrão.',
      } as QuizQuestion,
      {
        type: "quiz",
        question:
          'Escolha a opção correta: "She has lived here ___ ten years."',
        options: [
          "since",
          "for",
          "ago",
          "during",
        ],
        correctIndex: 1,
        explanation:
          'Usamos "for" com períodos de duração (ten years, two months, a long time) e "since" com pontos específicos no tempo (2015, Monday, I was a child). "Ten years" é um período, então usamos "for".',
      } as QuizQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "The report must ___ finished by Friday.",
        answer: "be",
        hint: "Voz passiva com modal: must + be + particípio passado",
        explanation:
          'A voz passiva com verbos modais usa "modal + be + particípio passado". Após "must" usamos a forma base "be". "The report must be finished by Friday" (O relatório deve ser terminado até sexta-feira).',
      } as FillInQuestion,
      {
        type: "fill-in-the-blank",
        sentence: "He asked me where I ___.",
        answer: "lived",
        hint: "Reported speech: o verbo volta um tempo verbal",
        explanation:
          'No discurso indireto (reported speech), quando o verbo principal está no passado ("asked"), o verbo da frase relatada volta um tempo verbal. "Where do you live?" vira "where I lived". Present Simple vira Past Simple.',
      } as FillInQuestion,
      {
        type: "word-order",
        words: ["been", "have", "to", "Japan", "I", "never"],
        correctOrder: ["I", "have", "never", "been", "to", "Japan"],
        translation: "Eu nunca estive no Japão.",
      } as WordOrderQuestion,
      {
        type: "word-order",
        words: ["could", "when", "she", "young", "was", "she", "fast", "very", "run"],
        correctOrder: ["when", "she", "was", "young", "she", "could", "run", "very", "fast"],
        translation: "Quando ela era jovem, ela conseguia correr muito rápido.",
      } as WordOrderQuestion,
    ],
  },
];
