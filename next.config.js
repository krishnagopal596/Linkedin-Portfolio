/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['media.licdn.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig 