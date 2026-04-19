import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";
import { PRODUCTS, CATEGORY_LABELS } from "@/lib/products";
import { SITE } from "@/lib/constants";
import ImageGallery from "./ImageGallery";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Multylog Empilhadeiras`,
    description: product.description?.slice(0, 155),
  };
}

const SPEC_ROWS = [
  { key: "capacity", label: "Capacidade de Carga" },
  { key: "liftHeight", label: "Altura de Elevação" },
  { key: "speed", label: "Velocidade Máxima" },
  { key: "energy", label: "Alimentação" },
  { key: "intensityOfUse", label: "Intensidade de Uso" },
  { key: "applicationType", label: "Tipo de Aplicação" },
  { key: "controlType", label: "Tipo de Controle" },
  { key: "brand", label: "Marca" },
] as const;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const specValues: Record<string, string | undefined> = {
    capacity: product.capacity,
    liftHeight: product.liftHeight,
    speed: product.speed,
    energy: product.energy,
    intensityOfUse: product.intensityOfUse,
    applicationType: product.applicationType,
    controlType: product.controlType,
    brand: product.brand,
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C1C1E] pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/maquinas" className="hover:text-gray-300 transition-colors flex items-center gap-1">
              <ArrowLeft size={14} />
              Máquinas
            </Link>
            <span>/</span>
            <span className="text-gray-400">{CATEGORY_LABELS[product.category]}</span>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </nav>

          <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
            {CATEGORY_LABELS[product.category]}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl text-white mt-2 mb-4 tracking-wide">
            {product.name}
          </h1>
          <div className="flex flex-wrap gap-2">
            {product.energy && (
              <span className="bg-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                {product.energy}
              </span>
            )}
            {product.available?.includes("locacao") && (
              <span className="bg-[#CC0000]/20 text-[#FF6B6B] text-xs font-semibold px-3 py-1 rounded-full">
                Disponível para Locação
              </span>
            )}
            {product.available?.includes("venda") && (
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                Disponível para Venda
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Gallery */}
            <ImageGallery
              main={product.image}
              name={product.name}
              gallery={product.gallery ?? []}
            />

            {/* Specs + CTA */}
            <div>
              <h2 className="font-display text-3xl text-[#1C1C1E] tracking-wide mb-6">
                Especificações Técnicas
              </h2>

              <table className="w-full text-sm border-collapse mb-8">
                <tbody>
                  {SPEC_ROWS.map(({ key, label }) => {
                    const value = specValues[key];
                    if (!value) return null;
                    return (
                      <tr key={key} className="border-b border-gray-100 last:border-0">
                        <td className="py-3 pr-4 text-gray-500 font-medium w-1/2">{label}</td>
                        <td className="py-3 text-[#1C1C1E] font-semibold">{value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Tenho%20interesse%20no%20${encodeURIComponent(product.name)}.%20Poderia%20me%20enviar%20mais%20informações?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold py-3.5 px-6 rounded transition-colors"
                >
                  Solicitar Cotação via WhatsApp
                </a>
                {product.datasheet && (
                  <a
                    href={product.datasheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-[#1C1C1E] text-[#1C1C1E] font-semibold py-3.5 px-6 rounded transition-colors"
                  >
                    <FileText size={16} />
                    Ficha Técnica
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      {product.description && (
        <section className="py-12 lg:py-16 bg-[#F5F5F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl text-[#1C1C1E] tracking-wide mb-6">
              Sobre este Equipamento
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          </div>
        </section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl text-[#1C1C1E] tracking-wide mb-8">
              Equipamentos Relacionados
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/maquinas/${rel.id}`}
                  className="group bg-[#F5F5F7] rounded-xl overflow-hidden border border-gray-100 hover:border-[#CC0000]/40 hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-white overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className={`object-contain ${rel.imagePadding ?? "p-5"} group-hover:scale-105 transition-transform duration-300`}
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-4 mb-2">
                      {rel.liftHeight && (
                        <span className="flex items-center gap-1.5 text-xs text-gray-500">
                          <svg width="13" height="20" viewBox="0 0 13 20" fill="none" className="shrink-0 text-gray-400">
                            <line x1="3" y1="19" x2="10" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <line x1="6.5" y1="19" x2="6.5" y2="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
                            <path d="M3 10L6.5 4L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          </svg>
                          {rel.liftHeight}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" className="shrink-0 text-gray-400">
                          <path d="M1 5.5L9 1.5L17 5.5V13.5L9 15.5L1 13.5V5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                          <line x1="9" y1="1.5" x2="9" y2="15.5" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        {rel.capacity}
                      </span>
                    </div>
                    <p className="font-display text-xl text-[#1C1C1E] tracking-wide mb-2">{rel.name}</p>
                    <span className="text-[#CC0000] text-sm font-semibold group-hover:underline">Saiba mais →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
