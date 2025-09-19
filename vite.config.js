// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        booking: path.resolve(__dirname, 'booking.html')
      }
    },
    outDir: 'dist', // make sure this matches your Netlify publish directory
  }
});
