import { Plugin } from 'vue';
import Components from '@app/components/_client';
import TheForm from '../../components/TheForm.vue';

const plugin: Plugin = {
  install: (app) => {
    /**
     * Server components
     * - Componentes compartidos entre client y servidor
     */
    app.use(Components);
    /**
     * Web components
     */
    app.component('TheForm', TheForm);
  }
};

export default plugin;
