import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import "./Home.css";
import Loader from "../../components/Loader/Loader";
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
