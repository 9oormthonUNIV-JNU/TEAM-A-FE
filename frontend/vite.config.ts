import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@@': path.resolve(__dirname, './src/'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://3.34.57.226:8080/',
        // target: 'http://localhost:5173/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
