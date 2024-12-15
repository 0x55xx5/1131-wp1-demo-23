import React from 'react';
import ReactDOM from 'react-dom/client';
import App_xx from './App_xx';
import './index.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MyDataProvider} from "../src/gxcontext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyDataProvider>
      <ToastContainer position='top-center' autoClose={2000} />
      <App_xx />
    </MyDataProvider>
  </React.StrictMode>
);
