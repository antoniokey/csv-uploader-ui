import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { configAxios } from './config/axios';

configAxios();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />

    <ToastContainer
      closeOnClick={true}
      autoClose={3000}
      position='bottom-right'
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
