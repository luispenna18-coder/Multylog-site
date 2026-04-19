import FadeUp from "@/components/FadeUp";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "A Multylog nos atende há mais de 8 anos. Quando um equipamento apresenta problema, a substituição é rápida e a operação não para. Isso vale ouro no nosso setor.",
    author: "Gestor de Operações",
    company: "Indústria Alimentícia — Recife, PE",
  },
  {
    quote: "Tentamos outros fornecedores antes, mas voltamos para a Multylog. A diferença está no suporte técnico: técnicos certificados STILL que realmente entendem dos equipamentos.",
    author: "Diretor Logístico",
    company: "Centro de Distribuição — João Pessoa, PB",
  },
  {
    quote: "Locamos 12 empilhadeiras para nossa operação em Maceió. O contrato é flexível e o atendimento é ágil. Renovamos por mais dois anos sem pensar duas vezes.",
    author: "Gerente de Infraestrutura",
    company: "Atacadista — Maceió, AL",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-[#1C1C1E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#CC0000]" />
              <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
                O que dizem nossos clientes
              </span>
              <span className="w-6 h-0.5 bg-[#CC0000]" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-white tracking-wide">
              QUEM CONFIA NA MULTYLOG
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 hover:border-[#CC0000]/40 transition-colors duration-300 p-7 flex flex-col gap-5">
                <Quote size={28} className="text-[#CC0000] opacity-80 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.company}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
