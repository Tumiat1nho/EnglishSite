export interface GrammarTopic {
  slug: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  content: {
    explanation: string;
    examples: { english: string; portuguese: string; highlight: string }[];
    commonMistakes: { wrong: string; correct: string; explanation: string }[];
    tip: string;
  };
}

export const grammarTopics: GrammarTopic[] = [
  {
    slug: "verb-to-be",
    title: "Verbo To Be",
    description:
      "Aprenda a conjugar e usar o verbo mais importante do inglês: o verbo to be (ser/estar).",
    level: "A1",
    icon: "\u2728",
    content: {
      explanation: `O verbo TO BE é o verbo mais fundamental do inglês e corresponde aos verbos "ser" e "estar" em português. Diferente do português, onde temos duas palavras distintas, em inglês usamos o mesmo verbo para ambos os significados.

**Conjugação no Presente (Present Tense):**

| Pronome | Forma Afirmativa | Contração |
|---------|-----------------|-----------|
| I | am | I'm |
| You | are | You're |
| He | is | He's |
| She | is | She's |
| It | is | It's |
| We | are | We're |
| They | are | They're |

**Forma Negativa:**
Para negar, basta adicionar "not" depois do verbo to be.
- I am not (I'm not)
- You are not (You aren't / You're not)
- He is not (He isn't / He's not)

**Forma Interrogativa:**
Para perguntas, invertemos a ordem: o verbo to be vem antes do sujeito.
- Am I...?
- Are you...?
- Is he/she/it...?

**Usos principais:**
1. Identidade: "I am a student." (Eu sou um estudante.)
2. Nacionalidade: "She is Brazilian." (Ela é brasileira.)
3. Profissão: "He is a doctor." (Ele é médico.)
4. Estado/Condição: "I am tired." (Eu estou cansado.)
5. Localização: "They are at home." (Eles estão em casa.)
6. Idade: "I am 25 years old." (Eu tenho 25 anos.) — Atenção: em inglês usamos "ser" para idade, não "ter"!
7. Clima: "It is cold today." (Está frio hoje.)`,
      examples: [
        {
          english: "I am a teacher.",
          portuguese: "Eu sou um professor.",
          highlight: "am",
        },
        {
          english: "She is happy today.",
          portuguese: "Ela está feliz hoje.",
          highlight: "is",
        },
        {
          english: "We are from Brazil.",
          portuguese: "Nós somos do Brasil.",
          highlight: "are",
        },
        {
          english: "It is raining outside.",
          portuguese: "Está chovendo lá fora.",
          highlight: "is",
        },
        {
          english: "They are not at school.",
          portuguese: "Eles não estão na escola.",
          highlight: "are not",
        },
        {
          english: "Are you ready?",
          portuguese: "Você está pronto?",
          highlight: "Are",
        },
        {
          english: "I'm not hungry.",
          portuguese: "Eu não estou com fome.",
          highlight: "'m not",
        },
        {
          english: "He is 30 years old.",
          portuguese: "Ele tem 30 anos.",
          highlight: "is",
        },
      ],
      commonMistakes: [
        {
          wrong: "I have 25 years old.",
          correct: "I am 25 years old.",
          explanation:
            'Em inglês, usamos o verbo "to be" (ser) para falar de idade, não o verbo "have" (ter) como em português.',
        },
        {
          wrong: "I am agree with you.",
          correct: "I agree with you.",
          explanation:
            '"Agree" já é um verbo em inglês, então não precisamos do "to be" antes dele. Não dizemos "eu sou concordo".',
        },
        {
          wrong: "He are a good student.",
          correct: "He is a good student.",
          explanation:
            'Com "he", "she" e "it" sempre usamos "is", nunca "are". "Are" é usado com "you", "we" e "they".',
        },
        {
          wrong: "She is have a car.",
          correct: "She has a car.",
          explanation:
            'Não misture o verbo "to be" com outros verbos. "Have" (ter) é um verbo independente e não precisa do "to be".',
        },
        {
          wrong: "Is cold today.",
          correct: "It is cold today.",
          explanation:
            'Em inglês, sempre precisamos de um sujeito. Para clima, tempo e horas, usamos "it" como sujeito, mesmo sem tradução direta.',
        },
      ],
      tip: 'Dica prática: Quando estiver em dúvida se deve usar "to be", pergunte-se: em português eu usaria "ser" ou "estar"? Se sim, provavelmente você precisa do "to be" em inglês. Mas cuidado com as exceções como idade (ter anos) e fome/sede (estar com fome = be hungry). Pratique as contrações (I\'m, you\'re, he\'s) pois são muito mais usadas na fala do dia a dia!',
    },
  },
  {
    slug: "simple-present",
    title: "Presente Simples (Simple Present)",
    description:
      "Domine o tempo verbal mais usado do inglês: o Simple Present, usado para rotinas, fatos e verdades gerais.",
    level: "A1",
    icon: "\uD83D\uDD04",
    content: {
      explanation: `O Simple Present (Presente Simples) é um dos tempos verbais mais importantes do inglês. Ele é usado para expressar hábitos, rotinas, fatos gerais e verdades universais.

**Quando usar o Simple Present:**
1. Rotinas e hábitos: "I wake up at 7 a.m." (Eu acordo às 7h.)
2. Fatos gerais: "Water boils at 100°C." (A água ferve a 100°C.)
3. Preferências: "She likes chocolate." (Ela gosta de chocolate.)
4. Horários fixos: "The train leaves at 8 p.m." (O trem sai às 20h.)

**Regra fundamental — O "S" da terceira pessoa:**
Na forma afirmativa, quando o sujeito é HE, SHE ou IT, o verbo recebe um "s", "es" ou "ies" no final.

| Regra | Exemplo |
|-------|---------|
| Maioria dos verbos: +s | work → works, play → plays |
| Verbos terminados em -s, -sh, -ch, -x, -o: +es | go → goes, watch → watches, wash → washes |
| Verbos terminados em consoante + y: troca y por ies | study → studies, carry → carries |
| Verbos terminados em vogal + y: +s | play → plays, enjoy → enjoys |

**Forma Negativa:**
Usamos DO NOT (don't) ou DOES NOT (doesn't) + verbo na forma base (sem "s").
- I/You/We/They + don't + verbo base
- He/She/It + doesn't + verbo base

Exemplo: "She doesn't like coffee." (Ela não gosta de café.) — Note que o "s" sai do verbo e vai para o "does".

**Forma Interrogativa:**
Usamos DO ou DOES antes do sujeito + verbo na forma base.
- Do + I/you/we/they + verbo base?
- Does + he/she/it + verbo base?

Exemplo: "Does he speak English?" (Ele fala inglês?)

**Advérbios de frequência comuns:**
always (sempre), usually (geralmente), often (frequentemente), sometimes (às vezes), rarely (raramente), never (nunca).
Eles geralmente vêm ANTES do verbo principal: "I always drink coffee in the morning."`,
      examples: [
        {
          english: "She works at a hospital.",
          portuguese: "Ela trabalha em um hospital.",
          highlight: "works",
        },
        {
          english: "I don't eat meat.",
          portuguese: "Eu não como carne.",
          highlight: "don't eat",
        },
        {
          english: "Do you speak Portuguese?",
          portuguese: "Você fala português?",
          highlight: "Do",
        },
        {
          english: "He goes to the gym every day.",
          portuguese: "Ele vai à academia todo dia.",
          highlight: "goes",
        },
        {
          english: "They usually have lunch at noon.",
          portuguese: "Eles geralmente almoçam ao meio-dia.",
          highlight: "usually have",
        },
        {
          english: "She doesn't like spicy food.",
          portuguese: "Ela não gosta de comida apimentada.",
          highlight: "doesn't like",
        },
        {
          english: "The sun rises in the east.",
          portuguese: "O sol nasce no leste.",
          highlight: "rises",
        },
        {
          english: "Does your mother cook well?",
          portuguese: "Sua mãe cozinha bem?",
          highlight: "Does",
        },
      ],
      commonMistakes: [
        {
          wrong: "She don't like pizza.",
          correct: "She doesn't like pizza.",
          explanation:
            'Com he/she/it, usamos "doesn\'t" (does not), nunca "don\'t". O "does" já carrega o "s" da terceira pessoa.',
        },
        {
          wrong: "He doesn't likes coffee.",
          correct: "He doesn't like coffee.",
          explanation:
            'Quando usamos "doesn\'t", o verbo volta para a forma base (sem "s"). O "s" já está embutido no "does".',
        },
        {
          wrong: "Does she likes music?",
          correct: "Does she like music?",
          explanation:
            'Em perguntas com "does", o verbo principal fica na forma base, sem "s". O auxiliar "does" já indica a terceira pessoa.',
        },
        {
          wrong: "I am work every day.",
          correct: "I work every day.",
          explanation:
            'Não use o verbo "to be" com outros verbos no Simple Present. Diga simplesmente "I work", não "I am work".',
        },
        {
          wrong: "He studys every night.",
          correct: "He studies every night.",
          explanation:
            'Verbos terminados em consoante + "y" trocam o "y" por "ies" na terceira pessoa. Study → studies, carry → carries.',
        },
      ],
      tip: 'Dica prática: Lembre-se da regrinha "HE, SHE, IT — o S não esquecit!" (uma frase inventada para memorizar). Na afirmativa, o verbo SEMPRE ganha "s" com he/she/it. Mas nas formas negativa e interrogativa, o "s" migra para o auxiliar (does/doesn\'t) e o verbo volta ao normal. Pratique criando frases sobre sua rotina diária!',
    },
  },
  {
    slug: "articles",
    title: "Artigos em Inglês (a, an, the)",
    description:
      "Entenda quando usar os artigos 'a', 'an' e 'the' — e quando não usar nenhum artigo.",
    level: "A2",
    icon: "\uD83D\uDCDD",
    content: {
      explanation: `Os artigos em inglês são palavras pequenas, mas que causam muita confusão para brasileiros. Em inglês existem apenas três artigos: "a", "an" (artigos indefinidos) e "the" (artigo definido). Diferente do português, não há variação de gênero ou número.

**Artigos Indefinidos: A e AN**
Equivalem a "um/uma" em português. Usamos com substantivos contáveis no singular quando mencionamos algo pela primeira vez ou de forma geral.

- **A**: usado antes de palavras que começam com som de CONSOANTE.
  - a book (um livro), a car (um carro), a university (uma universidade — começa com som de /ju/)

- **AN**: usado antes de palavras que começam com som de VOGAL.
  - an apple (uma maçã), an hour (uma hora — o "h" é mudo), an umbrella (um guarda-chuva)

**IMPORTANTE:** O que importa é o SOM, não a letra! Por isso:
- "a university" (som de /ju/, que é consoante)
- "an hour" (som de /au/, pois o "h" é mudo)
- "a European country" (som de /ju/)
- "an honest person" (som de /o/, pois o "h" é mudo)

**Artigo Definido: THE**
Equivale a "o/a/os/as" em português. Usamos quando falamos de algo específico, já conhecido ou mencionado antes.

**Quando usar THE:**
1. Algo já mencionado: "I bought a car. The car is blue." (Comprei um carro. O carro é azul.)
2. Algo único: "the sun" (o sol), "the moon" (a lua), "the internet" (a internet)
3. Superlativo: "the best" (o melhor), "the tallest" (o mais alto)
4. Instrumentos musicais: "She plays the piano." (Ela toca piano.)
5. Com "only": "the only option" (a única opção)

**Quando NÃO usar artigo (artigo zero):**
1. Substantivos incontáveis ou plurais em sentido geral: "I like music." (Eu gosto de música.) / "Dogs are loyal." (Cães são leais.)
2. Refeições: "I have breakfast at 8." (Eu tomo café da manhã às 8.)
3. Esportes e jogos: "She plays tennis." (Ela joga tênis.)
4. Idiomas: "He speaks English." (Ele fala inglês.)
5. Dias da semana e meses: "on Monday" (na segunda), "in January" (em janeiro)
6. Países (maioria): "Brazil is big." / Exceções: the United States, the United Kingdom, the Netherlands
7. Antes de nomes próprios: "Maria is smart." (Maria é inteligente.)`,
      examples: [
        {
          english: "I saw a dog in the park.",
          portuguese: "Eu vi um cachorro no parque.",
          highlight: "a",
        },
        {
          english: "She is an engineer.",
          portuguese: "Ela é uma engenheira.",
          highlight: "an",
        },
        {
          english: "The book you recommended is great.",
          portuguese: "O livro que você recomendou é ótimo.",
          highlight: "The",
        },
        {
          english: "I need an umbrella. It is raining.",
          portuguese: "Eu preciso de um guarda-chuva. Está chovendo.",
          highlight: "an",
        },
        {
          english: "He is the best player on the team.",
          portuguese: "Ele é o melhor jogador do time.",
          highlight: "the best",
        },
        {
          english: "I like coffee.",
          portuguese: "Eu gosto de café. (sem artigo — sentido geral)",
          highlight: "coffee",
        },
        {
          english: "She waited for an hour.",
          portuguese: "Ela esperou por uma hora.",
          highlight: "an",
        },
        {
          english: "He goes to a university in São Paulo.",
          portuguese: "Ele vai para uma universidade em São Paulo.",
          highlight: "a",
        },
      ],
      commonMistakes: [
        {
          wrong: "She is an university student.",
          correct: "She is a university student.",
          explanation:
            'Embora "university" comece com a letra "u" (vogal), o som inicial é /ju/ (consoante). Por isso usamos "a", não "an". Lembre-se: o que importa é o SOM!',
        },
        {
          wrong: "I need a hour to finish.",
          correct: "I need an hour to finish.",
          explanation:
            'O "h" em "hour" é mudo, então o som inicial é /au/ (vogal). Por isso usamos "an", não "a".',
        },
        {
          wrong: "I like the music.",
          correct: "I like music.",
          explanation:
            'Quando falamos de algo em geral (música como conceito), não usamos artigo. Use "the" apenas quando se referir a uma música específica: "I like the music in this movie."',
        },
        {
          wrong: "The Brazil is a beautiful country.",
          correct: "Brazil is a beautiful country.",
          explanation:
            'A maioria dos nomes de países não usa artigo em inglês. Exceções incluem: the United States, the United Kingdom, the Netherlands, the Philippines.',
        },
        {
          wrong: "He plays a guitar very well.",
          correct: "He plays the guitar very well.",
          explanation:
            'Quando falamos de tocar um instrumento musical como habilidade, usamos "the" antes do instrumento: play the piano, play the guitar, play the violin.',
        },
      ],
      tip: 'Dica prática: Quando estiver em dúvida entre "a" e "an", diga a palavra em voz alta. Se o SOM começar com uma vogal, use "an". Se começar com consoante, use "a". Para decidir se usa "the" ou nenhum artigo, pergunte-se: estou falando de algo ESPECÍFICO que o ouvinte já sabe qual é? Se sim, use "the". Se estou falando de forma geral, não use artigo nenhum.',
    },
  },
  {
    slug: "pronouns",
    title: "Pronomes Pessoais (Personal Pronouns)",
    description:
      "Aprenda todos os pronomes pessoais do inglês: pronomes sujeito, pronomes objeto, possessivos e reflexivos.",
    level: "A1",
    icon: "\uD83D\uDC64",
    content: {
      explanation: `Os pronomes pessoais em inglês são palavras que substituem os nomes (substantivos) para evitar repetição. Diferente do português, em inglês os pronomes são obrigatórios — não podemos omitir o sujeito da frase.

**Pronomes Sujeito (Subject Pronouns):**
São usados como sujeito da frase, ou seja, quem pratica a ação.

| Inglês | Português |
|--------|-----------|
| I | eu |
| you | você / tu / vocês |
| he | ele |
| she | ela |
| it | ele/ela (para coisas, animais, conceitos) |
| we | nós |
| they | eles/elas |

**Observações importantes:**
- "I" (eu) é SEMPRE escrito com letra maiúscula, em qualquer posição na frase.
- "You" serve tanto para "você" (singular) quanto para "vocês" (plural). Não existe diferença.
- "It" é usado para objetos, animais (quando não sabemos ou não importa o sexo), clima, horas e distâncias. Não existe equivalente exato em português.
- "They" pode se referir a pessoas, animais ou coisas no plural.

**Pronomes Objeto (Object Pronouns):**
São usados como complemento do verbo ou após preposições.

| Sujeito | Objeto | Tradução aproximada |
|---------|--------|-------------------|
| I | me | me, mim |
| you | you | te, ti, você(s) |
| he | him | o, ele, lhe |
| she | her | a, ela, lhe |
| it | it | o/a (coisa) |
| we | us | nos, nós |
| they | them | os/as, eles/elas, lhes |

**Quando usar pronomes objeto:**
1. Após verbos: "She loves him." (Ela o ama.)
2. Após preposições: "This gift is for her." (Este presente é para ela.)
3. Como complemento: "Tell me the truth." (Me diga a verdade.)

**Dica sobre a diferença entre sujeito e objeto:**
- Sujeito: vem ANTES do verbo → "He likes pizza."
- Objeto: vem DEPOIS do verbo ou preposição → "I like him." / "with her"

**Pronomes Possessivos Adjetivos (meu, seu, dele...):**
| Pronome | Possessivo | Exemplo |
|---------|-----------|---------|
| I | my | my book (meu livro) |
| you | your | your house (sua casa) |
| he | his | his car (o carro dele) |
| she | her | her name (o nome dela) |
| it | its | its color (sua cor — de uma coisa) |
| we | our | our school (nossa escola) |
| they | their | their children (os filhos deles) |

**Importante:** Os possessivos em inglês NÃO variam em gênero nem número. "His" significa "dele" e serve para "his book" (o livro dele), "his books" (os livros dele), "his house" (a casa dele).`,
      examples: [
        {
          english: "I love my family.",
          portuguese: "Eu amo minha família.",
          highlight: "I",
        },
        {
          english: "She told him the news.",
          portuguese: "Ela contou a ele a novidade.",
          highlight: "him",
        },
        {
          english: "Can you help us?",
          portuguese: "Você pode nos ajudar?",
          highlight: "us",
        },
        {
          english: "They invited her to the party.",
          portuguese: "Eles a convidaram para a festa.",
          highlight: "her",
        },
        {
          english: "It is a beautiful day.",
          portuguese: "É um dia bonito. (it = sujeito obrigatório)",
          highlight: "It",
        },
        {
          english: "Give me the book, please.",
          portuguese: "Me dê o livro, por favor.",
          highlight: "me",
        },
        {
          english: "We saw them at the mall.",
          portuguese: "Nós os vimos no shopping.",
          highlight: "them",
        },
        {
          english: "This is his phone, not hers.",
          portuguese: "Este é o celular dele, não o dela.",
          highlight: "his",
        },
      ],
      commonMistakes: [
        {
          wrong: "Me and John went to the store.",
          correct: "John and I went to the store.",
          explanation:
            'Quando "eu" é sujeito da frase, usamos "I", não "me". Além disso, em inglês é educado colocar a outra pessoa primeiro: "John and I", não "I and John".',
        },
        {
          wrong: "Him is my friend.",
          correct: "He is my friend.",
          explanation:
            '"Him" é pronome objeto. Como sujeito da frase (antes do verbo), devemos usar "He".',
        },
        {
          wrong: "Is raining outside.",
          correct: "It is raining outside.",
          explanation:
            'Em inglês, toda frase precisa de sujeito. Para fenômenos da natureza, horas e clima, usamos "it" como sujeito, mesmo que não tenha tradução em português.',
        },
        {
          wrong: "She likes he.",
          correct: "She likes him.",
          explanation:
            'Depois de um verbo, usamos o pronome objeto. "He" é pronome sujeito; "him" é o pronome objeto correspondente.',
        },
        {
          wrong: "i am happy.",
          correct: "I am happy.",
          explanation:
            'O pronome "I" (eu) é SEMPRE escrito com letra maiúscula em inglês, independentemente da posição na frase. É a única letra que tem essa regra.',
        },
      ],
      tip: 'Dica prática: Para saber se deve usar o pronome sujeito ou objeto, veja a posição: ANTES do verbo = sujeito (I, he, she, we, they); DEPOIS do verbo ou preposição = objeto (me, him, her, us, them). Uma regra fácil: tente tirar a outra pessoa da frase. "Me and John went" → "Me went"? Soa estranho! "I went" soa certo, então use "John and I went". Da mesma forma: "She called John and I" → "She called I"? Soa errado! "She called me" é correto, então use "She called John and me".',
    },
  },
];
