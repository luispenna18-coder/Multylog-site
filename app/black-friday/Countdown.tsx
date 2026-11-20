"use client";

import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    over: ms === 0,
    dias: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    min: Math.floor((s % 3600) / 60),
    seg: s % 60,
  };
}

export default function Countdown({ deadline }: { deadline: string }) {
  const target = new Date(deadline).getTime();
  // null até montar no cliente — evita divergência de hidratação
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    const tick = () => setT(diff(target));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [target]);

  if (t?.over) {
    return (
      <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">
        Campanha encerrada — consulte condições atuais
      </p>
    );
  }

  const cells: [string, number | undefined][] = [
    ["Dias", t?.dias],
    ["Horas", t?.horas],
    ["Min", t?.min],
    ["Seg", t?.seg],
  ];

  return (
    <div className="flex gap-2 sm:gap-3" role="timer" aria-label="Tempo restante da campanha">
      {cells.map(([label, value]) => (
        <div
          key={label}
          className="w-16 sm:w-20 rounded-xl border border-white/15 bg-white/5 py-3 text-center"
        >
          <div className="font-display text-4xl sm:text-5xl leading-none text-white tabular-nums">
            {value === undefined ? "--" : String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/50">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
