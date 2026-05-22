import type { Metadata } from "next";
import Image from "next/image";
import { Mountain, Eye, ShieldCheck, Users, Settings, Star, ClipboardList } from "lucide-react";
import CurriculoForm from "@/components/CurriculoForm";

export const metadata: Metadata = {
  title: "Trabalhe Conosco | Multylog Empilhadeiras",
  description: "Faça parte do time Multylog. Missão, visão, valores e oportunidades de carreira em Recife, PE.",
};


/* ── Ícones de Valores (SVG customizado) ─────────────────────────── */
const S = { fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const VALUE_ITEMS = [
  {
    label: "Caráter é\ninegociável",
    icon: (
      <svg viewBox="0 0 48 48" width={56} height={56} {...S}>
        {/* Escudo com check — canto superior direito */}
        <path d="M27 2 L46 2 L46 14 C46 22 36.5 27 36.5 27 C36.5 27 27 22 27 14 Z"/>
        <polyline points="30,13 35,18 43,9"/>
        {/* Aperto de mão — área inferior */}
        <path d="M2 44 L13 30"/>
        <path d="M46 44 L35 30"/>
        <path d="M13 30 L16 30 L16 25 L19 25 L19 30 L22 24 L25 24 L25 30 L29 30"/>
        <path d="M35 30 L29 30 L29 35 L13 35 L13 30"/>
        <path d="M13 33 L9 37"/>
        <path d="M35 33 L39 37"/>
      </svg>
    ),
  },
  {
    label: "Trabalho\nem Equipe",
    icon: (
      <svg viewBox="0 0 48 48" width={56} height={56} {...S}>
        {/* 4 braços dos cantos ao centro */}
        <line x1="4" y1="4" x2="14" y2="15"/>
        <line x1="44" y1="4" x2="34" y2="15"/>
        <line x1="4" y1="44" x2="14" y2="33"/>
        <line x1="44" y1="44" x2="34" y2="33"/>
        {/* 4 mãos encontrando-se no centro */}
        <rect x="10" y="11" width="13" height="10" rx="4"/>
        <rect x="25" y="11" width="13" height="10" rx="4"/>
        <rect x="10" y="27" width="13" height="10" rx="4"/>
        <rect x="25" y="27" width="13" height="10" rx="4"/>
      </svg>
    ),
  },
  {
    label: "Encantamento",
    icon: (
      <svg viewBox="0 0 48 48" width={56} height={56} {...S}>
        {/* Engrenagem — topo centro */}
        <circle cx="24" cy="9" r="4.5"/>
        <path d="M24 4.5 L24 2 M24 13.5 L24 16 M19.5 9 L17 9 M28.5 9 L31 9 M21.2 6.2 L19.4 4.4 M26.8 11.8 L28.6 13.6 M26.8 6.2 L28.6 4.4 M21.2 11.8 L19.4 13.6"/>
        {/* Haste central + ramificação */}
        <line x1="24" y1="16" x2="24" y2="22"/>
        <path d="M10 22 L38 22"/>
        <line x1="10" y1="22" x2="10" y2="26"/>
        <line x1="24" y1="22" x2="24" y2="26"/>
        <line x1="38" y1="22" x2="38" y2="26"/>
        {/* 3 pessoas */}
        <circle cx="10" cy="31" r="4"/>
        <path d="M3 46 C3 39 17 39 17 46"/>
        <circle cx="24" cy="31" r="4"/>
        <path d="M17 46 C17 39 31 39 31 46"/>
        <circle cx="38" cy="31" r="4"/>
        <path d="M31 46 C31 39 45 39 45 46"/>
      </svg>
    ),
  },
  {
    label: "Somos parceiros\nna produtividade",
    icon: (
      <svg viewBox="0 0 48 48" width={56} height={56} {...S}>
        {/* Pessoa — lado direito */}
        <circle cx="34" cy="10" r="6"/>
        <path d="M22 44 C22 34 28 30 34 30 C40 30 46 34 46 44"/>
        {/* Fita da medalha */}
        <path d="M13 3 L10 15"/>
        <path d="M13 3 L16 15"/>
        {/* Círculo da medalha */}
        <circle cx="13" cy="22" r="8"/>
        {/* Estrela 5 pontas dentro da medalha */}
        <path d="M13 15.5 L14.5 19.8 L19 19.8 L15.4 22.4 L16.9 26.7 L13 24.1 L9.1 26.7 L10.6 22.4 L7 19.8 L11.5 19.8 Z"/>
      </svg>
    ),
  },
  {
    label: "Excelência com\nMelhoria Contínua",
    icon: (
      <svg viewBox="0 0 48 48" width={56} height={56} {...S}>
        {/* Prancheta */}
        <rect x="2" y="9" width="27" height="36" rx="2"/>
        {/* Clip */}
        <path d="M9 9 L9 5 C9 3 22 3 22 5 L22 9"/>
        {/* Checklist — 3 linhas com check */}
        <path d="M7 19 L9 21 L14 17"/>
        <line x1="17" y1="19" x2="25" y2="19"/>
        <path d="M7 27 L9 29 L14 25"/>
        <line x1="17" y1="27" x2="25" y2="27"/>
        <path d="M7 35 L9 37 L14 33"/>
        <line x1="17" y1="35" x2="25" y2="35"/>
        {/* Pessoa — lado direito */}
        <circle cx="38" cy="17" r="6"/>
        <path d="M27 46 C27 36 33 32 38 32 C43 32 48 36 48 46"/>
      </svg>
    ),
  },
];

function gearPath(s: number): string {
  const c = s / 2;
  const R = s * 0.47;  // outer radius — tooth tips
  const r = s * 0.33;  // inner radius — tooth roots
  const n = 8;
  const step = (Math.PI * 2) / n;
  const tw = step * 0.25; // 50% tooth, 50% gap (equal ratio)
  const pts: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = i * step - Math.PI / 2;
    // rectangular teeth: same angular width at inner and outer radius
    pts.push(`${(c + r * Math.cos(a - tw)).toFixed(1)},${(c + r * Math.sin(a - tw)).toFixed(1)}`);
    pts.push(`${(c + R * Math.cos(a - tw)).toFixed(1)},${(c + R * Math.sin(a - tw)).toFixed(1)}`);
    pts.push(`${(c + R * Math.cos(a + tw)).toFixed(1)},${(c + R * Math.sin(a + tw)).toFixed(1)}`);
    pts.push(`${(c + r * Math.cos(a + tw)).toFixed(1)},${(c + r * Math.sin(a + tw)).toFixed(1)}`);
  }
  return "M " + pts.join(" L ") + " Z";
}

