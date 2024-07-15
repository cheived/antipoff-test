import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Registration from './pages/Registration/Registration.tsx'
import PrivatePage from './pages/PrivatePage/PrivatePage.tsx'
import Home from './pages/Home/Home.tsx'
import UserInfo from './pages/UserInfo/UserInfo.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import Login from './pages/Login/Login.tsx'



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
