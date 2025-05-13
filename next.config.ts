const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  output: 'export',
};

export default nextConfig;
