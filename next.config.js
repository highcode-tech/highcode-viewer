/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn-hjokj.nitrocdn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
      },
      
    ],
  },
  distDir: "build",
  output: 'export',
};

module.exports = nextConfig;
