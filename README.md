# El latido del reloj - Novela expandida

App editorial construida con React Native, Expo y TypeScript para convertir la obra de Santiago González López en una experiencia narrativa expandida: lectura, cartas, personajes, genealogía, cronología, lugares, fotografías, árbol familiar e IA guiada por la obra y el archivo familiar.

No es una novela al uso: es una crónica familiar reconstruida por Santiago, nieto de Flora e hijo de Luis. La app recoge la historia de su yaya Flora, de Tomás, hermano de Flora, y de Pedro, tío de Flora y de Tomás.

## Qué incluye

- Lectura continua del libro, con progreso guardado por capítulo.
- Archivo familiar con fotografías, cartas escaneadas, documentos y árbol genealógico.
- Fichas de personajes, relaciones familiares, lugares y cronología.
- IA local de consulta sobre la obra, las cartas, las fotografías y el árbol familiar.
- Versión web publicable en GitHub Pages e instalable en el móvil como web app.

## Desarrollo local

```bash
npm install
npm run start
```

Atajos útiles en Expo:

- `a` abre Android
- `i` abre iOS en macOS
- `w` abre web

## Verificación

```bash
npm run typecheck
npm run build:web
```

## Versión web

La app se exporta como sitio estático:

```bash
npm run build:web
```

La exportación se genera en `dist/`. El repositorio incluye una GitHub Action que publica automáticamente la web en GitHub Pages al hacer push a `main`.

La versión web incluye manifiesto y service worker para poder instalarla desde el navegador del móvil. En Android suele aparecer como opción del navegador: “Instalar app” o “Añadir a pantalla de inicio”. En iPhone se hace desde Safari con “Compartir” y “Añadir a pantalla de inicio”.

## Build Android

La configuración EAS está preparada:

```bash
npm run build:android:preview
npm run build:android:production
```

- `preview` genera una build interna Android para pruebas.
- `production` genera el `.aab` para Google Play.

Más detalle en [docs/release-and-publish.md](docs/release-and-publish.md).
