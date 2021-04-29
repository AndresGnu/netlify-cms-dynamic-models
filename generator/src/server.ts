import './env';
process.env.CONSOLA_LEVEL = '5';
import { init } from './app';
export const start = async (): Promise<void> => {
  const server = await init();
  await server.start();
  server.flow.serverInfo();
};

start();
