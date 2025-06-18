import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Menutwo from './Menutwo'
const NavBarContainer = () => {
  return (
    <section className='w-full flex justify-between border-2 px-10 h-[10vh] items-center text-2xl'>
      <Logo/>
      <Menu/>
      <Menutwo/>
    </section>
  )
}

export default NavBarContainer
