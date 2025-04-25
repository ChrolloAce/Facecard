/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [],
    unoptimized: true
  },
  // Use the App Router properly
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig; 