import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context';
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
