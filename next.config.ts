import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // 👈 This must be inside `images`
  },
};

export default nextConfig;

