import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        visualizer({
            filename: './dist/stats.html',
            open: false,
            gzipSize: true,
            brotliSize: true,
        })
    ],
    build: {
        // Enable CSS code splitting
        cssCodeSplit: true,
        // Optimize chunk size
        rollupOptions: {
            output: {
                manualChunks: {
                    // Separate vendor chunks for better caching
                    'react-vendor': ['react', 'react-dom'],
                    'icons': ['@heroicons/react/16/solid'],
                }
            }
        },
        // Reduce chunk size warning limit
        chunkSizeWarningLimit: 600,
    },
});
