import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@@': path.resolve(__dirname, './src/'),
  //   },
  // },
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
    // rollupOptions: {
    //   external: ['axios'],
    // },
    chunkSizeWarningLimit: 1600,
  },
});
