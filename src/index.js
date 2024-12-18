import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Root from "./structure/homeComponent";
import DrawerAppBar from "./structure/entireSite"

// Import the Redux store and Provider
import { Provider } from 'react-redux';

import store from './components/redux/slices/createSlice'

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
    element: <DrawerAppBar />
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

// If you want to start measuring performance in your app, pass a function
// to log results   
//(for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();   
