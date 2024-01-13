import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../Components/Pages/Home"
import About from "../Components/Pages/About"
import Cars from "../Components/Pages/Cars"
import Blogs from "../Components/Pages/Blogs"
import Contact from "../Components/Pages/Contact"



const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}
export default Router