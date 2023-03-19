/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`${process.env.BUCKET_URL.replace("https://", "")}`],
    formats: ["image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
      {
        source: "/",
        destination: "/index",
      },
    ];
  },
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: "next/font/google", options: { subsets: ["latin"] } }],
  },
};

module.exports = nextConfig;
