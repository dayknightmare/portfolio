/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  experimental: {
    images: {
      layoutRaw: true
    }
  },
}

const isProd = process.env.NODE_ENV === 'production'

nextConfig.assetPrefix = isProd ? '/portfolio' : ''

module.exports = nextConfig
