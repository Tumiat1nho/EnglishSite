import { Lesson } from "../types";

export const lessonsA2: Lesson[] = [
  {
    slug: "at-the-restaurant",
    title: "No Restaurante",
    description:
      "Aprenda a pedir comida, fazer perguntas sobre o cardápio e pedir a conta em inglês.",
    level: "A2",
    icon: "🍴",
    content: {
      introduction:
        "Ir a um restaurante em um país de língua inglesa pode ser desafiador, mas com as frases certas, você vai se sentir confiante. Nesta lição, você vai aprender a fazer pedidos, perguntar sobre o cardápio e pedir a conta como um profissional.",
      dialogue: [
        {
          speaker: "Waiter",
          english: "Good evening! A table for two?",
          portuguese: "Boa noite! Mesa para dois?",
        },
        {
          speaker: "Customer",
          english: "Yes, please. Can I see the menu?",
          portuguese: "Sim, por favor. Posso ver o cardápio?",
        },
        {
          speaker: "Waiter",
          english: "Of course! Here you are. Are you ready to order?",
          portuguese: "Claro! Aqui está. Estão prontos para pedir?",
        },
        {
          speaker: "Customer",
          english: "I'd like the grilled salmon, please. And a glass of water.",
          portuguese: "Eu gostaria do salmão grelhado, por favor. E um copo de água.",
        },
        {
          speaker: "Waiter",
          english: "Excellent choice! Would you like any dessert?",
          portuguese: "Excelente escolha! Gostariam de alguma sobremesa?",
        },
        {
          speaker: "Customer",
          english: "No, thank you. Can I have the bill, please?",
          portuguese: "Não, obrigado. Pode trazer a conta, por favor?",
        },
      ],
      vocabulary: [
        {
          english: "Menu",
          portuguese: "Cardápio",
          phonetic: "MÉN-iu",
          example: "Can I see the menu, please?",
        },
        {
          english: "To order",
          portuguese: "Pedir / Fazer um pedido",
          phonetic: "tu OR-der",
          example: "Are you ready to order?",
        },
        {
          english: "The bill",
          portuguese: "A conta",
          phonetic: "dhê bil",
          example: "Can I have the bill, please?",
        },
        {
          english: "I'd like...",
          portuguese: "Eu gostaria de...",
          phonetic: "aid laik",
          example: "I'd like a cup of tea, please.",
        },
        {
          english: "Dessert",
          portuguese: "Sobremesa",
          phonetic: "di-ZÊRT",
          example: "The chocolate cake is the best dessert here.",
        },
      ],
      grammarTip: {
        title: "Usando 'Would like' para pedidos educados",
        explanation:
          "Em restaurantes, é muito mais educado usar 'I'd like' (eu gostaria) em vez de 'I want' (eu quero). 'I'd like' é a contração de 'I would like'. Exemplos: 'I'd like a coffee' (Eu gostaria de um café), 'I'd like the steak' (Eu gostaria do bife). Para perguntar se alguém quer algo, use 'Would you like...?' (Você gostaria de...?).",
      },
      miniExercise: {
        question:
          "Qual é a forma mais educada de pedir um café em um restaurante?",
        options: [
          "Give me a coffee.",
          "I want a coffee.",
          "I'd like a coffee, please.",
          "Coffee for me.",
        ],
        correctIndex: 2,
        explanation:
          "'I'd like a coffee, please' é a forma mais educada e apropriada. 'I want' soa rude em inglês, e 'Give me' é ainda mais direto. Sempre adicionar 'please' torna o pedido mais gentil.",
      },
    },
  },
  {
    slug: "shopping",
    title: "Fazendo Compras",
    description:
      "Aprenda a fazer compras em inglês: perguntar preços, tamanhos e formas de pagamento.",
    level: "A2",
    icon: "🛍️",
    content: {
      introduction:
        "Fazer compras em inglês é uma habilidade prática e muito útil em viagens. Nesta lição, você vai aprender a perguntar preços, pedir tamanhos diferentes, falar sobre cores e realizar pagamentos em lojas de língua inglesa.",
      dialogue: [
        {
          speaker: "Customer",
          english: "Excuse me, how much is this shirt?",
          portuguese: "Com licença, quanto custa esta camisa?",
        },
        {
          speaker: "Clerk",
          english: "It's twenty-nine dollars and ninety-nine cents.",
          portuguese: "Custa vinte e nove dólares e noventa e nove centavos.",
        },
        {
          speaker: "Customer",
          english: "Do you have it in a smaller size?",
          portuguese: "Vocês têm em um tamanho menor?",
        },
        {
          speaker: "Clerk",
          english: "Let me check. Yes, we have it in small and medium.",
          portuguese: "Deixe-me verificar. Sim, temos em pequeno e médio.",
        },
        {
          speaker: "Customer",
          english: "I'll take the small one. Can I pay by card?",
          portuguese: "Vou levar o pequeno. Posso pagar com cartão?",
        },
        {
          speaker: "Clerk",
          english: "Of course! We accept credit and debit cards.",
          portuguese: "Claro! Aceitamos cartões de crédito e débito.",
        },
      ],
      vocabulary: [
        {
          english: "How much...?",
          portuguese: "Quanto custa...?",
          phonetic: "hau match",
          example: "How much is this dress?",
        },
        {
          english: "Size",
          portuguese: "Tamanho",
          phonetic: "sáiz",
          example: "What size do you wear?",
        },
        {
          english: "Too expensive",
          portuguese: "Muito caro",
          phonetic: "tuu iks-PÉN-siv",
          example: "This bag is too expensive for me.",
        },
        {
          english: "Discount",
          portuguese: "Desconto",
          phonetic: "DIS-kaunt",
          example: "Is there a discount on this item?",
        },
        {
          english: "To try on",
          portuguese: "Experimentar (roupa)",
          phonetic: "tu trái on",
          example: "Can I try on these shoes?",
        },
      ],
      grammarTip: {
        title: "Comparativos para compras",
        explanation:
          "Ao fazer compras, é útil saber comparar: para adjetivos curtos, adicione -er: 'cheaper' (mais barato), 'smaller' (menor), 'bigger' (maior). Para adjetivos longos, use 'more': 'more expensive' (mais caro), 'more comfortable' (mais confortável). Exemplo: 'Do you have something cheaper?' (Tem algo mais barato?), 'Do you have a bigger size?' (Tem um tamanho maior?).",
      },
      miniExercise: {
        question: "Como você pergunta 'Quanto custa?' em inglês?",
        options: [
          "How many is this?",
          "What price this?",
          "How much is this?",
          "How cost is this?",
        ],
        correctIndex: 2,
        explanation:
          "'How much is this?' é a forma correta de perguntar o preço. 'How much' é usado para quantidades incontáveis e preços. 'How many' é para quantidades contáveis (How many apples?).",
      },
    },
  },
  {
    slug: "asking-for-directions",
    title: "Pedindo Direções",
    description:
      "Aprenda a pedir e dar direções em inglês: vire à esquerda, siga em frente, perto e longe.",
    level: "A2",
    icon: "🗺️",
    content: {
      introduction:
        "Perdido em uma cidade de língua inglesa? Saber pedir e entender direções é essencial para qualquer viajante. Nesta lição, você vai aprender as expressões mais importantes para se orientar e encontrar seu caminho.",
      dialogue: [
        {
          speaker: "Tourist",
          english: "Excuse me, how do I get to the train station?",
          portuguese: "Com licença, como eu chego na estação de trem?",
        },
        {
          speaker: "Local",
          english: "Go straight ahead for two blocks.",
          portuguese: "Siga em frente por dois quarteirões.",
        },
        {
          speaker: "Tourist",
          english: "OK, and then?",
          portuguese: "OK, e depois?",
        },
        {
          speaker: "Local",
          english: "Then turn left at the traffic light. You'll see a park.",
          portuguese: "Depois vire à esquerda no semáforo. Você vai ver um parque.",
        },
        {
          speaker: "Tourist",
          english: "Is it far from here?",
          portuguese: "É longe daqui?",
        },
        {
          speaker: "Local",
          english: "No, it's about five minutes on foot. It's next to the supermarket.",
          portuguese: "Não, são cerca de cinco minutos a pé. Fica ao lado do supermercado.",
        },
      ],
      vocabulary: [
        {
          english: "Turn left",
          portuguese: "Vire à esquerda",
          phonetic: "tern léft",
          example: "Turn left at the corner.",
        },
        {
          english: "Turn right",
          portuguese: "Vire à direita",
          phonetic: "tern ráit",
          example: "Turn right after the bank.",
        },
        {
          english: "Go straight",
          portuguese: "Siga em frente",
          phonetic: "gôu strêit",
          example: "Go straight for three blocks.",
        },
        {
          english: "Next to",
          portuguese: "Ao lado de",
          phonetic: "nékst tu",
          example: "The pharmacy is next to the bakery.",
        },
        {
          english: "Far from",
          portuguese: "Longe de",
          phonetic: "far from",
          example: "Is the airport far from the city center?",
        },
      ],
      grammarTip: {
        title: "Preposições de lugar: NEXT TO, BETWEEN, IN FRONT OF",
        explanation:
          "Para indicar localização, use: 'next to' (ao lado de) — 'The bank is next to the hospital'; 'between' (entre) — 'The café is between the bank and the pharmacy'; 'in front of' (em frente a) — 'The bus stop is in front of the school'; 'behind' (atrás de) — 'The parking lot is behind the building'; 'near' (perto de) — 'Is there a restaurant near here?'.",
      },
      miniExercise: {
        question:
          "Como você pergunta 'Como eu chego ao hospital?' em inglês?",
        options: [
          "Where is get the hospital?",
          "How do I get to the hospital?",
          "How I go the hospital?",
          "Where get I to hospital?",
        ],
        correctIndex: 1,
        explanation:
          "'How do I get to the hospital?' é a forma correta. A estrutura é: 'How do I get to' + lugar. Essa é a pergunta padrão para pedir direções em inglês.",
      },
    },
  },
  {
    slug: "at-the-hotel",
    title: "No Hotel",
    description:
      "Aprenda inglês para situações de hotel: check-in, serviço de quarto e reclamações.",
    level: "A2",
    icon: "🏨",
    content: {
      introduction:
        "Saber se comunicar em um hotel em inglês torna qualquer viagem mais tranquila. Nesta lição, você vai aprender as frases essenciais para fazer check-in, pedir serviços e resolver problemas durante sua estadia.",
      dialogue: [
        {
          speaker: "Guest",
          english: "Hello, I have a reservation under the name Silva.",
          portuguese: "Olá, eu tenho uma reserva no nome Silva.",
        },
        {
          speaker: "Receptionist",
          english: "Welcome! Yes, a double room for three nights. Is that correct?",
          portuguese: "Bem-vindo! Sim, um quarto de casal por três noites. Está correto?",
        },
        {
          speaker: "Guest",
          english: "Yes, that's right. Is breakfast included?",
          portuguese: "Sim, está certo. O café da manhã está incluído?",
        },
        {
          speaker: "Receptionist",
          english: "Yes, breakfast is served from seven to ten in the morning.",
          portuguese: "Sim, o café da manhã é servido das sete às dez da manhã.",
        },
        {
          speaker: "Guest",
          english: "There's a problem with my room. The air conditioning doesn't work.",
          portuguese: "Tem um problema com meu quarto. O ar-condicionado não funciona.",
        },
        {
          speaker: "Receptionist",
          english: "I'm sorry about that. I'll send someone to fix it right away.",
          portuguese: "Sinto muito por isso. Vou enviar alguém para consertar imediatamente.",
        },
      ],
      vocabulary: [
        {
          english: "Reservation",
          portuguese: "Reserva",
          phonetic: "ré-zer-VÊI-shon",
          example: "I made a reservation online.",
        },
        {
          english: "Check in / Check out",
          portuguese: "Fazer entrada / Fazer saída",
          phonetic: "tchék in / tchék aut",
          example: "What time is check out?",
        },
        {
          english: "Double room",
          portuguese: "Quarto de casal",
          phonetic: "DA-bel ruum",
          example: "I'd like a double room with a view.",
        },
        {
          english: "Room service",
          portuguese: "Serviço de quarto",
          phonetic: "ruum SÊR-vis",
          example: "Can I order room service?",
        },
        {
          english: "Key card",
          portuguese: "Cartão-chave",
          phonetic: "kii kard",
          example: "My key card isn't working.",
        },
      ],
      grammarTip: {
        title: "Usando 'There is / There are' para descrever problemas",
        explanation:
          "Para relatar problemas no hotel, use 'There is' (singular) ou 'There are' (plural): 'There is a problem with the shower' (Tem um problema com o chuveiro), 'There are no towels in my room' (Não há toalhas no meu quarto). Para perguntas: 'Is there a gym in the hotel?' (Tem academia no hotel?), 'Are there any restaurants nearby?' (Tem restaurantes por perto?).",
      },
      miniExercise: {
        question:
          "Como dizer 'Eu tenho uma reserva' em inglês?",
        options: [
          "I have a reserve.",
          "I have a reservation.",
          "I made a reserve.",
          "I do a reservation.",
        ],
        correctIndex: 1,
        explanation:
          "'I have a reservation' é a forma correta. Em inglês, usamos 'reservation' (não 'reserve') para reservas em hotéis e restaurantes. Você também pode dizer 'I made a reservation' (eu fiz uma reserva).",
      },
    },
  },
  {
    slug: "making-plans",
    title: "Fazendo Planos",
    description:
      "Aprenda a fazer convites, sugestões e combinar programas em inglês.",
    level: "A2",
    icon: "📋",
    content: {
      introduction:
        "Fazer planos com amigos ou colegas é parte do dia a dia. Nesta lição, você vai aprender expressões para fazer convites, aceitar ou recusar sugestões e combinar atividades em inglês de forma natural e educada.",
      dialogue: [
        {
          speaker: "Mike",
          english: "Hey, are you free this Saturday?",
          portuguese: "Ei, você está livre neste sábado?",
        },
        {
          speaker: "Julia",
          english: "Yes, I think so. Why? Do you have any plans?",
          portuguese: "Sim, acho que sim. Por quê? Você tem algum plano?",
        },
        {
          speaker: "Mike",
          english: "Let's go to the beach! How about that?",
          portuguese: "Vamos à praia! O que acha?",
        },
        {
          speaker: "Julia",
          english: "That sounds great! What time shall we meet?",
          portuguese: "Parece ótimo! Que horas a gente se encontra?",
        },
        {
          speaker: "Mike",
          english: "How about nine in the morning? We can go by car.",
          portuguese: "Que tal às nove da manhã? Podemos ir de carro.",
        },
        {
          speaker: "Julia",
          english: "Perfect! I'll bring some snacks and drinks.",
          portuguese: "Perfeito! Eu levo uns lanches e bebidas.",
        },
      ],
      vocabulary: [
        {
          english: "Let's go",
          portuguese: "Vamos",
          phonetic: "léts gôu",
          example: "Let's go to the movies tonight!",
        },
        {
          english: "How about...?",
          portuguese: "Que tal...?",
          phonetic: "hau a-BAUT",
          example: "How about having pizza for dinner?",
        },
        {
          english: "Shall we...?",
          portuguese: "Vamos...? / Devemos...?",
          phonetic: "shél ui",
          example: "Shall we dance?",
        },
        {
          english: "That sounds great!",
          portuguese: "Parece ótimo!",
          phonetic: "dhét saunds grêit",
          example: "A barbecue? That sounds great!",
        },
        {
          english: "I'm sorry, I can't",
          portuguese: "Desculpe, eu não posso",
          phonetic: "aim SÓ-ri, ai kânt",
          example: "I'm sorry, I can't go on Friday.",
        },
      ],
      grammarTip: {
        title: "Formas de fazer sugestões",
        explanation:
          "Existem várias formas de sugerir algo em inglês: 'Let's + verbo' é a mais comum e informal — 'Let's eat out' (Vamos comer fora). 'How about + verbo-ing?' é para propor ideias — 'How about going to the park?' (Que tal ir ao parque?). 'Shall we + verbo?' é mais formal/educado — 'Shall we leave now?' (Devemos sair agora?). 'Why don't we + verbo?' também funciona — 'Why don't we watch a movie?' (Por que não assistimos um filme?).",
      },
      miniExercise: {
        question:
          "Qual é a forma correta de sugerir 'Que tal ir ao cinema?'",
        options: [
          "How about go to the cinema?",
          "How about going to the cinema?",
          "How about we to go cinema?",
          "How about to going the cinema?",
        ],
        correctIndex: 1,
        explanation:
          "'How about going to the cinema?' é o correto. Depois de 'How about', usamos o verbo com -ing (gerúndio): 'How about eating out?', 'How about watching TV?'. Nunca use o verbo na forma base depois de 'How about'.",
      },
    },
  },
  {
    slug: "at-the-doctor",
    title: "No Médico",
    description:
      "Aprenda a descrever sintomas, falar sobre dores e entender orientações médicas em inglês.",
    level: "A2",
    icon: "🩺",
    content: {
      introduction:
        "Saber se comunicar com um médico em inglês pode ser fundamental em viagens ou emergências. Nesta lição, você vai aprender a descrever sintomas, falar sobre dores e entender as orientações médicas mais comuns.",
      dialogue: [
        {
          speaker: "Doctor",
          english: "Hello, what seems to be the problem?",
          portuguese: "Olá, qual parece ser o problema?",
        },
        {
          speaker: "Patient",
          english: "I have a terrible headache and a sore throat.",
          portuguese: "Estou com uma dor de cabeça terrível e dor de garganta.",
        },
        {
          speaker: "Doctor",
          english: "How long have you been feeling like this?",
          portuguese: "Há quanto tempo você está se sentindo assim?",
        },
        {
          speaker: "Patient",
          english: "Since yesterday. I also have a fever.",
          portuguese: "Desde ontem. Eu também estou com febre.",
        },
        {
          speaker: "Doctor",
          english: "It looks like you have the flu. I'll prescribe some medicine.",
          portuguese: "Parece que você está com gripe. Vou receitar alguns remédios.",
        },
        {
          speaker: "Patient",
          english: "Should I take the medicine before or after meals?",
          portuguese: "Devo tomar o remédio antes ou depois das refeições?",
        },
      ],
      vocabulary: [
        {
          english: "Headache",
          portuguese: "Dor de cabeça",
          phonetic: "HÉD-êik",
          example: "I've had a headache all day.",
        },
        {
          english: "Fever",
          portuguese: "Febre",
          phonetic: "FII-ver",
          example: "She has a high fever.",
        },
        {
          english: "Sore throat",
          portuguese: "Dor de garganta",
          phonetic: "sor thrôut",
          example: "I can't eat because of my sore throat.",
        },
        {
          english: "Medicine",
          portuguese: "Remédio / Medicamento",
          phonetic: "MÉ-di-sin",
          example: "Take this medicine twice a day.",
        },
        {
          english: "To feel sick",
          portuguese: "Sentir-se doente / mal",
          phonetic: "tu fiil sik",
          example: "I feel sick. I need to see a doctor.",
        },
      ],
      grammarTip: {
        title: "Usando 'have' para sintomas",
        explanation:
          "Em inglês, usamos 'have' (ter) para descrever sintomas: 'I have a headache' (Estou com dor de cabeça), 'I have a fever' (Estou com febre), 'I have a cold' (Estou resfriado), 'I have a cough' (Estou com tosse). Note que no português usamos 'estar com', mas em inglês é sempre 'have'. Para dores, também podemos dizer 'My back hurts' (Minhas costas doem) ou 'I have a backache' (Estou com dor nas costas).",
      },
      miniExercise: {
        question: "Como dizer 'Estou com dor de cabeça' em inglês?",
        options: [
          "I am with headache.",
          "I have a headache.",
          "I feel headache.",
          "My headache is big.",
        ],
        correctIndex: 1,
        explanation:
          "'I have a headache' é a forma correta. Em inglês, usamos 'I have' para sintomas, diferente do português 'estou com'. Nunca traduza literalmente 'I am with' — isso não faz sentido em inglês.",
      },
    },
  },
  {
    slug: "weather-and-seasons",
    title: "Clima e Estações",
    description:
      "Aprenda a falar sobre o tempo, as estações do ano e como se preparar para cada clima.",
    level: "A2",
    icon: "🌤️",
    content: {
      introduction:
        "Falar sobre o clima é um dos assuntos mais universais em qualquer idioma. Nesta lição, você vai aprender a descrever o tempo, falar sobre as estações do ano e expressar suas preferências sobre o clima em inglês.",
      dialogue: [
        {
          speaker: "Kate",
          english: "What's the weather like today?",
          portuguese: "Como está o tempo hoje?",
        },
        {
          speaker: "Roberto",
          english: "It's sunny and very hot. About thirty-five degrees!",
          portuguese: "Está ensolarado e muito quente. Cerca de trinta e cinco graus!",
        },
        {
          speaker: "Kate",
          english: "Wow! In my country, it's winter now. It's very cold and snowy.",
          portuguese: "Nossa! No meu país, é inverno agora. Está muito frio e nevando.",
        },
        {
          speaker: "Roberto",
          english: "I prefer warm weather. I don't like the cold.",
          portuguese: "Eu prefiro clima quente. Não gosto do frio.",
        },
        {
          speaker: "Kate",
          english: "I think it's going to rain tomorrow. Look at those clouds!",
          portuguese: "Acho que vai chover amanhã. Olhe aquelas nuvens!",
        },
        {
          speaker: "Roberto",
          english: "You're right. I should bring an umbrella.",
          portuguese: "Você tem razão. Eu deveria trazer um guarda-chuva.",
        },
      ],
      vocabulary: [
        {
          english: "Sunny",
          portuguese: "Ensolarado",
          phonetic: "SÂ-ni",
          example: "It's a beautiful sunny day.",
        },
        {
          english: "Rainy",
          portuguese: "Chuvoso",
          phonetic: "RÊI-ni",
          example: "It's very rainy in the spring.",
        },
        {
          english: "Cold",
          portuguese: "Frio",
          phonetic: "côuld",
          example: "It's cold outside. Wear a jacket.",
        },
        {
          english: "Hot",
          portuguese: "Quente",
          phonetic: "hót",
          example: "Summer in Brazil is very hot.",
        },
        {
          english: "Cloudy",
          portuguese: "Nublado",
          phonetic: "KLAU-di",
          example: "It's cloudy today. It might rain.",
        },
      ],
      grammarTip: {
        title: "Usando 'It' para falar do clima",
        explanation:
          "Em inglês, usamos 'it' como sujeito ao falar do clima, mesmo sem um sujeito real: 'It's raining' (Está chovendo), 'It's sunny' (Está ensolarado), 'It's cold' (Está frio). Para perguntar sobre o tempo: 'What's the weather like?' (Como está o tempo?). Para previsões, usamos 'going to': 'It's going to rain' (Vai chover). Nunca diga 'Is raining' ou 'Is cold' sem o 'it'.",
      },
      miniExercise: {
        question: "Como perguntar 'Como está o tempo?' em inglês?",
        options: [
          "How is the climate?",
          "What is the weather?",
          "What's the weather like?",
          "How the weather is?",
        ],
        correctIndex: 2,
        explanation:
          "'What's the weather like?' é a forma padrão de perguntar sobre o tempo em inglês. Note o 'like' no final — é obrigatório nesta estrutura. 'Climate' refere-se ao clima geral de uma região, não ao tempo de hoje.",
      },
    },
  },
  {
    slug: "hobbies-and-leisure",
    title: "Hobbies e Lazer",
    description:
      "Aprenda a falar sobre seus passatempos e atividades de lazer preferidas em inglês.",
    level: "A2",
    icon: "🎮",
    content: {
      introduction:
        "Falar sobre hobbies é uma ótima forma de conhecer pessoas e criar conexões. Nesta lição, você vai aprender a descrever suas atividades favoritas, expressar preferências e perguntar aos outros sobre seus passatempos.",
      dialogue: [
        {
          speaker: "David",
          english: "What do you like doing in your free time?",
          portuguese: "O que você gosta de fazer no seu tempo livre?",
        },
        {
          speaker: "Camila",
          english: "I enjoy reading books and playing the guitar.",
          portuguese: "Eu gosto de ler livros e tocar violão.",
        },
        {
          speaker: "David",
          english: "That's cool! I love playing soccer and watching movies.",
          portuguese: "Que legal! Eu adoro jogar futebol e assistir filmes.",
        },
        {
          speaker: "Camila",
          english: "Do you play soccer every week?",
          portuguese: "Você joga futebol toda semana?",
        },
        {
          speaker: "David",
          english: "Yes, I play every Saturday with my friends.",
          portuguese: "Sim, eu jogo todo sábado com meus amigos.",
        },
        {
          speaker: "Camila",
          english: "I'm not very good at sports, but I like going for walks.",
          portuguese: "Eu não sou muito boa em esportes, mas gosto de caminhar.",
        },
      ],
      vocabulary: [
        {
          english: "I like playing...",
          portuguese: "Eu gosto de jogar/brincar...",
          phonetic: "ai laik PLÊI-ing",
          example: "I like playing video games.",
        },
        {
          english: "I enjoy reading...",
          portuguese: "Eu gosto de ler...",
          phonetic: "ai en-DJÓI RII-ding",
          example: "I enjoy reading mystery novels.",
        },
        {
          english: "Hobby",
          portuguese: "Passatempo / Hobby",
          phonetic: "HÓ-bi",
          example: "Cooking is my favorite hobby.",
        },
        {
          english: "Free time",
          portuguese: "Tempo livre",
          phonetic: "frii taim",
          example: "I paint pictures in my free time.",
        },
        {
          english: "I'm interested in...",
          portuguese: "Eu me interesso por...",
          phonetic: "aim IN-tres-ted in",
          example: "I'm interested in photography.",
        },
      ],
      grammarTip: {
        title: "Verbos seguidos de -ing (gerúndio)",
        explanation:
          "Alguns verbos em inglês são sempre seguidos por outro verbo com -ing: 'like' (gostar), 'enjoy' (apreciar), 'love' (amar), 'hate' (odiar), 'prefer' (preferir). Exemplos: 'I like swimming' (Gosto de nadar), 'I enjoy cooking' (Gosto de cozinhar), 'She loves dancing' (Ela adora dançar). Com 'like', você também pode usar 'to': 'I like to swim'. Mas com 'enjoy', APENAS -ing funciona: 'I enjoy swimming' (correto), não 'I enjoy to swim' (errado).",
      },
      miniExercise: {
        question: "Qual frase está correta?",
        options: [
          "I enjoy to play tennis.",
          "I enjoy playing tennis.",
          "I enjoy play tennis.",
          "I enjoying play tennis.",
        ],
        correctIndex: 1,
        explanation:
          "'I enjoy playing tennis' é o correto. O verbo 'enjoy' é sempre seguido de -ing: 'enjoy playing', 'enjoy cooking', 'enjoy reading'. Nunca use 'to' depois de 'enjoy'.",
      },
    },
  },
  {
    slug: "transportation",
    title: "Transportes",
    description:
      "Aprenda a falar sobre meios de transporte e como se locomover em cidades de língua inglesa.",
    level: "A2",
    icon: "🚌",
    content: {
      introduction:
        "Usar transporte público ou se locomover em uma cidade onde se fala inglês requer vocabulário específico. Nesta lição, você vai aprender a perguntar sobre ônibus, trens, táxis e como chegar aos lugares usando diferentes meios de transporte.",
      dialogue: [
        {
          speaker: "Tourist",
          english: "Excuse me, how do I get to the city center?",
          portuguese: "Com licença, como eu chego ao centro da cidade?",
        },
        {
          speaker: "Local",
          english: "You can take the bus number forty-two. The bus stop is over there.",
          portuguese: "Você pode pegar o ônibus número quarenta e dois. O ponto de ônibus é ali.",
        },
        {
          speaker: "Tourist",
          english: "How long does it take by bus?",
          portuguese: "Quanto tempo leva de ônibus?",
        },
        {
          speaker: "Local",
          english: "About twenty minutes. You can also take the subway.",
          portuguese: "Cerca de vinte minutos. Você também pode pegar o metrô.",
        },
        {
          speaker: "Tourist",
          english: "Where is the nearest subway station?",
          portuguese: "Onde fica a estação de metrô mais próxima?",
        },
        {
          speaker: "Local",
          english: "Walk straight ahead. It's two blocks from here, on the right.",
          portuguese: "Siga em frente. Fica a dois quarteirões daqui, à direita.",
        },
      ],
      vocabulary: [
        {
          english: "Bus",
          portuguese: "Ônibus",
          phonetic: "bâs",
          example: "I take the bus to work every day.",
        },
        {
          english: "Train",
          portuguese: "Trem",
          phonetic: "trêin",
          example: "The train leaves at eight o'clock.",
        },
        {
          english: "Subway / Metro",
          portuguese: "Metrô",
          phonetic: "SAB-uêi / MÉ-trôu",
          example: "The subway is the fastest way to get there.",
        },
        {
          english: "Bus stop",
          portuguese: "Ponto de ônibus",
          phonetic: "bâs stóp",
          example: "Wait for me at the bus stop.",
        },
        {
          english: "How long does it take?",
          portuguese: "Quanto tempo leva?",
          phonetic: "hau long dâz it têik",
          example: "How long does it take to get to the airport?",
        },
      ],
      grammarTip: {
        title: "Preposições de transporte: BY, ON, IN",
        explanation:
          "Para dizer como você se locomove, use 'by' + transporte (sem artigo): 'by bus' (de ônibus), 'by car' (de carro), 'by train' (de trem), 'by plane' (de avião). Mas atenção: 'on foot' (a pé), nunca 'by foot'. Para dizer que está DENTRO do transporte, use 'on' para transportes públicos ('on the bus', 'on the train') e 'in' para carros e táxis ('in the car', 'in a taxi').",
      },
      miniExercise: {
        question: "Qual é a forma correta de dizer 'de ônibus'?",
        options: ["In bus", "On bus", "By bus", "With bus"],
        correctIndex: 2,
        explanation:
          "'By bus' é a forma correta para indicar o meio de transporte. Usamos 'by' + transporte sem artigo: 'by bus', 'by car', 'by plane'. Note que NÃO usamos artigo (the/a) depois de 'by' neste caso.",
      },
    },
  },
  {
    slug: "describing-people",
    title: "Descrevendo Pessoas",
    description:
      "Aprenda a descrever a aparência e as roupas das pessoas em inglês.",
    level: "A2",
    icon: "👤",
    content: {
      introduction:
        "Descrever pessoas é uma habilidade importante, seja para identificar alguém, elogiar ou simplesmente conversar. Nesta lição, você vai aprender adjetivos de aparência física e como descrever o que as pessoas estão vestindo.",
      dialogue: [
        {
          speaker: "Sophia",
          english: "Do you see my friend? She's standing near the door.",
          portuguese: "Você vê minha amiga? Ela está em pé perto da porta.",
        },
        {
          speaker: "Daniel",
          english: "What does she look like?",
          portuguese: "Como ela é? / Qual é a aparência dela?",
        },
        {
          speaker: "Sophia",
          english: "She's tall, with long brown hair and green eyes.",
          portuguese: "Ela é alta, com cabelo castanho longo e olhos verdes.",
        },
        {
          speaker: "Daniel",
          english: "What is she wearing?",
          portuguese: "O que ela está vestindo?",
        },
        {
          speaker: "Sophia",
          english: "She's wearing a red dress and black shoes.",
          portuguese: "Ela está usando um vestido vermelho e sapatos pretos.",
        },
        {
          speaker: "Daniel",
          english: "Oh, I see her! She looks very nice.",
          portuguese: "Ah, eu a vejo! Ela está muito bonita.",
        },
      ],
      vocabulary: [
        {
          english: "Tall",
          portuguese: "Alto(a)",
          phonetic: "tól",
          example: "My brother is very tall.",
        },
        {
          english: "Short",
          portuguese: "Baixo(a) / Curto(a)",
          phonetic: "short",
          example: "She has short blonde hair.",
        },
        {
          english: "Wearing",
          portuguese: "Vestindo / Usando",
          phonetic: "UÉ-ring",
          example: "He's wearing a blue jacket.",
        },
        {
          english: "Curly hair",
          portuguese: "Cabelo cacheado",
          phonetic: "KÊR-li hér",
          example: "She has beautiful curly hair.",
        },
        {
          english: "What does he/she look like?",
          portuguese: "Como ele/ela é? (aparência)",
          phonetic: "uót dâz hi/shi luk laik",
          example: "What does your teacher look like?",
        },
      ],
      grammarTip: {
        title: "Diferença entre 'look like' e 'like'",
        explanation:
          "Cuidado para não confundir: 'What does she look like?' pergunta sobre APARÊNCIA FÍSICA (Como ela é? — alta, morena, etc.). 'What does she like?' pergunta sobre PREFERÊNCIAS (Do que ela gosta? — chocolate, música, etc.). Para descrever roupas, use o Present Continuous: 'She is wearing a dress' (Ela está usando um vestido). 'Wear' é para roupas, 'use' em inglês normalmente NÃO é usado para roupas.",
      },
      miniExercise: {
        question:
          "Como perguntar 'Como ela é?' (aparência) em inglês?",
        options: [
          "How she is?",
          "What does she like?",
          "What does she look like?",
          "How does she look?",
        ],
        correctIndex: 2,
        explanation:
          "'What does she look like?' é a pergunta padrão para aparência física. 'What does she like?' (sem 'look') perguntaria sobre o que ela GOSTA, não sobre aparência. 'How does she look?' pode funcionar em contextos informais, mas a forma padrão é com 'What'.",
      },
    },
  },
];
