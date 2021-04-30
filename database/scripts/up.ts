console.log('Hola mundo');
import settings from '../settings.json';
import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs-extra';
const items = Object.keys(settings);
import { up } from './db';
console.log(items);
const pathProject = path.join(__dirname, '..', '..');

interface Collection {
  name: string;
  mongo: { database: string; collection: string };
  documents: {
    name: string;
    sections: { name: string; path: string }[];
  }[];
}

function getCollections(
  relativeTo: string,
  listCollections: string[],
  _settings: typeof settings
) {
  // Initialize dictionary
  const dicTypes: Record<string, string[]> = {};
  listCollections.forEach((name) => (dicTypes[name] = []));
  // Read and clasify data
  const pathSocios = path.join(relativeTo, 'socios');
  fs.readdirSync(pathSocios).forEach((nameFile) => {
    const data = fs.readJSONSync(path.join(pathSocios, nameFile));
    if (dicTypes[data.type]) {
      dicTypes[data.type].push(nameFile.replace('.json', ''));
    }
  });

  console.log(dicTypes);

  const collections: Collection[] = [];
  for (const nameCollection of listCollections) {
    const singleSettings = _settings[nameCollection];

    const documents = dicTypes[nameCollection].map((name) => {
      return {
        name,
        sections: singleSettings.sections.map((section) => ({
          path: `${nameCollection}_${section}/${name}.json`,
          name: section
        }))
      };
    });

    collections.push({
      name: nameCollection,
      mongo: singleSettings.mongo,
      documents
      // sections
    });
  }
  return collections;
}

function getFormatData(relativeTo: string, collections: Collection[]) {
  // const pathSocios = path.join(relativeTo, 'socios');
  const dicTypes: Record<string, { mongo: any; docs: any[] }> = {};
  collections.forEach(
    (collection) =>
      (dicTypes[collection.name] = {
        mongo: collection.mongo,
        docs: []
      })
  );
  for (const collection of collections) {
    for (const document of collection.documents) {
      const _object: Record<string, any> = {};
      document.sections.forEach((section) => {
        const data = fs.readJSONSync(path.join(relativeTo, section.path));
        if (data.content) {
          _object[section.name] = data.content;
        } else {
          _object[section.name] = data;
        }
      });
      dicTypes[collection.name].docs.push(_object);
    }
  }
  return dicTypes;
}
const cli = async () => {
  //
  const answers = await inquirer.prompt({
    name: 'options',
    type: 'checkbox',
    message: 'Selecciona las collecciones que deseas subir',
    choices: items
  });
  console.log(answers);
  const pathContent = path.join(pathProject, 'content');

  const collections = getCollections(pathContent, answers.options, settings);
  const formatData = getFormatData(pathContent, collections);
  for (const key in formatData) {
    if (Object.prototype.hasOwnProperty.call(formatData, key)) {
      const element = formatData[key];
      // console.log(element.docs);
      await up(element.mongo.database, element.mongo.collection, element.docs);
    }
  }
  // console.log(d);

  // console.log(collections[0].documents[0].sections);
};

cli();
