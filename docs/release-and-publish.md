# Release And Publish

## Estado actual

La app ya esta preparada para:

- desarrollo con Expo
- build interna Android en APK
- build de produccion Android en AAB
- publicacion posterior en Google Play

## Identificadores editables

Los identificadores estan centralizados en:

- `app.config.ts`
- `.env.example`

Variables disponibles:

- `EXPO_ANDROID_PACKAGE`
- `EXPO_IOS_BUNDLE_IDENTIFIER`

Valor por defecto actual:

- `com.santiagogonzalezlopezpixel.latidodelreloj`

Antes de la primera publicacion real en Google Play, conviene confirmar que ese package name sera el definitivo.

## Ver la app

```bash
npm install
npm run start
```

## Login en Expo

Si aun no has iniciado sesion en Expo:

```bash
npx eas login
```

## Build interna Android

```bash
npm run build:android:preview
```

Esto genera una build interna Android para probar la app en movil antes de publicar.

## Build de produccion Android

```bash
npm run build:android:production
```

Esto genera el `.aab` para Google Play.

## Envio a Google Play

Cuando la ficha de Play Console este creada y el servicio de subida configurado:

```bash
npm run submit:android:production
```

Tambien puedes subir el `.aab` manualmente desde Play Console.

## GitHub

Repo sugerido:

```text
https://github.com/santiagogonzalezlopez-pixel/el-latido-del-reloj-novela-expandida
```

Cuando el repo exista en GitHub, el push inicial sera:

```bash
git push -u origin main
```

Si necesitas configurar el remoto manualmente:

```bash
git remote add origin https://github.com/santiagogonzalezlopez-pixel/el-latido-del-reloj-novela-expandida.git
```

## Orden recomendado

1. Crear el repo remoto en GitHub con ese nombre o uno equivalente.
2. Hacer el primer push de `main`.
3. Iniciar sesion en Expo con `npx eas login`.
4. Lanzar `npm run build:android:preview`.
5. Probar la app en Android real.
6. Crear o abrir la ficha de la app en Google Play Console.
7. Lanzar `npm run build:android:production`.
8. Subir el `.aab` a Play Console.
