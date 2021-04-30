import { pathProject } from './shared';
import { FlowOptions } from '@monkeyplus/flow';
export const flow: FlowOptions = {
  relativeTo: pathProject,
  dirTemplates: 'templates/',
  outputDir: 'netlify/build',
  engines: ['eta']
};
