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
];
