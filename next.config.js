/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`${process.env.NEXT_PUBLIC_BUCKET_URL.replace("https://", "")}`],
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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[name][ext]",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
