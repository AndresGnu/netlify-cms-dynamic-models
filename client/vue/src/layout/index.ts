import { createApp } from 'vue';
import Common, { useStore } from '../common';
import TheSidebar from '../components/TheSidebar.vue';

/**
 * Header
 */

const header = createApp({
  setup() {
    const { setState, menu } = useStore();
    const openMenu = () => {
      setState('menu', !menu.value);
    };
    return { openMenu };
  }
});
header.use(Common);
header.mount('#header');

/**
 * Sidebar
 */
const sidebar = createApp({});
sidebar.component('TheSidebar', TheSidebar).use(Common);
sidebar.mount('#sidebar');

/**
 * Footer
 */
