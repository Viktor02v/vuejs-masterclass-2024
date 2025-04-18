import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {VueRouterAutoImports} from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
        /\.vue\.[tj]sx?\?vue/,
        /\.md$/,
      ],
      imports: [
        'vue',
        VueRouterAutoImports,
        {
          pinia: [
            'defineStore',
            'acceptHMRUpdate',
            'storeToRefs',
          ],
        }
      ],
      dts: true,
      viteOptimizeDeps: true,
      dirs: [
        'src/stores',
        'src/composables',
        'src/utils',
        'src/hooks',
      ],
      }),
    vue({
    template:{
      compilerOptions:{
        isCustomElement: (element) => element.startsWith('iconify-icon')
      }
    }
  }),
  Components({ /* options */ }),
],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
