/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: {
      sourceMap: false,
      autoLabel: 'dev-only',
    },
  },
};

module.exports = nextConfig;
