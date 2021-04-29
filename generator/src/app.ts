import Glue from '@hapi/glue';
import manifest from './manifest';
import registerEngine from './config/engine';

export const init = async () => {
  try {
    const server = await Glue.compose(manifest, { relativeTo: __dirname });
    registerEngine(server);

    await server.flow.init();
    return server;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
