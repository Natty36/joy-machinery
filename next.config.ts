import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.8.156"],
  output: "export",
  images: {
    unoptimized: true, // Required for static export unless using Cloudflare Images
  },
};

export default nextConfig;
