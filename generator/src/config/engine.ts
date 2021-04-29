import { Server } from '@hapi/hapi';
import { pathProject } from './shared';
import { pluginEta } from '@monkeyplus/flow-vue';
import Engines from '@monkeyplus/flow-engines';

export default (server: Server) => {
  return server.views({
    engines: {
      eta: Engines.Eta({
        options: {
          plugins: [pluginEta()]
        }
      }),
      njk: Engines.Nunjucks({
        server
      })
    },
    relativeTo: pathProject,
    defaultExtension: 'eta',
    path: 'views',
    isCached: false
  });
};
// JSON.stringify();
