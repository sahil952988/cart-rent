import React from 'react'
import { Helmet } from '../Helmet/Helmet'
import CommonSection from '../UI/CommonSection'

const Contact = () => {
  return (
    <>
      <Helmet title="Contact">
        <CommonSection title="Contact Us" />
        <div className="conact md:flex mt-16">

          <div className="left-side md:ml-[120px] ml-5 md:mr-[120px] mr-3  md:w-[50%]">
            <p className="text-[#000d6b] font-semibold">Get In Touch</p>

            <form className='mt-5'>
              <div className="Name">
                <input className='w-[100%] border-2 border-[#7c8a9736] outline-none rounded-[5px] pl-3 py-2' type="text" placeholder='Your Name' />
              </div>
              <div className="Email">
                <input className='w-[100%] border-2 border-[#7c8a9736] outline-none rounded-[5px] pl-3 py-2 my-5' type="email" placeholder='Your Email' />
              </div>

              <div className="message">
                <textarea
                  className="textarea w-[100%] border-2 border-[#7c8a9736] outline-none rounded-[5px] pl-3 py-2"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type={'submit'} className="contact__btn bg-[#000d6b] text-white px-3 py-2 rounded-[5px] my-3" type="submit">
                Send Message
              </button>
            </form>
          </div>

          <div className="right-side space-y-3 md:ml-0 ml-5 md:mb-0 mb-10 md:mt-0 mt-8 ">
            <p className="text-[#000d6b] font-semibold">Contact Information</p>
            <p className="md:text-[14px]">Sanepa Kathmandu, Nepal</p>
            <p className="text-[#000d6b]">Phone : <span className="md:text-[14.4px]">+977-123456789</span></p>
            <p className="text-[#000d6b]">Email : <span className='md:text-[14.4px]'>admin@gmail.com</span></p>
            <p className="text-[#000d6b] font-semibold">Follow Us</p>

            <div className="social_links flex space-x-7 text-[19.2px]">
              <p><i class="ri-facebook-line"></i></p>
              <p><i class="ri-instagram-line"></i></p>
              <p><i class="ri-linkedin-line"></i></p>
              <p><i class="ri-twitter-line"></i></p>
            </div>
          </div>

        </div>
      </Helmet>
    </>
  )
}
export default Contact