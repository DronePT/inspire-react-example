import React from 'react';
import ReactDOM from 'react-dom';

import './store';
import './style.css';

import { RouterMap, RouterProvider } from './core';
import { routerConfiguration } from './router-configuration';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider
      checkLoginStatus={() => false}
      unauthorizedRedirectTo='/auth/login'
    >
      <RouterMap routes={routerConfiguration} />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
