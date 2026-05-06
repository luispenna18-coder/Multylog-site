"use client";

import { useState, useRef } from "react";
import { CheckCircle, Paperclip } from "lucide-react";

function isValidPhone(v: string) {
  return v.replace(/\D/g, "").length >= 10;
}

export default function CurriculoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    mensagem: "",
  });
  const fileRef = useRef<HTMLInputElement>(null);

  const phoneError = touched.telefone && !isValidPhone(form.telefone);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
    setTouched((prev) => ({ ...prev, curriculo: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ nome: true, email: true, telefone: true, curriculo: true });

    const file = fileRef.current?.files?.[0];
    if (!form.nome || !form.email || !isValidPhone(form.telefone) || !file) return;

    setLoading(true);

    const data = new FormData();
    data.append("nome", form.nome);
    data.append("email", form.email);
    data.append("telefone", form.telefone);
    data.append("cargo", form.cargo);
    data.append("mensagem", form.mensagem);
    data.append("curriculo", file);

    await fetch("/api/curriculo", {
      method: "POST",
      body: data,
    }).catch(() => {});

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 lg:p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[420px]">
        <CheckCircle size={52} className="text-[#CC0000]" />
        <h3 className="font-display text-3xl text-[#1C1C1E] tracking-wide">Currículo Enviado!</h3>
        <p className="text-gray-500 text-base max-w-sm leading-relaxed">
          Recebemos seu currículo e analisaremos seu perfil. Entraremos em contato quando surgir uma oportunidade.
        </p>
        <button
          onClick={() => { setSubmitted(false); setTouched({}); setFileName(""); setForm({ nome: "", email: "", telefone: "", cargo: "", mensagem: "" }); }}
          className="text-sm text-[#CC0000] hover:underline mt-2"
        >
          Enviar outro currículo
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
      {/* Nome + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Nome completo <span className="text-[#CC0000]">*</span></label>
          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="João Silva"
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
            placeholder="joao@email.com"
            className={`${input} ${touched.email && !form.email ? "border-[#CC0000]" : ""}`}
          />
          {touched.email && !form.email && (
            <p className="text-[#CC0000] text-xs mt-1.5">Campo obrigatório.</p>
          )}
        </div>
      </div>

      {/* Telefone + Cargo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Telefone <span className="text-[#CC0000]">*</span></label>
          <input
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="(81) 9 0000-0000"
            className={`${input} ${phoneError ? "border-[#CC0000]" : ""}`}
          />
          {phoneError && (
            <p className="text-[#CC0000] text-xs mt-1.5">Informe um telefone válido com DDD.</p>
          )}
        </div>
        <div>
          <label className={label}>Cargo de interesse</label>
          <input
            name="cargo"
            value={form.cargo}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ex: Mecânico, Técnico..."
            className={input}
          />
        </div>
      </div>

      {/* Upload do currículo */}
      <div>
        <label className={label}>Currículo <span className="text-[#CC0000]">*</span></label>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg border transition-colors bg-[#F5F5F7] ${
            touched.curriculo && !fileName
              ? "border-[#CC0000]"
              : "border-gray-200 hover:border-[#CC0000]"
          }`}
        >
          <Paperclip size={16} className="text-[#CC0000] shrink-0" />
          <span className={fileName ? "text-[#1C1C1E]" : "text-gray-400"}>
            {fileName || "Anexar currículo (PDF, DOC, DOCX)"}
          </span>
        </button>
        <input
          ref={fileRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFile}
          className="hidden"
        />
        {touched.curriculo && !fileName && (
          <p className="text-[#CC0000] text-xs mt-1.5">Anexe seu currículo.</p>
        )}
      </div>

      {/* Mensagem */}
      <div>
        <label className={label}>Mensagem</label>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Conte um pouco sobre você ou sua experiência..."
          rows={3}
          className={`${input} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#CC0000] hover:bg-[#A80000] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors"
      >
        {loading ? "Enviando..." : "Enviar Currículo →"}
      </button>
    </form>
  );
}
