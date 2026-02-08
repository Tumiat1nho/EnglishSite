"use client";

import { useState } from "react";

interface FillInTheBlankProps {
  sentence: string;
  answer: string;
  hint?: string;
  explanation: string;
  onAnswer?: (correct: boolean) => void;
}

export default function FillInTheBlank({
  sentence,
  answer,
  hint,
  explanation,
  onAnswer,
}: FillInTheBlankProps) {
  const [input, setInput] = useState("");
  const [answered, setAnswered] = useState(false);
  const isCorrect = input.trim().toLowerCase() === answer.toLowerCase();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || answered) return;
    setAnswered(true);
    onAnswer?.(isCorrect);
  };

  const parts = sentence.split("___");

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <div className="text-lg mb-4">
        <span className="text-gray-900">{parts[0]}</span>
        {answered ? (
          <span className={`font-bold px-2 py-0.5 rounded ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {input}
          </span>
        ) : (
          <form onSubmit={handleSubmit} className="inline">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={hint || "..."}
              className="border-b-2 border-primary mx-1 px-2 py-0.5 text-center font-medium outline-none focus:border-accent w-32 bg-transparent"
              autoFocus
            />
          </form>
        )}
        <span className="text-gray-900">{parts[1]}</span>
      </div>

      {!answered && (
        <button
          onClick={handleSubmit}
          disabled={!input.trim()}
          className="bg-primary hover:bg-primary-light disabled:opacity-50 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Verificar
        </button>
      )}

      {answered && (
        <div className={`mt-4 p-4 rounded-lg ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <p className="font-semibold mb-1">
            {isCorrect ? "✅ Correto!" : `❌ Incorreto! A resposta certa é: "${answer}"`}
          </p>
          <p className="text-sm text-gray-700">{explanation}</p>
        </div>
      )}
    </div>
  );
}
