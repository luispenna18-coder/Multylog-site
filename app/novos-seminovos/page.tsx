import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Wrench, TrendingUp, Clock } from "lucide-react";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vendas | Multylog Empilhadeiras",
  description: "Compre empilhadeiras STILL novas e seminovos revisados no Nordeste. Representante autorizado com garantia e suporte técnico.",
};

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Garantia de Fábrica",
    desc: "Equipamentos novos com garantia oficial STILL e suporte técnico certificado.",
  },
  {
    icon: Wrench,
    title: "Assistência Técnica Inclusa",
    desc: "Técnicos treinados pela STILL em Recife. Peças genuínas em estoque.",
  },
  {
    icon: TrendingUp,
    title: "Patrimônio para sua Empresa",
    desc: "Invista em ativo próprio. Equipamentos STILL têm alta durabilidade e valor residual.",
  },
  {
    icon: Clock,
    title: "Entrega Rápida no Nordeste",
    desc: "Estoque próprio em Recife. Logística ágil para PE, PB e AL.",
  },
];

const EQUIPMENT = [
  { name: "Empilhadeira Contrabalançada", image: "https://data.still.de/assets/products/Vehicles/Electric_Forklift_Trucks/RCE_25_35/images/STILL_Fahrzeuge_Elektro-Stapler_RCE_25-35_Teaser_800x800.png?w=1920&fit=max&fm=webp&s=32f2da67ef189857a69d1eb39a8dacb5", href: "/maquinas#rce-20-25", model: "RCE 20-25" },
  { name: "Retrátil",                     image: "https://data.still.de/assets/products/Vehicles/Reach_Trucks/FM-X_17_20/images/STILL_BR_Product_FMX_800x800.png?w=1920&fit=max&fm=webp&s=6513f7ed80c85c9271e14debcc88ebc9",                                                                                                                                        href: "/maquinas#fmx-17-20",        model: "FM-X 17/20" },
  { name: "Patolada",                     image: "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EGV_16_NG/images/STILL_BR_Product_EGV_16_NG_Teaser_800x800.png?w=1920&fit=max&fm=webp&s=05dc690f6630fd829385495365cfd625",                                                                                                                  href: "/maquinas#egv-16-ng",        model: "EGV 16 NG" },
  { name: "Transpaleteira",               image: "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/images/STILL_BR_Product_ERX_800x800.png?w=1920&fit=max&fm=webp&s=2ca63156be30408f55377cf493f968cf",                                                                        href: "/maquinas#erx-27", model: "ERX 27" },
];

export default function NovosESeminovosPage() {
  return (
    <>
      {/* ── HERO — Banner STILL ── */}
      <section className="bg-white pt-20">
        <div className="grid lg:grid-cols-[2fr_3fr] min-h-[480px]">
          {/* Left */}
          <div className="flex flex-col justify-center px-4 sm:px-10 lg:px-20 py-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#CC0000] mb-4">
              Representante Oficial STILL no Nordeste
            </p>
            <h1 className="heading-xl font-display text-[#1C1C1E] tracking-wide mb-4 leading-tight">
              Vendas
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-sm">
              Equipamentos novos e revisados com garantia e suporte técnico no Nordeste.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Quero%20solicitar%20uma%20cotação%20de%20compra%20de%20equipamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
              >
                Solicitar Cotação
              </a>
              <Link
                href="/maquinas"
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#CC0000] text-gray-600 hover:text-[#CC0000] font-semibold px-8 py-3.5 rounded-xl transition-colors"
              >
                Ver Catálogo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          {/* Right — STILL banner */}
          <div className="relative min-h-[320px]">
            <Image
              src="/images/banner-still-forca.jpg"
              alt="Do seu jeito, com a nossa força — STILL"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section-py bg-[#F5F5F7]">
        <div className="site-container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-[#CC0000]" />
              <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
                Vantagens
              </span>
            </div>
            <h2 className="heading-lg font-display text-[#1C1C1E] tracking-wide">
              Por que Comprar com a Multylog?
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-lg">
              Seja equipamento novo ou seminovo revisado, você tem a segurança de comprar do representante oficial STILL no Nordeste.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#CC0000]/30 hover:shadow-md transition-all group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#CC0000]/10 group-hover:bg-[#CC0000] flex items-center justify-center mx-auto mb-5 transition-colors">
                  <Icon size={22} className="text-[#CC0000] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl text-[#1C1C1E] tracking-wide mb-3">{title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment ── */}
      <section className="section-py bg-white">
        <div className="site-container">
          <div className="text-center mb-12">
            <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
              Modelos Disponíveis
            </span>
            <h2 className="heading-lg font-display text-[#1C1C1E] mt-2 tracking-wide">
              Nossa Linha STILL
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-lg">
              Clique no equipamento para ver as especificações técnicas completas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {EQUIPMENT.map((eq) => (
              <Link
                key={eq.name}
                href={eq.href}
                className="group w-64 bg-[#F5F5F7] rounded-xl overflow-hidden border border-gray-100 hover:border-[#CC0000]/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-square bg-white relative">
                  <Image
                    src={eq.image}
                    alt={eq.model}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[#1C1C1E] font-semibold text-xl">{eq.name}</p>
                  <div className="flex items-center gap-1 mt-2 text-[#CC0000] text-xs font-semibold">
                    Ver specs <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* Mobile */}
      <section className="sm:hidden relative w-full overflow-hidden" style={{ minHeight: "320px" }}>
        <Image
          src="/images/pronto-investir-novo.png"
          alt="Pronto para Investir?"
          fill
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.3) 100%)" }} />
        <div className="absolute inset-0 flex items-center px-6 py-14">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-white tracking-wide leading-none text-4xl">
              Pronto para Investir?
            </h2>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Quero%20uma%20cotação%20de%20compra%20de%20empilhadeira.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base self-start"
            >
              Solicitar Cotação via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden sm:block relative w-full overflow-hidden">
        <Image
          src="/images/pronto-investir-novo.png"
          alt="Pronto para Investir?"
          width={1440}
          height={600}
          className="w-full h-auto block"
          quality={95}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 38%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0) 72%)" }} />
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-8 sm:px-12 lg:px-20 flex flex-col items-start gap-6" style={{ maxWidth: "38%" }}>
            <h2 className="font-display text-white tracking-wide leading-none whitespace-nowrap" style={{ fontSize: "clamp(2rem, 3.8vw, 4.5rem)" }}>
              Pronto para Investir?
            </h2>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Quero%20uma%20cotação%20de%20compra%20de%20empilhadeira.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Solicitar Cotação via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
