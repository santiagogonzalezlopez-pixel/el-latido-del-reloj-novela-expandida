import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const indexPath = join(distDir, 'index.html');
const fallbackPath = join(distDir, '404.html');
const noJekyllPath = join(distDir, '.nojekyll');

if (!existsSync(indexPath)) {
  console.error('No se ha encontrado dist/index.html. Ejecuta antes la exportacion web.');
  process.exit(1);
}

copyFileSync(indexPath, fallbackPath);
writeFileSync(noJekyllPath, '');
console.log('Preparado dist/404.html y dist/.nojekyll para GitHub Pages.');
