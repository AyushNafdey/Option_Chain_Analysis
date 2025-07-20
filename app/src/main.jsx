import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import env from "react-dotenv";
import { GoogleOAuthProvider } from '@react-oauth/google'
import Dashboard from './components/Dashboard/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  }
])
// console.log(import.meta.env.VITE_CLIENT_ID)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId = {import.meta.env.VITE_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
