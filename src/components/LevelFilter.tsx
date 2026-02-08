"use client";

const levels = [
  { id: "all", label: "Todos", color: "bg-gray-100 text-gray-700 hover:bg-gray-200" },
  { id: "A1", label: "A1 · Iniciante", color: "bg-green-100 text-green-800 hover:bg-green-200" },
  { id: "A2", label: "A2 · Básico", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
  { id: "B1", label: "B1 · Intermediário", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
  { id: "B2", label: "B2 · Avançado", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
];

const activeColors: Record<string, string> = {
  all: "bg-gray-800 text-white",
  A1: "bg-green-600 text-white",
  A2: "bg-blue-600 text-white",
  B1: "bg-yellow-500 text-white",
  B2: "bg-orange-600 text-white",
};

interface LevelFilterProps {
  selected: string;
  onChange: (level: string) => void;
}

export default function LevelFilter({ selected, onChange }: LevelFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {levels.map((level) => (
        <button
          key={level.id}
          onClick={() => onChange(level.id)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            selected === level.id ? activeColors[level.id] : level.color
          }`}
        >
          {level.label}
        </button>
      ))}
    </div>
  );
}
