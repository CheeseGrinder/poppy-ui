import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const fs = require('node:fs');
const { join } = require('node:path');

function main() {
  const src = join(process.cwd(), '..', 'core', 'css');
  const dst = join(process.cwd(), 'css');

  fs.cpSync(src, dst, { recursive: true });
}

main();
