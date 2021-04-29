import { definePage } from '@monkeyplus/flow';
import { collections, widgets } from '@monkeyplus/flow-netlify';
import got from 'got';
export default definePage({
  name: 'blog-wp',
  view: {
    template: 'blog-wp',
    bundle: '_default'
  },
  locales: {
    'es-ec': {
      url: '/blog-wp',
      context: async ({ extensions, utils, req, page }) => {
        // console.log(blogs);
        const r = await got
          .post('http://localhost:8086/graphql', {
            json: {
              query: `query MyQuery {
            posts {
              nodes {
                authorId
                content
                id
                title
                date
                excerpt
              }
            }
          }
          `
            }
          })
          .json<any>();
        // console.log(r);

        return {
          blogs: r.data
        };
      }
    }
  }
});
