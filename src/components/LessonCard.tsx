import Link from "next/link";
import LevelBadge from "./LevelBadge";

interface LessonCardProps {
  title: string;
  description: string;
  level: string;
  href: string;
  icon?: string;
}

export default function LessonCard({ title, description, level, href, icon }: LessonCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1">
        {icon && <div className="text-3xl mb-3">{icon}</div>}
        <LevelBadge level={level} />
        <h3 className="text-lg font-semibold mt-3 mb-2 text-primary group-hover:text-primary-light transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
