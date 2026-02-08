"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { vocabularyCategories } from "@/data/vocabulary";
import LevelBadge from "@/components/LevelBadge";
import Flashcard from "@/components/Flashcard";

export default function VocabularioCategoryPage() {
  const { slug } = useParams();
  const category = vocabularyCategories.find((c) => c.slug === slug);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Categoria não encontrada</h1>
        <Link href="/vocabulario" className="text-primary hover:underline">
          Voltar para vocabulário
        </Link>
      </div>
    );
  }

  const word = category.words[currentIndex];
  const total = category.words.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/vocabulario" className="text-primary hover:underline text-sm mb-4 inline-block">
        ← Voltar para vocabulário
      </Link>

      <div className="mb-8">
        <LevelBadge level={category.level} />
        <h1 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-2 font-[family-name:var(--font-heading)]">
          {category.icon} {category.title}
        </h1>
        <p className="text-gray-600">{category.description}</p>
      </div>

      {/* Flashcard */}
      <div className="max-w-md mx-auto mb-8">
        <div className="text-center text-sm text-gray-500 mb-3">
          Palavra {currentIndex + 1} de {total}
        </div>

        <Flashcard
          english={word.english}
          portuguese={word.portuguese}
          phonetic={word.phonetic}
          example={word.example}
          exampleTranslation={word.exampleTranslation}
        />

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="bg-gray-100 hover:bg-gray-200 disabled:opacity-40 text-gray-700 font-medium py-2 px-6 rounded-lg transition-colors"
          >
            ← Anterior
          </button>

          <div className="flex gap-1">
            {category.words.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex(Math.min(total - 1, currentIndex + 1))}
            disabled={currentIndex === total - 1}
            className="bg-primary hover:bg-primary-light disabled:opacity-40 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Próximo →
          </button>
        </div>
      </div>

      {/* Word List */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📋 Lista Completa</h2>
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-3 text-sm font-semibold text-gray-600">Inglês</th>
                <th className="text-left p-3 text-sm font-semibold text-gray-600">Português</th>
                <th className="text-left p-3 text-sm font-semibold text-gray-600 hidden sm:table-cell">Pronúncia</th>
              </tr>
            </thead>
            <tbody>
              {category.words.map((w, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 cursor-pointer hover:bg-blue-50 transition-colors ${i === currentIndex ? "bg-blue-50" : ""}`}
                  onClick={() => setCurrentIndex(i)}
                >
                  <td className="p-3 font-medium text-primary">{w.english}</td>
                  <td className="p-3 text-gray-600">{w.portuguese}</td>
                  <td className="p-3 text-gray-400 text-sm hidden sm:table-cell">{w.phonetic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
