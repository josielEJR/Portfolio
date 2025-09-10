/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // Configuração para assets estáticos
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Configuração para SPA
  trailingSlash: true
}

module.exports = nextConfig
