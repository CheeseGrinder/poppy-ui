import type { JsonDocsComponent, OutputTargetDocsCustom } from '@stencil/core/internal';
import fs from 'fs';

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
    generator: (docsData) => {
      const content: string[] = [];
      docsData.components.forEach(cmp => generateComponent(cmp, content));

      const contentStr = content.join('\n');
      return new Promise(resolve => {
        fs.writeFile(opts.file, contentStr, () => {
          resolve();
        });
      });
    }
  };
}

function generateComponent(component: JsonDocsComponent, content: string[]) {
  content.push('');
  content.push(`${component.tag},${component.encapsulation}`);

  component.props.forEach(prop => {
    content.push(`${component.tag},prop,${prop.name},${prop.type},${prop.default},${prop.required},${prop.reflectToAttr}`);
  });
  component.methods.forEach(prop => {
    content.push(`${component.tag},method,${prop.name},${prop.signature}`);
  });
  component.events.forEach(prop => {
    content.push(`${component.tag},event,${prop.event},${prop.detail},${prop.bubbles}`);
  });
  component.styles.forEach(prop => {
    content.push(`${component.tag},css-prop,${prop.name}`);
  });
  component.parts.forEach(part => {
    content.push(`${component.tag},part,${part.name}`);
  });
}
