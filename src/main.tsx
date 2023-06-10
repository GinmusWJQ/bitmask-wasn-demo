import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import __wbg_init from 'bitmask-core';
import './index.css';

__wbg_init().then((wasm) => {
  console.log(wasm);

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
