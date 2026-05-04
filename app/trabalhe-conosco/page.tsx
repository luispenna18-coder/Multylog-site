import type { Metadata } from "next";
import Image from "next/image";
import { Mountain, Eye, ShieldCheck, Users, Settings, Star, ClipboardList } from "lucide-react";
import { SITE } from "@/lib/constants";

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
        {/* aperto de mão — braço esquerdo */}
        <path d="M3 38 L14 26"/>
        {/* mão esquerda com 3 dedos */}
        <path d="M14 26 L18 26 L18 21 L21 21 L21 26 L24 21 L27 21 L27 26 L30 26"/>
        {/* braço direito */}
        <path d="M45 38 L34 26 L30 26"/>
        {/* mão direita envolve os dedos por baixo */}
        <path d="M14 26 L14 32 L30 32 L30 26"/>
        {/* polegar esquerdo */}
        <path d="M14 29 L9 33"/>
        {/* polegar direito */}
        <path d="M30 29 L35 33"/>
      </svg>
    ),
  },
  {
    label: "Trabalho\nem Equipe",
    icon: (
      <svg viewBox="0 0 48 48" width={56} height={56} {...S}>
        {/* 4 braços dos cantos ao centro */}
        <path d="M5 5 L19 19"/>
        <path d="M43 5 L29 19"/>
        <path d="M5 43 L19 29"/>
        <path d="M43 43 L29 29"/>
        {/* punhos nos cantos */}
        <rect x="1" y="1" width="8" height="7" rx="2"/>
        <rect x="39" y="1" width="8" height="7" rx="2"/>
        <rect x="1" y="40" width="8" height="7" rx="2"/>
        <rect x="39" y="40" width="8" height="7" rx="2"/>
        {/* centro unido */}
        <path d="M19 19 L29 19 L29 29 L19 29 Z"/>
      </svg>
    ),
  },
  {
    label: "Encantamento",
    icon: (
      <svg viewBox="0 0 48 48" width={56} height={56} {...S}>
        {/* engrenagem topo */}
        <circle cx="24" cy="10" r="5"/>
        <path d="M24 5 L24 2 M24 15 L24 18 M19 10 L16 10 M29 10 L32 10 M20.5 6.5 L18.4 4.4 M27.5 13.5 L29.6 15.6 M27.5 6.5 L29.6 4.4 M20.5 13.5 L18.4 15.6"/>
        {/* haste + barra horizontal */}
        <line x1="24" y1="18" x2="24" y2="25"/>
        <path d="M12 25 L36 25"/>
        {/* pessoa esquerda */}
        <line x1="12" y1="25" x2="12" y2="30"/>
        <circle cx="12" cy="34" r="3.5"/>
        <path d="M6 46 C6 41 18 41 18 46"/>
        {/* pessoa centro */}
        <line x1="24" y1="25" x2="24" y2="30"/>
        <circle cx="24" cy="34" r="3.5"/>
        <path d="M18 46 C18 41 30 41 30 46"/>
        {/* pessoa direita */}
        <line x1="36" y1="25" x2="36" y2="30"/>
        <circle cx="36" cy="34" r="3.5"/>
        <path d="M30 46 C30 41 42 41 42 46"/>
      </svg>
    ),
  },
  {
    label: "Somos parceiros\nna produtividade",
    icon: (
      <svg viewBox="0 0 48 48" width={56} height={56} {...S}>
        {/* pessoa (direita) */}
        <circle cx="35" cy="10" r="5.5"/>
        <path d="M24 44 C24 35 29 31 35 31 C41 31 46 35 46 44"/>
        {/* fita da medalha */}
        <path d="M13 2 L10 13"/>
        <path d="M13 2 L16 13"/>
        {/* círculo da medalha */}
        <circle cx="13" cy="20" r="8"/>
        {/* estrela dentro da medalha */}
        <path d="M13 14 L14.5 18.5 L19 18.5 L15.5 21.3 L16.8 25.5 L13 22.8 L9.2 25.5 L10.5 21.3 L7 18.5 L11.5 18.5 Z"/>
      </svg>
    ),
  },
  {
    label: "Excelência com\nMelhoria Contínua",
    icon: (
      <svg viewBox="0 0 48 48" width={56} height={56} {...S}>
        {/* prancheta */}
        <rect x="2" y="10" width="26" height="34" rx="2"/>
        {/* clip */}
        <path d="M9 10 L9 6 C9 3 21 3 21 6 L21 10"/>
        {/* itens de checklist */}
        <path d="M7 20 L9 22 L13 18"/>
        <line x1="16" y1="20" x2="24" y2="20"/>
        <path d="M7 28 L9 30 L13 26"/>
        <line x1="16" y1="28" x2="24" y2="28"/>
        <path d="M7 36 L9 38 L13 34"/>
        <line x1="16" y1="36" x2="24" y2="36"/>
        {/* pessoa (direita) */}
        <circle cx="38" cy="18" r="5.5"/>
        <path d="M28 46 C28 37 33 33 38 33 C43 33 48 37 48 46"/>
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
      <section className="relative w-full overflow-hidden mt-16 lg:mt-[4.5rem] aspect-[4/3] md:aspect-auto md:h-[clamp(400px,52vh,600px)]">
        <Image
          src="/images/team-fachada.jpg"
          alt="Equipe Multylog"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,18,30,0.75)" }} />
        <div className="site-container relative h-full flex items-end pb-12 lg:pb-16">
          <div>
            <h1 className="font-display text-white tracking-wide leading-none whitespace-pre-line mb-4" style={{ fontSize: "clamp(2.2rem, 3.4vw, 4rem)" }}>
              {"Construa sua Trajetória\nna Multylog"}
            </h1>
            <div className="w-12 h-0.5 bg-[#CC0000]" />
          </div>
        </div>
      </section>

      {/* ── Missão & Visão ───────────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Mountain size={48} strokeWidth={1.5} className="text-[#CC0000] flex-shrink-0" />
                <h2 className="font-display text-[#1C1C1E] tracking-wide text-3xl lg:text-4xl">
                  Nossa Missão
                </h2>
              </div>
              <p className="text-gray-600 text-xl leading-relaxed">
                Movimentar cargas e impulsionar entregas, por meio de atendimento ágil e operações sob medida.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Eye size={48} strokeWidth={1.5} className="text-[#CC0000] flex-shrink-0" />
                <h2 className="font-display text-[#1C1C1E] tracking-wide text-3xl lg:text-4xl">
                  Nossa Visão
                </h2>
              </div>
              <p className="text-gray-600 text-xl leading-relaxed">
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
              <p className="text-gray-600 text-base mb-10">
                Movimentar cargas e impulsionar entregas, por meio de atendimento ágil e operações sob medida.
              </p>

              {/* 5 ícones */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-12">
                {[
                  { icon: ShieldCheck,   label: "Caráter é\ninegociável" },
                  { icon: Users,         label: "Trabalho\nem Equipe" },
                  { icon: Settings,      label: "Encantamento" },
                  { icon: Star,          label: "Somos parceiros\nna produtividade" },
                  { icon: ClipboardList, label: "Excelência com\nMelhoria Contínua" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-3">
                    <Icon size={56} strokeWidth={1.25} className="text-[#CC0000]" />
                    <p className="text-base text-[#1C1C1E] font-medium leading-snug whitespace-pre-line">{label}</p>
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

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:rh@multylog.com.br?subject=Envio%20de%20Currículo"
                  className="inline-flex items-center bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  Enviar Currículo
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Gostaria%20de%20saber%20sobre%20vagas%20na%20Multylog.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-gray-400 hover:border-[#1C1C1E] text-[#1C1C1E] font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  Vagas na Multylog
                </a>
              </div>

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
          <p className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest mb-2">
            Formação Técnica da Multylog
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1C1C1E] tracking-wide mb-8">
            Conheça o Projeto Parafusinho
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

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#1C1C1E] section-py">
        <div className="site-container text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-white tracking-wide mb-4">
            Quer Fazer Parte do Time?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Envie seu currículo para nosso e-mail. Analisamos todos os perfis e entraremos em
            contato quando surgir uma oportunidade alinhada ao seu perfil.
          </p>
          <a
            href="mailto:rh@multylog.com.br"
            className="inline-block bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Enviar Currículo
          </a>
        </div>
      </section>
    </>
  );
}
