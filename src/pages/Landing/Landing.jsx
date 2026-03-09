import React from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import NavBar from '../../sections/NavBar/NavBar'
import Hero from '../../sections/Component/Hero/Hero'
import IdeaForm  from '../../sections/IdeaForm/IdeaForm'
import CardContainer from '../../sections/CardContainer/CardContainer'
import Footer from '../../sections/Footer/Footer'
import styles from "./Landing.module.css"
function Landing() {
  return (
    // استدعو اقسامكن هون بدل بال
    // App
    // بالترتيب الصحيح
  <div className={styles.landingPage}>
    
<div className={styles.fullContainer}>
        <NavBar/>
       
        <Hero 
    title="Turn Your Ideas Into"
    highlight="Reality"
    description="Capture, organize, and bring your creative vision to life ...one idea at a time "
    backgroundImage="/assets/images/photo_٢٠٢٦-٠١-٢٩_١٤-١٩-٤٦.jpg"
/>
</div>
 <div className={styles.container}>
<IdeaForm/>
<CardContainer/>
<Footer/>
       {/* <SignIn/>
       <SignUp/> */}
        {/* مثال */}
      {/* <Nav/> */}
      {/* <Hero/> */}
      
    </div>
  </div>
  )
}

export default Landing
