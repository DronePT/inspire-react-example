import { useCallback } from 'react';
import { useStore } from '../../../store';
import { UserLocalStorageService } from '../services';

export const useLogout = () => {
  const setUser = useStore((state) => state.setAuthUser);
  const logout = useCallback(() => {
    setUser(null);
    UserLocalStorageService.remove();
  }, [setUser]);

  return logout;
};
