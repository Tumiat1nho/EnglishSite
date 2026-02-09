"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { lessonsByLevel } from "@/data/lessons/index";
import { grammarByLevel } from "@/data/grammar/index";
import { vocabularyByLevel } from "@/data/vocabulary/index";
import { exercisesByLevel } from "@/data/exercises/index";
import LevelBadge from "@/components/LevelBadge";

const levelInfo: Record<string, { name: string; description: string; color: string; bgGradient: string }> = {
  A1: {
    name: "Iniciante",
    description: "Primeiro contato com o inglês. Aprenda cumprimentos, números, cores e frases do dia a dia.",
    color: "text-green-600",
    bgGradient: "from-green-600 to-green-800",
  },
  A2: {
    name: "Básico",
    description: "Já sabe o básico. Agora aprenda a se virar em situações cotidianas como restaurantes, compras e viagens.",
    color: "text-blue-600",
    bgGradient: "from-blue-600 to-blue-800",
  },
  B1: {
    name: "Intermediário",
    description: "Consiga lidar com a maioria das situações de viagem e trabalho. Expresse opiniões e conte histórias.",
    color: "text-yellow-600",
    bgGradient: "from-yellow-600 to-yellow-800",
  },
  B2: {
    name: "Intermediário Superior",
    description: "Discuta temas complexos, participe de reuniões e apresentações, e domine expressões idiomáticas.",
    color: "text-orange-600",
    bgGradient: "from-orange-600 to-orange-800",
  },
};

const allLevels = ["A1", "A2", "B1", "B2"];

export default function LevelHubPage() {
  const { level } = useParams();
  const lvl = (level as string)?.toUpperCase();
  const info = levelInfo[lvl];

  if (!info) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Nível não encontrado</h1>
        <Link href="/" className="text-primary hover:underline">Voltar ao início</Link>
      </div>
    );
  }

  const lvlLessons = lessonsByLevel[lvl] || [];
  const lvlGrammar = grammarByLevel[lvl] || [];
  const lvlVocabulary = vocabularyByLevel[lvl] || [];
  const lvlExercises = exercisesByLevel[lvl] || [];

  return (
    <div>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${info.bgGradient} text-white py-16 px-4`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            {allLevels.map((l) => (
              <Link
                key={l}
                href={`/nivel/${l.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  l === lvl
                    ? "bg-white/25 ring-2 ring-white"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {l}
              </Link>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 font-[family-name:var(--font-heading)]">
            Nível {lvl} — {info.name}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">{info.description}</p>
          <div className="flex gap-6 mt-6 text-sm text-white/70">
            <span>📚 {lvlLessons.length} lições</span>
            <span>📝 {lvlGrammar.length} gramática</span>
            <span>🗂️ {lvlVocabulary.length} vocabulário</span>
            <span>✏️ {lvlExercises.length} exercícios</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Lessons */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 font-[family-name:var(--font-heading)]">
              📚 Lições
            </h2>
            <Link href={`/licoes?nivel=${lvl}`} className="text-primary hover:underline text-sm font-medium">
              Ver todas →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lvlLessons.map((lesson) => (
              <Link key={lesson.slug} href={`/licoes/${lesson.slug}`} className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-5 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-0.5">
                  <span className="text-2xl">{lesson.icon}</span>
                  <h3 className="font-semibold text-primary mt-2 mb-1 group-hover:text-primary-light transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{lesson.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Grammar */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 font-[family-name:var(--font-heading)]">
              📝 Gramática
            </h2>
            <Link href={`/gramatica?nivel=${lvl}`} className="text-primary hover:underline text-sm font-medium">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lvlGrammar.map((topic) => (
              <Link key={topic.slug} href={`/gramatica/${topic.slug}`} className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-5 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-0.5">
                  <span className="text-2xl">{topic.icon}</span>
                  <h3 className="font-semibold text-primary mt-2 mb-1 group-hover:text-primary-light transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{topic.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Vocabulary */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 font-[family-name:var(--font-heading)]">
              🗂️ Vocabulário
            </h2>
            <Link href={`/vocabulario?nivel=${lvl}`} className="text-primary hover:underline text-sm font-medium">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lvlVocabulary.map((cat) => (
              <Link key={cat.slug} href={`/vocabulario/${cat.slug}`} className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-5 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-0.5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-semibold text-primary mt-2 mb-1 group-hover:text-primary-light transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{cat.words.length} palavras</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Exercises */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 font-[family-name:var(--font-heading)]">
              ✏️ Exercícios
            </h2>
            <Link href={`/exercicios?nivel=${lvl}`} className="text-primary hover:underline text-sm font-medium">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lvlExercises.map((ex) => (
              <Link key={ex.slug} href={`/exercicios/${ex.slug}`} className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-5 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-0.5">
                  <span className="text-2xl">{ex.icon}</span>
                  <h3 className="font-semibold text-primary mt-2 mb-1 group-hover:text-primary-light transition-colors">
                    {ex.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{ex.questions.length} questões</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