const GEARS = [
  { title: "Auxiliar de\nmecânica",  desc: "Apoia a equipe\nnas rotinas de\nmanutenção diária",         color: "#CC0000", size: 128 },
  { title: "Mecânico\nI",            desc: "Executa serviços\nbásicos com\nsupervisão direta",           color: "#1C1C1E", size: 106 },
  { title: "Mecânico\nII",           desc: "Diagnósticos\ne manutenções\nautônomas",                   color: "#CC0000", size: 128 },
  { title: "Mecânico\nIII",          desc: "Manutenções\ncomplexas com\ntotal autonomia",               color: "#1C1C1E", size: 106 },
  { title: "Mecânico\nIV",           desc: "Lidera a equipe\ne é referência\ntécnica da Multylog",       color: "#CC0000", size: 142 },
] as const;

export default function TrabalheConoscoPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      {/* Mobile banner — portrait, composição própria */}
      <section className="sm:hidden relative w-full overflow-hidden mt-16" style={{ aspectRatio: "1063/1093" }}>
        <Image
          src="/images/banner-trabalhe-conosco-mobile.png"
          alt="Equipe Multylog"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
      </section>

      {/* Desktop banner — landscape original */}
      <section className="hidden sm:block relative w-full overflow-hidden mt-[4.5rem] aspect-[16/5]">
        <Image
          src="/images/banner-trabalhe-conosco.png"
          alt="Equipe Multylog"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
      </section>

      {/* ── Missão & Visão ───────────────────────────────────────────── */}
      <section className="bg-white section-py border-b border-gray-100">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Image src="/images/icone-missao.png" alt="Missão" width={52} height={52} className="flex-shrink-0" />
                <h2 className="font-display text-[#1C1C1E] tracking-wide text-4xl lg:text-5xl uppercase">
                  Nossa Missão
                </h2>
              </div>
              <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                Movimentar cargas e impulsionar entregas, por meio de atendimento ágil e operações sob medida.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Image src="/images/icone-visao.png" alt="Visão" width={52} height={52} className="flex-shrink-0" />
                <h2 className="font-display text-[#1C1C1E] tracking-wide text-4xl lg:text-5xl uppercase">
                  Nossa Visão
                </h2>
              </div>
              <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                Consolidar a Multylog como referência regional intralogística e crescer de forma sustentável até 2030.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── O Que é a Multylog + Porque Trabalhar ───────────────────── */}
      <section className="bg-white section-py border-t border-gray-100">
        <div className="site-container">
          <h2 className="font-display text-4xl lg:text-5xl text-[#1C1C1E] tracking-wide mb-6">
            O Que é a Multylog?
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-16">
            &ldquo;A Multylog é referência em soluções de movimentação de carga, atuando com as marcas mais prestigiadas do setor. Nosso compromisso vai além da manutenção e locação: entregamos eficiência. Para isso, investimos em uma estrutura de ponta e, principalmente, no desenvolvimento de quem faz a nossa engrenagem girar: você.&rdquo;
          </p>

          <h2 className="font-display text-4xl lg:text-5xl text-[#1C1C1E] tracking-wide mb-6">
            Porque Trabalhar na Multylog?
          </h2>
          <ul className="space-y-3">
            {[
              { bold: "Inovação em Movimento:", text: "Trabalhamos com o que há de mais moderno em empilhadeiras e tecnologia logística." },
              { bold: "Segurança em Primeiro Lugar:", text: "Nosso compromisso é com a integridade de cada colaborador e a excelência operacional." },
              { bold: "Crescimento Real:", text: "Valorizamos talentos internos. Na Multylog, sua carreira tem o suporte necessário para subir de nível." },
              { bold: "Ambiente Colaborativo:", text: "Somos um time. O respeito e a troca de conhecimento são a base do nosso dia a dia." },
            ].map(({ bold, text }) => (
              <li key={bold} className="flex gap-2 text-lg lg:text-xl text-gray-700">
                <span className="text-[#CC0000] font-bold mt-0.5 shrink-0">•</span>
                <span><span className="font-semibold text-[#1C1C1E]">{bold}</span> {text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Nossos Valores ───────────────────────────────────────────── */}
      <section className="bg-white section-py border-t border-gray-100">
        <div className="site-container">
          <div className="flex items-end gap-8 lg:gap-12">

            {/* Conteúdo */}
            <div className="flex-1 min-w-0">

              <h2 className="font-display text-[#1C1C1E] text-4xl lg:text-5xl tracking-wide mb-2">
                Nossos Valores
              </h2>
              <p className="text-gray-600 text-lg mb-10">
                Os princípios que guiam cada decisão, cada atendimento e cada relação dentro da Multylog.
              </p>

              {/* 5 ícones */}
              <div className="flex flex-wrap gap-x-16 gap-y-6 mb-12 justify-center sm:justify-start sm:-ml-1">
                {[
                  { src: "/images/icone-carater.png",      label: "Caráter é\nInegociável" },
                  { src: "/images/icone-equipe.png",       label: "Trabalho\nem Equipe" },
                  { src: "/images/icone-encantamento.png", label: "Encantamento\ndo Cliente" },
                  { src: "/images/icone-parceiros.png",    label: "Parceiros na\nProdutividade" },
                  { src: "/images/icone-excelencia.png",   label: "Excelência com\nMelhoria Contínua" },
                ].map(({ src, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-3 w-28">
                    <Image src={src} alt={label} width={80} height={80} />
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#1C1C1E] leading-snug">{label}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-[#1C1C1E] text-3xl lg:text-4xl tracking-wide mb-5">
                Também Valorizamos!
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  { bold: "Foco no Cliente:", text: "Entender que uma empilhadeira parada é um problema para o cliente." },
                  { bold: "Segurança Absoluta:", text: "Respeito total às normas de segurança e EPIs." },
                  { bold: "Melhoria Contínua:", text: "Vontade de aprender novas tecnologias e processos." },
                  { bold: "Ética e Transparência:", text: "Relações diretas e honestas com colegas e clientes." },
                ].map(({ bold, text }) => (
                  <li key={bold} className="flex gap-2 text-lg text-[#1C1C1E] leading-relaxed">
                    <span className="text-[#CC0000] font-bold shrink-0 mt-0.5">•</span>
                    <span><span className="font-bold">{bold}</span> {text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#enviar-curriculo"
                className="inline-flex items-center bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Enviar Currículo
              </a>

            </div>

            {/* Mascote */}
            <div className="hidden lg:block w-60 xl:w-72 shrink-0 self-end">
              <Image
                src="/images/mascote-multylog-01.png"
                alt="Mascote Multylog"
                width={290}
                height={460}
                className="w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Projeto Parafusinho ──────────────────────────────────────── */}
      <section className="bg-[#F5F5F7] section-py">
        <div className="site-container flex flex-col items-center text-center">
          <p className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest mb-2">
            Formação Técnica da Multylog
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1C1C1E] tracking-wide mb-4">
            Conheça o Projeto Parafusinho
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-8">
            O programa existe com o objetivo estratégico de promover o desenvolvimento de jovens talentos, com idade entre 18 e 24 anos, preparando-os para atuarem como futuros Mecânicos.
          </p>
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


      {/* ── Rota do Mecânico ─────────────────────────────────────────── */}
      <section className="bg-white section-py border-t border-gray-100">
        <div className="site-container">
          <h2 className="font-display text-4xl lg:text-5xl text-[#1C1C1E] tracking-wide mb-4">
            Rota do Mecânico
          </h2>
          <p className="text-gray-600 text-lg mb-14 max-w-3xl">
            A Rota do Mecânico é o caminho de desenvolvimento técnico que todo profissional percorre na Multylog — do primeiro contato com a manutenção até a condução de soluções avançadas e especializadas em empilhadeiras.
          </p>

          {/* Mobile — grid 2 por linha, último centralizado */}
          <div className="sm:hidden grid grid-cols-2 gap-6">
            {GEARS.map((gear, i) => (
              <div key={i} className={`flex flex-col items-center text-center gap-3${i === GEARS.length - 1 && GEARS.length % 2 !== 0 ? " col-span-2" : ""}`}>
                <svg width={72} height={72} viewBox={`0 0 ${gear.size} ${gear.size}`} aria-hidden="true" className="shrink-0">
                  <path d={gearPath(gear.size)} fill="none" stroke={gear.color} strokeWidth={Math.round(gear.size * 0.038)} strokeLinejoin="miter" />
                  <circle cx={gear.size / 2} cy={gear.size / 2} r={gear.size * 0.15} fill="none" stroke={gear.color} strokeWidth={Math.round(gear.size * 0.038)} />
                  <text x={gear.size / 2} y={gear.size / 2} dy="0.35em" textAnchor="middle" fill={gear.color} fontSize={gear.size * 0.30} fontWeight="700">{i + 1}</text>
                </svg>
                <div>
                  <p className="font-bold text-sm leading-tight whitespace-pre-line mb-1" style={{ color: gear.color }}>{gear.title}</p>
                  <p className="text-gray-500 text-sm leading-snug whitespace-pre-line">{gear.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop — engrenagens horizontais (inalterado) */}
          <div className="hidden sm:flex items-start justify-between gap-2 sm:gap-4">
              {GEARS.flatMap((gear, i) => {
                const sw = Math.round(gear.size * 0.038);
                const gearEl = (
                  <div key={`g${i}`} className="flex flex-col items-center">
                    <div className="h-12 flex items-end justify-center mb-2">
                      <p className="text-xs sm:text-sm font-bold text-center leading-tight whitespace-pre-line" style={{ color: gear.color }}>
                        {gear.title}
                      </p>
                    </div>
                    <div className="flex items-center justify-center" style={{ width: 142, height: 142 }}>
                      <svg width={gear.size} height={gear.size} viewBox={`0 0 ${gear.size} ${gear.size}`} aria-hidden="true">
                        <path d={gearPath(gear.size)} fill="none" stroke={gear.color} strokeWidth={sw} strokeLinejoin="miter" />
                        <circle cx={gear.size / 2} cy={gear.size / 2} r={gear.size * 0.15} fill="none" stroke={gear.color} strokeWidth={sw} />
                        <text x={gear.size / 2} y={gear.size / 2} dy="0.35em" textAnchor="middle" fill={gear.color} fontSize={gear.size * 0.30} fontWeight="700">
                          {i + 1}
                        </text>
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-center text-gray-500 mt-2 leading-snug whitespace-pre-line" style={{ maxWidth: 140 }}>
                      {gear.desc}
                    </p>
                  </div>
                );
                if (i < GEARS.length - 1) {
                  const arrowEl = (
                    <div key={`a${i}`} className="shrink-0" style={{ paddingTop: 117 }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M3 10h14M12 5l5 5-5 5" stroke="#CC0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  );
                  return [gearEl, arrowEl];
                }
                return [gearEl];
              })}
            </div>
        </div>
      </section>

      {/* ── Nosso Time ───────────────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="site-container">
          <h2 className="font-display text-4xl lg:text-5xl text-[#1C1C1E] tracking-wide mb-10 text-center">
            Nosso Time
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

      {/* ── Enviar Currículo ─────────────────────────────────────────── */}
      <section id="enviar-curriculo" className="bg-[#F5F5F7] py-16 lg:py-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-0.5 bg-[#CC0000]" />
                <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
                  Faça parte do time
                </span>
              </div>
              <h2
                className="font-display font-normal text-[#1C1C1E] tracking-wide leading-none mb-5"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3.2rem)" }}
              >
                Envie seu Currículo
              </h2>
              <div className="w-12 h-0.5 bg-[#CC0000] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Analisamos todos os perfis e entraremos em contato quando surgir uma oportunidade alinhada ao seu perfil.
              </p>
            </div>
            <CurriculoForm />
          </div>
        </div>
      </section>
    </>
  );
}
