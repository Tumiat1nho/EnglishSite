import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3 font-[family-name:var(--font-heading)] flex items-center gap-2">
              <span className="bg-white/10 rounded-lg p-1.5 text-base">🎓</span>
              English Academy
            </h3>
            <p className="text-gray-400 text-sm">
              Aprenda inglês de forma gratuita e interativa. Conteúdo para todos
              os níveis, do iniciante ao avançado.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-gray-200">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/licoes" className="hover:text-teal transition-colors">
                  Lições
                </Link>
              </li>
              <li>
                <Link href="/gramatica" className="hover:text-teal transition-colors">
                  Gramática
                </Link>
              </li>
              <li>
                <Link href="/vocabulario" className="hover:text-teal transition-colors">
                  Vocabulário
                </Link>
              </li>
              <li>
                <Link href="/exercicios" className="hover:text-teal transition-colors">
                  Exercícios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-gray-200">Níveis</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/licoes?nivel=A1" className="hover:text-teal transition-colors">A1 - Iniciante</Link></li>
              <li><Link href="/licoes?nivel=A2" className="hover:text-accent transition-colors">A2 - Básico</Link></li>
              <li><Link href="/licoes?nivel=B1" className="hover:text-secondary transition-colors">B1 - Intermediário</Link></li>
              <li><Link href="/licoes?nivel=B2" className="hover:text-primary-light transition-colors">B2 - Intermediário Superior</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} English Academy. Todos os direitos reservados.</p>
          <p className="mt-1">Feito com dedicação para estudantes brasileiros. 🇧🇷</p>
        </div>
      </div>
    </footer>
  );
}
