"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { exerciseSets } from "@/data/exercises";
import LevelBadge from "@/components/LevelBadge";
import Quiz from "@/components/Quiz";
import FillInTheBlank from "@/components/FillInTheBlank";
import WordOrder from "@/components/WordOrder";

export default function ExercisePage() {
  const { slug } = useParams();
  const exerciseSet = exerciseSets.find((e) => e.slug === slug);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  if (!exerciseSet) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Exercício não encontrado</h1>
        <Link href="/exercicios" className="text-primary hover:underline">
          Voltar para exercícios
        </Link>
      </div>
    );
  }

  const handleAnswer = (correct: boolean) => {
    setAnswered((a) => a + 1);
    if (correct) setScore((s) => s + 1);
  };

  const total = exerciseSet.questions.length;
  const allAnswered = answered === total;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/exercicios" className="text-primary hover:underline text-sm mb-4 inline-block">
        ← Voltar para exercícios
      </Link>

      <div className="mb-8">
        <LevelBadge level={exerciseSet.level} />
        <h1 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-2 font-[family-name:var(--font-heading)]">
          {exerciseSet.icon} {exerciseSet.title}
        </h1>
        <p className="text-gray-600">{exerciseSet.description}</p>
      </div>

      {/* Score bar */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-8 border border-gray-100 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Progresso: <span className="font-semibold">{answered}</span> de{" "}
          <span className="font-semibold">{total}</span>
        </div>
        <div className="text-sm">
          Acertos: <span className="font-bold text-success">{score}</span>
          {answered > 0 && (
            <span className="text-gray-400 ml-1">
              ({Math.round((score / answered) * 100)}%)
            </span>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-500"
          style={{ width: `${(answered / total) * 100}%` }}
        />
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {exerciseSet.questions.map((question, i) => (
          <div key={i}>
            <p className="text-sm font-semibold text-gray-400 mb-2">Questão {i + 1}</p>
            {question.type === "quiz" && (
              <Quiz
                question={question.question}
                options={question.options}
                correctIndex={question.correctIndex}
                explanation={question.explanation}
                onAnswer={handleAnswer}
              />
            )}
            {question.type === "fill-in-the-blank" && (
              <FillInTheBlank
                sentence={question.sentence}
                answer={question.answer}
                hint={question.hint}
                explanation={question.explanation}
                onAnswer={handleAnswer}
              />
            )}
            {question.type === "word-order" && (
              <WordOrder
                words={question.words}
                correctOrder={question.correctOrder}
                translation={question.translation}
                onAnswer={handleAnswer}
              />
            )}
          </div>
        ))}
      </div>

      {/* Final score */}
      {allAnswered && (
        <div className="mt-8 bg-gradient-to-br from-primary to-primary-light text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Exercício Completo!</h2>
          <p className="text-4xl font-bold mb-2">
            {score}/{total}
          </p>
          <p className="text-blue-100 mb-4">
            {score === total
              ? "Perfeito! Você acertou todas! 🎉"
              : score >= total * 0.7
              ? "Muito bem! Continue praticando! 💪"
              : "Não desista! Revise o conteúdo e tente novamente. 📚"}
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Link
              href="/exercicios"
              className="bg-white/20 hover:bg-white/30 font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Mais Exercícios
            </Link>
            <Link
              href="/licoes"
              className="bg-accent hover:bg-accent-light text-primary-dark font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Estudar Lições
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
