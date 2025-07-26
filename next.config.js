/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temel ayarlar
  trailingSlash: true,
  poweredByHeader: false,
  
  // Image Optimization
  images: {
    unoptimized: false,
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
