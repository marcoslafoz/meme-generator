import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Main } from './modules/scenes/main'
import reportWebVitals from './modules/utils/reportWebVitals';
import { NextUIProvider } from '@nextui-org/system';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <Main />
    </NextUIProvider>
  </React.StrictMode>
);

reportWebVitals();
