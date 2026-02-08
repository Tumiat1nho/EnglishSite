"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { grammarTopics } from "@/data/grammar";
import LevelBadge from "@/components/LevelBadge";

export default function GrammarTopicPage() {
  const { slug } = useParams();
  const topic = grammarTopics.find((t) => t.slug === slug);

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Tópico não encontrado</h1>
        <Link href="/gramatica" className="text-primary hover:underline">
          Voltar para gramática
        </Link>
      </div>
    );
  }

  const { content } = topic;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/gramatica" className="text-primary hover:underline text-sm mb-4 inline-block">
        ← Voltar para gramática
      </Link>

      <div className="mb-6">
        <LevelBadge level={topic.level} />
        <h1 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-2 font-[family-name:var(--font-heading)]">
          {topic.icon} {topic.title}
        </h1>
        <p className="text-gray-600">{topic.description}</p>
      </div>

      {/* Explanation */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📖 Explicação</h2>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {content.explanation}
        </div>
      </section>

      {/* Examples */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">💬 Exemplos</h2>
        <div className="space-y-3">
          {content.examples.map((ex, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <p className="text-gray-900 font-medium">
                {ex.english.split(ex.highlight).map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && (
                      <span className="bg-accent/20 text-amber-800 font-bold px-1 rounded">
                        {ex.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
              <p className="text-gray-500 text-sm mt-1">{ex.portuguese}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">⚠️ Erros Comuns</h2>
        <div className="space-y-3">
          {content.commonMistakes.map((mistake, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row gap-3 mb-2">
                <div className="flex-1">
                  <span className="text-xs font-semibold text-red-600 uppercase">Errado</span>
                  <p className="text-red-700 line-through">{mistake.wrong}</p>
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-green-600 uppercase">Correto</span>
                  <p className="text-green-700 font-medium">{mistake.correct}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{mistake.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tip */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Dica Prática</h2>
        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
          <p className="text-gray-700 leading-relaxed">{content.tip}</p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link href="/gramatica" className="text-primary hover:underline font-medium">
          ← Todos os tópicos
        </Link>
        <Link href="/exercicios" className="bg-primary hover:bg-primary-light text-white font-medium py-2 px-6 rounded-lg transition-colors">
          Praticar Exercícios →
        </Link>
      </div>
    </div>
  );
}
