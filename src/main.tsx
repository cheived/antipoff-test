import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Registration } from './pages/Registration'
import { PrivatePage } from './pages/PrivatePage'
import { Home } from './pages/Home'
import { UserInfo } from './pages/UserInfo'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import { Login } from './pages/Login'



const router = createBrowserRouter([{
  path: "*",
  element: <div>Not Found</div>
},
{
  path: "/",
  element: <PrivatePage element={<Home />} />
},
{
  path: "/registration",
  element: <Registration />
},
{
  path: "/users/:userId",
  element: <PrivatePage element={<UserInfo />} />
},
{
  path: "/login",
  element: <Login />
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
