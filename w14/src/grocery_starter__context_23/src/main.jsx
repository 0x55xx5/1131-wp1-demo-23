import React from 'react';
import ReactDOM from 'react-dom/client';
import App_xx from './App_xx';
import './index.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useMyDataProvider} from "./components/gxContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <useMyDataProvider>
      <ToastContainer position='top-center' autoClose={2000} />
      <App_xx />
    </useMyDataProvider>
  </React.StrictMode>
);
