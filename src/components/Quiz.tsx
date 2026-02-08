"use client";

import { useState } from "react";

interface QuizProps {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  onAnswer?: (correct: boolean) => void;
}

export default function Quiz({ question, options, correctIndex, explanation, onAnswer }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    onAnswer?.(index === correctIndex);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <p className="text-lg font-semibold text-gray-900 mb-4">{question}</p>
      <div className="space-y-3">
        {options.map((option, i) => {
          let style = "border-gray-200 hover:border-primary/40 hover:bg-gray-50";
          if (answered) {
            if (i === correctIndex) {
              style = "border-success bg-green-50 text-green-800";
            } else if (i === selected) {
              style = "border-error bg-red-50 text-red-800";
            } else {
              style = "border-gray-200 opacity-50";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              className={`w-full text-left p-3 rounded-lg border-2 transition-all ${style} ${!answered ? "cursor-pointer" : "cursor-default"}`}
            >
              <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
              {option}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={`mt-4 p-4 rounded-lg ${selected === correctIndex ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <p className="font-semibold mb-1">
            {selected === correctIndex ? "✅ Correto!" : "❌ Incorreto!"}
          </p>
          <p className="text-sm text-gray-700">{explanation}</p>
        </div>
      )}
    </div>
  );
}
