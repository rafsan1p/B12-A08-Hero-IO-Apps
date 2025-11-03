import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/B12-A08-Hero-IO-Apps/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});