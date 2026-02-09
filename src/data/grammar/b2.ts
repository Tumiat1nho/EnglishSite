import { GrammarTopic } from "../types";

export const grammarB2: GrammarTopic[] = [
  {
    slug: "third-conditional",
    title: "Terceira Condicional",
    description: "If I had known, I would have gone",
    level: "B2",
    icon: "⏪",
    content: {
      explanation: `A Third Conditional (Terceira Condicional) é usada para falar sobre situações hipotéticas no PASSADO — coisas que não aconteceram, mas imaginamos como teriam sido diferentes. A estrutura é: "If + Past Perfect (had + particípio), would have + particípio". Por exemplo: "If I had known about the party, I would have gone" (Se eu tivesse sabido da festa, eu teria ido).

Este é o condicional dos arrependimentos, das reflexões sobre o passado e das situações que já não podem ser mudadas. Quando alguém diz "If I had studied harder, I would have passed the exam", está expressando que NÃO estudou o suficiente e NÃO passou — e agora lamenta.

Comparação entre as três condicionais:
| Condicional | Tempo | Probabilidade | Exemplo |
|-------------|-------|---------------|---------|
| 1ª (First) | Futuro | Possível/provável | If it rains, I will stay home. |
| 2ª (Second) | Presente/Futuro | Improvável/imaginária | If I were rich, I would travel. |
| 3ª (Third) | Passado | Impossível (já passou) | If I had been rich, I would have traveled. |

Na cláusula principal, além de "would have", podemos usar "could have" (teria podido) e "might have" (talvez tivesse):
- "If I had left earlier, I could have caught the train." (teria conseguido)
- "If she had asked, I might have helped." (talvez tivesse ajudado)

A Third Conditional frequentemente aparece em conversas do dia a dia quando refletimos sobre decisões passadas: "If I had accepted that job offer, my life would have been completely different." Também é muito usada com expressões como "I wish" e "if only" para expressar arrependimento profundo.`,
      examples: [
        {
          english: "If I had studied harder, I would have passed the exam.",
          portuguese: "Se eu tivesse estudado mais, teria passado no exame.",
          highlight: "If I had studied"
        },
        {
          english: "She would have come to the party if she had known about it.",
          portuguese: "Ela teria vindo à festa se tivesse sabido dela.",
          highlight: "would have come"
        },
        {
          english: "If they had left earlier, they wouldn't have missed the flight.",
          portuguese: "Se eles tivessem saído mais cedo, não teriam perdido o voo.",
          highlight: "had left"
        },
        {
          english: "I could have helped you if you had asked me.",
          portuguese: "Eu poderia ter te ajudado se você tivesse me pedido.",
          highlight: "could have helped"
        },
        {
          english: "If we had taken a taxi, we might have arrived on time.",
          portuguese: "Se tivéssemos pegado um táxi, talvez tivéssemos chegado a tempo.",
          highlight: "might have arrived"
        }
      ],
      commonMistakes: [
        {
          wrong: "If I would have known, I would have gone.",
          correct: "If I had known, I would have gone.",
          explanation: "NUNCA use 'would have' na cláusula com 'if'. A condição sempre usa Past Perfect (had + particípio). 'Would have' fica apenas na cláusula principal."
        },
        {
          wrong: "If I had knew about it, I would have told you.",
          correct: "If I had known about it, I would have told you.",
          explanation: "Após 'had', use sempre o particípio passado (known), não o Simple Past (knew). Had + particípio = Past Perfect."
        },
        {
          wrong: "If I studied harder, I would have passed.",
          correct: "If I had studied harder, I would have passed.",
          explanation: "A Third Conditional exige Past Perfect na cláusula 'if'. Usar apenas Simple Past ('studied') mistura Second e Third Conditional."
        }
      ],
      tip: "A Third Conditional é a condicional 'do arrependimento'. Sempre que quiser dizer 'Se eu tivesse feito X, teria acontecido Y' sobre algo no passado, use: If + had + particípio, would have + particípio."
    }
  },
  {
    slug: "wish-clauses",
    title: "Orações com Wish",
    description: "I wish I could, I wish I had",
    level: "B2",
    icon: "⭐",
    content: {
      explanation: `As Wish Clauses são estruturas usadas para expressar desejos sobre situações que gostaríamos que fossem diferentes. O verbo "wish" é seguido de uma cláusula com tempos verbais específicos, dependendo se o desejo é sobre o presente, o passado ou um hábito irritante.

Existem três usos principais de "wish", cada um com uma estrutura diferente:

| Desejo sobre... | Estrutura | Exemplo | Significado |
|-----------------|-----------|---------|-------------|
| Presente/Futuro | wish + Past Simple | I wish I spoke French. | Não falo francês (mas queria). |
| Passado | wish + Past Perfect | I wish I had studied more. | Não estudei (e me arrependo). |
| Hábitos irritantes | wish + would | I wish you would stop smoking. | Quero que pare, mas não para. |

Para desejos sobre o PRESENTE, usamos "wish + Simple Past" (como na Second Conditional). Isso indica que a realidade atual é diferente do que gostaríamos: "I wish I had more free time" (Quem dera eu tivesse mais tempo livre — mas não tenho). Com o verbo "to be", a forma correta é "were": "I wish I were taller."

Para desejos sobre o PASSADO, usamos "wish + Past Perfect". Isso expressa arrependimento: "I wish I had accepted that job offer" (Quem dera eu tivesse aceitado aquela oferta — mas não aceitei). É o equivalente ao uso da Third Conditional para lamentar.

Para expressar irritação com hábitos ou pedir mudança de comportamento, usamos "wish + would": "I wish it would stop raining" (Queria que parasse de chover). IMPORTANTE: não usamos "wish + would" quando o sujeito de "wish" é o mesmo da cláusula seguinte. Não diga "I wish I would" — diga "I wish I could."

"If only" funciona exatamente como "wish", mas é mais enfático e emocional: "If only I had known!" (Se ao menos eu soubesse!). As mesmas regras gramaticais se aplicam.`,
      examples: [
        {
          english: "I wish I could speak Japanese fluently.",
          portuguese: "Quem dera eu pudesse falar japonês fluentemente.",
          highlight: "wish I could"
        },
        {
          english: "She wishes she had more time to travel.",
          portuguese: "Ela queria ter mais tempo para viajar.",
          highlight: "wishes she had"
        },
        {
          english: "I wish I had taken that opportunity when I had the chance.",
          portuguese: "Quem dera eu tivesse aproveitado aquela oportunidade quando tive a chance.",
          highlight: "wish I had taken"
        },
        {
          english: "I wish you would listen to me more carefully.",
          portuguese: "Eu queria que você me ouvisse com mais atenção.",
          highlight: "wish you would"
        },
        {
          english: "If only I were better at math!",
          portuguese: "Se ao menos eu fosse melhor em matemática!",
          highlight: "If only"
        }
      ],
      commonMistakes: [
        {
          wrong: "I wish I can fly.",
          correct: "I wish I could fly.",
          explanation: "Após 'wish', o verbo recua um tempo. 'Can' vira 'could'. Nunca use presente após 'wish' para desejos irreais."
        },
        {
          wrong: "I wish I would be taller.",
          correct: "I wish I were taller.",
          explanation: "Não use 'wish + would' quando o sujeito é o mesmo (I wish I would...). Para desejos sobre si mesmo no presente, use Past Simple: 'I wish I were/had/could...'."
        },
        {
          wrong: "I wish I studied more for the test last week.",
          correct: "I wish I had studied more for the test last week.",
          explanation: "Para arrependimentos sobre o passado, use Past Perfect (had + particípio). Simple Past após 'wish' refere-se ao presente, não ao passado."
        }
      ],
      tip: "Para lembrar: 'I wish + Past Simple' = quero algo diferente AGORA. 'I wish + Past Perfect' = queria ter feito algo diferente NO PASSADO. O tempo verbal após 'wish' sempre recua um nível."
    }
  },
  {
    slug: "gerunds-vs-infinitives",
    title: "Gerúndio vs. Infinitivo",
    description: "enjoy doing, want to do",
    level: "B2",
    icon: "⚖️",
    content: {
      explanation: `Uma das maiores dificuldades do inglês intermediário-avançado é saber quando usar o gerúndio (verbo + -ing) ou o infinitivo (to + verbo) após certos verbos. Não existe uma regra universal — depende do verbo principal. Alguns pedem gerúndio, outros pedem infinitivo, e alguns aceitam ambos (às vezes com mudança de significado).

Verbos seguidos de GERÚNDIO (-ing):
enjoy, finish, avoid, mind, suggest, recommend, consider, keep, practice, deny, imagine, risk, miss, give up, feel like, can't stand, can't help, be worth, look forward to, be used to, get used to.
Exemplo: "I enjoy reading books." / "She avoids eating junk food."

Verbos seguidos de INFINITIVO (to + verbo):
want, need, decide, plan, hope, expect, promise, agree, refuse, learn, offer, manage, afford, seem, appear, tend, pretend, would like, would love.
Exemplo: "I want to learn Spanish." / "She decided to move abroad."

Verbos que aceitam AMBOS sem mudança de significado:
begin, start, continue, like, love, hate, prefer.
Exemplo: "I like swimming." = "I like to swim." (mesmo significado)

Verbos que aceitam ambos COM mudança de significado:
| Verbo | + Gerúndio | + Infinitivo |
|-------|-----------|-------------|
| remember | Lembrar de algo feito: I remember locking the door. | Lembrar de fazer algo: Remember to lock the door. |
| stop | Parar de fazer: He stopped smoking. | Parar para fazer: He stopped to smoke. |
| try | Experimentar: Try pressing the button. | Esforçar-se: Try to understand. |
| forget | Esquecer algo feito: I'll never forget meeting you. | Esquecer de fazer: Don't forget to call me. |

Atenção especial com preposições: quando um verbo vem após qualquer preposição (to, about, of, for, in, at, etc.), ele SEMPRE fica no gerúndio: "interested in learning", "good at cooking", "tired of waiting", "look forward to hearing". Cuidado com "look forward to" — o "to" aqui é preposição, não infinitivo!`,
      examples: [
        {
          english: "I enjoy spending time with my family.",
          portuguese: "Eu gosto de passar tempo com minha família.",
          highlight: "enjoy spending"
        },
        {
          english: "She decided to accept the job offer.",
          portuguese: "Ela decidiu aceitar a oferta de emprego.",
          highlight: "decided to accept"
        },
        {
          english: "I remember meeting her at the conference last year.",
          portuguese: "Eu me lembro de tê-la conhecido na conferência ano passado.",
          highlight: "remember meeting"
        },
        {
          english: "He stopped smoking three years ago.",
          portuguese: "Ele parou de fumar três anos atrás.",
          highlight: "stopped smoking"
        },
        {
          english: "I'm looking forward to hearing from you.",
          portuguese: "Estou ansioso para ter notícias suas.",
          highlight: "looking forward to hearing"
        }
      ],
      commonMistakes: [
        {
          wrong: "I enjoy to read books in my free time.",
          correct: "I enjoy reading books in my free time.",
          explanation: "'Enjoy' é sempre seguido de gerúndio (-ing). Nunca diga 'enjoy to do'. O mesmo vale para avoid, finish, mind, suggest e outros."
        },
        {
          wrong: "I look forward to hear from you.",
          correct: "I look forward to hearing from you.",
          explanation: "Em 'look forward to', o 'to' é uma preposição, não parte do infinitivo. Após preposições, SEMPRE use gerúndio: to hearing, to meeting, to seeing."
        },
        {
          wrong: "She suggested to go to the beach.",
          correct: "She suggested going to the beach.",
          explanation: "'Suggest' é seguido de gerúndio. Outra opção é 'suggested that we go' (subjuntivo), mas nunca 'suggested to go'."
        }
      ],
      tip: "Após preposições (in, on, at, about, of, for, to como preposição), o verbo SEMPRE fica no gerúndio. Se estiver em dúvida, verifique se o 'to' é preposição ou infinitivo — isso resolve muitos casos."
    }
  },
  {
    slug: "phrasal-verbs",
    title: "Phrasal Verbs",
    description: "give up, look forward to, turn out",
    level: "B2",
    icon: "🧩",
    content: {
      explanation: `Phrasal verbs são combinações de um verbo com uma ou mais partículas (preposição ou advérbio) que criam um significado novo, muitas vezes completamente diferente do verbo original. Por exemplo, "give" significa "dar", mas "give up" significa "desistir". São extremamente comuns no inglês cotidiano e dominá-los é essencial para soar natural.

Existem quatro tipos de phrasal verbs, e entender essa classificação ajuda muito no uso correto:

| Tipo | Características | Exemplo |
|------|----------------|---------|
| Intransitivo | Não tem objeto | The plane took off. (decolou) |
| Transitivo separável | O objeto pode ir no meio | Turn off the TV. / Turn the TV off. |
| Transitivo inseparável | O objeto vai depois | I'm looking for my keys. (procurando) |
| Com duas partículas | Sempre inseparável | I look forward to meeting you. |

Regra crucial para phrasal verbs separáveis: quando o objeto é um PRONOME (it, them, him, her, etc.), ele DEVE ir no meio. "Turn it off" está correto. "Turn off it" está ERRADO. Quando o objeto é um substantivo, ambas as posições são aceitas: "Turn off the light" ou "Turn the light off."

Phrasal verbs essenciais para o nível B2:
- give up (desistir), bring up (criar/mencionar), carry out (realizar), come up with (ter uma ideia), deal with (lidar com), figure out (descobrir/entender), find out (descobrir), get along with (dar-se bem com), get over (superar), go through (passar por), look after (cuidar de), look into (investigar), look forward to (estar ansioso por), make up (inventar/reconciliar), pick up (pegar/buscar/aprender), put off (adiar), put up with (tolerar), run out of (ficar sem), set up (montar/criar), turn out (resultar/acontecer), work out (resolver/exercitar-se).

Não tente traduzir phrasal verbs palavra por palavra — o significado é idiomático. A melhor forma de aprendê-los é através de contexto e prática constante.`,
      examples: [
        {
          english: "She gave up smoking after 20 years.",
          portuguese: "Ela parou de fumar / desistiu de fumar após 20 anos.",
          highlight: "gave up"
        },
        {
          english: "I need to figure out how to solve this problem.",
          portuguese: "Eu preciso descobrir como resolver este problema.",
          highlight: "figure out"
        },
        {
          english: "The meeting was put off until next week.",
          portuguese: "A reunião foi adiada para a próxima semana.",
          highlight: "put off"
        },
        {
          english: "It turned out that he was right all along.",
          portuguese: "Acontece que ele estava certo o tempo todo.",
          highlight: "turned out"
        },
        {
          english: "I can't put up with this noise anymore.",
          portuguese: "Eu não aguento mais / não tolero mais esse barulho.",
          highlight: "put up with"
        }
      ],
      commonMistakes: [
        {
          wrong: "Please turn off it.",
          correct: "Please turn it off.",
          explanation: "Quando o objeto de um phrasal verb separável é um pronome (it, them, her, etc.), ele DEVE ir entre o verbo e a partícula. 'Turn off it' está sempre errado."
        },
        {
          wrong: "I'm looking forward to meet you.",
          correct: "I'm looking forward to meeting you.",
          explanation: "Em 'look forward to', o 'to' é preposição, não infinitivo. Após preposições, o verbo fica no gerúndio: to meeting, to seeing, to hearing."
        },
        {
          wrong: "She looks for after her grandmother.",
          correct: "She looks after her grandmother.",
          explanation: "Não misture phrasal verbs. 'Look for' = procurar. 'Look after' = cuidar de. São phrasal verbs diferentes com significados diferentes."
        }
      ],
      tip: "Com pronomes (it, them, him, her), SEMPRE separe o phrasal verb: 'pick it up', 'turn them off', 'figure it out'. Nunca coloque o pronome depois da partícula."
    }
  },
  {
    slug: "past-perfect",
    title: "Passado Perfeito",
    description: "had done, had been",
    level: "B2",
    icon: "⏮️",
    content: {
      explanation: `O Past Perfect é formado com "had" + particípio passado e é usado para indicar que uma ação no passado aconteceu ANTES de outra ação também no passado. Funciona como o "passado do passado". Em português, corresponde ao mais-que-perfeito: "Eu tinha feito / Eu havia feito."

Imagine uma linha do tempo: se duas coisas aconteceram no passado, o Past Perfect marca a que aconteceu primeiro, e o Simple Past marca a que aconteceu depois.
| Primeiro (Past Perfect) | Depois (Simple Past) |
|------------------------|---------------------|
| The movie had already started | when we arrived at the cinema. |
| She had never seen snow | before she moved to Canada. |
| I had finished my homework | before my friends came over. |

O Past Perfect é especialmente importante com as conjunções "before", "after", "when", "by the time", "already", "never" e "just":
- "By the time I arrived, the meeting had already started." (Quando cheguei, a reunião já tinha começado.)
- "After she had eaten dinner, she went for a walk." (Depois de ter jantado, ela foi caminhar.)

Na prática, o Past Perfect muitas vezes é necessário para evitar ambiguidade. Compare:
- "When I arrived, she left." (Quando cheguei, ela saiu.) — Ela saiu no momento da minha chegada.
- "When I arrived, she had left." (Quando cheguei, ela já tinha saído.) — Ela saiu ANTES de eu chegar.

O Past Perfect também é essencial na Third Conditional ("If I had known...") e em Reported Speech ("He said he had finished"). Além disso, é usado após "wish" e "if only" para expressar arrependimento: "I wish I had studied more."

Existe também o Past Perfect Continuous (had been + -ing), usado para enfatizar a duração de uma ação que estava em progresso antes de outro evento passado: "I had been waiting for two hours when the bus finally arrived."`,
      examples: [
        {
          english: "By the time we arrived, the concert had already started.",
          portuguese: "Quando chegamos, o show já tinha começado.",
          highlight: "had already started"
        },
        {
          english: "She had never traveled abroad before she turned 30.",
          portuguese: "Ela nunca tinha viajado para o exterior antes de completar 30 anos.",
          highlight: "had never traveled"
        },
        {
          english: "I realized I had left my wallet at home.",
          portuguese: "Percebi que tinha deixado minha carteira em casa.",
          highlight: "had left"
        },
        {
          english: "After they had finished dinner, they went for a walk.",
          portuguese: "Depois que eles tinham terminado o jantar, foram caminhar.",
          highlight: "had finished"
        },
        {
          english: "He had been working there for ten years before he got promoted.",
          portuguese: "Ele trabalhava lá havia dez anos antes de ser promovido.",
          highlight: "had been working"
        }
      ],
      commonMistakes: [
        {
          wrong: "When I arrived, the movie already started.",
          correct: "When I arrived, the movie had already started.",
          explanation: "Quando duas ações ocorreram no passado e uma foi anterior à outra, a ação anterior precisa do Past Perfect (had started), não do Simple Past (started)."
        },
        {
          wrong: "I had went to the store before you called.",
          correct: "I had gone to the store before you called.",
          explanation: "Após 'had', sempre use o particípio passado: gone (não went), done (não did), seen (não saw). Cuidado com verbos irregulares."
        },
        {
          wrong: "She told me she has finished the report.",
          correct: "She told me she had finished the report.",
          explanation: "No Reported Speech com verbo introdutório no passado (told), o Present Perfect (has finished) vira Past Perfect (had finished)."
        }
      ],
      tip: "Pense no Past Perfect como um 'flashback dentro de um flashback'. Se você está contando algo no passado e precisa voltar ainda mais no tempo, esse é o momento de usar 'had + particípio'."
    }
  },
  {
    slug: "future-perfect",
    title: "Futuro Perfeito",
    description: "will have done, will have been",
    level: "B2",
    icon: "🎯",
    content: {
      explanation: `O Future Perfect é formado com "will have" + particípio passado e é usado para descrever uma ação que estará completa antes de um determinado momento no futuro. Em português, corresponde ao futuro do pretérito composto: "Eu terei feito / Eu terei terminado."

A ideia central é: olhamos para um ponto no futuro e imaginamos o que já terá sido concluído até lá. Expressões como "by" (até), "by the time" (quando), "by next year" (até o ano que vem) e "before" são comuns com o Future Perfect:
| Expressão temporal | Exemplo |
|-------------------|---------|
| By tomorrow | I will have finished the report by tomorrow. |
| By the time + presente | By the time you arrive, I will have cooked dinner. |
| By next year | She will have graduated by next year. |
| Before + presente | He will have left before we get there. |

Note que após "by the time" e "before", usamos o Simple Present (não "will") para a cláusula temporal, mesmo falando do futuro. Esse é o mesmo padrão da First Conditional.

O Future Perfect é muito útil em contextos profissionais para falar sobre prazos e metas:
- "We will have completed the project by the deadline."
- "By the end of the quarter, we will have hired five new employees."

Existe também o Future Perfect Continuous (will have been + -ing), usado para enfatizar a duração de uma ação até um ponto futuro: "By December, I will have been living here for three years." A diferença é sutil: o Future Perfect enfatiza a conclusão, enquanto o Future Perfect Continuous enfatiza a duração.

Na forma negativa, usamos "won't have": "I won't have finished by 5 PM." Na interrogativa: "Will you have finished by then?"`,
      examples: [
        {
          english: "By next June, I will have graduated from university.",
          portuguese: "Até junho que vem, eu terei me formado na universidade.",
          highlight: "will have graduated"
        },
        {
          english: "She will have finished the book by the time you arrive.",
          portuguese: "Ela terá terminado o livro quando você chegar.",
          highlight: "will have finished"
        },
        {
          english: "By 2030, scientists will have found a cure for many diseases.",
          portuguese: "Até 2030, os cientistas terão encontrado cura para muitas doenças.",
          highlight: "will have found"
        },
        {
          english: "We won't have completed the project before the deadline.",
          portuguese: "Nós não teremos completado o projeto antes do prazo.",
          highlight: "won't have completed"
        },
        {
          english: "By December, they will have been married for 25 years.",
          portuguese: "Em dezembro, eles estarão casados há 25 anos.",
          highlight: "will have been"
        }
      ],
      commonMistakes: [
        {
          wrong: "By next year, I will finished my course.",
          correct: "By next year, I will have finished my course.",
          explanation: "O Future Perfect exige 'will have + particípio'. Não omita o 'have' — sem ele, a frase perde o sentido de conclusão antes de um ponto futuro."
        },
        {
          wrong: "By the time you will arrive, I will have cooked dinner.",
          correct: "By the time you arrive, I will have cooked dinner.",
          explanation: "Após 'by the time', 'when', 'before' e 'after', use o Simple Present, mesmo falando do futuro. Não use 'will' na cláusula temporal."
        },
        {
          wrong: "She will have went home by now.",
          correct: "She will have gone home by now.",
          explanation: "Após 'have', use sempre o particípio passado (gone), não o Simple Past (went). Essa regra vale para todos os tempos perfeitos."
        }
      ],
      tip: "Sempre que ouvir 'by' + um momento futuro (by tomorrow, by next week, by 2030), pense no Future Perfect. Essa é a pista mais clara de que esse tempo verbal é necessário."
    }
  },
  {
    slug: "cleft-sentences",
    title: "Frases Enfáticas",
    description: "It was John who..., What I need is...",
    level: "B2",
    icon: "🔦",
    content: {
      explanation: `Cleft sentences (frases clivadas ou enfáticas) são estruturas usadas para destacar ou enfatizar uma parte específica da frase. Em vez de simplesmente dizer "John broke the window", podemos dizer "It was John who broke the window" para enfatizar que foi o João, e não outra pessoa. Em português, fazemos algo semelhante: "Foi o João que quebrou a janela."

Existem dois tipos principais de cleft sentences:

IT-CLEFTS: Começam com "It is/was" + elemento enfatizado + who/that/which/where/when:
| Frase original | Cleft sentence | O que é enfatizado? |
|----------------|----------------|---------------------|
| John called you. | It was John who called you. | A pessoa (John) |
| I need a vacation. | It's a vacation that I need. | O objeto (vacation) |
| She was born in Paris. | It was in Paris that she was born. | O lugar (Paris) |
| We met in 2015. | It was in 2015 that we met. | O tempo (2015) |

WH-CLEFTS (pseudo-clefts): Começam com "What" + sujeito + verbo + is/was:
- "What I need is a good night's sleep." (O que eu preciso é de uma boa noite de sono.)
- "What she said was very interesting." (O que ela disse foi muito interessante.)
- "What bothers me is his attitude." (O que me incomoda é a atitude dele.)

Outras variações de WH-clefts incluem:
- "The thing that bothers me is..." (A coisa que me incomoda é...)
- "The reason why I'm here is..." (A razão pela qual estou aqui é...)
- "The person who helped me was..." (A pessoa que me ajudou foi...)
- "All I want is..." (Tudo que eu quero é...)

As cleft sentences são particularmente comuns em inglês formal, acadêmico e jornalístico, mas também aparecem no dia a dia para dar ênfase em conversas. Elas tornam sua comunicação mais sofisticada e precisa, permitindo direcionar a atenção do ouvinte para a informação mais importante.`,
      examples: [
        {
          english: "It was Maria who organized the entire event.",
          portuguese: "Foi a Maria que organizou o evento inteiro.",
          highlight: "It was Maria who"
        },
        {
          english: "What I really need is a long vacation.",
          portuguese: "O que eu realmente preciso é de umas férias longas.",
          highlight: "What I really need is"
        },
        {
          english: "It was in Tokyo that they first met.",
          portuguese: "Foi em Tóquio que eles se conheceram.",
          highlight: "It was in Tokyo that"
        },
        {
          english: "All I wanted was a simple answer.",
          portuguese: "Tudo que eu queria era uma resposta simples.",
          highlight: "All I wanted was"
        },
        {
          english: "The reason why she left was that she felt unappreciated.",
          portuguese: "A razão pela qual ela saiu foi que se sentia desvalorizada.",
          highlight: "The reason why"
        }
      ],
      commonMistakes: [
        {
          wrong: "It was John which called you.",
          correct: "It was John who called you.",
          explanation: "Use 'who' (ou 'that') para pessoas. 'Which' é usado para coisas. Essa regra é a mesma das orações relativas."
        },
        {
          wrong: "What I need is to relaxing.",
          correct: "What I need is to relax.",
          explanation: "Após 'is/was' em WH-clefts, use o infinitivo (to relax) ou substantivo. Não misture infinitivo com gerúndio (to relaxing)."
        },
        {
          wrong: "It was yesterday when I saw her.",
          correct: "It was yesterday that I saw her.",
          explanation: "Em it-clefts com expressões de tempo, use 'that', não 'when'. 'When' é mais natural em relative clauses comuns, mas em cleft sentences, 'that' é preferível."
        }
      ],
      tip: "Use 'It was... who/that...' quando quiser enfatizar QUEM, O QUÊ, ONDE ou QUANDO algo aconteceu. Use 'What... is/was...' para enfatizar a ação ou o resultado."
    }
  },
  {
    slug: "inversion",
    title: "Inversão",
    description: "Not only... but also, Never have I seen",
    level: "B2",
    icon: "🔃",
    content: {
      explanation: `A inversão (inversion) ocorre quando a ordem normal sujeito-verbo é invertida para verbo-sujeito, geralmente para dar ênfase ou em contextos formais. Embora a ordem normal em inglês seja SVO (Sujeito + Verbo + Objeto), em certos casos a inversão cria um efeito dramático e sofisticado.

A inversão acontece principalmente quando a frase começa com expressões negativas ou restritivas. Nesse caso, usamos a estrutura: expressão negativa + auxiliar + sujeito + verbo principal:
| Expressão | Com inversão | Sem inversão (normal) |
|-----------|-------------|----------------------|
| Never | Never have I seen such beauty. | I have never seen such beauty. |
| Not only... but also | Not only does she sing, but she also dances. | She not only sings but also dances. |
| Rarely | Rarely do we get this opportunity. | We rarely get this opportunity. |
| Seldom | Seldom had he felt so happy. | He had seldom felt so happy. |
| Hardly / Scarcely... when | Hardly had I arrived when it started raining. | I had hardly arrived when... |
| No sooner... than | No sooner had she left than the phone rang. | She had no sooner left than... |
| Not until | Not until I saw her did I understand. | I didn't understand until I saw her. |
| Only after/when/if | Only after years did I realize the truth. | I realized the truth only after years. |
| Under no circumstances | Under no circumstances should you open this door. | You should not open this door under any circumstances. |
| At no time | At no time did he apologize. | He did not apologize at any time. |

A inversão segue o mesmo padrão de formação de perguntas: usamos o auxiliar (do/does/did, have/has/had, is/are/was/were, modais) antes do sujeito. Se não há auxiliar natural, adicionamos do/does/did:
- "Rarely does he arrive on time." (adicionamos 'does')
- "Never have I been so surprised." (o auxiliar 'have' já existe)

Note que com "Not only... but also", a inversão ocorre APENAS na primeira parte: "Not only does she speak English, but she also speaks French." A segunda parte mantém a ordem normal.

A inversão é uma marca de linguagem formal e sofisticada. É muito usada em escrita acadêmica, discursos, textos literários e no inglês jornalístico. Embora não seja obrigatória na fala cotidiana, reconhecê-la é essencial para compreensão, e usá-la demonstra alto domínio do idioma.`,
      examples: [
        {
          english: "Not only does he speak English, but he also speaks Mandarin.",
          portuguese: "Ele não apenas fala inglês, mas também fala mandarim.",
          highlight: "Not only does he"
        },
        {
          english: "Never have I seen such a beautiful sunset.",
          portuguese: "Nunca vi um pôr do sol tão lindo.",
          highlight: "Never have I"
        },
        {
          english: "Hardly had we arrived when it started to rain.",
          portuguese: "Mal tínhamos chegado quando começou a chover.",
          highlight: "Hardly had we"
        },
        {
          english: "No sooner had she finished her speech than the audience applauded.",
          portuguese: "Assim que ela terminou seu discurso, a plateia aplaudiu.",
          highlight: "No sooner had she"
        },
        {
          english: "Under no circumstances should you share your password.",
          portuguese: "Sob nenhuma circunstância você deve compartilhar sua senha.",
          highlight: "Under no circumstances should"
        }
      ],
      commonMistakes: [
        {
          wrong: "Never I have seen such a thing.",
          correct: "Never have I seen such a thing.",
          explanation: "Na inversão, o auxiliar vem ANTES do sujeito: Never + have + I. Não mantenha a ordem normal (I have) após expressões negativas no início da frase."
        },
        {
          wrong: "Not only she speaks English, but she also speaks French.",
          correct: "Not only does she speak English, but she also speaks French.",
          explanation: "Após 'Not only', é obrigatório inverter. Use o auxiliar 'does' antes do sujeito: Not only does she speak. Lembre-se: a inversão só acontece na primeira parte."
        },
        {
          wrong: "Hardly I had arrived when the meeting started.",
          correct: "Hardly had I arrived when the meeting started.",
          explanation: "Com 'Hardly/Scarcely... when' e 'No sooner... than', o auxiliar 'had' vem antes do sujeito. Essas estruturas usam Past Perfect na cláusula invertida."
        }
      ],
      tip: "Decore as duplas: 'Hardly/Scarcely... when' e 'No sooner... than'. Misturar essas combinações (Hardly... than / No sooner... when) é um erro frequente em provas."
    }
  }
];
