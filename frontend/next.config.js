/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },{
        protocol: 'https',
        hostname: 'images.crunchbase.com',
        port: '',
        pathname: '/**'
      }
    ],
  },
};

module.exports = nextConfig;
