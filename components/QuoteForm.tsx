"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

const EQUIPMENT_TYPES = [
  "Empilhadeira Contrabalançada",
  "Empilhadeira Retrátil",
  "Patolada",
  "Transpaleteira Elétrica",
  "Plataforma Elevatória",
  "Selecionadora de Pedidos",
  "Rebocador",
  "Não sei — preciso de orientação",
];

function isValidPhone(v: string) {
  return v.replace(/\D/g, "").length >= 10;
}

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    equipamento: "",
    mensagem: "",
  });

  const phoneError = touched.telefone && !isValidPhone(form.telefone);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ nome: true, email: true, empresa: true, telefone: true, equipamento: true });
    if (!form.nome || !form.email || !form.empresa || !form.equipamento || !isValidPhone(form.telefone)) return;

    // Dispara e-mail em background (não bloqueia o fluxo do usuário)
    fetch("/api/cotacao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => {});

    // Abre WhatsApp com os dados
    const msg = [
      `Olá! Quero solicitar uma cotação de locação.`,
      ``,
      `*Nome:* ${form.nome}`,
      `*Empresa:* ${form.empresa}`,
      `*E-mail:* ${form.email}`,
      `*Telefone:* ${form.telefone}`,
      `*Equipamento:* ${form.equipamento}`,
      form.mensagem ? `*Mensagem:* ${form.mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 lg:p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[420px]">
        <CheckCircle size={52} className="text-[#CC0000]" />
        <h3 className="font-display text-3xl text-[#1C1C1E] tracking-wide">Solicitação Enviada!</h3>
        <p className="text-gray-500 text-base max-w-sm leading-relaxed">
          O WhatsApp foi aberto com os seus dados. Nossa equipe responde em até 24h com uma proposta personalizada.
        </p>
        <button
          onClick={() => { setSubmitted(false); setTouched({}); }}
          className="text-sm text-[#CC0000] hover:underline mt-2"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  const input =
    "w-full bg-[#F5F5F7] border border-gray-200 rounded-lg text-[#1C1C1E] placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000] focus:bg-white transition-colors";

  const label = "block text-sm font-medium text-[#1C1C1E] mb-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 shadow-sm rounded-2xl p-7 lg:p-9 flex flex-col gap-5"
    >
      {/* Row 1: Nome + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Nome completo <span className="text-[#CC0000]">*</span></label>
          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="João Silva"
            required
            className={`${input} ${touched.nome && !form.nome ? "border-[#CC0000]" : ""}`}
          />
          {touched.nome && !form.nome && (
            <p className="text-[#CC0000] text-xs mt-1.5">Campo obrigatório.</p>
          )}
        </div>
        <div>
          <label className={label}>E-mail <span className="text-[#CC0000]">*</span></label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="joao@empresa.com.br"
            required
            className={`${input} ${touched.email && !form.email ? "border-[#CC0000]" : ""}`}
          />
          {touched.email && !form.email && (
            <p className="text-[#CC0000] text-xs mt-1.5">Campo obrigatório.</p>
          )}
        </div>
      </div>

      {/* Row 2: Empresa + Telefone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Empresa <span className="text-[#CC0000]">*</span></label>
          <input
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Razão social"
            required
            className={`${input} ${touched.empresa && !form.empresa ? "border-[#CC0000]" : ""}`}
          />
          {touched.empresa && !form.empresa && (
            <p className="text-[#CC0000] text-xs mt-1.5">Campo obrigatório.</p>
          )}
        </div>
        <div>
          <label className={label}>
            Telefone <span className="text-[#CC0000]">*</span>
          </label>
          <input
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="(81) 9 0000-0000"
            required
            className={`${input} ${phoneError ? "border-[#CC0000]" : ""}`}
          />
          {phoneError && (
            <p className="text-[#CC0000] text-xs mt-1.5">
              Informe um telefone válido com DDD.
            </p>
          )}
        </div>
      </div>

      {/* Tipo de equipamento */}
      <div>
        <label className={label}>Tipo de equipamento <span className="text-[#CC0000]">*</span></label>
        <div className="relative">
          <select
            name="equipamento"
            value={form.equipamento}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`${input} appearance-none cursor-pointer pr-10`}
          >
            <option value="" disabled>Selecione...</option>
            {EQUIPMENT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label className={label}>Mensagem</label>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Conte sobre sua operação..."
          rows={4}
          className={`${input} resize-y`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold py-3.5 rounded-xl transition-colors"
      >
        Enviar solicitação →
      </button>
    </form>
  );
}
