"use client";

import { useState } from "react";

interface FlashcardProps {
  english: string;
  portuguese: string;
  phonetic: string;
  example: string;
  exampleTranslation: string;
}

export default function Flashcard({
  english,
  portuguese,
  phonetic,
  example,
  exampleTranslation,
}: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flashcard-container w-full h-64 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flashcard-inner relative w-full h-full ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="flashcard-front absolute inset-0 bg-white rounded-xl shadow-lg border-2 border-primary/10 flex flex-col items-center justify-center p-6">
          <p className="text-3xl font-bold text-primary mb-2">{english}</p>
          <p className="text-sm text-gray-400">{phonetic}</p>
          <p className="text-xs text-gray-400 mt-4">Clique para ver a tradução</p>
        </div>

        {/* Back */}
        <div className="flashcard-back absolute inset-0 bg-primary text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
          <p className="text-2xl font-bold mb-1">{portuguese}</p>
          <p className="text-sm text-blue-200 mb-4">{phonetic}</p>
          <div className="text-sm text-blue-100 text-center">
            <p className="italic">&ldquo;{example}&rdquo;</p>
            <p className="mt-1 text-blue-200">{exampleTranslation}</p>
          </div>
          <p className="text-xs text-blue-300 mt-4">Clique para voltar</p>
        </div>
      </div>
    </div>
  );
}
