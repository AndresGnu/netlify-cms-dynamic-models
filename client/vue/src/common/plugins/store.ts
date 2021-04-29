import { Plugin, reactive, inject, toRefs, ToRefs } from 'vue';

const store = reactive({
  menu: false
});

const plugin: Plugin = {
  install: (app) => {
    app.provide('store', toRefs(store));
  }
};

export function useStore() {
  const _store = inject('store', {}) as ToRefs<typeof store>;
  const setState = (key: keyof typeof store, value: any) => {
    store[key] = value;
  };
  return { setState, ..._store };
  // ret{}
}

export default plugin;
