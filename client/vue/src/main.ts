import 'vite/dynamic-import-polyfill';
import { createApp, onMounted } from 'vue';
import Common, { useStore } from './common';
import TheSidebar from './components/TheSidebar.vue';
import sal from 'sal.js';
// import 'sal.js/dist/sal.css';

const app = createApp({
  setup() {
    const { menu } = useStore();
    onMounted(() => {
      console.log('Init sal');

      sal({
        root: null,
        threshold: 1
      });
    });
    return { message: 'Hola mundo', menu };
  }
});

const header = createApp({
  setup() {
    const { setState, menu } = useStore();
    const openMenu = () => {
      setState('menu', !menu.value);
    };
    return { openMenu };
  }
});

const sidebar = createApp({});
sidebar.component('TheSidebar', TheSidebar).use(Common);
// const nav = createApp()
app.use(Common);
header.use(Common);
/**
 * Mount all sections
 */
header.mount('#header');
app.mount('#app');
sidebar.mount('#sidebar');
