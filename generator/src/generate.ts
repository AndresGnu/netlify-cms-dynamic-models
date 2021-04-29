const args = process.argv.slice(2);
const command = args[0];
if (command !== 'dev') {
  process.env.GENERATE = 'true';
}
import './env';
import { init } from './app';
import { pathProject } from './config';
import path from 'path';

export const generate = async (): Promise<unknown> => {
  const server = await init();
  /**
   * Run pre package tasks
   */
  if (command === 'pre-package') {
    await server.flow.runPrePackage();
    return process.exit(0);
  }
  /**
   * Run dev server
   */

  if (command === 'dev') {
    await server.start();
    server.flow.serverInfo();
  }
  /**
   * Generate static site
   */

  if (process.env.GENERATE) {
    await server.flow.runGenerate({
      ommitAssets: ['images', 'assets'],
      assets: [
        {
          prefix: '',
          dirs: ['assets'],
          relativeTo: path.join(pathProject, '.flow', 'javascript')
        },
        {
          prefix: '',
          dirs: ['assets'],
          relativeTo: path.join(pathProject, '.flow', 'styles')
        }
      ]
    });
    return process.exit(0);
  } else {
    console.log('No generate env');
    return process.exit(1);
  }
};

generate();
