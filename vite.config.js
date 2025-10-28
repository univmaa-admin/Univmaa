import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    VitePWA({
      registerType: "autoUpdate", // auto updates SW when you deploy new build
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "My React App",
        short_name: "ReactApp",
        description: "Fast React app with image caching",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            // 🖼️ Cache all images (local and remote)
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp|avif|gif)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          {
            // ⚡ Optional: cache CDN images like Cloudinary or Unsplash
            urlPattern:
              /^https:\/\/(res\.cloudinary\.com|images\.unsplash\.com)\/.*$/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "cdn-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
            },
          },
        ],
      },
    }),
  ],
});
