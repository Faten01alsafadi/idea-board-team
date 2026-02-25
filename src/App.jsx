import { BrowserRouter, Route, Routes } from "react-router"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn";

import Landing from "./pages/Landing/Landing"



import NavBar from "./sections/NavBar/NavBar";
import Footer from "./sections/Footer/Footer";





function App() {


  return (
    <>

    
{/* <NavBar/> */}
{/* <Footer/> */}
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

export default App
