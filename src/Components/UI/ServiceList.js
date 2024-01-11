import React from "react"
import serviceData from "../../assets/data/serviceData"

export const ServiceList = () => {
  return (
    <>
      {
        serviceData.map((item, index) => {
          return (
            <div className="md:ml-[120px] ml-5 md:mr-[120px] mr-3" key={index}>
              <div className="Icon text-[#f9a826] text-[40px]"><i class={item.icon} /></div>
              <div className="Title md:text-[19.2px] text-[17px] hover:text-[#f9a826] text-[#000d6b]">{item.title}</div>
              <div className="Desc text-[#7c8a97] md:text-[14.4px]">{item.desc}</div>
            </div>
          )
        })
      }









    </>
  )
}