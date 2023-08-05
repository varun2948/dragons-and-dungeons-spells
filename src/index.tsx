import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store'
import SpellDetails from './pages/spellDetails';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import FavoriteSpells from './pages/FavoriteSpells';

/**
 * Creates a browser router with specified routes.
 * @param routes - An array of route objects.
 * @returns The created browser router.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/favorites",
    element: <FavoriteSpells />,
  },
  {
    path: "/spells/:spell",
    element: <SpellDetails />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Wrap the component with the Redux persist gate */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Wrap the component with the router provider */}
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode >
);

reportWebVitals();
