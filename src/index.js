import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {RouterProvider, Outlet} from 'react-router-dom'
import {router} from './router/router';
import {Provider} from 'react-redux'
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router}>
  <React.StrictMode>
  
    
    <Outlet />
  </React.StrictMode>
  </RouterProvider>
  </Provider>
);

reportWebVitals();
