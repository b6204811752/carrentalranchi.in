import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      // Cache static assets aggressively for better Core Web Vitals
      {
        source: "/logo/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fleets/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/background/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      // SEO redirects — common misspellings and alternate paths
      { source: "/ranchi", destination: "/cab-service-in-ranchi", permanent: true },
      { source: "/ranchi-cab", destination: "/cab-service-in-ranchi", permanent: true },
      { source: "/cab-ranchi", destination: "/cab-service-in-ranchi", permanent: true },
      { source: "/taxi-ranchi", destination: "/cab-service-in-ranchi", permanent: true },
      { source: "/car-rental-ranchi", destination: "/cab-service-in-ranchi", permanent: true },
    ];
  },
};

export default nextConfig;
