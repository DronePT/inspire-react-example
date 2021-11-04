import { RouteEntry, buildRouterConfiguration } from './core';
import { DashboardPage, HomePage, LoginPage } from './modules';

export const router: RouteEntry[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/auth/login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/dashboard',
    exact: true,
    component: DashboardPage,
    requiresAuth: true,
  },
];

export const routerConfiguration = buildRouterConfiguration(router);
