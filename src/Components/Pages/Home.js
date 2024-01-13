
import blogData from "../../assets/data/blogData"
import carData from "../../assets/data/carData"
import { Helmet } from "../Helmet/Helmet"
import AboutSection from "../UI/AboutSection"
import BecomeDriver from "../UI/BecomeDriver"
import BlogList from "../UI/BlogList"
import CarItem from "../UI/CarItem"
import FindCarForm from "../UI/FindCarForm"
import HeroSlider from "../UI/HeroSlider"
import { ServiceList } from "../UI/ServiceList"
import Testimonial from "../UI/Testimonial"



const Home = () => {
  return (
    <Helmet title="Home">
      <HeroSlider />
      <FindCarForm />
      <section className="md:pt-40 pt-10">
        <AboutSection />
      </section>

      {/* ========== POPULAR SERVICES ============== */}
      <div className="flex justify-center md:mt-20">
        <div>
          <p className="text-[#f9a826] md:text-[19px] ml-16 ">See Our</p>
          <p className="md:text-[32px] text-[25px] font-semibold text-[#000d6b]">Popular Services</p>
        </div>
      </div>
      <section className="md:grid md:grid-cols-3 md:gap-4 space-y-5 md:mt-10 mt-5">
        <ServiceList />
      </section>

      {/* ================= CAR INFO ==================== */}
      <div className="flex justify-center md:mt-20 mt-16">
        <div>
          <p className="text-[#f9a826] md:text-[19px] ml-8 ">Come with</p>
          <p className="md:text-[32px] text-[25px] font-semibold text-[#000d6b] mb-10">Hot Offers</p>
        </div>
      </div>
      <section className="md:grid md:grid-cols-3 gap-6 md:ml-[120px] md:mr-[120px]">
        {carData.slice(0, 6).map((item, index) => {
          return (
            <CarItem item={item} />
          )
        })}
      </section>

      {/* ======================= Become Driver ================= */}

      <BecomeDriver />


      {/* ======================= TESTINOMIAL ==================== */}

      <div className="flex justify-center md:mt-20 mt-16">
        <div>
          <p className="text-[#f9a826] md:text-[19px] md:ml-6 ml-4 ">Our Client Says</p>
          <p className="md:text-[32px] text-[25px] font-semibold text-[#000d6b] mb-10">Testimonial</p>
        </div>
      </div>
      <Testimonial />

      {/* =================== BLOGS ================================= */}
      <div className="flex justify-center md:mt-20 mt-16">
        <div>
          <p className="text-[#f9a826] md:text-[19px]  ml-4 ">Explore Our Blogs</p>
          <p className="md:text-[32px] text-[25px] font-semibold text-[#000d6b] mb-10">Latest Blogs</p>
        </div>
      </div>

      <section className="md:flex md:ml-[120px] ml-5 md:mr-[120px] mr-5 gap-7 ">
        {blogData.map((item) => {
          return (
            <BlogList item={item} />
          )
        })}
      </section>




    </Helmet>
  )
}
export default Home