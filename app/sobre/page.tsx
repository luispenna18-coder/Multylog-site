import Image from "next/image";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Multylog | 25+ Anos em Empilhadeiras no Nordeste",
  description: "Conheça a história da Multylog Empilhadeiras — empresa familiar, representante autorizado STILL para PE, PB e AL há mais de 25 anos.",
};


export default function SobrePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden mt-16 lg:mt-[4.5rem] aspect-[4/3] md:aspect-auto md:h-[clamp(400px,52vh,600px)]">
        <Image
          src="/images/sobre-whatsapp.jpg"
          alt="Multylog Empilhadeiras"
          fill
          className="object-cover object-center md:object-[center_80%]"
          priority
          sizes="100vw"
          quality={95}
        />
        {/* Dark tonal overlay — uniform, Armac-style */}
        <div className="absolute inset-0" style={{ background: "rgba(10,18,30,0.62)" }} />

        {/* Title at bottom-left */}
        <div className="site-container relative h-full flex items-end pb-12 lg:pb-16">
          <div>
            <h1 className="font-display text-white tracking-wide leading-none" style={{ fontSize: "clamp(2.6rem, 4.5vw, 5.2rem)" }}>
              Sobre a Multylog
            </h1>
            <div className="w-12 h-0.5 bg-[#CC0000] mt-4" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="historia" className="section-py bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-0.5 bg-[#CC0000]" />
                <span className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest">
                  Nossa História
                </span>
              </div>
              <h2 className="heading-lg font-display text-[#1C1C1E] tracking-wide mb-4">
                Tradição e Expertise em Intralogística
              </h2>
              <div className="w-12 h-0.5 bg-[#CC0000] mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                A Multylog Empilhadeiras nasceu em Recife com um propósito claro: oferecer soluções
                completas em movimentação de cargas para as empresas do Nordeste. Ao longo de mais
                de 25 anos, nos tornamos muito mais que uma locadora.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Como representante exclusivo da STILL para Pernambuco, Paraíba e Alagoas, fazemos
                parte do ecossistema KION Group — um dos maiores grupos de equipamentos de
                movimentação do mundo —, o que nos permite oferecer tecnologia de ponta com o
                atendimento personalizado de uma empresa familiar.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nossa divisão Multipeças garante que sua operação nunca para: peças genuínas STILL,
                técnicos certificados e atendimento prioritário para manutenção preventiva e
                corretiva.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Empresa familiar há 25+ anos",
                  "Representante oficial STILL",
                  "Técnicos certificados STILL",
                  "Estoque próprio em Recife",
                  "Atendimento em PE, PB e AL",
                  "Parte do KION Group",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#CC0000] flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/images/team.jpg"
                alt="Equipe Multylog"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Gestores ── */}
      <section className="section-py bg-[#F5F5F7]">
        <div className="site-container">
          <div className="text-center mb-12">
            <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
              Liderança
            </span>
            <h2 className="heading-lg font-display text-[#1C1C1E] mt-2 tracking-wide">
              Conheça Nossos Gestores
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Nossa equipe é formada por profissionais de diversas áreas para oferecer as melhores soluções em movimentação de cargas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "Romero Penna",
                role: "CEO / FUNDADOR",
                linkedin: "https://br.linkedin.com/in/romero-penna-00946840",
                image: "https://tudoedesign.com.br/wp-content/uploads/2026/01/gestores_multylog-06-scaled.png",
              },
              {
                name: "Tereza Penna",
                role: "DIRETORA COMERCIAL",
                linkedin: "https://br.linkedin.com/in/tereza-arteiro-penna-86a97a137",
                image: "https://tudoedesign.com.br/wp-content/uploads/2026/01/gestores_multylog-07-scaled.png",
              },
            ].map((person) => (
              <div key={person.name} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#CC0000]/30 hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center w-64">
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-5 border-4 border-[#CC0000]/10 group-hover:border-[#CC0000]/40 transition-colors duration-300">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-display text-2xl text-[#1C1C1E] tracking-wide">{person.name}</h3>
                <p className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest mt-1 mb-5">{person.role}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#005f8e] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Road Timeline ── */}
      <section className="bg-[#F0F0F2] pt-14 pb-32">
        <div className="text-center mb-8">
          <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
            Linha do Tempo
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1C1C1E] mt-1 tracking-wide">
            Nossa Trajetória
          </h2>
          <p className="text-gray-600 mt-2 text-sm">Longo caminho para chegarmos até aqui</p>
        </div>
        <Image
          src="/images/trajetoria.png"
          alt="Nossa Trajetória — linha do tempo Multylog"
          width={1260}
          height={596}
          className="w-full max-w-5xl h-auto mx-auto block"
          quality={95}
        />
      </section>

    </>
  );
}
