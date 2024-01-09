import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../Components/Pages/Home"
import About from "../Components/Pages/About"
import Cars from "../Components/Pages/Cars"
import Blogs from "../Components/Blogs"



const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
    </>
  )
}
export default Router