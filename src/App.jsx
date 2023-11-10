import { Route, Routes } from "react-router-dom"
import Landing from "./COMPONENTS/Landing"
import Onboarding1 from "./COMPONENTS/Onboarding1"
import Onboarding2 from "./COMPONENTS/Onboarding2"
import Onboarding3 from "./COMPONENTS/Onboarding3"
import Onboarding4 from "./COMPONENTS/Onboarding4"
import Signup from "./COMPONENTS/Signup"
import Login from "./COMPONENTS/Login"
import ForgetPassword from "./COMPONENTS/ForgetPassword"
import VerifyPassword from "./COMPONENTS/VerifyPassword"
import HomePage from "./COMPONENTS/HomePage"
import ResetPassword from "./COMPONENTS/ResetPassword"
import Bookflight from "./COMPONENTS/Bookflight"
import Admin from "./COMPONENTS/Admin"
import Details from "./COMPONENTS/Details"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/onboard1" element={<Onboarding1/>} />
        <Route path="/onboard2" element={<Onboarding2/>} />
        <Route path="/onboard3" element={<Onboarding3/>} />
        <Route path="/onboard4" element={<Onboarding4/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        <Route path="/verify" element={<VerifyPassword/>} />
        <Route path="/reset" element={<ResetPassword/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/book" element={<Bookflight/>} />
        <Route path="/admin1" element={<Admin/>} />
        <Route path="/flightdetails" element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
