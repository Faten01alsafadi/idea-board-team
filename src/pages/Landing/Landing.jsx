import React from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

function Landing() {
  return (
    // استدعو اقسامكن هون بدل بال
    // App
    // بالترتيب الصحيح
    <div>
       <SignIn/>
       <SignUp/>
        {/* مثال */}
      {/* <Nav/> */}
      {/* <Hero/> */}
      
    </div>
  )
}

export default Landing
