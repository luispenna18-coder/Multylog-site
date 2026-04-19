import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tudoedesign.com.br",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.skyjack.com",
        pathname: "/sites/default/files/**",
      },
      {
        protocol: "https",
        hostname: "www.fairchildequipment.com",
      },
      {
        protocol: "https",
        hostname: "data.still.de",
      },
      {
        protocol: "https",
        hostname: "www.transpotech.com.br",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.linde-mh.com",
      },
      {
        protocol: "https",
        hostname: "baoli.com.br",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.baoli-mh.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
