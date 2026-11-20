import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 só serve as qualidades listadas aqui; sem o 90, quality={90} cai para 75.
    qualities: [75, 90],
  },
};

export default nextConfig;
