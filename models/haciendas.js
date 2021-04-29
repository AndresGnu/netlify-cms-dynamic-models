const type = {
  register: ({ widgets }) => {
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
    return {
      sections: {
        banner
      }
    };
  }
};

module.exports = type;
