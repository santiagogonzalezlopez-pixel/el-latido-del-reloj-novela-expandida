import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

type Setter<T> = T | ((current: T) => T);

export function usePersistedState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;

    if (Platform.OS === 'web') {
      try {
        const storedValue = globalThis.localStorage?.getItem(key);

        if (storedValue !== null && storedValue !== undefined) {
          setState(JSON.parse(storedValue) as T);
        }
      } catch (error) {
        console.warn(`No se pudo leer ${key}`, error);
      } finally {
        if (active) {
          setReady(true);
        }
      }

      return () => {
        active = false;
      };
    }

    async function loadValue() {
      try {
        const storedValue = await AsyncStorage.getItem(key);

        if (active && storedValue !== null) {
          setState(JSON.parse(storedValue) as T);
        }
      } catch (error) {
        console.warn(`No se pudo leer ${key}`, error);
      } finally {
        if (active) {
          setReady(true);
        }
      }
    }

    void loadValue();

    return () => {
      active = false;
    };
  }, [key]);

  const updateState = (nextValue: Setter<T>) => {
    setState((current) => {
      const resolvedValue =
        typeof nextValue === 'function'
          ? (nextValue as (value: T) => T)(current)
          : nextValue;

      if (Platform.OS === 'web') {
        try {
          globalThis.localStorage?.setItem(key, JSON.stringify(resolvedValue));
        } catch (error) {
          console.warn(`No se pudo guardar ${key}`, error);
        }
      } else {
        void AsyncStorage.setItem(key, JSON.stringify(resolvedValue));
      }
      return resolvedValue;
    });
  };

  return {
    ready,
    state,
    setState: updateState,
  };
}
