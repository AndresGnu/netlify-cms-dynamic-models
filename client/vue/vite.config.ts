import { defineConfig } from 'vite';
import { config } from 'dotenv';
import vue from '@vitejs/plugin-vue';
import Icons from 'vite-plugin-icons';
import { resolve } from 'path';

config({ path: `${__dirname}/../../.env` });

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/' : '/vite/javascript/',
  plugins: [vue(), Icons()],
  server: {
    port: Number(process.env.PORT) + 2
  },
  build: {
    target: 'es2015',
    manifest: true,

    outDir: '../../.flow/javascript',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/main.ts',
        _default: './src/_default.ts',
        blogs: './src/blogs.ts'
      }
    }
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '/@/': './src'
    }
  }
});
