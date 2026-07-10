/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vansh-portfolio-051.vercel.app" }
    ]
  }
};

module.exports = nextConfig;
