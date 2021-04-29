import { defineConfig } from 'vite-plugin-windicss';
import plugin from 'windicss/plugin';
import colors from 'windicss/colors';
// colors.
export default defineConfig({
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      screens: {
        xsm: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px'
      },

      colors: {
        /**
         * My colors
         */
        primary: '#00E195'
      },
      fontFamily: {
        base: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [require('windicss/plugin/aspect-ratio')]
} as any);
