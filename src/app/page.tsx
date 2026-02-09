import Link from "next/link";

const sections = [
  {
    title: "Lições",
    description: "Aprenda inglês com lições organizadas por nível, do iniciante ao avançado.",
    href: "/licoes",
    icon: "📚",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Gramática",
    description: "Entenda as regras gramaticais do inglês com explicações claras em português.",
    href: "/gramatica",
    icon: "📝",
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Vocabulário",
    description: "Expanda seu vocabulário com flashcards interativos organizados por tema.",
    href: "/vocabulario",
    icon: "🗂️",
    color: "from-amber-500 to-amber-700",
  },
  {
    title: "Exercícios",
    description: "Pratique com quizzes, complete frases e ordene palavras para fixar o conteúdo.",
    href: "/exercicios",
    icon: "✏️",
    color: "from-emerald-500 to-emerald-700",
  },
];

const levels = [
  { level: "A1", name: "Iniciante", description: "Nunca estudou inglês? Comece aqui!", color: "bg-green-50 border-green-200 text-green-800" },
  { level: "A2", name: "Básico", description: "Já sabe o básico e quer evoluir.", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { level: "B1", name: "Intermediário", description: "Consegue se virar em conversas simples.", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
  { level: "B2", name: "Intermediário Superior", description: "Quer refinar e ganhar fluência.", color: "bg-orange-50 border-orange-200 text-orange-800" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            Um empurrãozinho a mais da Teacher Rafa!
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Lições, gramática, vocabulário e exercícios interativos — tudo em
            um lugar só!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/licoes"
              className="bg-accent hover:bg-accent-light text-primary-dark font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Começar Agora
            </Link>
            <Link
              href="#niveis"
              className="border-2 border-white/30 hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Ver Níveis
            </Link>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary font-[family-name:var(--font-heading)]">
          O que você vai encontrar
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Quatro áreas completas para você estudar inglês no seu ritmo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <Link key={section.href} href={section.href} className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group-hover:-translate-y-1">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${section.color} text-white text-2xl mb-4`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Levels */}
      <section id="niveis" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary font-[family-name:var(--font-heading)]">
            Por onde começar?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            Escolha seu nível e comece a estudar. Nosso conteúdo segue o padrão
            internacional CEFR.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {levels.map((item) => (
              <Link
                key={item.level}
                href={`/licoes?nivel=${item.level}`}
                className={`p-6 rounded-xl border-2 ${item.color} hover:shadow-md transition-all`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold">{item.level}</span>
                  <span className="font-semibold">{item.name}</span>
                </div>
                <p className="text-sm opacity-80">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-primary font-[family-name:var(--font-heading)]">
          Pronto para começar?
        </h2>
        <p className="text-gray-600 mb-8">
          Escolha uma seção e comece a aprender agora mesmo. É 100% gratuito!
        </p>
        <Link
          href="/licoes"
          className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Ir para as Lições
        </Link>
      </section>
    </div>
  );
}
