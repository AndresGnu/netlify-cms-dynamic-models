module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true,
    'vetur.validation.template': false
  },
  projects: [
    './client/javascript',
    './components',
    {
      root: './views/',
      globalComponents: ['/components/**/*.vue', './**/*.vue']
    }
  ]
};
