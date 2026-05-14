"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <section className="relative w-full overflow-hidden mt-16 lg:mt-[4.5rem] aspect-[4/3] md:aspect-[16/5]">
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
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
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
          <p className="text-gray-500 text-sm mb-6">{displayed.length} equipamento{displayed.length !== 1 ? "s" : ""}</p>

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
                  {/* Specs com ícones — estilo STILL */}
                  <div className="flex items-stretch mb-4">
                    {product.liftHeight && (
                      <>
                        <div className="flex flex-col items-center gap-1 pr-4">
                          {/* Ícone elevação */}
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gray-400">
                            <line x1="6" y1="26" x2="22" y2="26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 2"/>
                            <line x1="14" y1="24" x2="14" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            <path d="M9 14L14 6L19 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          </svg>
                          <span className="text-xs font-semibold text-[#CC0000]">{product.liftHeight}</span>
                        </div>
                        <div className="w-px bg-gray-200 mx-1 self-stretch" />
                      </>
                    )}
                    <div className="flex flex-col items-center gap-1 pl-4">
                      {/* Ícone capacidade (sacola/peso) */}
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gray-400">
                        <path d="M8 11h12l-1.5 12H9.5L8 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                        <path d="M10 11c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                      </svg>
                      <span className="text-xs font-semibold text-[#CC0000]">{product.capacity}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl text-[#1C1C1E] tracking-wide mb-1">
                    {product.name}
                  </h3>

                  <div className="flex gap-2 mt-2 mb-auto">
                    {product.available?.includes("locacao") && (
                      <span className="text-xs bg-[#CC0000]/10 text-[#CC0000] font-semibold px-2.5 py-1 rounded">
                        Locação
                      </span>
                    )}
                    {product.available?.includes("venda") && (
                      <span className="text-xs bg-[#1C1C1E]/10 text-[#1C1C1E] font-semibold px-2.5 py-1 rounded">
                        Venda
                      </span>
                    )}
                  </div>

                  <span className="mt-4 inline-flex items-center gap-1 text-[#CC0000] text-sm font-semibold group-hover:underline">
                    Saiba mais <ArrowRight size={14} />
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
