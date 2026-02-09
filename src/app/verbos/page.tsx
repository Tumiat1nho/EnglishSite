"use client";

import { useMemo, useState } from "react";
import { verbs } from "@/data/verbs";

export default function VerbosPage() {
  const [search, setSearch] = useState("");
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) {
      return verbs;
    }
    return verbs.filter((verb) =>
      [verb.base, verb.thirdPerson, verb.past].some((value) =>
        value.toLowerCase().includes(q)
      )
    );
  }, [search]);

  function toggleCard(base: string) {
    setFlipped((prev) => ({ ...prev, [base]: !prev[base] }));
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
            🔤 Verbos essenciais
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-heading)]">
            Verbos mais usados em inglês
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Veja 100 verbos frequentes com suas formas no Simple Present, Simple Past e Simple Future,
            além da regra usada para formar o passado.
          </p>
        </div>
        <div className="w-full md:w-80">
          <label className="text-sm text-gray-600 block mb-2">Buscar verbo</label>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Ex.: go, went, goes"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Flashcards</h3>
            <p className="text-sm text-gray-500">
              Clique em um card para ver Simple Present, Simple Past e Simple Future.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((verb) => {
            const isFlipped = flipped[verb.base];
            return (
              <button
                key={`card-${verb.base}`}
                type="button"
                onClick={() => toggleCard(verb.base)}
                className="text-left bg-white border border-gray-100 rounded-2xl shadow-sm p-5 transition-transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-pressed={isFlipped}
              >
                {!isFlipped ? (
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-wide text-gray-400">Verbo</div>
                    <div className="text-2xl font-bold text-gray-900">{verb.base}</div>
                    <div className="text-sm text-gray-500">Clique para revelar</div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-gray-700">Simple Present</div>
                    <div className="text-lg text-gray-900">{verb.thirdPerson}</div>
                    <div className="text-sm font-semibold text-gray-700">Simple Past</div>
                    <div className="text-lg text-gray-900">{verb.past}</div>
                    <div className="text-sm font-semibold text-gray-700">Simple Future</div>
                    <div className="text-lg text-gray-900">will {verb.base}</div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
