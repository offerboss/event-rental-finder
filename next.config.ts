import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old provider-application page now lives at /for-rental-companies.
      {
        source: "/list-your-business",
        destination: "/for-rental-companies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
