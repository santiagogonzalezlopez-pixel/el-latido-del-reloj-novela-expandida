import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

type Setter<T> = T | ((current: T) => T);

export function usePersistedState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;

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

      void AsyncStorage.setItem(key, JSON.stringify(resolvedValue));
      return resolvedValue;
    });
  };

  return {
    ready,
    state,
    setState: updateState,
  };
}
