/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // Set to false to enable Next.js image optimization
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'bayroofconstructions.com',
                port: '',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;
