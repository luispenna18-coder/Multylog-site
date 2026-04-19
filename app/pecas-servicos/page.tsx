import type { Metadata } from "next";
import Link from "next/link";
import { Package, Wrench, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Peças e Serviços | Multipeças — Multylog",
  description: "Peças genuínas STILL e manutenção especializada em PE, PB e AL. Técnicos certificados e estoque próprio em Recife.",
};

const SERVICES = [
  { icon: Wrench, title: "Manutenção Preventiva", desc: "Plano regular de manutenção conforme cronograma do fabricante, garantindo a vida útil do equipamento." },
  { icon: ShieldCheck, title: "Manutenção Corretiva", desc: "Atendimento de emergência com técnicos certificados. Em caso de parada, agimos rápido para minimizar o impacto na sua operação." },
  { icon: Package, title: "Peças Originais STILL", desc: "Estoque próprio de peças genuínas STILL em Recife. Reposição rápida para todos os modelos da linha." },
  { icon: Clock, title: "Atendimento Prioritário", desc: "Clientes de locação têm prioridade no atendimento técnico. SLA definido em contrato." },
];

const BRANDS = ["STILL", "Linde", "Toyota", "Hyster", "Yale", "Crown", "Baoli", "Mitsubishi"];

export default function PecasServicosPage() {
  return (
    <>
      <section className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="site-container">
          <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
            Multipeças
          </span>
          <h1 className="heading-xl font-display text-white mt-3 mb-4 tracking-wide">
            PEÇAS E SERVIÇOS
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Manutenção especializada e peças originais STILL — para que sua operação nunca pare.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-[#F5F5F7]">
        <div className="site-container">
          <h2 className="heading-lg font-display text-[#1C1C1E] tracking-wide mb-10">
            NOSSOS SERVIÇOS
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-7 border border-gray-100 hover:border-[#CC0000]/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#CC0000]/10 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#CC0000]" />
                </div>
                <h3 className="font-display text-2xl text-[#1C1C1E] tracking-wide mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multibrand */}
      <section className="section-py bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
                Atendimento Multimarca
              </span>
              <h2 className="heading-lg font-display text-[#1C1C1E] tracking-wide mt-2 mb-5">
                NÃO APENAS STILL
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nossa equipe técnica está preparada para atender empilhadeiras de diversas marcas.
                Se você já tem equipamentos de outro fabricante, também podemos cuidar da
                manutenção e fornecer as peças necessárias.
              </p>
              <div className="flex flex-wrap gap-2">
                {BRANDS.map((brand) => (
                  <span
                    key={brand}
                    className={`px-3 py-1.5 rounded text-sm font-semibold ${
                      brand === "STILL"
                        ? "bg-[#CC0000] text-white"
                        : "bg-[#F5F5F7] text-gray-700"
                    }`}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#1C1C1E] rounded-2xl p-8 text-center">
              <h3 className="font-display text-3xl text-white tracking-wide mb-3">
                SOLICITAR ATENDIMENTO
              </h3>
              <p className="text-gray-400 mb-6">Descreva o problema e nossa equipe entra em contato.</p>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Preciso%20de%20assistência%20técnica.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 rounded transition-colors mb-3 w-full text-center"
              >
                Via WhatsApp
              </a>
              <a
                href="mailto:comercial@multylog.com.br"
                className="inline-block border border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold px-7 py-3.5 rounded transition-colors w-full text-center"
              >
                Via E-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
