import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        localPatterns: [
            {
                pathname: "/api/map",
            },
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tiles.stadiamaps.com",
            },
        ],
    },
};

export default nextConfig;
