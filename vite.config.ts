import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'product-card-app',
      filename: 'productCardEntry.js',
      remotes: {
        mainApp: 'http://localhost:5001/assets/mainAppEntry.js'
      },
      exposes: {
        './ProductCard.vue': './src/components/ProductCard.vue'
      },
      shared: ['vue', 'pinia']
    })
  ],
  build: {
    target: 'esnext'
  }
})