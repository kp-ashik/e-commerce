import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/NavBarComponents/Home'
import App from './App'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
const Routers = () => {
    const allRoutes = createBrowserRouter([
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/register',
                    element:<Register/>
                },
            ]
        }
    ])
  return (
    <section>
      < RouterProvider router={allRoutes}/>
    </section>
  )
}

export default Routers
