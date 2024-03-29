import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry:  fileURLToPath(new URL('src/index.ts', import.meta.url)),
      name: 'virtual-scroller',
      fileName: (format) => `virtual-scroller.${format}.js`
    },
    outDir: 'dist'
  },
  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue',
      },
    },
  },
});
