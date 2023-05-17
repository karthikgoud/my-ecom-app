import Category from "../Category/Category";
import Header from "../Header/Header";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import NewArrivals from "../NewArrivals/NewArrivals";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <HeroCarousel />
      <NewArrivals />
    </div>
  );
};

export default Home;
