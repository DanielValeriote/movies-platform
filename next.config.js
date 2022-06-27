/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ["image.tmdb.org"]
  },
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
}

module.exports = nextConfig;