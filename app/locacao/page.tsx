"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  ShieldCheck,
  DollarSign,
  Wrench,
  Sliders,
  TrendingUp,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import Steps from "@/components/Steps";
import { useState } from "react";
import { SITE } from "@/lib/constants";

const BENEFITS = [
  {
    icon: Truck,
    title: "Entrega Rápida no Nordeste",
    body: "Cobertura em Pernambuco, Paraíba e Alagoas com estoque próprio. Logística ágil para Recife e região metropolitana. Suas operações não param esperando por equipamento.",
  },
  {
    icon: ShieldCheck,
    title: "Operação Sem Preocupações",
    body: "Em caso de quebra ou manutenção, realizamos substituição do equipamento. Assistência técnica especializada sempre disponível para manter sua operação funcionando.",
  },
  {
    icon: DollarSign,
    title: "Investimento Previsível",
    body: "Valor mensal fixo que inclui manutenção preventiva e corretiva, peças de reposição e suporte técnico. Você planeja seus custos com precisão, sem imprevistos.",
  },
  {
    icon: Wrench,
    title: "Assistência Técnica Especializada",
    body: "Técnicos certificados e treinados diretamente pela STILL. Peças genuínas disponíveis. Atendimento prioritário para clientes de locação em toda nossa área de cobertura.",
  },
  {
    icon: Sliders,
    title: "Flexibilidade Operacional",
    body: "Ajuste a quantidade de equipamentos conforme picos sazonais ou mudanças na operação. Contratos flexíveis que acompanham as necessidades da sua empresa, sem amarras.",
  },
  {
    icon: TrendingUp,
    title: "Otimização Financeira",
    body: "Despesa operacional dedutível. Não imobiliza recursos que podem ser investidos no core business. Acesso a equipamentos de última geração sem comprometer seu caixa.",
  },
];

const BASE = "https://tudoedesign.com.br/wp-content/uploads/2026/01";

const EQUIPMENT = [
  { name: "Empilhadeira Contrabalançada", image: `${BASE}/RCE_20_25.webp`, href: "/maquinas?categoria=contrabalancada", brands: ["STILL", "Baoli", "Linde"] },
  { name: "Retrátil", image: `${BASE}/FM-X_17-20.webp`, href: "/maquinas?categoria=retratil", brands: ["STILL"] },
  { name: "Patolada", image: `${BASE}/EGV_16_NG.png.webp`, href: "/maquinas?categoria=patolada", brands: ["STILL"] },
  { name: "Transpaleteira", image: `${BASE}/ERX_27.png.webp`, href: "/maquinas?categoria=transpaleteira", brands: ["STILL"] },
  { name: "Plataforma Elevatória", image: "https://www.skyjack.com/sites/default/files/styles/cms_bootstrap_12_12/public/2024-02/spec_sj3213micro-c.jpg?itok=406PauLx", href: "/maquinas", brands: ["Skyjack"] },
];

const COMPARISON = [
  { label: "PRESERVAÇÃO DE CAIXA",            compra: 5,  locacao: 95  },
  { label: "PREVISIBILIDADE DE CUSTOS",        compra: 40, locacao: 100 },
  { label: "DISPONIBILIDADE DA FROTA (UPTIME)", compra: 70, locacao: 98  },
  { label: "EFICIÊNCIA FISCAL (IRPJ / CSLL)",  compra: 30, locacao: 90  },
  { label: "TECNOLOGIA E PERFORMANCE",         compra: 50, locacao: 90  },
  { label: "FOCO NO CORE BUSINESS",            compra: 20, locacao: 95  },
  { label: "RISCO DE ATIVO (REVENDA)",         compra: 10, locacao: 100 },
];

const container = "max-w-7xl mx-auto px-4 sm:px-8 lg:px-12";

