import LessonCard from "@/components/LessonCard";
import { lessons } from "@/data/lessons";

export const metadata = {
  title: "Lições de Inglês | English Academy",
  description: "Aprenda inglês com lições organizadas por nível CEFR. Do iniciante ao avançado.",
};

const levelOrder = ["A1", "A2", "B1", "B2"];
const levelNames: Record<string, string> = {
  A1: "Iniciante",
  A2: "Básico",
  B1: "Intermediário",
  B2: "Intermediário Superior",
};

export default function LicoesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
        📚 Lições de Inglês
      </h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Aprenda inglês com lições práticas organizadas por nível. Cada lição inclui
        diálogos, vocabulário e exercícios de fixação.
      </p>

      {levelOrder.map((level) => {
        const levelLessons = lessons.filter((l) => l.level === level);
        if (levelLessons.length === 0) return null;

        return (
          <section key={level} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="bg-primary text-white px-3 py-1 rounded-lg text-sm">
                {level}
              </span>
              {levelNames[level]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {levelLessons.map((lesson) => (
                <LessonCard
                  key={lesson.slug}
                  title={lesson.title}
                  description={lesson.description}
                  level={lesson.level}
                  href={`/licoes/${lesson.slug}`}
                  icon={lesson.icon}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
