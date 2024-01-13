import React from "react"
import Slider from "react-slick"

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="overflow-hidden md:ml-[120px] md:mr-[120px] " >
        <div className="testimonial py-4 px-3 w-[25%]">
          <p className="section__description md:text-[14.4px] text-[12px] text-[#7c8a97]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
            explicabo molestias recusandae repudiandae, dolor, sapiente placeat
            ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
            voluptate odit?
          </p>

          <div className="mt-5 flex align-items-center gap-4">
            <img src={ava01} alt="" className="w-[25%] h-[25%] rounded-2" />
            <div>
              <h6 className="mb-0 mt-3  text-[#000d6b]">Jhon Doe</h6>
              <p className="section__description text-[#7c8a97]">Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3 w-[25%]">
          <p className="section__description md:text-[14.4px] text-[12px] text-[#7c8a97]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
            explicabo molestias recusandae repudiandae, dolor, sapiente placeat
            ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
            voluptate odit?
          </p>

          <div className="mt-5 flex align-items-center gap-4">
            <img src={ava02} alt="" className="w-[25%] h-[25%] rounded-2" />
            <div>
              <h6 className="mb-0 mt-3 text-[#000d6b]">Jhon Doe</h6>
              <p className="section__description text-[#7c8a97]">Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3 w-[25%]">
          <p className="section__description md:text-[14.4px] text-[12px] text-[#7c8a97]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
            explicabo molestias recusandae repudiandae, dolor, sapiente placeat
            ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
            voluptate odit?
          </p>

          <div className="mt-5 flex align-items-center gap-4">
            <img src={ava03} alt="" className="w-[25%] h-[25%] rounded-2" />
            <div>
              <h6 className="mb-0 mt-3  text-[#000d6b]">Jhon Doe</h6>
              <p className="section__description text-[#7c8a97]">Customer</p>
            </div>
          </div>
        </div>


        <div className="testimonial py-4 px-3 w-[25%]">
          <p className="section__description md:text-[14.4px] text-[12px] text-[#7c8a97]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
            explicabo molestias recusandae repudiandae, dolor, sapiente placeat
            ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
            voluptate odit?
          </p>

          <div className="mt-5 flex align-items-center gap-4">
            <img src={ava04} alt="" className="w-[25%] h-[25%] rounded-2" />
            <div>
              <h6 className="mb-0 mt-3">Jhon Doe</h6>
              <p className="section__description text-[#7c8a97]">Customer</p>
            </div>
          </div>
        </div>



      </Slider>
    </>
  )
}
export default Testimonial