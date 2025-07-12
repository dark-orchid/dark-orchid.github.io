import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  distDir: "dist",
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: "",
  pageExtensions: [ "tsx", "mdx" ]
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
