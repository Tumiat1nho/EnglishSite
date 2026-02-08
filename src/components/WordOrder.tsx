"use client";

import { useState } from "react";

interface WordOrderProps {
  words: string[];
  correctOrder: string[];
  translation: string;
  onAnswer?: (correct: boolean) => void;
}

export default function WordOrder({ words, correctOrder, translation, onAnswer }: WordOrderProps) {
  const [available, setAvailable] = useState([...words]);
  const [selected, setSelected] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);
  const isCorrect = selected.join(" ") === correctOrder.join(" ");

  const handleSelectWord = (word: string, index: number) => {
    if (answered) return;
    setSelected([...selected, word]);
    const newAvailable = [...available];
    newAvailable.splice(index, 1);
    setAvailable(newAvailable);
  };

  const handleRemoveWord = (word: string, index: number) => {
    if (answered) return;
    setAvailable([...available, word]);
    const newSelected = [...selected];
    newSelected.splice(index, 1);
    setSelected(newSelected);
  };

  const handleCheck = () => {
    setAnswered(true);
    onAnswer?.(isCorrect);
  };

  const handleReset = () => {
    setAvailable([...words]);
    setSelected([]);
    setAnswered(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <p className="text-sm text-gray-500 mb-2">Traduza: <span className="font-medium text-gray-700">{translation}</span></p>

      {/* Selected words area */}
      <div className="min-h-14 bg-gray-50 rounded-lg p-3 mb-4 border-2 border-dashed border-gray-200 flex flex-wrap gap-2">
        {selected.length === 0 && (
          <span className="text-gray-400 text-sm">Clique nas palavras abaixo para formar a frase...</span>
        )}
        {selected.map((word, i) => (
          <button
            key={`${word}-${i}`}
            onClick={() => handleRemoveWord(word, i)}
            disabled={answered}
            className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-all ${
              answered
                ? isCorrect
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
                : "bg-primary text-white hover:bg-primary-light cursor-pointer"
            }`}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Available words */}
      <div className="flex flex-wrap gap-2 mb-4">
        {available.map((word, i) => (
          <button
            key={`${word}-${i}`}
            onClick={() => handleSelectWord(word, i)}
            disabled={answered}
            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-sm text-gray-700 transition-all border border-gray-200 cursor-pointer"
          >
            {word}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        {!answered && (
          <>
            <button
              onClick={handleCheck}
              disabled={selected.length === 0}
              className="bg-primary hover:bg-primary-light disabled:opacity-50 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Verificar
            </button>
            <button
              onClick={handleReset}
              className="border border-gray-300 hover:bg-gray-50 text-gray-600 font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Recomeçar
            </button>
          </>
        )}
      </div>

      {answered && (
        <div className={`mt-4 p-4 rounded-lg ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <p className="font-semibold mb-1">
            {isCorrect ? "✅ Correto!" : "❌ Incorreto!"}
          </p>
          {!isCorrect && (
            <p className="text-sm text-gray-700 mb-2">
              Ordem correta: <span className="font-semibold">{correctOrder.join(" ")}</span>
            </p>
          )}
          <button
            onClick={handleReset}
            className="text-sm text-primary hover:underline font-medium mt-1"
          >
            Tentar novamente
          </button>
        </div>
      )}
    </div>
  );
}
