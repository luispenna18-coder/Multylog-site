import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const CalendarIcon = () => (
  <svg width="16" height="16" fill="none" stroke="#CC0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" fill="none" stroke="#CC0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const LayersIcon = () => (
  <svg width="16" height="16" fill="none" stroke="#CC0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
  </svg>
);
const WrenchIcon = () => (
  <svg width="16" height="16" fill="none" stroke="#CC0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const RadioIcon = () => (
  <svg width="16" height="16" fill="none" stroke="#CC0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
  </svg>
);
const ForkliftIcon = () => (
  <svg width="16" height="16" fill="none" stroke="#CC0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    {/* mastro vertical */}
    <line x1="6" y1="2" x2="6" y2="15"/>
    {/* garfo superior */}
    <line x1="6" y1="4" x2="1" y2="4"/>
    {/* garfo inferior */}
    <line x1="6" y1="8" x2="1" y2="8"/>
    {/* corpo da empilhadeira */}
    <path d="M6 15 L6 11 L18 11 L18 15"/>
    {/* cabine */}
    <rect x="10" y="7" width="8" height="4" rx="1"/>
    {/* roda traseira */}
    <circle cx="16" cy="17.5" r="2.5"/>
    {/* roda dianteira */}
    <circle cx="7" cy="17.5" r="2.5"/>
    {/* base */}
    <line x1="6" y1="15" x2="18" y2="15"/>
  </svg>
);
const PulseIcon = () => (
  <svg width="16" height="16" fill="none" stroke="#CC0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-gray-200 rounded-full px-3.5 py-1.5 text-sm font-semibold text-[#1C1C1E]">
      {icon}
      {label}
    </span>
  );
}

const CARDS = [
  {
    image: "/images/card-locacao-prazo.png",
    badge: "Flexibilidade",
    title: "Spot ou Longo Prazo",
    chips: [
      { icon: <CalendarIcon />, label: "Dias" },
      { icon: <ClockIcon />,    label: "Meses" },
      { icon: <LayersIcon />,   label: "Anos" },
    ],
  },
  {
    image: "/images/card-manutencao.png",
    badge: "Sem Surpresas",
    title: "Manutenção Inclusa",
    chips: [
      { icon: <WrenchIcon />, label: "Preventiva" },
      { icon: <RadioIcon />,  label: "Corretiva" },
    ],
  },
  {
    image: "/images/card-frota.png",
    badge: "Frota Variada",
    title: "Nova ou Usada",
    chips: [
      { icon: <ForkliftIcon />, label: "Frota Variada" },
      { icon: <PulseIcon />, label: "Alta Disponibilidade" },
    ],
  },
];

export default function LocacaoSection() {
  return (
    <section className="bg-[#F5F5F7] section-py">
      <div className="site-container">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-0.5 bg-[#CC0000]" />
            <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
              Nossa Especialidade
            </span>
          </div>
          <h2 className="heading-lg font-display tracking-wide leading-none mb-5">
            <span className="text-[#1C1C1E]">Locação de Empilhadeiras </span>
            <span className="text-[#CC0000]">Sob Medida</span>
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl leading-relaxed">
            Locação spot ou longo prazo, empilhadeira nova ou usada. Você
            escolhe o que faz sentido. Manutenção inclusa em todos os contratos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#CC0000]/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Imagem */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                />
              </div>

              {/* Texto abaixo */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-0.5 bg-[#CC0000]" />
                  <span className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest">
                    {card.badge}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#1C1C1E] tracking-wide leading-tight mb-3">
                  {card.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {card.chips.map((chip) => (
                    <Chip key={chip.label} icon={chip.icon} label={chip.label} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Gostaria%20de%20solicitar%20uma%20cotação%20de%20locação%20de%20empilhadeira.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Solicitar cotação de locação
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
