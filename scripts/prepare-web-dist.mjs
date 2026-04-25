import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const indexPath = join(distDir, 'index.html');
const fallbackPath = join(distDir, '404.html');
const noJekyllPath = join(distDir, '.nojekyll');
const manifestPath = join(distDir, 'manifest.webmanifest');
const serviceWorkerPath = join(distDir, 'sw.js');
const iconSourcePath = join(process.cwd(), 'assets', 'icon.png');
const pwaIconPath = join(distDir, 'pwa-icon.png');

if (!existsSync(indexPath)) {
  console.error('No se ha encontrado dist/index.html. Ejecuta antes la exportación web.');
  process.exit(1);
}

if (existsSync(iconSourcePath)) {
  copyFileSync(iconSourcePath, pwaIconPath);
}

writeFileSync(
  manifestPath,
  `${JSON.stringify(
    {
      name: 'El latido del reloj',
      short_name: 'El latido',
      description:
        'Novela expandida de Santiago González López: memoria familiar, cartas, árbol genealógico y archivo.',
      start_url: './',
      scope: './',
      display: 'standalone',
      background_color: '#f5efe2',
      theme_color: '#314850',
      orientation: 'portrait',
      lang: 'es',
      icons: [
        {
          src: './pwa-icon.png',
          sizes: '1024x1024',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    null,
    2,
  )}\n`,
);

writeFileSync(
  serviceWorkerPath,
  `const CACHE_NAME = 'el-latido-del-reloj-v1';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      ),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    }),
  );
});
`,
);

const installScript = `<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
</script>`;

const pwaHeadTags = `<link rel="manifest" href="./manifest.webmanifest">
<meta name="theme-color" content="#314850">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="El latido">
<link rel="apple-touch-icon" href="./pwa-icon.png">`;

let indexHtml = readFileSync(indexPath, 'utf8');

indexHtml = indexHtml
  .replace('<html lang="en">', '<html lang="es">')
  .replace(
    'You need to enable JavaScript to run this app.',
    'Necesitas activar JavaScript para abrir esta app.',
  );

if (!indexHtml.includes('manifest.webmanifest')) {
  indexHtml = indexHtml.replace('</head>', `${pwaHeadTags}\n</head>`);
}

if (!indexHtml.includes("navigator.serviceWorker.register('./sw.js')")) {
  indexHtml = indexHtml.replace('</body>', `${installScript}\n</body>`);
}

writeFileSync(indexPath, indexHtml);
copyFileSync(indexPath, fallbackPath);
writeFileSync(noJekyllPath, '');
console.log('Preparado dist para GitHub Pages y web app instalable.');
