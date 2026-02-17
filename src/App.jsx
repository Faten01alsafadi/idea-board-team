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

export default App;
