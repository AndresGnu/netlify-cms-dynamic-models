import { definePage } from '@monkeyplus/flow';
import { collections, widgets } from '@monkeyplus/flow-netlify';

export default definePage({
  name: 'example',
  view: {
    template: 'examples',
    bundle: 'main'
  },
  locales: {
    'es-ec': {
      url: '/examples',
      context: async ({ extensions, utils }) => {
        // utils.
        return {
          name: 'Hola'
        };
      }
    }
  }
});
