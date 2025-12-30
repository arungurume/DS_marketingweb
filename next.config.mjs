/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: false,

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  }
};

export default nextConfig;
