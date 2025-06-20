import React from 'react'
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { MessageSquareText } from 'lucide-react';

const Footer = () => {
  return (
    <section>
    <table className=' flex pl-30 bg-orange-100 pt-40 pb-20'>
        <tr className='border border-white pl-25 pr-25 pt-30 '>
          <td className='pb-20' rowSpan="5"><a href=''><h1 className='border pl-8 pr-8 pt-5 pb-5 bg-red-900 text-white text-4xl font-serif'>C</h1>
          <h1 className='text-red-900'>Flower Shop</h1></a>
          </td>
  
        </tr>
        <tr className='flex flex-col border border-white pl-20 pr-20 pt-15 text-center gap-5 pb-20 font-sans'>
          <th className='text-2xl text-red-900 font-serif'>Quick Menu</th>
          <td className='font-sans hover:cursor-pointer'>Home</td>
          <td className='font-sans  hover:cursor-pointer'>Shop</td>
          <td className='font-sans  hover:cursor-pointer'>Address</td>
          <td className='font-sans  hover:cursor-pointer'>Contact</td>
        </tr>
        <tr className='flex flex-col border border-white pl-20 pr-20 pt-15 text-center gap-5 pb-20'>
          <th className='text-2xl text-red-900 font-serif '>Policy</th>
          <td className='font-sans  hover:cursor-pointer'>Shipping & Returns</td>
          <td className='font-sans  hover:cursor-pointer'>Store Policy</td>
          <td className='font-sans  hover:cursor-pointer'>Payment Methods</td>
          <td className='font-sans  hover:cursor-pointer'>FAQ</td>
        </tr>
        <tr className='flex flex-col border border-white pl-20 pr-20 pt-15 text-center gap-6 pb-20'>
          <th className='text-2xl text-red-900 font-serif'>Address</th>
          <td className='font-sans'>500 Terry Francine Street</td>
          <td className='font-sans'>San Francisco, CA 94158</td>
         <p  className='flex relative top-8 left-8 font-sans'>Follow <a className='flex' href=''><Facebook/> <Instagram/></a></p>
        </tr>

    </table>
<div className='bg-orange-100'>
    <p className='text-center pb-10 font-serif font-thin'>© 2035 by COTTON. Powered and secured by <a className='underline' href=''>Wix</a></p>

          <p className='absolute top-1035 right-5 w-15 text-2xl border pr-4 pl-4 pb-4 pt-4 bg-red-900 text-white hover:cursor-pointer'><MessageSquareText />
</p>
</div>
    </section>

  )
}

export default Footer
