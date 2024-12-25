import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
        entry: ['src/lib/Plugin.svelte'],
        name: 'plugin',
        fileName: (format, entryName) => `${entryName.toLowerCase()}.js`,
        formats: ['iife']
    }
}
})
