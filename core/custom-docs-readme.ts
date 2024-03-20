import { JsonDocsComponent, OutputTargetDocsCustom } from '@stencil/core/internal';
import { writeFileSync } from 'fs';
import { join } from 'path';


export function customDocsReadme(): OutputTargetDocsCustom {
  return {
    type: 'docs-custom',
    generator(docs, config) {
      const timespan = config.logger?.createTimeSpan('starting generate readme documentation');

      docs.components.forEach(component => {
        const lines: string[] = [];

        lines.push(`# ${component.tag}`);
        lines.push('', '', '');
        lines.push('<!-- Auto Generated Below -->');
        lines.push('');
        lines.push('');
        lines.push('## Overview');
        lines.push('');
        if (component.docs) {
          lines.push(component.docs);
          lines.push('');
        }
  
        generateProperties(lines, component);
        generateEvents(lines, component);
        generateMethods(lines, component);
        generateSlots(lines, component);
        generateParts(lines, component);
        generateCssProps(lines, component);
  
        lines.push('');
        lines.push('----------------------------------------------')
        lines.push('');
        lines.push('*Built with [StencilJS](https://stenciljs.com/)*');
        lines.push('');

        writeFileSync(join(
          component.dirPath!, 'readme.md'
        ), lines.join('\n'));
      });
      timespan?.finish('readme documentation finished')
    },
  };
}


function formatDescription(desc: string): string {
 return desc
  .replace(/[\r\n]+/g, '<br>')
  .trim()
  .replace(/\s{2,}/g, ' ');
}

const UNDEFINED = ` "undefined" `.length;
function generateProperties(lines: string[], { props }: JsonDocsComponent): void {
  lines.push('');
  lines.push('');
  lines.push('## Properties');
  lines.push('');

  const propertyLength = props.reduce((length, prop) => Math.max(
    length,
    ` "${prop.name}" `.length
  ), 0);
  const attributeLength = props.reduce((length, prop) => Math.max(
    length,
    ` "${prop.attr}" `.length
  ), 0);
  const descriptionLength = props.reduce((length, prop) => Math.max(
    length,
    ` ${formatDescription(prop.docs ?? '')} `.length,
  ), 0);
  const typeLength = props.reduce((length, prop) => Math.max(
    length,
    ` "${prop.type ?? undefined}" `.replace(/\|/g, '\\|').length
  ), 0);
  const defaultLength = props.reduce((length, prop) => {
    const propTag = prop.docsTags.find(tag => tag.name === 'default')?.text;
    return Math.max(...[
      length,
      ` ${prop.default} `.length,
      ` ${propTag} `.length,
    ]);
  }, UNDEFINED);

  // Property header
  const property =    '| Property'   .padEnd(propertyLength, ' ');
  const attribute =   '| Attribute'  .padEnd(attributeLength, ' ');
  const description = '| Description'.padEnd(descriptionLength, ' ');
  const type =        '| Type'       .padEnd(typeLength, ' ');
  const default_ =    '| Default'    .padEnd(defaultLength, ' ');
  lines.push([property, attribute, description, type, default_, '|'].join(' '));

  // Property line
  lines.push([
    '|'.padEnd(propertyLength, '-'),
    '|'.padEnd(attributeLength , '-'),
    '|'.padEnd(descriptionLength, '-'),
    '|'.padEnd(typeLength, '-'),
    '|'.padEnd(defaultLength, '-'),
    '|',
  ].join('-'));

  // Lines
  props.forEach(prop => {
    const docProp = ` \`${prop.name}\``.padEnd(propertyLength, ' ');
    const docAttr = ` \`${prop.attr}\``.padEnd(attributeLength, ' ');
    const docDesc = ` ${formatDescription(prop.docs)}`.padEnd(descriptionLength, ' ');
    const docType = ` \`${prop.type}\``.replace(/\|/g, '\\|').padEnd(typeLength, ' ');
    const docDefaultTag = prop.docsTags.find(tag => tag.name === 'default')?.text;
    const docDefault = prop.default === undefined
      ? docDefaultTag === undefined
        ? ' `undefined` '
        : ` \`${docDefaultTag}\``
      : ` \`${prop.default}\``

    lines.push([
      '',
      docProp,
      docAttr,
      docDesc,
      docType,
      docDefault.padEnd(defaultLength, ' '),
      '',
    ].join('|'));
  });
}

