import baseConfig from './base.config'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, '../src/index.ts'),
      name: 'Neuro-UI',
      fileName: (format) => `neuro-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [...(baseConfig as any).plugins, dts()]
})
