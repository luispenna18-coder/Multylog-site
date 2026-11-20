import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BatteryCharging, Clock, ShieldCheck, Truck, Wrench } from "lucide-react";
import { SITE } from "@/lib/constants";
import FadeUp from "@/components/FadeUp";
import Countdown from "./Countdown";

export const metadata: Metadata = {
  title: "MultyBlack — Black Friday de Empilhadeiras STILL | Multylog",
  description:
    "Black Friday Multylog: transpaleteiras, patoladas, retráteis e empilhadeiras STILL com preços promocionais até 30/11/2026 ou enquanto durarem os estoques.",
};

/** Fim da campanha (circulares STILL 077–084/2026): 30/11/2026, horário de Brasília */
const DEADLINE = "2026-11-30T23:59:59-03:00";

type Offer = {
  id: string; // id do produto em lib/products.ts
  name: string;
  category: string;
  tagline: string;
  image: string;
  specs: string[];
  badges?: string[];
  /** Preço em destaque */
  price: number;
  pricePrefix: string; // "A partir de", "10x de"…
  configs: { label: string; price: string }[];
  terms: string; // base de ICMS / FOB
  payment: string; // condição de pagamento, exibida abaixo do preço
};

const brl = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;

// Fonte: circulares comerciais STILL 077 a 084/2026 (válidas até 30/11/2026).
// Todos os preços na base de ICMS 12%.
const OFFERS: Offer[] = [
  {
    id: "ech-20",
    name: "ECH 20SC",
    category: "Transpaleteira elétrica",
    tagline: "Compacta, leve e com bateria de lítio. Parcelada direto com a fábrica.",
    image: "/images/machines/ech-20/principal.webp",
    specs: ["Li-Ion", "Operador a pé", "Acompanha 2 baterias"],
    badges: ["Pronta-entrega", "10x direto KION"],
    price: 10800,
    pricePrefix: "Por apenas",
    configs: [
      { label: "Preço da máquina", price: "R$ 10.800" },
      { label: "Sinal de 10% (na compra)", price: "R$ 1.080" },
      { label: "+ 9 parcelas (30 a 270 dias)", price: "9x R$ 1.080" },
    ],
    terms: "Base ICMS 12%",
    payment: "Em 10x de R$ 1.080 direto com a KION (sujeito a análise de crédito)",
  },
  {
    id: "exh-20",
    name: "EXH 20",
    category: "Transpaleteira elétrica",
    tagline: "2 toneladas para carga e descarga em ritmo intenso.",
    image: "/images/machines/exh-20/principal.webp",
    specs: ["2.000 kg", "Elétrica", "Operador a pé"],
    badges: ["Estoque limitado"],
    price: 27120,
    pricePrefix: "A partir de",
    configs: [
      { label: "Sem bateria e carregador", price: "R$ 27.120" },
      { label: "Bateria Li-Ion 175Ah + carregador 100A", price: "R$ 47.300" },
    ],
    terms: "Base ICMS 12% · Máquina padrão, sem acessórios adicionais",
    payment: "À vista",
  },
  {
    id: "exh-sf-20",
    name: "EXH-SF 20",
    category: "Transpaleteira com plataforma",
    tagline: "Operador a bordo para percorrer distâncias maiores sem fadiga.",
    image: "/images/machines/exh-sf-20/principal.webp",
    specs: ["2.000 kg", "Elétrica", "Plataforma rebatível"],
    badges: ["Estoque limitado"],
    price: 41320,
    pricePrefix: "A partir de",
    configs: [
      { label: "Sem bateria e carregador", price: "R$ 41.320" },
      { label: "Bateria Li-Ion 175Ah + carregador 100A", price: "R$ 61.500" },
    ],
    terms: "Base ICMS 12% · Máquina padrão, sem acessórios adicionais",
    payment: "À vista",
  },
  {
    id: "erx-27",
    name: "ERX 27",
    category: "Transpaleteira operador a bordo",
    tagline: "2,7 toneladas com plataforma fixa para docas e cross-docking.",
    image: "/images/machines/erx-27/principal.webp",
    specs: ["2.700 kg", "Garfos 1150/680 mm", "Elétrica"],
    badges: ["Em estoque"],
    price: 50000,
    pricePrefix: "A partir de",
    configs: [
      { label: "Apenas máquina", price: "R$ 50.000" },
      { label: "Com bateria de lítio 205Ah + carregador", price: "R$ 75.000" },
    ],
    terms: "Base ICMS 12% · FOB Indaiatuba/SP · Enquanto durarem os estoques",
    payment: "À vista",
  },
  {
    id: "egv-16-ng",
    name: "EGV 16 NG",
    category: "Empilhadeira patolada",
    tagline: "Empilhamento até 5,4 m em corredores compactos.",
    image: "/images/machines/egv-16-ng/principal.webp",
    specs: ["1.600 kg", "Mastro 5.466 mm", "Elétrica"],
    price: 54165,
    pricePrefix: "A partir de",
    configs: [
      { label: "Apenas máquina", price: "R$ 54.165" },
      { label: "Com bateria de lítio 205Ah + carregador", price: "R$ 78.210" },
      { label: "Com bateria de lítio 280Ah + carregador", price: "R$ 83.645" },
    ],
    terms: "Base ICMS 12% · FOB Indaiatuba/SP",
    payment: "À vista",
  },
  {
    id: "egv16-sf",
    name: "EGV 16 SF",
    category: "Patolada com plataforma",
    tagline: "Patolada com operador a bordo, já com bateria de lítio.",
    image: "/images/machines/egv16-sf/principal.webp",
    specs: ["1.600 kg", "Mastro 5.466 mm", "Lítio incluso"],
    price: 97000,
    pricePrefix: "A partir de",
    configs: [
      { label: "Com bateria de lítio 205Ah + carregador", price: "R$ 97.000" },
      { label: "Com bateria de lítio 270Ah + carregador", price: "R$ 99.000" },
    ],
    terms: "Base ICMS 12% · FOB Indaiatuba/SP",
    payment: "À vista",
  },
  {
    id: "rc-44-25c",
    name: "RC 44-25C",
    category: "Contrabalançada GLP",
    tagline: "2,5 toneladas a combustão para pátio e operação externa.",
    image: "/images/machines/rc-44-25c/principal.webp",
    specs: ["2.500 kg", "GLP", "Mastros de 4,2 a 6,4 m"],
    price: 121000,
    pricePrefix: "A partir de",
    configs: [
      { label: "Mastro 4.200 mm", price: "R$ 133.585" },
      { label: "Mastro 4.775 mm", price: "R$ 121.000" },
      { label: "Mastro 5.975 mm", price: "R$ 143.797" },
      { label: "Mastro 6.375 mm", price: "R$ 144.818" },
    ],
    terms: "Base ICMS 12% · Não acompanha cilindro de GLP · Conforme disponibilidade",
    payment: "À vista",
  },
  {
    id: "rce-20-25",
    name: "RCE 20 / RCE 25",
    category: "Contrabalançada elétrica",
    tagline: "Elétrica a lítio de 2 a 2,5 toneladas, com bateria e carregador.",
    image: "/images/machines/rce-20-25/principal.webp",
    specs: ["2.000 – 2.500 kg", "Lítio 280–300Ah", "Carregador 200A"],
    badges: ["Super campanha"],
    price: 152727,
    pricePrefix: "A partir de",
    configs: [
      { label: "RCE 25 · mastro 4.650 · lítio 280Ah (importada, 380V)", price: "R$ 152.727" },
      { label: "RCE 20 · mastro 4.650 · lítio 300Ah", price: "R$ 168.615" },
      { label: "RCE 25 · mastro 4.650 · lítio 300Ah", price: "R$ 173.865" },
      { label: "RCE 20 · mastro 6.500 · lítio 300Ah", price: "R$ 188.940" },
      { label: "RCE 25 · mastro 6.500 · lítio 300Ah", price: "R$ 194.015" },
    ],
    terms:
      "Base ICMS 12% · Nacional: FOB Indaiatuba/SP · Importada: FOB Varginha/MG, configuração fixa",
    payment: "À vista",
  },
  {
    id: "fmx-17-20",
    name: "FM-X 17",
    category: "Empilhadeira retrátil",
    tagline: "Combo completo: retrátil + bateria de lítio + carregador 250A.",
    image: "/images/machines/fmx-17-20/principal.webp",
    specs: ["1.700 kg", "Lítio 350 ou 525Ah", "Mastros até 11,6 m"],
    badges: ["Combo exclusivo"],
    price: 269570,
    pricePrefix: "A partir de",
    configs: [
      { label: "Lítio 350Ah · mastro até 8.900 mm", price: "R$ 269.570" },
      { label: "Lítio 350Ah · mastro 9.800 mm", price: "R$ 290.960" },
      { label: "Lítio 525Ah · mastro até 8.900 mm", price: "R$ 281.430" },
      { label: "Lítio 525Ah · mastro 9.800 mm", price: "R$ 302.825" },
      { label: "Lítio 525Ah · mastro 11.600 mm", price: "R$ 306.810" },
    ],
    terms:
      "Base ICMS 12% · Carregador 380V trifásico · Inclui faróis de trabalho, sinalizador e safety light",
    payment: "À vista",
  },
];

