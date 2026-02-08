import Link from "next/link";
import LevelBadge from "@/components/LevelBadge";
import { vocabularyCategories } from "@/data/vocabulary";

export const metadata = {
  title: "Vocabulário | English Academy",
  description: "Expanda seu vocabulário em inglês com flashcards interativos organizados por tema.",
};

export default function VocabularioPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
        🗂️ Vocabulário
      </h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Aprenda novas palavras em inglês com flashcards interativos. Clique no
        card para ver a tradução, pronúncia e exemplo de uso.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vocabularyCategories.map((category) => (
          <Link key={category.slug} href={`/vocabulario/${category.slug}`} className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1">
              <div className="text-3xl mb-3">{category.icon}</div>
              <LevelBadge level={category.level} />
              <h3 className="text-lg font-semibold mt-3 mb-2 text-primary group-hover:text-primary-light transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
              <p className="text-xs text-gray-400 mt-3">{category.words.length} palavras</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
