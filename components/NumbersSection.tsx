"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STATS = [
  {
    value: 25,
    suffix: "+",
    label: "Anos de Mercado",
    description: "Fundada em Recife, crescemos junto com o Nordeste industrial.",
  },
  {
    value: 5,
    suffix: "",
    label: "Estados Atendidos",
    description: "Presença em PE, AL, PB, RN e SE com suporte técnico local.",
  },
  {
    value: 300,
    suffix: "+",
    label: "Clientes Ativos",
    description: "De pequenas operações a grandes indústrias e redes varejistas.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Peças Genuínas",
    description: "Somente reposição original STILL, com garantia de fábrica.",
  },
];

function useCountUp(target: number, duration = 1400, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({
  value,
  suffix,
  label,
  description,
  start,
  index,
}: (typeof STATS)[0] & { start: boolean; index: number }) {
  const count = useCountUp(value, 1400, start);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col px-8 py-8 cursor-default overflow-hidden"
    >
      {/* Linha vermelha no topo que cresce no hover */}
      <span className="absolute top-0 left-0 h-0.5 w-0 bg-[#CC0000] group-hover:w-full transition-all duration-500 ease-out" />

      {/* Número */}
      <div className="flex items-end gap-1 mb-3">
        <span className="font-display text-5xl lg:text-6xl text-[#1C1C1E] leading-none tracking-wide">
          {count}
        </span>
        <span className="font-display text-3xl text-[#CC0000] leading-none mb-1">
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-[#CC0000] text-xs font-bold uppercase tracking-widest mb-2">
        {label}
      </p>

      {/* Divisor */}
      <div className="w-8 h-px bg-gray-200 mb-3 group-hover:w-12 group-hover:bg-[#CC0000] transition-all duration-300" />

      {/* Descrição */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function NumbersSection() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 bg-[#F5F5F7] py-0">
      <div className="site-container">
        <div className="bg-white shadow-2xl border border-gray-100 border-t-2 border-t-[#CC0000] -mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} start={started} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
