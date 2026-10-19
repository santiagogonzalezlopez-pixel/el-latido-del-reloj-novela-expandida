import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';

type Setter<T> = T | ((current: T) => T);

export function usePersistedState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue);
  const [ready, setReady] = useState(false);
  const valueRef = useRef(initialValue);
  const pendingWriteRef = useRef(Promise.resolve());

  useEffect(() => {
    let active = true;

    if (Platform.OS === 'web') {
      try {
        const storedValue = globalThis.localStorage?.getItem(key);

        if (storedValue !== null && storedValue !== undefined) {
          valueRef.current = JSON.parse(storedValue) as T;
          setState(valueRef.current);
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
          valueRef.current = JSON.parse(storedValue) as T;
          setState(valueRef.current);
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

  const updateState = useCallback((nextValue: Setter<T>) => {
    const resolvedValue = typeof nextValue === 'function'
      ? (nextValue as (value: T) => T)(valueRef.current)
      : nextValue;
    valueRef.current = resolvedValue;
    setState(resolvedValue);

    const serializedValue = JSON.stringify(resolvedValue);
    if (Platform.OS === 'web') {
      try {
        globalThis.localStorage?.setItem(key, serializedValue);
      } catch (error) {
        console.warn(`No se pudo guardar ${key}`, error);
      }
    } else {
      // Keep successive saves in order, including when leaving a chapter.
      pendingWriteRef.current = pendingWriteRef.current
        .then(() => AsyncStorage.setItem(key, serializedValue))
        .catch((error) => console.warn(`No se pudo guardar ${key}`, error));
    }
  }, [key]);

  return {
    ready,
    state,
    setState: updateState,
  };
}
