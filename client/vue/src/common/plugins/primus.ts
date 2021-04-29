import { Plugin } from 'vue';
import PrimeVue from 'primevue/config';
/**
 * Prime components
 */
import PAccordion from 'primevue/accordion';
import PAccordionTab from 'primevue/accordiontab';
import PInputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';

const plugin: Plugin = {
  install: (app) => {
    app.use(PrimeVue);
    app.component('PAccordion', PAccordion);
    app.component('PAccordionTab', PAccordionTab);
    app.component('PInputText', PInputText);
    app.component('PSidebar', Sidebar);
  }
};

export default plugin;
