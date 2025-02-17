import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    tailwindcss(),
  ],
  server: {
    proxy: {
      '/backend-api': {
        target: 'https://peace3.3bodylabs.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/backend-api/, '')
      }
    }
  }
})
