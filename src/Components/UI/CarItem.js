import React from "react"
import { Link } from "react-router-dom";
import "../../Styles/CarItem.css"


const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;
  return (
    <>
      <div className="car_item border-2 border-[#7c8a9736] space-y-4  md:ml-0 ml-3 md:mr-0 mr-3 mb-10">
        <div className="car_img">
          <img className="md:px-5 px-3 md:mt-5 mt-3 " src={imgUrl} alt="car-pic" />
        </div>

        <div className="car_item-content text-center">
          <h4 className="section__title md:text-[28.8px] text-[#000d6b] font-semibold">{carName}</h4>
          <h6 className="car-price md:text-[19.8px] text-[14px] text-[#000d6b] mt-3">${price}.00 <span>/Day</span></h6>
        </div>

        <div className="car_item-info flex justify-evenly md:text-[16px] text-[11.2px]">
          <span>
            <i class="ri-car-line"></i> {model}
          </span>
          <span>
            <i class="ri-settings-2-line"></i> {automatic}
          </span>
          <span>
            <i class="ri-timer-flash-line"></i>{speed}
          </span>
        </div>

        <div className="btn flex justify-center pb-5 md:text-[16px] text-[0.8rem]">
          <button className="bg-[#000d6b] rounded-[5px] rounded-r-none text-white px-16 py-2"><Link to={`/cars/${carName}`}>Rent</Link></button>

          <button className="bg-[#f9a826] rounded-[5px] rounded-l-none text-white px-16 py-2">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>

      </div>

    </>
  )
}
export default CarItem