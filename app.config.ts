import { ExpoConfig, ConfigContext } from 'expo/config';

const APP_NAME = 'El latido del reloj';
const APP_SLUG = 'el-latido-del-reloj-novela-expandida';
const APP_SCHEME = 'latidodelreloj';
const APP_VERSION = '1.0.0';
const WEB_BASE_URL = '/el-latido-del-reloj-novela-expandida';
const ANDROID_PACKAGE =
  process.env.EXPO_ANDROID_PACKAGE ??
  'com.santiagogonzalezlopezpixel.latidodelreloj';
const IOS_BUNDLE_IDENTIFIER =
  process.env.EXPO_IOS_BUNDLE_IDENTIFIER ??
  'com.santiagogonzalezlopezpixel.latidodelreloj';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: APP_NAME,
  slug: APP_SLUG,
  version: APP_VERSION,
  orientation: 'portrait',
  icon: './assets/icon.png',
  scheme: APP_SCHEME,
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  splash: {
    image: './assets/splash-icon.png',
    resizeMode: 'contain',
    backgroundColor: '#f5efe2',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: IOS_BUNDLE_IDENTIFIER,
  },
  android: {
    package: ANDROID_PACKAGE,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#f5efe2',
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
    output: 'single',
  },
  experiments: {
    baseUrl: WEB_BASE_URL,
  },
  plugins: ['expo-font'],
  extra: {
    ...config.extra,
    appVariant: process.env.APP_VARIANT ?? 'production',
    eas: {
      projectId: '25b5ecc9-f96f-4e43-a1ae-e78b8f61e648',
    },
  },
});
