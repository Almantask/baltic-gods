import "./src/lib/react-default";
import type { NextConfig } from "next";
import path from "path";
import createMDX from "@next/mdx";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@/lib/mdx-react-shim",
  },
});

const googleApiKey = process.env.GOOGLE_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";


const nextConfig: NextConfig = withMDX({
  pageExtensions: ["ts", "tsx", "mdx"],
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["@mdx-js/react"] = path.join(
      __dirname,
      "src/lib/mdx-react-shim.tsx",
    );
    return config;
  },
  env: {
    GOOGLE_API_KEY: googleApiKey,
  },
});

export default nextConfig;
