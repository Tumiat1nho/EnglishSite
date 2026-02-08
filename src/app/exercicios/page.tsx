import Link from "next/link";
import LevelBadge from "@/components/LevelBadge";
import { exerciseSets } from "@/data/exercises";

export const metadata = {
  title: "Exercícios de Inglês | English Academy",
  description: "Pratique inglês com exercícios interativos: quizzes, preencha lacunas e ordene palavras.",
};

const typeLabels: Record<string, string> = {
  quiz: "Quiz",
  "fill-in-the-blank": "Preencher Lacunas",
  "word-order": "Ordenar Palavras",
  mixed: "Misto",
};

const typeIcons: Record<string, string> = {
  quiz: "🎯",
  "fill-in-the-blank": "✍️",
  "word-order": "🔤",
  mixed: "🔀",
};

export default function ExerciciosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
        ✏️ Exercícios
      </h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Pratique o que aprendeu com exercícios interativos. Escolha um tipo de
        exercício e teste seus conhecimentos!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exerciseSets.map((set) => (
          <Link key={set.slug} href={`/exercicios/${set.slug}`} className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{set.icon}</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                  {typeIcons[set.type]} {typeLabels[set.type]}
                </span>
              </div>
              <LevelBadge level={set.level} />
              <h3 className="text-lg font-semibold mt-3 mb-2 text-primary group-hover:text-primary-light transition-colors">
                {set.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{set.description}</p>
              <p className="text-xs text-gray-400 mt-3">{set.questions.length} questões</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
