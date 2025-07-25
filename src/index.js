import React from 'react';
import App from './App';
import './index.css';
import './Tooltip/tippy.css';

import { Provider } from 'react-redux';
import store from './state/createStore';
import {createRoot} from "react-dom/client";

const root = document.getElementById('root')

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
