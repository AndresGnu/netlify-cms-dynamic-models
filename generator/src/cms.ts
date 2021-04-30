import { Plugin } from '@hapi/hapi';
import path from 'path';
import { defineCms, collections, widgets } from '@monkeyplus/flow-netlify';
import yml from 'js-yaml';
import fs from 'fs';
export const plugin: Plugin<unknown> = {
  name: 'cms',
  register: async (server) => {
    //
    console.log('Register cms');
    const models = fs.readdirSync(path.join(__dirname, 'models'));
    // console.log(models);
    const modeAuth = process.env.AUTH!;
    // console.log(modeAuth);
    const socios = collections.folder(
      {
        id: 'socios',
        label: 'Socios',
        create: true,
        summary: '{{fields.title}} - {{fields.type}} ({{filename}})'
      },
      {
        title: widgets.string(),
        type: widgets.select({
          options: models
        })
      }
    );
    const customCollections: any[] = [];

    if (modeAuth !== 'admin') {
      //
      const data: any = await server.$content('socios', modeAuth).fetch();
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const module = require(path.join(__dirname, 'models', data.type));

      const obj = module?.default;

      for (const section in obj.sections) {
        if (Object.prototype.hasOwnProperty.call(obj.sections, section)) {
          const element = obj.sections[section];
          const collection = collections.files(
            {
              id: `${data.type}_${section}`,
              label: section
            },
            {
              [modeAuth]: collections.file(
                { label: section },
                {
                  id: widgets.hidden({ default: modeAuth, required: true }),
                  content: widgets.object({}, element)
                }
              )
            }
          )('');
          customCollections.push(collection);
        }
      }
    } else {
      customCollections.push(socios(''));
      for (const model of models) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const module = require(path.join(__dirname, 'models', model));
          const obj = module?.default;

          for (const section in obj.sections) {
            if (Object.prototype.hasOwnProperty.call(obj.sections, section)) {
              const element = obj.sections[section];
              // console.log(element);
              const collection = collections.folder(
                {
                  id: `${model}_${section}`,
                  label: `${model}_${section}`,
                  summary: '{{filename}}',
                  identifier_field: 'title'
                  // create: true,
                },
                {
                  content: widgets.object({}, element)
                }
              )('');
              customCollections.push(collection);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    server.route({
      path: '/admin/config.yml',
      method: 'get',
      options: {
        plugins: {
          generate: true
        }
      },
      handler: (req, h) => {
        const t = defineCms(
          {
            backend: {
              name: 'git-gateway',
              branch: 'master'
            },
            media_folder: 'static/images',
            public_folder: '/images',
            locale: 'es',
            local_backend: {
              url: '/cms/api/v1'
            }
          },
          [...customCollections]
        )('content');
        const schema = yml.dump(t);

        return h.response(schema).type('text/yaml');
      }
    });
  }
};
