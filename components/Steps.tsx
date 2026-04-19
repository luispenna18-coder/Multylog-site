"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "Preencha o formulário" },
  { n: "02", title: "Proposta em 24h" },
  { n: "03", title: "Operação rodando" },
];

export default function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          STEPS.forEach((_, i) => {
            setTimeout(() => setActive(i), i * 400);
          });
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col mb-8">
      {STEPS.map((step, i) => (
        <div key={step.n}>
          <motion.div
            className="flex items-center gap-5 py-5 cursor-default group"
            initial={{ opacity: 0, x: -12 }}
            animate={active >= i ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Número */}
            <motion.div
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-500"
              animate={
                active >= i
                  ? { borderColor: "#CC0000", backgroundColor: "#CC0000" }
                  : { borderColor: "#E5E5E7", backgroundColor: "transparent" }
              }
            >
              <motion.span
                className="text-xs font-bold"
                animate={active >= i ? { color: "#ffffff" } : { color: "#94A3B8" }}
                transition={{ duration: 0.3 }}
              >
                {step.n}
              </motion.span>
            </motion.div>

            {/* Título */}
            <motion.p
              className="font-bold text-xl"
              animate={active >= i ? { color: "#1C1C1E" } : { color: "#A0AEC0" }}
              transition={{ duration: 0.3 }}
            >
              {step.title}
            </motion.p>
          </motion.div>

          {/* Separador */}
          {i < STEPS.length - 1 && (
            <div className="ml-5 h-px bg-gray-200 overflow-hidden">
              <motion.div
                className="h-full bg-gray-400"
                initial={{ width: "0%" }}
                animate={active >= i + 1 ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
