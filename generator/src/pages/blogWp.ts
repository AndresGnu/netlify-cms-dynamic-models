import { definePage } from '@monkeyplus/flow';
import { collections, widgets } from '@monkeyplus/flow-netlify';

export default definePage({
  name: 'blog',
  view: {
    template: 'blog',
    bundle: '_default'
  },
  locales: {
    'es-ec': {
      url: '/blog',
      context: async ({ extensions, utils, req, page }) => {
        if (process.env.NETLIFY) {
          return { blogs: { posts: { nodes: [] } } };
        }
        const blogs = await req
          .$content(page.locale + '/blogs')
          .without(['body'])
          .fetch();
        // console.log(blogs);

        return {
          blogs
        };
      }
    }
  }
});
