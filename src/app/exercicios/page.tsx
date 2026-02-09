"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import LevelBadge from "@/components/LevelBadge";
import { exerciseSets } from "@/data/exercises";

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

function ExerciciosContent() {
  const searchParams = useSearchParams();
  const initialLevel = searchParams.get("nivel") || "all";
  const [selectedLevel, setSelectedLevel] = useState(initialLevel);
  const [selectedType, setSelectedType] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = exerciseSets;
    if (selectedLevel !== "all") {
      result = result.filter((e) => e.level === selectedLevel);
    }
    if (selectedType !== "all") {
      result = result.filter((e) => e.type === selectedType);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedLevel, selectedType, search]);

  const exerciseTypes = ["all", "quiz", "fill-in-the-blank", "word-order", "mixed"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-heading)]">
          ✏️ Exercícios
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Pratique o que aprendeu com exercícios interativos. Escolha um tipo de
          exercício e teste seus conhecimentos!
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedLevel("all")}
              className={`category-pill px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedLevel === "all"
                  ? "bg-gray-800 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Todos ({exerciseSets.length})
            </button>
            {levelOrder.map((level) => {
              const count = exerciseSets.filter((e) => e.level === level).length;
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
              placeholder="Buscar exercício..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        {/* Type filter */}
        <div className="flex flex-wrap gap-2">
          {exerciseTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedType === type
                  ? "bg-primary text-white shadow-sm"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {type === "all" ? "Todos os tipos" : `${typeIcons[type]} ${typeLabels[type]}`}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {selectedLevel === "all" ? (
        levelOrder.map((level) => {
          const levelExercises = filtered.filter((e) => e.level === level);
          if (levelExercises.length === 0) return null;
          return (
            <section key={level} className="mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className={`bg-gradient-to-r ${levelGradients[level]} text-white px-3 py-1 rounded-lg text-sm`}>
                  {level}
                </span>
                {levelNames[level]}
                <span className="text-sm font-normal text-gray-400">({levelExercises.length})</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {levelExercises.map((set) => (
                  <Link key={set.slug} href={`/exercicios/${set.slug}`} className="group">
                    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1 level-${level.toLowerCase()}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{set.icon}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                          {typeIcons[set.type]} {typeLabels[set.type]}
                        </span>
                      </div>
                      <LevelBadge level={set.level} />
                      <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-900 group-hover:text-primary transition-colors">
                        {set.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{set.description}</p>
                      <p className="text-xs text-gray-400 mt-3">{set.questions.length} questões</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((set) => (
            <Link key={set.slug} href={`/exercicios/${set.slug}`} className="group">
              <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1 level-${set.level.toLowerCase()}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{set.icon}</span>
                  <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                    {typeIcons[set.type]} {typeLabels[set.type]}
                  </span>
                </div>
                <LevelBadge level={set.level} />
                <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-900 group-hover:text-primary transition-colors">
                  {set.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{set.description}</p>
                <p className="text-xs text-gray-400 mt-3">{set.questions.length} questões</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg">Nenhum exercício encontrado.</p>
          <p className="text-sm mt-1">Tente mudar o filtro ou a busca.</p>
        </div>
      )}
    </div>
  );
}

export default function ExerciciosPage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-12 text-center text-gray-400">Carregando...</div>}>
      <ExerciciosContent />
    </Suspense>
  );
}
