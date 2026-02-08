const levelColors: Record<string, string> = {
  A1: "bg-green-100 text-green-800 border-green-300",
  A2: "bg-blue-100 text-blue-800 border-blue-300",
  B1: "bg-yellow-100 text-yellow-800 border-yellow-300",
  B2: "bg-orange-100 text-orange-800 border-orange-300",
  C1: "bg-red-100 text-red-800 border-red-300",
  C2: "bg-purple-100 text-purple-800 border-purple-300",
};

const levelNames: Record<string, string> = {
  A1: "Iniciante",
  A2: "Básico",
  B1: "Intermediário",
  B2: "Intermediário Superior",
  C1: "Avançado",
  C2: "Proficiente",
};

export default function LevelBadge({ level }: { level: string }) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full border ${levelColors[level] || "bg-gray-100 text-gray-800 border-gray-300"}`}
    >
      {level} - {levelNames[level] || level}
    </span>
  );
}
