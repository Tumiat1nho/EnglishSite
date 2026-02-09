export interface Lesson {
  slug: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  content: {
    introduction: string;
    dialogue: { speaker: string; english: string; portuguese: string }[];
    vocabulary: {
      english: string;
      portuguese: string;
      phonetic: string;
      example: string;
    }[];
    grammarTip: { title: string; explanation: string };
    miniExercise: {
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    };
  };
}

export const lessons: Lesson[] = [
  // ──────────────────────────────────────────────
  // LESSON 1 — Greetings & Introductions (A1)
  // ──────────────────────────────────────────────
  {
    slug: "greetings",
    title: "Cumprimentos e Saudações",
    description:
      "Aprenda a se apresentar, cumprimentar pessoas e usar expressões básicas do dia a dia em inglês.",
    level: "A1",
    icon: "👋",
    content: {
      introduction:
        "Saber cumprimentar alguém é o primeiro passo para se comunicar em inglês. Nesta lição você vai aprender as formas mais comuns de dizer \"olá\", perguntar o nome de alguém, dizer de onde você é e se despedir. Essas expressões são usadas todos os dias em qualquer país de língua inglesa — domine-as e você já conseguirá iniciar uma conversa com confiança!",

      dialogue: [
        {
          speaker: "Anna",
          english: "Hi there! My name is Anna. What's your name?",
          portuguese: "Oi! Meu nome é Anna. Qual é o seu nome?",
        },
        {
          speaker: "Lucas",
          english: "Hello, Anna! I'm Lucas. Nice to meet you!",
          portuguese: "Olá, Anna! Eu sou o Lucas. Prazer em conhecê-la!",
        },
        {
          speaker: "Anna",
          english: "Nice to meet you too! Where are you from?",
          portuguese: "Prazer em conhecê-lo também! De onde você é?",
        },
        {
          speaker: "Lucas",
          english: "I'm from Brazil. I'm from São Paulo. And you?",
          portuguese: "Eu sou do Brasil. Sou de São Paulo. E você?",
        },
        {
          speaker: "Anna",
          english: "I'm from Canada. How are you doing today?",
          portuguese: "Eu sou do Canadá. Como você está hoje?",
        },
        {
          speaker: "Lucas",
          english: "I'm doing great, thank you! See you later, Anna!",
          portuguese: "Estou muito bem, obrigado! Até mais, Anna!",
        },
      ],

      vocabulary: [
        {
          english: "Hello / Hi",
          portuguese: "Olá / Oi",
          phonetic: "/hɛˈloʊ/ /haɪ/",
          example: "Hello! How are you today?",
        },
        {
          english: "Nice to meet you",
          portuguese: "Prazer em conhecê-lo(a)",
          phonetic: "/naɪs tə miːt juː/",
          example: "I'm Sarah. Nice to meet you!",
        },
        {
          english: "Where are you from?",
          portuguese: "De onde você é?",
          phonetic: "/wɛr ɑːr juː frɒm/",
          example: "Where are you from? — I'm from Rio de Janeiro.",
        },
        {
          english: "How are you?",
          portuguese: "Como você está?",
          phonetic: "/haʊ ɑːr juː/",
          example: "Hey, Mark! How are you?",
        },
        {
          english: "See you later",
          portuguese: "Até mais / Até logo",
          phonetic: "/siː juː ˈleɪtər/",
          example: "I have to go now. See you later!",
        },
      ],

      grammarTip: {
        title: "Verbo TO BE — Apresentações",
        explanation:
          "Em inglês, usamos o verbo \"to be\" (ser/estar) para nos apresentarmos. As formas contraídas são as mais usadas na fala do dia a dia:\n\n• I am → I'm (\"Eu sou/estou\")\n• You are → You're (\"Você é/está\")\n• He is → He's / She is → She's (\"Ele é / Ela é\")\n\nExemplos:\n— I'm Lucas. (Eu sou o Lucas.)\n— She's from Brazil. (Ela é do Brasil.)\n— We're friends. (Nós somos amigos.)\n\nDica: na fala informal, quase sempre usamos a forma contraída. Dizer \"I am\" soa muito formal no dia a dia.",
      },

      miniExercise: {
        question: "Qual é a forma correta de se apresentar em inglês?",
        options: [
          "I is Lucas.",
          "I'm Lucas.",
          "I are Lucas.",
          "Me Lucas.",
        ],
        correctIndex: 1,
        explanation:
          "A forma correta é \"I'm Lucas\" (I am Lucas). Usamos \"I'm\" (contração de I am) + nosso nome para nos apresentar. \"I is\" e \"I are\" são conjugações incorretas — \"am\" é a forma do verbo \"to be\" usada com \"I\".",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 2 — At the Restaurant (A2)
  // ──────────────────────────────────────────────
  {
    slug: "at-the-restaurant",
    title: "No Restaurante",
    description:
      "Aprenda a fazer pedidos em restaurantes, perguntar sobre o cardápio e pedir a conta em inglês.",
    level: "A2",
    icon: "🍽️",
    content: {
      introduction:
        "Ir a um restaurante em um país de língua inglesa pode parecer intimidador no começo, mas com as frases certas você vai se sentir muito mais seguro. Nesta lição, você vai aprender como pedir uma mesa, fazer perguntas sobre o cardápio, pedir comida e bebida, e solicitar a conta. Essas expressões são essenciais para qualquer viagem internacional!",

      dialogue: [
        {
          speaker: "Waiter",
          english: "Good evening! Welcome to The Garden. A table for two?",
          portuguese:
            "Boa noite! Bem-vindos ao The Garden. Uma mesa para dois?",
        },
        {
          speaker: "Maria",
          english: "Yes, please. Could we sit by the window?",
          portuguese:
            "Sim, por favor. Poderíamos sentar perto da janela?",
        },
        {
          speaker: "Waiter",
          english:
            "Of course! Here's the menu. Can I get you something to drink?",
          portuguese:
            "Claro! Aqui está o cardápio. Posso trazer algo para beber?",
        },
        {
          speaker: "Maria",
          english:
            "I'd like a glass of orange juice, please. What do you recommend for the main course?",
          portuguese:
            "Eu gostaria de um copo de suco de laranja, por favor. O que você recomenda de prato principal?",
        },
        {
          speaker: "Waiter",
          english:
            "The grilled salmon is very popular. It comes with rice and vegetables.",
          portuguese:
            "O salmão grelhado é muito popular. Vem com arroz e legumes.",
        },
        {
          speaker: "Maria",
          english:
            "That sounds delicious! I'll have that. And could we get the check when we're done?",
          portuguese:
            "Isso parece delicioso! Eu vou querer isso. E poderia nos trazer a conta quando terminarmos?",
        },
      ],

      vocabulary: [
        {
          english: "Menu",
          portuguese: "Cardápio",
          phonetic: "/ˈmɛnjuː/",
          example: "Could I see the menu, please?",
        },
        {
          english: "I'd like…",
          portuguese: "Eu gostaria de…",
          phonetic: "/aɪd laɪk/",
          example: "I'd like a cup of coffee, please.",
        },
        {
          english: "The check / The bill",
          portuguese: "A conta",
          phonetic: "/ðə tʃɛk/ /ðə bɪl/",
          example: "Could we get the check, please?",
        },
        {
          english: "Main course",
          portuguese: "Prato principal",
          phonetic: "/meɪn kɔːrs/",
          example: "For the main course, I'll have the steak.",
        },
        {
          english: "Recommend",
          portuguese: "Recomendar",
          phonetic: "/ˌrɛkəˈmɛnd/",
          example: "What do you recommend from the menu?",
        },
      ],

      grammarTip: {
        title: "COULD e I'D LIKE — Pedidos Educados",
        explanation:
          "Em inglês, para fazer pedidos de forma educada (em restaurantes, lojas, etc.), usamos duas estruturas muito importantes:\n\n1) \"Could I / Could we…?\" — equivale a \"Poderia eu / Poderíamos…?\"\n   • Could I have a glass of water? (Poderia me trazer um copo d'água?)\n   • Could we sit outside? (Poderíamos sentar do lado de fora?)\n\n2) \"I'd like…\" (contração de \"I would like\") — equivale a \"Eu gostaria de…\"\n   • I'd like the pasta, please. (Eu gostaria da massa, por favor.)\n   • I'd like to order now. (Eu gostaria de pedir agora.)\n\nEvite usar \"I want\" em restaurantes — embora esteja gramaticalmente correto, soa direto demais e pode parecer rude. Prefira sempre \"I'd like\" ou \"Could I have\".",
      },

      miniExercise: {
        question:
          "Qual é a maneira mais educada de pedir um café em um restaurante?",
        options: [
          "Give me a coffee.",
          "I want coffee now.",
          "I'd like a coffee, please.",
          "Coffee for me.",
        ],
        correctIndex: 2,
        explanation:
          "\"I'd like a coffee, please\" é a forma mais educada e natural de fazer um pedido em inglês. \"I'd like\" (eu gostaria) é formal e cortês, e \"please\" (por favor) torna o pedido ainda mais polido. As outras opções soam rudes ou informais demais para um restaurante.",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 3 — Asking for Directions (B1)
  // ──────────────────────────────────────────────
  {
    slug: "asking-for-directions",
    title: "Pedindo Direções",
    description:
      "Aprenda a perguntar e dar direções em inglês, usando vocabulário de localização e orientação.",
    level: "B1",
    icon: "🗺️",
    content: {
      introduction:
        "Está perdido em uma cidade nova? Saber pedir e entender direções em inglês é uma habilidade fundamental para qualquer viajante. Nesta lição, você vai aprender as expressões mais usadas para perguntar como chegar a algum lugar, entender instruções como \"vire à esquerda\" e \"siga em frente\", e usar referências como quarteirões e pontos de referência. Vamos praticar com um diálogo realista que você pode usar na sua próxima viagem!",

      dialogue: [
        {
          speaker: "Tourist",
          english:
            "Excuse me, could you tell me how to get to the nearest subway station?",
          portuguese:
            "Com licença, você poderia me dizer como chegar à estação de metrô mais próxima?",
        },
        {
          speaker: "Local",
          english:
            "Sure! Go straight ahead for two blocks, then turn left on Oak Street.",
          portuguese:
            "Claro! Siga em frente por dois quarteirões, depois vire à esquerda na Rua Oak.",
        },
        {
          speaker: "Tourist",
          english:
            "Okay, straight for two blocks and then left. Is it far from here?",
          portuguese:
            "Certo, em frente por dois quarteirões e depois à esquerda. É longe daqui?",
        },
        {
          speaker: "Local",
          english:
            "Not at all. It's about a five-minute walk. You'll see a big park on your right — the station is right across from it.",
          portuguese:
            "De jeito nenhum. São uns cinco minutos a pé. Você vai ver um parque grande à sua direita — a estação fica bem em frente a ele.",
        },
        {
          speaker: "Tourist",
          english:
            "Great! And is there a pharmacy nearby? I also need to find one.",
          portuguese:
            "Ótimo! E tem uma farmácia por perto? Eu também preciso encontrar uma.",
        },
        {
          speaker: "Local",
          english:
            "Yes, there's one on the corner of Oak and Maple, right next to the subway entrance. You can't miss it.",
          portuguese:
            "Sim, tem uma na esquina da Oak com a Maple, bem ao lado da entrada do metrô. Você não tem como errar.",
        },
      ],

      vocabulary: [
        {
          english: "Go straight ahead",
          portuguese: "Siga em frente",
          phonetic: "/ɡoʊ streɪt əˈhɛd/",
          example: "Go straight ahead for three blocks.",
        },
        {
          english: "Turn left / Turn right",
          portuguese: "Vire à esquerda / Vire à direita",
          phonetic: "/tɜːrn lɛft/ /tɜːrn raɪt/",
          example: "Turn right at the traffic light.",
        },
        {
          english: "Block",
          portuguese: "Quarteirão",
          phonetic: "/blɒk/",
          example: "The hotel is three blocks from here.",
        },
        {
          english: "Across from",
          portuguese: "Em frente a / Do outro lado de",
          phonetic: "/əˈkrɒs frɒm/",
          example: "The bank is across from the supermarket.",
        },
        {
          english: "On the corner of",
          portuguese: "Na esquina de",
          phonetic: "/ɒn ðə ˈkɔːrnər ɒv/",
          example: "The café is on the corner of Main and Park Street.",
        },
      ],

      grammarTip: {
        title: "Preposições de Lugar — IN, ON, AT, NEXT TO, ACROSS FROM",
        explanation:
          "Preposições de lugar são essenciais para dar e entender direções. Veja as mais importantes:\n\n• ON — usamos para ruas: \"The pharmacy is on Oak Street.\" (A farmácia fica na Rua Oak.)\n• AT — usamos para endereços específicos e esquinas: \"I'm at 45 Main Street.\" / \"Turn at the corner.\"\n• NEXT TO — significa \"ao lado de\": \"The bank is next to the post office.\" (O banco fica ao lado dos correios.)\n• ACROSS FROM — significa \"em frente a\" / \"do outro lado\": \"The park is across from the school.\" (O parque fica em frente à escola.)\n• BETWEEN — significa \"entre\": \"The store is between the bakery and the bank.\" (A loja fica entre a padaria e o banco.)\n\nDica: brasileiros frequentemente confundem \"in front of\" (na frente de, mesma calçada) com \"across from\" (do outro lado da rua). Preste atenção ao contexto!",
      },

      miniExercise: {
        question:
          "Alguém pergunta: \"Is there a bank nearby?\" — Qual é a melhor resposta usando direções?",
        options: [
          "Yes, the bank is very beautiful.",
          "Yes, go straight for one block and turn right. It's next to the pharmacy.",
          "Yes, I like the bank too.",
          "Yes, the bank opens at nine o'clock.",
        ],
        correctIndex: 1,
        explanation:
          "A resposta correta dá direções claras: \"Go straight for one block and turn right. It's next to the pharmacy.\" Quando alguém pergunta se há algo por perto (nearby), espera-se que você diga COMO chegar lá, usando expressões de direção como \"go straight\", \"turn right/left\" e referências de localização como \"next to\".",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 4 — Job Interview (B2)
  // ──────────────────────────────────────────────
  {
    slug: "job-interview",
    title: "Entrevista de Emprego",
    description:
      "Prepare-se para entrevistas de emprego em inglês com vocabulário profissional, expressões formais e dicas práticas.",
    level: "B2",
    icon: "💼",
    content: {
      introduction:
        "Uma entrevista de emprego em inglês exige mais do que apenas vocabulário — exige confiança, clareza e as expressões certas para causar uma boa impressão. Nesta lição de nível intermediário-avançado, você vai aprender como falar sobre sua experiência profissional, responder a perguntas comuns de entrevistas, destacar suas habilidades e qualidades, e encerrar a entrevista de forma profissional. Dominar esse vocabulário pode abrir portas para oportunidades internacionais!",

      dialogue: [
        {
          speaker: "Interviewer",
          english:
            "Thank you for coming in today. Could you start by telling me a little about yourself?",
          portuguese:
            "Obrigado por vir hoje. Você poderia começar me contando um pouco sobre você?",
        },
        {
          speaker: "Candidate",
          english:
            "Of course. I have over five years of experience in digital marketing. I currently work as a marketing analyst at a tech startup, where I manage social media campaigns and analyze performance data.",
          portuguese:
            "Claro. Eu tenho mais de cinco anos de experiência em marketing digital. Atualmente trabalho como analista de marketing em uma startup de tecnologia, onde gerencio campanhas de mídia social e analiso dados de desempenho.",
        },
        {
          speaker: "Interviewer",
          english:
            "That's impressive. What would you say is your greatest strength?",
          portuguese:
            "Isso é impressionante. Qual você diria que é o seu maior ponto forte?",
        },
        {
          speaker: "Candidate",
          english:
            "I'd say my greatest strength is my ability to adapt quickly to new challenges. In my current role, I had to learn a completely new analytics platform in just two weeks, and I ended up training the rest of the team on it.",
          portuguese:
            "Eu diria que meu maior ponto forte é minha capacidade de me adaptar rapidamente a novos desafios. No meu cargo atual, tive que aprender uma plataforma de análise completamente nova em apenas duas semanas, e acabei treinando o restante da equipe nela.",
        },
        {
          speaker: "Interviewer",
          english:
            "Great example. And where do you see yourself in five years?",
          portuguese:
            "Ótimo exemplo. E onde você se vê em cinco anos?",
        },
        {
          speaker: "Candidate",
          english:
            "In five years, I'd like to be leading a marketing team and contributing to the company's long-term growth strategy. I'm really looking for a position where I can grow professionally and take on more responsibility over time.",
          portuguese:
            "Em cinco anos, eu gostaria de estar liderando uma equipe de marketing e contribuindo para a estratégia de crescimento de longo prazo da empresa. Estou realmente procurando uma posição onde eu possa crescer profissionalmente e assumir mais responsabilidades ao longo do tempo.",
        },
      ],

      vocabulary: [
        {
          english: "Experience",
          portuguese: "Experiência",
          phonetic: "/ɪkˈspɪəriəns/",
          example:
            "I have three years of experience in software development.",
        },
        {
          english: "Strength / Weakness",
          portuguese: "Ponto forte / Ponto fraco",
          phonetic: "/strɛŋkθ/ /ˈwiːknəs/",
          example:
            "My greatest strength is problem-solving.",
        },
        {
          english: "To be responsible for",
          portuguese: "Ser responsável por",
          phonetic: "/tə biː rɪˈspɒnsəbl fɔːr/",
          example:
            "I'm responsible for managing a team of ten people.",
        },
        {
          english: "Long-term / Short-term",
          portuguese: "Longo prazo / Curto prazo",
          phonetic: "/lɒŋ tɜːrm/ /ʃɔːrt tɜːrm/",
          example:
            "Our long-term goal is to expand to international markets.",
        },
        {
          english: "To take on (responsibility)",
          portuguese: "Assumir (responsabilidade)",
          phonetic: "/tə teɪk ɒn/",
          example:
            "I'm ready to take on new challenges in this role.",
        },
      ],

      grammarTip: {
        title: "PRESENT PERFECT vs. PAST SIMPLE — Falando de Experiência Profissional",
        explanation:
          "Em entrevistas de emprego, é fundamental saber quando usar o Present Perfect e quando usar o Past Simple:\n\n1) PRESENT PERFECT (have/has + particípio) — use para falar de experiências e resultados que ainda são relevantes AGORA, sem especificar quando aconteceram:\n   • \"I have managed teams of up to 20 people.\" (Eu já gerenciei equipes de até 20 pessoas.)\n   • \"I have worked in marketing for five years.\" (Eu trabalho com marketing há cinco anos.)\n\n2) PAST SIMPLE — use quando você menciona um momento específico no passado ou fala de um emprego anterior que já terminou:\n   • \"I worked at Google from 2019 to 2022.\" (Eu trabalhei no Google de 2019 a 2022.)\n   • \"Last year, I led a project that increased sales by 30%.\" (Ano passado, eu liderei um projeto que aumentou as vendas em 30%.)\n\nRegra prática: se a frase tem uma data ou período específico (in 2020, last year, from… to…), use Past Simple. Se você está falando da sua experiência geral até agora, use Present Perfect.",
      },

      miniExercise: {
        question:
          "O entrevistador pergunta: \"How long have you worked in this field?\" — Qual é a melhor resposta?",
        options: [
          "I work here since three years.",
          "I have worked in this field for over three years.",
          "I am working three years already.",
          "I worked for three years ago.",
        ],
        correctIndex: 1,
        explanation:
          "A resposta correta é \"I have worked in this field for over three years.\" Usamos o Present Perfect (have worked) porque a experiência começou no passado e continua até o presente. A preposição \"for\" indica a duração (\"por/há\"). Erros comuns de brasileiros: usar \"since\" com duração (since three years) ou usar Past Simple para algo que ainda é atual.",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 5 — Numbers & Time (A1)
  // ──────────────────────────────────────────────
  {
    slug: "numbers-and-time",
    title: "Números e Horas",
    description:
      "Aprenda a dizer números, horários e perguntar as horas em inglês.",
    level: "A1",
    icon: "⏰",
    content: {
      introduction:
        "Saber dizer números e horários é essencial para o dia a dia. Nesta lição, você vai aprender a perguntar as horas, dizer horários comuns e usar números em situações simples como telefone e agenda.",
      dialogue: [
        {
          speaker: "Julia",
          english: "Excuse me, what time is it?",
          portuguese: "Com licença, que horas são?",
        },
        {
          speaker: "Mark",
          english: "It's three fifteen.",
          portuguese: "São três e quinze.",
        },
        {
          speaker: "Julia",
          english: "Thanks! My class starts at three thirty.",
          portuguese: "Obrigada! Minha aula começa às três e meia.",
        },
        {
          speaker: "Mark",
          english: "No problem. See you at four!",
          portuguese: "Sem problema. Até às quatro!",
        },
      ],
      vocabulary: [
        {
          english: "What time is it?",
          portuguese: "Que horas são?",
          phonetic: "/wɒt taɪm ɪz ɪt/",
          example: "What time is it? — It's two o'clock.",
        },
        {
          english: "Half past",
          portuguese: "Meia (hora)",
          phonetic: "/hɑːf pæst/",
          example: "It's half past six.",
        },
        {
          english: "Quarter past",
          portuguese: "Quinze (minutos)",
          phonetic: "/ˈkwɔːrtər pæst/",
          example: "It's quarter past nine.",
        },
        {
          english: "O'clock",
          portuguese: "Em ponto",
          phonetic: "/əˈklɒk/",
          example: "It's eight o'clock.",
        },
        {
          english: "Schedule",
          portuguese: "Agenda / Horário",
          phonetic: "/ˈskedʒuːl/",
          example: "My schedule is busy today.",
        },
      ],
      grammarTip: {
        title: "Como dizer horas em inglês",
        explanation:
          "Para dizer as horas em inglês, usamos \"It's\" + a hora: \"It's five\" (são cinco). Para horas em ponto, usamos \"o'clock\": \"It's seven o'clock\". Para minutos, podemos dizer \"It's three fifteen\" (3:15) ou usar expressões como \"quarter past\" (15 minutos) e \"half past\" (30 minutos).",
      },
      miniExercise: {
        question: "Como dizer 7:30 em inglês?",
        options: [
          "It's seven and thirty.",
          "It's half past seven.",
          "It's seven quarter.",
          "It's seven past.",
        ],
        correctIndex: 1,
        explanation:
          "A forma correta e mais natural é \"It's half past seven\". Também é comum dizer \"It's seven thirty\", mas \"half past\" é a expressão clássica para 7:30.",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 6 — Daily Routine (A1)
  // ──────────────────────────────────────────────
  {
    slug: "daily-routine-a1",
    title: "Rotina Diária",
    description:
      "Aprenda verbos básicos para falar da sua rotina diária em inglês.",
    level: "A1",
    icon: "📅",
    content: {
      introduction:
        "Falar sobre sua rotina é uma conversa muito comum. Nesta lição, você vai aprender verbos simples como acordar, trabalhar, estudar e dormir, além de expressões básicas de frequência.",
      dialogue: [
        {
          speaker: "Ana",
          english: "What time do you wake up?",
          portuguese: "Que horas você acorda?",
        },
        {
          speaker: "Bruno",
          english: "I wake up at six and go to work at seven.",
          portuguese: "Eu acordo às seis e vou trabalhar às sete.",
        },
        {
          speaker: "Ana",
          english: "Do you have lunch at home?",
          portuguese: "Você almoça em casa?",
        },
        {
          speaker: "Bruno",
          english: "Yes, I have lunch at noon.",
          portuguese: "Sim, eu almoço ao meio-dia.",
        },
      ],
      vocabulary: [
        {
          english: "Wake up",
          portuguese: "Acordar",
          phonetic: "/weɪk ʌp/",
          example: "I wake up early.",
        },
        {
          english: "Go to work",
          portuguese: "Ir para o trabalho",
          phonetic: "/ɡoʊ tə wɜːrk/",
          example: "I go to work by bus.",
        },
        {
          english: "Have lunch",
          portuguese: "Almoçar",
          phonetic: "/hæv lʌntʃ/",
          example: "We have lunch at noon.",
        },
        {
          english: "Study",
          portuguese: "Estudar",
          phonetic: "/ˈstʌdi/",
          example: "I study English every day.",
        },
        {
          english: "Go to bed",
          portuguese: "Ir dormir",
          phonetic: "/ɡoʊ tə bɛd/",
          example: "I go to bed at ten.",
        },
      ],
      grammarTip: {
        title: "Presente simples para hábitos",
        explanation:
          "Usamos o presente simples para falar de hábitos: \"I wake up at six\" (Eu acordo às seis). Com he/she/it, adicionamos -s: \"She wakes up early\". Para perguntas, usamos \"Do\" ou \"Does\": \"Do you study?\" / \"Does he work?\".",
      },
      miniExercise: {
        question: "Complete: \"She ___ to work at 8.\"",
        options: ["go", "goes", "going", "went"],
        correctIndex: 1,
        explanation:
          "Com \"she\", o verbo recebe -es: \"She goes to work at 8.\" No presente simples, usamos -s/-es na terceira pessoa.",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 7 — Weather (A1)
  // ──────────────────────────────────────────────
  {
    slug: "weather-a1",
    title: "Clima e Tempo",
    description:
      "Aprenda a falar sobre o clima e o tempo em inglês com frases simples.",
    level: "A1",
    icon: "☀️",
    content: {
      introduction:
        "O clima é assunto comum em qualquer conversa. Nesta lição, você vai aprender palavras básicas para falar sobre sol, chuva, frio e calor.",
      dialogue: [
        {
          speaker: "Sara",
          english: "How's the weather today?",
          portuguese: "Como está o tempo hoje?",
        },
        {
          speaker: "Paul",
          english: "It's sunny and warm.",
          portuguese: "Está ensolarado e quente.",
        },
        {
          speaker: "Sara",
          english: "Great! Let's go to the park.",
          portuguese: "Ótimo! Vamos ao parque.",
        },
      ],
      vocabulary: [
        {
          english: "Sunny",
          portuguese: "Ensolarado",
          phonetic: "/ˈsʌni/",
          example: "It's sunny today.",
        },
        {
          english: "Rainy",
          portuguese: "Chuvoso",
          phonetic: "/ˈreɪni/",
          example: "It's rainy this morning.",
        },
        {
          english: "Cold",
          portuguese: "Frio",
          phonetic: "/koʊld/",
          example: "It's cold at night.",
        },
        {
          english: "Hot",
          portuguese: "Quente",
          phonetic: "/hɒt/",
          example: "It's hot in the afternoon.",
        },
        {
          english: "Cloudy",
          portuguese: "Nublado",
          phonetic: "/ˈklaʊdi/",
          example: "It's cloudy today.",
        },
      ],
      grammarTip: {
        title: "Usando \"It's\" para falar do clima",
        explanation:
          "Em inglês, falamos do clima com \"It's\" + adjetivo: \"It's sunny\" (Está ensolarado), \"It's cold\" (Está frio). Para perguntar, usamos \"How's the weather?\".",
      },
      miniExercise: {
        question: "Qual frase está correta?",
        options: [
          "Is sunny today.",
          "It's sunny today.",
          "It's sun today.",
          "Sunny is today.",
        ],
        correctIndex: 1,
        explanation:
          "A forma correta é \"It's sunny today\". Sempre usamos \"It's\" antes do adjetivo de clima.",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 8 — At the Airport (A2)
  // ──────────────────────────────────────────────
  {
    slug: "at-the-airport",
    title: "No Aeroporto",
    description:
      "Aprenda frases úteis para check-in, embarque e imigração em inglês.",
    level: "A2",
    icon: "✈️",
    content: {
      introduction:
        "Viajar de avião exige vocabulário específico. Nesta lição, você vai aprender a fazer check-in, perguntar sobre portões de embarque e entender instruções comuns no aeroporto.",
      dialogue: [
        {
          speaker: "Agent",
          english: "Good morning. May I see your passport?",
          portuguese: "Bom dia. Posso ver seu passaporte?",
        },
        {
          speaker: "Passenger",
          english: "Here it is. I have one checked bag.",
          portuguese: "Aqui está. Eu tenho uma mala para despachar.",
        },
        {
          speaker: "Agent",
          english: "Your gate is B12. Boarding starts at 10:30.",
          portuguese: "Seu portão é B12. O embarque começa às 10:30.",
        },
      ],
      vocabulary: [
        {
          english: "Passport",
          portuguese: "Passaporte",
          phonetic: "/ˈpæspɔːrt/",
          example: "May I see your passport?",
        },
        {
          english: "Boarding pass",
          portuguese: "Cartão de embarque",
          phonetic: "/ˈbɔːrdɪŋ pæs/",
          example: "Here's my boarding pass.",
        },
        {
          english: "Gate",
          portuguese: "Portão",
          phonetic: "/ɡeɪt/",
          example: "The gate is B12.",
        },
        {
          english: "Checked bag",
          portuguese: "Bagagem despachada",
          phonetic: "/tʃɛkt bæɡ/",
          example: "I have one checked bag.",
        },
        {
          english: "Boarding",
          portuguese: "Embarque",
          phonetic: "/ˈbɔːrdɪŋ/",
          example: "Boarding starts at 10:30.",
        },
      ],
      grammarTip: {
        title: "Perguntas educadas no aeroporto",
        explanation:
          "Para pedir informações de forma educada, use \"May I…?\" ou \"Could you…?\": \"May I see your passport?\" (Posso ver seu passaporte?) e \"Could you tell me my gate?\" (Você poderia me dizer meu portão?).",
      },
      miniExercise: {
        question: "Como perguntar \"Qual é o meu portão?\" em inglês?",
        options: [
          "Where is my gate?",
          "What is my gate?",
          "How is my gate?",
          "Which gate I am?",
        ],
        correctIndex: 0,
        explanation:
          "A forma correta é \"Where is my gate?\". Também é comum dizer \"What gate is it?\".",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 9 — Making Plans (A2)
  // ──────────────────────────────────────────────
  {
    slug: "making-plans-a2",
    title: "Fazendo Planos",
    description:
      "Aprenda a fazer convites, aceitar e recusar planos em inglês.",
    level: "A2",
    icon: "📅",
    content: {
      introduction:
        "Combinar programas é parte do dia a dia. Nesta lição, você vai aprender expressões para convidar alguém e responder de forma educada.",
      dialogue: [
        {
          speaker: "Leo",
          english: "Do you want to go to the movies on Friday?",
          portuguese: "Você quer ir ao cinema na sexta?",
        },
        {
          speaker: "Marina",
          english: "I'd love to, but I have to work.",
          portuguese: "Eu adoraria, mas tenho que trabalhar.",
        },
        {
          speaker: "Leo",
          english: "No problem. How about Saturday?",
          portuguese: "Sem problema. E sábado?",
        },
      ],
      vocabulary: [
        {
          english: "Do you want to...?",
          portuguese: "Você quer...?",
          phonetic: "/duː juː wɒnt tuː/",
          example: "Do you want to have coffee?",
        },
        {
          english: "I'd love to",
          portuguese: "Eu adoraria",
          phonetic: "/aɪd lʌv tuː/",
          example: "I'd love to go.",
        },
        {
          english: "How about...?",
          portuguese: "E...?",
          phonetic: "/haʊ əˈbaʊt/",
          example: "How about Saturday?",
        },
        {
          english: "Sorry, I can't",
          portuguese: "Desculpe, não posso",
          phonetic: "/ˈsɒri aɪ kænt/",
          example: "Sorry, I can't today.",
        },
        {
          english: "Maybe next time",
          portuguese: "Talvez na próxima",
          phonetic: "/ˈmeɪbi nɛkst taɪm/",
          example: "Maybe next time!",
        },
      ],
      grammarTip: {
        title: "Convites com \"Would you like\"",
        explanation:
          "Para convidar de forma educada, use \"Would you like to…?\": \"Would you like to have dinner?\". Para aceitar, responda \"I'd love to\" ou \"That sounds great\". Para recusar, diga \"I'm sorry, I can't\".",
      },
      miniExercise: {
        question: "Qual é a resposta correta para aceitar um convite?",
        options: [
          "No, thanks.",
          "I'd love to!",
          "I can't.",
          "Sorry.",
        ],
        correctIndex: 1,
        explanation:
          "\"I'd love to!\" é uma forma positiva de aceitar um convite. As outras opções indicam recusa.",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 10 — At the Doctor (A2)
  // ──────────────────────────────────────────────
  {
    slug: "at-the-doctor",
    title: "No Médico",
    description:
      "Aprenda a descrever sintomas e pedir ajuda médica em inglês.",
    level: "A2",
    icon: "🩺",
    content: {
      introduction:
        "Em viagens, é importante saber explicar como você se sente. Nesta lição, você vai aprender frases comuns para falar de sintomas e entender orientações do médico.",
      dialogue: [
        {
          speaker: "Doctor",
          english: "How are you feeling today?",
          portuguese: "Como você está se sentindo hoje?",
        },
        {
          speaker: "Patient",
          english: "I have a headache and a sore throat.",
          portuguese: "Estou com dor de cabeça e dor de garganta.",
        },
        {
          speaker: "Doctor",
          english: "You should rest and drink water.",
          portuguese: "Você deve descansar e beber água.",
        },
      ],
      vocabulary: [
        {
          english: "Headache",
          portuguese: "Dor de cabeça",
          phonetic: "/ˈhɛdˌeɪk/",
          example: "I have a headache.",
        },
        {
          english: "Sore throat",
          portuguese: "Dor de garganta",
          phonetic: "/sɔːr θroʊt/",
          example: "My throat is sore.",
        },
        {
          english: "Fever",
          portuguese: "Febre",
          phonetic: "/ˈfiːvər/",
          example: "I have a fever.",
        },
        {
          english: "Medicine",
          portuguese: "Remédio",
          phonetic: "/ˈmɛdɪsɪn/",
          example: "Take this medicine.",
        },
        {
          english: "Rest",
          portuguese: "Descansar",
          phonetic: "/rɛst/",
          example: "You should rest.",
        },
      ],
      grammarTip: {
        title: "Usando \"have\" para sintomas",
        explanation:
          "Para falar de sintomas, usamos \"have\": \"I have a headache\" (Eu tenho dor de cabeça), \"I have a fever\" (Eu tenho febre). Para dar conselho, use \"should\": \"You should rest\" (Você deve descansar).",
      },
      miniExercise: {
        question: "Como dizer \"Estou com febre\" em inglês?",
        options: [
          "I am fever.",
          "I have a fever.",
          "I fever.",
          "I have fevered.",
        ],
        correctIndex: 1,
        explanation:
          "A forma correta é \"I have a fever\". Em inglês usamos o verbo \"have\" para falar de sintomas.",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 11 — Giving Opinions (B1)
  // ──────────────────────────────────────────────
  {
    slug: "giving-opinions",
    title: "Dando Opiniões",
    description:
      "Aprenda a expressar opiniões, concordar e discordar em inglês.",
    level: "B1",
    icon: "💬",
    content: {
      introduction:
        "Expressar sua opinião é essencial em conversas mais avançadas. Nesta lição, você vai aprender frases para dar sua opinião, concordar e discordar de forma educada.",
      dialogue: [
        {
          speaker: "Nina",
          english: "What do you think about this movie?",
          portuguese: "O que você acha deste filme?",
        },
        {
          speaker: "Rafael",
          english: "In my opinion, it's very inspiring.",
          portuguese: "Na minha opinião, é muito inspirador.",
        },
        {
          speaker: "Nina",
          english: "I agree. The story is great.",
          portuguese: "Eu concordo. A história é ótima.",
        },
      ],
      vocabulary: [
        {
          english: "In my opinion",
          portuguese: "Na minha opinião",
          phonetic: "/ɪn maɪ əˈpɪnjən/",
          example: "In my opinion, this is a good idea.",
        },
        {
          english: "I agree",
          portuguese: "Eu concordo",
          phonetic: "/aɪ əˈɡriː/",
          example: "I agree with you.",
        },
        {
          english: "I disagree",
          portuguese: "Eu discordo",
          phonetic: "/aɪ ˌdɪsəˈɡriː/",
          example: "I disagree on that point.",
        },
        {
          english: "I think",
          portuguese: "Eu acho",
          phonetic: "/aɪ θɪŋk/",
          example: "I think it's important.",
        },
        {
          english: "From my point of view",
          portuguese: "Do meu ponto de vista",
          phonetic: "/frʌm maɪ pɔɪnt əv vjuː/",
          example: "From my point of view, it's necessary.",
        },
      ],
      grammarTip: {
        title: "Estruturas para opinião",
        explanation:
          "Para dar opinião, use expressões como \"I think\", \"In my opinion\" ou \"From my point of view\". Para concordar, use \"I agree\". Para discordar, use \"I disagree\" ou \"I'm not sure I agree\".",
      },
      miniExercise: {
        question: "Qual frase expressa opinião?",
        options: [
          "In my opinion, it's too expensive.",
          "Turn left at the corner.",
          "My name is Ana.",
          "The store is closed.",
        ],
        correctIndex: 0,
        explanation:
          "\"In my opinion, it's too expensive\" é a única frase que expressa opinião. As outras são fatos ou instruções.",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 12 — News & Media (B1)
  // ──────────────────────────────────────────────
  {
    slug: "news-and-media",
    title: "Notícias e Mídia",
    description:
      "Aprenda vocabulário para falar de notícias, mídia e informação em inglês.",
    level: "B1",
    icon: "📰",
    content: {
      introduction:
        "Ler notícias em inglês é uma ótima forma de praticar. Nesta lição, você vai aprender palavras comuns de jornal e expressões para falar sobre informações.",
      dialogue: [
        {
          speaker: "Carla",
          english: "Did you see the news today?",
          portuguese: "Você viu as notícias hoje?",
        },
        {
          speaker: "Diego",
          english: "Yes, I read it online this morning.",
          portuguese: "Sim, eu li online esta manhã.",
        },
        {
          speaker: "Carla",
          english: "The headline was surprising.",
          portuguese: "A manchete foi surpreendente.",
        },
      ],
      vocabulary: [
        {
          english: "Headline",
          portuguese: "Manchete",
          phonetic: "/ˈhɛdlaɪn/",
          example: "The headline caught my attention.",
        },
        {
          english: "Report",
          portuguese: "Reportagem",
          phonetic: "/rɪˈpɔːrt/",
          example: "The report explains the issue.",
        },
        {
          english: "Journalist",
          portuguese: "Jornalista",
          phonetic: "/ˈdʒɜːrnəlɪst/",
          example: "The journalist asked questions.",
        },
        {
          english: "Source",
          portuguese: "Fonte",
          phonetic: "/sɔːrs/",
          example: "Check the source of the information.",
        },
        {
          english: "Breaking news",
          portuguese: "Notícia de última hora",
          phonetic: "/ˈbreɪkɪŋ nuːz/",
          example: "Breaking news is on TV now.",
        },
      ],
      grammarTip: {
        title: "Present perfect para notícias recentes",
        explanation:
          "Ao falar de notícias recentes, usamos o present perfect: \"The government has announced a new plan.\" (O governo anunciou...). Isso destaca a relevância no presente.",
      },
      miniExercise: {
        question: "Qual frase está no present perfect?",
        options: [
          "The reporter writes every day.",
          "The reporter has written a new article.",
          "The reporter wrote yesterday.",
          "The reporter is writing now.",
        ],
        correctIndex: 1,
        explanation:
          "\"Has written\" é present perfect, usado para ações recentes com impacto no presente.",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 13 — Workplace Communication (B1)
  // ──────────────────────────────────────────────
  {
    slug: "workplace-communication",
    title: "Comunicação no Trabalho",
    description:
      "Aprenda frases úteis para reuniões, e-mails e conversas no trabalho.",
    level: "B1",
    icon: "🏢",
    content: {
      introduction:
        "No ambiente de trabalho, uma comunicação clara é essencial. Nesta lição, você vai aprender expressões para reuniões, prazos e colaboração.",
      dialogue: [
        {
          speaker: "Manager",
          english: "Can we schedule a meeting for tomorrow?",
          portuguese: "Podemos agendar uma reunião para amanhã?",
        },
        {
          speaker: "Employee",
          english: "Sure. What time works best for you?",
          portuguese: "Claro. Que horário é melhor para você?",
        },
        {
          speaker: "Manager",
          english: "Let's meet at 2 p.m. to discuss the project.",
          portuguese: "Vamos nos reunir às 14h para discutir o projeto.",
        },
      ],
      vocabulary: [
        {
          english: "Meeting",
          portuguese: "Reunião",
          phonetic: "/ˈmiːtɪŋ/",
          example: "We have a meeting at 3 p.m.",
        },
        {
          english: "Deadline",
          portuguese: "Prazo",
          phonetic: "/ˈdɛdlaɪn/",
          example: "The deadline is next Friday.",
        },
        {
          english: "Project",
          portuguese: "Projeto",
          phonetic: "/ˈprɒdʒɛkt/",
          example: "The project is almost ready.",
        },
        {
          english: "Discuss",
          portuguese: "Discutir",
          phonetic: "/dɪˈskʌs/",
          example: "Let's discuss the plan.",
        },
        {
          english: "Update",
          portuguese: "Atualização",
          phonetic: "/ˈʌpdeɪt/",
          example: "Send me an update.",
        },
      ],
      grammarTip: {
        title: "Pedidos e sugestões no trabalho",
        explanation:
          "Para fazer pedidos educados, use \"Can we…?\" ou \"Could you…?\": \"Could you send me the report?\". Para sugerir, use \"Let's\": \"Let's meet at 2 p.m.\".",
      },
      miniExercise: {
        question: "Qual frase é um pedido educado?",
        options: [
          "Send me the file now.",
          "Could you send me the file, please?",
          "Send the file.",
          "You send me the file.",
        ],
        correctIndex: 1,
        explanation:
          "\"Could you send me the file, please?\" é a forma mais educada de pedir algo no trabalho.",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 14 — Presentations (B2)
  // ──────────────────────────────────────────────
  {
    slug: "presentations-b2",
    title: "Apresentações Profissionais",
    description:
      "Aprenda a estruturar apresentações em inglês com abertura, tópicos e conclusão.",
    level: "B2",
    icon: "🎤",
    content: {
      introduction:
        "Fazer apresentações em inglês exige vocabulário mais formal e estruturas claras. Nesta lição, você vai aprender frases para abrir, transitar entre tópicos e encerrar sua apresentação.",
      dialogue: [
        {
          speaker: "Presenter",
          english: "Good morning, everyone. Thank you for being here today.",
          portuguese: "Bom dia a todos. Obrigado por estarem aqui hoje.",
        },
        {
          speaker: "Presenter",
          english: "I'll start with the overview, then move to the results.",
          portuguese: "Vou começar com a visão geral e depois passar para os resultados.",
        },
        {
          speaker: "Presenter",
          english: "To conclude, I'd like to summarize the key points.",
          portuguese: "Para concluir, gostaria de resumir os pontos principais.",
        },
      ],
      vocabulary: [
        {
          english: "Overview",
          portuguese: "Visão geral",
          phonetic: "/ˈoʊvərvjuː/",
          example: "Here's a quick overview.",
        },
        {
          english: "Key points",
          portuguese: "Pontos principais",
          phonetic: "/kiː pɔɪnts/",
          example: "Let's review the key points.",
        },
        {
          english: "To conclude",
          portuguese: "Para concluir",
          phonetic: "/tə kənˈkluːd/",
          example: "To conclude, thank you all.",
        },
        {
          english: "As you can see",
          portuguese: "Como podem ver",
          phonetic: "/æz juː kæn siː/",
          example: "As you can see on this slide.",
        },
        {
          english: "Let's move on",
          portuguese: "Vamos seguir para",
          phonetic: "/lɛts muːv ɒn/",
          example: "Let's move on to the next topic.",
        },
      ],
      grammarTip: {
        title: "Linguagem formal em apresentações",
        explanation:
          "Em apresentações, prefira linguagem formal e conectores: \"Firstly\", \"Additionally\", \"As a result\" e \"To conclude\". Isso ajuda a organizar as ideias e manter o público engajado.",
      },
      miniExercise: {
        question: "Qual frase é adequada para concluir uma apresentação?",
        options: [
          "To conclude, thank you for your attention.",
          "What's up, guys?",
          "I don't know.",
          "See ya later.",
        ],
        correctIndex: 0,
        explanation:
          "\"To conclude, thank you for your attention\" é formal e apropriado para encerrar uma apresentação.",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 15 — Negotiations (B2)
  // ──────────────────────────────────────────────
  {
    slug: "negotiations-b2",
    title: "Negociações",
    description:
      "Aprenda expressões para negociar prazos, preços e condições em inglês.",
    level: "B2",
    icon: "🤝",
    content: {
      introduction:
        "Negociar em inglês requer clareza e diplomacia. Nesta lição, você vai aprender frases para propor condições e chegar a acordos.",
      dialogue: [
        {
          speaker: "Client",
          english: "Could we discuss a lower price for this service?",
          portuguese: "Podemos discutir um preço mais baixo para este serviço?",
        },
        {
          speaker: "Sales",
          english: "We can offer a 10% discount if you sign a yearly contract.",
          portuguese: "Podemos oferecer 10% de desconto se você assinar um contrato anual.",
        },
        {
          speaker: "Client",
          english: "That sounds reasonable. Let's proceed.",
          portuguese: "Isso parece razoável. Vamos seguir.",
        },
      ],
      vocabulary: [
        {
          english: "Discount",
          portuguese: "Desconto",
          phonetic: "/ˈdɪskaʊnt/",
          example: "We can offer a discount.",
        },
        {
          english: "Terms",
          portuguese: "Condições",
          phonetic: "/tɜːrmz/",
          example: "Let's review the terms.",
        },
        {
          english: "Agreement",
          portuguese: "Acordo",
          phonetic: "/əˈɡriːmənt/",
          example: "We reached an agreement.",
        },
        {
          english: "Proposal",
          portuguese: "Proposta",
          phonetic: "/prəˈpoʊzəl/",
          example: "Here's our proposal.",
        },
        {
          english: "Reasonable",
          portuguese: "Razoável",
          phonetic: "/ˈriːzənəbl/",
          example: "That's a reasonable request.",
        },
      ],
      grammarTip: {
        title: "Condicionais para negociação",
        explanation:
          "Para negociar, use condicionais com \"if\": \"We can reduce the price if you pay upfront.\" (Podemos reduzir o preço se você pagar adiantado). Isso soa profissional e flexível.",
      },
      miniExercise: {
        question: "Qual frase usa condicional para negociar?",
        options: [
          "We reduce the price now.",
          "We can reduce the price if you pay today.",
          "Reduce price.",
          "You pay today, price reduce.",
        ],
        correctIndex: 1,
        explanation:
          "\"We can reduce the price if you pay today\" usa uma condicional clara para negociação.",
      },
    },
  },
  // ──────────────────────────────────────────────
  // LESSON 16 — Academic Writing (B2)
  // ──────────────────────────────────────────────
  {
    slug: "academic-writing",
    title: "Escrita Acadêmica",
    description:
      "Aprenda conectores e estruturas formais para redações e textos acadêmicos em inglês.",
    level: "B2",
    icon: "📝",
    content: {
      introduction:
        "Textos acadêmicos exigem linguagem formal e conectores claros. Nesta lição, você vai aprender expressões para organizar ideias e argumentos.",
      dialogue: [
        {
          speaker: "Professor",
          english: "In your essay, use clear transitions between paragraphs.",
          portuguese: "Na sua redação, use transições claras entre parágrafos.",
        },
        {
          speaker: "Student",
          english: "Should I use phrases like 'Moreover' and 'Therefore'?",
          portuguese: "Devo usar frases como 'Moreover' e 'Therefore'?",
        },
        {
          speaker: "Professor",
          english: "Exactly. They make your argument stronger.",
          portuguese: "Exatamente. Elas tornam seu argumento mais forte.",
        },
      ],
      vocabulary: [
        {
          english: "Moreover",
          portuguese: "Além disso",
          phonetic: "/mɔːrˈoʊvər/",
          example: "Moreover, the results support the hypothesis.",
        },
        {
          english: "Therefore",
          portuguese: "Portanto",
          phonetic: "/ˈðerfɔːr/",
          example: "Therefore, we conclude that...",
        },
        {
          english: "However",
          portuguese: "No entanto",
          phonetic: "/haʊˈevər/",
          example: "However, there are limitations.",
        },
        {
          english: "Argument",
          portuguese: "Argumento",
          phonetic: "/ˈɑːrɡjəmənt/",
          example: "Your argument is clear.",
        },
        {
          english: "Evidence",
          portuguese: "Evidência",
          phonetic: "/ˈevɪdəns/",
          example: "The evidence supports the claim.",
        },
      ],
      grammarTip: {
        title: "Conectores formais",
        explanation:
          "Em textos acadêmicos, use conectores formais: \"Moreover\" (além disso), \"However\" (no entanto), \"Therefore\" (portanto). Eles ajudam a organizar a argumentação.",
      },
      miniExercise: {
        question: "Qual conector indica conclusão?",
        options: ["Moreover", "However", "Therefore", "Because"],
        correctIndex: 2,
        explanation:
          "\"Therefore\" indica conclusão. \"Moreover\" adiciona informação e \"However\" indica contraste.",
      },
    },
  },
];
