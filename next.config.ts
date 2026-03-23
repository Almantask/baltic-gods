import "./src/lib/react-default";
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = withMDX({
  pageExtensions: ["ts", "tsx", "mdx"],
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
});

export default nextConfig;
