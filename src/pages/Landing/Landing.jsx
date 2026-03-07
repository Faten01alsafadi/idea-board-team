import React from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import NavBar from '../../sections/NavBar/NavBar'
import Hero from '../../sections/Component/Hero/Hero'
import IdeaForm  from '../../sections/IdeaForm/IdeaForm'
function Landing() {
  return (
    // استدعو اقسامكن هون بدل بال
    // App
    // بالترتيب الصحيح
    <div>
      <NavBar/>
        <Hero 
    title="Turn Your Ideas Into"
    highlight="Reality"
    description="Capture, organize, and bring your creative vision to life ...one idea at a time "
    backgroundImage="/assets/images/photo_٢٠٢٦-٠١-٢٩_١٤-١٩-٤٦.jpg"
/>
<IdeaForm/>
       {/* <SignIn/>
       <SignUp/> */}
        {/* مثال */}
      {/* <Nav/> */}
      {/* <Hero/> */}
      
    </div>
  )
}

export default Landing
