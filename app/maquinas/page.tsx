"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, CATEGORY_LABELS, type Category } from "@/lib/products";

type Filter = "todos" | "outros" | Category;

const OUTROS_CATEGORIES: Category[] = ["rebocador", "selecionadora", "plataforma-elevatoria"];

const FILTERS: { key: Filter; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "retratil", label: "Retrátil" },
  { key: "contrabalancada", label: "Contrabalançada" },
  { key: "patolada", label: "Patolada" },
  { key: "transpaleteira", label: "Transpaleteira" },
  { key: "outros", label: "Outros" },
];

const VALID_CATEGORIES = new Set(["retratil", "contrabalancada", "patolada", "transpaleteira"]);

function MaquinasCatalog() {
  const searchParams = useSearchParams();
  const paramCategoria = searchParams.get("categoria") ?? "";
  const initialFilter: Filter = VALID_CATEGORIES.has(paramCategoria)
    ? (paramCategoria as Category)
    : "todos";

  const [active, setActive] = useState<Filter>(initialFilter);

  const displayed =
    active === "todos"
      ? PRODUCTS
      : active === "outros"
      ? PRODUCTS.filter((p) => OUTROS_CATEGORIES.includes(p.category as Category))
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full overflow-hidden mt-16 lg:mt-[4.5rem] aspect-[4/3] md:aspect-auto md:h-[clamp(400px,52vh,600px)]">
        <Image
          src="/images/maquinas-banner.png"
          alt="Máquinas Multylog Empilhadeiras"
          fill
          className="object-cover object-center md:object-[center_80%]"
          priority
          sizes="100vw"
          quality={95}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,18,30,0.62)" }} />
        <div className="site-container relative h-full flex items-end pb-12 lg:pb-16">
          <div>
            <h1 className="font-display text-white tracking-wide leading-none" style={{ fontSize: "clamp(2.6rem, 4.5vw, 5.2rem)" }}>
              Máquinas
            </h1>
            <div className="w-12 h-0.5 bg-[#CC0000] mt-4" />
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-py bg-[#F5F5F7] min-h-screen">
        <div className="site-container">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-5 py-2.5 rounded text-sm font-semibold transition-all ${
                  active === f.key
                    ? "bg-[#CC0000] text-white"
                    : "bg-white text-[#1C1C1E] hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-gray-400 text-sm mb-6">{displayed.length} equipamento(s)</p>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {displayed.map((product) => (
              <Link
                key={product.id}
                id={product.id}
                href={`/maquinas/${product.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-white overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-contain ${product.imagePadding ?? "p-5"} group-hover:scale-105 transition-transform duration-300 ${product.imageBlend ? "mix-blend-multiply" : ""}`}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  {product.featured && (
                    <span className="absolute top-3 left-3 bg-[#CC0000] text-white text-xs font-bold px-2 py-1 rounded">
                      ★ Destaque
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Specs com ícones */}
                  <div className="flex items-center gap-5 mb-3">
                    {product.liftHeight && (
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <svg width="13" height="20" viewBox="0 0 13 20" fill="none" className="shrink-0 text-gray-400">
                          <line x1="3" y1="19" x2="10" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="6.5" y1="19" x2="6.5" y2="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
                          <path d="M3 10L6.5 4L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                        {product.liftHeight}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" className="shrink-0 text-gray-400">
                        <path d="M1 5.5L9 1.5L17 5.5V13.5L9 15.5L1 13.5V5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        <line x1="9" y1="1.5" x2="9" y2="15.5" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      {product.capacity}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-[#1C1C1E] mb-1">
                    {product.name}
                  </h3>

                  <div className="flex gap-2 mt-2 mb-auto">
                    {product.available?.includes("locacao") && (
                      <span className="text-xs bg-[#CC0000]/10 text-[#CC0000] font-semibold px-2.5 py-1 rounded">
                        Locação
                      </span>
                    )}
                    {product.available?.includes("venda") && (
                      <span className="text-xs bg-gray-100 text-gray-600 font-semibold px-2.5 py-1 rounded">
                        Venda
                      </span>
                    )}
                  </div>

                  <span className="mt-4 text-[#CC0000] text-sm font-semibold group-hover:underline">
                    Saiba mais →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function MaquinasPage() {
  return (
    <Suspense>
      <MaquinasCatalog />
    </Suspense>
  );
}
