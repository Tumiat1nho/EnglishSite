import { Lesson } from "../types";

export const lessonsB1: Lesson[] = [
  // ──────────────────────────────────────────────
  // LESSON 1 — Job Interview (B1)
  // ──────────────────────────────────────────────
  {
    slug: "job-interview",
    title: "Entrevista de Emprego",
    description:
      "Aprenda a se apresentar profissionalmente, falar sobre suas qualidades e responder perguntas comuns em entrevistas de emprego em inglês.",
    level: "B1",
    icon: "💼",
    content: {
      introduction:
        "Participar de uma entrevista de emprego em inglês pode ser desafiador, mas com preparação você pode se destacar. Nesta lição, você vai aprender as expressões mais usadas para falar sobre si mesmo, suas habilidades e experiências profissionais. Dominar essas frases vai te dar confiança para enfrentar qualquer entrevista!",

      dialogue: [
        {
          speaker: "Interviewer",
          english: "Good morning. Please, have a seat. Can you tell me a little about yourself?",
          portuguese: "Bom dia. Por favor, sente-se. Pode me contar um pouco sobre você?",
        },
        {
          speaker: "Candidate",
          english: "Thank you. I'm a software developer with three years of experience. I currently work at a medium-sized company where I build web applications.",
          portuguese: "Obrigado. Sou desenvolvedor de software com três anos de experiência. Atualmente trabalho em uma empresa de médio porte, onde desenvolvo aplicações web.",
        },
        {
          speaker: "Interviewer",
          english: "What would you say are your main strengths?",
          portuguese: "Quais você diria que são seus principais pontos fortes?",
        },
        {
          speaker: "Candidate",
          english: "I'm very organized and I work well under pressure. I also enjoy working in a team and sharing ideas with colleagues.",
          portuguese: "Sou muito organizado e trabalho bem sob pressão. Também gosto de trabalhar em equipe e compartilhar ideias com colegas.",
        },
        {
          speaker: "Interviewer",
          english: "Why are you interested in this position?",
          portuguese: "Por que você tem interesse nesta vaga?",
        },
        {
          speaker: "Candidate",
          english: "I've always admired your company's innovative approach. I believe this role would give me the opportunity to grow professionally and contribute to meaningful projects.",
          portuguese: "Sempre admirei a abordagem inovadora da empresa de vocês. Acredito que esta vaga me daria a oportunidade de crescer profissionalmente e contribuir para projetos significativos.",
        },
      ],

      vocabulary: [
        {
          english: "Strengths",
          portuguese: "Pontos fortes",
          phonetic: "strénkths",
          example: "My main strengths are communication and leadership.",
        },
        {
          english: "Work under pressure",
          portuguese: "Trabalhar sob pressão",
          phonetic: "uórk ânder préshur",
          example: "I can work well under pressure and meet tight deadlines.",
        },
        {
          english: "Position",
          portuguese: "Vaga / Cargo",
          phonetic: "pozíshon",
          example: "I'm applying for the marketing manager position.",
        },
        {
          english: "Opportunity",
          portuguese: "Oportunidade",
          phonetic: "oportuníti",
          example: "This is a great opportunity for career growth.",
        },
        {
          english: "Contribute",
          portuguese: "Contribuir",
          phonetic: "contríbiut",
          example: "I want to contribute to the success of the team.",
        },
      ],

      grammarTip: {
        title: "Usando WOULD para respostas diplomáticas",
        explanation:
          "Em entrevistas de emprego, usamos \"would\" para soar mais diplomático e profissional. Veja a diferença:\n\n• Direto: \"I think my strength is...\" (Acho que meu ponto forte é...)\n• Diplomático: \"I would say my strength is...\" (Eu diria que meu ponto forte é...)\n\nOutros exemplos com \"would\":\n— I would describe myself as a team player. (Eu me descreveria como alguém que trabalha bem em equipe.)\n— I would love the opportunity to work here. (Eu adoraria a oportunidade de trabalhar aqui.)\n— That would be a great challenge for me. (Isso seria um grande desafio para mim.)\n\nDica: usar \"would\" em vez de afirmações diretas mostra maturidade linguística e profissionalismo. Os entrevistadores percebem isso!",
      },

      miniExercise: {
        question: "O entrevistador pergunta: \"What are your strengths?\" — Qual é a resposta mais profissional?",
        options: [
          "I'm good at everything.",
          "I would say my main strength is my ability to solve problems creatively.",
          "I don't have any weaknesses.",
          "I am the best person for this job.",
        ],
        correctIndex: 1,
        explanation:
          "A resposta \"I would say my main strength is my ability to solve problems creatively\" é a mais profissional. Usar \"I would say\" mostra diplomacia, e dar um exemplo específico (\"solve problems creatively\") demonstra autoconhecimento. As outras opções soam arrogantes ou vagas.",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 2 — Making Complaints (B1)
  // ──────────────────────────────────────────────
  {
    slug: "making-complaints",
    title: "Fazendo Reclamações",
    description:
      "Aprenda a fazer reclamações educadas em inglês, seja em lojas, hotéis, restaurantes ou serviços em geral.",
    level: "B1",
    icon: "😤",
    content: {
      introduction:
        "Saber reclamar de forma educada em inglês é uma habilidade essencial para resolver problemas sem criar conflitos. Nesta lição, você vai aprender expressões formais e informais para fazer reclamações em diversas situações. O segredo é ser firme, mas sempre cortês — os anglófonos valorizam muito a polidez, mesmo em situações de insatisfação.",

      dialogue: [
        {
          speaker: "Customer",
          english: "Excuse me, I'd like to make a complaint about my room. The air conditioning isn't working properly.",
          portuguese: "Com licença, eu gostaria de fazer uma reclamação sobre meu quarto. O ar-condicionado não está funcionando direito.",
        },
        {
          speaker: "Receptionist",
          english: "I'm terribly sorry to hear that. When did you first notice the problem?",
          portuguese: "Sinto muito em saber disso. Quando você percebeu o problema pela primeira vez?",
        },
        {
          speaker: "Customer",
          english: "It's been like this since I checked in yesterday. I tried adjusting it, but it only blows warm air.",
          portuguese: "Está assim desde que fiz o check-in ontem. Tentei ajustar, mas ele só sopra ar quente.",
        },
        {
          speaker: "Receptionist",
          english: "I completely understand your frustration. Let me see what I can do for you right away.",
          portuguese: "Eu entendo completamente sua frustração. Deixe-me ver o que posso fazer por você imediatamente.",
        },
        {
          speaker: "Customer",
          english: "I would appreciate it if you could either fix it or move me to a different room.",
          portuguese: "Eu agradeceria se vocês pudessem consertar ou me trocar de quarto.",
        },
        {
          speaker: "Receptionist",
          english: "Absolutely. I'll move you to an upgraded room at no extra charge. I apologize for the inconvenience.",
          portuguese: "Com certeza. Vou transferir você para um quarto superior sem custo adicional. Peço desculpas pelo inconveniente.",
        },
      ],

      vocabulary: [
        {
          english: "To make a complaint",
          portuguese: "Fazer uma reclamação",
          phonetic: "tu meik a compléint",
          example: "I'd like to make a complaint about the service.",
        },
        {
          english: "The problem is...",
          portuguese: "O problema é...",
          phonetic: "de próblem iz",
          example: "The problem is that the product arrived damaged.",
        },
        {
          english: "Inconvenience",
          portuguese: "Inconveniência / Transtorno",
          phonetic: "inconvíniêns",
          example: "I apologize for any inconvenience caused.",
        },
        {
          english: "I would appreciate it if...",
          portuguese: "Eu agradeceria se...",
          phonetic: "ai uód apríshieit it if",
          example: "I would appreciate it if you could resolve this quickly.",
        },
        {
          english: "Refund",
          portuguese: "Reembolso",
          phonetic: "rífând",
          example: "I'd like to request a full refund, please.",
        },
      ],

      grammarTip: {
        title: "Estruturas para reclamações educadas",
        explanation:
          "Para reclamar de forma educada em inglês, existem níveis de formalidade:\n\n• Informal: \"This doesn't work.\" (Isso não funciona.)\n• Educado: \"I'm afraid there's a problem with...\" (Receio que haja um problema com...)\n• Formal: \"I'd like to make a complaint regarding...\" (Gostaria de fazer uma reclamação a respeito de...)\n\nExpressões úteis para suavizar a reclamação:\n— \"I'm sorry to bother you, but...\" (Desculpe incomodar, mas...)\n— \"I'm not entirely satisfied with...\" (Não estou totalmente satisfeito com...)\n— \"I was wondering if you could help me with...\" (Eu queria saber se você poderia me ajudar com...)\n\nDica importante: em inglês, começar uma reclamação com \"I'm afraid\" ou \"I'm sorry, but\" não significa que você está com medo ou pedindo desculpas — são apenas fórmulas de polidez!",
      },

      miniExercise: {
        question: "Você recebeu um produto com defeito. Qual é a forma mais educada de reclamar?",
        options: [
          "This is terrible! I want my money back now!",
          "I'm afraid there's a problem with the product I received. It seems to be defective.",
          "Your company is horrible. Fix this immediately.",
          "I hate this product. Give me a new one.",
        ],
        correctIndex: 1,
        explanation:
          "A opção \"I'm afraid there's a problem with the product I received. It seems to be defective\" é a mais educada. Usar \"I'm afraid\" suaviza a reclamação, e \"it seems to be\" mostra que você está descrevendo o problema sem acusar diretamente. As outras opções são agressivas ou rudes.",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 3 — Telling Stories (B1)
  // ──────────────────────────────────────────────
  {
    slug: "telling-stories",
    title: "Contando Histórias",
    description:
      "Aprenda a contar histórias e relatar acontecimentos em inglês usando tempos verbais do passado e conectores de sequência.",
    level: "B1",
    icon: "📖",
    content: {
      introduction:
        "Contar histórias é uma das habilidades mais naturais da comunicação humana. Em inglês, saber narrar eventos passados com clareza e fluência é fundamental para conversas do dia a dia. Nesta lição, você vai praticar o uso de tempos verbais do passado e aprender conectores que organizam a sequência dos fatos, tornando suas narrativas mais interessantes e fáceis de acompanhar.",

      dialogue: [
        {
          speaker: "Emma",
          english: "You won't believe what happened to me last weekend! I was walking in the park when I found a wallet on the ground.",
          portuguese: "Você não vai acreditar no que aconteceu comigo no fim de semana passado! Eu estava andando no parque quando encontrei uma carteira no chão.",
        },
        {
          speaker: "Pedro",
          english: "Really? What did you do?",
          portuguese: "Sério? O que você fez?",
        },
        {
          speaker: "Emma",
          english: "First, I looked around to see if anyone had dropped it. Then I opened it and found an ID card with an address nearby.",
          portuguese: "Primeiro, olhei ao redor para ver se alguém tinha deixado cair. Depois abri e encontrei um documento de identidade com um endereço perto dali.",
        },
        {
          speaker: "Pedro",
          english: "So what happened next? Did you go to the address?",
          portuguese: "E o que aconteceu depois? Você foi até o endereço?",
        },
        {
          speaker: "Emma",
          english: "Yes! I went to the house and knocked on the door. An elderly woman answered and she was so relieved when she saw her wallet.",
          portuguese: "Sim! Fui até a casa e bati na porta. Uma senhora idosa atendeu e ficou tão aliviada quando viu a carteira dela.",
        },
        {
          speaker: "Pedro",
          english: "That's such a nice story! In the end, it turned out to be a really good day, right?",
          portuguese: "Que história bonita! No final das contas, acabou sendo um dia muito bom, né?",
        },
      ],

      vocabulary: [
        {
          english: "First / Then / After that",
          portuguese: "Primeiro / Depois / Depois disso",
          phonetic: "fârst / dén / áfter dét",
          example: "First I had breakfast, then I went to work.",
        },
        {
          english: "Suddenly",
          portuguese: "De repente",
          phonetic: "sâdenli",
          example: "I was reading when suddenly the lights went out.",
        },
        {
          english: "In the end",
          portuguese: "No final das contas",
          phonetic: "in di énd",
          example: "In the end, everything worked out perfectly.",
        },
        {
          english: "It turned out (that)",
          portuguese: "Acabou que / Acontece que",
          phonetic: "it tárnd áut",
          example: "It turned out that we had been neighbors for years.",
        },
        {
          english: "Meanwhile",
          portuguese: "Enquanto isso",
          phonetic: "mín-uail",
          example: "I was cooking dinner. Meanwhile, my kids were doing homework.",
        },
      ],

      grammarTip: {
        title: "Past Simple vs. Past Continuous — Narrando histórias",
        explanation:
          "Ao contar histórias em inglês, combinamos dois tempos verbais:\n\n1) PAST CONTINUOUS (was/were + -ing) — descreve a ação de fundo, o cenário:\n   • \"I was walking in the park...\" (Eu estava andando no parque...)\n   • \"It was raining heavily...\" (Estava chovendo forte...)\n\n2) PAST SIMPLE — descreve a ação principal que interrompe ou acontece durante o cenário:\n   • \"...when I found a wallet.\" (...quando encontrei uma carteira.)\n   • \"...when the phone rang.\" (...quando o telefone tocou.)\n\nEstrutura clássica para histórias:\n\"I was [ação de fundo] when [ação repentina happened].\"\n\nExemplo completo: \"I was having dinner with friends when I received the best news of my life.\" (Eu estava jantando com amigos quando recebi a melhor notícia da minha vida.)\n\nDica: use \"while\" para duas ações de fundo simultâneas: \"While I was cooking, my husband was cleaning.\"",
      },

      miniExercise: {
        question: "Complete a frase: \"I _____ TV when someone _____ on the door.\"",
        options: [
          "watched / was knocking",
          "was watching / knocked",
          "watch / knocks",
          "am watching / knocked",
        ],
        correctIndex: 1,
        explanation:
          "A resposta correta é \"was watching / knocked\". \"Was watching\" (Past Continuous) descreve a ação de fundo — o que você estava fazendo. \"Knocked\" (Past Simple) descreve a ação repentina que interrompeu. Esta é a estrutura clássica para narrativas em inglês.",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 4 — Giving Opinions (B1)
  // ──────────────────────────────────────────────
  {
    slug: "giving-opinions",
    title: "Dando Opiniões",
    description:
      "Aprenda a expressar, justificar e defender suas opiniões em inglês de forma clara e respeitosa.",
    level: "B1",
    icon: "💬",
    content: {
      introduction:
        "Expressar sua opinião em inglês é essencial para participar de conversas, reuniões e debates. Nesta lição, você vai aprender diferentes formas de dar sua opinião — desde as mais informais até as mais formais — e também como concordar, discordar e justificar seu ponto de vista. Saber expressar o que pensa com clareza e respeito é uma marca de fluência!",

      dialogue: [
        {
          speaker: "Lucas",
          english: "I think remote work is much better than working in an office. What do you think?",
          portuguese: "Eu acho que o trabalho remoto é muito melhor do que trabalhar no escritório. O que você acha?",
        },
        {
          speaker: "Sarah",
          english: "In my opinion, it depends on the type of job. Some roles require face-to-face collaboration.",
          portuguese: "Na minha opinião, depende do tipo de trabalho. Alguns cargos exigem colaboração presencial.",
        },
        {
          speaker: "Lucas",
          english: "That's a good point. However, I believe technology makes it possible to collaborate effectively from anywhere.",
          portuguese: "Esse é um bom ponto. No entanto, acredito que a tecnologia permite colaborar de forma eficaz de qualquer lugar.",
        },
        {
          speaker: "Sarah",
          english: "I see what you mean, but I personally feel that being in the same room creates better connections between people.",
          portuguese: "Entendo o que você quer dizer, mas eu pessoalmente sinto que estar na mesma sala cria conexões melhores entre as pessoas.",
        },
        {
          speaker: "Lucas",
          english: "I agree to some extent. Maybe a hybrid model would be the ideal solution.",
          portuguese: "Concordo até certo ponto. Talvez um modelo híbrido seria a solução ideal.",
        },
        {
          speaker: "Sarah",
          english: "Absolutely! I couldn't agree more. A balance between both seems like the best approach.",
          portuguese: "Com certeza! Concordo plenamente. Um equilíbrio entre os dois parece a melhor abordagem.",
        },
      ],

      vocabulary: [
        {
          english: "In my opinion",
          portuguese: "Na minha opinião",
          phonetic: "in mai opínion",
          example: "In my opinion, education should be free for everyone.",
        },
        {
          english: "I believe (that)",
          portuguese: "Eu acredito (que)",
          phonetic: "ai bilív",
          example: "I believe that practice is more important than theory.",
        },
        {
          english: "I see what you mean",
          portuguese: "Entendo o que você quer dizer",
          phonetic: "ai sí uót iú mín",
          example: "I see what you mean, but I have a different perspective.",
        },
        {
          english: "I agree to some extent",
          portuguese: "Concordo até certo ponto",
          phonetic: "ai agrí tu sâm ekstént",
          example: "I agree to some extent, but there are other factors to consider.",
        },
        {
          english: "However",
          portuguese: "No entanto / Porém",
          phonetic: "rráuéver",
          example: "The idea is good. However, we need more data to support it.",
        },
      ],

      grammarTip: {
        title: "Expressões para dar opinião — do informal ao formal",
        explanation:
          "Em inglês, existem diversas formas de expressar sua opinião, variando em formalidade:\n\n• Informal:\n  — \"I think...\" (Eu acho que...)\n  — \"If you ask me...\" (Se você me perguntar...)\n\n• Neutro:\n  — \"In my opinion...\" (Na minha opinião...)\n  — \"I believe that...\" (Eu acredito que...)\n  — \"I feel that...\" (Eu sinto que...)\n\n• Formal:\n  — \"From my perspective...\" (Da minha perspectiva...)\n  — \"As far as I'm concerned...\" (No que me diz respeito...)\n  — \"It seems to me that...\" (Parece-me que...)\n\nPara concordar: \"I agree\" / \"Absolutely\" / \"I couldn't agree more\"\nPara discordar educadamente: \"I see your point, but...\" / \"I'm not sure I agree\" / \"I respectfully disagree\"\n\nDica: nunca diga apenas \"I disagree\" sem suavizar — pode soar agressivo. Adicione \"I'm afraid\" ou \"I'm not sure\" antes.",
      },

      miniExercise: {
        question: "Qual expressão é a forma mais educada de discordar de alguém?",
        options: [
          "You're wrong about that.",
          "No way! That's a terrible idea.",
          "I see your point, but I have a different perspective on this.",
          "I disagree completely.",
        ],
        correctIndex: 2,
        explanation:
          "\"I see your point, but I have a different perspective on this\" é a forma mais educada de discordar. Primeiro, você reconhece a opinião do outro (\"I see your point\") e depois introduz sua discordância com \"but\". Isso mostra respeito e maturidade na comunicação.",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 5 — Phone Conversations (B1)
  // ──────────────────────────────────────────────
  {
    slug: "phone-conversations",
    title: "Conversas ao Telefone",
    description:
      "Aprenda expressões essenciais para falar ao telefone em inglês, desde atender ligações até deixar recados.",
    level: "B1",
    icon: "📞",
    content: {
      introduction:
        "Falar ao telefone em inglês pode ser especialmente difícil porque você não tem a linguagem corporal para ajudar na comunicação. Nesta lição, você vai aprender as expressões padrão para atender, transferir, pedir para esperar e deixar recados por telefone. Essas frases são usadas tanto em contextos profissionais quanto pessoais e vão te deixar muito mais seguro nas suas ligações em inglês!",

      dialogue: [
        {
          speaker: "Receptionist",
          english: "Good afternoon, Johnson & Associates. How may I help you?",
          portuguese: "Boa tarde, Johnson & Associados. Como posso ajudá-lo?",
        },
        {
          speaker: "Caller",
          english: "Hello, could I speak to Mr. Williams, please? This is Rafael Santos calling from Techno Brasil.",
          portuguese: "Olá, eu poderia falar com o Sr. Williams, por favor? Aqui é Rafael Santos da Techno Brasil.",
        },
        {
          speaker: "Receptionist",
          english: "I'm afraid Mr. Williams is in a meeting at the moment. Would you like to hold, or can I take a message?",
          portuguese: "Receio que o Sr. Williams esteja em uma reunião no momento. Gostaria de esperar na linha ou posso anotar um recado?",
        },
        {
          speaker: "Caller",
          english: "Could you take a message, please? Could you ask him to call me back today? It's regarding the contract we discussed last week.",
          portuguese: "Poderia anotar um recado, por favor? Pode pedir a ele para me ligar de volta hoje? É sobre o contrato que discutimos na semana passada.",
        },
        {
          speaker: "Receptionist",
          english: "Of course. Could you spell your last name for me, please?",
          portuguese: "Claro. Poderia soletrar seu sobrenome para mim, por favor?",
        },
        {
          speaker: "Caller",
          english: "Sure, it's S-A-N-T-O-S. And my number is 55-11-9876-5432. Thank you very much for your help.",
          portuguese: "Claro, é S-A-N-T-O-S. E meu número é 55-11-9876-5432. Muito obrigado pela sua ajuda.",
        },
      ],

      vocabulary: [
        {
          english: "Can I speak to...?",
          portuguese: "Posso falar com...?",
          phonetic: "kén ai spík tu",
          example: "Can I speak to the manager, please?",
        },
        {
          english: "Hold on / Please hold",
          portuguese: "Espere na linha / Aguarde",
          phonetic: "rrôuld on / plíz rrôuld",
          example: "Please hold while I transfer your call.",
        },
        {
          english: "Leave a message",
          portuguese: "Deixar um recado",
          phonetic: "lív a méssedj",
          example: "He's not available. Would you like to leave a message?",
        },
        {
          english: "Call back",
          portuguese: "Ligar de volta / Retornar a ligação",
          phonetic: "cól bék",
          example: "Could you ask her to call me back this afternoon?",
        },
        {
          english: "This is... calling",
          portuguese: "Aqui é... (ao telefone)",
          phonetic: "dis iz... cóling",
          example: "Hello, this is Ana calling from the marketing department.",
        },
      ],

      grammarTip: {
        title: "Linguagem formal ao telefone — COULD vs. CAN",
        explanation:
          "Ao falar ao telefone em inglês, especialmente em contextos profissionais, usamos \"could\" em vez de \"can\" para ser mais educado:\n\n• Informal: \"Can I talk to John?\" (Posso falar com o John?)\n• Formal: \"Could I speak to Mr. Smith, please?\" (Poderia falar com o Sr. Smith, por favor?)\n\nOutras estruturas formais comuns ao telefone:\n— \"I'm calling regarding...\" (Estou ligando a respeito de...)\n— \"I'm afraid he's not available.\" (Receio que ele não esteja disponível.)\n— \"Would you like to leave a message?\" (Gostaria de deixar um recado?)\n— \"Could you spell that for me?\" (Poderia soletrar isso para mim?)\n\nIMPORTANTE: Em inglês ao telefone, NÃO dizemos \"I am Rafael\" — dizemos \"This is Rafael\" ou \"This is Rafael speaking\". Essa é uma diferença que pega muitos brasileiros!",
      },

      miniExercise: {
        question: "Você liga para uma empresa e quer falar com a Sra. Johnson. Qual é a forma mais adequada?",
        options: [
          "I want to talk to Mrs. Johnson now.",
          "Give me Mrs. Johnson.",
          "Could I speak to Mrs. Johnson, please?",
          "Where is Mrs. Johnson? I need her.",
        ],
        correctIndex: 2,
        explanation:
          "\"Could I speak to Mrs. Johnson, please?\" é a forma padrão e educada de pedir para falar com alguém ao telefone em inglês. Usar \"could\" (em vez de \"can\") e adicionar \"please\" torna o pedido profissional e cortês.",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 6 — Booking Travel (B1)
  // ──────────────────────────────────────────────
  {
    slug: "booking-travel",
    title: "Reservando Viagens",
    description:
      "Aprenda a reservar voos, hotéis e passeios em inglês com vocabulário essencial de viagem.",
    level: "B1",
    icon: "✈️",
    content: {
      introduction:
        "Planejar e reservar uma viagem em inglês é uma situação que muitos brasileiros enfrentam ao viajar para o exterior. Nesta lição, você vai aprender o vocabulário e as expressões necessárias para reservar passagens aéreas, quartos de hotel e pacotes turísticos. Com essas frases, você vai conseguir fazer suas reservas com confiança e sem depender de tradutores!",

      dialogue: [
        {
          speaker: "Agent",
          english: "Welcome to SkyTravel. How can I assist you today?",
          portuguese: "Bem-vindo à SkyTravel. Como posso ajudá-lo hoje?",
        },
        {
          speaker: "Customer",
          english: "I'd like to book a round-trip flight from São Paulo to London. I'm looking at departing on March 15th and returning on March 29th.",
          portuguese: "Eu gostaria de reservar um voo de ida e volta de São Paulo para Londres. Estou pensando em partir no dia 15 de março e voltar no dia 29 de março.",
        },
        {
          speaker: "Agent",
          english: "Let me check availability. Would you prefer a direct flight or are you okay with a layover?",
          portuguese: "Deixe-me verificar a disponibilidade. Você prefere um voo direto ou aceita fazer uma conexão?",
        },
        {
          speaker: "Customer",
          english: "I'd prefer a direct flight if possible. Also, could you tell me if the ticket includes checked baggage?",
          portuguese: "Eu preferiria um voo direto, se possível. Além disso, poderia me dizer se a passagem inclui bagagem despachada?",
        },
        {
          speaker: "Agent",
          english: "The economy ticket includes one checked bag up to 23 kilos. The departure is at 10:15 PM and the arrival in London is at 1:30 PM the next day.",
          portuguese: "A passagem econômica inclui uma mala despachada de até 23 quilos. A partida é às 22h15 e a chegada em Londres é às 13h30 do dia seguinte.",
        },
        {
          speaker: "Customer",
          english: "That sounds perfect. I'll take it. Can I also book a hotel near the city center?",
          portuguese: "Parece perfeito. Vou querer. Posso também reservar um hotel perto do centro da cidade?",
        },
      ],

      vocabulary: [
        {
          english: "Round-trip / One-way",
          portuguese: "Ida e volta / Só ida",
          phonetic: "ráund-trip / uan-uei",
          example: "I need a round-trip ticket to New York.",
        },
        {
          english: "Departure / Arrival",
          portuguese: "Partida / Chegada",
          phonetic: "dipártchur / arráival",
          example: "The departure time is 8 AM and the arrival is at noon.",
        },
        {
          english: "Layover",
          portuguese: "Conexão / Escala",
          phonetic: "léi-ôuver",
          example: "The flight has a two-hour layover in Madrid.",
        },
        {
          english: "Checked baggage",
          portuguese: "Bagagem despachada",
          phonetic: "tchékt bégadj",
          example: "Each passenger is allowed one piece of checked baggage.",
        },
        {
          english: "Availability",
          portuguese: "Disponibilidade",
          phonetic: "aveila-bíliti",
          example: "Let me check the availability for those dates.",
        },
      ],

      grammarTip: {
        title: "I'D LIKE TO vs. I WANT TO — Fazendo reservas",
        explanation:
          "Ao fazer reservas em inglês, a escolha entre \"I'd like to\" e \"I want to\" faz diferença na impressão que você causa:\n\n• \"I'd like to book a room.\" (Gostaria de reservar um quarto.) — EDUCADO e PREFERÍVEL\n• \"I want to book a room.\" (Quero reservar um quarto.) — correto, mas menos cortês\n\nEstruturas comuns para reservas:\n— \"I'd like to book...\" (Gostaria de reservar...)\n— \"I'd like to make a reservation for...\" (Gostaria de fazer uma reserva para...)\n— \"Could you check if... is available?\" (Poderia verificar se... está disponível?)\n— \"Is there any availability for...?\" (Há disponibilidade para...?)\n\nPara perguntar sobre preços:\n— \"How much is it per night?\" (Quanto custa por noite?)\n— \"Does the price include breakfast?\" (O preço inclui café da manhã?)\n— \"Are there any discounts available?\" (Há algum desconto disponível?)",
      },

      miniExercise: {
        question: "Você quer reservar um quarto de hotel para duas noites. Qual frase é a mais apropriada?",
        options: [
          "Give me a room for two nights.",
          "I'd like to book a double room for two nights, please.",
          "I need room. Two nights.",
          "Room. Two nights. How much?",
        ],
        correctIndex: 1,
        explanation:
          "\"I'd like to book a double room for two nights, please\" é a forma mais completa e educada. Usa \"I'd like to\" (gostaria de), especifica o tipo de quarto (\"double room\"), a duração (\"two nights\") e inclui \"please\" para cortesia.",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 7 — Discussing News (B1)
  // ──────────────────────────────────────────────
  {
    slug: "discussing-news",
    title: "Discutindo Notícias",
    description:
      "Aprenda a comentar notícias e eventos atuais em inglês, usando expressões para relatar e opinar sobre fatos.",
    level: "B1",
    icon: "📰",
    content: {
      introduction:
        "Discutir notícias e acontecimentos atuais é uma parte fundamental de conversas entre adultos. Em inglês, existem expressões específicas para introduzir um assunto, relatar o que você leu ou ouviu e dar sua opinião sobre os fatos. Nesta lição, você vai aprender a participar de conversas sobre notícias de forma natural e articulada, uma habilidade valiosa tanto em contextos sociais quanto profissionais.",

      dialogue: [
        {
          speaker: "Ana",
          english: "Have you heard about the new environmental law they passed yesterday?",
          portuguese: "Você soube da nova lei ambiental que foi aprovada ontem?",
        },
        {
          speaker: "James",
          english: "Yes, I read about it this morning. According to the article, it will reduce carbon emissions by 30% over the next decade.",
          portuguese: "Sim, eu li sobre isso hoje de manhã. De acordo com o artigo, vai reduzir as emissões de carbono em 30% na próxima década.",
        },
        {
          speaker: "Ana",
          english: "It seems like a very ambitious plan. I'm not sure they can achieve those targets that quickly.",
          portuguese: "Parece um plano muito ambicioso. Não tenho certeza se eles conseguem atingir essas metas tão rápido.",
        },
        {
          speaker: "James",
          english: "I know what you mean. Apparently, several industries are already complaining about the new regulations.",
          portuguese: "Entendo o que você quer dizer. Aparentemente, várias indústrias já estão reclamando das novas regulamentações.",
        },
        {
          speaker: "Ana",
          english: "That doesn't surprise me. But on the other hand, something needs to be done about climate change.",
          portuguese: "Isso não me surpreende. Mas por outro lado, algo precisa ser feito em relação às mudanças climáticas.",
        },
        {
          speaker: "James",
          english: "Absolutely. The report also mentioned that the government will invest in renewable energy. That sounds promising, at least.",
          portuguese: "Com certeza. O relatório também mencionou que o governo vai investir em energia renovável. Isso parece promissor, pelo menos.",
        },
      ],

      vocabulary: [
        {
          english: "Have you heard about...?",
          portuguese: "Você soube de / ficou sabendo de...?",
          phonetic: "rrev iú rrârd abáut",
          example: "Have you heard about the election results?",
        },
        {
          english: "According to",
          portuguese: "De acordo com / Segundo",
          phonetic: "acórding tu",
          example: "According to the news, the economy is improving.",
        },
        {
          english: "It seems (that)",
          portuguese: "Parece (que)",
          phonetic: "it síms",
          example: "It seems that the company will close its local offices.",
        },
        {
          english: "Apparently",
          portuguese: "Aparentemente / Pelo que parece",
          phonetic: "apérentli",
          example: "Apparently, the concert has been cancelled due to the storm.",
        },
        {
          english: "On the other hand",
          portuguese: "Por outro lado",
          phonetic: "on di âder rrénd",
          example: "The project is expensive. On the other hand, it could create many jobs.",
        },
      ],

      grammarTip: {
        title: "Reported Speech — Relatando o que outros disseram",
        explanation:
          "Ao discutir notícias, frequentemente relatamos o que outros disseram ou escreveram. Em inglês, isso é chamado de \"Reported Speech\":\n\n• Discurso direto: The president said, \"We will invest in education.\"\n• Discurso indireto: The president said (that) they would invest in education.\n\nMudanças principais:\n— will → would\n— can → could\n— is/are → was/were\n— present simple → past simple\n\nExpressões úteis para relatar notícias:\n— \"According to the report...\" (De acordo com o relatório...)\n— \"The article says/said that...\" (O artigo diz/disse que...)\n— \"I read/heard that...\" (Eu li/ouvi que...)\n— \"They announced that...\" (Eles anunciaram que...)\n\nDica: na fala informal, muitas vezes mantemos o tempo verbal original quando a informação ainda é relevante: \"The news says the storm is coming tonight.\"",
      },

      miniExercise: {
        question: "Você leu uma notícia e quer comentar com um amigo. Qual introdução é mais natural?",
        options: [
          "I will tell you a news.",
          "Have you heard about the new discovery they made in space?",
          "There is a news I want to say you.",
          "I have a news for telling.",
        ],
        correctIndex: 1,
        explanation:
          "\"Have you heard about the new discovery they made in space?\" é a forma mais natural de introduzir um assunto de notícia em uma conversa. Lembre-se: \"news\" é incontável em inglês — nunca dizemos \"a news\" (dizemos \"a piece of news\" ou \"some news\"). A estrutura \"Have you heard about...?\" é a mais comum para iniciar uma conversa sobre notícias.",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 8 — At the Bank (B1)
  // ──────────────────────────────────────────────
  {
    slug: "at-the-bank",
    title: "No Banco",
    description:
      "Aprenda o vocabulário bancário essencial em inglês para abrir contas, fazer transferências e trocar dinheiro.",
    level: "B1",
    icon: "🏦",
    content: {
      introduction:
        "Lidar com assuntos bancários em outro idioma pode ser estressante, mas com o vocabulário certo você vai se sentir muito mais preparado. Nesta lição, você vai aprender as expressões usadas em bancos para abrir uma conta, perguntar sobre taxas de câmbio, fazer transferências e resolver questões financeiras. Estas são situações comuns para quem mora, trabalha ou viaja para países de língua inglesa.",

      dialogue: [
        {
          speaker: "Customer",
          english: "Good morning. I'd like to open a savings account. Could you explain the process?",
          portuguese: "Bom dia. Eu gostaria de abrir uma conta poupança. Você poderia me explicar o processo?",
        },
        {
          speaker: "Bank Clerk",
          english: "Of course. You'll need to provide a valid ID, proof of address, and a minimum deposit of $250. The account has no monthly fees.",
          portuguese: "Claro. Você vai precisar de um documento de identidade válido, comprovante de endereço e um depósito mínimo de $250. A conta não tem taxa mensal.",
        },
        {
          speaker: "Customer",
          english: "That sounds good. I also need to exchange some Brazilian reais for dollars. What's the current exchange rate?",
          portuguese: "Parece bom. Eu também preciso trocar alguns reais brasileiros por dólares. Qual é a taxa de câmbio atual?",
        },
        {
          speaker: "Bank Clerk",
          english: "Today's exchange rate is 5.10 reais to one dollar. How much would you like to exchange?",
          portuguese: "A taxa de câmbio de hoje é 5,10 reais para um dólar. Quanto você gostaria de trocar?",
        },
        {
          speaker: "Customer",
          english: "I'd like to exchange 5,000 reais. Also, is it possible to make an international wire transfer from here?",
          portuguese: "Gostaria de trocar 5.000 reais. Além disso, é possível fazer uma transferência bancária internacional daqui?",
        },
        {
          speaker: "Bank Clerk",
          english: "Yes, absolutely. International transfers take two to three business days and there's a $35 processing fee. I can help you with everything today.",
          portuguese: "Sim, com certeza. Transferências internacionais levam de dois a três dias úteis e há uma taxa de processamento de $35. Posso ajudá-lo com tudo hoje.",
        },
      ],

      vocabulary: [
        {
          english: "Savings account / Checking account",
          portuguese: "Conta poupança / Conta corrente",
          phonetic: "séivings akáunt / tchéking akáunt",
          example: "I'd like to open a checking account for daily transactions.",
        },
        {
          english: "Exchange rate",
          portuguese: "Taxa de câmbio",
          phonetic: "ikstchêindj reit",
          example: "What's the exchange rate for euros today?",
        },
        {
          english: "Wire transfer",
          portuguese: "Transferência bancária",
          phonetic: "uáier trénsfâr",
          example: "I need to make an international wire transfer to Brazil.",
        },
        {
          english: "Deposit / Withdrawal",
          portuguese: "Depósito / Saque",
          phonetic: "dipózit / uidróual",
          example: "I'd like to make a deposit of $500 into my account.",
        },
        {
          english: "Processing fee",
          portuguese: "Taxa de processamento",
          phonetic: "próssessing fí",
          example: "Is there a processing fee for this transaction?",
        },
      ],

      grammarTip: {
        title: "Perguntas com IS IT POSSIBLE TO...? — Consultando serviços",
        explanation:
          "Ao pedir informações no banco (ou em qualquer serviço), usamos estruturas de pergunta educadas:\n\n• \"Is it possible to...?\" (É possível...?)\n   — Is it possible to open an account online? (É possível abrir uma conta online?)\n\n• \"Could you tell me...?\" (Poderia me dizer...?)\n   — Could you tell me the exchange rate? (Poderia me dizer a taxa de câmbio?)\n\n• \"How long does it take to...?\" (Quanto tempo leva para...?)\n   — How long does it take to process a transfer? (Quanto tempo leva para processar uma transferência?)\n\n• \"Is there a fee for...?\" (Tem alguma taxa para...?)\n   — Is there a fee for international transfers? (Tem alguma taxa para transferências internacionais?)\n\nDica: em contextos bancários, \"fee\" é taxa/tarifa, \"rate\" é taxa de câmbio/juros, e \"charge\" é cobrança. Não confunda essas palavras!",
      },

      miniExercise: {
        question: "Você quer saber a taxa de câmbio no banco. Qual é a pergunta mais adequada?",
        options: [
          "How much is the money change?",
          "What's the current exchange rate for Brazilian reais?",
          "How many dollars for my reais?",
          "Can you change my money to dollars?",
        ],
        correctIndex: 1,
        explanation:
          "\"What's the current exchange rate for Brazilian reais?\" é a forma correta e profissional de perguntar sobre câmbio. O termo correto é \"exchange rate\" (taxa de câmbio), não \"money change\". Incluir \"current\" (atual) mostra que você sabe que as taxas variam diariamente.",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 9 — Describing Experiences (B1)
  // ──────────────────────────────────────────────
  {
    slug: "describing-experiences",
    title: "Descrevendo Experiências",
    description:
      "Aprenda a falar sobre experiências de vida em inglês usando o Present Perfect e expressões descritivas.",
    level: "B1",
    icon: "🌍",
    content: {
      introduction:
        "Compartilhar experiências de vida é uma das formas mais ricas de conectar-se com outras pessoas. Em inglês, usamos o Present Perfect para falar sobre experiências que tivemos (ou não) ao longo da vida, sem especificar quando aconteceram. Nesta lição, você vai aprender a perguntar e contar sobre viagens, conquistas e vivências marcantes de forma natural e envolvente.",

      dialogue: [
        {
          speaker: "Mike",
          english: "Have you ever been to Europe? I'm thinking about going this summer.",
          portuguese: "Você já esteve na Europa? Estou pensando em ir neste verão.",
        },
        {
          speaker: "Juliana",
          english: "Yes, I've been to Portugal and Spain. I went there two years ago and it was an incredible experience.",
          portuguese: "Sim, já estive em Portugal e na Espanha. Fui há dois anos e foi uma experiência incrível.",
        },
        {
          speaker: "Mike",
          english: "That sounds amazing! What was the most memorable thing about the trip?",
          portuguese: "Isso parece incrível! Qual foi a coisa mais memorável da viagem?",
        },
        {
          speaker: "Juliana",
          english: "I'd say visiting the Alhambra in Granada. I've never seen anything so beautiful in my life. The architecture was breathtaking.",
          portuguese: "Eu diria que visitar a Alhambra em Granada. Eu nunca vi nada tão bonito na minha vida. A arquitetura era de tirar o fôlego.",
        },
        {
          speaker: "Mike",
          english: "I've always wanted to visit Spain. Have you tried any extreme sports? I've been skydiving once and it was terrifying but thrilling.",
          portuguese: "Sempre quis visitar a Espanha. Você já experimentou algum esporte radical? Já fiz paraquedismo uma vez e foi aterrorizante, mas emocionante.",
        },
        {
          speaker: "Juliana",
          english: "I haven't tried skydiving yet, but I've gone bungee jumping in New Zealand. It was the scariest thing I've ever done!",
          portuguese: "Ainda não experimentei paraquedismo, mas já fiz bungee jumping na Nova Zelândia. Foi a coisa mais assustadora que eu já fiz!",
        },
      ],

      vocabulary: [
        {
          english: "Have you ever...?",
          portuguese: "Você já...? (alguma vez na vida)",
          phonetic: "rrev iú éver",
          example: "Have you ever eaten sushi? It's delicious!",
        },
        {
          english: "I've been to...",
          portuguese: "Eu já estive em / fui a...",
          phonetic: "aiv bín tu",
          example: "I've been to Japan twice. I love the culture there.",
        },
        {
          english: "Breathtaking",
          portuguese: "De tirar o fôlego / Impressionante",
          phonetic: "bréth-teiking",
          example: "The view from the mountain was absolutely breathtaking.",
        },
        {
          english: "Memorable",
          portuguese: "Memorável / Inesquecível",
          phonetic: "mémorábol",
          example: "It was one of the most memorable days of my life.",
        },
        {
          english: "Thrilling",
          portuguese: "Emocionante / Empolgante",
          phonetic: "thríling",
          example: "The roller coaster ride was absolutely thrilling!",
        },
      ],

      grammarTip: {
        title: "PRESENT PERFECT para experiências de vida",
        explanation:
          "O Present Perfect (have/has + past participle) é o tempo verbal perfeito para falar sobre experiências de vida sem mencionar quando aconteceram:\n\n• \"I have visited Paris.\" (Eu já visitei Paris.) — em algum momento da vida\n• \"She has never tried Japanese food.\" (Ela nunca experimentou comida japonesa.)\n• \"Have you ever climbed a mountain?\" (Você já escalou uma montanha?)\n\nPalavras-chave que acompanham o Present Perfect:\n— EVER (alguma vez) — para perguntas: \"Have you ever...?\"\n— NEVER (nunca) — \"I've never been to Africa.\"\n— ALREADY (já) — \"I've already seen that movie.\"\n— YET (ainda) — \"I haven't finished yet.\"\n— JUST (acabou de) — \"I've just arrived.\"\n\nATENÇÃO: Quando você diz QUANDO a experiência aconteceu, mude para Past Simple:\n• \"I've been to Paris.\" (sem data) → Present Perfect\n• \"I went to Paris in 2019.\" (com data) → Past Simple\n\nEste é um dos erros mais comuns de brasileiros — não misture Present Perfect com datas específicas!",
      },

      miniExercise: {
        question: "Complete: \"_____ you ever _____ to Australia?\"",
        options: [
          "Did / been",
          "Have / been",
          "Are / being",
          "Were / been",
        ],
        correctIndex: 1,
        explanation:
          "A resposta correta é \"Have you ever been to Australia?\" Usamos \"Have... ever... been\" (Present Perfect) para perguntar sobre experiências de vida. \"Been to\" significa \"esteve em / foi a\" um lugar. \"Did you ever been\" está incorreto porque \"did\" exige o infinitivo (\"go\"), não o particípio (\"been\").",
      },
    },
  },

  // ──────────────────────────────────────────────
  // LESSON 10 — Problem Solving (B1)
  // ──────────────────────────────────────────────
  {
    slug: "problem-solving",
    title: "Resolvendo Problemas",
    description:
      "Aprenda a discutir problemas e propor soluções em inglês usando expressões de sugestão e hipótese.",
    level: "B1",
    icon: "🧩",
    content: {
      introduction:
        "A capacidade de discutir problemas e propor soluções em inglês é essencial tanto na vida pessoal quanto profissional. Nesta lição, você vai aprender expressões para identificar problemas, sugerir alternativas e chegar a um acordo sobre a melhor solução. Essas habilidades são muito valorizadas em ambientes de trabalho internacionais e em situações cotidianas no exterior.",

      dialogue: [
        {
          speaker: "Laura",
          english: "We have a problem. The client wants the project delivered by Friday, but we're at least a week behind schedule.",
          portuguese: "Temos um problema. O cliente quer o projeto entregue até sexta-feira, mas estamos pelo menos uma semana atrasados.",
        },
        {
          speaker: "Carlos",
          english: "What if we focused only on the essential features and delivered a simpler version first?",
          portuguese: "E se a gente focasse apenas nas funcionalidades essenciais e entregasse uma versão mais simples primeiro?",
        },
        {
          speaker: "Laura",
          english: "That's not a bad idea. We could prioritize the core functions and add the extras in a second phase.",
          portuguese: "Não é uma má ideia. Poderíamos priorizar as funções principais e adicionar os extras em uma segunda fase.",
        },
        {
          speaker: "Carlos",
          english: "Exactly. How about we talk to the client and explain the situation? They might be open to a phased delivery.",
          portuguese: "Exatamente. Que tal falarmos com o cliente e explicarmos a situação? Eles podem estar abertos a uma entrega em fases.",
        },
        {
          speaker: "Laura",
          english: "Good thinking. Another option would be to bring in two more developers to speed things up. Do you think that's feasible?",
          portuguese: "Boa ideia. Outra opção seria trazer mais dois desenvolvedores para acelerar as coisas. Você acha que é viável?",
        },
        {
          speaker: "Carlos",
          english: "It might work if they can start tomorrow. Let's combine both approaches — simplify the scope and add more people to the team.",
          portuguese: "Pode funcionar se eles puderem começar amanhã. Vamos combinar as duas abordagens — simplificar o escopo e adicionar mais pessoas à equipe.",
        },
      ],

      vocabulary: [
        {
          english: "What if...?",
          portuguese: "E se...?",
          phonetic: "uót if",
          example: "What if we changed the deadline to next week?",
        },
        {
          english: "How about...?",
          portuguese: "Que tal...?",
          phonetic: "rráu abáut",
          example: "How about we split the work between the two teams?",
        },
        {
          english: "We could...",
          portuguese: "Nós poderíamos...",
          phonetic: "uí cud",
          example: "We could try a different approach to solve this issue.",
        },
        {
          english: "Feasible",
          portuguese: "Viável / Possível",
          phonetic: "fízibol",
          example: "Is it feasible to finish the project by next month?",
        },
        {
          english: "Behind schedule",
          portuguese: "Atrasado (em relação ao cronograma)",
          phonetic: "birráind skédjul",
          example: "We're two weeks behind schedule on this project.",
        },
      ],

      grammarTip: {
        title: "Estruturas para SUGESTÕES em inglês",
        explanation:
          "Em inglês, existem diversas formas de sugerir soluções para problemas:\n\n1) \"What if + past tense?\" — hipótese/sugestão:\n   • \"What if we hired a consultant?\" (E se contratássemos um consultor?)\n\n2) \"How about + gerund (-ing)?\" — sugestão casual:\n   • \"How about trying a different method?\" (Que tal tentar um método diferente?)\n\n3) \"We could + infinitive\" — possibilidade/sugestão:\n   • \"We could ask for an extension.\" (Poderíamos pedir uma extensão.)\n\n4) \"Why don't we + infinitive?\" — sugestão direta:\n   • \"Why don't we start over?\" (Por que não recomeçamos?)\n\n5) \"Another option would be to + infinitive\" — sugestão formal:\n   • \"Another option would be to outsource the work.\" (Outra opção seria terceirizar o trabalho.)\n\nDica: ao resolver problemas em equipe, evite dizer \"You should\" (você deveria) — isso soa como uma ordem. Prefira \"We could\" ou \"How about\" para incluir todos na solução.",
      },

      miniExercise: {
        question: "Seu colega diz: \"We're over budget on this project.\" Qual é a melhor sugestão?",
        options: [
          "That's your problem, not mine.",
          "You should have planned better.",
          "How about we review the expenses and cut unnecessary costs?",
          "I don't care about the budget.",
        ],
        correctIndex: 2,
        explanation:
          "\"How about we review the expenses and cut unnecessary costs?\" é a melhor resposta porque oferece uma sugestão construtiva usando \"How about we...\". Em vez de culpar alguém ou ignorar o problema, você propõe uma ação colaborativa. Essa é a postura valorizada em ambientes profissionais.",
      },
    },
  },
];
