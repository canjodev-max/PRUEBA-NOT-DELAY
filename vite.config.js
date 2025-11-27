import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png'],
      manifest: {
        name: 'Not Delay - Juegos',
        short_name: 'Not Delay',
        description: 'PWA de juegos Not Delay',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/icons/ico-oscu.png', sizes: 'any', type: 'image/png', purpose: 'any' },
          { src: '/icons/ico-clar.png', sizes: 'any', type: 'image/png', purpose: 'any' }
        ]
      },
      workbox: {
        navigateFallback: '/offline.html',
        globPatterns: ['**/*.{js,css,html,png,svg,ico}']
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  }
})
