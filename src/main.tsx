import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Registration from './pages/Registration/Registration.tsx'
import PrivatePage from './pages/PrivatePage/PrivatePage.tsx'


const router = createBrowserRouter([{
  path: "*",
  element: <div>Not Found</div>
},
{
  path: "/",
  element: <PrivatePage element={<div>private</div>} />
},
{
  path: "/registration",
  element: <Registration />
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
