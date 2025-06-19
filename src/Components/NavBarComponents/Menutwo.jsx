import React from 'react'
import { NavLink } from 'react-router-dom'
const Menutwo = () => {
  return (
    <section className='px-10 pb-3'>
    <NavLink to='/login' className=' rounded-md pl-4 pr-4 pt-2 pb-2 '>Login</NavLink>
    <NavLink to='/cart' className=' rounded-md pl-4 pr-4 pt-2 pb-2 text-xl text-red-900'>Cart(0)</NavLink>
    </section>
  )
}

export default Menutwo
