import React from 'react'

const BodyTwo = (props) => {
  return (
    <section className='bg-amber-50 pb-25'>
          <h1 className='absolute top-30 left-95 text-center font-bold text-9xl font-serif text-white tracking-[25px] pt-50'>COTTON</h1>
      <h2 className=' absolute top-110 left-160 text-center text-2xl pt-8 text-white font-sans tracking-widest'>FLOWER SHOP</h2>
    <div className='pt-30 '>
        <h1 className='text-center text-4xl  font-serif text-red-900'>Fresh, Seasonal, Beautiful</h1>
        <h2 className='text-center text-xl font-sans pt-2'>Order Now and Get Same-Day-Delivery</h2>
    </div>
    <div className='flex gap-4 pt-30  pl-20 pr-20'>
      <div className=''>
        <img className='h-150 w-135' src='https://static.wixstatic.com/media/c837a6_3603ffd76bd043fc906f2235bec309f7~mv2.jpg/v1/fill/w_518,h_689,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3603ffd76bd043fc906f2235bec309f7~mv2.jpg' alt=''/>
        <h1 className='pt-4 font-extrabold  font-serif text-xl'>I am a product</h1>
        <article className='flex font-sans gap-1 text-red-900'>
        <h3 className='line-through '>$75.00 </h3> <span> {props.cost}</span>
        </article>
      </div>
      <div className=''>
        <img className='h-150 w-135' src='https://static.wixstatic.com/media/c837a6_3603ffd76bd043fc906f2235bec309f7~mv2.jpg/v1/fill/w_518,h_689,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3603ffd76bd043fc906f2235bec309f7~mv2.jpg' alt=''/>
        <h1 className='pt-4 font-extrabold  font-serif text-xl'>I am a product</h1>
        <article className='flex font-sans gap-1 text-red-900'>
        <h3 className='line-through '>$75.00 </h3><span>{props.cost}</span>
        </article>
      </div>
      <div className=''>
        <img className='h-150 w-135' src='https://static.wixstatic.com/media/c837a6_3603ffd76bd043fc906f2235bec309f7~mv2.jpg/v1/fill/w_518,h_689,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3603ffd76bd043fc906f2235bec309f7~mv2.jpg' alt=''/>
        <h1 className='pt-4 font-extrabold  font-serif text-xl'>I am a product</h1>
        <article className='flex font-sans gap-1 text-red-900'>
        <h3 className='line-through '>$75.00 </h3><span>{props.cost}</span>
        </article>
      </div>
    </div>
    <div>
        <span className='border bg-red-900 text-white pt-1 pl-2 pb-1 pr-2 absolute top-285 left-19'>VDAY 10% Off</span>
        <span className='border bg-red-900 text-white pt-1 pl-2 pb-1 pr-2 absolute top-285 left-133'>VDAY 10% Off</span>
        <span className='border bg-red-900 text-white pt-1 pl-2 pb-1 pr-2 absolute top-285 left-247'>VDAY 10% Off</span>
    </div>
<button className=' relative top-10 left-170 font-sans border border-red-900 pl-12 pr-12 pt-4 pb-4 text-red-900 '>Shop All</button>
  

        
    </section>
  )
}

export default BodyTwo
