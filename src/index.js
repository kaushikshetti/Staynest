import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { FavoritesProvider } from './contexts/FavoritesContext';
import Root from "./pages/homeComponent";
///import Main from "./entireSite"
import Main from "./pages/index"
// Import the Redux store and Provider
import { Provider } from 'react-redux';

import store from './redux/slices/createSlice'

const router = createBrowserRouter([
  {
    path: "/main",
    element: <App />,
  },
  {
    path: "/home",
    element: <Root />
  },
  {
    path: "/",
    element: <Main />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </Provider>
  </React.StrictMode>
);
