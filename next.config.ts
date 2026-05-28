import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/excursions",
        destination: "/flam-shore-excursions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
