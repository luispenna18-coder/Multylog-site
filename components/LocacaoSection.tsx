import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const CARDS = [
  {
    image: "/images/card-locacao-prazo.png",
    badge: "Flexibilidade",
    title: "Spot ou Longo Prazo",
    description:
      "Do dia a dia ao contrato anual. Você define o prazo conforme a necessidade da sua operação.",
  },
  {
    image: "/images/card-manutencao.png",
    badge: "Sem Surpresas",
    title: "Manutenção Inclusa",
    description:
      "Preventiva, corretiva e peças — sem custo extra, sem surpresa no orçamento.",
  },
  {
    image: "/images/card-frota.png",
    badge: "Frota Variada",
    title: "Nova ou Usada",
    description:
      "Frota variada para encaixar no seu orçamento sem abrir mão da disponibilidade.",
  },
];

export default function LocacaoSection() {
  return (
    <section className="bg-[#F5F5F7] section-py">
      <div className="site-container">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-0.5 bg-[#CC0000]" />
            <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
              Nossa Especialidade
            </span>
          </div>
          <h2 className="heading-lg font-display tracking-wide leading-none mb-5">
            <span className="text-[#1C1C1E]">Locação de Empilhadeiras </span>
            <span className="text-[#CC0000]">Sob Medida</span>
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl leading-relaxed">
            Locação spot ou longo prazo, empilhadeira nova ou usada. Você
            escolhe o que faz sentido. Manutenção inclusa em todos os contratos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#CC0000]/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Imagem */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                />
              </div>

              {/* Texto abaixo */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-0.5 bg-[#CC0000]" />
                  <span className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest">
                    {card.badge}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#1C1C1E] tracking-wide leading-tight mb-1.5">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Gostaria%20de%20solicitar%20uma%20cotação%20de%20locação%20de%20empilhadeira.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Solicitar cotação de locação
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
