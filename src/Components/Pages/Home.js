
import { Helmet } from "../Helmet/Helmet"
import FindCarForm from "../UI/FindCarForm"
import HeroSlider from "../UI/HeroSlider"



const Home = () => {
  return (
    <Helmet title="Home">
      <HeroSlider />
      <FindCarForm />
    </Helmet>
  )
}
export default Home