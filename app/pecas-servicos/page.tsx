import type { Metadata } from "next";
import Image from "next/image";
import { Package, Wrench, ShieldCheck, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";
import ServiceForm from "@/components/ServiceForm";

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

const PARTS = [
  { src: "/images/pecas/garfos.png",            label: "Garfos" },
  { src: "/images/pecas/rodas.png",             label: "Rodas e Pneus" },
  { src: "/images/pecas/filtros.png",           label: "Filtros" },
  { src: "/images/pecas/assentos.png",          label: "Assentos" },
  { src: "/images/pecas/placas-eletronicas.png",label: "Placas Eletrônicas" },
  { src: "/images/pecas/kit-manutencao.png",    label: "Kits de Manutenção" },
];


export default function PecasServicosPage() {
  return (
    <>
      <section className="relative w-full overflow-hidden mt-16 lg:mt-[4.5rem] aspect-[4/3] md:aspect-auto md:h-[clamp(400px,52vh,600px)]">
        <Image
          src="/images/pecas-servicos-banner.jpg"
          alt="Técnico Multylog realizando manutenção"
          fill
          className="object-cover object-center md:object-[center_40%]"
          priority
          sizes="100vw"
          quality={95}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,18,30,0.62)" }} />
        <div className="site-container relative h-full flex items-end pb-12 lg:pb-16">
          <div>
            <h1 className="font-display text-white tracking-wide leading-none" style={{ fontSize: "clamp(2.6rem, 4.5vw, 5.2rem)" }}>
              Peças e Serviços
            </h1>
            <div className="w-12 h-0.5 bg-[#CC0000] mt-4" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-[#F5F5F7]">
        <div className="site-container">
          <h2 className="heading-lg font-display text-[#1C1C1E] tracking-wide mb-10">
            Nossos Serviços
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-7 border border-gray-100 hover:border-[#CC0000]/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#CC0000]/10 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#CC0000]" />
                </div>
                <h3 className="font-display text-2xl text-[#1C1C1E] tracking-wide mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galeria de Peças ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="site-container">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#CC0000]" />
            <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
              Estoque Próprio
            </span>
          </div>
          <h2 className="font-display text-[#1C1C1E] tracking-wide mb-10" style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
            Peças Genuínas em Estoque
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTS.map(({ src, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-full aspect-square bg-[#F5F5F7] rounded-xl overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src={src}
                    alt={label}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                    quality={90}
                  />
                </div>
                <span className="text-sm font-medium text-[#1C1C1E] text-center leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multibrand */}
      <section className="section-py bg-[#F5F5F7]">
        <div className="site-container">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
              <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
                Não Apenas STILL
              </span>
              <h2 className="heading-lg font-display text-[#1C1C1E] tracking-wide mt-2 mb-5">
                Atendimento Multimarca
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Nossa equipe técnica está preparada para atender empilhadeiras de diversas marcas.
                Se você já tem equipamentos de outro fabricante, também podemos cuidar da
                manutenção e fornecer as peças necessárias.
              </p>
              <Image
                src="/images/logos-marcas.png"
                alt="Marcas atendidas: STILL, Linde, Toyota, Hyster, Yale, Crown, Baoli, Mitsubishi"
                width={760}
                height={48}
                className="w-full h-20 object-contain object-left -ml-1"
                quality={90}
              />
            </div>
            <div className="bg-[#1C1C1E] rounded-2xl p-8 text-center">
              <h3 className="font-display text-3xl text-white tracking-wide mb-3">
                Solicitar Atendimento
              </h3>
              <p className="text-gray-400 mb-6">Descreva o problema e nossa equipe entra em contato.</p>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Preciso%20de%20assistência%20técnica%20para%20minha%20empilhadeira.%20Pode%20me%20ajudar%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors w-full text-center"
              >
                Solicitar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Atendimento ── */}
      <section className="bg-[#F5F5F7] py-16 lg:py-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-0.5 bg-[#CC0000]" />
                <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
                  Solicite atendimento
                </span>
              </div>
              <h2
                className="font-display font-normal text-[#1C1C1E] tracking-wide leading-none mb-5"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3.2rem)" }}
              >
                Abra um Chamado Técnico
              </h2>
              <div className="w-12 h-0.5 bg-[#CC0000] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Preencha o formulário e nossa equipe técnica entra em contato para agendar o atendimento.
              </p>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Preciso%20de%20assistência%20técnica%20para%20minha%20empilhadeira.%20Pode%20me%20ajudar%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Ou fale pelo WhatsApp
              </a>
            </div>
            <ServiceForm />
          </div>
        </div>
      </section>
    </>
  );
}
