module.exports = {
  publicPath: '/',

  /**
   * Lista de idiomas
   */
  locales: ['es-ec'],
  /**
   * Idioma por defecto (en formato ISO 639‑1)
   */
  defaultLanguage: 'es',
  /**
   * Localiizacion  por defecto (en formato ISO 3166‑1 Alpha 2) en minusculas
   */
  defaultUbication: 'ec',

  /**
   * The base URL your application bundle will be deployed
   */
  plugins: {
    fonts: {
      url:
        'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
      mode: 'online'
    },
    chunks: {
      dir: '.flow',
      chunks: {
        styles: {
          mode: 'vite',
          production: 'styles',
          bundle: 'client/styles/styles'
        },
        javascript: {
          mode: 'vite',
          production: 'all',
          proxy: 'resources',
          ext: 'ts'
        }
      }
    }
  }
};
