import { widgets } from '@monkeyplus/flow-netlify';

const banner = {
  image: widgets.image({}),
  title: widgets.string(),
  ubication: widgets.string(),
  category: widgets.object(
    {},
    {
      primary: widgets.object(
        {},
        {
          icon: widgets.string(),
          name: widgets.string()
        }
      ),
      secondary: widgets.object(
        {},
        {
          icon: widgets.string(),
          name: widgets.string()
        }
      )
    }
  ),
  items: widgets.list(
    {},
    {
      text: widgets.string()
    }
  )
};
export default { sections: { banner } };
