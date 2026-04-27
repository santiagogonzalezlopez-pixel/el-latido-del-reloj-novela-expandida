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
  `self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => Promise.all(clients.map((client) => client.navigate(client.url)))),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(fetch(event.request));
});
`,
);

const staleServiceWorkerCleanupScript = `<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
      .catch(() => {});
  });
}
if ('caches' in window) {
  caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key)))).catch(() => {});
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

indexHtml = indexHtml.replace(
  /<script>\s*if \('serviceWorker' in navigator\) \{[\s\S]*?navigator\.serviceWorker\.register\('\.\/sw\.js'\)\.catch\(\(\) => \{\}\);\s*}\);\s*}\s*<\/script>/,
  '',
);

if (!indexHtml.includes('navigator.serviceWorker.getRegistrations()')) {
  indexHtml = indexHtml.replace('</body>', `${staleServiceWorkerCleanupScript}\n</body>`);
}

writeFileSync(indexPath, indexHtml);
copyFileSync(indexPath, fallbackPath);
writeFileSync(noJekyllPath, '');
console.log('Preparado dist para GitHub Pages y web app instalable.');
