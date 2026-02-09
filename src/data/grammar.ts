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
  {
    slug: "there-is-there-are",
    title: "There is / There are",
    description:
      "Aprenda a falar sobre a existência de algo em inglês usando there is e there are.",
    level: "A1",
    icon: "🏠",
    content: {
      explanation: `Usamos **there is** e **there are** para dizer que algo existe ou está presente em um lugar. É a forma mais comum de apresentar informação nova.

**Singular:** there is (há/existe)
- There is a book on the table. (Há um livro na mesa.)

**Plural:** there are (há/existem)
- There are two chairs in the room. (Há duas cadeiras no quarto.)

**Forma negativa:**
- There isn't a bank near here.
- There aren't any students in class today.

**Perguntas:**
- Is there a supermarket nearby?
- Are there any questions?`,
      examples: [
        {
          english: "There is a bus stop in front of the school.",
          portuguese: "Há um ponto de ônibus em frente à escola.",
          highlight: "There is",
        },
        {
          english: "There are three windows in the classroom.",
          portuguese: "Há três janelas na sala de aula.",
          highlight: "There are",
        },
        {
          english: "Is there a pharmacy near here?",
          portuguese: "Tem uma farmácia aqui perto?",
          highlight: "Is there",
        },
        {
          english: "There aren't any cars on the street.",
          portuguese: "Não há carros na rua.",
          highlight: "aren't",
        },
        {
          english: "There is a problem with the printer.",
          portuguese: "Há um problema com a impressora.",
          highlight: "There is",
        },
      ],
      commonMistakes: [
        {
          wrong: "There have a book on the table.",
          correct: "There is a book on the table.",
          explanation:
            'Para falar de existência, usamos "there is/are", nunca "there have".',
        },
        {
          wrong: "There is two chairs in the room.",
          correct: "There are two chairs in the room.",
          explanation:
            'Com plural, use "there are". "There is" é apenas para singular.',
        },
        {
          wrong: "Is there any chairs?",
          correct: "Are there any chairs?",
          explanation:
            'Em perguntas com substantivo plural, use "are there".',
        },
      ],
      tip: 'Dica prática: pense em "existe" (singular) e "existem" (plural). Se for um item, use "there is"; se for mais de um, use "there are".',
    },
  },
  {
    slug: "countable-uncountable",
    title: "Substantivos Contáveis e Incontáveis",
    description:
      "Entenda a diferença entre contáveis e incontáveis e use much, many e a lot of corretamente.",
    level: "A2",
    icon: "🥛",
    content: {
      explanation: `Em inglês, alguns substantivos podem ser contados (countable) e outros não (uncountable).

**Contáveis:** book, apple, car
- podem ter plural: books, apples

**Incontáveis:** water, sugar, information
- normalmente não têm plural

**Quantificadores comuns:**
- **many** para contáveis: many books
- **much** para incontáveis: much water
- **a lot of** para ambos: a lot of books / a lot of water

**Some / Any**
- **some** em afirmativas: some milk
- **any** em negativas e perguntas: any milk? / I don't have any milk.`,
      examples: [
        {
          english: "I have many books.",
          portuguese: "Eu tenho muitos livros.",
          highlight: "many",
        },
        {
          english: "We don't have much time.",
          portuguese: "Não temos muito tempo.",
          highlight: "much",
        },
        {
          english: "She drinks a lot of water.",
          portuguese: "Ela bebe muita água.",
          highlight: "a lot of",
        },
        {
          english: "Is there any sugar?",
          portuguese: "Tem açúcar?",
          highlight: "any",
        },
        {
          english: "There is some coffee in the pot.",
          portuguese: "Há café na garrafa.",
          highlight: "some",
        },
      ],
      commonMistakes: [
        {
          wrong: "I have much friends.",
          correct: "I have many friends.",
          explanation:
            '"Friends" é contável, então usamos "many", não "much".',
        },
        {
          wrong: "We need many information.",
          correct: "We need much information.",
          explanation:
            '"Information" é incontável, então usamos "much".',
        },
        {
          wrong: "I don't have some money.",
          correct: "I don't have any money.",
          explanation:
            'Em frases negativas, usamos "any".',
        },
      ],
      tip: 'Dica prática: se dá para contar com números (one, two, three), é contável. Se não dá para contar diretamente, é incontável.',
    },
  },
  {
    slug: "past-simple",
    title: "Passado Simples (Simple Past)",
    description:
      "Aprenda a falar sobre ações concluídas no passado com verbos regulares e irregulares.",
    level: "A2",
    icon: "⏳",
    content: {
      explanation: `O Simple Past descreve ações que começaram e terminaram no passado.

**Verbos regulares:** adicionamos **-ed**
- work → worked, play → played

**Verbos irregulares:** mudam a forma
- go → went, have → had, see → saw

**Negativa e perguntas:**
- Usamos **did** + verbo base
- I didn't go. / Did you go?`,
      examples: [
        {
          english: "I visited my grandparents last weekend.",
          portuguese: "Eu visitei meus avós no último fim de semana.",
          highlight: "visited",
        },
        {
          english: "She went to the dentist yesterday.",
          portuguese: "Ela foi ao dentista ontem.",
          highlight: "went",
        },
        {
          english: "They didn't watch the movie.",
          portuguese: "Eles não assistiram ao filme.",
          highlight: "didn't watch",
        },
        {
          english: "Did you finish the homework?",
          portuguese: "Você terminou a lição?",
          highlight: "Did",
        },
        {
          english: "We had a great time.",
          portuguese: "Nós nos divertimos muito.",
          highlight: "had",
        },
      ],
      commonMistakes: [
        {
          wrong: "I didn't went to school.",
          correct: "I didn't go to school.",
          explanation:
            "Após didn't, o verbo volta à forma base (go), sem passado.",

        },
        {
          wrong: "Did she went there?",
          correct: "Did she go there?",
          explanation:
            'Em perguntas com "did", o verbo fica na forma base.',
        },
        {
          wrong: "I go to the party yesterday.",
          correct: "I went to the party yesterday.",
          explanation:
            'Para falar de passado, use o verbo no Simple Past.',
        },
      ],
      tip: 'Dica prática: memorize os verbos irregulares mais comuns e pratique com frases do seu dia a dia.',
    },
  },
  {
    slug: "comparatives-superlatives",
    title: "Comparativos e Superlativos",
    description:
      "Compare pessoas, objetos e lugares usando estruturas comparativas e superlativas.",
    level: "A2",
    icon: "📈",
    content: {
      explanation: `Usamos comparativos para comparar duas coisas e superlativos para destacar algo como o mais.

**Comparativos:**
- adjetivos curtos: tall → taller
- adjetivos longos: interesting → more interesting

**Superlativos:**
- adjetivos curtos: tall → the tallest
- adjetivos longos: interesting → the most interesting

**Irregulares:**
- good → better → the best
- bad → worse → the worst`,
      examples: [
        {
          english: "This book is cheaper than that one.",
          portuguese: "Este livro é mais barato do que aquele.",
          highlight: "cheaper",
        },
        {
          english: "Rio is bigger than Salvador.",
          portuguese: "O Rio é maior que Salvador.",
          highlight: "bigger",
        },
        {
          english: "She is the most organized person in the team.",
          portuguese: "Ela é a pessoa mais organizada do time.",
          highlight: "the most organized",
        },
        {
          english: "This is the best restaurant in town.",
          portuguese: "Este é o melhor restaurante da cidade.",
          highlight: "the best",
        },
        {
          english: "My phone is better than yours.",
          portuguese: "Meu celular é melhor que o seu.",
          highlight: "better",
        },
      ],
      commonMistakes: [
        {
          wrong: "This is more cheaper.",
          correct: "This is cheaper.",
          explanation:
            'Não use "more" com comparativos curtos; use apenas "-er".',
        },
        {
          wrong: "She is the most tallest.",
          correct: "She is the tallest.",
          explanation:
            'Para adjetivos curtos, use "the" + "-est", sem "most".',
        },
        {
          wrong: "He is gooder than me.",
          correct: "He is better than me.",
          explanation:
            '"Good" é irregular: good → better → best.',
        },
      ],
      tip: 'Dica prática: se o adjetivo tem 1 sílaba, geralmente use -er/-est. Se tem 3 ou mais, use more/most.',
    },
  },
  {
    slug: "present-continuous-vs-present-simple",
    title: "Present Simple vs Present Continuous",
    description:
      "Saiba quando usar o presente simples e o presente contínuo.",
    level: "B1",
    icon: "⏱️",
    content: {
      explanation: `O **Present Simple** fala de rotina, hábitos e fatos gerais. O **Present Continuous** fala do que está acontecendo agora ou de planos próximos.

**Present Simple:**
- I work every day.
- She likes coffee.

**Present Continuous:**
- I am working now.
- They are studying for the test.

**Palavras-chave:**
- Simple: always, usually, often, never
- Continuous: now, at the moment, today`,
      examples: [
        {
          english: "He usually takes the bus.",
          portuguese: "Ele geralmente pega o ônibus.",
          highlight: "usually takes",
        },
        {
          english: "He is taking the bus now.",
          portuguese: "Ele está pegando o ônibus agora.",
          highlight: "is taking",
        },
        {
          english: "I read every night.",
          portuguese: "Eu leio toda noite.",
          highlight: "read",
        },
        {
          english: "I am reading a new book today.",
          portuguese: "Estou lendo um livro novo hoje.",
          highlight: "am reading",
        },
        {
          english: "They work at a bank, but they're working from home today.",
          portuguese: "Eles trabalham em um banco, mas hoje estão trabalhando de casa.",
          highlight: "work / are working",
        },
      ],
      commonMistakes: [
        {
          wrong: "I am work every day.",
          correct: "I work every day.",
          explanation:
            'Para rotina, use Present Simple, sem "am".',
        },
        {
          wrong: "She cooks now.",
          correct: "She is cooking now.",
          explanation:
            'Para ação acontecendo agora, use Present Continuous.',
        },
        {
          wrong: "They are knowing the answer.",
          correct: "They know the answer.",
          explanation:
            'Verbos de estado (know, like, believe) geralmente não usam Continuous.',
        },
      ],
      tip: 'Dica prática: se der para responder “agora?”, use Continuous. Se for “sempre/geralmente?”, use Simple.',
    },
  },
  {
    slug: "modal-verbs",
    title: "Modal Verbs (Can, Must, Should)",
    description:
      "Use verbos modais para falar de habilidade, obrigação e conselho.",
    level: "B1",
    icon: "🛠️",
    content: {
      explanation: `Os verbos modais são auxiliares que mudam o significado do verbo principal.

**Can**: habilidade / permissão
- I can swim. / Can I open the window?

**Must**: obrigação forte
- You must wear a seatbelt.

**Should**: conselho
- You should drink more water.

**Estrutura:** modal + verbo base (sem "to")
- She can speak English.`,
      examples: [
        {
          english: "I can speak three languages.",
          portuguese: "Eu sei falar três idiomas.",
          highlight: "can",
        },
        {
          english: "You must finish the report today.",
          portuguese: "Você deve terminar o relatório hoje.",
          highlight: "must",
        },
        {
          english: "We should leave early.",
          portuguese: "Deveríamos sair cedo.",
          highlight: "should",
        },
        {
          english: "Can I use your phone?",
          portuguese: "Posso usar seu telefone?",
          highlight: "Can",
        },
        {
          english: "He shouldn't drive so fast.",
          portuguese: "Ele não deveria dirigir tão rápido.",
          highlight: "shouldn't",
        },
      ],
      commonMistakes: [
        {
          wrong: "She can to drive.",
          correct: "She can drive.",
          explanation:
            'Após modal, usamos o verbo base sem "to".',
        },
        {
          wrong: "You musts go now.",
          correct: "You must go now.",
          explanation:
            'Modais não recebem "s" na terceira pessoa.',
        },
        {
          wrong: "I should to study more.",
          correct: "I should study more.",
          explanation:
            'Após "should", o verbo fica na forma base.',
        },
      ],
      tip: 'Dica prática: memorize a estrutura modal + verbo base. Ela funciona para todos os modais.',
    },
  },
  {
    slug: "relative-clauses",
    title: "Relative Clauses (Who, Which, That)",
    description:
      "Una frases e descreva pessoas e coisas usando pronomes relativos.",
    level: "B1",
    icon: "🔗",
    content: {
      explanation: `As relative clauses conectam ideias e dão mais informações sobre um substantivo.

**Who**: pessoas
- The teacher who helped me is very kind.

**Which**: coisas/animais
- The book which I bought is interesting.

**That**: pode substituir who/which
- The movie that we watched was great.`,
      examples: [
        {
          english: "The woman who lives here is a doctor.",
          portuguese: "A mulher que mora aqui é médica.",
          highlight: "who",
        },
        {
          english: "This is the phone that I want to buy.",
          portuguese: "Este é o celular que eu quero comprar.",
          highlight: "that",
        },
        {
          english: "The car which he sold was old.",
          portuguese: "O carro que ele vendeu era antigo.",
          highlight: "which",
        },
        {
          english: "I know the boy who won the prize.",
          portuguese: "Eu conheço o garoto que ganhou o prêmio.",
          highlight: "who",
        },
        {
          english: "The apartment that we rented is downtown.",
          portuguese: "O apartamento que alugamos fica no centro.",
          highlight: "that",
        },
      ],
      commonMistakes: [
        {
          wrong: "The woman which lives here is a doctor.",
          correct: "The woman who lives here is a doctor.",
          explanation:
            'Para pessoas, use "who", não "which".',
        },
        {
          wrong: "The car who is red is mine.",
          correct: "The car which is red is mine.",
          explanation:
            'Para coisas, use "which" ou "that".',
        },
        {
          wrong: "The book that I bought it is good.",
          correct: "The book that I bought is good.",
          explanation:
            'Não repita o pronome objeto ("it") na mesma frase.',
        },
      ],
      tip: 'Dica prática: pense em who = pessoas, which = coisas. "That" é coringa em frases informais.',
    },
  },
  {
    slug: "first-conditional",
    title: "First Conditional",
    description:
      "Fale de possibilidades reais no futuro usando if + present + will.",
    level: "B1",
    icon: "🧭",
    content: {
      explanation: `Usamos o First Conditional para situações prováveis no futuro.

**Estrutura:**
- If + Present Simple, will + verbo base
- If it rains, I will stay home.

Também é possível inverter:
- I will stay home if it rains.`,
      examples: [
        {
          english: "If you study, you will pass the test.",
          portuguese: "Se você estudar, passará no teste.",
          highlight: "If you study",
        },
        {
          english: "We'll go out if the weather is good.",
          portuguese: "Sairemos se o tempo estiver bom.",
          highlight: "if the weather is good",
        },
        {
          english: "If I finish early, I'll call you.",
          portuguese: "Se eu terminar cedo, vou te ligar.",
          highlight: "I'll call you",
        },
        {
          english: "If he doesn't hurry, he will miss the bus.",
          portuguese: "Se ele não se apressar, vai perder o ônibus.",
          highlight: "will miss",
        },
        {
          english: "We will help if you need it.",
          portuguese: "Vamos ajudar se você precisar.",
          highlight: "will help",
        },
      ],
      commonMistakes: [
        {
          wrong: "If it will rain, I will stay home.",
          correct: "If it rains, I will stay home.",
          explanation:
            'Após "if", usamos Present Simple, não "will".',
        },
        {
          wrong: "If you study, you pass.",
          correct: "If you study, you will pass.",
          explanation:
            'Para futuro provável, use "will" na segunda parte.',
        },
        {
          wrong: "If he doesn't comes, we'll start.",
          correct: "If he doesn't come, we'll start.",
          explanation:
            "Após doesn't, o verbo fica na forma base.",
        },
      ],
      tip: 'Dica prática: lembre “if + presente, will + futuro”. Não coloque “will” na parte do if.',
    },
  },
  {
    slug: "reported-speech",
    title: "Reported Speech",
    description:
      "Aprenda a transformar fala direta em indireta com mudanças de tempo verbal.",
    level: "B2",
    icon: "🗣️",
    content: {
      explanation: `Reported Speech é usado para contar o que alguém disse sem repetir as palavras exatas.

**Exemplo:**
- Direct: She said, "I am tired."
- Reported: She said (that) she was tired.

**Mudanças comuns:**
- am/is → was
- are → were
- will → would
- can → could`,
      examples: [
        {
          english: "He said he was busy.",
          portuguese: "Ele disse que estava ocupado.",
          highlight: "was",
        },
        {
          english: "She told me she would call.",
          portuguese: "Ela me disse que ligaria.",
          highlight: "would",
        },
        {
          english: "They said they could help.",
          portuguese: "Eles disseram que poderiam ajudar.",
          highlight: "could",
        },
        {
          english: "I told him I had finished.",
          portuguese: "Eu disse a ele que tinha terminado.",
          highlight: "had finished",
        },
        {
          english: "She said she didn't like coffee.",
          portuguese: "Ela disse que não gostava de café.",
          highlight: "didn't like",
        },
      ],
      commonMistakes: [
        {
          wrong: "She said she is tired.",
          correct: "She said she was tired.",
          explanation:
            'Com verbos no passado (said), geralmente fazemos backshift: is → was.',
        },
        {
          wrong: "He told me he will call.",
          correct: "He told me he would call.",
          explanation:
            '"Will" vira "would" no reported speech.',
        },
        {
          wrong: "They said me they were ready.",
          correct: "They told me they were ready.",
          explanation:
            'Usamos "tell" com objeto (told me) e "say" sem objeto direto.',
        },
      ],
      tip: 'Dica prática: lembre de ajustar o tempo verbal quando o verbo principal está no passado.',
    },
  },
  {
    slug: "passive-voice",
    title: "Passive Voice",
    description:
      "Use a voz passiva para focar na ação ou no resultado.",
    level: "B2",
    icon: "📦",
    content: {
      explanation: `Na voz passiva, o foco está na ação, não em quem a realiza.

**Estrutura básica:**
- be + past participle
- The report was finished yesterday.

**Quando usar:**
- quando o agente é desconhecido ou irrelevante
- para soar mais formal (textos, relatórios)`,
      examples: [
        {
          english: "The email was sent this morning.",
          portuguese: "O e-mail foi enviado esta manhã.",
          highlight: "was sent",
        },
        {
          english: "A new policy is being implemented.",
          portuguese: "Uma nova política está sendo implementada.",
          highlight: "is being implemented",
        },
        {
          english: "The results were announced yesterday.",
          portuguese: "Os resultados foram anunciados ontem.",
          highlight: "were announced",
        },
        {
          english: "The product will be delivered tomorrow.",
          portuguese: "O produto será entregue amanhã.",
          highlight: "will be delivered",
        },
        {
          english: "The meeting has been postponed.",
          portuguese: "A reunião foi adiada.",
          highlight: "has been postponed",
        },
      ],
      commonMistakes: [
        {
          wrong: "The report was finish yesterday.",
          correct: "The report was finished yesterday.",
          explanation:
            'Após "be", use o particípio passado (finished).',
        },
        {
          wrong: "The email sent this morning.",
          correct: "The email was sent this morning.",
          explanation:
            'A voz passiva precisa do verbo "be".',
        },
        {
          wrong: "The results were announce yesterday.",
          correct: "The results were announced yesterday.",
          explanation:
            'Use o particípio passado correto: announced.',
        },
      ],
      tip: 'Dica prática: identifique o objeto da frase ativa. Ele vira o sujeito na passiva.',
    },
  },
  {
    slug: "second-conditional",
    title: "Second Conditional",
    description:
      "Fale de situações hipotéticas ou improváveis no presente/futuro.",
    level: "B2",
    icon: "🌙",
    content: {
      explanation: `O Second Conditional descreve situações hipotéticas.

**Estrutura:**
- If + Past Simple, would + verbo base
- If I had more time, I would travel more.

Apesar do verbo no passado, estamos falando de hipótese no presente ou futuro.`,
      examples: [
        {
          english: "If I had a car, I would drive to work.",
          portuguese: "Se eu tivesse um carro, eu iria de carro ao trabalho.",
          highlight: "would drive",
        },
        {
          english: "If she were you, she would accept the offer.",
          portuguese: "Se ela fosse você, aceitaria a oferta.",
          highlight: "would accept",
        },
        {
          english: "We would buy a house if we had more money.",
          portuguese: "Compraríamos uma casa se tivéssemos mais dinheiro.",
          highlight: "would buy",
        },
        {
          english: "If it didn't rain so much, we'd go out.",
          portuguese: "Se não chovesse tanto, sairíamos.",
          highlight: "we'd go",
        },
        {
          english: "If I knew the answer, I would tell you.",
          portuguese: "Se eu soubesse a resposta, eu te diria.",
          highlight: "would tell",
        },
      ],
      commonMistakes: [
        {
          wrong: "If I would have time, I would travel.",
          correct: "If I had time, I would travel.",
          explanation:
            'Após "if" usamos Past Simple, não "would".',
        },
        {
          wrong: "If she was you, she would accept.",
          correct: "If she were you, she would accept.",
          explanation:
            'Em hipóteses, use "were" para todas as pessoas (if I were, if she were).',
        },
        {
          wrong: "If he knew, he will tell you.",
          correct: "If he knew, he would tell you.",
          explanation:
            'Second Conditional usa "would", não "will".',
        },
      ],
      tip: 'Dica prática: pense em “imaginar”. Se é algo hipotético, use If + Past, would + base.',
    },
  },
  {
    slug: "discourse-connectors",
    title: "Conectores de Discurso",
    description:
      "Organize ideias com conectores como however, therefore, in addition e on the other hand.",
    level: "B2",
    icon: "🧩",
    content: {
      explanation: `Conectores ajudam a organizar textos e falas, deixando o discurso mais claro e coeso.

**Adição:** in addition, moreover, furthermore
**Contraste:** however, on the other hand, although
**Causa e efeito:** therefore, as a result, because
**Exemplo:** for example, for instance`,
      examples: [
        {
          english: "I like the job; however, the commute is long.",
          portuguese: "Gosto do trabalho; porém, o deslocamento é longo.",
          highlight: "however",
        },
        {
          english: "We were late; therefore, we missed the start.",
          portuguese: "Chegamos atrasados; portanto, perdemos o início.",
          highlight: "therefore",
        },
        {
          english: "In addition, we need to review the budget.",
          portuguese: "Além disso, precisamos revisar o orçamento.",
          highlight: "In addition",
        },
        {
          english: "On the other hand, this option is cheaper.",
          portuguese: "Por outro lado, esta opção é mais barata.",
          highlight: "On the other hand",
        },
        {
          english: "For example, we could start with a pilot.",
          portuguese: "Por exemplo, poderíamos começar com um piloto.",
          highlight: "For example",
        },
      ],
      commonMistakes: [
        {
          wrong: "I like it, however I don't have money.",
          correct: "I like it; however, I don't have money.",
          explanation:
            'Use pontuação adequada com "however" (ponto e vírgula ou ponto).',
        },
        {
          wrong: "Because therefore we were late.",
          correct: "Because we were late. Therefore, we missed it.",
          explanation:
            'Evite usar dois conectores de causa juntos na mesma frase.',
        },
        {
          wrong: "On the other hand, I like coffee.",
          correct: "On the other hand, I prefer tea.",
          explanation:
            '"On the other hand" indica contraste; use quando houver comparação.',
        },
      ],
      tip: 'Dica prática: escolha conectores conforme a relação entre as ideias (adição, contraste, causa).',
    },
  },
];

