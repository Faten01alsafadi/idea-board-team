import React from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import NavBar from '../../sections/NavBar/NavBar'
import Hero from '../../sections/Component/Hero/Hero'

function Landing() {
  return (
    // استدعو اقسامكن هون بدل بال
    // App
    // بالترتيب الصحيح
    <div>
      <NavBar/>
      <Hero/>
       {/* <SignIn/>
       <SignUp/> */}
        {/* مثال */}
      {/* <Nav/> */}
      {/* <Hero/> */}
      
    </div>
  )
}

export default Landing
