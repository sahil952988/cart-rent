import Slider from "react-slick"
import "../../Styles/HeroSlider.css"

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <>
      <Slider {...settings} className="w-[100%] md:h-[650px] h-[450px] overflow-hidden">
        <div className="slider__item-01 mt-[-25px]  h-[650px]">
          <div>
            <div className="slider__content md:pl-[120px] pl-5">
              <h4 className="md:text-[24px] text-[20px] text-white md:pt-[200px] pt-[100px]">For Rent $70 Per Day</h4>
              <h1 className="md:text-[51.2px] text-[24px] text-white pt-5">Reserve Now and Get 50% Off</h1>

              <button className="rounded-[8px] bg-white px-2 py-2 text-[#000d6b] mt-5">Reserve Now</button>
            </div>
          </div>
        </div>

        <div className="slider__item-02 mt-[-25px]  h-[650px]">
          <div>
            <div className="slider__content md:pl-[120px] pl-5">
              <h4 className="md:text-[24px] text-[20px] text-white md:pt-[200px] pt-[100px]">For Rent $70 Per Day</h4>
              <h1 className="md:text-[51.2px] text-[24px] text-white pt-5">Reserve Now and Get 50% Off</h1>

              <button className="rounded-[8px] bg-white px-2 py-2 text-[#000d6b] mt-5">Reserve Now</button>
            </div>
          </div>
        </div>

        <div className="slider__item-03 mt-[-25px]  h-[650px]">
          <div>
            <div className="slider__content md:pl-[120px] pl-5">
              <h4 className="md:text-[24px] text-[20px] text-white md:pt-[200px] pt-[100px]">For Rent $70 Per Day</h4>
              <h1 className="md:text-[51.2px] text-[24px] text-white pt-5">Reserve Now and Get 50% Off</h1>

              <button className="rounded-[8px] bg-white px-2 py-2 text-[#000d6b] mt-5">Reserve Now</button>
            </div>
          </div>
        </div>

      </Slider>
    </>
  )
}
export default HeroSlider