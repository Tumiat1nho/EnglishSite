import Link from "next/link";

const sections = [
  {
    title: "Lições",
    description: "Aprenda inglês com lições organizadas por nível, do iniciante ao avançado.",
    href: "/licoes",
    icon: "📚",
    gradient: "gradient-card-purple",
    count: "200 lições",
  },
  {
    title: "Gramática",
    description: "Entenda as regras gramaticais do inglês com explicações claras em português.",
    href: "/gramatica",
    icon: "📝",
    gradient: "gradient-card-blue",
    count: "200 tópicos",
  },
  {
    title: "Vocabulário",
    description: "Expanda seu vocabulário com flashcards interativos organizados por tema.",
    href: "/vocabulario",
    icon: "🗂️",
    gradient: "gradient-card-teal",
    count: "200 categorias",
  },
  {
    title: "Verbos",
    description: "Consulte os verbos mais usados e veja como flexionam nos tempos verbais.",
    href: "/verbos",
    icon: "🔤",
    gradient: "gradient-card-purple",
    count: "100 verbos",
  },
  {
    title: "Exercícios",
    description: "Pratique com quizzes, complete frases e ordene palavras para fixar o conteúdo.",
    href: "/exercicios",
    icon: "✏️",
    gradient: "gradient-card-mixed",
    count: "200 exercícios",
  },
];

const levels = [
  { level: "A1", name: "Iniciante", description: "Nunca estudou inglês? Comece aqui!", borderColor: "border-l-teal", bgColor: "bg-teal/5 hover:bg-teal/10" },
  { level: "A2", name: "Básico", description: "Já sabe o básico e quer evoluir.", borderColor: "border-l-accent", bgColor: "bg-accent/5 hover:bg-accent/10" },
  { level: "B1", name: "Intermediário", description: "Consegue se virar em conversas simples.", borderColor: "border-l-secondary", bgColor: "bg-secondary/5 hover:bg-secondary/10" },
  { level: "B2", name: "Intermediário Superior", description: "Quer refinar e ganhar fluência.", borderColor: "border-l-primary-light", bgColor: "bg-primary-light/5 hover:bg-primary-light/10" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI0MCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNhKSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiLz48L3N2Zz4=')] opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
            <span>🇧🇷</span> Feito especialmente para os alunos da Teacher!
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Um empurrãozinho a mais<br />da Teacher Rafa!
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            900+ conteúdos entre lições, gramática, vocabulário, verbos e exercícios interativos — tudo em um lugar só!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/licoes"
              className="bg-white text-primary font-bold py-3.5 px-8 rounded-xl transition-all text-lg hover:shadow-lg hover:-translate-y-0.5"
            >
              Começar Agora
            </Link>
            <Link
              href="#niveis"
              className="border-2 border-white/30 hover:bg-white/10 font-semibold py-3.5 px-8 rounded-xl transition-all text-lg backdrop-blur-sm"
            >
              Ver Níveis
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { number: "200", label: "Lições", color: "text-primary" },
            { number: "200", label: "Gramática", color: "text-secondary" },
            { number: "200", label: "Vocabulário", color: "text-accent-dark" },
            { number: "100", label: "Verbos", color: "text-primary-light" },
            { number: "200", label: "Exercícios", color: "text-teal-dark" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.number}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 font-[family-name:var(--font-heading)]">
          O que você vai encontrar
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
          Cinco áreas completas para você estudar inglês no seu ritmo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <Link key={section.href} href={section.href} className="group">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group-hover:-translate-y-1 overflow-hidden relative">
                <div className={`absolute top-0 right-0 w-32 h-32 ${section.gradient} opacity-10 rounded-bl-full`} />
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${section.gradient} text-white text-2xl mb-4`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-3">
                  {section.description}
                </p>
                <span className="text-xs font-semibold text-primary bg-primary/5 px-3 py-1 rounded-full">
                  {section.count}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Levels */}
      <section id="niveis" className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 font-[family-name:var(--font-heading)]">
            Por onde começar?
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Escolha seu nível e comece a estudar. Nosso conteúdo segue o padrão internacional CEFR.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {levels.map((item) => (
              <Link
                key={item.level}
                href={`/licoes?nivel=${item.level}`}
                className={`p-6 rounded-xl border-l-4 ${item.borderColor} ${item.bgColor} transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-gray-900">{item.level}</span>
                  <span className="font-semibold text-gray-700">{item.name}</span>
                </div>
                <p className="text-sm text-gray-500">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="gradient-hero rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-heading)]">
            Pronto para começar?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Escolha uma seção e comece a aprender agora mesmo. É 100% gratuito!
          </p>
          <Link
            href="/licoes"
            className="inline-block bg-white text-primary font-bold py-3.5 px-8 rounded-xl transition-all text-lg hover:shadow-lg hover:-translate-y-0.5"
          >
            Ir para as Lições
          </Link>
        </div>
      </section>
    </div>
  );
}
