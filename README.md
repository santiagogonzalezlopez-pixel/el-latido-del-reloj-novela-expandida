# El latido del reloj - Novela expandida

App movil editorial construida con React Native, Expo y TypeScript para convertir la obra en una experiencia narrativa expandida: lectura, cartas, personajes, genealogia, cronologia, lugares y un futuro modulo de IA restringido al corpus.

## Arquitectura

La app usa una arquitectura modular en `src/` con:

- navegacion principal por bottom tabs
- stack root para pantallas de detalle
- tema visual centralizado
- componentes reutilizables
- tipos relacionales para capitulos, personajes, cartas, lugares, cronologia y archivo
- persistencia local con `AsyncStorage` para progreso, preferencias y citas favoritas

El contenido ya esta preparado para trabajar solo con el corpus espanol y crecer sin mezclar idiomas.

## Estructura de carpetas

```text
novela-expandida-app/
  App.tsx
  app.config.ts
  eas.json
  package.json
  scripts/
  src/
    components/
    data/
      content/
        es/
          raw/
      index.ts
    hooks/
    navigation/
    screens/
      ai/
      archive/
      explore/
      letters/
      read/
    theme/
    types/
    utils/
  docs/
```

## Contenido actual

La app ya incorpora una primera base estructurada con contenido real en espanol para:

- capitulos
- personajes
- lugares
- cronologia basica
- cartas relacionadas con Cuba, Flora y la emigracion

El corpus extraido y sus referencias estan organizados en `src/data/content/es/`.

## Desarrollo local

Desde [novela-expandida-app](C:/Users/Admin/Desktop/MINE/LIBRO/novela-expandida-app):

```bash
npm install
npm run start
```

Atajos utiles en Expo:

- `a` abre Android
- `i` abre iOS en macOS
- `w` abre web

## Verificacion

```bash
npm run typecheck
```

## Build Android

La configuracion EAS ya esta preparada:

```bash
npm run build:android:preview
npm run build:android:production
```

- `preview` genera una build interna Android para pruebas
- `production` genera el `.aab` para Google Play

Mas detalle en [release-and-publish.md](C:/Users/Admin/Desktop/MINE/LIBRO/novela-expandida-app/docs/release-and-publish.md).

## Version web

La app puede exportarse como sitio web estatico y publicarse en GitHub Pages.

```bash
npm run build:web
```

La exportacion se genera en `dist/` y el repositorio incluye una GitHub Action para publicar automaticamente la web en Pages al hacer push a `main`.

## Proximos pasos

1. Sustituir mas fragmentos mock por corpus real espanol.
2. Anadir icono y splash definitivos.
3. Conectar un sistema RAG que responda solo desde la obra y su archivo.
4. Publicar una primera build interna en Android.
