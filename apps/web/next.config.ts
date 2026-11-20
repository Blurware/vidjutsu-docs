import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The Mac editor is retired: VidJutsu is fully hosted at app.vidjutsu.ai.
    return [{ source: "/editor", destination: "https://app.vidjutsu.ai", permanent: false }];
  },
};

export default nextConfig;
