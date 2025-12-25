import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Re-adding the allowedDevOrigins config as a good practice for the cloud environment.
  experimental: {
    allowedDevOrigins: [
      '*.cluster-64pjnskmlbaxowh5lzq6i7v4ra.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
