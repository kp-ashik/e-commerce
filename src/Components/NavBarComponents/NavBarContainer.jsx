import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Menutwo from './Menutwo'
const NavBarContainer = () => {
  return (
    <section className=' flex justify-between font-thin h-[9vh] items-center text-sans'>
      <Logo/>
      <Menu/>
      <Menutwo/>
    </section>
  )
}

export default NavBarContainer
