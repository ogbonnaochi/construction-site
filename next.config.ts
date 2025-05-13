const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
