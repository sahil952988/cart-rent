import React from "react"
import "../../Styles/find-cars-form.css"

const FindCarForm = () => {
  return (
    <>
      <div className="car_form md:absolute md:mt-[-110px] md:ml-[120px] md:mr-[120px] mb-5 bg-white md:flex shadow-2xl ">

        <div className="hidden md:block car_form-left ml-3 h-[250px] w-[450px]">
          <p className="md:text-[44.8px] text-[#000d6b] font-semibold">Find Your Best Car Here</p>
        </div>

        <div className="small_screen md:hidden my-5">
          <p className=" flex justify-center md:text-[44.8px] text-[1rem] text-[#000d6b] font-semibold">Find Your Best Car Here</p>
        </div>


        <div className="form_right md:flex md:space-x-5 items-center md:gap-5 md:pl-[40px] md:pr-[40px] ">

          <div className="form_address ">
            <div className="md:flex flex-col md:ml-0 ml-5 md:mr-0 mr-5 md:mb-0 mb-5">
              <input className="mb-5 border-2 border-[#7c8a972a] pl-3 py-2 md:w-[250px] w-[100%] outline-none" type="text" placeholder="Form Address" required />

              <input className=" border-2 border-[#7c8a972a] pl-3 py-2 md:w-[250px] w-[100%] outline-none" type="Number" placeholder="Quantity" required />
            </div>
          </div>

          <div className="flex flex-col md:ml-0 ml-5 md:mr-0 mr-5 md:mb-0 mb-5">
            <input className="mb-5 border-2 border-[#7c8a972a] pl-3 py-2 md:w-[250px] w-[100%] outline-none" type="text" placeholder="To Address" required />

            <select className="pl-2 py-2 border-2 border-[#7c8a972a] text-[#7c8a97] md:w-[250px] w-[100%]" required >
              <option value="">AC Car</option>
              <option value="">Non-AC Car</option>
            </select>
          </div>

          <div className="form_date md:flex flex-col md:ml-0 ml-5 md:mr-0 mr-5">
            <input className="mb-5 border-2 border-[#7c8a972a] pl-3 py-2 md:w-[250px] w-[100%] outline-none" type="date" placeholder="Journey Date" required />

            <button type="submit" className="cursor-pointer pl-2 py-2 md:w-[250px] w-[100%] bg-[#000d6b] text-white rounded-[5px] md:mb-0 mb-10">Find Car</button>
          </div>
        </div>




      </div>
    </>
  )
}
export default FindCarForm