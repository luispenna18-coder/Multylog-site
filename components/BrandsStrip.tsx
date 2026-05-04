import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function BrandsStrip() {
  return (
    <section className="bg-[#F5F5F7] border-b border-gray-200 py-8 lg:py-10">
      <div className="site-container">
        <FadeUp>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

            {/* Esquerda — texto */}
            <div className="text-center lg:text-left">
              <p className="text-[#1C1C1E] font-bold text-xl sm:text-2xl lg:text-3xl leading-tight tracking-tight">
                Somos Representantes Exclusivos
              </p>
              <p className="text-[#CC0000] font-bold text-xl sm:text-2xl lg:text-3xl leading-tight tracking-tight mt-0.5">
                Pernambuco&nbsp;•&nbsp;Paraíba&nbsp;•&nbsp;Alagoas
              </p>
            </div>

            {/* Divisor */}
            <div className="hidden lg:block w-px h-16 bg-gray-300 flex-shrink-0" />

            {/* Direita — logos KION */}
            <div className="flex flex-col items-center lg:items-start gap-3 flex-shrink-0">
              <p className="text-xs text-gray-500 font-semibold tracking-wide">
                KION Supply Chain Solutions
              </p>
              <div className="flex items-center gap-7">

                <div className="relative h-14 w-[120px]">
                  <Image
                    src="/images/brands/logo-linde-mh.png"
                    alt="Linde Material Handling"
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </div>

                <div className="relative h-14 w-[120px]">
                  <Image
                    src="/images/brands/logo-still-transparent.png"
                    alt="STILL"
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </div>

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