function generateEvents(lines: string[], { events }: JsonDocsComponent): void {
  if (events.length === 0) return;

  lines.push('');
  lines.push('');
  lines.push('## Events');
  lines.push('');

  const eventLength = events.reduce((length, event) => Math.max(
    length,
    ` "${event.event}" `.length
  ), 0);
  const descriptionLength = events.reduce((length, event) => Math.max(
    length,
    ` "${event.docs}" `.length
  ), 0);
  const typeLength = events.reduce((length, event) => Math.max(
    length,
    ` "CustomEvent<${event.detail}>" `.length
  ), 0);
  
  // Property header
  const event =       '| Event'      .padEnd(eventLength, ' ');
  const description = '| Description'.padEnd(descriptionLength, ' ');
  const type =        '| Type'       .padEnd(typeLength, ' ');
  lines.push([event, description, type, '|'].join(' '));

  // Property line
  lines.push([
    '|'.padEnd(eventLength, '-'),
    '|'.padEnd(descriptionLength, '-'),
    '|'.padEnd(typeLength, '-'),
    '|',
  ].join('-'));

  // Lines
  events.forEach(event => {
    const docEvent = ` \`${event.event}\``.padEnd(eventLength, ' ');
    const docDesc = ` ${formatDescription(event.docs)}`.padEnd(descriptionLength, ' ');
    const docType = ` \`CustomEvent<${event.detail}>\``.padEnd(typeLength, ' ');

    lines.push([
      '',
      docEvent,
      docDesc,
      docType,
      '',
    ].join('|'));
  });
}

function generateMethods(lines: string[], { methods }: JsonDocsComponent): void {
  if (methods.length === 0) return;

  lines.push('');
  lines.push('');
  lines.push('## Methods');
  lines.push('');

  methods.forEach(method => {
    lines.push(`### \`${method.signature}\``);
    lines.push('');
    if (method.docs) {
      lines.push(method.docs);
      lines.push('');
    }
    if (method.parameters.length > 0) {
      lines.push('#### Parameters');
      lines.push('');

      const nameLength = method.parameters.reduce((length, param) => Math.max(
        length,
        ` "${param.name}" `.length
      ), 0);
      const typeLength = method.parameters.reduce((length, param) => Math.max(
        length,
        ` "${param.type}" `.length
      ), 0);
      const descriptionLength = method.parameters.reduce((length, param) => Math.max(
        length,
        ` "${param.docs}" `.length
      ), 0);

      // Property header
      const name =        '| Name'       .padEnd(nameLength, ' ');
      const type =        '| Type'       .padEnd(typeLength, ' ');
      const description = '| Description'.padEnd(descriptionLength, ' ');
      lines.push([name, type, description, '|'].join(' '));

      // Property line
      lines.push([
        '|'.padEnd(nameLength, '-'),
        '|'.padEnd(typeLength, '-'),
        '|'.padEnd(descriptionLength, '-'),
        '|',
      ].join('-'));

      // Lines
      method.parameters.forEach(param => {
        const docName = ` \`${param.name}\``.padEnd(nameLength, ' ');
        const docType = ` \`${param.type}\``.padEnd(typeLength, ' ');
        const docDesc = ` ${formatDescription(param.docs)}`.padEnd(descriptionLength, ' ');

        lines.push([
          '',
          docName,
          docType,
          docDesc,
          '',
        ].join('|'));
        lines.push('');
      });
    }

    lines.push('#### Returns');
    lines.push('');
    if (method.returns.type) {
      lines.push(`Type: \`${method.returns.type}\``);
      lines.push('');
    }
    if (method.returns.docs) {
      lines.push(method.returns.docs);
      lines.push('');
    }
  });
}

