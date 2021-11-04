import { useStore } from '../../../store';

export const useCheckLogin = () => {
  return useStore((state) => state.user) !== null;
};
