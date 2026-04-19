"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  main: string;
  name: string;
  gallery: string[];
}

export default function ImageGallery({ main, name, gallery }: Props) {
  const all = [main, ...gallery];
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
        <Image
          src={all[active]}
          alt={name}
          fill
          className="object-contain p-6"
          priority
        />
      </div>

      {/* Thumbnails — only shown when there are extra images */}
      {all.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {all.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                active === i
                  ? "border-[#CC0000]"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <Image
                src={src}
                alt={`${name} — imagem ${i + 1}`}
                fill
                className="object-contain p-1 bg-white"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
