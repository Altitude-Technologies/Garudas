import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// MERN-ready: client lives in this folder; a future /server (Express + MongoDB)
// can be proxied through here during development.
export default defineConfig({
  // For GitHub Pages project sites the app is served from /<repo>/.
  // The deploy workflow sets VITE_BASE=/<repo>/; locally it stays "/".
  base: process.env.VITE_BASE || '/',
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
})
