import { usePersistedState } from './usePersistedState';

const STORAGE_KEY = 'novela-expandida-has-seen-onboarding';

export function useOnboardingPreference() {
  return usePersistedState<boolean>(STORAGE_KEY, false);
}
