import { definePage } from '@monkeyplus/flow';
import { collections, widgets } from '@monkeyplus/flow-netlify';

const model = collections.folder(
  {
    id: 'blogs',
    label: 'Entradas de blog',
    create: true,
    identifier_field: 'name',
    format: 'frontmatter',
    extension: 'md',
    slug: '{{year}}-{{month}}-{{day}}-{{title}}',
    editor: { preview: false }
  },
  {
    title: widgets.string(),
    url: widgets.string(),
    category: widgets.string(),
    date: widgets.dateTime({}),

    preview: widgets.object(
      {},
      {
        image: widgets.image(),
        abstract: widgets.text({ label: 'Fragmento' })
      }
    ),

    body: widgets.markdown({})
  }
);

export default definePage({
  name: 'blogs',
  view: {
    template: 'blog-entry',
    bundle: 'blogs'
  },
  locales: {
    'es-ec': {
      url: '/blogs/{url*}',
      context: async ({ utils, req, page, global, h }) => {
        // extensions.cms

        const [prev, next]: any = await req
          .$content(`${page.locale}/blogs`)
          .only(['title', 'url'])
          .surround(global.slug)
          .fetch();

        return {
          name: 'Hola',
          prev,
          next
        };
      }
    }
  },
  extensions: { cms: { model } }
});
