"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { X } from "lucide-react";

export default function WhatsAppFloat() {
  const [tooltip, setTooltip] = useState(true);

  const href = `https://wa.me/${SITE.whatsapp}?text=Olá!%20Gostaria%20de%20solicitar%20uma%20cotação.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {tooltip && (
        <div className="flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-medium text-[#1C1C1E] border border-gray-100">
          Solicitar cotação
          <button
            onClick={() => setTooltip(false)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Fechar"
          >
            <X size={14} />
          </button>
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 shadow-lg transition-all hover:scale-110 drop-shadow-lg"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
          <defs>
            <linearGradient id="waGrad" x1="30%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#6BDE6E"/>
              <stop offset="100%" stopColor="#25C43B"/>
            </linearGradient>
          </defs>
          {/* Rounded square background */}
          <rect width="100" height="100" rx="22" fill="url(#waGrad)"/>
          {/* Outer white speech bubble */}
          <path fill="white" d="M50 17C31.8 17 17 31.4 17 49.1c0 5.9 1.6 11.4 4.5 16.2L17 83l18.3-4.4c4.6 2.5 9.8 3.9 15.4 3.9C68.9 82.5 83 68.1 83 50.4 83 32.7 68.9 17 50 17Z"/>
          {/* Green inner cutout to create bubble outline */}
          <path fill="url(#waGrad)" d="M50 23c-14.6 0-26.5 11.6-26.5 25.9 0 4.9 1.4 9.5 3.9 13.4l-2.4 9.8 10.2-2.4c3.7 2 7.9 3.1 12.4 3.1 14.6 0 26.5-11.6 26.5-25.9C76.5 32.6 64.6 23 50 23Z"/>
          {/* White phone handset */}
          <path fill="white" d="M39.2 37.5c-.6-1.3-1.9-1.4-2.7-1.4-.7 0-1.5 0-2.2.4-.8.4-3 2.9-3 7.1 0 4.2 3.1 8.3 3.5 8.8.4.6 6 9.5 14.7 13 8.6 3.5 8.6 2.4 10.1 2.2 1.5-.1 4.9-2 5.6-3.9.6-1.9.6-3.6.4-3.9-.2-.3-.8-.5-1.6-.9-.8-.4-4.9-2.4-5.6-2.7-.8-.3-1.3-.4-1.9.4-.6.8-2.3 2.7-2.8 3.3-.5.5-1.1.6-1.9.2-.8-.4-3.5-1.3-6.7-4.1-2.5-2.2-4.1-4.9-4.6-5.7-.5-.8 0-1.3.4-1.7.3-.4.8-1 1.2-1.5.4-.5.5-.8.8-1.4.3-.6.1-1.1-.1-1.5-.3-.4-1.8-4.4-2.6-5.7Z"/>
        </svg>
      </a>
    </div>
  );
}
