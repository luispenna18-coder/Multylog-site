import Link from "next/link";
import Image from "next/image";
import { Package, Wrench, Truck, ShieldCheck } from "lucide-react";
import FadeUp from "@/components/FadeUp";

const FEATURES = [
  {
    icon: Package,
    label: "Peças Genuínas STILL",
    desc: "Apenas reposição original, sem improvisos.",
  },
  {
    icon: Wrench,
    label: "Multimarca",
    desc: "Atendemos outras marcas além da STILL.",
  },
  {
    icon: Truck,
    label: "Pronta Entrega",
    desc: "Estoque próprio em Recife para agilidade máxima.",
  },
  {
    icon: ShieldCheck,
    label: "Garantia de Qualidade",
    desc: "Peças certificadas com garantia do fabricante.",
  },
];

export default function PartsSection() {
  return (
    <section className="relative section-py bg-white overflow-hidden">
      {/* ── Imagem absoluta — ocupa 58% da direita, borda a borda ── */}
      <FadeUp direction="right" delay={0.15} className="hidden lg:block">
        <div className="absolute right-0 inset-y-0 w-[48%] pointer-events-none">
          <Image
            src="/images/parts/still-exploded.png"
            alt="Empilhadeira STILL com peças explodidas"
            fill
            className="object-contain object-right-center"
            style={{ mixBlendMode: "multiply" }}
            sizes="58vw"
            quality={90}
          />
        </div>
      </FadeUp>

      <div className="site-container">
        {/* ── Coluna de texto (máx 46% em desktop) ── */}
        <FadeUp direction="left">
          <div className="lg:max-w-[46%]">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-[#CC0000]" />
              <span className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest">
                Peças e Serviços
              </span>
            </div>

            <h2 className="heading-lg font-display text-[#1C1C1E] tracking-wide leading-none mb-6">
              Manutenção sem Imprevistos
            </h2>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
              A Multipeças — nossa divisão de peças e serviços — garante
              que sua operação nunca para por falta de peças.
              Trabalhamos com peças genuínas STILL e atendemos
              outras marcas do mercado.
            </p>

            {/* Cards 2×2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {FEATURES.map(({ icon: Icon, label, desc }, i) => (
                <FadeUp key={label} delay={0.08 + i * 0.07}>
                  <div className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-[#CC0000]/40 hover:shadow-sm transition-all">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5F5F7]">
                      <Icon size={26} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-[#1C1C1E] font-semibold text-sm leading-snug">
                        {label}
                      </p>
                      <p className="text-gray-600 text-sm mt-1 leading-snug">
                        {desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <Link
              href="/pecas-servicos"
              className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Ver Peças e Serviços
            </Link>
          </div>
        </FadeUp>

        {/* ── Imagem mobile (abaixo do texto em telas pequenas) ── */}
        <FadeUp direction="right" delay={0.1} className="lg:hidden mt-10">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/images/parts/still-exploded.png"
              alt="Empilhadeira STILL com peças explodidas"
              fill
              className="object-contain object-center"
              style={{ mixBlendMode: "multiply" }}
              sizes="100vw"
              quality={90}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
