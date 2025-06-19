import React from 'react'
import NavBarContainer from './Components/NavBarComponents/NavBarContainer'
import AboveHeader from './Components/Top_para/AboveHeader'
import BodyOne from './Components/BodyParts/BodyOne'
import BodyTwo from './Components/BodyParts/BodyTwo'
import BodyThree from './Components/BodyParts/BodyThree'
import BodyFour from './Components/BodyParts/BodyFour'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <section>
    <div className='text-center gap-4 bg-red-900 text-white'>
      <AboveHeader/>
    </div>
    <div className='bg-amber-50 '>
      <NavBarContainer/>
    </div>
    <BodyOne/>
    <BodyTwo cost='$67.50'/>
    <BodyThree/>
    <BodyFour/>
  
    <Footer/>
    </section>
  )
}

export default App
