import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from Unsplash for demo 'real photos'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
