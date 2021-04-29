import * as Options from './config';
import { Manifest } from '@hapi/glue';
import { pathProject } from './config';

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
        plugin: '@monkeyplus/flow-netlify',
        options: {
          omitRoutes: true
        }
      },
      {
        plugin: '@monkeyplus/flow-static'
      },
      {
        plugin: '@monkeyplus/flow-content'
      },

      {
        plugin: './kaytrek'
      }
    ]
  }
};

export default manifest;
