import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/NavBarComponents/Home'
import App from './App'
import Shop from './Components/NavBarComponents/Shop'
import About from './Components/NavBarComponents/About'
import Contact from './Components/NavBarComponents/Contact'
import Login from './Components/Auth/Login'
import Cart from './Components/NavBarComponents/Cart'
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
                    path:'/shop',
                    element:<Shop/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/contact',
                    element:<Contact/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/cart',
                    element:<Cart/>
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
