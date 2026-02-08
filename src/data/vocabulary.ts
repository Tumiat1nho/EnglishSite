export interface VocabularyWord {
  english: string;
  portuguese: string;
  phonetic: string;
  example: string;
  exampleTranslation: string;
}

export interface VocabularyCategory {
  slug: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  words: VocabularyWord[];
}

export const vocabularyCategories: VocabularyCategory[] = [
  {
    slug: "greetings",
    title: "Saudações",
    description:
      "Aprenda as saudações e cumprimentos mais usados no dia a dia em inglês.",
    level: "A1",
    icon: "👋",
    words: [
      {
        english: "Hello",
        portuguese: "Olá",
        phonetic: "heh-LOU",
        example: "Hello, how are you?",
        exampleTranslation: "Olá, como você está?",
      },
      {
        english: "Goodbye",
        portuguese: "Adeus / Tchau",
        phonetic: "gud-BÁI",
        example: "Goodbye, see you tomorrow!",
        exampleTranslation: "Tchau, vejo você amanhã!",
      },
      {
        english: "Good morning",
        portuguese: "Bom dia",
        phonetic: "gud MÓR-ning",
        example: "Good morning, everyone!",
        exampleTranslation: "Bom dia a todos!",
      },
      {
        english: "Good afternoon",
        portuguese: "Boa tarde",
        phonetic: "gud éf-ter-NUUN",
        example: "Good afternoon, Mrs. Silva.",
        exampleTranslation: "Boa tarde, Sra. Silva.",
      },
      {
        english: "Good evening",
        portuguese: "Boa noite (ao chegar)",
        phonetic: "gud ÍV-ning",
        example: "Good evening, welcome to our restaurant.",
        exampleTranslation: "Boa noite, bem-vindo ao nosso restaurante.",
      },
      {
        english: "Good night",
        portuguese: "Boa noite (ao sair / dormir)",
        phonetic: "gud NÁIT",
        example: "Good night, sleep well!",
        exampleTranslation: "Boa noite, durma bem!",
      },
      {
        english: "Please",
        portuguese: "Por favor",
        phonetic: "plíiz",
        example: "Can I have some water, please?",
        exampleTranslation: "Posso ter um pouco de água, por favor?",
      },
      {
        english: "Thank you",
        portuguese: "Obrigado(a)",
        phonetic: "thénk iú",
        example: "Thank you for your help!",
        exampleTranslation: "Obrigado pela sua ajuda!",
      },
      {
        english: "Excuse me",
        portuguese: "Com licença / Desculpe",
        phonetic: "ecs-QUIUZ mi",
        example: "Excuse me, where is the bathroom?",
        exampleTranslation: "Com licença, onde fica o banheiro?",
      },
      {
        english: "Nice to meet you",
        portuguese: "Prazer em conhecê-lo(a)",
        phonetic: "náis tu MIIT iú",
        example: "Nice to meet you, I'm Carlos.",
        exampleTranslation: "Prazer em conhecê-lo, eu sou o Carlos.",
      },
    ],
  },
  {
    slug: "food",
    title: "Comida e Bebida",
    description:
      "Vocabulário essencial para pedir comida, fazer compras e falar sobre alimentos.",
    level: "A1",
    icon: "🍽️",
    words: [
      {
        english: "Water",
        portuguese: "Água",
        phonetic: "UÓ-ter",
        example: "Can I have a glass of water?",
        exampleTranslation: "Posso ter um copo de água?",
      },
      {
        english: "Coffee",
        portuguese: "Café",
        phonetic: "CÓ-fi",
        example: "I drink coffee every morning.",
        exampleTranslation: "Eu bebo café toda manhã.",
      },
      {
        english: "Bread",
        portuguese: "Pão",
        phonetic: "bréd",
        example: "I would like some bread, please.",
        exampleTranslation: "Eu gostaria de um pouco de pão, por favor.",
      },
      {
        english: "Rice",
        portuguese: "Arroz",
        phonetic: "ráis",
        example: "We eat rice and beans for lunch.",
        exampleTranslation: "Nós comemos arroz e feijão no almoço.",
      },
      {
        english: "Chicken",
        portuguese: "Frango",
        phonetic: "TCHÍ-ken",
        example: "The grilled chicken is delicious.",
        exampleTranslation: "O frango grelhado está delicioso.",
      },
      {
        english: "Fruit",
        portuguese: "Fruta",
        phonetic: "fruut",
        example: "Eating fruit is good for your health.",
        exampleTranslation: "Comer fruta é bom para a saúde.",
      },
      {
        english: "Milk",
        portuguese: "Leite",
        phonetic: "mílk",
        example: "Do you want milk in your coffee?",
        exampleTranslation: "Você quer leite no seu café?",
      },
      {
        english: "Juice",
        portuguese: "Suco",
        phonetic: "djuus",
        example: "I would like an orange juice.",
        exampleTranslation: "Eu gostaria de um suco de laranja.",
      },
      {
        english: "Beef",
        portuguese: "Carne bovina",
        phonetic: "biif",
        example: "Brazil is famous for its beef.",
        exampleTranslation: "O Brasil é famoso pela sua carne bovina.",
      },
      {
        english: "Sugar",
        portuguese: "Açúcar",
        phonetic: "CHÚ-guer",
        example: "How many spoons of sugar do you want?",
        exampleTranslation: "Quantas colheres de açúcar você quer?",
      },
    ],
  },
  {
    slug: "travel",
    title: "Viagem",
    description:
      "Palavras e frases úteis para aeroportos, hotéis, transporte e turismo.",
    level: "A2",
    icon: "✈️",
    words: [
      {
        english: "Airport",
        portuguese: "Aeroporto",
        phonetic: "ÉR-port",
        example: "We need to arrive at the airport two hours early.",
        exampleTranslation:
          "Precisamos chegar ao aeroporto duas horas antes.",
      },
      {
        english: "Passport",
        portuguese: "Passaporte",
        phonetic: "PÁS-port",
        example: "Do not forget your passport at home.",
        exampleTranslation: "Não esqueça seu passaporte em casa.",
      },
      {
        english: "Hotel",
        portuguese: "Hotel",
        phonetic: "hou-TÉL",
        example: "I booked a hotel near the beach.",
        exampleTranslation: "Eu reservei um hotel perto da praia.",
      },
      {
        english: "Ticket",
        portuguese: "Passagem / Ingresso",
        phonetic: "TÍ-ket",
        example: "I already bought my plane ticket.",
        exampleTranslation: "Eu já comprei minha passagem de avião.",
      },
      {
        english: "Luggage",
        portuguese: "Bagagem",
        phonetic: "LÂ-guidj",
        example: "My luggage is very heavy.",
        exampleTranslation: "Minha bagagem está muito pesada.",
      },
      {
        english: "Flight",
        portuguese: "Voo",
        phonetic: "fláit",
        example: "The flight to New York takes ten hours.",
        exampleTranslation: "O voo para Nova York leva dez horas.",
      },
      {
        english: "Reservation",
        portuguese: "Reserva",
        phonetic: "ré-zer-VÊI-chan",
        example: "I have a reservation under the name Silva.",
        exampleTranslation: "Eu tenho uma reserva no nome Silva.",
      },
      {
        english: "Boarding pass",
        portuguese: "Cartão de embarque",
        phonetic: "BÓR-ding pés",
        example: "Please show your boarding pass at the gate.",
        exampleTranslation:
          "Por favor, mostre seu cartão de embarque no portão.",
      },
      {
        english: "Subway",
        portuguese: "Metrô",
        phonetic: "SÂB-uêi",
        example: "The subway is the fastest way to get downtown.",
        exampleTranslation:
          "O metrô é o jeito mais rápido de chegar ao centro.",
      },
      {
        english: "Customs",
        portuguese: "Alfândega",
        phonetic: "CÂS-toms",
        example: "You must declare items at customs.",
        exampleTranslation: "Você deve declarar itens na alfândega.",
      },
    ],
  },
  {
    slug: "work",
    title: "Trabalho",
    description:
      "Vocabulário profissional para o ambiente de escritório, reuniões e carreira.",
    level: "B1",
    icon: "💼",
    words: [
      {
        english: "Meeting",
        portuguese: "Reunião",
        phonetic: "MÍI-ting",
        example: "We have a meeting at 10 a.m.",
        exampleTranslation: "Nós temos uma reunião às 10h.",
      },
      {
        english: "Deadline",
        portuguese: "Prazo final",
        phonetic: "DÉD-lain",
        example: "The deadline for this project is Friday.",
        exampleTranslation: "O prazo final deste projeto é sexta-feira.",
      },
      {
        english: "Resume",
        portuguese: "Currículo",
        phonetic: "ré-zu-MÊI",
        example: "Please send your resume to our HR department.",
        exampleTranslation:
          "Por favor, envie seu currículo para o departamento de RH.",
      },
      {
        english: "Salary",
        portuguese: "Salário",
        phonetic: "SÉ-la-ri",
        example: "They offered me a good salary.",
        exampleTranslation: "Eles me ofereceram um bom salário.",
      },
      {
        english: "Interview",
        portuguese: "Entrevista",
        phonetic: "ÍN-ter-viú",
        example: "I have a job interview tomorrow morning.",
        exampleTranslation:
          "Eu tenho uma entrevista de emprego amanhã de manhã.",
      },
      {
        english: "Colleague",
        portuguese: "Colega de trabalho",
        phonetic: "CÓ-liig",
        example: "My colleague helped me with the report.",
        exampleTranslation:
          "Meu colega de trabalho me ajudou com o relatório.",
      },
      {
        english: "Promotion",
        portuguese: "Promoção (de cargo)",
        phonetic: "prou-MÔU-chan",
        example: "She got a promotion after two years.",
        exampleTranslation: "Ela conseguiu uma promoção depois de dois anos.",
      },
      {
        english: "Overtime",
        portuguese: "Hora extra",
        phonetic: "ÔU-ver-taim",
        example: "I worked overtime to finish the project.",
        exampleTranslation:
          "Eu fiz hora extra para terminar o projeto.",
      },
      {
        english: "Manager",
        portuguese: "Gerente",
        phonetic: "MÉ-na-djer",
        example: "The manager approved our budget.",
        exampleTranslation: "O gerente aprovou nosso orçamento.",
      },
      {
        english: "Experience",
        portuguese: "Experiência",
        phonetic: "eks-PÍ-ri-ens",
        example: "You need at least three years of experience.",
        exampleTranslation:
          "Você precisa de pelo menos três anos de experiência.",
      },
    ],
  },
];
