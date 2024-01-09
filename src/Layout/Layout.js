import React from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Router from "../Routers/Router"

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <div>
          <Router />
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Layout