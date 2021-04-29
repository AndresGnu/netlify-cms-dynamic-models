import { pathProject } from './shared';
import { ChunkOptions } from '@monkeyplus/flow-chunks';
import { FlowOptions } from '@monkeyplus/flow';
import { HmrOptions } from '@monkeyplus/flow-hmr';
import { VueComponentOptions } from '@monkeyplus/flow-vue';
export const flow: FlowOptions = {
  relativeTo: pathProject,
  dirTemplates: 'templates/',
  outputDir: 'netlify/build',
  engines: ['eta']
};

export const flowChunks: ChunkOptions = {
  dir: '.flow',
  defaultNamespace: 'javascript',
  autoInject: [{ namespace: 'styles', name: 'styles' }],
  chunks: {
    styles: {
      mode: 'vite',
      generate: {
        entry: 'client/styles/styles.js'
      },
      injectMode: 'head',
      dir: 'client/styles/'
    },
    javascript: {
      mode: 'vite',
      proxy: 'resources',
      ext: 'ts'
    }
  }
};

export const flowHmr: HmrOptions = {
  dirs: ['views']
};

export const flowVue: VueComponentOptions = {
  dirs: ['components', 'views']
};
