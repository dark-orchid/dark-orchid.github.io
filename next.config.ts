import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "dist",
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: ""
};

export default nextConfig;
