import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Multylog Empilhadeiras | Locação, Venda e Assistência Técnica no Nordeste",
  description:
    "Representante autorizado STILL para Pernambuco, Paraíba e Alagoas. Mais de 25 anos de experiência em locação, venda, manutenção e peças de empilhadeiras.",
  keywords: "empilhadeiras, locação de empilhadeiras, STILL, Recife, Nordeste, PE, PB, AL",
  openGraph: {
    title: "Multylog Empilhadeiras",
    description: "Representante autorizado STILL no Nordeste",
    locale: "pt_BR",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "@id": "https://multylog-site.vercel.app/#organization",
  name: "Multylog Empilhadeiras",
  alternateName: "Multylog",
  description:
    "Representante autorizado STILL para Pernambuco, Paraíba e Alagoas. Mais de 25 anos de experiência em locação, venda, manutenção e peças de empilhadeiras.",
  url: "https://multylog-site.vercel.app",
  logo: "https://multylog-site.vercel.app/images/logo.png",
  image: "https://multylog-site.vercel.app/images/team.jpg",
  telephone: "+55-81-3224-0715",
  email: "comercial@multylog.com.br",
  foundingDate: "1999",
  areaServed: [
    { "@type": "State", name: "Pernambuco", sameAs: "https://www.wikidata.org/wiki/Q40953" },
    { "@type": "State", name: "Paraíba", sameAs: "https://www.wikidata.org/wiki/Q40956" },
    { "@type": "State", name: "Alagoas", sameAs: "https://www.wikidata.org/wiki/Q40942" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Barão de Bonito, 616",
    addressLocality: "Recife",
    addressRegion: "PE",
    addressCountry: "BR",
    postalCode: "50750-000",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.0476,
    longitude: -34.9286,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:30",
    closes: "18:00",
  },
  sameAs: [
    "https://www.instagram.com/multylogempilhadeiras/",
    "https://www.facebook.com/multylogempilhadeiras/",
    "https://www.linkedin.com/company/multylogempilhadeiras/",
  ],
  knowsAbout: [
    "Empilhadeiras",
    "Locação de Empilhadeiras",
    "Manutenção de Empilhadeiras",
    "STILL Empilhadeiras",
    "Intralogística",
    "Movimentação de Cargas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${bebas.variable} ${outfit.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
