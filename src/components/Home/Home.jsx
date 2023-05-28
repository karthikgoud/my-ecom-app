import Category from "../Category/Category";
import Header from "../Header/Header";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import NewArrivals from "../NewArrivals/NewArrivals";
import "./Home.css";
import Loader from "../Loader/Loader";
import { useData } from "../../context/DataContext";

const Home = () => {
  const {
    productState: { loader },
  } = useData();

  return (
    <div className="home-cont">
      {loader ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <Category />
          <HeroCarousel />
          <NewArrivals />
        </div>
      )}
    </div>
  );
};

export default Home;
