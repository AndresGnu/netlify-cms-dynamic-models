import 'vite/dynamic-import-polyfill';
import './layout';
import sal from 'sal.js';

console.log('Hola sal');

sal({
  root: null,
  threshold: 1,
  rootMargin: '0% 50%',
  once: false
});
