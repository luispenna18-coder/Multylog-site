
export type Category =
  | "retratil"
  | "contrabalancada"
  | "patolada"
  | "transpaleteira"
  | "plataforma-elevatoria"
  | "selecionadora"
  | "rebocador";

export interface Product {
  id: string;
  name: string;
  category: Category;
  capacity: string;
  liftHeight?: string;
  energy?: string;
  image: string;
  imagePadding?: string;
  imageBlend?: boolean;
  featured?: boolean;
  available?: ("locacao" | "venda")[];
  // Detail page fields
  description?: string;
  gallery?: string[];
  speed?: string;
  intensityOfUse?: string;
  applicationType?: string;
  controlType?: string;
  brand?: string;
  datasheet?: string; // PDF ficha técnica URL
}

const BRAND_ORDER: Record<string, number> = { STILL: 0, Linde: 1, Baoli: 2, Skyjack: 3 };

export const PRODUCTS: Product[] = ([
  // ── RETRÁTIL ──────────────────────────────────────────────────────
  {
    id: "fmx-17-20",
    name: "FM-X 17/20",
    category: "retratil",
    capacity: "1.700 – 2.000 kg",
    liftHeight: "até 13.000 mm",
    energy: "Elétrica",
    image: "/images/machines/fmx-17-20/principal.webp",
    imagePadding: "p-2",
    featured: true,
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "10 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador Sentado",
    description:
      "A FM-X 17/20 é a empilhadeira retrátil elétrica de última geração da STILL, fabricada no Brasil. Com capacidade residual excepcional, controles ergonômicos precisos e excelente visibilidade, permite armazenagem em elevações de até 13 metros em corredores estreitos. Velocidade de deslocamento de 14 km/h e capacidades de bateria de 456 a 912 Ah garantem alta produtividade e baixo custo operacional.",
    gallery: [
      "/images/machines/fmx-17-20/01-reach-trucks-fm-x-usecase-2.webp",
      "/images/machines/fmx-17-20/02-still-gallery-fm-x14-einsatz-2025-02-1-4096x2160.jpg",
      "/images/machines/fmx-17-20/03-still-gallery-fm-x14-einsatz-2025-04-2-4096-2160.jpg",
      "/images/machines/fmx-17-20/04-still-gallery-fm-x-einsatz-2025-01-3-4096x2160.jpg",
      "/images/machines/fmx-17-20/05-still-gallery-fm-x14-einsatz-2025-03-2-4096x2160.jpg",
      "/images/machines/fmx-17-20/06-still-gallery-fm-x-heckdiagonale-1-4096x2160.jpg",
      "/images/machines/fmx-17-20/07-still-gallery-fm-x-arbeitsplatz-3-2-4096x2160.jpg",
    ],
    datasheet: "/datasheets/fmx-17-20.pdf",
  },

  // ── CONTRABALANÇADA ───────────────────────────────────────────────
  {
    id: "rce-20-25",
    name: "RCE 20-25",
    category: "contrabalancada",
    capacity: "2.000 – 2.500 kg",
    liftHeight: "até 6.500 mm",
    energy: "Elétrica",
    image: "/images/machines/rce-20-25/principal.webp",
    featured: true,
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "15 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga em Docas",
    controlType: "Operador Sentado",
    description:
      "A nova RCE elétrica estará sempre pronta quando houver trabalho a fazer. Motor trifásico potente, visibilidade panorâmica e elevação de 6,50 m para uso interno e externo. Bateria Li-Ion com carregamento descentralizado, cabine ergonômica com mini-alavancas integradas, display colorido e componentes expostos em aço — não plástico — para máxima durabilidade.",
    datasheet: "/datasheets/rce-20-25.pdf",
    gallery: [
      "/images/machines/rce-20-25/01-still-produkt-rce-25-35-einsatzslider-arbeitsplatz-4k.webp",
      "/images/machines/rce-20-25/02-still-br-produkt-rce-einsatzslider-frontansicht-4096x2160.webp",
      "/images/machines/rce-20-25/03-still-br-produkt-rce-einsatzslider-fussraum-4096x2160.webp",
      "/images/machines/rce-20-25/04-still-produkt-rce-25-35-einsatzslider-ladestation-4k.webp",
      "/images/machines/rce-20-25/05-still-br-produkt-rce-einsatzslider-heckansicht-4096x2160.webp",
      "/images/machines/rce-20-25/06-still-br-produkt-rce-einsatzslider-arbeitsplatz-4096x2160.webp",
    ],
  },
  {
    id: "rc-44-25c",
    name: "RC 44-25C",
    category: "contrabalancada",
    capacity: "2.500 kg",
    liftHeight: "até 6.375 mm",
    energy: "GLP",
    image: "/images/machines/rc-44-25c/principal.webp",
    imagePadding: "p-4",
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "20 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga em Docas",
    controlType: "Operador Sentado",
    description:
      "A RC 44-25C é a empilhadeira contrabalançada a GLP da STILL fabricada no Brasil, com capacidade de 2.500 kg e elevação de até 6.375 mm. Motor Nissan K21/K25 de alto desempenho, transmissão Powershift e sistema de controle eletrônico garantem produtividade máxima em operações contínuas de carga e descarga em docas e armazéns.",
    gallery: [
      "/images/machines/rc-44-25c/01-img-1916-728x450.jpg",
      "/images/machines/rc-44-25c/02-img-1930.jpg",
      "/images/machines/rc-44-25c/03-img-2046-728x450.jpg",
      "/images/machines/rc-44-25c/04-img-2073.jpg",
      "/images/machines/rc-44-25c/05-img-2085.jpg",
      "/images/machines/rc-44-25c/06-img-2393.jpg",
      "/images/machines/rc-44-25c/07-img-2399.jpg",
      "/images/machines/rc-44-25c/08-img-2400.jpg",
      "/images/machines/rc-44-25c/09-img-2402.jpg",
      "/images/machines/rc-44-25c/10-img-2411.jpg",
      "/images/machines/rc-44-25c/11-img-2419.jpg",
      "/images/machines/rc-44-25c/12-img-2443.jpg",
      "/images/machines/rc-44-25c/13-img-2463.jpg",
    ],
    datasheet: "/datasheets/rc-44-25c.pdf",
  },
  {
    id: "linde-h20-h35",
    name: "H20 – H35 (Linde)",
    category: "contrabalancada",
    capacity: "2.000 – 3.500 kg",
    liftHeight: "até 7.000 mm",
    energy: "GLP / Diesel",
    image: "/images/machines/linde-h20-h35.png",
    available: ["locacao", "venda"],
    brand: "Linde",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga em Docas",
    controlType: "Operador Sentado",
    description:
      "A linha H20-H35 da Linde é a escolha ideal para operações que exigem potência e versatilidade com motor a GLP ou Diesel. Projetada para uso em ambientes internos e externos, combina robustez industrial com ergonomia avançada e baixo custo operacional.",
    gallery: [
      "/images/machines/linde-h20-h35/01-ic-truck-h20-h35-truckspot-7120-002-16x9w640.jpg",
      "/images/machines/linde-h20-h35/02-ic-truck-h30-d-full-cab-00003-16x9w640.jpg",
      "/images/machines/linde-h20-h35/03-ic-truck-h20-h35-container-version-4100-002-16x9w640.jpg",
      "/images/machines/linde-h20-h35/04-ic-truck-h20-h35-air-conditioning-system-4400-001-16x9w640.jpg",
      "/images/machines/linde-h20-h35/05-1202-00-h25d-basic-web-00000-1x1w640.png",
      "/images/machines/linde-h20-h35/06-1202-00-h25d-basic-web-00018-1x1w640.png",
    ],
    datasheet: "/datasheets/linde-h20-h35.pdf",
  },
  {
    id: "linde-h50-h80",
    name: "H50 – H80 EVO (Linde)",
    category: "contrabalancada",
    capacity: "5.000 – 8.000 kg",
    liftHeight: "até 7.000 mm",
    energy: "GLP / Diesel",
    image: "/images/machines/linde-h50-h80.jpg",
    available: ["locacao", "venda"],
    brand: "Linde",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga em Docas",
    controlType: "Operador Sentado",
    description:
      "A linha H50-H80 EVO da Linde é projetada para cargas pesadas de 5 a 8 toneladas com motor a GLP ou Diesel. Oferece alta potência, estabilidade excepcional e ergonomia superior para operações exigentes em armazéns e docas de carga.",
    gallery: [
      "/images/machines/linde-h50-h80/01-br396-03-h50-h80evo-teaser-16x9w640.png",
      "/images/machines/linde-h50-h80/02-ic-truck-h50-d-full-cab-00003-16x9w640.jpg",
      "/images/machines/linde-h50-h80/03-smurfit-kappa-h50-lifting-paper-wood-4602-7985-cx-16x9w640.jpg",
      "/images/machines/linde-h50-h80/04-ic-truck-moving-construction-9571-16x9w640.jpg",
      "/images/machines/linde-h50-h80/05-ic-truck-stacking-paper-wood-3946-054-16x9w640.jpg",
      "/images/machines/linde-h50-h80/06-br396-h50-h80-1x1w640.png",
    ],
    datasheet: "/datasheets/linde-h50-h80.pdf",
  },
  {
    id: "kbg-25",
    name: "KBG 25 (Baoli)",
    category: "contrabalancada",
    capacity: "2.500 kg",
    liftHeight: "até 6.220 mm",
    energy: "GLP",
    image: "/images/machines/kbg-25/principal.webp",
    available: ["locacao", "venda"],
    brand: "Baoli",
    speed: "12 km/h",
    intensityOfUse: "Média",
    applicationType: "Carga/Descarga em Docas",
    controlType: "Operador Sentado",
    description:
      "A KBG 25 da Baoli é uma empilhadeira contrabalançada a GLP de 2.500 kg, robusta e econômica. Ideal para operações que exigem autonomia contínua sem depender de recarga elétrica. Combina confiabilidade, facilidade de manutenção e excelente custo-benefício.",
    gallery: [
      "/images/machines/kbg-25/01-baoli-kbg25-073-white-2048x1582.jpg",
      "/images/machines/kbg-25/02-ic-features-01.jpg",
      "/images/machines/kbg-25/03-ic-features-03.jpg",
      "/images/machines/kbg-25/04-ic-features-04.jpg",
      "/images/machines/kbg-25/05-ic-features-05.jpg",
      "/images/machines/kbg-25/06-ic-features-06.jpg",
    ],
  },
  {
    id: "kbd-25-35",
    name: "KBD 25-35 (Baoli)",
    category: "contrabalancada",
    capacity: "2.500 – 3.500 kg",
    liftHeight: "até 6.000 mm",
    energy: "Diesel",
    image: "/images/machines/kbd-25-35/principal.webp",
    available: ["locacao", "venda"],
    brand: "Baoli",
    intensityOfUse: "Média",
    applicationType: "Carga/Descarga em Docas",
    controlType: "Operador Sentado",
    description:
      "A linha KBD 25-35 da Baoli oferece empilhadeiras a Diesel de 2.500 a 3.500 kg, projetadas para operações em ambientes externos e pisos irregulares. Robustez e economia operacional para os mais variados setores industriais.",
    gallery: [
      "/images/machines/kbd-25-35/01-2-0-3-5t-4.jpg",
      "/images/machines/kbd-25-35/02-2-0-3-5t-2.jpg",
      "/images/machines/kbd-25-35/03-2-0-3-5t-1.jpg",
      "/images/machines/kbg-25/02-ic-features-01.jpg",
      "/images/machines/kbg-25/03-ic-features-03.jpg",
      "/images/machines/kbg-25/04-ic-features-04.jpg",
      "/images/machines/kbg-25/05-ic-features-05.jpg",
      "/images/machines/kbg-25/06-ic-features-06.jpg",
    ],
  },
  {
    id: "kbd-70",
    name: "KBD 70 (Baoli)",
    category: "contrabalancada",
    capacity: "7.000 kg",
    energy: "Diesel",
    image: "/images/machines/baoli-kbd70.jpg",
    imagePadding: "p-10",
    available: ["locacao", "venda"],
    brand: "Baoli",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga em Docas",
    controlType: "Operador Sentado",
    description:
      "A KBD 70 da Baoli é uma empilhadeira a Diesel de alta capacidade para 7.000 kg. Ideal para movimentação de cargas pesadas em armazéns, portos e indústrias. Alta robustez e potência para os ambientes mais exigentes.",
    gallery: [
      "/images/machines/kbg-25/02-ic-features-01.jpg",
      "/images/machines/kbg-25/03-ic-features-03.jpg",
      "/images/machines/kbg-25/04-ic-features-04.jpg",
      "/images/machines/kbg-25/05-ic-features-05.jpg",
      "/images/machines/kbg-25/06-ic-features-06.jpg",
    ],
  },

  // ── PATOLADA ──────────────────────────────────────────────────────
  {
    id: "egv-16-ng",
    name: "EGV 16 NG",
    category: "patolada",
    capacity: "1.600 kg",
    liftHeight: "até 5.466 mm",
    energy: "Elétrica",
    image: "/images/machines/egv-16-ng/principal.webp",
    featured: true,
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "6 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador em Pé",
    description:
      "Desenvolvida pela STILL do Brasil para movimentação vertical de cargas leves a médias em pequenas e médias alturas. Elevação de até 5.466 mm com mastro triplex, remoção lateral de bateria com segurança aprimorada e direção leve e precisa para manobras em espaços confinados.",
    gallery: [
      "/images/machines/egv-16-ng/01-still-rollout-exv-14-20-einsatzbilder-4096x2160-einsatz-compositing-1.webp",
      "/images/machines/egv-16-ng/02-still-rollout-exv-14-20-einsatzbilder-4096x2160-einsatz-compositing-3.webp",
      "/images/machines/egv-16-ng/03-still-rollout-exv-14-20-einsatzbilder-4096x2160-einsatz-deichsel.webp",
      "/images/machines/egv-16-ng/04-still-rollout-exv-14-20-einsatzbilder-4096x2160-deichsel-ru-ck.webp",
      "/images/machines/egv-16-ng/05-still-rollout-exv-14-20-einsatbzilder-4096x2160-frontdiagonale-links-angehoben-links.webp",
      "/images/machines/egv-16-ng/06-still-rollout-exv-14-20-toogle-1440x960-heckansicht.webp",
    ],
    datasheet: "/datasheets/egv-16-ng.pdf",
  },
  {
    id: "egv16-sf",
    name: "EGV 16 SF",
    category: "patolada",
    capacity: "1.600 kg",
    liftHeight: "até 5.997 mm",
    energy: "Elétrica",
    image: "/images/machines/egv16-sf/principal.webp",
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "6 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador em Pé",
    description:
      "Paleteira elétrica para operador em pé com plataforma dobrável e proteção lateral rebatível. Alta precisão em espaços reduzidos, conceito de operador embarcado a 6,2 km/h e tecnologia Li-Ion para alta disponibilidade. Tração AC e direção elétrica para cargas de até 1.600 kg.",
    gallery: [
      "/images/machines/egv16-sf/01-high-lift-pallet-trucks-exv-sf-usecase-1.jpg",
      "/images/machines/egv16-sf/02-high-lift-pallet-trucks-exv-sf-usecase-2.jpg",
      "/images/machines/egv16-sf/03-high-lift-pallet-trucks-exv-sf-usecase-3.jpg",
      "/images/machines/egv16-sf/04-high-lift-pallet-trucks-exv-sf-frontview.jpg",
      "/images/machines/egv16-sf/05-high-lift-pallet-trucks-exv-sf-backview.jpg",
      "/images/machines/egv16-sf/06-high-lift-pallet-trucks-exv-sf-sideview-lifted.jpg",
    ],
    datasheet: "/datasheets/egv16-sf.pdf",
  },

  // ── TRANSPALETEIRA ────────────────────────────────────────────────
  {
    id: "erx-27",
    name: "ERX 27",
    category: "transpaleteira",
    capacity: "2.700 kg",
    energy: "Elétrica",
    image: "/images/machines/erx-27/principal.webp",
    featured: true,
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "6 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador em Pé",
    description:
      "Paleteira elétrica que combina ergonomia, agilidade e robustez. Ideal para movimentação horizontal de materiais e carga/descarga de caminhões e contêineres, incluindo docas niveladoras. Bloqueio de bateria com sensor, potente motor AC de corrente em cadeia e direção elétrica precisa.",
    gallery: [
      "/images/machines/erx-27/01-erx-2359-728x450.jpg",
      "/images/machines/erx-27/02-erx-2367-728x450.jpg",
      "/images/machines/erx-27/03-erx-2231-728x450.jpg",
      "/images/machines/erx-27/04-erx-2373-728x450.jpg",
      "/images/machines/erx-27/05-erx-2375-728x450.jpg",
      "/images/machines/erx-27/06-erx-2260-728x450.jpg",
      "/images/machines/erx-27/07-erx-2263-728x450.jpg",
      "/images/machines/erx-27/08-erx-2296-728x450.jpg",
      "/images/machines/erx-27/09-erx-2366-728x450.jpg",
    ],
    datasheet: "/datasheets/erx-27.pdf",
  },
  {
    id: "exh-20",
    name: "EXH 20",
    category: "transpaleteira",
    capacity: "2.000 kg",
    energy: "Elétrica (Lítio-Íon)",
    image: "/images/machines/exh-20/principal.webp",
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "6 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador em Pé",
    description:
      "Compacta e versátil para aplicações exigentes. A EXH 20 tem ergonomia única no guidão com controles intuitivos para operação com uma mão. Display LED touch integrado. O OptiSpeed ajusta automaticamente a velocidade conforme o ângulo do guidão para transporte seguro em alta velocidade e manobras cuidadosas em corredores estreitos.",
    gallery: [
      "/images/machines/exh-20/01-still-produkt-exh-14-20-galerie-einsatz-01-4k.webp",
      "/images/machines/exh-20/02-still-produkt-exh-14-20-galerie-einsatz-02-4k.webp",
      "/images/machines/exh-20/03-still-produkt-exh-14-20-galerie-ablagefach-batteriehaube-01-4k.webp",
      "/images/machines/exh-20/04-still-produkt-exh-14-20-galerie-zubehoerbuegel-4k.webp",
      "/images/machines/exh-20/05-still-produkt-exh-14-20-einsatz-slider-detailaufnahme-deichsel-4k.webp",
      "/images/machines/exh-20/06-still-produkt-exh-14-20-einsatz-slider-einsatz-4k.webp",
      "/images/machines/exh-20/07-still-produkt-exh-14-20-einsatz-slider-touch-display-4k.webp",
    ],
    datasheet: "/datasheets/exh-20.pdf",
  },
  {
    id: "exh-sf-20",
    name: "EXH-SF 20",
    category: "transpaleteira",
    capacity: "1.600 – 2.000 kg",
    liftHeight: "até 125 mm",
    energy: "Elétrica",
    image: "/images/machines/exh-sf-20/principal.webp",
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "8 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador em Pé",
    description:
      "Agilidade e operação intuitiva elevadas a uma nova dimensão. A EXH-SF 20 é o assistente inteligente para transporte horizontal de cargas com plataforma dobrável para operador embarcado. Direção elétrica, guidão inovador com display LED integrado, Curve Speed Control e tecnologia Li-Ion com carregamento rápido nas pausas operacionais.",
    gallery: [
      "/images/machines/exh-sf-20/01-still-produkt-exh-sf-16-20c-content-sef-einbauladegeraet-1440x960.webp",
      "/images/machines/exh-sf-20/02-still-produkt-exh-sf-16-20c-content-sef-batterie-haube-1440x960.webp",
      "/images/machines/exh-sf-20/03-still-produkt-exh-sf-16-20c-content-sef-deichsel-led-display-1440x960.webp",
      "/images/machines/exh-sf-20/04-still-produkt-exh-sf-16-20c-einsatz-slider-deichsel-led-display-4k.webp",
      "/images/machines/exh-sf-20/05-still-produkt-exh-sf-16-20c-einsatz-slider-vogelperspektive-4k.webp",
      "/images/machines/exh-sf-20/06-still-produkt-exh-sf-16-20c-einsatz-slider-seitenbuegel-4k.webp",
      "/images/machines/exh-sf-20/07-still-produkt-exh-sf-16-20c-einsatz-slider-on-board-charger-4k.webp",
    ],
    datasheet: "/datasheets/exh-sf-20.pdf",
  },
  {
    id: "ech-20",
    name: "ECH 20",
    category: "transpaleteira",
    capacity: "1.500 kg",
    energy: "Elétrica",
    image: "/images/machines/ech-20/principal.webp",
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "4 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador em Pé",
    description:
      "A alternativa ideal de paleteira elétrica compacta. Com dimensões reduzidas e peso operacional de apenas 115 kg, é a parceira perfeita para transporte horizontal em rotas curtas e espaços confinados. Bateria de íon-lítio para carregamento completo ou parcial a qualquer momento, sem fadiga do operador.",
    gallery: [
      "/images/machines/ech-20/01-still-produkt-ech-12c-15c-antriebsrad-4096x2160.jpg",
      "/images/machines/ech-20/02-still-produkt-ech-12c-15c-rollen-doppelt-4096x2160.jpg",
      "/images/machines/ech-20/03-still-produkt-ech-12c-15c-rollen-einfach-4096x2160.jpg",
      "/images/machines/ech-20/04-still-produkt-ech-15c-schleichfahrt-1-4096x2160.jpg",
      "/images/machines/ech-20/05-still-produkt-ech-15c-batteriewechsel-2-4096x2160.webp",
      "/images/machines/ech-20/06-ech-15c-heckdiagonale-zoom-4094x2160.webp",
    ],
    datasheet: "/datasheets/ech-20.pdf",
  },
  {
    id: "linde-t20-t25",
    name: "T20 – T25 SP (Linde)",
    category: "transpaleteira",
    capacity: "2.000 – 2.500 kg",
    energy: "Elétrica",
    image: "/images/machines/linde-t20-t25.png",
    available: ["locacao", "venda"],
    brand: "Linde",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador em Pé",
    description:
      "A linha T20-T25 SP da Linde são paleteiras elétricas de alta performance para cargas de 2.000 a 2.500 kg. Combinam robustez, ergonomia e eficiência energética para operações intensas em armazéns e centros de distribuição.",
    gallery: [
      "/images/machines/linde-t20-t25/01-br1154-01-t20sr-00000-1x1w640.png",
      "/images/machines/linde-t20-t25/02-br1154-01-t20sr-00009-1x1w640.png",
      "/images/machines/linde-t20-t25/03-br1154-01-t20sr-00018-1x1w640.png",
      "/images/machines/linde-t20-t25/04-br1154-01-t20r-00000-1x1w640.png",
      "/images/machines/linde-t20-t25/05-br1154-01-t20r-00009-1x1w640.png",
      "/images/machines/linde-t20-t25/06-schenker-e-truck-connect-1-16x9w640.jpg",
    ],
    datasheet: "/datasheets/linde-t20-t25.pdf",
  },

  // ── SELECIONADORA DE PEDIDOS ──────────────────────────────────────
  {
    id: "opx-25",
    name: "OPX 25",
    category: "selecionadora",
    capacity: "2.500 kg",
    liftHeight: "até 2.800 mm",
    energy: "Elétrica (24 V / 620 Ah)",
    image: "/images/machines/opx-25/principal.webp",
    imagePadding: "p-4",
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "12 km/h",
    intensityOfUse: "Alta",
    applicationType: "Seleção de Pedidos Horizontal",
    controlType: "Operador em Pé / Pedestre",
    description:
      "A OPX 25 é a selecionadora de pedidos horizontal elétrica da STILL para cargas de até 2.500 kg. Motor AC trifásico de 3 kW de baixa manutenção, velocidade de até 12 km/h (14 km/h na versão Plus) e raio de giro de 2.893 mm para operação em corredores estreitos. Plataforma opcionalmente elevável até 2,80 m para picking em altura, amortecimento pneumático opcional e modo pedestre para áreas de alta densidade. Bateria chumbo-ácido com troca lateral ou Li-Ion para operação 24h. O Curve Speed Control reduz automaticamente a velocidade em curvas, enquanto o modo Blue-Q economiza até 9% de energia.",
    gallery: [
      "/images/machines/opx-25/01-opx-25-dynamik-eurospin-1-2-2017.jpg",
      "/images/machines/opx-25/02-opx-25-eurospin-2017.jpg",
      "/images/machines/opx-25/03-opx-25-mitgaengerfunktion-eurospin-2017.jpg",
      "/images/machines/opx-25/04-opx-25-wendigkeit-1-eurospin-2017.jpg",
      "/images/machines/opx-25/05-opx-25-anwendung-1-1-2017.jpg",
      "/images/machines/opx-25/06-opx-25-anwendung-1-3-2017.jpg",
      "/images/machines/opx-25/07-opx-20-arbeitsplatz-2017.jpg",
    ],
    datasheet: "/datasheets/opx-25.pdf",
  },

  // ── PLATAFORMA ELEVATÓRIA ─────────────────────────────────────────
  {
    id: "sj4726-32-e",
    name: "SJ4726/32 E",
    category: "plataforma-elevatoria",
    capacity: "318 – 454 kg",
    liftHeight: "até 11,48 m",
    energy: "Elétrica (Bateria CC)",
    image: "/images/machines/sj4726-32-e/principal.jpg",
    imagePadding: "p-4",
    gallery: [
      "/images/machines/sj4726-32-e/01-sj4726e-360-0001.png",
      "/images/machines/sj4726-32-e/02-sj4726e-360-0004.png",
      "/images/machines/sj4726-32-e/03-sj4726e-360-0007.png",
      "/images/machines/sj4726-32-e/04-sj4726e-360-0010.png",
      "/images/machines/sj4726-32-e/05-sj4726e-360-0013.png",
    ],
    featured: true,
    available: ["locacao"],
    brand: "Skyjack",
    speed: "3,4 km/h",
    intensityOfUse: "Alta",
    applicationType: "Trabalho em Altura",
    controlType: "Operador na Plataforma",
    description:
      "Plataforma de tesoura elétrica disponível em dois modelos: SJ4726 E (altura de trabalho 9,65 m, até 3 ocupantes e 454 kg) e SJ4732 E (altura de trabalho 11,48 m, até 2 ocupantes e 318 kg). Largura compacta de 1,20 m com extensão de plataforma de 1,22 m, sistema de controle SKYCODED com fiação numerada e codificada por cores para fácil manutenção. Inclinação máxima de 25%, pneus pneumáticos 16×5×12 e classificação ECO por ser 100% elétrica.",
    datasheet: "/datasheets/sj4726-32-e.pdf",
  },

  // ── REBOCADORES ───────────────────────────────────────────────────
  {
    id: "ltx-50",
    name: "LTX 50",
    category: "rebocador",
    capacity: "Reboque: 5.000 kg",
    energy: "Elétrica (24 V / Li-Ion disponível)",
    image: "/images/machines/ltx-50/principal.webp",
    imagePadding: "p-4",
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "14 km/h",
    intensityOfUse: "Alta",
    applicationType: "Reboque de Trailers em Linha de Produção",
    controlType: "Operador em Pé",
    description:
      "O LTX 50 é o rebocador elétrico stand-on da STILL para instalações de produção e centros de distribuição, com capacidade de reboque de até 5.000 kg. Motores trifásicos potentes garantem alto desempenho de tração em velocidades constantes. O volante STILL Easy Drive com display integrado oferece controles totalmente intuitivos sem necessidade de mudar a empunhadura. O modo pedestre elimina o embarque e desembarque frequente em rotas curtas. Plataforma com amortecimento pneumático opcional, troca lateral de bateria e tecnologia Li-Ion para disponibilidade 24h. O Curve Speed Control reduz automaticamente a velocidade em curvas para segurança máxima, e a luz de segurança STILL Safety Light alerta outros operadores sobre a presença do veículo.",
    gallery: [
      "/images/machines/ltx-50/01-still-br-produkt-ltx-50-website-footer-2400x1492.webp",
      "/images/machines/ltx-50/02-still-br-produkt-ltx-50-website-usp-1340x1340.webp",
      "/images/machines/ltx-50/03-still-produkt-ltx-50-content-simply-efficient-01-1440x960.webp",
      "/images/machines/ltx-50/04-still-produkt-ltx-50-content-simply-efficient-02-1440x960.webp",
    ],
    datasheet: "/datasheets/ltx-50.pdf",
  },

] as Product[]).sort(
  (a, b) => (BRAND_ORDER[a.brand ?? ""] ?? 99) - (BRAND_ORDER[b.brand ?? ""] ?? 99)
);

export const CATEGORY_LABELS: Record<Category, string> = {
  retratil: "Retrátil",
  contrabalancada: "Contrabalançada",
  patolada: "Patolada",
  transpaleteira: "Transpaleteira",
  "plataforma-elevatoria": "Plataforma Elevatória",
  selecionadora: "Selecionadora de Pedidos",
  rebocador: "Rebocador",
};

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);
