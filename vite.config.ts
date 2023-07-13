import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import {MyPluginCustom} from './plugins/test';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), MyPluginCustom()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.open-meteo.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
