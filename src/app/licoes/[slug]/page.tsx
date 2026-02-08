"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { lessons } from "@/data/lessons";
import LevelBadge from "@/components/LevelBadge";
import Quiz from "@/components/Quiz";

export default function LessonPage() {
  const { slug } = useParams();
  const lesson = lessons.find((l) => l.slug === slug);

  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Lição não encontrada</h1>
        <Link href="/licoes" className="text-primary hover:underline">
          Voltar para as lições
        </Link>
      </div>
    );
  }

  const { content } = lesson;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/licoes" className="text-primary hover:underline text-sm mb-4 inline-block">
        ← Voltar para as lições
      </Link>

      <div className="mb-6">
        <LevelBadge level={lesson.level} />
        <h1 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-2 font-[family-name:var(--font-heading)]">
          {lesson.icon} {lesson.title}
        </h1>
        <p className="text-gray-600">{lesson.description}</p>
      </div>

      {/* Introduction */}
      <section className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
        <h2 className="text-lg font-semibold text-primary mb-2">Introdução</h2>
        <p className="text-gray-700 leading-relaxed">{content.introduction}</p>
      </section>

      {/* Dialogue */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">💬 Diálogo</h2>
        <div className="space-y-3">
          {content.dialogue.map((line, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <p className="font-semibold text-primary text-sm mb-1">{line.speaker}</p>
              <p className="text-gray-900 font-medium">{line.english}</p>
              <p className="text-gray-500 text-sm mt-1">{line.portuguese}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vocabulary */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📖 Vocabulário-Chave</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {content.vocabulary.map((word, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-primary">{word.english}</p>
                  <p className="text-gray-600 text-sm">{word.portuguese}</p>
                </div>
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                  {word.phonetic}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2 italic">&ldquo;{word.example}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grammar Tip */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Dica de Gramática</h2>
        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
          <h3 className="font-semibold text-amber-800 mb-2">{content.grammarTip.title}</h3>
          <p className="text-gray-700 leading-relaxed">{content.grammarTip.explanation}</p>
        </div>
      </section>

      {/* Mini Exercise */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">✏️ Exercício de Fixação</h2>
        <Quiz
          question={content.miniExercise.question}
          options={content.miniExercise.options}
          correctIndex={content.miniExercise.correctIndex}
          explanation={content.miniExercise.explanation}
        />
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link href="/licoes" className="text-primary hover:underline font-medium">
          ← Todas as lições
        </Link>
        <Link href="/exercicios" className="bg-primary hover:bg-primary-light text-white font-medium py-2 px-6 rounded-lg transition-colors">
          Praticar Exercícios →
        </Link>
      </div>
    </div>
  );
}
