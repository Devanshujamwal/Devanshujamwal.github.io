import type { NextConfig } from "next";
const exporting = process.env.PORTFOLIO_EXPORT === "1";
const nextConfig: NextConfig = {
  ...(exporting ? { output: "export", trailingSlash: true, basePath: process.env.NEXT_PUBLIC_BASE_PATH || "", images: { unoptimized: true } } : {}),
};
export default nextConfig;
