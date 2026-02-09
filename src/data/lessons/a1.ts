import { Lesson } from "../types";

export const lessonsA1: Lesson[] = [
  {
    slug: "greetings",
    title: "Cumprimentos e Saudações",
    description:
      "Aprenda a cumprimentar pessoas em inglês em diferentes situações do dia a dia.",
    level: "A1",
    icon: "👋",
    content: {
      introduction:
        "Cumprimentar alguém é o primeiro passo para qualquer conversa em inglês. Nesta lição, você vai aprender as saudações mais comuns usadas no dia a dia. Saber cumprimentar corretamente mostra educação e abre portas para novas amizades.",
      dialogue: [
        {
          speaker: "Anna",
          english: "Hello! Good morning!",
          portuguese: "Olá! Bom dia!",
        },
        {
          speaker: "Tom",
          english: "Hi, Anna! How are you?",
          portuguese: "Oi, Anna! Como você está?",
        },
        {
          speaker: "Anna",
          english: "I'm fine, thank you. And you?",
          portuguese: "Estou bem, obrigada. E você?",
        },
        {
          speaker: "Tom",
          english: "I'm great, thanks! Nice day, isn't it?",
          portuguese: "Estou ótimo, obrigado! Belo dia, não é?",
        },
        {
          speaker: "Anna",
          english: "Yes, it is! Well, see you later!",
          portuguese: "Sim! Bem, até mais tarde!",
        },
        {
          speaker: "Tom",
          english: "Goodbye, Anna! Have a nice day!",
          portuguese: "Tchau, Anna! Tenha um bom dia!",
        },
      ],
      vocabulary: [
        {
          english: "Hello",
          portuguese: "Olá",
          phonetic: "heh-LOU",
          example: "Hello, my name is Maria.",
        },
        {
          english: "Good morning",
          portuguese: "Bom dia",
          phonetic: "gud MOR-ning",
          example: "Good morning, teacher!",
        },
        {
          english: "Good afternoon",
          portuguese: "Boa tarde",
          phonetic: "gud af-ter-NUUN",
          example: "Good afternoon, everyone.",
        },
        {
          english: "Goodbye",
          portuguese: "Tchau / Adeus",
          phonetic: "gud-BAI",
          example: "Goodbye! See you tomorrow.",
        },
        {
          english: "How are you?",
          portuguese: "Como você está?",
          phonetic: "hau ar IU",
          example: "Hi, John! How are you?",
        },
      ],
      grammarTip: {
        title: "Saudações formais e informais",
        explanation:
          "Em inglês, 'Hello' é mais formal e pode ser usado em qualquer situação. 'Hi' é informal e usado entre amigos. 'Good morning' (bom dia), 'Good afternoon' (boa tarde) e 'Good evening' (boa noite ao chegar) são usados de acordo com o horário do dia. Para se despedir, 'Goodbye' é formal e 'Bye' é informal.",
      },
      miniExercise: {
        question: "Qual é a forma correta de dizer 'Bom dia' em inglês?",
        options: ["Good night", "Good morning", "Good bye", "Good evening"],
        correctIndex: 1,
        explanation:
          "'Good morning' significa 'Bom dia' e é usado pela manhã. 'Good night' é 'Boa noite' (ao se despedir), 'Good evening' é 'Boa noite' (ao chegar) e 'Goodbye' é 'Tchau'.",
      },
    },
  },
  {
    slug: "introducing-yourself",
    title: "Apresentando-se",
    description:
      "Aprenda a se apresentar em inglês dizendo seu nome, idade e de onde você é.",
    level: "A1",
    icon: "🙋",
    content: {
      introduction:
        "Saber se apresentar é essencial em qualquer idioma. Nesta lição, você vai aprender a dizer seu nome, sua idade e de onde você é. Essas frases são usadas o tempo todo quando conhecemos pessoas novas.",
      dialogue: [
        {
          speaker: "Lucas",
          english: "Hi! My name is Lucas. What's your name?",
          portuguese: "Oi! Meu nome é Lucas. Qual é o seu nome?",
        },
        {
          speaker: "Sarah",
          english: "Hello! I'm Sarah. Nice to meet you!",
          portuguese: "Olá! Eu sou Sarah. Prazer em conhecê-lo!",
        },
        {
          speaker: "Lucas",
          english: "Nice to meet you too! Where are you from?",
          portuguese: "Prazer em conhecê-la também! De onde você é?",
        },
        {
          speaker: "Sarah",
          english: "I'm from the United States. And you?",
          portuguese: "Eu sou dos Estados Unidos. E você?",
        },
        {
          speaker: "Lucas",
          english: "I'm from Brazil. I'm twenty-five years old.",
          portuguese: "Eu sou do Brasil. Eu tenho vinte e cinco anos.",
        },
        {
          speaker: "Sarah",
          english: "Oh, cool! I'm twenty-three. I love Brazil!",
          portuguese: "Ah, legal! Eu tenho vinte e três. Eu amo o Brasil!",
        },
      ],
      vocabulary: [
        {
          english: "My name is...",
          portuguese: "Meu nome é...",
          phonetic: "mai nêim iz",
          example: "My name is Pedro.",
        },
        {
          english: "I am from...",
          portuguese: "Eu sou de...",
          phonetic: "ai am from",
          example: "I am from São Paulo.",
        },
        {
          english: "Nice to meet you",
          portuguese: "Prazer em conhecê-lo(a)",
          phonetic: "náis tu miit iu",
          example: "Hi, I'm Ana. Nice to meet you!",
        },
        {
          english: "How old are you?",
          portuguese: "Quantos anos você tem?",
          phonetic: "hau old ar iu",
          example: "How old are you? I'm thirty.",
        },
        {
          english: "Where are you from?",
          portuguese: "De onde você é?",
          phonetic: "uér ar iu from",
          example: "Where are you from? I'm from Rio.",
        },
      ],
      grammarTip: {
        title: "Verbo 'To Be' para apresentações",
        explanation:
          "O verbo 'to be' (ser/estar) é fundamental para se apresentar. Use 'I am' (ou 'I'm') para falar sobre você: 'I am Lucas' (Eu sou Lucas), 'I am from Brazil' (Eu sou do Brasil), 'I am 25 years old' (Eu tenho 25 anos). Note que em inglês usamos 'I am' para idade, diferente do português que usa 'Eu tenho'.",
      },
      miniExercise: {
        question:
          "Como você diz 'Eu sou do Brasil' em inglês?",
        options: [
          "I have from Brazil",
          "I am from Brazil",
          "I is from Brazil",
          "I from Brazil am",
        ],
        correctIndex: 1,
        explanation:
          "'I am from Brazil' é a forma correta. Usamos 'I am' (eu sou) + 'from' (de) + o lugar. 'I have' significa 'eu tenho' e não se usa para indicar origem.",
      },
    },
  },
  {
    slug: "numbers",
    title: "Números",
    description:
      "Aprenda os números em inglês de 1 a 100, incluindo como usá-los para telefone e idade.",
    level: "A1",
    icon: "🔢",
    content: {
      introduction:
        "Os números são usados em todas as situações do dia a dia: para dizer sua idade, dar seu telefone, falar preços e muito mais. Nesta lição, você vai aprender os números de 1 a 100 e como usá-los em contextos reais.",
      dialogue: [
        {
          speaker: "Clerk",
          english: "What's your phone number, please?",
          portuguese: "Qual é o seu número de telefone, por favor?",
        },
        {
          speaker: "Maria",
          english: "It's five, five, one, two, three, four, five, six, seven, eight.",
          portuguese: "É cinco, cinco, um, dois, três, quatro, cinco, seis, sete, oito.",
        },
        {
          speaker: "Clerk",
          english: "Thank you. And how old are you?",
          portuguese: "Obrigado. E quantos anos você tem?",
        },
        {
          speaker: "Maria",
          english: "I'm thirty-two years old.",
          portuguese: "Eu tenho trinta e dois anos.",
        },
        {
          speaker: "Clerk",
          english: "Perfect. And what's your address number?",
          portuguese: "Perfeito. E qual é o número do seu endereço?",
        },
        {
          speaker: "Maria",
          english: "It's one hundred, Main Street.",
          portuguese: "É cem, Rua Principal.",
        },
      ],
      vocabulary: [
        {
          english: "One, two, three",
          portuguese: "Um, dois, três",
          phonetic: "uan, tu, thrii",
          example: "I have three brothers.",
        },
        {
          english: "Ten",
          portuguese: "Dez",
          phonetic: "tén",
          example: "There are ten students in class.",
        },
        {
          english: "Twenty",
          portuguese: "Vinte",
          phonetic: "TUEN-ti",
          example: "She is twenty years old.",
        },
        {
          english: "Fifty",
          portuguese: "Cinquenta",
          phonetic: "FIF-ti",
          example: "The book costs fifty dollars.",
        },
        {
          english: "One hundred",
          portuguese: "Cem",
          phonetic: "uan RAN-dred",
          example: "There are one hundred pages in this book.",
        },
      ],
      grammarTip: {
        title: "Formando números compostos",
        explanation:
          "Em inglês, os números compostos de 21 a 99 são formados com um hífen: twenty-one (21), thirty-five (35), forty-eight (48), sixty-two (62), ninety-nine (99). Para números de telefone, dizemos cada dígito separadamente: 9876 = nine, eight, seven, six. O número zero pode ser dito como 'zero' ou 'oh' (ôu).",
      },
      miniExercise: {
        question: "Como se escreve o número 47 em inglês?",
        options: [
          "Fourty-seven",
          "Forty-seven",
          "Four-seven",
          "Fortyseven",
        ],
        correctIndex: 1,
        explanation:
          "'Forty-seven' é a grafia correta. Atenção: 'forty' NÃO tem a letra 'u', diferente de 'four'. Os números compostos de 21 a 99 são sempre escritos com hífen.",
      },
    },
  },
  {
    slug: "colors-and-shapes",
    title: "Cores e Formas",
    description:
      "Aprenda as cores e formas geométricas em inglês para descrever objetos ao seu redor.",
    level: "A1",
    icon: "🎨",
    content: {
      introduction:
        "As cores e formas estão em toda parte! Saber nomeá-las em inglês ajuda a descrever objetos, roupas e muito mais. Nesta lição, você vai aprender as cores e formas mais comuns usadas no dia a dia.",
      dialogue: [
        {
          speaker: "Teacher",
          english: "What color is this ball?",
          portuguese: "De que cor é esta bola?",
        },
        {
          speaker: "Student",
          english: "It's red! And it's a circle.",
          portuguese: "É vermelha! E é um círculo.",
        },
        {
          speaker: "Teacher",
          english: "Very good! And what shape is the window?",
          portuguese: "Muito bom! E qual é a forma da janela?",
        },
        {
          speaker: "Student",
          english: "The window is a square. It's white.",
          portuguese: "A janela é um quadrado. Ela é branca.",
        },
        {
          speaker: "Teacher",
          english: "Excellent! What about the door? What color is it?",
          portuguese: "Excelente! E a porta? De que cor ela é?",
        },
        {
          speaker: "Student",
          english: "The door is brown. It's a rectangle.",
          portuguese: "A porta é marrom. É um retângulo.",
        },
      ],
      vocabulary: [
        {
          english: "Red",
          portuguese: "Vermelho",
          phonetic: "réd",
          example: "The apple is red.",
        },
        {
          english: "Blue",
          portuguese: "Azul",
          phonetic: "bluu",
          example: "The sky is blue today.",
        },
        {
          english: "Circle",
          portuguese: "Círculo",
          phonetic: "SÊR-kel",
          example: "The clock is a circle.",
        },
        {
          english: "Square",
          portuguese: "Quadrado",
          phonetic: "skuér",
          example: "The box is a square.",
        },
        {
          english: "Green",
          portuguese: "Verde",
          phonetic: "griin",
          example: "The grass is green.",
        },
      ],
      grammarTip: {
        title: "Posição dos adjetivos de cor",
        explanation:
          "Em inglês, a cor sempre vem ANTES do substantivo: 'a red car' (um carro vermelho), 'a blue sky' (um céu azul), 'a green tree' (uma árvore verde). Isso é o oposto do português, onde a cor geralmente vem depois. Para perguntar a cor, diga: 'What color is it?' (Que cor é?).",
      },
      miniExercise: {
        question: "Qual a forma correta de dizer 'uma casa amarela'?",
        options: [
          "A house yellow",
          "A yellow house",
          "Yellow a house",
          "A house is yellow",
        ],
        correctIndex: 1,
        explanation:
          "Em inglês, o adjetivo (cor) vem antes do substantivo: 'a yellow house'. Em português dizemos 'uma casa amarela' (substantivo + cor), mas em inglês a ordem é invertida.",
      },
    },
  },
  {
    slug: "family-members",
    title: "Membros da Família",
    description:
      "Aprenda a falar sobre sua família em inglês: pais, irmãos, avós e outros parentes.",
    level: "A1",
    icon: "👨‍👩‍👧‍👦",
    content: {
      introduction:
        "A família é um dos temas mais comuns em conversas. Nesta lição, você vai aprender os nomes dos membros da família em inglês. Isso vai ajudá-lo a falar sobre as pessoas mais importantes da sua vida em qualquer conversa.",
      dialogue: [
        {
          speaker: "Emma",
          english: "Do you have a big family, Carlos?",
          portuguese: "Você tem uma família grande, Carlos?",
        },
        {
          speaker: "Carlos",
          english: "Yes! I have two brothers and one sister.",
          portuguese: "Sim! Eu tenho dois irmãos e uma irmã.",
        },
        {
          speaker: "Emma",
          english: "That's nice! Do you live with your parents?",
          portuguese: "Que legal! Você mora com seus pais?",
        },
        {
          speaker: "Carlos",
          english: "I live with my mother. My father works in another city.",
          portuguese: "Eu moro com minha mãe. Meu pai trabalha em outra cidade.",
        },
        {
          speaker: "Emma",
          english: "What about your grandparents?",
          portuguese: "E seus avós?",
        },
        {
          speaker: "Carlos",
          english: "My grandmother lives near us. She is seventy years old.",
          portuguese: "Minha avó mora perto de nós. Ela tem setenta anos.",
        },
      ],
      vocabulary: [
        {
          english: "Mother",
          portuguese: "Mãe",
          phonetic: "MÁ-dher",
          example: "My mother is a teacher.",
        },
        {
          english: "Father",
          portuguese: "Pai",
          phonetic: "FÁ-dher",
          example: "My father works at a hospital.",
        },
        {
          english: "Sister",
          portuguese: "Irmã",
          phonetic: "SIS-ter",
          example: "My sister is twelve years old.",
        },
        {
          english: "Brother",
          portuguese: "Irmão",
          phonetic: "BRÁ-dher",
          example: "I have one older brother.",
        },
        {
          english: "Grandmother",
          portuguese: "Avó",
          phonetic: "GRAND-má-dher",
          example: "My grandmother makes great cake.",
        },
      ],
      grammarTip: {
        title: "Pronomes possessivos (my, your, his, her)",
        explanation:
          "Para falar sobre família, usamos pronomes possessivos: 'my' (meu/minha), 'your' (seu/sua), 'his' (dele), 'her' (dela). Diferente do português, eles NÃO mudam com o gênero do substantivo: 'my mother' (minha mãe), 'my father' (meu pai) — sempre 'my'. O mesmo vale para 'his' e 'her': 'his sister' (irmã dele), 'her brother' (irmão dela).",
      },
      miniExercise: {
        question:
          "Como você diz 'O irmão dela tem dez anos' em inglês?",
        options: [
          "His brother is ten years old.",
          "Her brother is ten years old.",
          "She brother is ten years old.",
          "Her brother has ten years old.",
        ],
        correctIndex: 1,
        explanation:
          "'Her brother is ten years old' é o correto. Usamos 'her' porque estamos falando do irmão DELA. E em inglês usamos 'is ... years old' (é/está ... anos) em vez de 'has' (tem) para falar de idade.",
      },
    },
  },
  {
    slug: "days-and-months",
    title: "Dias e Meses",
    description:
      "Aprenda os dias da semana, meses do ano e como falar sobre datas em inglês.",
    level: "A1",
    icon: "📅",
    content: {
      introduction:
        "Saber os dias da semana e os meses é fundamental para marcar compromissos, falar sobre aniversários e organizar sua agenda. Nesta lição, você vai aprender tudo isso em inglês e também como dizer datas completas.",
      dialogue: [
        {
          speaker: "Jane",
          english: "What day is it today?",
          portuguese: "Que dia é hoje?",
        },
        {
          speaker: "Mark",
          english: "Today is Monday, October fifteenth.",
          portuguese: "Hoje é segunda-feira, quinze de outubro.",
        },
        {
          speaker: "Jane",
          english: "When is your birthday?",
          portuguese: "Quando é seu aniversário?",
        },
        {
          speaker: "Mark",
          english: "My birthday is on March third.",
          portuguese: "Meu aniversário é em três de março.",
        },
        {
          speaker: "Jane",
          english: "Nice! Do you have class on Wednesdays?",
          portuguese: "Legal! Você tem aula nas quartas-feiras?",
        },
        {
          speaker: "Mark",
          english: "Yes, I have English class on Wednesdays and Fridays.",
          portuguese: "Sim, eu tenho aula de inglês nas quartas e sextas.",
        },
      ],
      vocabulary: [
        {
          english: "Monday",
          portuguese: "Segunda-feira",
          phonetic: "MAN-dei",
          example: "I start work on Monday.",
        },
        {
          english: "Friday",
          portuguese: "Sexta-feira",
          phonetic: "FRAI-dei",
          example: "Friday is my favorite day!",
        },
        {
          english: "January",
          portuguese: "Janeiro",
          phonetic: "DJÉN-iu-éri",
          example: "January is the first month of the year.",
        },
        {
          english: "December",
          portuguese: "Dezembro",
          phonetic: "di-SÉM-ber",
          example: "Christmas is in December.",
        },
        {
          english: "Birthday",
          portuguese: "Aniversário",
          phonetic: "BÊRTH-dei",
          example: "My birthday is in July.",
        },
      ],
      grammarTip: {
        title: "Preposições de tempo: IN, ON, AT",
        explanation:
          "Use 'on' para dias e datas: 'on Monday' (na segunda), 'on March 3rd' (em 3 de março). Use 'in' para meses e anos: 'in January' (em janeiro), 'in 2024' (em 2024). Use 'at' para horas: 'at 3 o'clock' (às 3 horas). Lembre-se: dias da semana e meses SEMPRE com letra maiúscula em inglês!",
      },
      miniExercise: {
        question: "Qual é a preposição correta: 'My birthday is ___ July'?",
        options: ["on", "in", "at", "to"],
        correctIndex: 1,
        explanation:
          "Usamos 'in' para meses: 'in July' (em julho), 'in January' (em janeiro). Se fosse uma data específica, usaríamos 'on': 'on July 5th'. Para horas, usamos 'at'.",
      },
    },
  },
  {
    slug: "classroom-objects",
    title: "Objetos da Sala de Aula",
    description:
      "Aprenda o nome dos objetos escolares em inglês como livro, caneta, caderno e mais.",
    level: "A1",
    icon: "📚",
    content: {
      introduction:
        "Conhecer o vocabulário da sala de aula é muito útil, especialmente se você pretende estudar ou trabalhar em ambientes de língua inglesa. Nesta lição, você vai aprender os nomes dos objetos mais comuns encontrados em uma sala de aula.",
      dialogue: [
        {
          speaker: "Teacher",
          english: "Please open your books to page ten.",
          portuguese: "Por favor, abram seus livros na página dez.",
        },
        {
          speaker: "Student",
          english: "Teacher, I don't have a pen. Can I borrow one?",
          portuguese: "Professora, eu não tenho uma caneta. Posso pegar uma emprestada?",
        },
        {
          speaker: "Teacher",
          english: "Of course! There's a pen on my desk.",
          portuguese: "Claro! Tem uma caneta na minha mesa.",
        },
        {
          speaker: "Student",
          english: "Thank you! Do I need a notebook too?",
          portuguese: "Obrigado! Eu preciso de um caderno também?",
        },
        {
          speaker: "Teacher",
          english: "Yes, please write in your notebook.",
          portuguese: "Sim, por favor escreva no seu caderno.",
        },
        {
          speaker: "Student",
          english: "OK! I'll also use my eraser and ruler.",
          portuguese: "OK! Eu também vou usar minha borracha e régua.",
        },
      ],
      vocabulary: [
        {
          english: "Book",
          portuguese: "Livro",
          phonetic: "buk",
          example: "This book is very interesting.",
        },
        {
          english: "Pen",
          portuguese: "Caneta",
          phonetic: "pén",
          example: "I need a blue pen, please.",
        },
        {
          english: "Desk",
          portuguese: "Mesa / Carteira",
          phonetic: "désk",
          example: "Put your books on the desk.",
        },
        {
          english: "Notebook",
          portuguese: "Caderno",
          phonetic: "NÔUT-buk",
          example: "I write my notes in my notebook.",
        },
        {
          english: "Eraser",
          portuguese: "Borracha",
          phonetic: "i-RÊI-zer",
          example: "Can I use your eraser?",
        },
      ],
      grammarTip: {
        title: "Artigos: A, AN e THE",
        explanation:
          "Em inglês, usamos 'a' antes de palavras que começam com som de consoante: 'a book' (um livro), 'a pen' (uma caneta). Usamos 'an' antes de palavras que começam com som de vogal: 'an eraser' (uma borracha), 'an apple' (uma maçã). 'The' é usado quando falamos de algo específico: 'the book on the desk' (o livro na mesa).",
      },
      miniExercise: {
        question: "Qual é o artigo correto: '___ eraser is on the desk'?",
        options: ["A", "An", "The", "This"],
        correctIndex: 2,
        explanation:
          "'The eraser is on the desk' — usamos 'the' porque estamos falando de uma borracha específica (a que está na mesa). Se fosse qualquer borracha, usaríamos 'An eraser' porque 'eraser' começa com som de vogal.",
      },
    },
  },
  {
    slug: "food-and-drinks",
    title: "Comida e Bebida",
    description:
      "Aprenda o nome de alimentos e bebidas comuns em inglês para situações do dia a dia.",
    level: "A1",
    icon: "🍽️",
    content: {
      introduction:
        "Comida e bebida são assuntos universais! Saber falar sobre alimentos em inglês é útil em viagens, restaurantes e até para ler cardápios. Nesta lição, você vai aprender o vocabulário básico de comidas e bebidas mais comuns.",
      dialogue: [
        {
          speaker: "Ana",
          english: "I'm hungry. What do we have for lunch?",
          portuguese: "Estou com fome. O que temos para o almoço?",
        },
        {
          speaker: "Pedro",
          english: "We have rice, beans, and chicken.",
          portuguese: "Temos arroz, feijão e frango.",
        },
        {
          speaker: "Ana",
          english: "Great! I love chicken. Do we have juice?",
          portuguese: "Ótimo! Eu amo frango. Temos suco?",
        },
        {
          speaker: "Pedro",
          english: "Yes, we have orange juice. Do you want water too?",
          portuguese: "Sim, temos suco de laranja. Você quer água também?",
        },
        {
          speaker: "Ana",
          english: "Yes, please. And coffee after lunch?",
          portuguese: "Sim, por favor. E café depois do almoço?",
        },
        {
          speaker: "Pedro",
          english: "Of course! I always drink coffee after lunch.",
          portuguese: "Claro! Eu sempre tomo café depois do almoço.",
        },
      ],
      vocabulary: [
        {
          english: "Water",
          portuguese: "Água",
          phonetic: "UÓ-ter",
          example: "Can I have a glass of water, please?",
        },
        {
          english: "Bread",
          portuguese: "Pão",
          phonetic: "bréd",
          example: "I eat bread for breakfast.",
        },
        {
          english: "Rice",
          portuguese: "Arroz",
          phonetic: "ráis",
          example: "Rice and beans is a Brazilian classic.",
        },
        {
          english: "Coffee",
          portuguese: "Café",
          phonetic: "KÓ-fi",
          example: "I drink coffee every morning.",
        },
        {
          english: "Chicken",
          portuguese: "Frango",
          phonetic: "TCHÍ-ken",
          example: "Grilled chicken is delicious.",
        },
      ],
      grammarTip: {
        title: "Substantivos contáveis e incontáveis",
        explanation:
          "Em inglês, alguns alimentos são 'contáveis' (podemos contar: an apple, two oranges) e outros são 'incontáveis' (não podemos contar diretamente: water, rice, bread, coffee). Para incontáveis, NÃO usamos 'a/an'. Dizemos 'some water' (um pouco de água), 'a glass of water' (um copo de água), 'a cup of coffee' (uma xícara de café).",
      },
      miniExercise: {
        question: "Qual frase está correta?",
        options: [
          "I want a water.",
          "I want a glass of water.",
          "I want two waters.",
          "I want an water.",
        ],
        correctIndex: 1,
        explanation:
          "'I want a glass of water' é o correto porque 'water' é um substantivo incontável. Não podemos dizer 'a water' diretamente. Precisamos usar um recipiente: 'a glass of water' (um copo de água), 'a bottle of water' (uma garrafa de água).",
      },
    },
  },
  {
    slug: "daily-routine",
    title: "Rotina Diária",
    description:
      "Aprenda a descrever sua rotina diária em inglês: desde acordar até dormir.",
    level: "A1",
    icon: "⏰",
    content: {
      introduction:
        "Falar sobre sua rotina é uma das conversas mais comuns em inglês. Nesta lição, você vai aprender os verbos e expressões usados para descrever as atividades que fazemos todos os dias, desde a hora de acordar até a hora de dormir.",
      dialogue: [
        {
          speaker: "Lisa",
          english: "What time do you wake up, João?",
          portuguese: "A que horas você acorda, João?",
        },
        {
          speaker: "João",
          english: "I wake up at seven o'clock. Then I brush my teeth.",
          portuguese: "Eu acordo às sete horas. Depois eu escovo os dentes.",
        },
        {
          speaker: "Lisa",
          english: "Do you eat breakfast at home?",
          portuguese: "Você toma café da manhã em casa?",
        },
        {
          speaker: "João",
          english: "Yes, I have bread and coffee. Then I go to school.",
          portuguese: "Sim, eu como pão e café. Depois eu vou para a escola.",
        },
        {
          speaker: "Lisa",
          english: "What time do you go to bed?",
          portuguese: "A que horas você vai dormir?",
        },
        {
          speaker: "João",
          english: "I go to bed at ten o'clock. I always read before sleeping.",
          portuguese: "Eu vou dormir às dez horas. Eu sempre leio antes de dormir.",
        },
      ],
      vocabulary: [
        {
          english: "Wake up",
          portuguese: "Acordar",
          phonetic: "uêik ap",
          example: "I wake up early every day.",
        },
        {
          english: "Brush my teeth",
          portuguese: "Escovar os dentes",
          phonetic: "brash mai tiith",
          example: "I brush my teeth after breakfast.",
        },
        {
          english: "Go to school",
          portuguese: "Ir para a escola",
          phonetic: "gôu tu skuul",
          example: "I go to school by bus.",
        },
        {
          english: "Have lunch",
          portuguese: "Almoçar",
          phonetic: "hév lantch",
          example: "I have lunch at noon.",
        },
        {
          english: "Go to bed",
          portuguese: "Ir dormir",
          phonetic: "gôu tu béd",
          example: "I go to bed at ten o'clock.",
        },
      ],
      grammarTip: {
        title: "Presente Simples para rotinas",
        explanation:
          "Usamos o Presente Simples (Simple Present) para falar sobre rotinas e hábitos. Com 'I/you/we/they', o verbo fica na forma base: 'I wake up', 'I go to school'. Com 'he/she/it', adicionamos -s ou -es ao verbo: 'He wakes up', 'She goes to school'. Para perguntas, usamos 'Do you...?' ou 'Does he/she...?'.",
      },
      miniExercise: {
        question: "Complete: 'She ___ to school every day.'",
        options: ["go", "goes", "going", "gos"],
        correctIndex: 1,
        explanation:
          "Com 'she' (ela), o verbo recebe -es: 'She goes'. A regra é: verbos terminados em -o, -s, -sh, -ch, -x recebem -es na terceira pessoa. 'Go' vira 'goes', não 'gos'. Com 'I/you/we/they', seria apenas 'go'.",
      },
    },
  },
  {
    slug: "parts-of-the-body",
    title: "Partes do Corpo",
    description:
      "Aprenda as partes do corpo humano em inglês: cabeça, braços, mãos e muito mais.",
    level: "A1",
    icon: "🧍",
    content: {
      introduction:
        "Saber as partes do corpo em inglês é essencial, especialmente em situações de saúde, esportes ou simplesmente para descrever alguém. Nesta lição, você vai aprender as partes do corpo mais importantes e como usá-las em frases simples.",
      dialogue: [
        {
          speaker: "Doctor",
          english: "Where does it hurt?",
          portuguese: "Onde dói?",
        },
        {
          speaker: "Patient",
          english: "My head hurts. I have a headache.",
          portuguese: "Minha cabeça dói. Estou com dor de cabeça.",
        },
        {
          speaker: "Doctor",
          english: "I see. Does your neck hurt too?",
          portuguese: "Entendo. Seu pescoço dói também?",
        },
        {
          speaker: "Patient",
          english: "Yes, and my right arm feels weak.",
          portuguese: "Sim, e meu braço direito está fraco.",
        },
        {
          speaker: "Doctor",
          english: "Can you touch your toes with your hands?",
          portuguese: "Você consegue tocar os dedos dos pés com as mãos?",
        },
        {
          speaker: "Patient",
          english: "Yes, but my legs hurt a little.",
          portuguese: "Sim, mas minhas pernas doem um pouco.",
        },
      ],
      vocabulary: [
        {
          english: "Head",
          portuguese: "Cabeça",
          phonetic: "héd",
          example: "I'm wearing a hat on my head.",
        },
        {
          english: "Arm",
          portuguese: "Braço",
          phonetic: "arm",
          example: "I broke my arm last year.",
        },
        {
          english: "Hand",
          portuguese: "Mão",
          phonetic: "hénd",
          example: "Raise your hand if you know the answer.",
        },
        {
          english: "Leg",
          portuguese: "Perna",
          phonetic: "lég",
          example: "My legs are tired from running.",
        },
        {
          english: "Eye",
          portuguese: "Olho",
          phonetic: "ái",
          example: "She has beautiful blue eyes.",
        },
      ],
      grammarTip: {
        title: "Plural das partes do corpo",
        explanation:
          "A maioria das partes do corpo segue o plural regular com -s: arm/arms, leg/legs, hand/hands, eye/eyes. Mas algumas têm plural irregular: foot/feet (pé/pés), tooth/teeth (dente/dentes). Atenção: 'hair' (cabelo) geralmente é incontável em inglês — dizemos 'My hair is long' (meu cabelo é comprido), não 'my hairs'.",
      },
      miniExercise: {
        question: "Qual é o plural correto de 'foot' (pé)?",
        options: ["Foots", "Feets", "Feet", "Foot"],
        correctIndex: 2,
        explanation:
          "'Feet' é o plural irregular de 'foot'. Assim como 'tooth' vira 'teeth'. Esses são plurais irregulares que precisamos memorizar. Não seguem a regra de adicionar -s.",
      },
    },
  },
];
