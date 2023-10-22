/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: !debug ? '/portfolio/' : '',
}

module.exports = nextConfig
