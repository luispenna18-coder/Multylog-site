"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  badge?: string;
  headline: string;
  headlineAccent?: string;
  services?: { label: string; desc: string; href: string; bg?: string }[];
  subheadline: string;
  cta1: { label: string; href: string };
  cta2?: { label: string; href: string };
  overlay?: string;
  accentColor?: string;
  objectPosition?: string;
  textPadding?: string;
  textCenter?: boolean;
  textDark?: boolean;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: "/images/banner-still-03.jpg",
    headline: "SUA OPERAÇÃO\nNÃO PODE PARAR",
    services: [
      { label: "Locação",          desc: "", href: "/locacao",         bg: "#1a1a1a" },
      { label: "Venda",            desc: "", href: "/novos-seminovos", bg: "#222222" },
      { label: "Peças & Serviços", desc: "", href: "/pecas-servicos",  bg: "#1a1a1a" },
    ],
    subheadline: "",
    cta1: { label: "Solicitar Cotação", href: "/locacao" },
    cta2: { label: "Ver Equipamentos", href: "/maquinas" },
    overlay: "linear-gradient(to top, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.0) 38%), linear-gradient(to right, rgba(5,5,7,0.72) 0%, rgba(5,5,7,0.68) 44%, rgba(5,5,7,0.40) 58%, rgba(5,5,7,0.0) 72%)",
    objectPosition: "60% 10%",
    textPadding: "",
    accentColor: "#CC0000",
  },
  {
    id: 3,
    image: "/images/banner-multylog-02.jpg",
    headline: "4 SOLUÇÕES PARA\nSUA OPERAÇÃO",
    subheadline: "Locação · Venda · Peças · Serviços —\nTudo em um só lugar, com a qualidade Multylog.",
    cta1: { label: "Solicitar Cotação", href: "/locacao" },
    cta2: { label: "Conheça a Multylog", href: "/sobre" },
    accentColor: "#CC0000",
    textCenter: true,
    textDark: true,
  },
  {
    id: 4,
    image: "/images/team-galpao.jpg",
    headline: "SUPORTE ONDE\nVOCÊ PRECISAR",
    subheadline: "Técnicos certificados STILL com atendimento rápido e peças originais sempre disponíveis.",
    cta1: { label: "Peças & Serviços", href: "/pecas-servicos" },
    cta2: { label: "Fale Conosco", href: "/sobre" },
    overlay: "linear-gradient(to right, rgba(28,28,30,0.70) 38%, rgba(28,28,30,0.40) 62%, rgba(28,28,30,0.10) 100%)",
    accentColor: "#CC0000",
  },
];

const INTERVAL = 4000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const dragStart = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 800);
    },
    [animating]
  );

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  const handleDragStart = (x: number) => { dragStart.current = x; };
  const handleDragEnd = (x: number) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - x;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStart.current = null;
  };

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#1C1C1E] cursor-grab active:cursor-grabbing"
      style={{ height: "clamp(520px, 72vh, 840px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); dragStart.current = null; }}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseUp={(e) => handleDragEnd(e.clientX)}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
    >
      {/* Banner image */}
      <div className="absolute inset-0">
        <Image
          key={slide.id}
          src={slide.image}
          alt={slide.headline.replace("\n", " ")}
          fill
          className="object-cover hero-slide-enter" style={{ objectPosition: slide.objectPosition ?? "center center" }}
          priority={slide.id === 1}
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
          quality={90}
        />
        <div className="absolute inset-0" style={{ background: slide.overlay ?? undefined }} />
      </div>

      {/* Linha vermelha decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#CC0000] z-10" />

      {/* Content */}
      <div className={`site-container relative h-full flex items-center ${slide.textCenter ? "justify-center" : ""}`}>
        <div key={`text-${current}`} className={`hero-slide-enter w-full max-w-[600px] pt-16 ${slide.textCenter ? "text-center" : ""}`}>

          {/* Badge */}
          {slide.badge && (
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-0.5 bg-[#CC0000]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#CC0000]">
                {slide.badge}
              </span>
            </div>
          )}

          {/* Headline */}
          <h1
            className={`font-display leading-none tracking-wide whitespace-pre-line mb-5 ${slide.textDark ? "text-[#1C1C1E]" : "text-white"}`}
            style={{ fontSize: "clamp(2.4rem, 4vw, 5rem)" }}
          >
            {slide.headline}
          </h1>

          {/* Divisor */}
          <div className={`w-12 h-0.5 bg-[#CC0000] mb-5 ${slide.textCenter ? "mx-auto" : ""}`} />

          {/* Subheadline */}
          {slide.subheadline && (
            <p className={`text-lg sm:text-xl max-w-md mb-8 leading-relaxed whitespace-pre-line ${slide.textDark ? "text-gray-600" : "text-gray-300"} ${slide.textCenter ? "mx-auto" : ""}`}>
              {slide.subheadline.split("Multylog").map((part, i, arr) =>
                i < arr.length - 1
                  ? <span key={i}>{part}<span className="text-[#CC0000]">Multylog</span></span>
                  : <span key={i}>{part}</span>
              )}
            </p>
          )}

          {/* Serviços em destaque + CTAs alinhados */}
          <div style={{ width: "fit-content" }} className={slide.textCenter ? "mx-auto" : ""}>
          {slide.services && !slide.textDark && (
            <div className="flex w-full mb-8 border border-white/20">
              {slide.services.map((s, i) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className={`group relative flex-1 flex items-center justify-center py-4 px-4 overflow-hidden transition-all duration-300 hover:bg-[#CC0000]/20 border-b-2 border-b-transparent hover:border-b-[#CC0000] ${i > 0 ? "border-l border-white/20" : ""}`}
                >
                  <span className="text-white font-black text-sm sm:text-base lg:text-lg uppercase tracking-wider text-center transition-all duration-300 group-hover:tracking-[0.12em]">
                    {s.label}
                  </span>
                </Link>
              ))}
            </div>
          )}
          {slide.services && slide.textDark && (
            <div className="flex w-full mb-8 border border-gray-300">
              {slide.services.map((s, i) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className={`group flex-1 flex items-center justify-center py-4 px-4 transition-all duration-300 hover:bg-gray-100 ${i > 0 ? "border-l border-gray-300" : ""}`}
                >
                  <span className="font-semibold text-sm sm:text-base uppercase tracking-wider text-center text-gray-600 group-hover:text-[#1C1C1E] transition-colors duration-300">
                    {s.label}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className={`flex w-full border ${slide.textDark ? "border-gray-300" : "border-white/20"}`}>
            <Link
              href={slide.cta1.href}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-4 transition-all group"
            >
              {slide.cta1.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            {slide.cta2 && (
              <Link
                href={slide.cta2.href}
                className={`flex-1 inline-flex items-center justify-center gap-2 font-semibold px-7 py-4 transition-all ${slide.textDark ? "border-l border-gray-300 text-gray-600 hover:text-[#1C1C1E] hover:bg-gray-100" : "border-l border-white/20 text-white hover:bg-white/8"}`}
              >
                {slide.cta2.label}
              </Link>
            )}
          </div>
          </div>
        </div>
      </div>


    </section>
  );
}
