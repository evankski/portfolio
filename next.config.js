/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // white listed image domains
  // white list = trusted
  images: {
    domains: ['placekitten.com']
  }
}

module.exports = nextConfig
