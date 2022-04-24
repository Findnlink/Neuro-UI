import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from 'vite-plugin-mdx'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  plugins: [reactRefresh(), mdx()],
  build: {
    rollupOptions: {
      external: ['react-lottie-player']
    }
  }
})
