"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const navSections = [
  {
    label: "Lições",
    href: "/licoes",
    items: [
      { href: "/licoes?nivel=A1", label: "A1 - Iniciante" },
      { href: "/licoes?nivel=A2", label: "A2 - Básico" },
      { href: "/licoes?nivel=B1", label: "B1 - Intermediário" },
      { href: "/licoes?nivel=B2", label: "B2 - Avançado" },
    ],
  },
  {
    label: "Gramática",
    href: "/gramatica",
    items: [
      { href: "/gramatica?nivel=A1", label: "A1 - Iniciante" },
      { href: "/gramatica?nivel=A2", label: "A2 - Básico" },
      { href: "/gramatica?nivel=B1", label: "B1 - Intermediário" },
      { href: "/gramatica?nivel=B2", label: "B2 - Avançado" },
    ],
  },
  {
    label: "Vocabulário",
    href: "/vocabulario",
    items: [
      { href: "/vocabulario?nivel=A1", label: "A1 - Iniciante" },
      { href: "/vocabulario?nivel=A2", label: "A2 - Básico" },
      { href: "/vocabulario?nivel=B1", label: "B1 - Intermediário" },
      { href: "/vocabulario?nivel=B2", label: "B2 - Avançado" },
    ],
  },
  {
    label: "Verbos",
    href: "/verbos",
    items: [],
  },
  {
    label: "Exercícios",
    href: "/exercicios",
    items: [
      { href: "/exercicios?nivel=A1", label: "A1 - Iniciante" },
      { href: "/exercicios?nivel=A2", label: "A2 - Básico" },
      { href: "/exercicios?nivel=B1", label: "B1 - Intermediário" },
      { href: "/exercicios?nivel=B2", label: "B2 - Avançado" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-[family-name:var(--font-heading)] tracking-tight flex items-center gap-2">
          <span className="bg-white/20 rounded-lg p-1.5 text-lg">🎓</span>
          Teacher Rafa
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1" ref={dropdownRef}>
          {navSections.map((section) => (
            <div key={section.href} className="relative">
              <div className="flex items-center">
                <Link
                  href={section.href}
                  className="px-3 py-2 rounded-lg hover:bg-white/15 transition-colors font-medium text-sm"
                >
                  {section.label}
                </Link>
                {section.items.length > 0 && (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === section.label ? null : section.label)}
                    className="p-1 rounded hover:bg-white/15 transition-colors"
                    aria-label={`Submenu ${section.label}`}
                  >
                    <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === section.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {section.items.length > 0 && openDropdown === section.label && (
                <div className="dropdown-menu absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] z-50">
                  <Link
                    href={section.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary font-medium"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Ver todos
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/15 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-primary-dark/50 backdrop-blur-sm px-4 pb-4 space-y-1">
          {navSections.map((section) => (
            <div key={section.href}>
              <Link
                href={section.href}
                className="block py-2.5 px-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {section.label}
              </Link>
              {section.items.length > 0 && (
                <div className="pl-6 space-y-0.5">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1.5 px-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
