/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/uploads/**',
      },
    ],
    // This is the key setting for your specific error:
    dangerouslyAllowSVG: true, 
    unoptimized: true, // Only use this if you want to skip Next.js image optimization
  },
};

export default nextConfig;
