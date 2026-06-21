import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// MERN-ready: client lives in this folder; a future /server (Express + MongoDB)
// can be proxied through here during development.
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project site from /Garudas/. Build uses that base
  // (so `npm run deploy` works); dev stays at "/". VITE_BASE can override.
  base: process.env.VITE_BASE || (command === 'build' ? '/Garudas/' : '/'),
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
}))
