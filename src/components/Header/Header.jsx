import "./Header.css";
import { NavLink } from "react-router-dom";

import {
  faHouse,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "../../context/DataContext";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const { dispatch } = useData();

  return (
    <nav className="nav-container">
      <NavLink
        to="/"
        className="logo-container"
        onClick={() => dispatch({ type: "RESET" })}
      >
        <img
          className="logo"
          src="/images/allinone-logo-crop.jpeg"
          alt="logo"
        />
        <div className="title">All-In-One-Shop</div>
      </NavLink>
      <div className="search-container">
        <FontAwesomeIcon
          className="search-icon"
          icon={faMagnifyingGlass}
          style={{ color: "#999a9a" }}
        />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-right-container">
        <NavLink to="/login">
          <button className="btn-login">Login</button>
        </NavLink>
        <NavLink to="/" onClick={() => dispatch({ type: "RESET" })}>
          <FontAwesomeIcon
            icon={faHouse}
            size="xl"
            style={{ color: "#999a9a" }}
          />
        </NavLink>
        <div className="wishlist-box">
          <span className="red-circle wish-counter">0</span>
          <NavLink to="/wishlist">
            <FontAwesomeIcon
              icon={faHeartRegular}
              size="xl"
              style={{ color: "#999a9a" }}
            />
          </NavLink>
        </div>
        <div className="wishlist-box">
          <span className="red-circle cart-counter">0</span>
          <NavLink className="cart-container" to="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="xl"
              style={{ color: "#999a9a" }}
            />
            <p>Cart</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
