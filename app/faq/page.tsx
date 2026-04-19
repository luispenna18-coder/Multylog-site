import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { FAQS } from "./faq-data";

export const metadata: Metadata = {
  title: "Dúvidas Frequentes | Multylog Empilhadeiras",
  description:
    "Tire suas dúvidas sobre locação, manutenção e venda de empilhadeiras STILL no Nordeste. Atendemos PE, PB e AL com mais de 25 anos de experiência.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient />
    </>
  );
}
