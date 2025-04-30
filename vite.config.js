import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const isVercel = process.env.VERCEL === '1';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isVercel ? '/' : '/portoYanto/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@context': path.resolve(__dirname, './src/context'),
      '@themes': path.resolve(__dirname, './src/themes')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    watch: {
      usePolling: true
    }
  }
})
