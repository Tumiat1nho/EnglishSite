import { GrammarTopic } from "../types";

export const grammarB1: GrammarTopic[] = [
  {
    slug: "present-perfect",
    title: "Presente Perfeito",
    description: "I have worked, She has been",
    level: "B1",
    icon: "✅",
    content: {
      explanation: `O Present Perfect é um dos tempos verbais mais desafiadores para brasileiros, pois não existe um equivalente direto em português. Ele é formado com o auxiliar "have/has" + o particípio passado do verbo (past participle). Por exemplo: "I have worked" (Eu tenho trabalhado / Eu trabalhei).

A principal função do Present Perfect é conectar o passado ao presente. Usamos esse tempo verbal quando uma ação passada tem relevância ou consequência no momento atual. Por exemplo, "I have lost my keys" não é apenas uma informação sobre o passado — significa que AGORA eu não tenho as chaves. Compare com "I lost my keys yesterday", que usa o Simple Past para indicar um evento concluído em um momento específico do passado.

Existem quatro usos principais do Present Perfect:
| Uso | Exemplo | Explicação |
|-----|---------|------------|
| Experiências de vida | I have been to Japan | Alguma vez na vida, sem especificar quando |
| Ações recentes com resultado presente | She has broken her arm | O braço ainda está quebrado |
| Ações que começaram no passado e continuam | I have lived here for 10 years | Ainda moro aqui |
| Ações com "just", "already", "yet" | He has just arrived | Acabou de acontecer |

Palavras-chave que frequentemente acompanham o Present Perfect incluem: ever, never, already, yet, just, since, for, so far, recently, lately. A presença dessas palavras geralmente indica que o Present Perfect é o tempo verbal correto.

Atenção especial à diferença entre "for" e "since": usamos "for" com duração (for two hours, for three years) e "since" com ponto de partida (since 2020, since Monday, since I was a child). Ambos indicam que a ação começou no passado e continua até o presente.`,
      examples: [
        {
          english: "I have worked here for five years.",
          portuguese: "Eu trabalho aqui há cinco anos.",
          highlight: "have worked"
        },
        {
          english: "She has never been to Europe.",
          portuguese: "Ela nunca esteve na Europa.",
          highlight: "has never been"
        },
        {
          english: "We have already finished the project.",
          portuguese: "Nós já terminamos o projeto.",
          highlight: "have already finished"
        },
        {
          english: "Have you ever eaten sushi?",
          portuguese: "Você já comeu sushi alguma vez?",
          highlight: "Have you ever eaten"
        },
        {
          english: "He has just left the office.",
          portuguese: "Ele acabou de sair do escritório.",
          highlight: "has just left"
        }
      ],
      commonMistakes: [
        {
          wrong: "I have went to the store.",
          correct: "I have gone to the store.",
          explanation: "Após 'have/has', usamos o particípio passado (gone), não o passado simples (went). Memorize os particípios dos verbos irregulares."
        },
        {
          wrong: "I have seen that movie yesterday.",
          correct: "I saw that movie yesterday.",
          explanation: "Quando especificamos QUANDO algo aconteceu (yesterday, last week, in 2020), usamos o Simple Past, não o Present Perfect."
        },
        {
          wrong: "I live here since 2015.",
          correct: "I have lived here since 2015.",
          explanation: "Em português dizemos 'moro aqui desde 2015' no presente, mas em inglês, ações que começaram no passado e continuam exigem o Present Perfect."
        }
      ],
      tip: "Quando não importa QUANDO algo aconteceu, mas sim o RESULTADO ou a EXPERIÊNCIA, use o Present Perfect. Se há um tempo específico no passado, use o Simple Past."
    }
  },
  {
    slug: "past-continuous",
    title: "Passado Contínuo",
    description: "I was working, They were playing",
    level: "B1",
    icon: "⏳",
    content: {
      explanation: `O Past Continuous (também chamado de Past Progressive) é formado com "was/were" + verbo com "-ing". Usamos "was" com I, he, she, it e "were" com you, we, they. Por exemplo: "I was working" (Eu estava trabalhando), "They were playing" (Eles estavam jogando).

O uso mais comum do Past Continuous é descrever uma ação que estava em andamento em um momento específico do passado. Imagine uma foto tirada em determinado momento — o Past Continuous descreve o que estava acontecendo naquela "foto". Por exemplo: "At 8 PM last night, I was watching TV" (Às 20h ontem à noite, eu estava assistindo TV).

Um dos usos mais importantes é combinar o Past Continuous com o Simple Past para mostrar que uma ação longa foi interrompida por uma ação curta:
| Past Continuous (ação longa) | Simple Past (interrupção) |
|------------------------------|--------------------------|
| I was taking a shower | when the phone rang |
| She was driving to work | when she saw the accident |
| We were sleeping | when the alarm went off |

A estrutura típica é: "I was doing X when Y happened" ou "While I was doing X, Y happened". Note que "when" geralmente introduz a ação curta (Simple Past) e "while" introduz a ação longa (Past Continuous).

O Past Continuous também é usado para descrever duas ações longas que aconteciam ao mesmo tempo no passado: "While I was cooking, my husband was cleaning the house." Outro uso importante é criar ambientação em narrativas: "The sun was shining, birds were singing, and children were playing in the park."`,
      examples: [
        {
          english: "I was studying when you called me.",
          portuguese: "Eu estava estudando quando você me ligou.",
          highlight: "was studying"
        },
        {
          english: "They were playing soccer at 3 PM yesterday.",
          portuguese: "Eles estavam jogando futebol às 15h ontem.",
          highlight: "were playing"
        },
        {
          english: "While she was cooking, the kids were doing homework.",
          portuguese: "Enquanto ela estava cozinhando, as crianças estavam fazendo lição.",
          highlight: "was cooking"
        },
        {
          english: "It was raining heavily when we left the house.",
          portuguese: "Estava chovendo forte quando saímos de casa.",
          highlight: "was raining"
        },
        {
          english: "He wasn't paying attention during the meeting.",
          portuguese: "Ele não estava prestando atenção durante a reunião.",
          highlight: "wasn't paying"
        }
      ],
      commonMistakes: [
        {
          wrong: "I was work when you called.",
          correct: "I was working when you called.",
          explanation: "O Past Continuous exige was/were + verbo com -ing. Nunca use o verbo na forma base após was/were nesta estrutura."
        },
        {
          wrong: "While I studied, the phone was ringing.",
          correct: "While I was studying, the phone rang.",
          explanation: "A ação longa (em progresso) usa Past Continuous, e a ação curta (interrupção) usa Simple Past. Não inverta as estruturas."
        },
        {
          wrong: "I were watching TV last night.",
          correct: "I was watching TV last night.",
          explanation: "Use 'was' com I, he, she, it e 'were' com you, we, they. Diferente do subjuntivo, aqui a concordância é obrigatória."
        }
      ],
      tip: "Pense no Past Continuous como o 'pano de fundo' de uma história. Ele descreve a cena que já estava acontecendo antes de algo novo ocorrer (Simple Past)."
    }
  },
  {
    slug: "first-conditional",
    title: "Primeira Condicional",
    description: "If it rains, I will stay home",
    level: "B1",
    icon: "🔮",
    content: {
      explanation: `A First Conditional (Primeira Condicional) é usada para falar sobre situações futuras que são reais e possíveis. A estrutura básica é: "If + Simple Present, will + verbo base". Por exemplo: "If it rains, I will stay home" (Se chover, eu vou ficar em casa). Note que a condição (if clause) usa o presente simples, NÃO o futuro.

Este é um erro muito comum entre brasileiros: em português dizemos "Se chover", que está no futuro do subjuntivo. Em inglês, a condição SEMPRE usa o Simple Present, mesmo se referindo ao futuro. A cláusula de resultado (main clause) é que usa "will".

A ordem das cláusulas pode ser invertida sem mudança de significado, mas observe a pontuação:
| Ordem | Exemplo | Vírgula? |
|-------|---------|----------|
| If clause primeiro | If you study hard, you will pass. | Sim, usa vírgula |
| Main clause primeiro | You will pass if you study hard. | Não usa vírgula |

Além de "will", podemos usar outros modais na cláusula principal para expressar diferentes graus de certeza ou intenção:
- "If it rains, I might stay home." (possibilidade)
- "If you finish early, you can leave." (permissão)
- "If he calls, I should answer." (conselho)

A First Conditional é diferente da Second Conditional porque trata de situações que o falante considera realmente possíveis ou prováveis. Compare: "If I win the lottery, I will buy a house" (acho possível ganhar) vs. "If I won the lottery, I would buy a house" (acho improvável ganhar). A escolha entre First e Second Conditional muitas vezes reflete a atitude do falante sobre a probabilidade do evento.`,
      examples: [
        {
          english: "If it rains tomorrow, I will stay home.",
          portuguese: "Se chover amanhã, eu vou ficar em casa.",
          highlight: "If it rains"
        },
        {
          english: "You will miss the bus if you don't hurry.",
          portuguese: "Você vai perder o ônibus se não se apressar.",
          highlight: "if you don't hurry"
        },
        {
          english: "If she passes the exam, her parents will be proud.",
          portuguese: "Se ela passar no exame, os pais dela vão ficar orgulhosos.",
          highlight: "If she passes"
        },
        {
          english: "If we leave now, we will arrive on time.",
          portuguese: "Se sairmos agora, vamos chegar a tempo.",
          highlight: "If we leave"
        },
        {
          english: "I won't go to the party if I feel tired.",
          portuguese: "Eu não vou à festa se eu estiver cansado.",
          highlight: "if I feel"
        }
      ],
      commonMistakes: [
        {
          wrong: "If it will rain, I will stay home.",
          correct: "If it rains, I will stay home.",
          explanation: "NUNCA use 'will' na cláusula com 'if' na First Conditional. A condição sempre usa o Simple Present, mesmo falando do futuro."
        },
        {
          wrong: "If you will study, you will pass.",
          correct: "If you study, you will pass.",
          explanation: "O mesmo erro: não use 'will' após 'if'. Em inglês, o Simple Present na cláusula condicional já indica futuro."
        },
        {
          wrong: "If I will have time I will help you.",
          correct: "If I have time, I will help you.",
          explanation: "Além de não usar 'will' após 'if', lembre-se de usar vírgula quando a cláusula 'if' vem primeiro na frase."
        }
      ],
      tip: "Regra de ouro: nunca coloque 'will' logo depois de 'if' na First Conditional. Lembre-se: 'If + presente, will + verbo'. Essa é a fórmula infalível."
    }
  },
  {
    slug: "second-conditional",
    title: "Segunda Condicional",
    description: "If I were rich, I would travel",
    level: "B1",
    icon: "💭",
    content: {
      explanation: `A Second Conditional (Segunda Condicional) é usada para falar sobre situações hipotéticas, imaginárias ou improváveis no presente ou futuro. A estrutura é: "If + Simple Past, would + verbo base". Por exemplo: "If I were rich, I would travel the world" (Se eu fosse rico, viajaria o mundo).

A diferença fundamental entre a First e a Second Conditional é a probabilidade. A First Conditional trata de situações possíveis ("If I have money, I will buy it" — é possível que eu tenha dinheiro). A Second Conditional trata de situações imaginárias ou improváveis ("If I had a million dollars, I would buy a mansion" — provavelmente não terei um milhão).

Um ponto gramatical importante: com o verbo "to be" na Second Conditional, usamos "were" para todas as pessoas, incluindo I, he, she, it. Isso é o subjuntivo em inglês:
| Correto (formal) | Aceito (informal) | Tradução |
|-------------------|-------------------|----------|
| If I were you... | If I was you... | Se eu fosse você... |
| If she were here... | If she was here... | Se ela estivesse aqui... |
| If it were possible... | If it was possible... | Se fosse possível... |

Em contextos formais e provas, prefira sempre "were". A expressão "If I were you, I would..." é uma das mais úteis do inglês para dar conselhos: "If I were you, I would accept the offer" (Se eu fosse você, aceitaria a oferta).

Além de "would", podemos usar "could" (poderia) e "might" (talvez pudesse) na cláusula principal: "If I lived in London, I could visit museums every weekend" ou "If he studied more, he might get better grades". Cada modal traz um matiz diferente de possibilidade.`,
      examples: [
        {
          english: "If I were rich, I would travel around the world.",
          portuguese: "Se eu fosse rico, viajaria pelo mundo.",
          highlight: "If I were"
        },
        {
          english: "If she spoke English fluently, she would get a better job.",
          portuguese: "Se ela falasse inglês fluentemente, conseguiria um emprego melhor.",
          highlight: "would get"
        },
        {
          english: "I would buy a bigger house if I had more money.",
          portuguese: "Eu compraria uma casa maior se tivesse mais dinheiro.",
          highlight: "would buy"
        },
        {
          english: "If I were you, I would accept the offer.",
          portuguese: "Se eu fosse você, aceitaria a oferta.",
          highlight: "If I were you"
        },
        {
          english: "What would you do if you won the lottery?",
          portuguese: "O que você faria se ganhasse na loteria?",
          highlight: "would you do"
        }
      ],
      commonMistakes: [
        {
          wrong: "If I would be rich, I would travel.",
          correct: "If I were rich, I would travel.",
          explanation: "Nunca use 'would' na cláusula com 'if'. Use o Simple Past (ou 'were' para o verbo to be) na condição."
        },
        {
          wrong: "If I have more time, I would study French.",
          correct: "If I had more time, I would study French.",
          explanation: "Na Second Conditional, a cláusula 'if' exige Simple Past. 'If I have' com 'would' mistura First e Second Conditional."
        },
        {
          wrong: "If I was you, I would go.",
          correct: "If I were you, I would go.",
          explanation: "Embora 'was' seja aceito informalmente, a forma gramaticalmente correta é 'were' para todas as pessoas na Second Conditional. Em provas, sempre use 'were'."
        }
      ],
      tip: "Use a Second Conditional para dar conselhos com 'If I were you, I would...'. Essa é uma das expressões mais naturais e úteis do inglês no dia a dia."
    }
  },
  {
    slug: "modal-verbs",
    title: "Verbos Modais",
    description: "must, should, might, may",
    level: "B1",
    icon: "🔑",
    content: {
      explanation: `Os verbos modais (modal verbs) são verbos auxiliares especiais em inglês que expressam ideias como capacidade, possibilidade, permissão, obrigação e conselho. Os principais são: can, could, may, might, must, shall, should, will, would. Eles têm regras próprias que os tornam diferentes dos verbos comuns.

Regras fundamentais dos modais:
| Regra | Exemplo correto | Exemplo incorreto |
|-------|-----------------|-------------------|
| Não recebem -s na 3ª pessoa | She must go | She musts go |
| São seguidos de verbo base (sem "to") | You should study | You should to study |
| Formam negativa sem "do" | He can't swim | He doesn't can swim |
| Formam pergunta por inversão | Can you help? | Do you can help? |

Cada modal expressa significados diferentes. Veja os mais importantes para o nível B1:

MUST: Expressa obrigação forte ou dedução lógica. "You must wear a seatbelt" (obrigação). "She must be tired — she worked 12 hours" (dedução). A negativa "mustn't" expressa proibição: "You mustn't park here."

SHOULD: Expressa conselho ou expectativa. "You should see a doctor" (conselho). "The package should arrive tomorrow" (expectativa). É mais suave que "must".

MIGHT / MAY: Ambos expressam possibilidade, sendo "may" ligeiramente mais formal. "It might rain later" = "It may rain later" (Pode ser que chova). "May" também é usado para permissão formal: "May I come in?"

COULD: Expressa capacidade no passado ("I could swim when I was five"), possibilidade ("It could rain") ou pedido educado ("Could you help me?").

Uma confusão comum entre brasileiros é a diferença entre "must" e "have to". Ambos expressam obrigação, mas "must" vem do falante (regra pessoal ou dedução) e "have to" vem de uma regra externa. Na negativa, são muito diferentes: "mustn't" = proibição, "don't have to" = não é necessário (mas pode).`,
      examples: [
        {
          english: "You must finish this report by Friday.",
          portuguese: "Você deve terminar este relatório até sexta-feira.",
          highlight: "must"
        },
        {
          english: "She should see a doctor about that cough.",
          portuguese: "Ela deveria ir ao médico por causa dessa tosse.",
          highlight: "should"
        },
        {
          english: "It might rain this afternoon, so take an umbrella.",
          portuguese: "Pode ser que chova esta tarde, então leve um guarda-chuva.",
          highlight: "might"
        },
        {
          english: "May I use your phone for a moment?",
          portuguese: "Posso usar seu telefone por um momento?",
          highlight: "May"
        },
        {
          english: "You mustn't tell anyone about this secret.",
          portuguese: "Você não pode contar a ninguém sobre este segredo.",
          highlight: "mustn't"
        }
      ],
      commonMistakes: [
        {
          wrong: "She can to speak three languages.",
          correct: "She can speak three languages.",
          explanation: "Verbos modais NUNCA são seguidos de 'to'. O verbo seguinte sempre fica na forma base: can speak, must go, should try."
        },
        {
          wrong: "He musts leave now.",
          correct: "He must leave now.",
          explanation: "Modais não mudam na terceira pessoa — nunca acrescente -s. É 'he must', 'she can', 'it should', sem exceção."
        },
        {
          wrong: "You don't must worry about it.",
          correct: "You mustn't worry about it. / You don't have to worry about it.",
          explanation: "Modais formam a negativa sozinhos (must → mustn't, can → can't). Não use 'do/does' com modais. E lembre-se: 'mustn't' (proibição) é diferente de 'don't have to' (desnecessário)."
        }
      ],
      tip: "Grave esta diferença crucial: 'mustn't' = é proibido (You mustn't smoke here). 'Don't have to' = não precisa, não é necessário (You don't have to come if you don't want to)."
    }
  },
  {
    slug: "relative-clauses",
    title: "Orações Relativas",
    description: "who, which, that, where",
    level: "B1",
    icon: "🔗",
    content: {
      explanation: `As relative clauses (orações relativas) são usadas para dar informações adicionais sobre um substantivo, conectando duas ideias em uma frase só. Em vez de dizer "I have a friend. He lives in London", podemos dizer "I have a friend who lives in London". Os pronomes relativos são: who (pessoas), which (coisas), that (pessoas ou coisas), where (lugares), whose (posse) e when (tempo).

Existem dois tipos de orações relativas, e a diferença é muito importante:

DEFINING (restritivas): Identificam qual pessoa ou coisa estamos falando. São essenciais para o sentido da frase. NÃO usam vírgula.
- "The man who lives next door is a doctor." (Qual homem? O que mora ao lado.)

NON-DEFINING (explicativas): Adicionam informação extra que poderia ser removida sem alterar o sentido. USAM vírgulas.
- "My brother, who lives in London, is a doctor." (Já sabemos qual irmão — a informação é extra.)

| Tipo | Vírgulas | Pode usar "that"? | Pode omitir o pronome? |
|------|----------|-------------------|----------------------|
| Defining | Não | Sim | Sim, se for objeto |
| Non-defining | Sim | Não | Não |

Quando o pronome relativo é OBJETO do verbo na oração relativa, ele pode ser omitido nas defining clauses. Compare:
- "The book (that/which) I bought is great." — "I bought" já tem sujeito (I), então "that/which" é objeto e pode ser omitido.
- "The man who called you is here." — "who" é sujeito de "called", então NÃO pode ser omitido.

O pronome "whose" indica posse e substitui his/her/its/their: "I met a woman whose daughter works at Google" (cuja filha trabalha no Google). "Where" é usado para lugares: "The restaurant where we had dinner was excellent."`,
      examples: [
        {
          english: "The woman who called you is my sister.",
          portuguese: "A mulher que te ligou é minha irmã.",
          highlight: "who"
        },
        {
          english: "The book which I bought yesterday is very interesting.",
          portuguese: "O livro que comprei ontem é muito interessante.",
          highlight: "which"
        },
        {
          english: "Paris, where I spent my honeymoon, is a beautiful city.",
          portuguese: "Paris, onde passei minha lua de mel, é uma cidade linda.",
          highlight: "where"
        },
        {
          english: "She's the teacher whose classes are always fun.",
          portuguese: "Ela é a professora cujas aulas são sempre divertidas.",
          highlight: "whose"
        },
        {
          english: "The movie that we watched last night was amazing.",
          portuguese: "O filme que assistimos ontem à noite foi incrível.",
          highlight: "that"
        }
      ],
      commonMistakes: [
        {
          wrong: "My mother, that lives in São Paulo, is retired.",
          correct: "My mother, who lives in São Paulo, is retired.",
          explanation: "Em non-defining clauses (com vírgulas), NÃO podemos usar 'that'. Use 'who' para pessoas e 'which' para coisas."
        },
        {
          wrong: "The city where I was born it is very small.",
          correct: "The city where I was born is very small.",
          explanation: "Não repita o sujeito após a oração relativa. 'The city' já é o sujeito — não acrescente 'it'."
        },
        {
          wrong: "I have a friend which works at Google.",
          correct: "I have a friend who works at Google.",
          explanation: "Use 'who' (ou 'that') para pessoas. 'Which' é usado apenas para coisas e animais."
        }
      ],
      tip: "Se a informação identifica de quem ou do que você está falando, não use vírgulas (defining). Se é apenas um detalhe extra sobre algo já identificado, use vírgulas (non-defining)."
    }
  },
  {
    slug: "passive-voice",
    title: "Voz Passiva",
    description: "The book was written, English is spoken",
    level: "B1",
    icon: "🔄",
    content: {
      explanation: `A Passive Voice (Voz Passiva) é usada quando queremos dar mais importância à ação ou ao objeto que sofre a ação, em vez de quem a pratica. A estrutura é: sujeito + verbo "to be" (no tempo adequado) + particípio passado. Por exemplo: "The book was written by J.K. Rowling" (O livro foi escrito por J.K. Rowling).

Em português, também usamos a voz passiva, então o conceito não é novo. A diferença está na frequência e nos contextos de uso. Em inglês, a voz passiva é muito mais comum, especialmente em contextos formais, acadêmicos, jornalísticos e científicos.

Usamos a voz passiva em três situações principais:
| Situação | Exemplo | Por quê? |
|----------|---------|----------|
| Não sabemos quem fez | My car was stolen. | Quem roubou? Não sei. |
| Não importa quem fez | English is spoken worldwide. | Quem fala? Todos, não importa. |
| Queremos enfatizar a ação | The bridge was built in 1889. | O foco é na ponte, não no construtor. |

A voz passiva pode ser formada em vários tempos verbais:
- Present Simple: "Coffee is grown in Brazil." (O café é cultivado no Brasil.)
- Past Simple: "The window was broken yesterday." (A janela foi quebrada ontem.)
- Present Perfect: "The email has been sent." (O email foi enviado.)
- Future (will): "The results will be announced tomorrow." (Os resultados serão anunciados amanhã.)
- Modal verbs: "This problem can be solved." (Este problema pode ser resolvido.)

O agente (quem pratica a ação) pode ser mencionado com "by", mas muitas vezes é omitido: "The Mona Lisa was painted by Leonardo da Vinci" (agente importante) vs. "The building was constructed in 2010" (agente não é relevante).`,
      examples: [
        {
          english: "English is spoken in many countries around the world.",
          portuguese: "Inglês é falado em muitos países ao redor do mundo.",
          highlight: "is spoken"
        },
        {
          english: "The book was written by George Orwell in 1949.",
          portuguese: "O livro foi escrito por George Orwell em 1949.",
          highlight: "was written"
        },
        {
          english: "The new hospital will be opened next month.",
          portuguese: "O novo hospital será inaugurado no próximo mês.",
          highlight: "will be opened"
        },
        {
          english: "Three people were injured in the accident.",
          portuguese: "Três pessoas ficaram feridas no acidente.",
          highlight: "were injured"
        },
        {
          english: "The homework must be submitted by Friday.",
          portuguese: "A lição de casa deve ser entregue até sexta-feira.",
          highlight: "must be submitted"
        }
      ],
      commonMistakes: [
        {
          wrong: "The letter was send yesterday.",
          correct: "The letter was sent yesterday.",
          explanation: "Na voz passiva, sempre use o particípio passado (sent), não a forma base (send). Cuidado com os verbos irregulares: send → sent, write → written, make → made."
        },
        {
          wrong: "The cake was ate by the children.",
          correct: "The cake was eaten by the children.",
          explanation: "Use o particípio passado correto. 'Ate' é o Simple Past; o particípio de 'eat' é 'eaten'. Confira sempre: eat → ate → eaten."
        },
        {
          wrong: "My phone was been stolen.",
          correct: "My phone was stolen. / My phone has been stolen.",
          explanation: "Não misture 'was' com 'been'. Use 'was stolen' (Past Simple passive) ou 'has been stolen' (Present Perfect passive), mas nunca 'was been'."
        }
      ],
      tip: "Se você não sabe quem fez a ação, ou se quem fez não é importante, a voz passiva é a escolha certa. No inglês formal e acadêmico, ela é amplamente utilizada."
    }
  },
  {
    slug: "reported-speech",
    title: "Discurso Indireto",
    description: "He said that..., She told me that...",
    level: "B1",
    icon: "🗣️",
    content: {
      explanation: `O Reported Speech (Discurso Indireto) é usado quando queremos relatar o que alguém disse, sem usar as palavras exatas da pessoa. Em vez de citar diretamente ("I am tired"), transformamos a fala: "He said (that) he was tired." Assim como em português, há mudanças nos tempos verbais, pronomes e expressões de tempo.

A regra principal é o "backshift" — os tempos verbais recuam um passo quando o verbo introdutório (said, told) está no passado:
| Fala direta | Discurso indireto |
|-------------|-------------------|
| "I am happy." | He said he was happy. |
| "I work here." | She said she worked there. |
| "I am working." | He said he was working. |
| "I have finished." | She said she had finished. |
| "I worked yesterday." | He said he had worked the day before. |
| "I will call you." | She said she would call me. |
| "I can swim." | He said he could swim. |

Além dos verbos, outras palavras também mudam:
| Direto | Indireto |
|--------|----------|
| today | that day |
| tomorrow | the next day / the following day |
| yesterday | the day before / the previous day |
| here | there |
| this | that |
| now | then |

A diferença entre "say" e "tell" é fundamental: "say" não precisa de objeto pessoal ("He said that..."), mas "tell" precisa ("He told me that..."). Nunca diga "He said me" nem "He told that".

Para relatar perguntas, a estrutura muda para a ordem afirmativa (sem inversão): "Where do you live?" → "She asked me where I lived." Para perguntas de sim/não, usamos "if" ou "whether": "Are you happy?" → "He asked me if I was happy."`,
      examples: [
        {
          english: "She said that she was feeling tired.",
          portuguese: "Ela disse que estava se sentindo cansada.",
          highlight: "said that"
        },
        {
          english: "He told me he would call me the next day.",
          portuguese: "Ele me disse que me ligaria no dia seguinte.",
          highlight: "told me"
        },
        {
          english: "They said they had already eaten dinner.",
          portuguese: "Eles disseram que já tinham jantado.",
          highlight: "said they had"
        },
        {
          english: "She asked me where I lived.",
          portuguese: "Ela me perguntou onde eu morava.",
          highlight: "asked me where"
        },
        {
          english: "He asked me if I could help him.",
          portuguese: "Ele me perguntou se eu poderia ajudá-lo.",
          highlight: "asked me if"
        }
      ],
      commonMistakes: [
        {
          wrong: "He said me that he was tired.",
          correct: "He told me that he was tired. / He said that he was tired.",
          explanation: "'Say' não aceita objeto pessoal direto (não diga 'said me'). Use 'told me' quando há um destinatário, ou 'said that' sem objeto pessoal."
        },
        {
          wrong: "She asked me where did I work.",
          correct: "She asked me where I worked.",
          explanation: "No Reported Speech de perguntas, NÃO use a ordem interrogativa. A ordem é a mesma de uma afirmação: sujeito + verbo."
        },
        {
          wrong: "He told that he was happy.",
          correct: "He told me that he was happy. / He said that he was happy.",
          explanation: "'Tell' sempre precisa de um objeto pessoal (told me, told her, told them). Se não quer mencionar o destinatário, use 'said'."
        }
      ],
      tip: "Memorize a dupla: 'SAY something' (sem pessoa) e 'TELL someone something' (com pessoa). Essa distinção é testada frequentemente em provas e é um erro muito comum entre brasileiros."
    }
  }
];
