/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    // domains: ["suitmedia.static-assets.id"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "suitmedia.static-assets.id",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
