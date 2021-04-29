import { config } from 'dotenv';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';
const projectPath = path.resolve(__dirname, '..', '..');
config({ path: path.join(projectPath, '.env') });
const isProduction = process.env.NODE_ENV === 'production';
/**
 * @type {import('vite').UserConfig}
 */
export default {
  root: projectPath,
  base: '/vite/styles/',
  plugins: [
    WindiCSS({
      root: projectPath,
      scan: {
        fileExtensions: ['html', 'vue', 'eta', 'md', 'json'],
        dirs: ['/client', '/components', '/views', '/content'].map(
          (p) => `${projectPath}${p}`
        )
      }
    })
  ],
  server: {
    port: Number(process.env.PORT) + 1
  },
  css: {
    postcss: path.resolve(__dirname, 'postcss.config.js')
  },
  build: {
    manifest: true,
    outDir: '.flow/styles',
    emptyOutDir: true,
    rollupOptions: {
      input: { styles: './styles.js' }
    }
  }
};
