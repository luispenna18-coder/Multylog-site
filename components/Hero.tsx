"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

interface Slide {
  id: number;
  image: string;
  badge?: string;
  headline: string;
  headlineAccent?: string;
  services?: { label: string; desc: string; href: string; bg?: string }[];
  subheadline: string;
  cta1: { label: string; href: string; external?: boolean };
  cta2?: { label: string; href: string };
  overlay?: string;
  bgColor?: string;
  accentColor?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  textPadding?: string;
  textCenter?: boolean;
  textDark?: boolean;
  headlineSize?: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: "/images/banner-still-03.jpg",
    headline: "Sua Operação\nNão Pode Parar",
    subheadline: "",
    cta1: { label: "Solicitar Cotação", href: `https://wa.me/${SITE.whatsapp}?text=Olá!%20Vi%20o%20site%20da%20Multylog%20e%20gostaria%20de%20solicitar%20uma%20cotação.%20Pode%20me%20ajudar%3F`, external: true },
    cta2: { label: "Ver Equipamentos", href: "/maquinas" },
    overlay: "linear-gradient(to right, rgba(5,5,7,0.75) 0%, rgba(5,5,7,0.55) 32%, rgba(5,5,7,0.0) 46%)",
    objectPosition: "center center",
    textPadding: "",
    accentColor: "#CC0000",
  },
  {
    id: 2,
    image: "/images/banner-multylog-02.png",
    headline: "4 Soluções para\nSua Operação",
    subheadline: "Locação · Venda · Peças · Serviços",
    cta1: { label: "Solicitar Cotação", href: `https://wa.me/${SITE.whatsapp}?text=Olá!%20Vi%20o%20site%20da%20Multylog%20e%20gostaria%20de%20solicitar%20uma%20cotação.%20Pode%20me%20ajudar%3F`, external: true },
    cta2: { label: "Conheça a Multylog", href: "/sobre" },
    accentColor: "#CC0000",
    textCenter: true,
    textDark: true,
    headlineSize: "clamp(1.8rem, 2.8vw, 3.4rem)",
    bgColor: "#FFFFFF",
    objectFit: "contain",
    objectPosition: "left center",
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

  const slide2 = SLIDES[1];

  return (
    <>
    {/* ── Mobile: foto da equipe centralizada no casal ── */}
    <section className="sm:hidden relative overflow-hidden mt-16 bg-[#1C1C1E] aspect-[3/4]">
      <Image
        src="/images/banner-mobile.png"
        alt="Equipe Multylog com empilhadeiras"
        fill
        className="object-cover"
        style={{ objectPosition: "center 70%" }}
        priority
        sizes="100vw"
        quality={95}
      />
      {/* Gradiente: topo e bordas sutis, base mais escura para o texto */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,7,0.20) 0%, rgba(5,5,7,0.02) 35%, rgba(5,5,7,0.02) 60%, rgba(5,5,7,0.72) 100%)" }} />

    </section>

    {/* ── Desktop: carrossel completo ── */}
    <section
      className="hidden sm:block relative w-full overflow-hidden bg-[#1C1C1E] cursor-grab active:cursor-grabbing mt-16 lg:mt-[4.5rem]"
      style={{ aspectRatio: "16/6" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); dragStart.current = null; }}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseUp={(e) => handleDragEnd(e.clientX)}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
    >
      {/* Banner image / bg color */}
      <div className="absolute inset-0" style={{ background: slide.bgColor ?? undefined }}>
        <Image
          key={slide.id}
          src={slide.image}
          alt={slide.headline.replace("\n", " ")}
          fill
          className={`hero-slide-enter ${slide.objectFit === "contain" ? "object-contain" : "object-cover"}`}
          style={{ objectPosition: slide.objectPosition ?? "center center" }}
          priority={slide.id === 1}
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
          quality={90}
        />
        <div className="absolute inset-0" style={{ background: slide.overlay ?? undefined }} />
      </div>


      {/* Content */}
      <div className={`site-container relative h-full flex items-center ${slide.textCenter ? "justify-center" : ""}`}>
        <div key={`text-${current}`} className={`hero-slide-enter w-full ${slide.textCenter ? "max-w-[420px] text-center" : "max-w-[600px]"}`}>

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
            className={`font-display leading-none tracking-wide whitespace-pre-line mb-5 ${slide.textDark ? "text-gray-700" : "text-white"}`}
            style={{ fontSize: slide.headlineSize ?? "clamp(2.4rem, 4vw, 5rem)" }}
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

          {/* CTAs + Serviços alinhados */}
          <div className="inline-flex flex-col gap-3">
            <div className={`flex items-center gap-3 ${slide.textCenter ? "justify-center" : ""}`}>
              <a
                href={slide.cta1.href}
                {...(slide.cta1.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 rounded-xl transition-all group"
              >
                {slide.cta1.label}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              {slide.cta2 && (
                <Link
                  href={slide.cta2.href}
                  className={`inline-flex items-center justify-center font-semibold px-7 py-3.5 rounded-xl border transition-all ${slide.textDark ? "border-gray-400 text-gray-600 hover:border-[#1C1C1E] hover:text-[#1C1C1E]" : "border-white/40 text-white hover:border-white"}`}
                >
                  {slide.cta2.label}
                </Link>
              )}
            </div>

            {/* Serviços sutis — apenas slide 1, oculto no mobile */}
            {slide.id === 1 && (
              <div className="hidden sm:flex gap-3">
                {[
                  { label: "Locação", href: "/locacao" },
                  { label: "Venda", href: "/novos-seminovos" },
                  { label: "Peças e Serviços", href: "/pecas-servicos" },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="flex-1 inline-flex items-center justify-center font-semibold py-2.5 rounded-xl border-2 border-white/60 text-white hover:border-white transition-all text-sm"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>


    </section>
    </>
  );
}
