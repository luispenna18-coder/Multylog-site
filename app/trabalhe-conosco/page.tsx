import type { Metadata } from "next";
import Image from "next/image";
import { Mountain, Eye } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Trabalhe Conosco | Multylog Empilhadeiras",
  description: "Faça parte do time Multylog. Missão, visão, valores e oportunidades de carreira em Recife, PE.",
};

export default function TrabalheConoscoPage() {
  return (
    <>
      {/* ── Hero — foto do time com overlay escuro ──────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "clamp(480px, 65vh, 780px)" }}>
        <Image
          src="/images/team-fachada.jpg"
          alt="Equipe Multylog"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="site-container w-full">
            <div style={{ maxWidth: "clamp(320px, 55vw, 720px)" }}>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-0.5 bg-[#CC0000]" />
                <span className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest">
                  Carreiras
                </span>
              </div>
              <h1
                className="font-display text-white tracking-wide leading-none mb-4"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 5rem)" }}
              >
                CONSTRUA SUA TRAJETÓRIA<br />NA MULTYLOG
              </h1>
              <div className="w-12 h-0.5 bg-[#CC0000] mb-6" />
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                Mais de 25 anos de mercado transformando a logística com tecnologia e confiança.
                Buscamos profissionais que desejam deixar sua marca em uma empresa sólida e em plena expansão.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:rh@multylog.com.br"
                  className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 transition-colors"
                >
                  Enviar Currículo
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Gostaria%20de%20saber%20sobre%20vagas%20na%20Multylog.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/60 hover:border-white text-white font-semibold px-7 py-3.5 transition-colors"
                >
                  Vagas na Multylog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Missão & Visão ───────────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

            {/* Missão */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Mountain size={52} strokeWidth={1.25} className="text-[#CC0000] flex-shrink-0" />
                <h2 className="font-sans font-bold text-[#1C1C1E] tracking-wide" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}>
                  NOSSA MISSÃO
                </h2>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Movimentar cargas e impulsionar entregas, por meio de atendimento ágil e operações sob medida.
              </p>
            </div>

            {/* Visão */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Eye size={52} strokeWidth={1.25} className="text-[#CC0000] flex-shrink-0" />
                <h2 className="font-sans font-bold text-[#1C1C1E] tracking-wide" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}>
                  NOSSA VISÃO
                </h2>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Consolidar a Multylog como referência regional intralogística e crescer de forma sustentável até 2030.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Nossos Valores ───────────────────────────────────────────── */}
      <section className="bg-white pt-16 lg:pt-24">
        <div className="site-container">
          {/* Imagem da seção — fundo branco nas bordas para não revelar foto */}
          <Image
            src="/images/nossos-valores-section.png"
            alt="Nossos Valores — Multylog"
            width={1400}
            height={700}
            className="w-full h-auto"
            quality={95}
          />
          {/* Botões funcionais reais */}
          <div className="flex flex-wrap gap-3 pb-16 lg:pb-24 mt-2">
            <a
              href="mailto:rh@multylog.com.br?subject=Envio%20de%20Currículo"
              className="inline-flex items-center bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 transition-colors"
            >
              Enviar Currículo
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Gostaria%20de%20saber%20sobre%20vagas%20na%20Multylog.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-gray-300 hover:border-[#1C1C1E] text-[#1C1C1E] font-semibold px-7 py-3.5 transition-colors"
            >
              Vagas na Multylog
            </a>
          </div>
        </div>
      </section>


      {/* ── Projeto Parafusinho ──────────────────────────────────────── */}
      <section className="bg-[#F5F5F7] section-py">
        <div className="site-container flex flex-col items-center text-center">
          <p className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest mb-2">
            Formação Técnica da Multylog
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1C1C1E] tracking-wide mb-8">
            CONHEÇA O PROJETO PARAFUSINHO
          </h2>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden max-w-4xl">
            <iframe
              src="https://www.youtube.com/embed/P6KvlA0YlsE"
              title="Projeto Parafusinho — Multylog"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ── Nosso time ───────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F7] section-py">
        <div className="site-container">
          <h2 className="font-display heading-lg text-[#1C1C1E] tracking-wide mb-10 text-center">
            NOSSO TIME
          </h2>
          <div className="relative aspect-[16/7] rounded-2xl overflow-hidden mb-4">
            <Image
              src="/images/team-galpao.jpg"
              alt="Equipe Multylog no galpão"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src={`/images/team/team-${i}.jpg`}
                  alt={`Time Multylog ${i}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#1C1C1E] section-py">
        <div className="site-container text-center">
          <h2 className="font-display heading-lg text-white tracking-wide mb-4">
            QUER FAZER PARTE DO TIME?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Envie seu currículo para nosso e-mail. Analisamos todos os perfis e entraremos em
            contato quando surgir uma oportunidade alinhada ao seu perfil.
          </p>
          <a
            href="mailto:rh@multylog.com.br"
            className="inline-block bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-8 py-4 transition-colors"
          >
            Enviar Currículo
          </a>
        </div>
      </section>
    </>
  );
}
