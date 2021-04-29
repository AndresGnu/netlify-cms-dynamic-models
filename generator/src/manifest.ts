import * as Options from './config';
import { Manifest } from '@hapi/glue';
import { pathProject } from './config';
import { collections } from './web/cms';
import ExtraContext from './web/shared/context';

const manifest: Manifest = {
  server: {
    port: process.env.PORT,
    host: '0.0.0.0',
    routes: {
      cors: process.env.NODE_ENV !== 'production',
      files: {
        relativeTo: pathProject
      }
    }
  },
  register: {
    plugins: [
      {
        plugin: 'hapi-pino',
        options: Options.pino
      },
      {
        plugin: '@hapi/vision'
      },
      {
        plugin: '@hapi/inert'
      },
      {
        plugin: '@hapi/h2o2'
      },
      {
        plugin: '@monkeyplus/flow',
        options: Options.flow
      },
      {
        plugin: '@monkeyplus/flow-hmr',
        options: Options.flowHmr
      },
      {
        plugin: '@monkeyplus/flow-dev-routes'
      },
      {
        plugin: '@monkeyplus/flow-sitemap'
      },
      {
        plugin: '@monkeyplus/flow-netlify',
        options: {
          collections
        }
      },
      {
        plugin: '@monkeyplus/flow-google-fonts'
      },
      {
        plugin: '@monkeyplus/flow-static'
      },
      {
        plugin: '@monkeyplus/flow-chunks',
        options: Options.flowChunks
      },
      {
        plugin: '@monkeyplus/flow-vue',
        options: Options.flowVue
      },
      {
        plugin: '@monkeyplus/flow-icons'
      },
      {
        plugin: '@monkeyplus/flow-content'
      },
      {
        plugin: '@monkeyplus/flow-images'
      },
      {
        plugin: '@monkeyplus/flow-import-pages',
        options: {
          dir: __dirname + '/pages'
        }
      },
      {
        plugin: '@monkeyplus/flow-insert-context',
        options: ExtraContext
      }
    ]
  }
};

export default manifest;
