/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'

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
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: !debug ? '/portfolio/' : '',
}

module.exports = nextConfig
