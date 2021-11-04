import createStore from 'zustand';

import {
  createAuthSlice
} from '../modules';

type StateFromFunctions<T extends [...any]> = T extends [infer F, ...infer R]
  ? F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;

export type AppState = StateFromFunctions<[
  typeof createAuthSlice
]>;

export const useStore = createStore<AppState>((set, get) => ({
  ...createAuthSlice(set, get),
}));
