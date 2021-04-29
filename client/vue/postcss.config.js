// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: `${__dirname}/../../.env` });
const plugins = {};
if (process.env.NODE_ENV !== 'production') {
  plugins['postcss-url'] = {
    url: (asset) => {
      // console.log(asset);
      const url = `/vite/javascript/assets/` + asset.relativePath;
      return url;
    },
    filter: /\.(ttf|woff)$/
  };
}

module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins
};
