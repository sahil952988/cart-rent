import React from 'react'
import "../../Styles/OurMembers.css"
import ava01 from "../../assets/all-images/ava-1.jpg"
import ava02 from "../../assets/all-images/ava-2.jpg"
import ava03 from "../../assets/all-images/ava-3.jpg"
import { Link } from 'react-router-dom'

const OUR__MEMBERS = [
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "David Lisa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {
        OUR__MEMBERS.map((item) => {
          return (
            <div className="members-details border-2 border-[#7c8a9736] ">
              <div className="single__member-img">
                <img className='rounded-[5px] w-[100%]' src={item.imgUrl} alt="members-img" />



                <div className="single__member-social">
                  <Link to={item.fbUrl}>
                    <i class="ri-facebook-line"></i>
                  </Link>
                  <Link to={item.twitUrl}>
                    <i class="ri-twitter-line"></i>
                  </Link>

                  <Link to={item.linkedinUrl}>
                    <i class="ri-linkedin-line"></i>
                  </Link>

                  <Link to={item.instUrl}>
                    <i class="ri-instagram-line"></i>
                  </Link>
                </div>

              </div>

              <div className="Name text-[#000d6b] flex justify-center mt-4">
                <p>{item.name}</p>
              </div>
              <div className="experience flex justify-center mb-5">
                <p className='text-[#7c8a97] md:text-[14.4px]'>{item.experience}</p>
              </div>


            </div>
          )
        })
      }
    </>
  )
}
export default OurMembers