function generateSlots(lines: string[], { slots }: JsonDocsComponent): void {
  if (slots.length === 0) return;

  lines.push('');
  lines.push('');
  lines.push('## Slots');
  lines.push('');

  const slotLength = slots.reduce((length, slot) => Math.max(
    length,
    ` "${slot.name}" `.length
  ), 0);
  const descriptionLength = slots.reduce((length, slot) => Math.max(
    length,
    ` "${slot.docs}" `.length
  ), 0);
  
  // Property header
  const slot =        '| Slot'       .padEnd(slotLength, ' ');
  const description = '| Description'.padEnd(descriptionLength, ' ');
  lines.push([slot, description, '|'].join(' '));

  // Property line
  lines.push([
    '|'.padEnd(slotLength, '-'),
    '|'.padEnd(descriptionLength, '-'),
    '|',
  ].join('-'));

  // Lines
  slots.forEach(slot => {
    const docName = ` \`${slot.name}\``.padEnd(slotLength, ' ');
    const docDesc = ` ${formatDescription(slot.docs)}`.padEnd(descriptionLength, ' ');

    lines.push([
      '',
      docName,
      docDesc,
      '',
    ].join('|'));
  });
}

function generateParts(lines: string[], { parts }: JsonDocsComponent): void {
  if (parts.length === 0) return;

  lines.push('');
  lines.push('');
  lines.push('## Shadow Parts');
  lines.push('');

  const partLength = parts.reduce((length, slot) => Math.max(
    length,
    ` "${slot.name}" `.length
  ), 4);
  const descriptionLength = parts.reduce((length, slot) => Math.max(
    length,
    ` "${slot.docs}" `.length
  ), 0);
  
  // Property header
  const part =        '| Part'       .padEnd(partLength, ' ');
  const description = '| Description'.padEnd(descriptionLength, ' ');
  lines.push([part, description, '|'].join(' '));

  // Property line
  lines.push([
    '|'.padEnd(partLength, '-'),
    '|'.padEnd(descriptionLength, '-'),
    '|',
  ].join('-'));

  // Lines
  parts.forEach(part => {
    const docName = (part.name ? ` \`${part.name}\`` : '').padEnd(partLength, ' ');
    const docDesc = ` ${formatDescription(part.docs)}`.padEnd(descriptionLength, ' ');

    lines.push([
      '',
      docName,
      docDesc,
      '',
    ].join('|'));
  });
}

function generateCssProps(lines: string[], { styles }: JsonDocsComponent): void {
  if (styles.length === 0) return;

  lines.push('');
  lines.push('');
  lines.push('## CSS Custom Properties');
  lines.push('');

  const nameLength = styles.reduce((length, style) => Math.max(
    length,
    ` "${style.name}" `.length
  ), 0);
  const descriptionLength = styles.reduce((length, style) => Math.max(
    length,
    ` "${style.docs}" `.length
  ), 0);
  
  // Property header
  const name =        '| Name'       .padEnd(nameLength, ' ');
  const description = '| Description'.padEnd(descriptionLength, ' ');
  lines.push([name, description, '|'].join(' '));

  // Property line
  lines.push([
    '|'.padEnd(nameLength, '-'),
    '|'.padEnd(descriptionLength, '-'),
    '|',
  ].join('-'));

  // Lines
  styles.forEach(style => {
    const docName = ` \`${style.name}\``.padEnd(nameLength, ' ');
    const docDesc = ` ${formatDescription(style.docs)}`.padEnd(descriptionLength, ' ');

    lines.push([
      '',
      docName,
      docDesc,
      '',
    ].join('|'));
  });
}
