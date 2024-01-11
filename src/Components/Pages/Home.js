
import { Helmet } from "../Helmet/Helmet"
import AboutSection from "../UI/AboutSection"
import FindCarForm from "../UI/FindCarForm"
import HeroSlider from "../UI/HeroSlider"
import { ServiceList } from "../UI/ServiceList"



const Home = () => {
  return (
    <Helmet title="Home">
      <HeroSlider />
      <FindCarForm />
      <section className="md:pt-40 pt-10">
        <AboutSection />
      </section>

      <div className="flex justify-center md:mt-20">
        <div>
          <p className="text-[#f9a826] md:text-[19px] ml-16 ">See Our</p>
          <p className="md:text-[24px] text-[25px] text-[#000d6b]">Popular Services</p>
        </div>
      </div>
      <section className="md:grid md:grid-cols-3 md:gap-4 space-y-5 md:mt-10 mt-5">
        <ServiceList />
      </section>
    </Helmet>
  )
}
export default Home