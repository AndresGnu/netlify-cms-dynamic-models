import { definePage } from '@monkeyplus/flow';
import { collections, widgets } from '@monkeyplus/flow-netlify';
import {} from '@monkeyplus/flow-chunks';

const model = collections.files(
  {
    id: 'home',
    label: 'Home page'
  },
  {
    header: collections.file(
      {
        label: 'Header'
      },
      {
        title: widgets.string(),
        subtitle: widgets.string(),
        buttons: widgets.object(
          {},
          {
            primary: widgets.string({}),
            secondary: widgets.string(),
            thrir: widgets.string()
          }
        ),
        brands: widgets.list(
          {},
          {
            image: widgets.image({
              media_folder: '/static/images/logos/brands',
              public_folder: 'logos/brands'
            })
          }
        )
      }
    ),
    features: collections.file(
      {
        label: 'Features'
      },
      {
        title: widgets.string(),
        description: widgets.text({}),
        items: widgets.list(
          {},
          {
            icon: widgets.string(),
            title: widgets.string(),
            subtitle: widgets.string()
          }
        )
      }
    ),
    team: collections.file(
      {
        label: 'Team'
      },
      {
        label: widgets.string(),
        title: widgets.string(),
        subtitle: widgets.text({}),
        members: widgets.list(
          {},
          {
            image: widgets.image(),
            fullname: widgets.string(),
            position: widgets.string(),
            social: widgets.list(
              {},
              {
                icon: widgets.string(),
                url: widgets.string()
              }
            )
          }
        )
      }
    )
  }
);

export default definePage({
  name: 'home',
  view: {
    template: 'index',
    bundle: '_default'
  },
  locales: {
    'es-ec': {
      url: '/',
      seo: {
        title: 'Hola mundo',
        google: true
      },

      context: async ({ req, global, page }) => {
        const header = await req.$content(page.locale + '/home/header').fetch();
        const features = await req
          .$content(page.locale + '/home/features')
          .fetch();
        const team = await req.$content(page.locale + '/home/team').fetch();

        return {
          // info,
          features,
          header,
          team,
          name: 'Andres'
        };
      }
    }
  },
  extensions: {
    cms: {
      model
    }
  }
});
