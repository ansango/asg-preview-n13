/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["asg-cms.s3.eu-west-3.amazonaws.com"],
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: "next/font/google", options: { subsets: ["latin"] } }],
  },
};

module.exports = nextConfig;
