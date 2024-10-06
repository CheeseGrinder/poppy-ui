import { pascalCase } from 'change-case';
import { writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const JsonDocs = require('@poppy-ui/docs');

const components = [];

/**
 * The list of tag names to ignore generating web types for.
 */
const excludeComponents = [
  'pop-app',
  'pop-nav',
  'pop-nav-link',
  'pop-router',
  'pop-route-redirect',
  'pop-router-link',
  'pop-router-outlet',
];

/**
 * The filtered set of components to generate web types for.
 */
const filteredComponents = JsonDocs.components.filter(c => !excludeComponents.includes(c.tag));

for (const component of filteredComponents) {
  const attributes = [];
  const slots = [];
  const events = [];
  const componentName = pascalCase(component.tag);
  const docUrl = `https://poppy-ui.com/docs/api/${component.tag.substr(4)}`;

  for (const prop of component.props || []) {
    attributes.push({
      name: prop.attr || prop.name,
      description: prop.docs,
      required: prop.required,
      default: prop.default,
      value: {
        kind: 'expression',
        type: prop.type,
      },
    });
  }

  for (const event of component.events || []) {
    let eventName = event.event;
    if (eventName.toLowerCase().startsWith(componentName.toLowerCase())) {
      eventName = `on${eventName.substr(componentName.length)}`;
    }
    events.push({
      name: eventName,
      description: event.docs,
      arguments: [
        {
          name: 'detail',
          type: event.detail,
        },
      ],
    });
  }

  for (const slot of component.slots || []) {
    slots.push({
      name: slot.name === '' ? 'default' : slot.name,
      description: slot.docs,
    });
  }

  components.push({
    name: componentName,
    'doc-url': docUrl,
    description: component.docs,
    source: {
      module: `@poppy-ui/core/${component.filePath.replace('./src/', 'dist/types/').replace('.tsx', '.d.ts')}`,
      symbol: componentName.substr(3),
    },
    attributes,
    slots,
    events,
  });
}

const webTypes = {
  $schema: 'http://json.schemastore.org/web-types',
  framework: 'vue',
  name: '@poppy-ui/vue',
  version: require('../package.json').version,
  contributions: {
    html: {
      'types-syntax': 'typescript',
      'description-markup': 'markdown',
      tags: components,
    },
  },
};

writeFileSync('dist/web-types.json', JSON.stringify(webTypes, null, 2));
