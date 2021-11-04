import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useStore } from '../../../store';
import { LoginService, UserLocalStorageService } from '../services';

export const useLogin = () => {
  const history = useHistory<{ from?: { pathname: string } }>();
  const setAuthUser = useStore((state) => state.setAuthUser);

  return useCallback(
    (email: string, password: string) => {
      // Fazer pedido à API
      const user = LoginService.login(email, password);

      // Guardar user no estado
      setAuthUser(user);

      // Save user to localStorage
      UserLocalStorageService.save(user);

      // Re-direcionar o user para a página de onde veio, ou /dashboard
      history.push(history.location.state?.from?.pathname || '/dashboard');
    },
    [history, setAuthUser]
  );
};