export default function LocacaoPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "clamp(480px, 68vh, 820px)" }}>
        <Image
          src="/images/locacao-banner.jpg"
          alt="Empilhadeiras STILL no galpão"
          fill
          className="object-cover object-right"
          priority
          sizes="100vw"
          quality={90}
        />

        <div className="relative z-10 h-full flex items-center">
          <div className={`${container} w-full`}>
            <div style={{ maxWidth: "clamp(320px, 40vw, 600px)" }}>
              <h1
                className="font-display text-white tracking-wide leading-none mb-8"
                style={{
                  fontSize: "clamp(2.6rem, 5vw, 5.2rem)",
                  textShadow: "0 2px 24px rgba(0,0,0,0.65), 0 0 60px rgba(0,0,0,0.35)",
                }}
              >
                NÓS ENTENDEMOS<br />DO SEU NEGÓCIO
              </h1>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Quero%20solicitar%20uma%20cotação%20de%20locação.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 transition-colors"
                >
                  Solicitar Cotação
                </a>
                <Link
                  href="/maquinas"
                  className="inline-flex items-center gap-2 border border-white/70 hover:border-white text-white font-semibold px-7 py-3.5 transition-colors"
                >
                  Ver Equipamentos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vantagens ────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={container}>
          <h2
            className="font-display text-[#1C1C1E] tracking-wide mb-12"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
          >
            VANTAGENS DA LOCAÇÃO
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map(({ icon: Icon, title, body }) => {
              const isActive = active === title;
              return (
                <button
                  key={title}
                  onClick={() => setActive(isActive ? null : title)}
                  className={`flex flex-col gap-4 p-8 rounded-xl border text-left transition-all duration-200 cursor-pointer
                    ${isActive
                      ? "bg-[#CC0000] border-[#CC0000] shadow-lg scale-[1.02]"
                      : "bg-[#F5F5F7] border-gray-200 hover:border-[#CC0000]/40 hover:shadow-md"
                    }`}
                >
                  <Icon size={40} strokeWidth={1.25} className={isActive ? "text-white" : "text-[#CC0000]"} />
                  <div>
                    <h3 className={`font-sans font-bold text-base leading-snug mb-2 ${isActive ? "text-white" : "text-[#1C1C1E]"}`}>
                      {title}
                    </h3>
                    <p className={`font-sans text-sm leading-relaxed ${isActive ? "text-white/90" : "text-[#3D3D3D]"}`}>
                      {body}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3 mt-12">
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Quero%20solicitar%20uma%20cotação%20de%20locação.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 transition-colors"
            >
              Solicitar Cotação
            </a>
            <Link
              href="/maquinas"
              className="inline-flex items-center gap-2 border border-gray-400 hover:border-gray-700 text-[#1C1C1E] font-semibold px-7 py-3.5 transition-colors"
            >
              Ver Equipamentos
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tabela Comparativa ───────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F5F5F7]">
        <div className={container}>

          {/* Cabeçalho */}
          <div className="text-center mb-2">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-[#CC0000]" />
              <span className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest">Tabela Comparativa</span>
              <span className="w-6 h-0.5 bg-[#CC0000]" />
            </div>
            <h2
              className="font-display text-[#1C1C1E] tracking-wide leading-none"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}
            >
              LOCAÇÃO X COMPRA
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Abaixo você conseguirá ver de forma clara as principais vantagens da locação em comparação com a compra de um equipamento.
            </p>
          </div>

          <p className="text-center text-[11px] font-semibold text-[#1C1C1E] uppercase tracking-widest mt-8 mb-10">
            Custo total de propriedade — Ciclo de 3 anos (36 meses)
          </p>

          {/* VS — desktop */}
          <div className="hidden sm:grid grid-cols-[1fr_140px_1fr] items-center gap-6 mb-10">
            <div className="text-right">
              <h3
                className="font-display text-[#1C1C1E] tracking-wide leading-tight"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.4rem)" }}
              >
                COMPRA DE<br />EQUIPAMENTO
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-snug">
                Imobiliza capital e gera custos ocultos<br />com manutenção e depreciação.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#CC0000] flex items-center justify-center">
                <Truck size={26} className="text-white" />
              </div>
              <span className="font-display text-[#1C1C1E] text-2xl tracking-widest">VS</span>
              <div className="w-14 h-14 rounded-full bg-[#1C1C1E] flex items-center justify-center border-2 border-gray-600">
                <Truck size={26} className="text-white" />
              </div>
            </div>

            <div>
              <h3
                className="font-display text-[#CC0000] tracking-wide leading-tight"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.4rem)" }}
              >
                LOCAÇÃO<br />DE FROTA
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-snug">
                Custos fixos, manutenção inclusa, alta<br />disponibilidade e vantagens fiscais.
              </p>
            </div>
          </div>

          {/* VS — mobile */}
          <div className="sm:hidden flex items-center justify-around mb-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#CC0000] flex items-center justify-center mx-auto mb-2">
                <Truck size={22} className="text-white" />
              </div>
              <h3 className="font-display text-[#1C1C1E] text-xl tracking-wide leading-tight">COMPRA</h3>
            </div>
            <span className="font-display text-[#1C1C1E] text-3xl tracking-widest">VS</span>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#1C1C1E] flex items-center justify-center mx-auto mb-2 border-2 border-gray-600">
                <Truck size={22} className="text-white" />
              </div>
              <h3 className="font-display text-[#CC0000] text-xl tracking-wide leading-tight">LOCAÇÃO</h3>
            </div>
          </div>

          {/* Linhas de comparação */}
          <div className="flex flex-col gap-2.5">
            {COMPARISON.map(({ label, compra, locacao }) => (
              <div
                key={label}
                className="grid grid-cols-[1fr_auto_1fr] sm:grid-cols-[1fr_180px_1fr] items-center gap-3 sm:gap-5"
              >
                {/* Barra esquerda — compra (vermelho cresce da direita) */}
                <div className="relative h-10 bg-[#E5E5E7] rounded-full overflow-hidden">
                  <div
                    className="absolute right-0 top-0 h-full bg-[#CC0000] rounded-full flex items-center justify-end pr-3"
                    style={{ width: `max(${compra}%, 3.5rem)` }}
                  >
                    <span className="text-white font-bold text-sm leading-none">{compra}%</span>
                  </div>
                </div>

                {/* Label central */}
                <div className="text-center px-1">
                  <span className="block text-[#1C1C1E] font-bold text-[9px] sm:text-[10px] uppercase tracking-wide leading-tight">
                    {label}
                  </span>
                </div>

                {/* Barra direita — locação (escuro cresce da esquerda) */}
                <div className="relative h-10 bg-[#E5E5E7] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#1C1C1E] rounded-full flex items-center pl-3"
                    style={{ width: `${locacao}%` }}
                  >
                    <span className="text-white font-bold text-sm leading-none">{locacao}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumo TCO */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12 pt-10 border-t border-gray-300">
            <div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#1C1C1E] mb-3">
                Resumo do Custo Total (TCO) Compra:
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Os custos reais de peças, máquinas paradas e desvalorização costumam superar o orçamento em até 40%.
              </p>
            </div>
            <div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#CC0000] mb-3">
                Resumo do Custo Total (TCO) Locação:
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Com um custo fixo e otimizado, geralmente é 15% a 25% mais barato alugar do que manter uma frota própria antiga.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Banner intermediário ──────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "clamp(240px, 32vw, 460px)" }}>
        <Image
          src="/images/locacao-galpao-09.jpg"
          alt="Empilhadeira em operação no galpão"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(28,28,30,0.82) 0%, rgba(28,28,30,0.55) 40%, rgba(28,28,30,0.10) 70%, rgba(28,28,30,0) 100%)" }} />
        <div className="relative z-10 h-full flex items-center">
          <div className={`${container} w-full`}>
            <h2
              className="font-display text-white tracking-wide leading-tight mb-8"
              style={{ fontSize: "clamp(1.8rem, 3.8vw, 4rem)" }}
            >
              COM A LOCAÇÃO<br />SEU NEGÓCIO<br />NUNCA PARA
            </h2>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Quero%20solicitar%20uma%20cotação%20de%20locação.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-white text-white text-sm font-semibold uppercase tracking-widest px-7 py-3 hover:bg-white hover:text-[#1C1C1E] transition-colors"
            >
              Solicite sua cotação
            </a>
          </div>
        </div>
      </section>

      {/* ── Equipamentos ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={container}>
          <div className="text-center mb-12">
            <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
              Frota Disponível
            </span>
            <h2
              className="font-display text-[#1C1C1E] mt-2 tracking-wide"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              EQUIPAMENTOS PARA LOCAÇÃO
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Clique no equipamento para ver as especificações técnicas completas.
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            {EQUIPMENT.map((eq) => (
              <Link
                key={eq.name}
                href={eq.href}
                className="group shrink-0 w-52 bg-[#F5F5F7] rounded-xl overflow-hidden border border-gray-100 hover:border-[#CC0000]/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-square bg-white relative">
                  <Image
                    src={eq.image}
                    alt={eq.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform"
                    sizes="208px"
                  />
                </div>
                <div className="p-4 pb-5">
                  <p className="text-[#1C1C1E] font-bold text-sm leading-tight mb-3">{eq.name}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {eq.brands.map((brand) => (
                      <span
                        key={brand}
                        className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 border border-gray-200 rounded-full px-2.5 py-1 bg-white"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cotação ──────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F7] py-16 lg:py-24">
        <div className={container}>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-0.5 bg-[#CC0000]" />
                <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
                  Solicite sua cotação
                </span>
              </div>
              <h2
                className="font-display text-[#1C1C1E] tracking-wide leading-none mb-5"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3.2rem)" }}
              >
                PROPOSTA PERSONALIZADA EM ATÉ 24H
              </h2>
              <div className="w-12 h-0.5 bg-[#CC0000] mb-6" />
              <Steps />
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Quero%20uma%20cotação%20de%20locação%20de%20empilhadeiras.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
              >
                Ou fale pelo WhatsApp
              </a>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
