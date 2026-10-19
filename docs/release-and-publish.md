# Publicar y actualizar la app

La web y la app de Google Play tienen publicaciones independientes. Publicar en GitHub Pages no actualiza la instalación de Google Play.

## Destinos actuales

- Repositorio: https://github.com/santiagogonzalezlopez-pixel/el-latido-del-reloj-novela-expandida
- Web: https://santiagogonzalezlopez-pixel.github.io/el-latido-del-reloj-novela-expandida/
- Google Play: https://play.google.com/store/apps/details?id=com.santiagogonzalezlopezpixel.latidodelreloj
- Proyecto Expo: `@munjoie/el-latido-del-reloj-novela-expandida`
- Identificador Android: `com.santiagogonzalezlopezpixel.latidodelreloj`

Las actualizaciones de Android deben conservar este identificador y la firma existente. EAS guarda las credenciales de firma en el proyecto de Expo.

## Comprobaciones antes de publicar

```bash
npm ci
npm run typecheck
npm run build:web
```

Comprobar la lectura, la recuperación del progreso, las imágenes y la navegación. Para probar una instalación Android antes de publicar:

```bash
npx eas-cli build --platform android --profile preview
```

El perfil `preview` genera un APK para pruebas. Google Play requiere el AAB del perfil `production`.

## Actualizar la web

Guardar los cambios en `main` y subirlos al repositorio. La acción `Deploy Web To GitHub Pages` compila y publica `dist/` automáticamente. Verificar que termina correctamente y abrir la URL pública.

## Actualizar Google Play

1. Cambiar la versión visible en `app.config.ts`, `package.json` y la entrada raíz de `package-lock.json`.
2. Ejecutar las comprobaciones y guardar los cambios en un commit.
3. Iniciar sesión en la cuenta de Expo que tiene acceso al proyecto:

   ```bash
   npx eas-cli login --browser
   ```

4. Crear el paquete de producción:

   ```bash
   npx eas-cli build --platform android --profile production
   ```

   `eas.json` usa `appVersionSource: remote` y `autoIncrement: true`: EAS asigna un `versionCode` nuevo. No reutilizar el código de una versión anterior. Las compilaciones gratuitas pueden esperar en cola.

5. Descargar el archivo `.aab` de la compilación terminada. Comprobar la versión, el código, el commit y el perfil `production`.
6. En Google Play Console, abrir **El latido del reloj → Producción → Crear nueva versión**. Subir el AAB y añadir las notas de la versión.
7. Revisar los errores y avisos de Google Play, confirmar la versión y enviar los cambios a revisión desde el resumen de publicación.
8. Comprobar el estado de la revisión. Con la publicación gestionada desactivada, los cambios aprobados se publican automáticamente; si está activada, hay que publicarlos después de la aprobación.

Cuando la actualización esté disponible, Google Play mostrará **Actualizar** a los usuarios que tengan una versión anterior. También podrá instalarla automáticamente según los ajustes del dispositivo.

La subida mediante `npx eas-cli submit --platform android --profile production` es una alternativa si se configura el acceso de EAS a Google Play. La configuración actual permite la subida manual desde Play Console.

## Actualizaciones sin pasar por la tienda

Esta app no tiene EAS Update configurado. No usar `eas update` como sustituto de una nueva publicación en Google Play. Incorporar ese mecanismo requiere configurarlo y distribuir primero una versión Android compatible.
