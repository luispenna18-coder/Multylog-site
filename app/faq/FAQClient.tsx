"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FAQS } from "./faq-data";

export default function FAQClient() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
            Tire suas dúvidas
          </span>
          <h1 className="font-display text-5xl sm:text-6xl text-white mt-3 mb-4 tracking-wide">
            Dúvidas Frequentes
          </h1>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="font-semibold text-[#1C1C1E] pr-4 group-hover:text-[#CC0000] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-gray-400 transition-transform ${open === i ? "rotate-180 text-[#CC0000]" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px bg-gray-100 mb-4" />
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#1C1C1E] rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl text-white tracking-wide mb-3">
              Ainda tem Dúvidas?
            </h3>
            <p className="text-gray-400 mb-6">Fale diretamente com nosso time comercial.</p>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20serviços%20da%20Multylog.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3 rounded transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
