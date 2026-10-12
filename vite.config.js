import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project at https://<user>.github.io/rentify/
export default defineConfig({
  plugins: [react()],
  base: '/rentify/',
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
})