const BENEFITS = [
  { icon: ShieldCheck, title: "Representante oficial STILL", desc: "Equipamento novo, com garantia de fábrica." },
  { icon: Wrench, title: "Assistência em Recife", desc: "Técnicos treinados e peças genuínas em estoque." },
  { icon: BatteryCharging, title: "Combos com lítio", desc: "Máquina, bateria e carregador em um só preço." },
  { icon: Truck, title: "Entrega no Nordeste", desc: "Logística da fábrica até a sua operação." },
];

const CONDITIONS = [
  "Ofertas válidas até 30/11/2026 ou enquanto durarem os estoques, podendo ser encerradas sem aviso prévio.",
  "Preços para equipamentos novos, na configuração indicada, sem acessórios adicionais.",
  "Valores FOB (frete não incluso), com base de ICMS de 12%. O valor final pode variar conforme o estado de destino.",
  "Prazos de entrega conforme disponibilidade de fábrica.",
  "Parcelamento em 10x direto com a KION exclusivo para a ECH 20SC, sujeito a análise de crédito. Demais modelos: pagamento à vista.",
  "Imagens meramente ilustrativas.",
];

const wa = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export default function BlackFridayPage() {
  return (
    <>
      {/* ── CAPA (desktop/tablet): arte MultyBlack ── */}
      <section
        className="hidden sm:block relative w-full overflow-hidden bg-[#1C1C1E] mt-16 lg:mt-[4.5rem]"
        style={{ aspectRatio: "16/6" }}
      >
        <a href="#ofertas" aria-label="Ver ofertas MultyBlack" className="absolute inset-0 block">
          <Image
            src="/images/banner-multyblack-capa-v2.webp"
            alt="MultyBlack — Empilhadeiras STILL novas, 9 modelos em oferta a partir de R$ 10.800. Condições especiais por tempo limitado."
            fill
            className="object-cover"
            sizes="100vw"
            quality={90}
            priority
          />
        </a>
      </section>

      {/* ── HERO: texto no mobile; contagem + CTAs em todas as telas ── */}
      <section className="relative overflow-hidden bg-[#1C1C1E] mt-16 sm:mt-0">
        {/* brilhos vermelhos */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 70% at 100% 0%, rgba(204,0,0,0.38) 0%, rgba(204,0,0,0) 60%), radial-gradient(45% 60% at 0% 100%, rgba(204,0,0,0.22) 0%, rgba(204,0,0,0) 60%)",
          }}
        />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-[#CC0000] sm:hidden" />

        <div className="site-container relative py-14 sm:py-8">
          <div className="sm:hidden">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-0.5 bg-[#CC0000]" />
              <span className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest">
                Black Friday Multylog · até 30/11
              </span>
            </div>

            <h1 className="font-display leading-[0.9] tracking-wide text-white text-6xl mb-4">
              Multy<span className="text-[#CC0000]">Black</span>
            </h1>

            <p className="font-display text-2xl tracking-wide text-white/90 mb-4">
              Empilhadeiras STILL com preço de campanha
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Transpaleteiras, patoladas, retráteis e contrabalançadas novas, direto de fábrica,
              a partir de <strong className="text-white">R$ 10.800</strong>. Condições especiais por tempo limitado.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div>
              <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Clock size={14} /> As ofertas terminam em
              </p>
              <Countdown deadline={DEADLINE} />
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#ofertas"
                className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors group"
              >
                Ver ofertas
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={wa("Olá! Vi as ofertas MultyBlack no site da Multylog e gostaria de falar com um consultor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Falar com consultor
              </a>
            </div>
          </div>
        </div>

        {/* faixa de urgência */}
        <div className="relative bg-[#CC0000] text-white overflow-hidden">
          <div className="site-container flex flex-wrap items-center justify-center gap-x-8 gap-y-1 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            <span>9 modelos em oferta</span>
            <span aria-hidden className="hidden sm:inline">•</span>
            <span>Estoque limitado</span>
            <span aria-hidden className="hidden sm:inline">•</span>
            <span>Válido até 30/11/2026</span>
          </div>
        </div>
      </section>

      {/* ── OFERTAS ── */}
      <section id="ofertas" className="bg-[#1C1C1E] py-16 lg:py-24 scroll-mt-20">
        <div className="site-container">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-0.5 bg-[#CC0000]" />
              <span className="text-[#CC0000] text-xs sm:text-sm font-semibold uppercase tracking-widest">
                Ofertas MultyBlack
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl tracking-wide text-white">
              Todos os preços da campanha
            </h2>
            <p className="text-gray-400 text-lg mt-3 max-w-2xl">
              Escolha o equipamento e a configuração. O consultor confirma disponibilidade, frete e
              condição para o seu estado.
            </p>
          </FadeUp>

          {/* Cada card ocupa 6 linhas de um subgrid: imagem, título, specs, preço, configurações e CTA
              ficam na mesma altura em todos os cards da fileira. */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6">
            {OFFERS.map((o, i) => (
              <FadeUp
                key={o.id}
                delay={(i % 3) * 0.08}
                className="grid grid-rows-subgrid row-span-6 gap-y-0"
              >
                <article
                  id={o.id}
                  className="grid grid-rows-subgrid row-span-6 gap-y-0 bg-white rounded-xl border border-gray-100 hover:border-[#CC0000]/30 hover:shadow-md transition-all overflow-hidden scroll-mt-24"
                >
                  {/* 1 · Imagem */}
                  <div className="relative aspect-[4/3] bg-white border-b border-gray-100">
                    <Image
                      src={o.image}
                      alt={`STILL ${o.name}`}
                      fill
                      className="object-contain p-5"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 420px"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="bg-[#1C1C1E] text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
                        Multy<span className="text-[#CC0000]">Black</span>
                      </span>
                      {o.badges?.map((b) => (
                        <span
                          key={b}
                          className="bg-[#CC0000] text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 2 · Título */}
                  <div className="px-6 pt-6 pb-4">
                    <p className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest mb-1">
                      {o.category}
                    </p>
                    <h3 className="font-display text-3xl tracking-wide text-[#1C1C1E] leading-none mb-2">
                      STILL {o.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{o.tagline}</p>
                  </div>

                  {/* 3 · Specs */}
                  <ul className="flex flex-wrap content-start gap-1.5 px-6 pb-5">
                    {o.specs.map((s) => (
                      <li key={s} className="bg-[#F5F5F7] text-[#1C1C1E] text-xs font-medium px-2.5 py-1 rounded-full">
                        {s}
                      </li>
                    ))}
                  </ul>

                  {/* 4 · Preço */}
                  <div className="px-6 pb-4">
                    <div className="h-full bg-[#1C1C1E] rounded-xl px-5 py-4">
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">{o.pricePrefix}</p>
                      <p className="flex items-baseline gap-2 font-display text-5xl leading-none tracking-wide text-white mt-1 tabular-nums">
                        <span className="text-[#CC0000] text-3xl">R$</span>
                        {o.price.toLocaleString("pt-BR")}
                      </p>
                      <p className="text-white/70 text-xs mt-2">{o.payment}</p>
                    </div>
                  </div>

                  {/* 5 · Configurações */}
                  <div className="px-6 pb-5">
                    <ul className="divide-y divide-gray-100 text-sm mb-4">
                      {o.configs.map((c) => (
                        <li key={c.label} className="grid grid-cols-[1fr_auto] items-baseline gap-4 py-2">
                          <span className="text-gray-600">{c.label}</span>
                          <span className="font-semibold text-[#1C1C1E] whitespace-nowrap text-right tabular-nums min-w-[6.5rem]">
                            {c.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400 text-xs leading-relaxed">{o.terms}</p>
                  </div>

                  {/* 6 · CTA */}
                  <div className="flex flex-col gap-2 px-6 pb-6">
                    <a
                      href={wa(
                        `Olá! Vi a oferta MultyBlack da STILL ${o.name} (${o.pricePrefix.toLowerCase()} ${brl(o.price)}) no site e quero garantir essa condição.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors group"
                    >
                      Quero essa oferta
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <Link
                      href={`/maquinas/${o.id}`}
                      className="inline-flex items-center justify-center text-sm font-semibold text-gray-500 hover:text-[#CC0000] py-2 transition-colors"
                    >
                      Ver ficha técnica
                    </Link>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUE COMPRAR ── */}
      <section className="bg-[#F5F5F7] py-16 lg:py-24">
        <div className="site-container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-[#CC0000]" />
              <span className="text-[#CC0000] text-xs sm:text-sm font-semibold uppercase tracking-widest">
                Compra segura
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl tracking-wide text-[#1C1C1E]">
              Preço de Black Friday, suporte de sempre
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-7 border border-gray-100 hover:border-[#CC0000]/30 hover:shadow-md transition-all group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#CC0000]/10 group-hover:bg-[#CC0000] flex items-center justify-center mx-auto mb-5 transition-colors">
                  <Icon size={22} className="text-[#CC0000] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl text-[#1C1C1E] tracking-wide mb-2">{title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONDIÇÕES ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="site-container max-w-4xl">
          <div className="w-12 h-0.5 bg-[#CC0000] mb-5" />
          <h2 className="font-display text-4xl lg:text-5xl tracking-wide text-[#1C1C1E] mb-6">
            Condições da campanha
          </h2>
          <ul className="space-y-3">
            {CONDITIONS.map((c) => (
              <li key={c} className="flex gap-3 text-gray-600 leading-relaxed">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#CC0000] flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden bg-[#1C1C1E] py-16 lg:py-24">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "radial-gradient(50% 90% at 50% 100%, rgba(204,0,0,0.35) 0%, rgba(204,0,0,0) 65%)",
          }}
        />
        <div className="site-container relative text-center">
          <h2 className="font-display text-4xl lg:text-5xl tracking-wide text-white mb-4">
            O estoque é limitado. <span className="text-[#CC0000]">O prazo também.</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Fale agora com um consultor Multylog e garanta a sua máquina antes de 30/11.
          </p>
          <div className="flex justify-center mb-8">
            <Countdown deadline={DEADLINE} />
          </div>
          <a
            href={wa("Olá! Quero aproveitar as ofertas MultyBlack da Multylog. Pode me ajudar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
          >
            Garantir pelo WhatsApp
            <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  );
}
