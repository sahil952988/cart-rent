import React from "react"
import { Helmet } from "../Helmet/Helmet"
import CommonSection from "../UI/CommonSection"
import BMWCAR from "../../assets/all-images/cars-img/bmw-offer.png"
import Drive_img from "../../assets/all-images/drive.jpg"


const About = () => {
  return (
    <>
      <Helmet title="About">
        <CommonSection title="About Us" />

        <div className="about_us_page md:flex md:ml-[120px] ml-5 md:mt-[80px]">
          <div className="left md:mr-[50px] mr-3 md:w-[45%] ">
            <p className="md:text-[19.2px] text-[17px] text-[#f9a826]">About Us</p>
            <p className="md:text-[32px] text-[24px] text-[#000d6b] mt-5">Welcome to car rent service</p>
            <p className="md:text-[14px] text-[11px] text-[#7c8a97] font-semibold my-5">Our companies operate by purchasing or leasing a number of fleet vehicles and renting them to their customers for a fee. Rental fleets can be structured in several ways – they can be owned outright (these are known as 'risk vehicles' because the car rental operator is taking a risk on how much the vehicle will be sold for when it is removed from service), they can be leased, or they can be owned under a guaranteed buy-back program arranged directly through a manufacturer or manufacturer's financial arm (these are known as 'repurchase vehicles' because the manufacturer outlines the exact price of original sale and of repurchase at the end of a defined term).</p>

            <div className="services flex text-[#7c8a97] gap-5 md:text-[16px] text-[9.6px]">
              <div className="flex flex-col space-y-3">
                <p><i class="ri-checkbox-circle-line"></i> <span>Loss Damage Waiver</span></p>
                <p><i class="ri-checkbox-circle-line"></i> <span>Collision Damage Waiver</span></p>
              </div>

              <div className="flex flex-col space-y-3">
                <p><i class="ri-checkbox-circle-line"></i> <span>personal Effects Coverage</span></p>
                <p><i class="ri-checkbox-circle-line"></i> <span>Excess Insurance</span></p>
              </div>
            </div>

          </div>

          <div className="car_img ">
            <img className="w-[700px] mr-40" src={BMWCAR} alt="bmw-car" />
          </div>
        </div>




        <div className="About_page md:flex mt-20 md:ml-[120px] md:mr-[120px] mr-3 mb-20">
          <div className="drive_img hidden md:block">
            <img className="w-[600px] rounded-[5px] " src={Drive_img} alt="drive" />
          </div>

          <div className="left-info md:ml-[40px] md:w-[60%] ml-5">
            <p className="text-[#000d6b] md:text-[32px] text-[24px] font-semibold">We Are Committed To Provide Safe Ride Solutions</p>
            <p className="text-[#7c8a97] md:text-[14px] text-[13px] mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et dolore est tempore rem minima adipisci magni dolorum ipsam.</p>

            <p className="text-[#7c8a97] md:text-[14px] text-[13px] mt-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et dolore est tempore rem minima adipisci magni dolorum ipsam.</p>

            <div className="flex mt-5 gap-3">
              <p className="text-[24px] mt-5"><i class="ri-phone-line"></i></p>

              <div className="">
                <p className="text-[#f9a826] md:text-[19.2px] text-[17px]">Need any Help?</p>
                <p className="text-[#000d6b] md:text-[24px] text-[17px] ">+00123456789</p>
              </div>
            </div>
          </div>

        </div>
      </Helmet>
    </>
  )
}
export default About