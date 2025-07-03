import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 8080 // Port for `npm run dev`
  },
  preview: {
    port: 8080 // Port for `npm run preview`
  }
})
