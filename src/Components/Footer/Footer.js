

const Footer = () => {
  return (
    <>
      <div className="bg-[#000d6b] text-white">
        <div className=" md:flex justify-betwee pt-10">
          <div>
            <div className="flex md:ml-[120px] ml-5 space-x-2">
              <p className="text-[40.2px]"><i class="ri-car-line"></i></p>
              <div className="md:text-[24px] text-[1.2rem]">
                <p>Rent Car</p>
                <p>Service</p>
              </div>
            </div>
            <p className="md:ml-[120px] ml-5 mr-20 mt-3 text-gray-500 md:text-[16px] text-[12.8px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex quam veniam, omnis expedita animi quibusdam obcaecati mollitia? Delectus et ad illo recusandae temporibus?</p>
          </div>

          <div className=" md:mr-[150px] md:ml-0 ml-5 md:mt-0 mt-5 md:w-[20%] w-[50%] space-y-3">
            <p className="md:text-[20px] text-[16px]">Quick Links</p>
            <p className="text-gray-500 md:text-[16px] text-[12px] mt-3">About</p>
            <p className="text-gray-500 md:text-[16px] text-[12px]">privacy Policy</p>
            <p className="text-gray-500 md:text-[16px] text-[12px]">Car Listing</p>
            <p className="text-gray-500 md:text-[16px] text-[12px]">Blog</p>
            <p className="text-gray-500 md:text-[16px] text-[12px]">Contact</p>
          </div>

          <div className="mr-[100px] md:ml-0 ml-5 md:mt-0 mt-5 space-y-3">
            <p className="md:text-[20px] text-[16px]">Head Office</p>
            <p className="text-gray-500 md:text-[16px] text-[12px]">Sanepa Kathmandu, Nepal</p>
            <p className="text-gray-500 md:text-[16px] text-[12px]">Phone : +977-9809364854</p>
            <p className="text-gray-500 md:text-[16px] text-[12px]">Email:sahilacc000@gmail.com</p>
            <p className="text-gray-500 md:text-[16px] text-[12px]">office Time: 10am-7pm</p>
          </div>

          <div className="md:mt-0 mt-5 md:ml-0 ml-5 space-y-3">
            <p className="md:text-[20px] text-[16px]">Newsletter</p>
            <p className="text-gray-500 md:text-[16px] text-[12px]">Suscrube our newsletter</p>

            <div className="md:mr-[120px] mr-3 bg-[#020a4de9] rounded-[10px] h-10 flex justify-between ">
              <input className=" outline-none bg-transparent pl-4 py-2 text-[#fff]" type="search" placeholder="Email" />
              <span className="text-gray-500 pr-2 pt-2 cursor-pointer"><i class="ri-send-plane-line"></i></span>
            </div>

          </div>

        </div>


        <div>
          <p className=" flex justify-center py-10 text-[14.4px] text-gray-500"><i class="ri-copyright-line"></i> <span>Copyright 2024, Developed by Muhibur Rahman. All rights reserved </span></p>
        </div>
      </div>
    </>
  )
}
export default Footer