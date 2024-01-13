import React from "react"
import "../../Styles/BecomeDriver.css"
import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriver = () => {
  return (
    <>
      <div className="Become_Driver w-full md:h-[450px] h-[250px] md:flex">
        <div className="toyata_img hidden md:block">
          <img className="w-[600px] ml-[120px]" src={driverImg} alt="driverimg" />
        </div>
        <div className="left md:ml-[50px] ml-3 md:w-[45%] ">
          <p className="md:text-[44.8px] text-[20.8px] text-white font-semibold">Do You Want to Earn With Us? So Don't Be Late</p>

          <button className="md:ml-0 ml-24 px-3 py-2 mt-5 text-[#000c6bd0] bg-white rounded-[5px] font-semibold hover:bg-transparent hover:text-white " >Become a Driver</button>
        </div>
      </div>
    </>
  )
}
export default BecomeDriver