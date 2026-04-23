# Release And Publish

## Estado actual

La app ya está preparada para:

- desarrollo con Expo
- build interna Android en APK
- build de producción Android en AAB
- subida posterior a Google Play

## Identificadores editables

Los identificadores están centralizados en:

- `app.config.ts`
- `.env.example`

Variables:

- `EXPO_ANDROID_PACKAGE`
- `EXPO_IOS_BUNDLE_IDENTIFIER`

Antes de la primera subida real a Google Play, confirma el package definitivo.

## Ver la app

```bash
npm install
npm run start
```

## Build interna Android

```bash
npx eas-cli build --platform android --profile preview
```

Esto genera un `.apk` instalable para probar en móvil.

## Build de producción Android

```bash
npx eas-cli build --platform android --profile production
```

Esto genera un `.aab` para Google Play.

## Publicar en Google Play

1. Crear o abrir la app en Play Console.
2. Subir el `.aab` generado por EAS.
3. Completar ficha, capturas, icono, privacidad y clasificación.
4. Enviar a revisión.

## GitHub

Si el repo aún no existe en remoto:

```bash
git init
git add .
git commit -m "Prepare Expo app for GitHub and Play Store"
git branch -M main
git remote add origin <REPO_URL>
git push -u origin main
```

## Siguiente paso recomendado

1. Confirmar package name final.
2. Crear repo remoto GitHub.
3. Hacer primer commit limpio.
4. Lanzar build `preview`.
5. Revisar la app en Android real.
6. Lanzar build `production`.
