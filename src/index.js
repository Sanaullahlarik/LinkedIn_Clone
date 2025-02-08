import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from "./Store/Store";

// Create a root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
