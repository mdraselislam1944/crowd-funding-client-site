import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Providers/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './Components/Routes/Routes';
import { Provider } from 'react-redux';
import store from './Redux/store';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </AuthProvider>
    </Provider>
 ,
)