import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.join(__dirname, './'), // Adjust this path to your repository's root
  },
};

export default nextConfig;
