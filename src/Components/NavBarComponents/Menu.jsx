import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <section className='flex gap-8 pl-60 pb-3'>
    <NavLink to='/' className=' text-red-900 '>Home</NavLink>
    <NavLink to='/shop' className=' '>Shop</NavLink>
    <NavLink to='/about' className='  '>About</NavLink>
    <NavLink to='/contact' className=''>Contact</NavLink>
    </section>
  )
}

export default Menu
