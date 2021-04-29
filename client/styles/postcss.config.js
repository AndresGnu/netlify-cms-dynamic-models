module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-simple-vars': {},
    'postcss-mixins': {},
    'postcss-functions': {
      functions: {
        salFor: (type, init = 1, _max = 40) => {
          let text = '';
          for (let i = init; i < _max; i++) {
            text += `
            [data-sal][data-sal-${type}='${parseInt(i * 50)}'] {
              transition-${type}: ${(i * 0.05).toFixed(2)}s;
            }
            `;
          }
          return text;
        },
        salEasing: (obj = '') => {
          const list = obj
            .split('\n')
            .map((t) => t.split(':').map((v) => v.trim()));
          let text = '';
          for (const iterator of list) {
            if (iterator.length > 1) {
              const [key, value] = iterator;
              const last = value.charAt(value.length - 1);
              let nv = '';
              if (last === ',') {
                nv = value.slice(0, value.length - 1);
              } else {
                nv = value;
              }
              text += `
              [data-sal][data-sal-easing='${key}'] {
                transition-timing-function: ${nv};
              }`;
            }
          }
          return text;
        }
      }
    }
  }
};
