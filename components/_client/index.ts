//@ts-nocheck
import { Plugin } from 'vue';
import MkBtn from '../atoms/MkBtn.vue';

const plugin: Plugin = {
  install: (vue) => {
    vue.component('MkBtn', MkBtn);
  }
};

export default plugin;
