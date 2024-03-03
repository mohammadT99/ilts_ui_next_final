/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MYSQL_HOST: '185.164.73.28',
    MYSQL_PORT: 3306,
    MYSQL_DATABASE: 'ilts',
    MYSQL_USER: 'root',
    MYSQL_PASSWORD: 'password',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '185.164.73.28',
        port: '8000',
        pathname: '/storage/**',
      }
    ],
  },
}

module.exports = nextConfig
