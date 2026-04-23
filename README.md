# El latido del reloj – Novela expandida

## Arquitectura elegida

La app está construida con **React Native + Expo + TypeScript** sobre una arquitectura modular en `src/`, con navegación principal por **bottom tabs** y pantallas de detalle en un **stack root**. Esta combinación permite mantener la navegación principal estable y, al mismo tiempo, abrir capítulos, cartas, personajes y documentos con más profundidad sin enredar la estructura.

La base de datos actual es **mock relacional** y ya deja preparado el terreno para una futura ingestión del PDF **solo en español**, con enlaces entre:

- capítulos
- personajes
- cartas
- lugares
- cronología
- archivo documental

También incluye persistencia local con `AsyncStorage` para:

- modo claro / oscuro
- tamaño de fuente
- progreso de lectura
- citas favoritas
- subrayados base

## Estructura de carpetas

```text
novela-expandida-app/
  App.tsx
  app.json
  package.json
  src/
    components/
      AppText.tsx
      CoverPlaceholder.tsx
      ListRow.tsx
      ProgressBar.tsx
      QuickLinkGrid.tsx
      SectionHeader.tsx
      SurfaceCard.tsx
      TagPill.tsx
    data/
      index.ts
      mockLibrary.ts
    hooks/
      usePersistedState.ts
      useReaderPreferences.ts
      useReadingProgress.ts
    navigation/
      RootNavigator.tsx
      types.ts
    screens/
      HomeScreen.tsx
      ai/
      archive/
      explore/
      letters/
      read/
    theme/
      ThemeContext.tsx
      theme.ts
    types/
      content.ts
      external.d.ts
    utils/
      formatters.ts
      mockAssistant.ts
```

## Qué incluye este MVP

- `Inicio` con portada placeholder, CTA, accesos rápidos y continuidad de lectura
- `Leer` con listado de capítulos y lector con progreso, cambio de fuente, modo claro/oscuro, citas y subrayado base
- `Cartas` con listado y detalle visual tipo documento
- `Explorar` con personajes, árbol familiar, cronología, lugares y sección especial del reloj
- `Archivo` con placeholders documentales navegables
- `IA` con chat mock y arquitectura inicial para futuro RAG

## Ejecutar el proyecto

Desde `C:\Users\Admin\Desktop\MINE\LIBRO\novela-expandida-app`:

```bash
npm install
npm run start
```

Luego abre la app con Expo:

- `a` para Android
- `i` para iOS, si estás en macOS
- `w` para web

## Verificación técnica

Chequeo de TypeScript:

```bash
npm run typecheck
```

## GitHub y Play Store

La app ya queda preparada para builds Android con Expo EAS:

- `preview`: APK interna para pruebas
- `production`: AAB para Google Play

Consulta también:

- [release-and-publish.md](/C:/Users/Admin/Desktop/MINE/LIBRO/novela-expandida-app/docs/release-and-publish.md)

## Próximos pasos recomendados

1. Sustituir el mock por una capa de ingestión del PDF español.
2. Añadir un índice semántico para preguntas sobre la obra con restricción fuerte al corpus.
3. Incorporar audio para cartas y lectura de fragmentos.
4. Evolucionar `Lugares` hacia mapa real y `Archivo` hacia galería documental.
