const levelColors: Record<string, string> = {
  A1: "bg-teal/15 text-teal-dark border-teal/30",
  A2: "bg-accent/15 text-accent-dark border-accent/30",
  B1: "bg-secondary/15 text-primary border-secondary/30",
  B2: "bg-primary-light/15 text-primary-dark border-primary-light/30",
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
