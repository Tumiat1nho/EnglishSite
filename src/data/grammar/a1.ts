import { GrammarTopic } from "../types";

export const grammarA1: GrammarTopic[] = [
  {
    slug: "verb-to-be",
    title: "Verbo To Be (am, is, are - ser/estar)",
    description:
      "Aprenda a conjugar e usar o verbo mais importante do inglês: o verbo to be, que equivale a 'ser' e 'estar' em português.",
    level: "A1",
    icon: "✨",
    content: {
      explanation: `O verbo TO BE é o verbo mais fundamental do inglês e corresponde aos verbos "ser" e "estar" em português. Diferente do português, onde temos duas palavras distintas, em inglês usamos o mesmo verbo para ambos os significados. Saber conjugar o TO BE corretamente é o primeiro passo para se comunicar em inglês.

**Conjugação no Presente (Present Tense):**

| Pronome | Forma Afirmativa | Contração | Tradução |
|---------|-----------------|-----------|----------|
| I | am | I'm | eu sou / eu estou |
| You | are | You're | você é / você está |
| He | is | He's | ele é / ele está |
| She | is | She's | ela é / ela está |
| It | is | It's | ele(a) é / está (coisas) |
| We | are | We're | nós somos / estamos |
| They | are | They're | eles(as) são / estão |

**Forma Negativa:**
Para negar, basta adicionar "not" depois do verbo to be. Na fala e escrita informal, usamos as contrações:
- I am not (I'm not)
- You are not (You aren't / You're not)
- He is not (He isn't / He's not)
- She is not (She isn't / She's not)
- It is not (It isn't / It's not)
- We are not (We aren't / We're not)
- They are not (They aren't / They're not)

**Forma Interrogativa:**
Para fazer perguntas, invertemos a ordem: o verbo to be vem antes do sujeito.
- Am I...? / Are you...? / Is he...? / Is she...? / Is it...? / Are we...? / Are they...?

**Usos principais do verbo To Be:**
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
          english: "They are not at school.",
          portuguese: "Eles não estão na escola.",
          highlight: "are not",
        },
        {
          english: "Is he your brother?",
          portuguese: "Ele é seu irmão?",
          highlight: "Is",
        },
      ],
      commonMistakes: [
        {
          wrong: "I have 25 years old.",
          correct: "I am 25 years old.",
          explanation:
            'Em inglês, usamos o verbo "to be" (ser) para falar de idade, não o verbo "have" (ter) como em português. Diga "I am 25", nunca "I have 25".',
        },
        {
          wrong: "He are a good student.",
          correct: "He is a good student.",
          explanation:
            'Com "he", "she" e "it" sempre usamos "is", nunca "are". "Are" é usado apenas com "you", "we" e "they".',
        },
        {
          wrong: "Is cold today.",
          correct: "It is cold today.",
          explanation:
            'Em inglês, sempre precisamos de um sujeito na frase. Para clima, tempo e horas, usamos "it" como sujeito, mesmo sem tradução direta para o português.',
        },
      ],
      tip: 'Dica prática: Quando estiver em dúvida se deve usar "to be", pergunte-se: em português eu usaria "ser" ou "estar"? Se sim, provavelmente você precisa do "to be" em inglês. Pratique as contrações (I\'m, you\'re, he\'s) pois são muito mais usadas na fala do dia a dia!',
    },
  },
  {
    slug: "personal-pronouns",
    title: "Pronomes Pessoais (I, you, he, she, it, we, they)",
    description:
      "Domine os pronomes pessoais do inglês: pronomes sujeito e pronomes objeto, essenciais para qualquer frase.",
    level: "A1",
    icon: "👤",
    content: {
      explanation: `Os pronomes pessoais em inglês são palavras que substituem os nomes (substantivos) para evitar repetição. Diferente do português, em inglês os pronomes são obrigatórios em quase toda frase — não podemos omitir o sujeito como fazemos em português (ex: "Fui ao mercado" em inglês precisa do "I": "I went to the market").

**Pronomes Sujeito (Subject Pronouns):**
São usados como sujeito da frase, ou seja, quem pratica a ação. Vêm ANTES do verbo.

| Inglês | Português | Exemplo |
|--------|-----------|---------|
| I | eu | I study English. (Eu estudo inglês.) |
| you | você / vocês | You are smart. (Você é inteligente.) |
| he | ele | He works here. (Ele trabalha aqui.) |
| she | ela | She is my sister. (Ela é minha irmã.) |
| it | ele/ela (coisas/animais) | It is a big house. (É uma casa grande.) |
| we | nós | We live in Brazil. (Nós moramos no Brasil.) |
| they | eles/elas | They are friends. (Eles são amigos.) |

**Pronomes Objeto (Object Pronouns):**
São usados como complemento do verbo ou após preposições. Vêm DEPOIS do verbo.

| Sujeito | Objeto | Tradução | Exemplo |
|---------|--------|----------|---------|
| I | me | me, mim | Call me. (Me ligue.) |
| you | you | te, você(s) | I like you. (Eu gosto de você.) |
| he | him | o, ele | Tell him. (Diga a ele.) |
| she | her | a, ela | I saw her. (Eu a vi.) |
| it | it | o/a (coisa) | I need it. (Eu preciso disso.) |
| we | us | nos, nós | Help us. (Nos ajude.) |
| they | them | os/as, eles | I know them. (Eu os conheço.) |

**Observações importantes:**
- "I" (eu) é SEMPRE escrito com letra maiúscula, em qualquer posição na frase.
- "You" serve tanto para "você" (singular) quanto para "vocês" (plural). Não existe diferença na forma.
- "It" é usado para objetos, animais (quando não sabemos o sexo), clima, horas e distâncias. Não tem equivalente exato em português.
- "They" pode se referir a pessoas, animais ou coisas no plural.`,
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
          english: "It is raining outside.",
          portuguese: "Está chovendo lá fora.",
          highlight: "It",
        },
        {
          english: "We saw them at the mall.",
          portuguese: "Nós os vimos no shopping.",
          highlight: "them",
        },
      ],
      commonMistakes: [
        {
          wrong: "Me and John went to the store.",
          correct: "John and I went to the store.",
          explanation:
            'Quando "eu" é sujeito da frase, usamos "I", não "me". Além disso, em inglês é educado colocar a outra pessoa primeiro: "John and I".',
        },
        {
          wrong: "Him is my friend.",
          correct: "He is my friend.",
          explanation:
            '"Him" é pronome objeto e vem depois do verbo. Como sujeito da frase (antes do verbo), devemos usar "He".',
        },
        {
          wrong: "i am happy.",
          correct: "I am happy.",
          explanation:
            'O pronome "I" (eu) é SEMPRE escrito com letra maiúscula em inglês, em qualquer posição na frase. É a única letra que tem essa regra.',
        },
      ],
      tip: 'Dica prática: Para saber se deve usar o pronome sujeito ou objeto, veja a posição na frase. ANTES do verbo = sujeito (I, he, she, we, they). DEPOIS do verbo ou preposição = objeto (me, him, her, us, them). Teste tirando a outra pessoa da frase: "She called John and I" fica "She called I"? Soa errado! O certo é "She called me", então use "She called John and me".',
    },
  },
  {
    slug: "articles",
    title: "Artigos (a, an, the)",
    description:
      "Entenda quando usar os artigos 'a', 'an' e 'the' em inglês e quando não usar nenhum artigo.",
    level: "A1",
    icon: "📝",
    content: {
      explanation: `Os artigos em inglês são palavras pequenas mas extremamente importantes. Existem apenas três: "a", "an" (artigos indefinidos) e "the" (artigo definido). Diferente do português, não há variação de gênero (masculino/feminino) ou número (singular/plural) nos artigos indefinidos.

**Artigos Indefinidos: A e AN**
Equivalem a "um/uma" em português. São usados com substantivos contáveis no singular quando mencionamos algo pela primeira vez ou de forma geral.

- **A**: usado antes de palavras que começam com som de CONSOANTE.
  - a book (um livro), a car (um carro), a university (uma universidade — começa com som de /ju/)

- **AN**: usado antes de palavras que começam com som de VOGAL.
  - an apple (uma maçã), an hour (uma hora — o "h" é mudo), an umbrella (um guarda-chuva)

**IMPORTANTE:** O que determina a escolha é o SOM inicial, não a letra! Por isso dizemos:
- "a university" (som de /ju/, que é consoante)
- "an hour" (o "h" é mudo, som de /au/, que é vogal)
- "a European country" (som de /ju/)
- "an honest person" (o "h" é mudo, som de /o/)

**Artigo Definido: THE**
Equivale a "o/a/os/as" em português. Usamos quando falamos de algo específico, já conhecido ou já mencionado.

**Quando usar THE:**
1. Algo já mencionado: "I bought a car. The car is blue."
2. Algo único: "the sun", "the moon", "the internet"
3. Superlativos: "the best", "the tallest"

**Quando NÃO usar artigo:**
1. Coisas em geral: "I like music." (música em geral, sem artigo)
2. Refeições: "I have breakfast at 8."
3. Esportes: "She plays tennis."
4. Idiomas: "He speaks English."
5. A maioria dos países: "Brazil is big."`,
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
          english: "The book on the table is mine.",
          portuguese: "O livro na mesa é meu.",
          highlight: "The",
        },
        {
          english: "I need an umbrella.",
          portuguese: "Eu preciso de um guarda-chuva.",
          highlight: "an",
        },
        {
          english: "I like coffee.",
          portuguese: "Eu gosto de café. (sem artigo - sentido geral)",
          highlight: "coffee",
        },
      ],
      commonMistakes: [
        {
          wrong: "She is an university student.",
          correct: "She is a university student.",
          explanation:
            'Embora "university" comece com a vogal "u", o som inicial é /ju/ (consoante). Por isso usamos "a", não "an". Lembre-se: o que importa é o SOM, não a letra!',
        },
        {
          wrong: "I need a hour to finish.",
          correct: "I need an hour to finish.",
          explanation:
            'O "h" em "hour" é mudo, então o som inicial é de vogal /au/. Por isso usamos "an", não "a".',
        },
        {
          wrong: "The Brazil is a beautiful country.",
          correct: "Brazil is a beautiful country.",
          explanation:
            'A maioria dos nomes de países não usa artigo em inglês. Exceções: the United States, the United Kingdom, the Netherlands.',
        },
      ],
      tip: 'Dica prática: Quando estiver em dúvida entre "a" e "an", diga a palavra seguinte em voz alta. Se o SOM começar com vogal, use "an". Se começar com consoante, use "a". Para decidir se usa "the", pergunte-se: "O ouvinte sabe exatamente de qual coisa estou falando?" Se sim, use "the".',
    },
  },
  {
    slug: "simple-present",
    title: "Presente Simples (I work, she works, do/does)",
    description:
      "Domine o tempo verbal mais usado do inglês: o Simple Present, usado para rotinas, hábitos, fatos e verdades gerais.",
    level: "A1",
    icon: "🔄",
    content: {
      explanation: `O Simple Present (Presente Simples) é um dos tempos verbais mais importantes do inglês. Ele descreve ações habituais, rotinas diárias, fatos gerais e verdades universais. Diferente do português, no inglês o verbo muda de forma na terceira pessoa do singular (he, she, it).

**Quando usar o Simple Present:**
1. Rotinas e hábitos: "I wake up at 7 a.m." (Eu acordo às 7h.)
2. Fatos gerais: "Water boils at 100°C." (A água ferve a 100°C.)
3. Preferências: "She likes chocolate." (Ela gosta de chocolate.)
4. Horários fixos: "The train leaves at 8 p.m." (O trem sai às 20h.)

**Regra fundamental — O "S" da terceira pessoa (he/she/it):**
Na forma afirmativa, quando o sujeito é HE, SHE ou IT, o verbo recebe "s", "es" ou "ies" no final.

| Regra | Exemplo |
|-------|---------|
| Maioria dos verbos: +s | work → works, play → plays |
| Terminados em -s, -sh, -ch, -x, -o: +es | go → goes, watch → watches |
| Terminados em consoante + y: troca y por ies | study → studies, carry → carries |
| Terminados em vogal + y: +s | play → plays, enjoy → enjoys |

**Forma Negativa:**
Usamos DO NOT (don't) ou DOES NOT (doesn't) + verbo na forma base (sem "s").
- I/You/We/They + don't + verbo base → "I don't like coffee."
- He/She/It + doesn't + verbo base → "She doesn't like coffee."

Note que o "s" sai do verbo e vai para o auxiliar "does". O verbo volta para a forma base!

**Forma Interrogativa:**
Usamos DO ou DOES antes do sujeito + verbo na forma base.
- Do + I/you/we/they + verbo base? → "Do you speak English?"
- Does + he/she/it + verbo base? → "Does she speak English?"

**Advérbios de frequência comuns:**
always (sempre), usually (geralmente), often (frequentemente), sometimes (às vezes), rarely (raramente), never (nunca). Eles geralmente vêm ANTES do verbo principal: "I always drink coffee in the morning."`,
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
      ],
      tip: 'Dica prática: Lembre-se da regrinha "HE, SHE, IT - o S no verbo vai existir!" Na afirmativa, o verbo SEMPRE ganha "s" com he/she/it. Mas na negativa e interrogativa, o "s" migra para o auxiliar (does/doesn\'t) e o verbo volta ao normal. Pratique criando frases sobre sua rotina diária!',
    },
  },
  {
    slug: "possessive-adjectives",
    title: "Adjetivos Possessivos (my, your, his, her)",
    description:
      "Aprenda a usar os adjetivos possessivos em inglês para indicar posse: my, your, his, her, its, our, their.",
    level: "A1",
    icon: "🏷️",
    content: {
      explanation: `Os adjetivos possessivos em inglês são palavras que indicam posse, ou seja, a quem algo pertence. Eles equivalem a "meu/minha", "seu/sua", "dele/dela", etc. em português. Uma grande diferença é que em inglês os possessivos NÃO mudam de acordo com o gênero ou número do objeto possuído — eles concordam apenas com o possuidor.

**Tabela dos Adjetivos Possessivos:**

| Pronome Pessoal | Adjetivo Possessivo | Tradução | Exemplo |
|----------------|-------------------|----------|---------|
| I (eu) | my | meu, minha, meus, minhas | my book (meu livro) |
| you (você) | your | seu, sua, seus, suas | your house (sua casa) |
| he (ele) | his | dele | his car (o carro dele) |
| she (ela) | her | dela | her name (o nome dela) |
| it (ele/ela - coisa) | its | dele/dela (coisa) | its color (a cor dele) |
| we (nós) | our | nosso(a)(s) | our school (nossa escola) |
| they (eles/elas) | their | deles/delas | their children (os filhos deles) |

**Regras importantes:**

1. Os adjetivos possessivos sempre vêm ANTES do substantivo: "my book", "her phone", "their house".

2. Eles NÃO variam em gênero ou número. "His" serve para tudo:
   - his book (o livro dele) / his books (os livros dele)
   - his house (a casa dele) / his sister (a irmã dele)

3. Não confunda "your" (singular) com "your" (plural) — são iguais! O contexto esclarece.

4. Cuidado com "its" (possessivo de "it") e "it's" (contração de "it is"). São palavras diferentes!
   - The dog wagged its tail. (O cachorro abanou sua cauda.) — possessivo, sem apóstrofo
   - It's a beautiful day. (É um dia bonito.) — contração de "it is"

5. Diferente do português, em inglês usamos possessivos com partes do corpo e objetos pessoais:
   - "I wash my hands." (Eu lavo as mãos.) — em português não precisamos dizer "minhas mãos"
   - "She broke her leg." (Ela quebrou a perna.) — em inglês precisamos do "her"`,
      examples: [
        {
          english: "My name is Maria.",
          portuguese: "Meu nome é Maria.",
          highlight: "My",
        },
        {
          english: "Is this your phone?",
          portuguese: "Este é o seu celular?",
          highlight: "your",
        },
        {
          english: "He loves his mother very much.",
          portuguese: "Ele ama muito a mãe dele.",
          highlight: "his",
        },
        {
          english: "She forgot her umbrella at home.",
          portuguese: "Ela esqueceu o guarda-chuva dela em casa.",
          highlight: "her",
        },
        {
          english: "We are proud of our country.",
          portuguese: "Nós temos orgulho do nosso país.",
          highlight: "our",
        },
      ],
      commonMistakes: [
        {
          wrong: "She forgot she umbrella.",
          correct: "She forgot her umbrella.",
          explanation:
            '"She" é pronome sujeito, não possessivo. Para indicar posse de "she" (ela), use "her". "She" = ela (sujeito), "her" = dela (possessivo/objeto).',
        },
        {
          wrong: "The dog lost it's bone.",
          correct: "The dog lost its bone.",
          explanation:
            '"Its" (sem apóstrofo) é o possessivo de "it". "It\'s" (com apóstrofo) é a contração de "it is". Para posse, nunca use apóstrofo.',
        },
        {
          wrong: "I wash the hands before eating.",
          correct: "I wash my hands before eating.",
          explanation:
            'Em inglês, é obrigatório usar o possessivo com partes do corpo. Não diga "the hands" quando se refere às suas próprias mãos — diga "my hands".',
        },
      ],
      tip: 'Dica prática: Para escolher o possessivo correto, pense em QUEM é o dono. Se o dono é "he", o possessivo é "his". Se é "she", use "her". Se é "we", use "our". O possessivo sempre concorda com o DONO, nunca com o objeto. "His house" (a casa dele) - "his" porque o dono é "he", mesmo que "house" seja feminino em português.',
    },
  },
  {
    slug: "there-is-there-are",
    title: "There is / There are (Há, Existem)",
    description:
      "Aprenda a usar 'there is' e 'there are' para dizer que algo existe ou está em algum lugar.",
    level: "A1",
    icon: "📍",
    content: {
      explanation: `"There is" e "There are" são estruturas usadas para dizer que algo EXISTE ou está presente em algum lugar. Correspondem a "há", "existe(m)", "tem" (no sentido de existir) em português. É uma das estruturas mais usadas no inglês do dia a dia.

**Regra básica:**
- **There is** (There's) → usado com substantivos no SINGULAR ou INCONTÁVEIS
- **There are** → usado com substantivos no PLURAL

| Estrutura | Uso | Exemplo |
|-----------|-----|---------|
| There is / There's | singular | There is a book on the table. (Há um livro na mesa.) |
| There is / There's | incontável | There is water in the glass. (Há água no copo.) |
| There are | plural | There are three cats outside. (Há três gatos lá fora.) |

**Forma Negativa:**
- There is not (There isn't) → "There isn't a hospital near here." (Não há um hospital perto daqui.)
- There are not (There aren't) → "There aren't any students in the room." (Não há nenhum aluno na sala.)

**Forma Interrogativa:**
Invertemos a ordem — "is/are" vem antes de "there":
- Is there...? → "Is there a bathroom here?" (Tem banheiro aqui?)
- Are there...? → "Are there any questions?" (Há alguma pergunta?)

**Respostas curtas:**
- Yes, there is. / No, there isn't.
- Yes, there are. / No, there aren't.

**"There is/are" com "some" e "any":**
- Use "some" em frases afirmativas: "There are some apples in the fridge."
- Use "any" em frases negativas e interrogativas: "Are there any eggs?" / "There aren't any eggs."

**Importante:** Não confunda "there" (lá/existir) com "their" (deles/delas) ou "they're" (they are). São palavras com sons parecidos mas significados completamente diferentes!`,
      examples: [
        {
          english: "There is a park near my house.",
          portuguese: "Há um parque perto da minha casa.",
          highlight: "There is",
        },
        {
          english: "There are many people at the party.",
          portuguese: "Há muitas pessoas na festa.",
          highlight: "There are",
        },
        {
          english: "Is there a supermarket nearby?",
          portuguese: "Tem um supermercado por perto?",
          highlight: "Is there",
        },
        {
          english: "There aren't any chairs in the room.",
          portuguese: "Não há nenhuma cadeira na sala.",
          highlight: "aren't any",
        },
        {
          english: "There is some milk in the fridge.",
          portuguese: "Há um pouco de leite na geladeira.",
          highlight: "There is",
        },
      ],
      commonMistakes: [
        {
          wrong: "There is many books on the table.",
          correct: "There are many books on the table.",
          explanation:
            '"Books" está no plural, então usamos "there are", não "there is". "There is" é para singular e incontáveis.',
        },
        {
          wrong: "Have a problem here.",
          correct: "There is a problem here.",
          explanation:
            'Em inglês, não usamos "have" no sentido de "existir". Para expressar existência, usamos "there is/there are". "Have" é usado para posse pessoal.',
        },
        {
          wrong: "There are some water in the bottle.",
          correct: "There is some water in the bottle.",
          explanation:
            '"Water" (água) é um substantivo incontável, então usamos "there is", não "there are", mesmo quando acompanhado de "some".',
        },
      ],
      tip: 'Dica prática: Sempre olhe para o substantivo que vem DEPOIS de "there is/are" para decidir qual usar. Se for singular ou incontável, use "there is". Se for plural, use "there are". Na fala informal, muitos nativos usam "there\'s" mesmo com plural, mas na escrita e em provas, mantenha a regra correta!',
    },
  },
  {
    slug: "plurals",
    title: "Plural dos Substantivos (cat/cats, bus/buses, child/children)",
    description:
      "Aprenda as regras para formar o plural dos substantivos em inglês, incluindo os plurais regulares e irregulares.",
    level: "A1",
    icon: "🔢",
    content: {
      explanation: `Formar o plural em inglês é geralmente mais simples do que em português, mas existem regras específicas e várias exceções. A regra mais comum é adicionar "s" ao final da palavra, mas há situações em que adicionamos "es", trocamos letras, ou o plural é completamente diferente.

**Regras para o Plural Regular:**

| Regra | Singular → Plural | Exemplo |
|-------|------------------|---------|
| Maioria dos substantivos: +s | cat → cats | book → books, dog → dogs |
| Terminados em -s, -ss, -sh, -ch, -x, -z: +es | bus → buses | glass → glasses, watch → watches, box → boxes |
| Terminados em consoante + y: troca y por ies | city → cities | baby → babies, country → countries |
| Terminados em vogal + y: +s | boy → boys | day → days, key → keys, toy → toys |
| Terminados em -f ou -fe: troca por ves | knife → knives | wife → wives, leaf → leaves, life → lives |
| Terminados em -o: alguns +es, outros +s | tomato → tomatoes | potato → potatoes, MAS: photo → photos, piano → pianos |

**Plurais Irregulares (os mais comuns):**
Estes não seguem nenhuma regra. Precisam ser memorizados!

| Singular | Plural | Tradução |
|----------|--------|----------|
| man | men | homem/homens |
| woman | women | mulher/mulheres |
| child | children | criança/crianças |
| person | people | pessoa/pessoas |
| tooth | teeth | dente/dentes |
| foot | feet | pé/pés |
| mouse | mice | rato/ratos |
| fish | fish | peixe/peixes (não muda!) |
| sheep | sheep | ovelha/ovelhas (não muda!) |

**Substantivos que não mudam no plural:**
Alguns substantivos têm a mesma forma no singular e no plural: fish, sheep, deer (cervo), aircraft (aeronave), series (série).

**Pronúncia do -s/-es no plural:**
- /s/ depois de sons surdos (p, t, k, f): cats, books, cups
- /z/ depois de sons sonoros e vogais: dogs, boys, trees
- /ɪz/ depois de s, z, sh, ch, x: buses, watches, boxes`,
      examples: [
        {
          english: "There are two cats in the garden.",
          portuguese: "Há dois gatos no jardim.",
          highlight: "cats",
        },
        {
          english: "The children are playing outside.",
          portuguese: "As crianças estão brincando lá fora.",
          highlight: "children",
        },
        {
          english: "She bought three dresses.",
          portuguese: "Ela comprou três vestidos.",
          highlight: "dresses",
        },
        {
          english: "The women are talking in the office.",
          portuguese: "As mulheres estão conversando no escritório.",
          highlight: "women",
        },
        {
          english: "I caught five fish at the lake.",
          portuguese: "Eu peguei cinco peixes no lago.",
          highlight: "fish",
        },
      ],
      commonMistakes: [
        {
          wrong: "There are many childs in the school.",
          correct: "There are many children in the school.",
          explanation:
            '"Child" tem plural irregular: "children". Não adicione apenas "s". Outros irregulares comuns: man → men, woman → women, person → people.',
        },
        {
          wrong: "I have two knifes in the kitchen.",
          correct: "I have two knives in the kitchen.",
          explanation:
            'Substantivos terminados em "-f" ou "-fe" geralmente trocam por "-ves" no plural: knife → knives, wife → wives, life → lives, leaf → leaves.',
        },
        {
          wrong: "The babys are sleeping.",
          correct: "The babies are sleeping.",
          explanation:
            'Quando o substantivo termina em consoante + "y", troque o "y" por "ies": baby → babies, city → cities. Mas se for vogal + y, apenas adicione "s": boy → boys.',
        },
      ],
      tip: 'Dica prática: Os plurais irregulares mais usados no dia a dia são: man/men, woman/women, child/children, person/people, tooth/teeth, foot/feet. Memorize esses primeiro! Para os regulares, a regra mais importante é: terminados em -s, -sh, -ch, -x adicionam "-es" (pronuncia-se como uma sílaba extra).',
    },
  },
  {
    slug: "imperative",
    title: "Imperativo (Open the door, Don't run, Please sit down)",
    description:
      "Aprenda a dar ordens, instruções, conselhos e fazer pedidos em inglês usando o modo imperativo.",
    level: "A1",
    icon: "📢",
    content: {
      explanation: `O imperativo em inglês é usado para dar ordens, instruções, conselhos, avisos e fazer pedidos. É uma das estruturas mais simples do inglês, pois usamos o verbo na forma base (infinitivo sem "to"), sem nenhum pronome sujeito. O sujeito implícito é sempre "you" (você/vocês).

**Forma Afirmativa:**
Basta usar o verbo na forma base, sem sujeito:
- Open the door. (Abra a porta.)
- Sit down, please. (Sente-se, por favor.)
- Turn left at the corner. (Vire à esquerda na esquina.)
- Study hard for the test. (Estude bastante para a prova.)

**Forma Negativa:**
Adicionamos "Don't" (Do not) antes do verbo:
- Don't run in the hallway. (Não corra no corredor.)
- Don't touch that! (Não toque nisso!)
- Don't be late. (Não se atrase.)
- Don't worry about it. (Não se preocupe com isso.)

**Usos do Imperativo:**

| Uso | Exemplo | Tradução |
|-----|---------|----------|
| Ordens | Stop! | Pare! |
| Instruções | Mix the ingredients well. | Misture os ingredientes bem. |
| Conselhos | Get some rest. | Descanse um pouco. |
| Avisos | Be careful! | Cuidado! |
| Pedidos (com please) | Please close the window. | Por favor, feche a janela. |
| Convites | Come to my party! | Venha à minha festa! |
| Direções | Go straight and turn right. | Siga em frente e vire à direita. |

**Como tornar o imperativo mais educado:**
O imperativo pode soar rude em inglês. Para ser mais educado:
1. Adicione "please": "Please sit down." ou "Sit down, please."
2. Use "could you...?": "Could you open the window?" (Poderia abrir a janela?)
3. Use "let's" para incluir a si mesmo: "Let's go!" (Vamos!) — "Let's eat." (Vamos comer.)

**"Let's" (Let us):**
"Let's" é usado para fazer sugestões que incluem você e outras pessoas:
- Let's study together. (Vamos estudar juntos.)
- Let's not fight. (Não vamos brigar.)`,
      examples: [
        {
          english: "Open the door, please.",
          portuguese: "Abra a porta, por favor.",
          highlight: "Open",
        },
        {
          english: "Don't run in the hallway!",
          portuguese: "Não corra no corredor!",
          highlight: "Don't run",
        },
        {
          english: "Please sit down and wait.",
          portuguese: "Por favor, sente-se e espere.",
          highlight: "Please sit down",
        },
        {
          english: "Let's go to the beach!",
          portuguese: "Vamos à praia!",
          highlight: "Let's go",
        },
        {
          english: "Be quiet! The baby is sleeping.",
          portuguese: "Fique quieto! O bebê está dormindo.",
          highlight: "Be quiet",
        },
      ],
      commonMistakes: [
        {
          wrong: "You open the door!",
          correct: "Open the door!",
          explanation:
            'No imperativo, não usamos o pronome sujeito "you". O sujeito está implícito. Basta começar a frase diretamente com o verbo. Dizer "you" soa agressivo e acusatório.',
        },
        {
          wrong: "Don't to run here.",
          correct: "Don't run here.",
          explanation:
            'Após "don\'t", o verbo vai na forma base, sem "to". Não use "to" entre "don\'t" e o verbo. "Don\'t" + verbo base diretamente.',
        },
        {
          wrong: "Doesn't talk in class.",
          correct: "Don't talk in class.",
          explanation:
            'No imperativo negativo, sempre usamos "Don\'t", nunca "Doesn\'t". Isso porque o sujeito implícito é "you", e com "you" sempre usamos "do/don\'t".',
        },
      ],
      tip: 'Dica prática: O imperativo é a forma mais simples do inglês: apenas o verbo base, sem sujeito, sem conjugação. Para não soar rude, sempre adicione "please" em pedidos. Lembre-se: "Let\'s" (vamos) inclui você na ação. Pratique com instruções do dia a dia: receitas de cozinha, direções no GPS e instruções de jogos usam muito o imperativo!',
    },
  },
];
