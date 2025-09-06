import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Dev server settings (optional)
  server: {
    port: 5173,       
    open: true,       
  },

  // Build settings
  build: {
    outDir: 'dist',  
  },

  // Resolve aliases
  resolve: {
    alias: {
      '@': '/src',    
    },
  },

  // ✅ Add this line for Netlify / static hosting
  base: './',   // ensures paths work on deployed static site
})
