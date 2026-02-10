"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import LevelBadge from "@/components/LevelBadge";
import { vocabularyCategories } from "@/data/vocabulary";

const levelOrder = ["A1", "A2", "B1", "B2"];
const levelNames: Record<string, string> = {
  A1: "Iniciante",
  A2: "Básico",
  B1: "Intermediário",
  B2: "Intermediário Superior",
};
const levelGradients: Record<string, string> = {
  A1: "from-teal to-teal-light",
  A2: "from-accent to-accent-light",
  B1: "from-secondary to-secondary-light",
  B2: "from-primary-light to-primary",
};

export default function VocabularioPage() {
  const searchParams = useSearchParams();
  const initialLevel = searchParams.get("nivel") || "all";
  const [selectedLevel, setSelectedLevel] = useState(initialLevel);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = vocabularyCategories;
    if (selectedLevel !== "all") {
      result = result.filter((c) => c.level === selectedLevel);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedLevel, search]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-heading)]">
          🗂️ Vocabulário
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Aprenda novas palavras em inglês com flashcards interativos. Clique no
          card para ver a tradução, pronúncia e exemplo de uso.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedLevel("all")}
            className={`category-pill px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedLevel === "all"
                ? "bg-gray-800 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Todos ({vocabularyCategories.length})
          </button>
          {levelOrder.map((level) => {
            const count = vocabularyCategories.filter((c) => c.level === level).length;
            return (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`category-pill px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedLevel === level
                    ? `bg-gradient-to-r ${levelGradients[level]} text-white shadow-md`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {level} ({count})
              </button>
            );
          })}
        </div>
        <div className="relative sm:ml-auto">
          <input
            type="text"
            placeholder="Buscar categoria..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
          />
          <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Results */}
      {selectedLevel === "all" ? (
        levelOrder.map((level) => {
          const levelCategories = filtered.filter((c) => c.level === level);
          if (levelCategories.length === 0) return null;
          return (
            <section key={level} className="mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className={`bg-gradient-to-r ${levelGradients[level]} text-white px-3 py-1 rounded-lg text-sm`}>
                  {level}
                </span>
                {levelNames[level]}
                <span className="text-sm font-normal text-gray-400">({levelCategories.length})</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {levelCategories.map((category) => (
                  <Link key={category.slug} href={`/vocabulario/${category.slug}`} className="group">
                    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1 level-${level.toLowerCase()}`}>
                      <div className="text-3xl mb-3">{category.icon}</div>
                      <LevelBadge level={category.level} />
                      <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-900 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{category.description}</p>
                      <p className="text-xs text-gray-400 mt-3">{category.words.length} palavras</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((category) => (
            <Link key={category.slug} href={`/vocabulario/${category.slug}`} className="group">
              <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1 level-${category.level.toLowerCase()}`}>
                <div className="text-3xl mb-3">{category.icon}</div>
                <LevelBadge level={category.level} />
                <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-900 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{category.description}</p>
                <p className="text-xs text-gray-400 mt-3">{category.words.length} palavras</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg">Nenhuma categoria encontrada.</p>
          <p className="text-sm mt-1">Tente mudar o filtro ou a busca.</p>
        </div>
      )}
    </div>
  );
}
