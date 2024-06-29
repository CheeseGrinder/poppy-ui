import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const { join } = require('path');

function main() {
  const src = join(process.cwd(), '..', 'core', 'css');
  const dst = join(process.cwd(), 'css');

  fs.cpSync(src, dst, { recursive: true });
}

main();