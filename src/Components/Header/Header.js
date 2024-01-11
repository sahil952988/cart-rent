import React, { useRef } from "react"
import { NavLink } from "react-router-dom"
import "../../Styles/Header.css"
const Nav_Links = [
  {
    display: "Home",
    path: "/Home",
  },
  {
    display: "About",
    path: "/About",
  },
  {
    display: "Cars",
    path: "/Cars",
  },
  {
    display: "Blogs",
    path: "/Blogs",
  },
  {
    display: "Contact",
    path: "/Contact",
  },
]
const Header = () => {

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <>
      <div className="hidden md:block">
        <div className="top_header flex justify-between  py-3 bg-[#000d6b] text-white">
          <div className="flex space-x-2 ml-[120px] text-[14.4px]">
            <p>Need Help ?</p>
            <p><i class="ri-phone-line"></i> <span>+1-20204555</span></p>
          </div>
          <div className="flex space-x-2 mr-[120px] text-[14.4px]">
            <p><i class="ri-login-circle-line"></i> <span>Login</span></p>
            <p><i class="ri-user-line"></i> <span>Register</span></p>
          </div>
        </div>
      </div>

      {/* ====== MIDDLE HEADER ================ */}

      <div className="hidden md:block">
        <div className="middle_header flex my-3 justify-between text-[#000d6b] font-semibold">
          <div className="flex ml-[120px] space-x-2">
            <p className="text-[40.2px]"><i class="ri-car-line"></i></p>
            <div className="text-[24px]">
              <p>Rent Car</p>
              <p>Service</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <p className="text-[40.2px]"><i class="ri-earth-line"></i></p>
            <div>
              <p className="text-[19.2px]">Nepal</p>
              <p className="text-[16px]">Sanepa, Kathmandu</p>
            </div>
          </div>

          <div className="flex">
            <p className="text-[40.2px]"><i class="ri-time-line"></i></p>
            <div>
              <p className="text-[19.2px]">Sunday-Friday</p>
              <p className="text-[16px]">10am-7pm</p>
            </div>
          </div>

          <button className="bg-[#000d6b] text-white rounded-[5px] mr-[120px] h-10 py-2 px-2 mt-5"><i class="ri-phone-line"></i> <span>Request a call</span></button>
        </div>
      </div>

      {/* ============ END HEADER ======== */}

      <div className="Navigation flex  bg-[#000d6b] md:justify-between">

        <span className="mobile__menu cursor-pointer md:hidden text-white text-[25px] ml-5 my-3">
          <i class="ri-menu-line" onClick={toggleMenu}></i>
        </span>


        <section className="menu md:relative absolute flex md:flex-row flex-col md:pl-[120px] pl-20 md:space-x-10  md:text-white md:py-5 md:z-0 z-[9999] md:bg-transparent bg-gray-300 md:w-0 w-[50%] md:h-0 h-[100%] md:space-y-0 space-y-5 " ref={menuRef} onClick={toggleMenu} >
          {
            Nav_Links.map((item, index) => {
              return (
                <div>
                  <NavLink to={item.path}>{item.display}</NavLink>
                </div>
              )
            })
          }
        </section>






        <div className="nav_right mt-3 md:mr-[120px] bg-[#020a4de9] rounded-[10px] h-10 md:visible invisible">
          <input className=" outline-none bg-transparent pl-4 py-2 text-[#fff]" type="search" placeholder="search" />
          <span className="text-gray-500 pr-2 cursor-pointer"><i class="ri-search-line"></i></span>
        </div>
      </div>


    </>
  )
}
export default Header