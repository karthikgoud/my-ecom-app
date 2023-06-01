import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import "./Home.css";
import Loader from "../../components/Loader/Loader";
import { useData } from "../../context/DataContext";
import Slider from "../../components/Slider/Slider";
import { NavLink } from "react-router-dom";

const Home = () => {
  const {
    productState: { loader },
    dispatch,
  } = useData();

  return (
    <div className="home-cont">
      {loader ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <div className="carousal-section">
            <div className="carousal-cont">
              <Slider />
            </div>
            <NavLink to="/product" className="btn-shop-now">
              <button onClick={() => dispatch({ type: "RESET" })}>
                SHOP NOW
              </button>
            </NavLink>
          </div>
          <Category />
          <NewArrivals />
        </div>
      )}
    </div>
  );
};

export default Home;
