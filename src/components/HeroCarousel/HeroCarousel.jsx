import { NavLink } from "react-router-dom";
import "./HeroCarousel.css";
import { useData } from "../../context/DataContext";

const HeroCarousel = () => {
  const { dispatch } = useData();

  return (
    <div className="hero-container">
      <img src="images/hero-img-1.jpg" alt="hero-image" />
      <NavLink className="btn-shop-now" to="/product">
        <button onClick={() => dispatch({ type: "RESET" })}>Shop Now</button>
      </NavLink>
    </div>
  );
};

export default HeroCarousel;
