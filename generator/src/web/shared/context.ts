import { Context } from '@monkeyplus/flow-insert-context';

export const sharedContext: Context = {
  assign: 'global',
  method: async () => {
    return {
      message: 'shared context'
    };
  }
};

export const localeContext: Context = {
  assign: 'global',
  method: {
    'es-ec': async () => {
      return {
        locale: 'es'
      };
    }
  }
};
export const infoContext: Context = {
  assign: 'local',
  method: async ({ req }) => {
    const info = await req.$content('settings/info').fetch();
    return {
      ...info
    };
  }
};
export default {
  shared: sharedContext,
  context: localeContext,
  info: infoContext
};
