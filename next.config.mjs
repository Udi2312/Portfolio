/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Allow production builds even if ESLint finds errors
    ignoreDuringBuilds: true,
  },
  images: {
    // ✅ Allow optimized images from any domain (optional)
    unoptimized: false,
  },
};

export default nextConfig;
