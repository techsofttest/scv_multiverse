/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'techsoftwebsolutions.com',
        pathname: '/techsoft/demo/SCV/backend/public/uploads/**',
      },
    ],

    dangerouslyAllowSVG: true, 
    unoptimized: true,
  },
};

export default nextConfig;