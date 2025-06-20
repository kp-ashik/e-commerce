import React from 'react'
import { NavLink } from 'react-router-dom'
const AboveHeader = () => {
  return (
    <section className='font-sans font-bold pt-2 pb-2' >
      <p>Valentine’s Day Promotions <NavLink to='/shop' className='underline'>   Shop Now </NavLink>❤️ </p>
    </section>
  )
}

export default AboveHeader
