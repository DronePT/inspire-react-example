import { UserEntity } from '../../User';
import { UserLocalStorageService } from '../services';

interface AuthSlice {
  user: UserEntity | null;
  setAuthUser: (auth: any) => void;
}

export const createAuthSlice = (set: any, get: any): AuthSlice => {
  return {
    user: UserLocalStorageService.load(),
    setAuthUser: (user: UserEntity | null) =>
      set((state: AuthSlice) => void (state.user = user)),
  };
};
