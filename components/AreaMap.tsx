"use client";

import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import { SITE } from "@/lib/constants";

const COVERED = [
  { abbr: "PE", name: "Pernambuco", city: "Recife" },
  { abbr: "PB", name: "Paraíba", city: "João Pessoa" },
  { abbr: "AL", name: "Alagoas", city: "Maceió" },
  { abbr: "RN", name: "Rio Grande do Norte", city: "Natal" },
  { abbr: "SE", name: "Sergipe", city: "Aracaju" },
];

export default function AreaMap() {
  return (
    <section className="py-10 lg:py-14 bg-[#F0F0F2]">
      <div className="site-container">
        {/* Header */}
        <FadeUp>
        <div className="text-center mb-6">
          <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
            Onde Atuamos?
          </span>
          <h2 className="heading-lg font-display text-[#1C1C1E] mt-5 tracking-wide">
            Presença em 5 Estados
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto text-lg">
            Representante exclusivo STILL em PE, PB e AL. Também atendemos RN e SE com peças, locação e manutenção.
          </p>
        </div>
        </FadeUp>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-12 items-center">
          {/* Map image */}
          <FadeUp delay={0.1}>
          <div className="flex justify-center">
            <Image
              src="/images/mapa-home.png"
              alt="Mapa do Brasil — área de atuação Multylog"
              width={620}
              height={620}
              className="w-full max-w-[440px] lg:max-w-[560px] h-auto"
              quality={90}
            />
          </div>
          </FadeUp>

          {/* Info */}
          <FadeUp delay={0.2}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#CC0000]" />
              <span className="text-gray-600 text-sm">Estados atendidos pela Multylog</span>
            </div>

            <div className="space-y-1.5 mb-4">
              {COVERED.map((s, i) => (
                <FadeUp key={s.abbr} delay={0.25 + i * 0.07}>
                <div
                  key={s.abbr}
                  className="flex items-center justify-between bg-white border border-gray-200 hover:border-[#CC0000]/50 rounded-lg px-4 py-2 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-lg text-[#CC0000] tracking-wider w-9">
                      {s.abbr}
                    </span>
                    <div>
                      <p className="text-[#1C1C1E] font-medium text-sm leading-tight">{s.name}</p>
                      <p className="text-gray-500 text-xs">{s.city}</p>
                    </div>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                </div>
                </FadeUp>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Nossa sede em <span className="text-[#1C1C1E] font-medium">Recife (PE)</span> garante
                estoque próprio e logística ágil para atendimento rápido em toda a região.
              </p>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Vi%20o%20site%20da%20Multylog%20e%20gostaria%20de%20solicitar%20uma%20cotação.%20Pode%20me%20ajudar%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                Solicitar Cotação
              </a>
            </div>
          </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
