import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Electron 用 file:// 加载，必须用相对路径
  base: './',
  optimizeDeps: {
    include: ['html2canvas'],
  },
  server: {
    watch: {
      ignored: ['**/release/**', '**/node_modules/**'],
    },
  },
})
