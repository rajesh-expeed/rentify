import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project at https://<user>.github.io/rentify/
// The Docker image serves it from the root, so it builds with VITE_BASE=/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/rentify/',
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
})
