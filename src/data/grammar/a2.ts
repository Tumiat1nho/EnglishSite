import { GrammarTopic } from "../types";

export const grammarA2: GrammarTopic[] = [
  {
    slug: "simple-past",
    title: "Passado Simples (worked, went, did)",
    description:
      "Aprenda a falar sobre ações que aconteceram e terminaram no passado usando o Simple Past em inglês.",
    level: "A2",
    icon: "⏪",
    content: {
      explanation: `O Simple Past (Passado Simples) é usado para falar de ações que aconteceram e TERMINARAM no passado, em um momento específico. É equivalente ao pretérito perfeito do português ("eu trabalhei", "ela foi", "nós comemos"). É um dos tempos verbais mais usados em inglês.

**Verbos Regulares:**
Para formar o passado de verbos regulares, adicionamos "-ed" ao verbo base.

| Regra | Verbo → Passado | Exemplo |
|-------|----------------|---------|
| Maioria: +ed | work → worked | I worked yesterday. (Eu trabalhei ontem.) |
| Terminados em -e: +d | live → lived | She lived in London. (Ela morou em Londres.) |
| Consoante + y: troca y por ied | study → studied | He studied all night. (Ele estudou a noite toda.) |
| CVC (consoante-vogal-consoante curta): dobra a última | stop → stopped | The bus stopped here. (O ônibus parou aqui.) |

**Verbos Irregulares (os mais comuns):**
Estes verbos NÃO seguem a regra do "-ed". Precisam ser memorizados!

| Base | Passado | Tradução |
|------|---------|----------|
| go | went | ir |
| be | was/were | ser/estar |
| have | had | ter |
| do | did | fazer |
| see | saw | ver |
| eat | ate | comer |
| come | came | vir |
| make | made | fazer/fabricar |
| take | took | pegar/levar |
| buy | bought | comprar |
| get | got | obter/conseguir |
| say | said | dizer |
| know | knew | saber/conhecer |
| think | thought | pensar |
| give | gave | dar |

**Forma Negativa:**
Usamos DID NOT (didn't) + verbo na forma base (sem -ed, sem forma irregular).
- I didn't work yesterday. (Eu não trabalhei ontem.)
- She didn't go to school. (Ela não foi à escola.)

**Forma Interrogativa:**
Usamos DID + sujeito + verbo na forma base.
- Did you work yesterday? (Você trabalhou ontem?)
- Did she go to school? (Ela foi à escola?)

**Importante:** "Was" e "Were" (passado do verbo to be):
- I/He/She/It → was: "I was tired." (Eu estava cansado.)
- You/We/They → were: "They were happy." (Eles estavam felizes.)
- Negativo: was not (wasn't) / were not (weren't)
- Interrogativo: Was he...? / Were they...?`,
      examples: [
        {
          english: "I worked until 10 p.m. last night.",
          portuguese: "Eu trabalhei até as 22h ontem à noite.",
          highlight: "worked",
        },
        {
          english: "She went to Paris last summer.",
          portuguese: "Ela foi a Paris no verão passado.",
          highlight: "went",
        },
        {
          english: "Did you see the movie?",
          portuguese: "Você viu o filme?",
          highlight: "Did",
        },
        {
          english: "They didn't come to the party.",
          portuguese: "Eles não vieram à festa.",
          highlight: "didn't come",
        },
        {
          english: "We were very happy yesterday.",
          portuguese: "Nós estávamos muito felizes ontem.",
          highlight: "were",
        },
      ],
      commonMistakes: [
        {
          wrong: "She didn't went to school.",
          correct: "She didn't go to school.",
          explanation:
            'Quando usamos "didn\'t", o verbo principal volta para a forma base (sem -ed, sem forma irregular). O "did" já carrega a informação de passado.',
        },
        {
          wrong: "Did you went to the party?",
          correct: "Did you go to the party?",
          explanation:
            'Em perguntas com "did", o verbo principal fica na forma base. Nunca combine "did" com verbo no passado. "Did" + forma base sempre.',
        },
        {
          wrong: "I was go to the store yesterday.",
          correct: "I went to the store yesterday.",
          explanation:
            'Não misture "was" com outro verbo no passado simples. "Was/were" são o passado de "to be" e são usados sozinhos ou com o gerúndio (past continuous). Para ações completas, use apenas o verbo no passado.',
        },
      ],
      tip: 'Dica prática: Para os verbos regulares, a regra é simples: adicione "-ed". O desafio é memorizar os verbos irregulares. Comece pelos 20 mais comuns (go/went, have/had, do/did, see/saw, come/came) e vá adicionando mais aos poucos. Lembre-se: "didn\'t" e "did" sempre pedem o verbo na forma base!',
    },
  },
  {
    slug: "present-continuous",
    title: "Presente Contínuo (I am working, She is reading)",
    description:
      "Aprenda a usar o Present Continuous para falar sobre ações que estão acontecendo agora ou planos futuros próximos.",
    level: "A2",
    icon: "🔄",
    content: {
      explanation: `O Present Continuous (Presente Contínuo), também chamado de Present Progressive, é usado para falar de ações que estão acontecendo AGORA, neste momento, ou de planos/arranjos futuros já definidos. É equivalente ao gerúndio em português ("estou fazendo", "está comendo", "estamos estudando").

**Estrutura:**
Sujeito + verbo TO BE (am/is/are) + verbo com -ING

| Pronome | Estrutura | Exemplo |
|---------|-----------|---------|
| I | am + verbo-ing | I am working. (Eu estou trabalhando.) |
| You | are + verbo-ing | You are reading. (Você está lendo.) |
| He/She/It | is + verbo-ing | She is cooking. (Ela está cozinhando.) |
| We | are + verbo-ing | We are studying. (Nós estamos estudando.) |
| They | are + verbo-ing | They are playing. (Eles estão jogando.) |

**Regras para adicionar -ING:**

| Regra | Exemplo |
|-------|---------|
| Maioria: +ing | work → working, eat → eating |
| Terminados em -e: tira o e + ing | make → making, live → living, write → writing |
| CVC curta: dobra a última + ing | run → running, swim → swimming, sit → sitting |
| Terminados em -ie: troca ie por y + ing | die → dying, lie → lying, tie → tying |

**Forma Negativa:**
Sujeito + am/is/are + NOT + verbo-ing
- I am not (I'm not) working.
- She is not (isn't) sleeping.
- They are not (aren't) listening.

**Forma Interrogativa:**
Am/Is/Are + sujeito + verbo-ing?
- Are you listening? (Você está ouvindo?)
- Is she sleeping? (Ela está dormindo?)

**Quando usar o Present Continuous:**
1. Ações acontecendo AGORA: "I am reading a book." (Estou lendo um livro neste momento.)
2. Ações temporárias: "She is living in London this year." (Ela está morando em Londres este ano.)
3. Planos futuros definidos: "We are traveling tomorrow." (Nós vamos viajar amanhã.)
4. Mudanças e tendências: "The weather is getting colder." (O tempo está ficando mais frio.)

**Verbos que NÃO usamos no continuous (stative verbs):**
Alguns verbos expressam estados, não ações, e normalmente NÃO são usados com -ing:
- know, believe, understand, remember, want, need, like, love, hate, prefer, belong, own, seem, mean`,
      examples: [
        {
          english: "I am studying English right now.",
          portuguese: "Eu estou estudando inglês agora mesmo.",
          highlight: "am studying",
        },
        {
          english: "She is cooking dinner in the kitchen.",
          portuguese: "Ela está cozinhando o jantar na cozinha.",
          highlight: "is cooking",
        },
        {
          english: "Are you listening to me?",
          portuguese: "Você está me ouvindo?",
          highlight: "Are you listening",
        },
        {
          english: "They aren't working today.",
          portuguese: "Eles não estão trabalhando hoje.",
          highlight: "aren't working",
        },
        {
          english: "We are meeting John tomorrow at 5.",
          portuguese: "Nós vamos encontrar o John amanhã às 5.",
          highlight: "are meeting",
        },
      ],
      commonMistakes: [
        {
          wrong: "I am understand the lesson.",
          correct: "I understand the lesson.",
          explanation:
            '"Understand" é um verbo de estado (stative verb) e normalmente não é usado com -ing. Use o Simple Present: "I understand", não "I am understanding".',
        },
        {
          wrong: "She is makeing a cake.",
          correct: "She is making a cake.",
          explanation:
            'Verbos terminados em "-e" perdem o "e" antes de adicionar "-ing": make → making, write → writing, live → living. Não mantenha o "e".',
        },
        {
          wrong: "He is runing in the park.",
          correct: "He is running in the park.",
          explanation:
            'Verbos curtos terminados em consoante-vogal-consoante (CVC) dobram a última consoante antes de "-ing": run → running, swim → swimming, sit → sitting.',
        },
      ],
      tip: 'Dica prática: Para diferenciar Simple Present e Present Continuous, pergunte-se: "isso acontece AGORA neste exato momento ou é uma rotina?" Se é agora, use Present Continuous (I am eating). Se é rotina/hábito, use Simple Present (I eat breakfast every day). Palavras-chave do continuous: now, right now, at the moment, currently.',
    },
  },
  {
    slug: "future-going-to",
    title: "Futuro com Going To (I'm going to travel)",
    description:
      "Aprenda a usar 'going to' para falar sobre planos, intenções e previsões sobre o futuro em inglês.",
    level: "A2",
    icon: "🚀",
    content: {
      explanation: `A estrutura "going to" é uma das formas mais comuns de falar sobre o futuro em inglês. É usada principalmente para planos já decididos, intenções e previsões baseadas em evidências. Equivale a "vou/vai/vamos + infinitivo" em português.

**Estrutura:**
Sujeito + am/is/are + going to + verbo na forma base

| Pronome | Exemplo | Tradução |
|---------|---------|----------|
| I | I am going to study. | Eu vou estudar. |
| You | You are going to love it. | Você vai adorar. |
| He/She/It | She is going to travel. | Ela vai viajar. |
| We | We are going to move. | Nós vamos mudar. |
| They | They are going to help. | Eles vão ajudar. |

**Contrações (muito usadas na fala):**
- I'm going to / I'm gonna (informal)
- You're going to / You're gonna
- He's going to / He's gonna
- We're going to / We're gonna
- They're going to / They're gonna

Nota: "gonna" é uma contração ORAL muito usada no inglês falado, mas deve ser evitada na escrita formal.

**Forma Negativa:**
Sujeito + am/is/are + NOT + going to + verbo base
- I'm not going to work tomorrow. (Eu não vou trabalhar amanhã.)
- She isn't going to come. (Ela não vai vir.)
- They aren't going to accept. (Eles não vão aceitar.)

**Forma Interrogativa:**
Am/Is/Are + sujeito + going to + verbo base?
- Are you going to travel? (Você vai viajar?)
- Is he going to study? (Ele vai estudar?)

**Quando usar "going to":**
1. **Planos e intenções já decididos:** "I'm going to start a diet on Monday." (Vou começar uma dieta na segunda.)
2. **Previsões baseadas em evidências:** "Look at those clouds! It's going to rain." (Olhe aquelas nuvens! Vai chover.)
3. **Decisões já tomadas:** "We're going to buy a new car." (Nós vamos comprar um carro novo.)

**Diferença entre "going to" e "will":**
- "Going to" → planos já decididos, intenções, previsões com evidência
- "Will" → decisões tomadas no momento, promessas, previsões sem evidência
- "I'm going to visit my mom this weekend." (Já planejei isso.)
- "I'll help you with that." (Decidi agora, neste momento.)`,
      examples: [
        {
          english: "I'm going to travel to Europe next year.",
          portuguese: "Eu vou viajar para a Europa ano que vem.",
          highlight: "going to travel",
        },
        {
          english: "She is going to start a new job.",
          portuguese: "Ela vai começar um novo emprego.",
          highlight: "is going to start",
        },
        {
          english: "Are you going to come to the party?",
          portuguese: "Você vai vir à festa?",
          highlight: "Are you going to",
        },
        {
          english: "Look at the sky! It's going to rain.",
          portuguese: "Olhe para o céu! Vai chover.",
          highlight: "going to rain",
        },
        {
          english: "We aren't going to sell the house.",
          portuguese: "Nós não vamos vender a casa.",
          highlight: "aren't going to",
        },
      ],
      commonMistakes: [
        {
          wrong: "I going to study tonight.",
          correct: "I am going to study tonight.",
          explanation:
            'A estrutura "going to" SEMPRE precisa do verbo "to be" (am/is/are) antes. Sem o "am/is/are", a frase está incompleta. Diga "I am going to" ou "I\'m going to".',
        },
        {
          wrong: "She is going to goes to the store.",
          correct: "She is going to go to the store.",
          explanation:
            'Depois de "going to", o verbo sempre fica na forma base (infinitivo sem "to"). Nunca conjugue o verbo depois de "going to". Use "go", não "goes".',
        },
        {
          wrong: "He is going to studying English.",
          correct: "He is going to study English.",
          explanation:
            'Após "going to", use o verbo na forma base, sem -ing. O "-ing" já está no "going". Use "study", não "studying".',
        },
      ],
      tip: 'Dica prática: Use "going to" sempre que já tiver um plano em mente. Se alguém pergunta "What are you going to do this weekend?", responda com seus planos: "I\'m going to visit my parents." Na fala informal, "gonna" substitui "going to": "I\'m gonna study" = "I\'m going to study".',
    },
  },
  {
    slug: "comparatives",
    title: "Comparativos (bigger than, more beautiful than)",
    description:
      "Aprenda a comparar coisas, pessoas e lugares em inglês usando os adjetivos comparativos.",
    level: "A2",
    icon: "⚖️",
    content: {
      explanation: `Os comparativos em inglês são usados para comparar duas coisas, pessoas ou situações. Equivalem a "mais... do que" ou "menos... do que" em português. A forma de criar o comparativo depende do tamanho (número de sílabas) do adjetivo.

**Regra 1: Adjetivos curtos (1 sílaba) → adjetivo + ER + than**

| Adjetivo | Comparativo | Exemplo |
|----------|-------------|---------|
| tall (alto) | taller | He is taller than me. (Ele é mais alto que eu.) |
| old (velho) | older | She is older than her sister. (Ela é mais velha que a irmã.) |
| fast (rápido) | faster | A car is faster than a bike. (Um carro é mais rápido que uma bicicleta.) |
| cheap (barato) | cheaper | This phone is cheaper than that one. (Este celular é mais barato que aquele.) |

**Regras de ortografia para adjetivos curtos:**
- Terminados em -e: +r → large → larger, nice → nicer
- Terminados em CVC (consoante-vogal-consoante): dobra a última → big → bigger, hot → hotter, thin → thinner
- Terminados em -y: troca y por ier → happy → happier, easy → easier, busy → busier

**Regra 2: Adjetivos longos (2+ sílabas) → MORE + adjetivo + than**

| Adjetivo | Comparativo | Exemplo |
|----------|-------------|---------|
| beautiful | more beautiful | She is more beautiful than a flower. |
| expensive | more expensive | Gold is more expensive than silver. |
| interesting | more interesting | This book is more interesting than the movie. |
| comfortable | more comfortable | This chair is more comfortable than that one. |

**Comparativos Irregulares (memorize estes!):**

| Adjetivo | Comparativo |
|----------|-------------|
| good (bom) | better (melhor) |
| bad (ruim) | worse (pior) |
| far (longe) | farther / further (mais longe) |

**Comparativo de inferioridade: LESS + adjetivo + than**
- This movie is less interesting than the book. (Este filme é menos interessante que o livro.)

**Comparativo de igualdade: AS + adjetivo + AS**
- She is as tall as her brother. (Ela é tão alta quanto o irmão dela.)
- This test is not as hard as the last one. (Esta prova não é tão difícil quanto a última.)`,
      examples: [
        {
          english: "My house is bigger than yours.",
          portuguese: "Minha casa é maior que a sua.",
          highlight: "bigger than",
        },
        {
          english: "English is more useful than Latin.",
          portuguese: "Inglês é mais útil que latim.",
          highlight: "more useful than",
        },
        {
          english: "This restaurant is better than the other one.",
          portuguese: "Este restaurante é melhor que o outro.",
          highlight: "better than",
        },
        {
          english: "She is as smart as her brother.",
          portuguese: "Ela é tão inteligente quanto o irmão dela.",
          highlight: "as smart as",
        },
        {
          english: "Today is hotter than yesterday.",
          portuguese: "Hoje está mais quente que ontem.",
          highlight: "hotter than",
        },
      ],
      commonMistakes: [
        {
          wrong: "She is more tall than her sister.",
          correct: "She is taller than her sister.",
          explanation:
            '"Tall" é um adjetivo curto (1 sílaba), então usamos "taller", não "more tall". "More" é usado apenas com adjetivos longos (2+ sílabas).',
        },
        {
          wrong: "This is more good than that.",
          correct: "This is better than that.",
          explanation:
            '"Good" tem comparativo irregular: "better". Nunca use "more good" ou "gooder". Da mesma forma, "bad" vira "worse", não "more bad" ou "badder".',
        },
        {
          wrong: "He is more bigger than me.",
          correct: "He is bigger than me.",
          explanation:
            'Nunca combine "more" com "-er". Use UM ou OUTRO: "bigger" (curto + er) OU "more beautiful" (more + longo). Nunca "more bigger".',
        },
      ],
      tip: 'Dica prática: A regra de ouro é simples: adjetivo curto (1 sílaba) = -er (taller, faster). Adjetivo longo (2+ sílabas) = more + adjetivo (more beautiful, more expensive). Adjetivos de 2 sílabas terminados em -y usam -ier (happier, easier). E nunca esqueça os irregulares: good → better, bad → worse!',
    },
  },
  {
    slug: "superlatives",
    title: "Superlativos (the biggest, the most beautiful)",
    description:
      "Aprenda a expressar o grau máximo de uma qualidade usando os superlativos em inglês.",
    level: "A2",
    icon: "🏆",
    content: {
      explanation: `Os superlativos em inglês são usados para expressar o grau MÁXIMO de uma qualidade — o maior, o menor, o melhor, o mais bonito, etc. Diferente do comparativo (que compara dois), o superlativo destaca algo como o "número 1" dentro de um grupo de três ou mais. Sempre usamos "THE" antes do superlativo.

**Regra 1: Adjetivos curtos (1 sílaba) → THE + adjetivo + EST**

| Adjetivo | Superlativo | Exemplo |
|----------|-------------|---------|
| tall (alto) | the tallest | He is the tallest in the class. (Ele é o mais alto da turma.) |
| old (velho) | the oldest | She is the oldest sister. (Ela é a irmã mais velha.) |
| fast (rápido) | the fastest | This is the fastest car. (Este é o carro mais rápido.) |
| cheap (barato) | the cheapest | This is the cheapest option. (Esta é a opção mais barata.) |

**Regras de ortografia para adjetivos curtos:**
- Terminados em -e: +st → large → the largest, nice → the nicest
- Terminados em CVC: dobra a última → big → the biggest, hot → the hottest
- Terminados em -y: troca y por iest → happy → the happiest, easy → the easiest

**Regra 2: Adjetivos longos (2+ sílabas) → THE MOST + adjetivo**

| Adjetivo | Superlativo | Exemplo |
|----------|-------------|---------|
| beautiful | the most beautiful | She is the most beautiful. (Ela é a mais bonita.) |
| expensive | the most expensive | This is the most expensive hotel. (Este é o hotel mais caro.) |
| interesting | the most interesting | It was the most interesting class. (Foi a aula mais interessante.) |

**Superlativos Irregulares (memorize estes!):**

| Adjetivo | Comparativo | Superlativo |
|----------|-------------|-------------|
| good (bom) | better | the best (o melhor) |
| bad (ruim) | worse | the worst (o pior) |
| far (longe) | farther | the farthest (o mais longe) |

**Superlativo de inferioridade: THE LEAST + adjetivo**
- This is the least expensive restaurant. (Este é o restaurante menos caro.)

**Estruturas comuns com superlativos:**
- "one of the + superlativo + plural": "Rio is one of the most beautiful cities in the world." (O Rio é uma das cidades mais bonitas do mundo.)
- "the + superlativo + in/of": "She is the best student in the class." (Ela é a melhor aluna da turma.)`,
      examples: [
        {
          english: "Mount Everest is the highest mountain in the world.",
          portuguese: "O Monte Everest é a montanha mais alta do mundo.",
          highlight: "the highest",
        },
        {
          english: "This is the most beautiful beach I've ever seen.",
          portuguese: "Esta é a praia mais bonita que eu já vi.",
          highlight: "the most beautiful",
        },
        {
          english: "She is the best student in the school.",
          portuguese: "Ela é a melhor aluna da escola.",
          highlight: "the best",
        },
        {
          english: "Monday is the busiest day of the week.",
          portuguese: "Segunda-feira é o dia mais movimentado da semana.",
          highlight: "the busiest",
        },
        {
          english: "That was the worst movie I've ever watched.",
          portuguese: "Aquele foi o pior filme que eu já assisti.",
          highlight: "the worst",
        },
      ],
      commonMistakes: [
        {
          wrong: "She is tallest in the class.",
          correct: "She is the tallest in the class.",
          explanation:
            'O superlativo SEMPRE precisa do artigo "the" antes. Sem "the", a frase está incorreta. Diga "the tallest", "the best", "the most beautiful".',
        },
        {
          wrong: "This is the most cheapest phone.",
          correct: "This is the cheapest phone.",
          explanation:
            'Nunca combine "the most" com "-est". Use apenas um: "the cheapest" (curto + est) OU "the most expensive" (the most + longo). Nunca "the most cheapest".',
        },
        {
          wrong: "He is the most good player.",
          correct: "He is the best player.",
          explanation:
            '"Good" tem superlativo irregular: "the best". Nunca use "the most good" ou "the goodest". Da mesma forma, "bad" vira "the worst".',
        },
      ],
      tip: 'Dica prática: Superlativos seguem a mesma lógica dos comparativos. Curto (1 sílaba) = the + -est (the tallest). Longo (2+ sílabas) = the most + adjetivo (the most beautiful). Sempre use "THE" antes! Pratique com coisas ao seu redor: "This is the best coffee shop in the neighborhood."',
    },
  },
  {
    slug: "can-could",
    title: "Can e Could (habilidade, permissão, pedidos)",
    description:
      "Aprenda a usar 'can' e 'could' para falar de habilidades, pedir permissão e fazer pedidos educados.",
    level: "A2",
    icon: "💪",
    content: {
      explanation: `"Can" e "Could" são verbos modais (modal verbs) muito usados em inglês. Eles são especiais porque não mudam de forma — não recebem "s" na terceira pessoa, não usam "do/does" para perguntas e negativas, e o verbo depois deles fica sempre na forma base.

**CAN — Usos principais:**

1. **Habilidade/Capacidade (saber fazer algo):**
   - I can swim. (Eu sei nadar.)
   - She can speak three languages. (Ela sabe falar três idiomas.)
   - He can't drive. (Ele não sabe dirigir.)

2. **Permissão (informal):**
   - Can I use your phone? (Posso usar seu celular?)
   - You can sit here. (Você pode sentar aqui.)
   - You can't park here. (Você não pode estacionar aqui.)

3. **Possibilidade:**
   - It can get very cold in winter. (Pode ficar muito frio no inverno.)

**COULD — Usos principais:**

1. **Habilidade no passado (sabia fazer algo):**
   - I could swim when I was five. (Eu sabia nadar quando tinha cinco anos.)
   - She could read at age three. (Ela sabia ler aos três anos.)

2. **Pedidos educados (mais formal que "can"):**
   - Could you help me, please? (Você poderia me ajudar, por favor?)
   - Could I have a glass of water? (Eu poderia ter um copo de água?)

3. **Possibilidade/Sugestão:**
   - We could go to the beach. (Nós poderíamos ir à praia.)
   - It could rain later. (Pode chover mais tarde.)

**Estruturas:**

| Forma | Can | Could |
|-------|-----|-------|
| Afirmativa | I can swim. | I could swim. |
| Negativa | I cannot (can't) swim. | I could not (couldn't) swim. |
| Interrogativa | Can you swim? | Could you swim? |

**Regras dos verbos modais:**
- Não recebem "s": "She can swim" (NUNCA "She cans swim")
- Não usam "do/does": "Can you...?" (NUNCA "Do you can...?")
- Verbo seguinte na forma base: "I can swim" (NUNCA "I can to swim" ou "I can swimming")`,
      examples: [
        {
          english: "I can speak English and Spanish.",
          portuguese: "Eu sei falar inglês e espanhol.",
          highlight: "can speak",
        },
        {
          english: "She couldn't come to the meeting yesterday.",
          portuguese: "Ela não pôde vir à reunião ontem.",
          highlight: "couldn't come",
        },
        {
          english: "Could you open the window, please?",
          portuguese: "Você poderia abrir a janela, por favor?",
          highlight: "Could you",
        },
        {
          english: "Can I borrow your pen?",
          portuguese: "Posso pegar emprestada a sua caneta?",
          highlight: "Can I",
        },
        {
          english: "When I was young, I could run very fast.",
          portuguese: "Quando eu era jovem, eu conseguia correr muito rápido.",
          highlight: "could run",
        },
      ],
      commonMistakes: [
        {
          wrong: "She can to swim very well.",
          correct: "She can swim very well.",
          explanation:
            'Depois de "can" e "could", o verbo vai na forma base, sem "to". Nunca use "can to" ou "could to". Diga "can swim", não "can to swim".',
        },
        {
          wrong: "Do you can help me?",
          correct: "Can you help me?",
          explanation:
            'Verbos modais como "can" não usam auxiliares (do/does). Para perguntas, basta inverter: "Can you...?", não "Do you can...?".',
        },
        {
          wrong: "He cans play guitar.",
          correct: "He can play guitar.",
          explanation:
            'Verbos modais NUNCA recebem "s" na terceira pessoa. Use "he can", "she can", "it can" — sempre sem "s". Isso vale para todos os modais.',
        },
      ],
      tip: 'Dica prática: Use "can" para falar do presente (habilidades atuais e permissão). Use "could" para o passado (o que você sabia fazer antes) e para pedidos mais educados. Quando quiser ser educado, "could" é sempre melhor que "can": "Could you help me?" soa mais gentil que "Can you help me?".',
    },
  },
  {
    slug: "prepositions-of-place",
    title: "Preposições de Lugar (in, on, at, between, behind)",
    description:
      "Domine as preposições de lugar em inglês para descrever onde as coisas estão: in, on, at, under, between, behind e mais.",
    level: "A2",
    icon: "📌",
    content: {
      explanation: `As preposições de lugar (prepositions of place) indicam a posição ou localização de algo ou alguém. Elas são uma das partes mais desafiadoras do inglês para brasileiros, pois nem sempre correspondem diretamente às preposições do português.

**As três preposições principais: IN, ON, AT**

**IN (dentro de, em):**
Indica que algo está DENTRO de um espaço fechado ou delimitado.
- in the box (dentro da caixa)
- in the room (no quarto)
- in the car (no carro)
- in Brazil (no Brasil)
- in São Paulo (em São Paulo — cidades e países)
- in the water (na água)
- in a book (em um livro)

**ON (sobre, em cima de):**
Indica que algo está em uma SUPERFÍCIE, tocando-a.
- on the table (na/sobre a mesa)
- on the wall (na parede)
- on the floor (no chão)
- on the street (na rua)
- on the second floor (no segundo andar)
- on the bus (no ônibus — meios de transporte grandes)

**AT (em — ponto específico):**
Indica um PONTO específico, um local exato.
- at the door (na porta)
- at the bus stop (no ponto de ônibus)
- at home (em casa)
- at school (na escola)
- at work (no trabalho)
- at the airport (no aeroporto)

**Outras preposições de lugar importantes:**

| Preposição | Significado | Exemplo |
|-----------|-------------|---------|
| under | embaixo de | The cat is under the table. (O gato está embaixo da mesa.) |
| behind | atrás de | The garden is behind the house. (O jardim fica atrás da casa.) |
| in front of | na frente de | The car is in front of the building. (O carro está na frente do prédio.) |
| between | entre (dois) | The bank is between the school and the park. (O banco fica entre a escola e o parque.) |
| next to / beside | ao lado de | She sat next to me. (Ela sentou ao meu lado.) |
| near | perto de | The hotel is near the beach. (O hotel fica perto da praia.) |
| above | acima de | The painting is above the sofa. (O quadro está acima do sofá.) |
| below | abaixo de | The temperature is below zero. (A temperatura está abaixo de zero.) |
| opposite | em frente a / do lado oposto | The pharmacy is opposite the hospital. (A farmácia fica em frente ao hospital.) |`,
      examples: [
        {
          english: "The keys are in the drawer.",
          portuguese: "As chaves estão na gaveta.",
          highlight: "in",
        },
        {
          english: "There is a book on the table.",
          portuguese: "Há um livro sobre a mesa.",
          highlight: "on",
        },
        {
          english: "I'll meet you at the entrance.",
          portuguese: "Eu te encontro na entrada.",
          highlight: "at",
        },
        {
          english: "The cat is hiding behind the sofa.",
          portuguese: "O gato está escondido atrás do sofá.",
          highlight: "behind",
        },
        {
          english: "The supermarket is between the bank and the pharmacy.",
          portuguese: "O supermercado fica entre o banco e a farmácia.",
          highlight: "between",
        },
      ],
      commonMistakes: [
        {
          wrong: "She is in home.",
          correct: "She is at home.",
          explanation:
            '"At home" é uma expressão fixa em inglês. Usamos "at" (não "in") para "em casa". Similarmente: "at school", "at work", "at the office".',
        },
        {
          wrong: "The picture is in the wall.",
          correct: "The picture is on the wall.",
          explanation:
            'Quando algo está fixado em uma superfície (parede, teto, chão), usamos "on", não "in". "In the wall" significaria literalmente dentro da parede.',
        },
        {
          wrong: "I arrived at Brazil last week.",
          correct: "I arrived in Brazil last week.",
          explanation:
            'Para países e cidades, usamos "in": "in Brazil", "in São Paulo", "in Japan". "At" é para pontos específicos menores, como "at the airport" ou "at school".',
        },
      ],
      tip: 'Dica prática: Pense assim: IN = dentro de algo (espaço 3D), ON = tocando uma superfície (espaço 2D), AT = ponto exato no mapa. Para memorizar, imagine: "in the box" (dentro da caixa), "on the box" (em cima da caixa), "at the box" (no local da caixa). Com prática, vai ficando natural!',
    },
  },
  {
    slug: "countable-uncountable",
    title: "Contáveis e Incontáveis (some, any, much, many)",
    description:
      "Aprenda a diferença entre substantivos contáveis e incontáveis e quando usar some, any, much, many, a lot of.",
    level: "A2",
    icon: "🔢",
    content: {
      explanation: `Em inglês, os substantivos são divididos em dois grupos: contáveis (countable) e incontáveis (uncountable). Essa distinção é muito importante porque determina quais palavras (quantificadores) podemos usar com cada tipo.

**Substantivos Contáveis (Countable Nouns):**
São coisas que podemos contar individualmente. Têm forma singular e plural.
- one book → two books (um livro → dois livros)
- a cat → three cats (um gato → três gatos)
- one child → five children (uma criança → cinco crianças)

**Substantivos Incontáveis (Uncountable Nouns):**
São coisas que NÃO podemos contar individualmente. Não têm forma plural.
- water (água) — NÃO dizemos "two waters"
- information (informação) — NÃO dizemos "informations"
- money (dinheiro) — NÃO dizemos "moneys"
- music, rice, bread, sugar, salt, milk, coffee, tea, furniture, advice, news, homework, weather, traffic, luggage, work

**Quantificadores — Qual usar com cada tipo:**

| Quantificador | Contável | Incontável | Exemplo |
|--------------|----------|------------|---------|
| many | SIM | NÃO | many books (muitos livros) |
| much | NÃO | SIM | much water (muita água) |
| a lot of | SIM | SIM | a lot of books / a lot of water |
| some | SIM | SIM | some apples / some milk |
| any | SIM | SIM | any questions? / any money? |
| a few | SIM | NÃO | a few friends (alguns amigos) |
| a little | NÃO | SIM | a little sugar (um pouco de açúcar) |
| how many | SIM | NÃO | How many people? (Quantas pessoas?) |
| how much | NÃO | SIM | How much money? (Quanto dinheiro?) |

**SOME vs ANY:**
- **Some**: usado em frases AFIRMATIVAS e em ofertas/pedidos.
  - "I have some friends in London." (Tenho alguns amigos em Londres.)
  - "Would you like some coffee?" (Gostaria de café? — oferta)
- **Any**: usado em frases NEGATIVAS e INTERROGATIVAS.
  - "I don't have any money." (Não tenho nenhum dinheiro.)
  - "Do you have any questions?" (Você tem alguma pergunta?)

**Como tornar incontáveis "contáveis":**
Usamos unidades de medida ou recipientes:
- a glass of water (um copo de água)
- a piece of advice (um conselho)
- a slice of bread (uma fatia de pão)
- a cup of coffee (uma xícara de café)
- a piece of information (uma informação)`,
      examples: [
        {
          english: "How many students are in the class?",
          portuguese: "Quantos alunos estão na turma?",
          highlight: "How many",
        },
        {
          english: "There isn't much time left.",
          portuguese: "Não há muito tempo restante.",
          highlight: "much",
        },
        {
          english: "Would you like some coffee?",
          portuguese: "Você gostaria de um café?",
          highlight: "some",
        },
        {
          english: "I don't have any money with me.",
          portuguese: "Eu não tenho nenhum dinheiro comigo.",
          highlight: "any",
        },
        {
          english: "She gave me a lot of useful advice.",
          portuguese: "Ela me deu muitos conselhos úteis.",
          highlight: "a lot of",
        },
      ],
      commonMistakes: [
        {
          wrong: "She gave me many advices.",
          correct: "She gave me a lot of advice.",
          explanation:
            '"Advice" (conselho) é incontável em inglês — não tem plural! Use "a lot of advice" ou "some advice". Para contar, diga "a piece of advice" (um conselho) ou "two pieces of advice".',
        },
        {
          wrong: "How much friends do you have?",
          correct: "How many friends do you have?",
          explanation:
            '"Friends" é contável (podemos contar: 1, 2, 3 amigos). Com contáveis, usamos "how many", não "how much". "How much" é para incontáveis: "How much money?".',
        },
        {
          wrong: "I need to buy some furnitures for my apartment.",
          correct: "I need to buy some furniture for my apartment.",
          explanation:
            '"Furniture" (mobília/móveis) é incontável em inglês. Nunca diga "furnitures". Use "some furniture" ou "a piece of furniture" (um móvel). Outros: news, information, luggage.',
        },
      ],
      tip: 'Dica prática: Na dúvida se um substantivo é contável ou incontável, pergunte-se: "Posso colocar um número na frente?" Se sim (one apple, two apples), é contável. Se não faz sentido (one water? one information?), é incontável. Lembre-se: "many/few" para contáveis, "much/little" para incontáveis, e "a lot of/some/any" funcionam com os dois!',
    },
  },
];
