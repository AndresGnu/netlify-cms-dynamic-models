import { definePage } from '@monkeyplus/flow';
import { collections, widgets } from '@monkeyplus/flow-netlify';

export default definePage({
  name: 'sal',
  view: {
    template: 'sal',
    bundle: '_default'
  },
  locales: {
    'es-ec': {
      url: '/sal',
      context: async ({ extensions, utils }) => {
        // utils.
        return {
          name: 'Hola'
        };
      }
    }
  }
});
