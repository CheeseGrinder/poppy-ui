import type { JsonDocsComponent, OutputTargetDocsCustom } from '@stencil/core/internal';
import fs from 'node:fs';

interface ApiSpecOption {
  file: string;
}

/**
 * Create a docs-custom output target
 *
 * @param {object} opts opts
 * @param {string} opts.file Filename for the api spec
 * @returns {import('@stencil/core/internal').OutputTargetDocsCustom}
 */
export function apiSpecGenerator(opts: ApiSpecOption): OutputTargetDocsCustom {
  return {
    type: 'docs-custom',
    generator: docsData => {
      const content: string[] = [];
      for (const component of docsData.components) {
        generateComponent(component, content);
      }

      const contentStr = content.join('\n');
      return new Promise(resolve => {
        fs.writeFile(opts.file, contentStr, () => {
          resolve();
        });
      });
    },
  };
}

function generateComponent(component: JsonDocsComponent, content: string[]) {
  content.push('');
  content.push(`${component.tag},${component.encapsulation}`);

  for (const prop of component.props) {
    content.push(
      `${component.tag},prop,${prop.name},${prop.type},${prop.default},${prop.required},${prop.reflectToAttr}`,
    );
  }
  for (const method of component.methods) {
    content.push(`${component.tag},method,${method.name},${method.signature}`);
  }
  for (const event of component.events) {
    content.push(`${component.tag},event,${event.event},${event.detail},${event.bubbles}`);
  }
  for (const style of component.styles) {
    content.push(`${component.tag},css-prop,${style.name}`);
  }
  for (const part of component.parts) {
    content.push(`${component.tag},part,${part.name}`);
  }
}
