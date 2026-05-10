
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
    image: "https://data.still.de/assets/products/Vehicles/Reach_Trucks/FM-X_17_20/images/STILL_BR_Product_FMX_800x800.png?w=1920&fit=max&fm=webp&s=6513f7ed80c85c9271e14debcc88ebc9",
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
      "https://data.still.de/assets/products/Vehicles/Reach_Trucks/FM-X/images/reach-trucks_FM-X_usecase-2.jpg?w=1920&fit=max&fm=webp&s=3efa2eed7825d2768104380921dc077e",
      "https://data.still.de/assets/products/Vehicles/Reach_Trucks/FM-X/images/STILL_Gallery_FM-X14-Einsatz-2025-02-1_4096x2160.jpg?w=1600&h=1200&fit=max&s=2be106886a08e1b2f4faecda177dcf41",
      "https://data.still.de/assets/products/Vehicles/Reach_Trucks/FM-X/images/STILL_Gallery_FM-X14-Einsatz-2025-04-2_4096_2160.jpg?w=1600&h=1200&fit=max&s=9b6289dfe4b70763fbb5b20758836f3c",
      "https://data.still.de/assets/products/Vehicles/Reach_Trucks/FM-X/images/STILL_Gallery_FM-X_Einsatz-2025-01-3_4096x2160.jpg?w=1600&h=1200&fit=max&s=1e79914f5e4891a4d1f3942f3a27eb99",
      "https://data.still.de/assets/products/Vehicles/Reach_Trucks/FM-X/images/STILL_Gallery_FM-X14-Einsatz-2025-03-2_4096x2160.jpg?w=1600&h=1200&fit=max&s=c161b67d8877a833c787505491992af1",
      "https://data.still.de/assets/products/Vehicles/Reach_Trucks/FM-X/images/STILL_Gallery_FM-X_Heckdiagonale-1_4096x2160.jpg?w=1600&h=1200&fit=max&s=d90661cd2c613d4404ae89db43129bd5",
      "https://data.still.de/assets/products/Vehicles/Reach_Trucks/FM-X/images/STILL_Gallery_FM-X_Arbeitsplatz-3-2_4096x2160.jpg?w=1600&h=1200&fit=max&s=c46adec3c8dfa52bfe0b9b9ab2bdeb90",
    ],
    datasheet: "https://data.still.de/assets/products/Vehicles/Reach_Trucks/FM-X_17_20/pdfs/FMX_17_20_BR_TD.pdf?mod=1636554239&download=1&s=c155efcd0469a04a088376ab36a664ad",
  },

  // ── CONTRABALANÇADA ───────────────────────────────────────────────
  {
    id: "rce-20-25",
    name: "RCE 20-25",
    category: "contrabalancada",
    capacity: "2.000 – 2.500 kg",
    liftHeight: "até 6.500 mm",
    energy: "Elétrica",
    image: "https://data.still.de/assets/products/Vehicles/Electric_Forklift_Trucks/RCE_25_35/images/STILL_Fahrzeuge_Elektro-Stapler_RCE_25-35_Teaser_800x800.png?w=1920&fit=max&fm=webp&s=32f2da67ef189857a69d1eb39a8dacb5",
    featured: true,
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "15 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga em Docas",
    controlType: "Operador Sentado",
    description:
      "A nova RCE elétrica estará sempre pronta quando houver trabalho a fazer. Motor trifásico potente, visibilidade panorâmica e elevação de 6,50 m para uso interno e externo. Bateria Li-Ion com carregamento descentralizado, cabine ergonômica com mini-alavancas integradas, display colorido e componentes expostos em aço — não plástico — para máxima durabilidade.",
    datasheet: "https://data.still.de/assets/products/Vehicles/Electric_Forklift_Trucks/RCE_20-25_BR/pdf/RCE_20-25_BR_TD.pdf?mod=1733139936&download=1&s=c88050df08a60830b436ad47ab05b91b",
    gallery: [
      "https://data.still.de/assets/products/Vehicles/Electric_Forklift_Trucks/RCE_20-25_BR/images/STILL_BR_Produkt_RCE_Galerie_Arbeitsplatz_4096x2160.jpg?w=1920&fit=max&fm=webp&s=0c4c5fb1b0c27fb9da1583faca4b2d9b",
      "https://data.still.de/assets/products/Vehicles/Electric_Forklift_Trucks/RCE_20-25_BR/images/STILL_BR_Produkt_RCE_Einsatzslider_Frontansicht_4096x2160.jpg?w=1920&fit=max&fm=webp&s=99abba841b020e817686191350ad50a5",
      "https://data.still.de/assets/products/Vehicles/Electric_Forklift_Trucks/RCE_20-25_BR/images/STILL_BR_Produkt_RCE_Galerie_Fussraum_4096x2160.jpg?w=1920&fit=max&fm=webp&s=34c0186dbcfadfffac5a015e9959fb98",
      "https://data.still.de/assets/products/Vehicles/Electric_Forklift_Trucks/RCE_20-25_BR/images/STILL_BR_Produkt_RCE_Galerie_Heckansicht_4096x2160.jpg?w=1920&fit=max&fm=webp&s=aadd7801f3c0b080599e55fa671016bb",
      "https://data.still.de/assets/products/Vehicles/Electric_Forklift_Trucks/RCE_20-25_BR/images/STILL_BR_Produkt_RCE_Einsatzslider_Heckansicht_4096x2160.jpg?w=1920&fit=max&fm=webp&s=e283a92892c7b7ab834add05d5719fd1",
      "https://data.still.de/assets/products/Vehicles/Electric_Forklift_Trucks/RCE_20-25_BR/images/STILL_BR_Produkt_RCE_Einsatzslider_Arbeitsplatz_4096x2160.jpg?w=1920&fit=max&fm=webp&s=e3649218c8ae0ab3d6e8f087877d8b40",
    ],
  },
  {
    id: "rc-44-25c",
    name: "RC 44-25C",
    category: "contrabalancada",
    capacity: "2.500 kg",
    liftHeight: "até 6.375 mm",
    energy: "GLP",
    image: "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44-25_C/images/RC_44_-_Studio_800x800.png?w=1920&fit=max&fm=webp&s=aaf7de2d0a8470e30ae2411708fe7d9f",
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
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_1916_728x450.jpg?w=1600&h=1200&fit=max&s=cf69d69e28c44c6ce41fa41c0c6e600c",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_1930.jpg?w=1600&h=1200&fit=max&s=de66742bdcae737e4dee86cdcc0cd8f8",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_2046_728x450.jpg?w=1600&h=1200&fit=max&s=305b22d136368af2b05935cf0bdf285d",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_2073.jpg?w=1600&h=1200&fit=max&s=8c7e2a56478fe15673dce02b5654dc15",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_2085.jpg?w=1600&h=1200&fit=max&s=d297a73b81b6b7d91f6c88fee253143e",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_2393.jpg?w=1600&h=1200&fit=max&s=3d20a9f9a9adafde96ecefc4e8f5dfb6",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_2399.jpg?w=1600&h=1200&fit=max&s=9cf60cba127eca73ef1f828adfedf743",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_2400.jpg?w=1600&h=1200&fit=max&s=ae59b0f0531d4d06b4abc5200ca2f2cf",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_2402.jpg?w=1600&h=1200&fit=max&s=3a66650772b2476835674068292a75a1",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_2411.jpg?w=1600&h=1200&fit=max&s=61cc2c84bc7021a339d19d0013ec614d",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_2419.jpg?w=1600&h=1200&fit=max&s=839be26ea03d289bef134bdb097facc6",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_2443.jpg?w=1600&h=1200&fit=max&s=90346b65ac27a0c079cd99677b4d0b88",
      "https://data.still.de/assets/products/Vehicles/Diesel_And_LP_Gas_Forklift_Trucks/RC_44/images/IMG_2463.jpg?w=1600&h=1200&fit=max&s=4dfef77f67c84f5854713805cf902c1c",
    ],
    datasheet: "https://www.transpotech.com.br/wp-content/uploads/2020/04/NR0002327636_Lamina_RC44_25C_10.21_VV.pdf",
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
      "https://www.linde-mh.com/media/Global-Content/01-Products/02_IC-Trucks_V-Stapler/02_Features_1/ic_truck-H20_H35-truckspot-7120_002_16x9w640.jpg",
      "https://www.linde-mh.com/media/Global-Content/01-Products/02_IC-Trucks_V-Stapler/02_Features_1/ic_truck-H30_D-full_cab-00003_16x9w640.jpg",
      "https://www.linde-mh.com/media/Global-Content/01-Products/02_IC-Trucks_V-Stapler/02_Features_1/ic_truck-H20_H35-container_version-4100_002_16x9w640.jpg",
      "https://www.linde-mh.com/media/Global-Content/01-Products/02_IC-Trucks_V-Stapler/02_Features_1/ic_truck-H20_H35-air_conditioning_system-4400_001_16x9w640.jpg",
      "https://www.linde-mh.com/media/3D_Product/turntables/02_IC-Trucks/BR1202_H25D/1202_00_H25D_BASIC_WEB_00000_1x1w640.png",
      "https://www.linde-mh.com/media/3D_Product/turntables/02_IC-Trucks/BR1202_H25D/1202_00_H25D_BASIC_WEB_00018_1x1w640.png",
    ],
    datasheet: "https://verticalempilhadeiras.com.br/wp-content/uploads/2025/05/Empilhadeira-Linde-H20-%E2%80%93-H35.pdf",
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
      "https://www.linde-mh.com/media/3D_Product/Teaser/BR396-03_H50-H80EVO_teaser_16x9w640.png",
      "https://www.linde-mh.com/media/Global-Content/01-Products/02_IC-Trucks_V-Stapler/02_Features_1/ic_truck-H50_D-full_cab-00003_16x9w640.jpg",
      "https://www.linde-mh.com/media/Global-Content/04-About-Linde/Magazine/Smurfit-Kappa/smurfit_kappa-H50-lifting-paper_wood-4602_7985_CX_16x9w640.jpg",
      "https://www.linde-mh.com/media/Global-Content/04-About-Linde/Magazine/Egger/ic_truck-moving-construction-9571_16x9w640.jpg",
      "https://www.linde-mh.com/media/Global-Content/03_Solutions_Loesungen/Applications/ic_truck-stacking-paper_wood_3946_054_16x9w640.jpg",
      "https://www.linde-mh.com/media/3D_Product/turntables/02_IC-Trucks/BR396_H50-H80_1x1w640.png",
    ],
    datasheet: "https://verticalempilhadeiras.com.br/wp-content/uploads/2025/05/Empilhadeira-Linde-H50-%E2%80%93-H80-EVO.pdf",
  },
  {
    id: "kbg-25",
    name: "KBG 25 (Baoli)",
    category: "contrabalancada",
    capacity: "2.500 kg",
    liftHeight: "até 6.220 mm",
    energy: "GLP",
    image: "https://data.still.de/assets/baoli/Products/Internal_combustion_trucks/KBD_25-35/Baoli_KBD_30_G1_1024x1024_rgb.png?w=1920&fit=max&fm=webp&s=bc4249ad789a702a5aadf1cb3c4f25ea",
    available: ["locacao", "venda"],
    brand: "Baoli",
    speed: "12 km/h",
    intensityOfUse: "Média",
    applicationType: "Carga/Descarga em Docas",
    controlType: "Operador Sentado",
    description:
      "A KBG 25 da Baoli é uma empilhadeira contrabalançada a GLP de 2.500 kg, robusta e econômica. Ideal para operações que exigem autonomia contínua sem depender de recarga elétrica. Combina confiabilidade, facilidade de manutenção e excelente custo-benefício.",
    gallery: [
      "https://baoli.com.br/wp-content/uploads/2023/04/Baoli-KBG25-073-White-2048x1582.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-01.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-03.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-04.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-05.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-06.jpg",
    ],
  },
  {
    id: "kbd-25-35",
    name: "KBD 25-35 (Baoli)",
    category: "contrabalancada",
    capacity: "2.500 – 3.500 kg",
    liftHeight: "até 6.000 mm",
    energy: "Diesel",
    image: "https://data.still.de/assets/baoli/Products/Internal_combustion_trucks/KBD_G_25-35_G1/Baoli_KBD_25_G1_3_Quarter_01.jpg?w=1920&fit=max&fm=webp&s=bedc91db3c6fccf2a0fc31aea818d66d",
    available: ["locacao", "venda"],
    brand: "Baoli",
    intensityOfUse: "Média",
    applicationType: "Carga/Descarga em Docas",
    controlType: "Operador Sentado",
    description:
      "A linha KBD 25-35 da Baoli oferece empilhadeiras a Diesel de 2.500 a 3.500 kg, projetadas para operações em ambientes externos e pisos irregulares. Robustez e economia operacional para os mais variados setores industriais.",
    gallery: [
      "https://baoli.com.br/wp-content/uploads/2022/11/2.0_3.5t_4.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/2.0_3.5t_2.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/2.0_3.5t_1.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-01.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-03.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-04.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-05.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-06.jpg",
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
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-01.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-03.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-04.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-05.jpg",
      "https://baoli.com.br/wp-content/uploads/2022/11/IC_features-06.jpg",
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
    image: "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EGV_16_NG/images/STILL_BR_Product_EGV_16_NG_Teaser_800x800.png?w=1920&fit=max&fm=webp&s=05dc690f6630fd829385495365cfd625",
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
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV_14-20/images/04_26/STILL_Rollout_EXV_14-20_Einsatzbilder_4096x2160_Einsatz_Compositing-1.jpg?w=1920&fit=max&fm=webp&s=996d4548ea8a08e6c867d8899e677ee6",
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV_14-20/images/04_26/STILL_Rollout_EXV_14-20_Einsatzbilder_4096x2160_Einsatz_Compositing-3.jpg?w=1920&fit=max&fm=webp&s=92f3904b02658c4d5e8f3c905066bab4",
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV_14-20/images/04_26/STILL_Rollout_EXV_14-20_Einsatzbilder_4096x2160_Einsatz_Deichsel.jpg?w=1920&fit=max&fm=webp&s=e375bbc085d86729e2a4904bc908dbeb",
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV_14-20/images/04_26/STILL_Rollout_EXV_14-20_Einsatzbilder_4096x2160_Deichsel-Ru__ck.jpg?w=1920&fit=max&fm=webp&s=7a69f00b13c00c4c544274e7c1a935a5",
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV_14-20/images/04_26/STILL_Rollout_EXV_14-20_Einsatbzilder_4096x2160_Frontdiagonale-links-angehoben_links.jpg?w=1920&fit=max&fm=webp&s=31d27c396bb255be77f925e1cd9b8c1d",
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV_14-20/images/04_26/STILL_Rollout_EXV_14-20_Toogle_1440x960_Heckansicht.jpg?w=1920&fit=max&fm=webp&s=9130544418c62c51a09aad3d1c6b91da",
    ],
    datasheet: "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/vorgaengermodelle/EGV_14-16/pdf/EGV-NG_16_PT_TD.pdf?mod=1733738135&download=1&s=221b4c465abc09194185a69bbfa785d2",
  },
  {
    id: "egv16-sf",
    name: "EGV 16 SF",
    category: "patolada",
    capacity: "1.600 kg",
    liftHeight: "até 5.997 mm",
    energy: "Elétrica",
    image: "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EGV-SF_16/images/STILL_BR_Product_EGV_16_SF_Teaser_800x800.png?w=1920&fit=max&fm=webp&s=b52d6e56b3163c29b0347bbc9eb84945",
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "6 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador em Pé",
    description:
      "Paleteira elétrica para operador em pé com plataforma dobrável e proteção lateral rebatível. Alta precisão em espaços reduzidos, conceito de operador embarcado a 6,2 km/h e tecnologia Li-Ion para alta disponibilidade. Tração AC e direção elétrica para cargas de até 1.600 kg.",
    gallery: [
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV-SF/images/high-lift-pallet-trucks_EXV-SF_usecase_1.jpg?w=1600&h=1200&fit=max&s=b1c25440affd233328a376185c92f392",
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV-SF/images/high-lift-pallet-trucks_EXV-SF_usecase_2.jpg?w=1600&h=1200&fit=max&s=d0cbdc03246e706ebf6d2dcb0893c790",
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV-SF/images/high-lift-pallet-trucks_EXV-SF_usecase_3.jpg?w=1600&h=1200&fit=max&s=682ab4aa67e4ac09989a93ba2d101e75",
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV-SF/images/high-lift-pallet-trucks_EXV-SF_frontview.jpg?w=1600&h=1200&fit=max&s=17628ce804c861a7413f316c7737827d",
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV-SF/images/high-lift-pallet-trucks_EXV-SF_backview.jpg?w=1600&h=1200&fit=max&s=c953344b75d2e053901ac8df98041c9c",
      "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EXV-SF/images/high-lift-pallet-trucks_EXV-SF_sideview-lifted.jpg?w=1600&h=1200&fit=max&s=9ecd44cfc94748c360f0868d10922a43",
    ],
    datasheet: "https://data.still.de/assets/products/Vehicles/High_Lift_Pallet_Trucks/EGV-SF_16/pdfs/EGV-SF_16_BR_TD.pdf?mod=1733841196&download=1&s=abe791cf5cc9a96dd0c56daf043fbe1f",
  },

  // ── TRANSPALETEIRA ────────────────────────────────────────────────
  {
    id: "erx-27",
    name: "ERX 27",
    category: "transpaleteira",
    capacity: "2.700 kg",
    energy: "Elétrica",
    image: "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/images/STILL_BR_Product_ERX_800x800.png?w=1920&fit=max&fm=webp&s=2ca63156be30408f55377cf493f968cf",
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
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/images/ERX_2359_728x450.jpg?w=380&h=300&fit=max&s=dfab51433726701830c7e04da1fbe300",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/images/ERX_2367_728x450.jpg?w=380&h=300&fit=max&s=6a760a44335be0aceddd96881393c279",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/images/ERX_2231_728x450.jpg?w=380&h=300&fit=max&s=4dbf085819654d14489c073a39e3b8ea",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/images/ERX_2373_728x450.jpg?w=380&h=300&fit=max&s=c4ee41631a7586e9c219da04e919c4d8",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/images/ERX_2375_728x450.jpg?w=380&h=300&fit=max&s=6fcced013482eeac199c91a4c555f3d8",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/images/ERX_2260_728x450.jpg?w=380&h=300&fit=max&s=8968fd49c935f4bf649c5fa1f8656107",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/images/ERX_2263_728x450.jpg?w=380&h=300&fit=max&s=ff141b2fe8526b311421567adac1ba6c",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/images/ERX_2296_728x450.jpg?w=380&h=300&fit=max&s=b3bc7b9479807dbd30e93e3ca264b314",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/images/ERX_2366_728x450.jpg?w=380&h=300&fit=max&s=c02b9e7fec6274c56298a5d3c6ca6cd8",
    ],
    datasheet: "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ERX_27/pdfs/ERX_BR_TD.pdf?mod=1648804133&download=1&s=4f96aa2f6f05ec77e447a048be49f4a7",
  },
  {
    id: "exh-20",
    name: "EXH 20",
    category: "transpaleteira",
    capacity: "2.000 kg",
    energy: "Elétrica (Lítio-Íon)",
    image: "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH_14-20_Plus/images/STILL_Produkt_EXH_14-20_Mobile_800x800.png?w=1920&fit=max&fm=webp&s=66f967c12f12eef150f8198b9ed8d979",
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "6 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador em Pé",
    description:
      "Compacta e versátil para aplicações exigentes. A EXH 20 tem ergonomia única no guidão com controles intuitivos para operação com uma mão. Display LED touch integrado. O OptiSpeed ajusta automaticamente a velocidade conforme o ângulo do guidão para transporte seguro em alta velocidade e manobras cuidadosas em corredores estreitos.",
    gallery: [
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH_14-20_Plus/images/STILL_Produkt_EXH_14-20_Galerie_Einsatz_01_4K.jpg?w=1920&fit=max&fm=webp&s=6d5286dbf7dc9f032cba07f04939d3b4",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH_14-20_Plus/images/STILL_Produkt_EXH_14-20_Galerie_Einsatz_02_4K.jpg?w=1920&fit=max&fm=webp&s=b3a67bfeeb743744fd6cd46d2872ce4b",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH_14-20_Plus/images/STILL_Produkt_EXH_14-20_Galerie_Ablagefach-Batteriehaube_01_4K.jpg?w=1920&fit=max&fm=webp&s=f25596a1d5df4ed768ded241729dd123",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH_14-20_Plus/images/STILL_Produkt_EXH_14-20_Galerie_Zubehoerbuegel_4K.jpg?w=1920&fit=max&fm=webp&s=70b00173f6e62c0e1c10610e74d8ab7d",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH_14-20_Plus/images/STILL_Produkt_EXH_14-20_Einsatz-Slider_Detailaufnahme-Deichsel_4K.jpg?w=1920&fit=max&fm=webp&s=4394f24ebcb0cf5ab0674f5c7e2fc140",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH_14-20_Plus/images/STILL_Produkt_EXH_14-20_Einsatz-Slider_Einsatz_4K.jpg?w=1920&fit=max&fm=webp&s=a3a62248f31889d93c6a72c1f6b1721a",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH_14-20_Plus/images/STILL_Produkt_EXH_14-20_Einsatz-Slider_Touch-Display_4K.jpg?w=1920&fit=max&fm=webp&s=b07e4e54dd94df3be363c0faa6df42c9",
    ],
    datasheet: "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH_14-20_Plus/pdf/EXH_20_BR_TD.pdf",
  },
  {
    id: "exh-sf-20",
    name: "EXH-SF 20",
    category: "transpaleteira",
    capacity: "1.600 – 2.000 kg",
    liftHeight: "até 125 mm",
    energy: "Elétrica",
    image: "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH-SF_16-20C/images/STILL_BR_Product_EXH-SF_20C_Teaser_800x800.png?w=1920&fit=max&fm=webp&s=d545af2dc3a7ee25ef35fba0a12ba574",
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "8 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador em Pé",
    description:
      "Agilidade e operação intuitiva elevadas a uma nova dimensão. A EXH-SF 20 é o assistente inteligente para transporte horizontal de cargas com plataforma dobrável para operador embarcado. Direção elétrica, guidão inovador com display LED integrado, Curve Speed Control e tecnologia Li-Ion com carregamento rápido nas pausas operacionais.",
    gallery: [
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH-SF_16-20C/images/STILL_Produkt_EXH-SF_16C-20C_Content_SEF_Einbauladegeraet_1440x960.jpg?w=1920&fit=max&fm=webp&s=a8b8c7abd1b4e1b40690a7857f9bcbf1",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH-SF_16-20C/images/STILL_Produkt_EXH-SF_16C-20C_Content_SEF_Batterie-Haube_1440x960.jpg?w=1920&fit=max&fm=webp&s=b91b61c214d15789eb517af7a85a478b",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH-SF_16-20C/images/STILL_Produkt_EXH-SF_16C-20C_Content_SEF_Deichsel_LED-Display_1440x960.jpg?w=1920&fit=max&fm=webp&s=85cd69a689c6abbfface7bc198225aea",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH-SF_16-20C/images/STILL_Produkt_EXH-SF_16-20C_Einsatz-Slider_Deichsel_LED-Display_4K.jpg?w=1920&fit=max&fm=webp&s=16c7cc8846cb1d8f0c90c93469ae4900",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH-SF_16-20C/images/STILL_Produkt_EXH-SF_16-20C_Einsatz-Slider_Vogelperspektive_4K.jpg?w=1920&fit=max&fm=webp&s=839164ea94877254a1d085f172c84e3b",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH-SF_16-20C/images/STILL_Produkt_EXH-SF_16-20C_Einsatz-Slider_Seitenbuegel_4K.jpg?w=1920&fit=max&fm=webp&s=ee32025ea7aaafff9f958dca8b651431",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH-SF_16-20C/images/STILL_Produkt_EXH-SF_16-20C_Einsatz-Slider_On-Board-Charger_4K.jpg?w=1920&fit=max&fm=webp&s=386ec249d0b2bb59830d012722c12d26",
    ],
    datasheet: "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/EXH-SF_16-20C/pdf/EXH-SF_20C_BR_TD.pdf?mod=1733389550&download=1&s=fd92f000b0b4ecde0297c2298c4a1b04",
  },
  {
    id: "ech-20",
    name: "ECH 20",
    category: "transpaleteira",
    capacity: "1.500 kg",
    energy: "Elétrica",
    image: "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ECH_12_C_15_C/images/STILL_Produkt_ECH-12C-15C_Mobile_800x800.png?w=1920&fit=max&fm=webp&s=e81a0d48061711c81bc6e6b454e62d7e",
    available: ["locacao", "venda"],
    brand: "STILL",
    speed: "4 km/h",
    intensityOfUse: "Alta",
    applicationType: "Carga/Descarga Lateral",
    controlType: "Operador em Pé",
    description:
      "A alternativa ideal de paleteira elétrica compacta. Com dimensões reduzidas e peso operacional de apenas 115 kg, é a parceira perfeita para transporte horizontal em rotas curtas e espaços confinados. Bateria de íon-lítio para carregamento completo ou parcial a qualquer momento, sem fadiga do operador.",
    gallery: [
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ECH_12_C_15_C/images/STILL_Produkt_ECH_12C_15C_Antriebsrad_4096x2160.jpg?w=380&h=300&fit=max&s=9788943f1a16b4d5061af6de41cfc7a4",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ECH_12_C_15_C/images/STILL_Produkt_ECH_12C_15C_Rollen-Doppelt_4096x2160.jpg?w=380&h=300&fit=max&s=766a64c579a706cfa9e3b992bdc68a42",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ECH_12_C_15_C/images/STILL_Produkt_ECH_12C_15C_Rollen-Einfach_4096x2160.jpg?w=380&h=300&fit=max&s=14111201cbf3fef4c62ceb9123ca5477",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ECH_12_C_15_C/images/STILL_Produkt_ECH-15C_Schleichfahrt-1_4096x2160.jpg?w=380&h=300&fit=max&s=1b6beb7cc78d63b0c03b14c632c98978",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ECH_12_C_15_C/images/STILL_Produkt_ECH_15C_Batteriewechsel-2_4096x2160.jpg?w=380&h=300&fit=max&s=6a67876d460e3dc75cb05dc6d403a377",
      "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ECH_12_C_15_C/images/ECH_15C-Heckdiagonale_Zoom_4094x2160.jpg?w=1920&fit=max&fm=webp&s=3a500297b26485fd61fcdd0c8e4c8a5a",
    ],
    datasheet: "https://data.still.de/assets/products/Vehicles/Low_Lift_Pallet_trucks/ECH_12_C_15_C/pdf/ECH_PRT_TD.pdf?mod=1755532902&download=1&s=163220830b06c4b153effb169c35b063",
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
      "https://www.linde-mh.com/media/3D_Product/turntables/03_Pallet_Trucks/BR1154-01_T20SR/BR1154-01_T20SR_00000_1x1w640.png",
      "https://www.linde-mh.com/media/3D_Product/turntables/03_Pallet_Trucks/BR1154-01_T20SR/BR1154-01_T20SR_00009_1x1w640.png",
      "https://www.linde-mh.com/media/3D_Product/turntables/03_Pallet_Trucks/BR1154-01_T20SR/BR1154-01_T20SR_00018_1x1w640.png",
      "https://www.linde-mh.com/media/3D_Product/turntables/03_Pallet_Trucks/BR1154-01_T20R/BR1154-01_T20R_00000_1x1w640.png",
      "https://www.linde-mh.com/media/3D_Product/turntables/03_Pallet_Trucks/BR1154-01_T20R/BR1154-01_T20R_00009_1x1w640.png",
      "https://www.linde-mh.com/media/Global-Content/04-About-Linde/Magazine/DB-Schenker/schenker_e_truck_connect-1_16x9w640.jpg",
    ],
    datasheet: "https://verticalempilhadeiras.com.br/wp-content/uploads/2025/05/Paleteira-Linde-T20-%E2%80%93-T25-FP.pdf",
  },

  // ── SELECIONADORA DE PEDIDOS ──────────────────────────────────────
  {
    id: "opx-25",
    name: "OPX 25",
    category: "selecionadora",
    capacity: "2.500 kg",
    liftHeight: "até 2.800 mm",
    energy: "Elétrica (24 V / 620 Ah)",
    image: "https://data.still.de/assets/products/Vehicles/Order_Pickers/OPX_20-25/images/OPX-20_800x800.png?w=1600&fit=max&fm=webp&s=def495baa6c47a388a037c0b5432cbe1",
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
      "https://data.still.de/assets/products/Vehicles/Order_Pickers/OPX_20-25/images/OPX-25_Dynamik_Eurospin_1-2_2017.jpg?w=1600&h=1200&fit=max&s=1ded53be63d34630c79c8de5ead5de1e",
      "https://data.still.de/assets/products/Vehicles/Order_Pickers/OPX_20-25/images/OPX-25_Eurospin_2017.jpg?w=1600&h=1200&fit=max&s=714f0f744b2ebb149e8e997d0410c8e3",
      "https://data.still.de/assets/products/Vehicles/Order_Pickers/OPX_20-25/images/OPX-25_Mitgaengerfunktion_Eurospin_2017.jpg?w=1600&h=1200&fit=max&s=6d8399d4216c43155da0d29cd88da8c6",
      "https://data.still.de/assets/products/Vehicles/Order_Pickers/OPX_20-25/images/OPX-25_Wendigkeit-1_Eurospin_2017.jpg?w=1600&h=1200&fit=max&s=8c2a751551cb1eefb175e6a5f2b1ddca",
      "https://data.still.de/assets/products/Vehicles/Order_Pickers/OPX_20-25/images/OPX_25_Anwendung_1-1_2017.jpg?w=1600&h=1200&fit=max&s=e38196e44fe9b5bb931e69951e1b4629",
      "https://data.still.de/assets/products/Vehicles/Order_Pickers/OPX_20-25/images/OPX_25_Anwendung_1-3_2017.jpg?w=1600&h=1200&fit=max&s=5b5cb3e9c1292ec34eae2e18b82c2575",
      "https://data.still.de/assets/products/Vehicles/Order_Pickers/OPX_20-25/images/OPX-20_Arbeitsplatz_2017.jpg?w=1600&h=1200&fit=max&s=c4a9475ffcdf87ada0f8d0a6c362018e",
    ],
    datasheet: "https://data.still.de/assets/products/Vehicles/Order_Pickers/OPX_20-25/pdfs/OPX_25_LTX_50_BR_Manual.pdf",
  },

  // ── PLATAFORMA ELEVATÓRIA ─────────────────────────────────────────
  {
    id: "sj4726-32-e",
    name: "SJ4726/32 E",
    category: "plataforma-elevatoria",
    capacity: "318 – 454 kg",
    liftHeight: "até 11,48 m",
    energy: "Elétrica (Bateria CC)",
    image: "https://www.fairchildequipment.com/wp-content/uploads/2021/05/skyjack-sj4726-sj4732-scissor-lift.jpg",
    imagePadding: "p-4",
    gallery: [
      "https://www.skyjack.com/sites/default/files/styles/max_650x650/public/2024-01/sj4726e_360_0001.png",
      "https://www.skyjack.com/sites/default/files/styles/max_650x650/public/2024-01/sj4726e_360_0004.png",
      "https://www.skyjack.com/sites/default/files/styles/max_650x650/public/2024-01/sj4726e_360_0007.png",
      "https://www.skyjack.com/sites/default/files/styles/max_650x650/public/2024-01/sj4726e_360_0010.png",
      "https://www.skyjack.com/sites/default/files/styles/max_650x650/public/2024-01/sj4726e_360_0013.png",
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
    datasheet: "https://www.onestoprent.com/wp-content/uploads/LIFT-19-20-26-x-32-500LB.-SCISSOR-OPERATION-MANUAL.pdf",
  },

  // ── REBOCADORES ───────────────────────────────────────────────────
  {
    id: "ltx-50",
    name: "LTX 50",
    category: "rebocador",
    capacity: "Reboque: 5.000 kg",
    energy: "Elétrica (24 V / Li-Ion disponível)",
    image: "https://data.still.de/assets/products/Vehicles/Platform_Trucks_and_Tractors/LTX_50/images/STILL_BR_Produkt_LTX-50_Website_Freisteller_800x800.png?w=1920&fit=max&fm=webp&s=544bd0ac443dca9c18e094678a518448",
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
      "https://data.still.de/assets/products/Vehicles/Platform_Trucks_and_Tractors/LTX_50/images/STILL_BR_Produkt_LTX-50_Website_Footer_2400x1492.png?w=1920&fit=max&fm=webp&s=6f943dc814c494df5a3802b3e7fd4ec7",
      "https://data.still.de/assets/products/Vehicles/Platform_Trucks_and_Tractors/LTX_50/images/STILL_BR_Produkt_LTX-50_Website_USP_1340x1340.jpg?w=1920&fit=max&fm=webp&s=e7e19291b9da17543168b3e5d96cab56",
      "https://data.still.de/assets/products/Vehicles/Platform_Trucks_and_Tractors/LTX_50/images/STILL_Produkt_LTX-50_Content_Simply-Efficient_01_1440x960.jpg?w=1920&fit=max&fm=webp&s=5fe36eb61a5e6424ca4801bd3c54da49",
      "https://data.still.de/assets/products/Vehicles/Platform_Trucks_and_Tractors/LTX_50/images/STILL_Produkt_LTX-50_Content_Simply-Efficient_02_1440x960.jpg?w=1920&fit=max&fm=webp&s=e03982213fbd0d546439d22640d78727",
    ],
    datasheet: "https://data.still.de/assets/products/Vehicles/Platform_Trucks_and_Tractors/LTX_50/pdfs/LTX_50_BR_Manual.pdf",
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
