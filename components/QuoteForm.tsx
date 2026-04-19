"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

const EQUIPMENT_TYPES = [
  "Empilhadeira Contrabalançada",
  "Empilhadeira Retrátil",
  "Patolada",
  "Transpaleteira Elétrica",
  "Plataforma Elevatória",
  "Não sei — preciso de orientação",
];

const PERIODS = [
  "Até 3 meses",
  "3 a 6 meses",
  "6 a 12 meses",
  "Mais de 12 meses",
  "Indeterminado",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    cidade: "",
    email: "",
    telefone: "",
    equipamento: "",
    periodo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Olá! Quero solicitar uma cotação de locação.`,
      ``,
      `*Nome:* ${form.nome}`,
      `*Empresa:* ${form.empresa}`,
      `*Cidade:* ${form.cidade}`,
      `*E-mail:* ${form.email}`,
      `*Telefone:* ${form.telefone}`,
      `*Equipamento:* ${form.equipamento}`,
      `*Período:* ${form.periodo}`,
    ].join("\n");

    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white border border-gray-300 text-[#1C1C1E] placeholder-gray-400 px-4 py-4 text-base focus:outline-none focus:border-[#CC0000] transition-colors";

  const labelClass = "block text-sm font-bold text-gray-800 mb-2";

  const selectClass =
    "w-full bg-white border border-gray-300 text-[#1C1C1E] px-4 py-4 text-base focus:outline-none focus:border-[#CC0000] transition-colors appearance-none cursor-pointer";

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 shadow-sm p-8 lg:p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[400px]">
        <CheckCircle size={52} className="text-[#CC0000]" />
        <h3 className="font-display text-3xl text-[#1C1C1E] tracking-wide">SOLICITAÇÃO ENVIADA!</h3>
        <p className="text-gray-500 text-base max-w-sm leading-relaxed">
          O WhatsApp foi aberto com os seus dados. Nossa equipe responde em até 24h com uma proposta personalizada.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-[#CC0000] hover:underline mt-2"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 shadow-sm p-8 lg:p-10 flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Nome *</label>
          <input name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome completo" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Empresa *</label>
          <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nome da empresa" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Cidade *</label>
          <input name="cidade" value={form.cidade} onChange={handleChange} placeholder="Cidade / Estado" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Telefone *</label>
          <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(00) 00000-0000" required className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>E-mail</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com.br" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Tipo de Equipamento *</label>
          <div className="relative">
            <select name="equipamento" value={form.equipamento} onChange={handleChange} required className={selectClass}>
              <option value="" disabled>Selecione o equipamento</option>
              {EQUIPMENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Período de Locação *</label>
          <div className="relative">
            <select name="periodo" value={form.periodo} onChange={handleChange} required className={selectClass}>
              <option value="" disabled>Selecione o período</option>
              {PERIODS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-[#CC0000] hover:bg-[#A80000] text-white font-bold py-4 transition-colors group"
      >
        Enviar Solicitação
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>

    </form>
  );
}
