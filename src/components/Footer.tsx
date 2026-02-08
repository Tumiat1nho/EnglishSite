import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3 font-[family-name:var(--font-heading)]">
              🎓 English Academy
            </h3>
            <p className="text-gray-300 text-sm">
              Aprenda inglês de forma gratuita e interativa. Conteúdo para todos
              os níveis, do iniciante ao avançado.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/licoes" className="hover:text-white transition-colors">
                  Lições
                </Link>
              </li>
              <li>
                <Link href="/gramatica" className="hover:text-white transition-colors">
                  Gramática
                </Link>
              </li>
              <li>
                <Link href="/vocabulario" className="hover:text-white transition-colors">
                  Vocabulário
                </Link>
              </li>
              <li>
                <Link href="/exercicios" className="hover:text-white transition-colors">
                  Exercícios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Níveis</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>A1 - Iniciante</li>
              <li>A2 - Básico</li>
              <li>B1 - Intermediário</li>
              <li>B2 - Intermediário Superior</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} English Academy. Todos os direitos reservados.</p>
          <p className="mt-1">Feito com dedicação para estudantes brasileiros.</p>
        </div>
      </div>
    </footer>
  );
}
