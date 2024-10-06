import { kebabCase } from 'change-case';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const JsonDocs = require('@poppy-ui/docs');

const generateTags = () => {
  const tagsObject = {};

  for (const component of JsonDocs.components) {
    tagsObject[component.tag] = {
      description: component.docs,
      attributes: component.props.map(prop => kebabCase(prop.name)),
    };
  }

  writeFileSync('./dist/vetur/tags.json', JSON.stringify(tagsObject, null, 2));
};

const generateAttributes = () => {
  const attributesObject = {};

  for (const component of JsonDocs.components) {
    for (const prop of component.props) {
      attributesObject[`${component.tag}/${kebabCase(prop.name)}`] = {
        type: prop.type,
        description: prop.docs,
        options: prop.values.filter(option => option.value !== undefined).map(option => option.value),
      };
    }
  }

  writeFileSync('./dist/vetur/attributes.json', JSON.stringify(attributesObject, null, 2));
};

const main = async () => {
  if (!existsSync('./dist/vetur')) {
    mkdirSync('./dist/vetur');
  }
  generateTags();
  generateAttributes();
};

main();
