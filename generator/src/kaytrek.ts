import { Plugin, server } from '@hapi/hapi';
import path from 'path';
import { defineCms, collections, widgets } from '@monkeyplus/flow-netlify';
import yml from 'js-yaml';
import { pathProject } from './config';
import fs from 'fs';
export const plugin: Plugin<unknown> = {
  name: 'cms',
  register: async (server) => {
    //
    // const
    console.log('Register cms');
    const models = fs.readdirSync(path.join(pathProject, 'models'));
    console.log(models);
    const modeAuth = process.env.AUTH!;
    console.log(modeAuth);
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
          options: models.map((v) => v.replace('.js', ''))
        })
      }
    );
    const customCollections: any[] = [];

    if (modeAuth !== 'admin') {
      //
      const data: any = await server.$content('socios', modeAuth).fetch();
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const module = require(path.join(pathProject, 'models', data.type));
      const obj = module.register({ widgets });
      for (const section in obj.sections) {
        if (Object.prototype.hasOwnProperty.call(obj.sections, section)) {
          const element = obj.sections[section];
          // console.log(element);
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

      // console.log(data);
    } else {
      customCollections.push(socios(''));
      for (const model of models) {
        const cleanName = model.replace('.js', '');
        try {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const module = require(path.join(pathProject, 'models', model));
          const obj = module.register({ widgets });
          for (const section in obj.sections) {
            if (Object.prototype.hasOwnProperty.call(obj.sections, section)) {
              const element = obj.sections[section];
              // console.log(element);
              const collection = collections.folder(
                {
                  id: `${cleanName}_${section}`,
                  label: `${cleanName}_${section}`,
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

          // console.log(obj);
        } catch (error) {
          console.log(error);
        }
      }
    }

    const pathResources = path.join(__dirname, '..', 'resources');
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

    server.route({
      path: `/admin/`,
      method: 'get',
      options: {
        plugins: {
          generate: '.html'
        }
      },
      handler: {
        file: {
          path: `${pathResources}/admin.html`,
          confine: false
        }
      }
    });
  }
};
