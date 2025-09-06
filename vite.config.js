import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,       // Optional: specify your dev server port
    open: true,       // Automatically opens the browser
  },
  build: {
    outDir: 'dist',   // Output folder for production build
  },
  resolve: {
    alias: {
      '@': '/src',    // Optional: allows importing files like "@/components/Navbar.jsx"
    },
  },
})
