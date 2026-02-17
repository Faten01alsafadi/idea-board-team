import { BrowserRouter, Route, Routes } from "react-router"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import Landing from "./pages/Landing/Landing"

import React from "react";
import IdeaForm from "./sections/IdeaForm/IdeaForm";
function App() {
  return (
    <>
  <IdeaForm/>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
import Hero from './sections/Component/Hero/Hero'
// import IdeaForm from "./sections/IdeaForm/IdeaForm";
function App(){
return(
    <div>
    <Hero 
    title="Turn Your Ideas Into"
    highlight="Reality"
    description="Capture, organize, and bring your creative vision to life ...one idea at a time "
    backgroundImage="/assets/images/photo_٢٠٢٦-٠١-٢٩_١٤-١٩-٤٦.jpg"
/>
{/* <IdeaForm/> */}
</div>
);
};
export default App;

