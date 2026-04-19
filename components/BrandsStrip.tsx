import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function BrandsStrip() {
  return (
    <section className="bg-white border-b border-gray-100 py-8 lg:py-10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <FadeUp>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

            {/* Esquerda — texto */}
            <div className="text-center lg:text-left">
              <p className="text-[#1C1C1E] font-bold text-xl sm:text-2xl lg:text-3xl leading-tight tracking-tight">
                SOMOS REPRESENTANTES EXCLUSIVOS
              </p>
              <p className="text-[#CC0000] font-bold text-xl sm:text-2xl lg:text-3xl leading-tight tracking-tight mt-0.5">
                PERNAMBUCO&nbsp;•&nbsp;PARAÍBA&nbsp;•&nbsp;ALAGOAS
              </p>
            </div>

            {/* Divisor */}
            <div className="hidden lg:block w-px h-16 bg-gray-200 flex-shrink-0" />

            {/* Direita — logos KION */}
            <div className="flex flex-col items-center lg:items-start gap-3 flex-shrink-0">
              <p className="text-xs text-gray-500 font-semibold tracking-wide">
                KION Supply Chain Solutions
              </p>
              <div className="flex items-center gap-7">

                {/* Linde Material Handling */}
                <div className="relative h-14 w-[120px]">
                  <Image
                    src="/images/brands/logo-linde-mh.png"
                    alt="Linde Material Handling"
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </div>

                {/* STILL — fundo removido */}
                <div className="relative h-14 w-[120px]">
                  <Image
                    src="/images/brands/logo-still-transparent.png"
                    alt="STILL"
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </div>

                {/* Baoli — fundo removido */}
                <div className="relative h-14 w-[110px]">
                  <Image
                    src="/images/brands/logo-baoli-transparent.png"
                    alt="Baoli"
                    fill
                    className="object-contain"
                    sizes="110px"
                  />
                </div>

              </div>
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}
