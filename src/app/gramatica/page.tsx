import Link from "next/link";
import LevelBadge from "@/components/LevelBadge";
import { grammarTopics } from "@/data/grammar";

export const metadata = {
  title: "Gramática Inglesa | English Academy",
  description: "Aprenda gramática inglesa com explicações claras em português. Regras, exemplos e dicas práticas.",
};

export default function GramaticaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
        📝 Gramática Inglesa
      </h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Entenda as regras gramaticais do inglês com explicações claras em
        português, exemplos práticos e dicas para evitar erros comuns.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {grammarTopics.map((topic) => (
          <Link key={topic.slug} href={`/gramatica/${topic.slug}`} className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1">
              <div className="text-3xl mb-3">{topic.icon}</div>
              <LevelBadge level={topic.level} />
              <h3 className="text-lg font-semibold mt-3 mb-2 text-primary group-hover:text-primary-light transition-colors">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
