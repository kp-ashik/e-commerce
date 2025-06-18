import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <section className='flex gap-2'>
    <NavLink to='/' className=' rounded-md pl-4 pr-4 pt-2 pb-2 '>Home</NavLink>
    <NavLink to='/login' className=' rounded-md pl-4 pr-4 pt-2 pb-2'>Shop</NavLink>
    <NavLink to='/register' className=' rounded-md pl-4 pr-4 pt-2 pb-2'>About</NavLink>
    <NavLink to='/register' className=' rounded-md pl-4 pr-4 pt-2 pb-2'>Contact</NavLink>
    </section>
  )
}

export default Menu
