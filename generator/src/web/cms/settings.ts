import { collections, widgets } from '@monkeyplus/flow-netlify';

const generalFields = {
  title: widgets.string({
    label: 'Nombre de la empresa'
  }),
  icon: widgets.string({
    label: 'Icono'
  })
};

export const settings = collections.files(
  {
    id: 'settings',
    label: 'Configuraciones',
    delete: false
  },
  {
    info: collections.file(
      {
        label: 'Generales'
      },
      generalFields
    )
  }
);
