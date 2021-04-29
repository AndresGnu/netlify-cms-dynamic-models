import { Plugin } from 'vue';
import Prime from './plugins/primus';
import Components from './plugins/components';
import Validates from './plugins/validates';
import Store from './plugins/store';
import './styles';
const plugin: Plugin = {
  install: (app) => {
    app.use(Prime);
    app.use(Components);
    app.use(Validates);
    app.use(Store);
  }
};

export { useStore } from './plugins/store';

export default plugin;
